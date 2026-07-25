# Spilwerk — genereer print-ready PDF's uit de preview.html-bestanden
#
# Gebruik vanuit de repo-root (of gewoon dubbelklikken):
#   .\marketing\generate-pdfs.ps1
#
# Vereist: Microsoft Edge (zit standaard op Windows 10/11).
#
# Output:
#   marketing/visitekaartje/visitekaartje.pdf  (2 pagina's: voor + achter, 91x61mm met bleed)
#   marketing/flyer/flyer.pdf                  (1 pagina A6 staand, 111x154mm met bleed)
#
# Gebruik deze PDF's direct bij Drukwerkdeal of Vistaprint — geen verdere conversie nodig.

$ErrorActionPreference = 'Stop'

# Vind Edge (probeer beide standaard-locaties)
$edgeCandidates = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles}\Microsoft\Edge\Application\msedge.exe"
)
$edge = $edgeCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { Write-Error "Microsoft Edge niet gevonden. Installeer Edge of pas dit script aan."; exit 1 }

# Repo-root = parent van scripts-dir (marketing/)
$repo = Split-Path -Parent $PSScriptRoot

# Conversie-jobs
$jobs = @(
  @{
    Name = 'Visitekaartje (voor + achter)'
    Html = "$repo\marketing\visitekaartje\preview.html"
    Pdf  = "$repo\marketing\visitekaartje\visitekaartje.pdf"
  },
  @{
    Name = 'Flyer A6'
    Html = "$repo\marketing\flyer\preview.html"
    Pdf  = "$repo\marketing\flyer\flyer.pdf"
  }
)

foreach ($job in $jobs) {
  $url = "file:///$(($job.Html) -replace '\\','/')"
  $tmp = Join-Path $env:TEMP "edge-pdf-$([guid]::NewGuid().ToString('N'))"

  Write-Host "→ $($job.Name)..." -ForegroundColor Cyan

  $args = @(
    '--headless',
    '--disable-gpu',
    "--user-data-dir=$tmp",
    '--no-pdf-header-footer',
    "--print-to-pdf=$($job.Pdf)",
    $url
  )
  $proc = Start-Process -FilePath $edge -ArgumentList $args -Wait -PassThru -WindowStyle Hidden

  if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue }

  if ($proc.ExitCode -ne 0 -or -not (Test-Path $job.Pdf)) {
    Write-Error "Conversie mislukt voor $($job.Name) (exit $($proc.ExitCode))"
    exit 1
  }

  $size = [math]::Round((Get-Item $job.Pdf).Length / 1KB, 1)
  Write-Host "  ✓ $($job.Pdf) ($size KB)" -ForegroundColor Green
}

Write-Host ""
Write-Host "Klaar. Upload de PDF's direct bij de drukker:" -ForegroundColor Yellow
Write-Host "  • Drukwerkdeal: drukwerkdeal.nl/visitekaartjes en /flyers"
Write-Host "  • Vistaprint:   vistaprint.nl/visitekaartjes en /flyers-folders"
