// Spilwerk — static booking widget (no backend)
// Availability: Za/Zo 09-17 on-site, Wo 09-17 on-site (configurable), elke dag 18-20 remote only
// Stores demo bookings in localStorage; submit = mailto + .ics download
(() => {
  const CONFIG = {
    email: 'spillwerk@gmail.com',
    weekdayOnSite: 3,
    weekdayLabel: 'woensdag',
    onsiteDays: [0, 3, 6],
    onsiteHoursFull: [8,9,10,11,12,13,14,15,16,17,18],
    remoteHours: [18,19],
    weeksAhead: 6,
    storageKey: 'spilwerk_bookings',
    icsProdId: '-//Spilwerk//Afspraak//NL',
  };
  const SERVICE_LABELS = {
    computer: 'Computer-hulp',
    wifi: 'Wifi & internet',
    telefoon: 'Telefoon & tablet',
    veilig: 'Veilig online & backup',
    zakelijk: 'Voor zelfstandigen / zakelijk',
  };
  const pad = n => String(n).padStart(2,'0');
  const fmtDateISO = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  const fmtDateNL = d => d.toLocaleDateString('nl-NL', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
  const fmtTime = h => `${pad(h)}:00`;
  function getBookings(){ try{ return JSON.parse(localStorage.getItem(CONFIG.storageKey)||'[]'); }catch{ return []; } }
  function saveBooking(b){ const a=getBookings(); a.push(b); localStorage.setItem(CONFIG.storageKey, JSON.stringify(a)); }
  function slotKey(dateISO, hour){ return `${dateISO}T${pad(hour)}:00`; }
  function bookedSet(){ return new Set(getBookings().map(b=>slotKey(b.dateISO,b.hour))); }
  function isOnSiteDay(dow){ return CONFIG.onsiteDays.includes(dow); }
  function slotsForDate(date){
    const dow = date.getDay();
    const iso = fmtDateISO(date);
    const booked = bookedSet();
    const slots=[];
    const onsiteSet = new Set();
    if(isOnSiteDay(dow)){
      for(const h of CONFIG.onsiteHoursFull){
        slots.push({ hour:h, label:fmtTime(h), kind:'onsite', iso, available:!booked.has(slotKey(iso,h)) });
        onsiteSet.add(h);
      }
    }
    for(const h of CONFIG.remoteHours){
      if(onsiteSet.has(h)) continue; // avoid duplicate hour on onsite days (08-19 onsite already covers 18:00)
      slots.push({ hour:h, label:fmtTime(h)+' \u00b7 remote', kind:'remote', iso, available:!booked.has(slotKey(iso,h)) });
    }
    return slots;
  }
  function isDateAvailable(date){
    const today = new Date(); today.setHours(0,0,0,0);
    if(date < today) return false;
    const slots=slotsForDate(date);
    return slots.some(s=>s.available);
  }
  function buildCalendar(container, onPick){
    let cursor = new Date(); cursor.setDate(1); cursor.setHours(0,0,0,0);
    const today = new Date(); today.setHours(0,0,0,0);
    function render(){
      container.innerHTML='';
      const head=document.createElement('div');
      head.className='bk-cal-head';
      const title=document.createElement('div');
      title.className='bk-cal-title';
      title.textContent=cursor.toLocaleDateString('nl-NL',{month:'long',year:'numeric'});
      const prev=document.createElement('button'); prev.type='button'; prev.className='bk-cal-nav'; prev.textContent='\u2039'; prev.setAttribute('aria-label','Vorige maand');
      const next=document.createElement('button'); next.type='button'; next.className='bk-cal-nav'; next.textContent='\u203A'; next.setAttribute('aria-label','Volgende maand');
      const max=new Date(); max.setDate(max.getDate()+CONFIG.weeksAhead*7);
      prev.disabled = cursor.getMonth()===today.getMonth() && cursor.getFullYear()===today.getFullYear();
      const nextMonth=new Date(cursor); nextMonth.setMonth(nextMonth.getMonth()+1);
      next.disabled = nextMonth > max;
      prev.addEventListener('click',()=>{ cursor.setMonth(cursor.getMonth()-1); render(); });
      next.addEventListener('click',()=>{ cursor.setMonth(cursor.getMonth()+1); render(); });
      head.append(prev,title,next);
      container.appendChild(head);
      const weekdays=['Ma','Di','Wo','Do','Vr','Za','Zo'];
      const wdRow=document.createElement('div'); wdRow.className='bk-cal-weekdays';
      weekdays.forEach(w=>{ const s=document.createElement('span'); s.textContent=w; wdRow.appendChild(s); });
      container.appendChild(wdRow);
      const grid=document.createElement('div'); grid.className='bk-cal-grid';
      const year=cursor.getFullYear(), month=cursor.getMonth();
      const firstDow=(new Date(year,month,1).getDay()+6)%7;
      const daysInMonth=new Date(year,month+1,0).getDate();
      for(let i=0;i<firstDow;i++){ const e=document.createElement('span'); e.className='bk-cal-empty'; grid.appendChild(e); }
      for(let d=1; d<=daysInMonth; d++){
        const date=new Date(year,month,d);
        const btn=document.createElement('button');
        btn.type='button';
        btn.className='bk-cal-day';
        btn.textContent=String(d);
        const dow=date.getDay();
        const isAvail=isDateAvailable(date);
        const isPast=date < today;
        const isOnSite=isOnSiteDay(dow);
        if(isPast || !isAvail) btn.disabled=true;
        else btn.classList.add('is-available');
        if(isOnSite && isAvail) btn.classList.add('is-onsite');
        if(!isOnSite && isAvail) btn.classList.add('is-remote-only');
        if(container._selectedISO===fmtDateISO(date)) btn.classList.add('is-selected');
        if(!btn.disabled){
          btn.addEventListener('click',()=>{
            container._selectedISO=fmtDateISO(date);
            container._selectedDate=new Date(date);
            render();
            onPick(new Date(date));
          });
        }
        if(isAvail && !isPast){
          const dot=document.createElement('span'); dot.className='bk-cal-dot '+(isOnSite?'dot-onsite':'dot-remote');
          btn.appendChild(dot);
        }
        grid.appendChild(btn);
      }
      container.appendChild(grid);
      const legend=document.createElement('div'); legend.className='bk-cal-legend';
      legend.innerHTML='<span><i class="dot dot-onsite"></i> aan huis (09\u201317)</span><span><i class="dot dot-remote"></i> alleen remote (18\u201320)</span>';
      container.appendChild(legend);
    }
    render();
  }
  function renderSlots(slotContainer, date, onSlotPick){
    slotContainer.innerHTML='';
    if(!date){ slotContainer.innerHTML='<p class="bk-hint">Kies eerst een datum links.</p>'; return; }
    const slots=slotsForDate(date);
    const heading=document.createElement('div');
    heading.className='bk-slots-head';
    heading.innerHTML=`<strong>${fmtDateNL(date)}</strong><span class="bk-slots-sub">${isOnSiteDay(date.getDay())?'Aan huis 08:00\u201319:00 + remote 18:00\u201320:00':'Alleen remote 18:00\u201320:00'}</span>`;
    slotContainer.appendChild(heading);
    const grid=document.createElement('div'); grid.className='bk-slots-grid';
    slots.forEach(s=>{
      const btn=document.createElement('button');
      btn.type='button';
      btn.className='bk-slot'+(s.kind==='remote'?' is-remote':'')+(s.available?'':' is-booked');
      btn.disabled=!s.available;
      btn.dataset.hour=String(s.hour);
      btn.dataset.kind=s.kind;
      btn.innerHTML=`<span class="bk-slot-time">${s.label}</span><span class="bk-slot-kind">${s.kind==='remote'?'Op afstand':'Aan huis'}</span>`;
      if(s.available){
        btn.addEventListener('click',()=>{
          grid.querySelectorAll('.bk-slot').forEach(b=>b.classList.remove('is-selected'));
          btn.classList.add('is-selected');
          onSlotPick(s);
        });
      } else {
        btn.title='Al bezet (demo)';
      }
      grid.appendChild(btn);
    });
    slotContainer.appendChild(grid);
    if(slots.filter(s=>s.available).length===0){
      const p=document.createElement('p'); p.className='bk-hint'; p.textContent='Geen plekken meer op deze dag \u2014 kies een andere datum.';
      slotContainer.appendChild(p);
    }
  }
  function buildICS({name,email,phone,service,address,description,dateISO,hour,kind}){
    const pad2=n=>String(n).padStart(2,'0');
    const d=new Date(dateISO+'T00:00:00');
    const dtStart=`${d.getFullYear()}${pad2(d.getMonth()+1)}${pad2(d.getDate())}T${pad2(hour)}0000`;
    const dtEnd=`${d.getFullYear()}${pad2(d.getMonth()+1)}${pad2(d.getDate())}T${pad2(hour+1)}0000`;
    const now=new Date();
    const dtStamp=`${now.getUTCFullYear()}${pad2(now.getUTCMonth()+1)}${pad2(now.getUTCDate())}T${pad2(now.getUTCHours())}${pad2(now.getUTCMinutes())}${pad2(now.getUTCSeconds())}Z`;
    const uid=`spilwerk-${Date.now()}@spilwerk.nl`;
    const summary=`Spilwerk \u2014 ${SERVICE_LABELS[service]||service} (${kind==='remote'?'remote':'aan huis'})`;
    const desc=`Klant: ${name}\\nEmail: ${email}\\nTel: ${phone}\\nDienst: ${SERVICE_LABELS[service]||service}\\nAdres: ${address||'(remote)'}\\n\\nProbleem:\\n${description||'-'}`.replace(/\n/g,'\\n');
    const loc = kind==='remote' ? 'Op afstand (videocall/TeamViewer)' : (address||'Aan huis');
    return [
      'BEGIN:VCALENDAR','VERSION:2.0','PRODID:'+CONFIG.icsProdId,'CALSCALE:GREGORIAN','METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${uid}`,`DTSTAMP:${dtStamp}`,`DTSTART;TZID=Europe/Amsterdam:${dtStart}`,`DTEND;TZID=Europe/Amsterdam:${dtEnd}`,
      `SUMMARY:${summary}`,`DESCRIPTION:${desc}`,`LOCATION:${loc}`,`STATUS:CONFIRMED`,
      'END:VEVENT','END:VCALENDAR'
    ].join('\r\n');
  }
  function googleCalendarUrl({service,address,description,dateISO,hour,kind}){
    const pad2=n=>String(n).padStart(2,'0');
    const d=new Date(dateISO+'T00:00:00');
    const y=d.getFullYear(), m=pad2(d.getMonth()+1), day=pad2(d.getDate());
    const sH=pad2(hour), eH=pad2(hour+1);
    // Google expects UTC or local with TZ — use Europe/Amsterdam as floating, format YYYYMMDDTHHMMSS
    const dates=`${y}${m}${day}T${sH}0000/${y}${m}${day}T${eH}0000`;
    const title=`Spilwerk — ${SERVICE_LABELS[service]||service} (${kind==='remote'?'remote':'aan huis'})`;
    const details=`Dienst: ${SERVICE_LABELS[service]||service}\nType: ${kind==='remote'?'Op afstand (18:00-20:00)':'Aan huis'}\nAdres: ${address||'(remote)'}\n\nProbleem:\n${description||'-'}`.replace(/\n/g,'\n');
    const loc = kind==='remote' ? 'Op afstand (videocall/TeamViewer)' : (address||'');
    const params = new URLSearchParams({action:'TEMPLATE',text:title,details,location:loc,dates});
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }
  function downloadICS(ics, filename){
    const blob=new Blob([ics],{type:'text/calendar;charset=utf-8'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a'); a.href=url; a.download=filename; a.click();
    setTimeout(()=>URL.revokeObjectURL(url),2000);
  }
  function initBooking(root){
    if(!root || root._bkInit) return;
    root._bkInit=true;
    const calEl=root.querySelector('[data-bk-calendar]');
    const slotsEl=root.querySelector('[data-bk-slots]');
    const form=root.querySelector('form[data-booking]');
    const dateInput=root.querySelector('input[name="dateISO"]');
    const hourInput=root.querySelector('input[name="hour"]');
    const kindInput=root.querySelector('input[name="kind"]');
    const dateDisplay=root.querySelector('[data-bk-date-display]');
    const weekdayNote=root.querySelector('[data-weekday-note]');
    if(weekdayNote) weekdayNote.textContent=CONFIG.weekdayLabel;
    let selectedDate=null;
    let selectedSlot=null;
    const addressField=root.querySelector('[name="address"]');
    const addressLabel=root.querySelector('[data-address-label]');
    function syncAddressReq(){
      const isRemote = selectedSlot && selectedSlot.kind==='remote';
      if(addressField){
        if(isRemote){ addressField.removeAttribute('required'); if(addressLabel) addressLabel.innerHTML='Adres <span class="bk-optional">(niet nodig voor remote)</span>'; }
        else { addressField.setAttribute('required',''); if(addressLabel) addressLabel.textContent='Adres *'; }
      }
    }
    function updateSummary(){
      if(dateDisplay){
        if(selectedDate && selectedSlot){
          dateDisplay.textContent=`${fmtDateNL(selectedDate)} om ${fmtTime(selectedSlot.hour)} (${selectedSlot.kind==='remote'?'op afstand':'aan huis'})`;
          dateDisplay.classList.add('has-value');
        } else if(selectedDate){
          dateDisplay.textContent=`${fmtDateNL(selectedDate)} \u2014 kies nog een tijd`;
          dateDisplay.classList.remove('has-value');
        } else {
          dateDisplay.textContent='Nog geen datum gekozen';
          dateDisplay.classList.remove('has-value');
        }
      }
      if(dateInput) dateInput.value = selectedDate ? fmtDateISO(selectedDate) : '';
      if(hourInput) hourInput.value = selectedSlot ? String(selectedSlot.hour) : '';
      if(kindInput) kindInput.value = selectedSlot ? selectedSlot.kind : '';
      syncAddressReq();
    }
    buildCalendar(calEl, (date)=>{
      selectedDate=date; selectedSlot=null;
      renderSlots(slotsEl, date, (slot)=>{
        selectedSlot=slot; updateSummary();
      });
      updateSummary();
    });
    renderSlots(slotsEl, null, ()=>{});
    updateSummary();
    form.addEventListener('submit', (ev)=>{
      ev.preventDefault();
      if(!selectedDate || !selectedSlot){
        alert('Kies eerst een datum en tijd in de kalender hierboven.');
        return;
      }
      const fd=new FormData(form);
      const data={
        name: (fd.get('name')||'').toString().trim(),
        email: (fd.get('email')||'').toString().trim(),
        phone: (fd.get('phone')||'').toString().trim(),
        service: (fd.get('service')||'').toString(),
        address: (fd.get('address')||'').toString().trim(),
        description: (fd.get('description')||'').toString().trim(),
        dateISO: fmtDateISO(selectedDate),
        hour: selectedSlot.hour,
        kind: selectedSlot.kind,
        createdAt: new Date().toISOString(),
      };
      if(!data.name || !data.email || !data.phone || !data.service || !data.description){
        alert('Vul alle verplichte velden in (naam, e-mail, telefoon, dienst en omschrijving).'); return;
      }
      if(data.kind!=='remote' && !data.address){
        alert('Vul je adres in \u2014 dit is een afspraak aan huis.'); return;
      }
      saveBooking({ dateISO:data.dateISO, hour:data.hour, kind:data.kind, name:data.name, service:data.service });
      renderSlots(slotsEl, selectedDate, (slot)=>{ selectedSlot=slot; updateSummary(); });
      const serviceLabel=SERVICE_LABELS[data.service]||data.service;
      const when=`${fmtDateNL(selectedDate)} om ${fmtTime(data.hour)} (${data.kind==='remote'?'op afstand':'aan huis'})`;
      const subject=`Spilwerk \u2014 afspraakverzoek: ${serviceLabel} op ${data.dateISO} ${fmtTime(data.hour)}`;
      const body=[
        `Hallo Emmanuel,`,
        ``,
        `Ik wil graag een afspraak plannen via spilwerk.nl:`,
        ``,
        `Naam: ${data.name}`,
        `E-mail: ${data.email}`,
        `Telefoon: ${data.phone}`,
        `Dienst: ${serviceLabel}`,
        `Voorkeursmoment: ${when}`,
        `Type: ${data.kind==='remote'?'Hulp op afstand (18:00\u201320:00)':'Aan huis'}`,
        `Adres: ${data.address||'(remote \u2014 geen adres nodig)'}`,
        ``,
        `Probleem / vraag:`,
        `${data.description}`,
        ``,
        `\u2014 verstuurd via spilwerk.nl/boeken (statische boeking \u2014 bevestiging volgt per mail/WhatsApp)`,
      ].join('\n');
      const mailto=`mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      let success=root.querySelector('[data-bk-success]');
      if(!success){
        success=document.createElement('div'); success.setAttribute('data-bk-success',''); success.className='bk-success';
        form.parentNode.insertBefore(success, form.nextSibling);
      }
      const icsName=`spilwerk-afspraak-${data.dateISO}-${pad(data.hour)}00.ics`;
      const gUrl = googleCalendarUrl(data);
      success.innerHTML=`
        <h3>\u2713 Aanvraag klaar \u2014 nog \u00e9\u00e9n klik</h3>
        <p>Je aanvraag is lokaal bewaard (demo). Klik hieronder om je mailprogramma te openen met alle gegevens \u2014 daarna bevestigt Emmanuel per mail/WhatsApp.</p>
        <div class="bk-success-actions">
          <a class="btn btn-primary" href="${mailto}">Open e-mail naar ${CONFIG.email}</a>
          <a class="btn btn-secondary" href="${gUrl}" target="_blank" rel="noopener">Toevoegen aan Google Calendar</a>
          <button type="button" class="btn btn-secondary" data-dl-ics>Download .ics (agenda)</button>
        </div>
        <p class="bk-success-meta">Gekozen: <b>${when}</b> \u00b7 ${serviceLabel}<br><span style="color:var(--ink-3)">Tip: de .ics kun je in Google/Apple/Outlook Calendar importeren.</span></p>
        <p class="bk-success-meta" style="margin-top:.5rem"><a class="link" href="#" data-bk-reset>Kies een ander moment</a></p>
      `;
      success.querySelector('[data-dl-ics]').addEventListener('click',()=>{
        const ics=buildICS(data);
        downloadICS(ics, icsName);
      });
      success.querySelector('[data-bk-reset]').addEventListener('click',(e)=>{ e.preventDefault(); success.remove(); });
      success.scrollIntoView({behavior:'smooth', block:'nearest'});
      setTimeout(()=>{ window.location.href=mailto; }, 400);
    });
    const clearBtn=root.querySelector('[data-bk-clear]');
    if(clearBtn){
      clearBtn.addEventListener('click',()=>{
        if(confirm('Demo-boekingen wissen? (alleen op dit apparaat)')){
          localStorage.removeItem(CONFIG.storageKey);
          if(selectedDate) renderSlots(slotsEl, selectedDate, (s)=>{ selectedSlot=s; updateSummary(); });
          else renderSlots(slotsEl, null, ()=>{});
          buildCalendar(calEl, (date)=>{
            selectedDate=date; selectedSlot=null;
            renderSlots(slotsEl, date, (slot)=>{ selectedSlot=slot; updateSummary(); });
            updateSummary();
          });
        }
      });
    }
  }
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('[data-booking-root]').forEach(initBooking);
    window.SpilwerkBooking={ CONFIG, getBookings, bookedSet, buildICS };
  });
})();
