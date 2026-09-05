// Spilwerk — simpel boeken (3 stappen, geen kalender-grid)
// Stap 1: soort (aan huis / op afstand)  2: dag (6 grote knoppen)  3: tijd + gegevens → mailto + ics + gcal
(() => {
  const CONFIG = {
    email: 'spillwerk@gmail.com',
    phone: '06-87433537',
    phoneLink: '+31687433537',
    onsiteDays: [0, 3, 4, 6],        // zo, wo, do, za — aan huis 08-19 (full)
    onsiteDaysEvening: [1,2,5],       // ma, di, vr — aan huis vanaf 17:00
    onsiteHours: [8,9,10,11,12,13,14,15,16,17,18,19], // 08-20 op locatie (full days)
    onsiteHoursEvening: [17,18,19],   // doordeweeks 17-20 op locatie
    remoteHours: [18,19],            // elke dag 18-20 op afstand
    icsProdId: '-//Spilwerk//Afspraak//NL',
  };
  const SERVICE_LABELS = {
    computer: 'Computer-hulp', wifi: 'Wifi & internet', telefoon: 'Telefoon & tablet',
    veilig: 'Veilig online & backup', zakelijk: 'Voor zelfstandigen / zakelijk',
  };
  const DAY_LABELS = ['zo','ma','di','wo','do','vr','za'];
  const DAY_LABELS_LONG = ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];

  const pad = n => String(n).padStart(2,'0');
  const fmtISO = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  const fmtNL = d => d.toLocaleDateString('nl-NL',{weekday:'long',day:'numeric',month:'long'});
  const fmtTime = h => `${pad(h)}:00`;

  function isOnSiteDay(dow){ return CONFIG.onsiteDays.includes(dow) || CONFIG.onsiteDaysEvening.includes(dow); }
  function isFullOnsiteDay(dow){ return CONFIG.onsiteDays.includes(dow); }
  function isEveningOnsiteDay(dow){ return CONFIG.onsiteDaysEvening.includes(dow); }

  // Volgende 6 beschikbare dagen: eerst za/zo/wo, daarna overige dagen (remote-only) als opvulling
  function nextAvailableDays(n){
    const out=[]; const today=new Date(); today.setHours(0,0,0,0);
    const d=new Date(today); d.setDate(d.getDate()+1); // vanaf morgen
    // sorteer-voorkeur: onsite-dagen eerst, binnen 21 dagen zoeken
    for(let i=0;i<30 && out.length<n;i++,d.setDate(d.getDate()+1)){
      const dow=d.getDay();
      // elke dag is boekbaar (remote kan altijd 18-20), dus gewoon elke dag aanbieden
      // maar onsite-dagen krijgen voorrang in label
      out.push(new Date(d));
    }
    // herschik: onsite-dagen eerst
    out.sort((a,b)=>{
      const ao=isOnSiteDay(a.getDay())?0:1, bo=isOnSiteDay(b.getDay())?0:1;
      if(ao!==bo) return ao-bo;
      return a-b;
    });
    // neem weer op datumvolgorde na herschik? Nee — we willen chronologisch maar onsite eerst voelen.
    // Beter: gewoon chronologisch tonen, maar onsite visueel markeren. Dus opnieuw sort op datum:
    out.sort((a,b)=>a-b);
    return out.slice(0,n);
  }

  function hoursFor(date, kind){
    const dow = date.getDay();
    const full = isFullOnsiteDay(dow);
    const evening = isEveningOnsiteDay(dow);
    const onsiteHours = full ? CONFIG.onsiteHours : (evening ? CONFIG.onsiteHoursEvening : []);
    if(kind==='remote') return CONFIG.remoteHours.map(h=>({hour:h,kind:'remote',label:`${fmtTime(h)} · op afstand`}));
    if(kind==='onsite') return onsiteHours.map(h=>({hour:h,kind:'onsite',label:fmtTime(h)}));
    // beide: toon onsite 08-19 + remote 19 alleen als niet al gedekt (18 overlap)
    const onsite = onsiteHours.map(h=>({hour:h,kind:'onsite',label:fmtTime(h)}));
    const remoteExtra = CONFIG.remoteHours.filter(h=>!CONFIG.onsiteHours.includes(h)).map(h=>({hour:h,kind:'remote',label:`${fmtTime(h)} · op afstand`}));
    return [...onsite, ...remoteExtra];
  }

  function buildICS({name,email,phone,service,address,description,dateISO,hour,kind}){
    const d=new Date(dateISO+'T00:00:00');
    const dt = (h)=> `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}T${pad(h)}0000`;
    const now=new Date();
    const dtStamp=`${now.getUTCFullYear()}${pad(now.getUTCMonth()+1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;
    const uid=`spilwerk-${Date.now()}@spilwerk.nl`;
    const summary=`Spilwerk \u2014 ${SERVICE_LABELS[service]||service} (${kind==='remote'?'op afstand':'aan huis'})`;
    const desc=`Klant: ${name}\\nEmail: ${email}\\nTel: ${phone}\\nDienst: ${SERVICE_LABELS[service]||service}\\nAdres: ${address||'(op afstand)'}\\n\\nVraag:\\n${description||'-'}`.replace(/\n/g,'\\n');
    const loc = kind==='remote' ? 'Op afstand (videocall/TeamViewer)' : (address||'Aan huis');
    return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:'+CONFIG.icsProdId,'CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',`UID:${uid}`,`DTSTAMP:${dtStamp}`,`DTSTART;TZID=Europe/Amsterdam:${dt(hour)}`,`DTEND;TZID=Europe/Amsterdam:${dt(hour+1)}`,`SUMMARY:${summary}`,`DESCRIPTION:${desc}`,`LOCATION:${loc}`,'STATUS:CONFIRMED','END:VEVENT','END:VCALENDAR'].join('\r\n');
  }
  function gcalUrl({service,address,description,dateISO,hour,kind}){
    const d=new Date(dateISO+'T00:00:00');
    const y=d.getFullYear(), m=pad(d.getMonth()+1), day=pad(d.getDate()), sH=pad(hour), eH=pad(hour+1);
    const dates=`${y}${m}${day}T${sH}0000/${y}${m}${day}T${eH}0000`;
    const title=`Spilwerk \u2014 ${SERVICE_LABELS[service]||service} (${kind==='remote'?'op afstand':'aan huis'})`;
    const details=`Dienst: ${SERVICE_LABELS[service]||service}\nType: ${kind==='remote'?'Op afstand (18:00\u201320:00)':'Aan huis'}\nAdres: ${address||'(op afstand)'}\n\nVraag:\n${description||'-'}`;
    const loc = kind==='remote' ? 'Op afstand' : (address||'');
    return `https://calendar.google.com/calendar/render?${new URLSearchParams({action:'TEMPLATE',text:title,details,location:loc,dates})}`;
  }
  function downloadICS(ics, filename){
    const blob=new Blob([ics],{type:'text/calendar;charset=utf-8'});
    const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=filename; a.click();
    setTimeout(()=>URL.revokeObjectURL(url),2000);
  }

  function init(root){
    if(!root || root._bkInit) return; root._bkInit=true;
    const dayWrap = root.querySelector('[data-bk-days]');
    const timeWrap = root.querySelector('[data-bk-times]');
    const timeHead = root.querySelector('[data-bk-time-head]');
    const kindInputs = root.querySelectorAll('input[name=\"bk-kind\"]');
    const form = root.querySelector('form[data-booking]');
    const dateISOInput = root.querySelector('input[name=\"dateISO\"]');
    const hourInput = root.querySelector('input[name=\"hour\"]');
    const kindInput = root.querySelector('input[name=\"kind\"]');
    const summaryEl = root.querySelector('[data-bk-summary]');
    const successEl = root.querySelector('[data-bk-success]');
    const addressField = root.querySelector('[name=\"address\"]');
    const addressLabel = root.querySelector('[data-address-label]');
    const addressText = root.querySelector('[data-address-text]');

    let selectedKind = 'onsite'; // 'onsite' | 'remote'
    let selectedDate = null;     // Date
    let selectedHour = null;     // number
    let selectedKindForSlot = null;

    function currentKind(){
      const c = root.querySelector('input[name=\"bk-kind\"]:checked');
      return c ? c.value : 'onsite';
    }

    function renderDays(){
      if(!dayWrap) return;
      dayWrap.innerHTML='';
      const days = nextAvailableDays(6);
      days.forEach(d=>{
        const dow=d.getDay();
        const full=isFullOnsiteDay(dow); const evening=isEveningOnsiteDay(dow); const onsite=full||evening;
        const btn=document.createElement('button');
        btn.type='button';
        btn.className='bk-day'+(onsite?' is-onsite':' is-remote-only')+(selectedDate && fmtISO(d)===fmtISO(selectedDate)?' is-selected':'');
        // Grote ronde knop
        btn.innerHTML=`<span class="bk-day-wd">${DAY_LABELS[dow]}</span><span class="bk-day-nr">${d.getDate()}</span><span class="bk-day-mo">${d.toLocaleDateString('nl-NL',{month:'short'})}</span>${full?'<span class="bk-day-badge">aan huis</span>':(evening?'<span class="bk-day-badge">vanaf 17:00</span>':'<span class="bk-day-badge is-remote">op afstand</span>')}`;
        btn.setAttribute('aria-label', fmtNL(d) + (full?' — aan huis 08:00–19:00 + remote 18:00–20:00':(evening?' — aan huis vanaf 17:00 + op afstand 18:00–20:00':' — alleen op afstand 18:00–20:00')));
        btn.setAttribute('aria-pressed', selectedDate && fmtISO(d)===fmtISO(selectedDate) ? 'true':'false');
        btn.addEventListener('click',()=>{
          selectedDate=new Date(d); selectedHour=null; selectedKindForSlot=null;
          renderDays(); renderTimes(); updateSummary();
        });
        dayWrap.appendChild(btn);
      });
      // Alternatief: datumkiezer voor wie verder wil plannen
      const alt=document.createElement('div');
      alt.className='bk-days-alt';
      alt.innerHTML=`<label>Andere datum: <input type="date" data-bk-alt-date min="${fmtISO(new Date(Date.now()+86400000))}" /></label>`;
      const altInput=alt.querySelector('input');
      altInput.addEventListener('change',()=>{
        if(!altInput.value) return;
        const d=new Date(altInput.value+'T00:00:00');
        if(isNaN(d)) return;
        selectedDate=d; selectedHour=null; selectedKindForSlot=null;
        renderDays(); renderTimes(); updateSummary();
        // markeer geen day-knop meer als geselecteerd, maar toon gekozen datum in summary
      });
      dayWrap.appendChild(alt);
    }

    function renderTimes(){
      if(!timeWrap) return;
      timeWrap.innerHTML='';
      if(!selectedDate){
        if(timeHead) timeHead.textContent='Kies eerst een dag hierboven.';
        timeWrap.innerHTML='<p class="bk-hint">Kies een dag — dan zie je hier de tijden.</p>';
        return;
      }
      const kind = currentKind();
      const dow=selectedDate.getDay();
      const fullDay=isFullOnsiteDay(dow); const eveningDay=isEveningOnsiteDay(dow); const onsiteAvailable=fullDay||eveningDay;
      let list;
      if(kind==='onsite' && !onsiteAvailable){
        if(timeHead) timeHead.innerHTML=`<strong>${fmtNL(selectedDate)}</strong> — op deze dag alleen op afstand (18:00\u201320:00).`;
        list = hoursFor(selectedDate,'remote');
      } else if(kind==='onsite'){
        if(timeHead) timeHead.innerHTML= fullDay ? `<strong>${fmtNL(selectedDate)}</strong> — aan huis 08:00\u201319:00 (en 18:00\u201320:00 ook op afstand)` : `<strong>${fmtNL(selectedDate)}</strong> — aan huis vanaf 17:00 (17:00\u201319:00) + op afstand 18:00\u201320:00`;
        list = hoursFor(selectedDate,'onsite');
        // voeg 19:00 remote nog toe als extra
        if(!list.some(s=>s.hour===19)) list.push({hour:19,kind:'remote',label:`${fmtTime(19)} · op afstand`});
      } else {
        if(timeHead) timeHead.innerHTML=`<strong>${fmtNL(selectedDate)}</strong> — op afstand 18:00\u201320:00`;
        list = hoursFor(selectedDate,'remote');
      }
      list.forEach(s=>{
        const btn=document.createElement('button');
        btn.type='button';
        btn.className='bk-slot'+(s.kind==='remote'?' is-remote':'')+(selectedHour===s.hour && selectedKindForSlot===s.kind?' is-selected':'');
        btn.dataset.hour=String(s.hour); btn.dataset.kind=s.kind;
        btn.innerHTML=`<span class="bk-slot-time">${s.label}</span><span class="bk-slot-kind">${s.kind==='remote'?'Op afstand':'Aan huis'}</span>`;
        btn.addEventListener('click',()=>{
          selectedHour=s.hour; selectedKindForSlot=s.kind;
          timeWrap.querySelectorAll('.bk-slot').forEach(b=>b.classList.remove('is-selected'));
          btn.classList.add('is-selected');
          updateSummary();
        });
        timeWrap.appendChild(btn);
      });
    }

    function updateSummary(){
      const kind = currentKind();
      const isRemote = (selectedKindForSlot==='remote') || (!selectedKindForSlot && kind==='remote');
      if(addressField){
        if(isRemote){ addressField.removeAttribute('required'); if(addressText) addressText.innerHTML='Adres <span class="bk-optional">(niet nodig voor op afstand)</span>'; else if(addressLabel) addressLabel.innerHTML='Adres <span class="bk-optional">(niet nodig voor op afstand)</span>'; addressField.placeholder='Alleen bij aan huis nodig'; addressField.style.display=''; if(addressLabel) addressLabel.style.display=''; }
        else { addressField.setAttribute('required',''); if(addressText) addressText.textContent='Adres *'; else if(addressLabel) addressLabel.textContent='Adres *'; addressField.placeholder='Straat, huisnr, plaats'; }
      }
      if(summaryEl){
        if(selectedDate && selectedHour!=null){
          summaryEl.textContent=`${fmtNL(selectedDate)} om ${fmtTime(selectedHour)} · ${selectedKindForSlot==='remote'?'op afstand':'aan huis'}`;
          summaryEl.classList.add('has-value');
        } else if(selectedDate){
          summaryEl.textContent=`${fmtNL(selectedDate)} \u2014 kies nog een tijd`;
          summaryEl.classList.remove('has-value');
        } else {
          summaryEl.textContent='Nog geen dag gekozen';
          summaryEl.classList.remove('has-value');
        }
      }
      if(dateISOInput) dateISOInput.value = selectedDate ? fmtISO(selectedDate) : '';
      if(hourInput) hourInput.value = selectedHour!=null ? String(selectedHour) : '';
      if(kindInput) kindInput.value = selectedKindForSlot || kind;
    }

    kindInputs.forEach(r=>r.addEventListener('change',()=>{ renderTimes(); updateSummary(); }));
    renderDays(); renderTimes(); updateSummary();

    if(form){
      form.addEventListener('submit',(ev)=>{
        ev.preventDefault();
        if(!selectedDate || selectedHour==null){
          alert('Kies eerst een dag en een tijd hierboven.');
          return;
        }
        const fd=new FormData(form);
        const data={
          name:(fd.get('name')||'').toString().trim(),
          email:(fd.get('email')||'').toString().trim(),
          phone:(fd.get('phone')||'').toString().trim(),
          service:(fd.get('service')||'').toString(),
          address:(fd.get('address')||'').toString().trim(),
          description:(fd.get('description')||'').toString().trim(),
          dateISO: fmtISO(selectedDate),
          hour: selectedHour,
          kind: selectedKindForSlot || currentKind(),
        };
        if(!data.name || !data.email || !data.phone || !data.service || !data.description){
          alert('Vul alle verplichte velden in.'); return;
        }
        if(data.kind!=='remote' && !data.address){
          alert('Vul je adres in \u2014 dit is een afspraak aan huis.'); return;
        }
        const serviceLabel=SERVICE_LABELS[data.service]||data.service;
        const when=`${fmtNL(selectedDate)} om ${fmtTime(data.hour)} (${data.kind==='remote'?'op afstand':'aan huis'})`;
        const subject=`Spilwerk \u2014 afspraakverzoek: ${serviceLabel} op ${data.dateISO} ${fmtTime(data.hour)}`;
        const body=[`Hallo Emmanuel,`,`Ik wil graag een afspraak plannen via spilwerk.nl:`,`Naam: ${data.name}`,`E-mail: ${data.email}`,`Telefoon: ${data.phone}`,`Dienst: ${serviceLabel}`,`Voorkeursmoment: ${when}`,`Type: ${data.kind==='remote'?'Hulp op afstand (18:00\u201320:00)':'Aan huis'}`,`Adres: ${data.address||'(op afstand)'}`,`Probleem / vraag:`,`${data.description}`,`\u2014 verstuurd via spilwerk.nl/boeken`].join('\n');
        const mailto=`mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        const gUrl=gcalUrl(data);
        const icsName=`spilwerk-afspraak-${data.dateISO}-${pad(data.hour)}00.ics`;
        if(successEl){
          successEl.hidden=false;
          successEl.innerHTML=`<h3>\u2713 Aanvraag klaar \u2014 nog \u00e9\u00e9n klik</h3><p>Klik hieronder om je mailprogramma te openen. Daarna bevestig ik per mail of WhatsApp.</p><div class="bk-success-actions"><a class="btn btn-primary" href="${mailto}">Open e-mail naar ${CONFIG.email}</a><a class="btn btn-secondary" href="${gUrl}" target="_blank" rel="noopener">Toevoegen aan Google Calendar</a><button type="button" class="btn btn-secondary" data-dl-ics>Download .ics</button></div><p class="bk-success-meta">Gekozen: <b>${when}</b> \u00b7 ${serviceLabel}</p>`;
          const dlBtn=successEl.querySelector('[data-dl-ics]');
          if(dlBtn) dlBtn.addEventListener('click',()=> downloadICS(buildICS(data), icsName));
          successEl.scrollIntoView({behavior:'smooth',block:'nearest'});
        }
        setTimeout(()=>{ window.location.href=mailto; }, 400);
      });
    }
  }

  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('[data-booking-root], #booking-root').forEach(init);
    window.SpilwerkBooking={ CONFIG, buildICS, gcalUrl };
  });
})();
