const people={
 Laurent:{img:'assets/laurent.webp',pos:'center 44%',line:'Klaar om iets nieuws te ontdekken?'},
 Wendy:{img:'assets/wendy.webp',pos:'center 25%',line:'Rust, genieten en iedereen gelukkig — wat telt voor jou?'},
 Hope:{img:'assets/hope.webp',pos:'center 38%',line:'Jouw ideale vakantie begint hier.'},
 Faith:{img:'assets/faith.webp',pos:'center 36%',line:'Vertel eerlijk waar jij écht blij van wordt.'},
 Vinnie:{img:'assets/vinnie.webp',pos:'center 36%',line:'Actie, water of iets helemaal anders?'},
};
const Q=[
 {id:'feeling',q:'Hoe wil jij je vooral voelen op vakantie?',max:3,opts:[['😌','Helemaal ontspannen'],['🤩','Verrast en verwonderd'],['⚡','Actief en energiek'],['✨','Verwend en comfortabel'],['❤️','Dicht bij elkaar'],['🧭','Avontuurlijk']]},
 {id:'setting',q:'Waar krijg je meteen vakantiekriebels van?',max:3,opts:[['🏖️','Strand en zee'],['🏔️','Bergen'],['🏊','Groot zwembad'],['🌊','Meer of rivier'],['🏘️','Mooie stadjes'],['🌲','Natuur en stilte']]},
 {id:'transport',q:'Hoe vertrekken we het liefst?',max:1,opts:[['🚗','Met de auto'],['✈️','Met het vliegtuig'],['🚆','Met de trein'],['🤷','Maakt mij niet uit']]},
 {id:'travel',q:'Hoeveel reistijd vind je nog aangenaam?',max:1,opts:[['🕒','Tot 4 uur'],['🕗','Tot 8 uur'],['🕛','Tot 12 uur'],['🌍','Langer als het echt de moeite is']]},
 {id:'stay',q:'Waar slaap je het liefst?',max:2,opts:[['🏡','Villa of vakantiehuis'],['🏨','Mooi hotel'],['🏢','Appartement'],['🌿','Kleinschalig verblijf of agriturismo'],['🎢','Resort met veel faciliteiten']]},
 {id:'must',q:'Wat moet er absoluut aanwezig zijn?',max:5,opts:[['🏊','Zwembad'],['❄️','Airco'],['🐶','Loulou welkom'],['🍽️','Goede restaurants'],['🌳','Tuin of buitenruimte'],['📶','Goede wifi'],['🏋️','Sportmogelijkheden'],['🚶','Mooie wandelingen']]},
 {id:'day',q:'Hoe ziet een perfecte vakantiedag eruit?',max:3,opts:[['☕','Rustig ontbijten en niets moeten'],['🏊','Veel zwemmen'],['🛶','Een actieve uitstap'],['🏘️','Een dorp of stad ontdekken'],['🍴','Lekker lunchen en dineren'],['🌅','Mooie plek en zonsondergang']]},
 {id:'activities',q:'Welke activiteiten zou je echt leuk vinden?',max:5,opts:[['💦','Waterpark of watersport'],['🚵','Mountainbike of fietsen'],['🧗','Klimmen of avonturenpark'],['⛵','Boottocht'],['🎢','Pretpark'],['🛍️','Shoppen en marktjes'],['🥾','Wandelen'],['🧖','Wellness']]},
 {id:'heat',q:'Welke temperatuur past bij jou?',max:1,opts:[['🌤️','20–25°C: aangenaam'],['☀️','25–30°C: lekker warm'],['🔥','30°C of warmer'],['🌦️','Temperatuur maakt minder uit']]},
 {id:'pace',q:'Hoeveel willen we plannen?',max:1,opts:[['🛋️','Bijna niets — gewoon zien'],['🗓️','Eén activiteit per dag'],['🎯','Veel beleven en goed plannen'],['⚖️','Een mix van rust en actie']]},
 {id:'food',q:'Hoe belangrijk is lekker eten?',max:1,opts:[['🥪','Niet zo belangrijk'],['🍝','Leuk, maar niet doorslaggevend'],['🍷','Heel belangrijk'],['👨‍🍳','Een van de hoogtepunten']]},
 {id:'dogday',q:'Loulou gaat mee. Wat doen we overdag?',max:2,loulou:true,opts:[['🐕','Activiteiten kiezen waar ze mee kan'],['🏠','Ze mag soms enkele uren alleen blijven'],['🧑‍🦰','Lokale hondenoppas gebruiken'],['🔄','Afwisselen: iemand blijft soms bij haar'],['🌳','Vooral villa met tuin kiezen']]},
 {id:'doglimit',q:'Wat mogen we voor Loulou opofferen?',max:2,loulou:true,opts:[['✈️','Vliegtuig vermijden'],['🏨','Minder keuze in hotels accepteren'],['🎡','Sommige activiteiten overslaan'],['💶','Iets extra betalen'],['🚫','Zo weinig mogelijk opofferen']]},
 {id:'avoid',q:'Wat wil je absoluut vermijden?',max:3,opts:[['🥵','Extreme hitte'],['🚗','Heel lang rijden'],['👥','Drukke toeristische plekken'],['🥾','Veel wandelen'],['📋','Elke dag verplicht programma'],['🛏️','Kleine kamers'],['🌧️','Risico op slecht weer']]},
 {id:'luxury',q:'Wat betekent comfort voor jou?',max:3,opts:[['🛏️','Mooie ruime kamer'],['🏊','Privézwembad'],['🧹','Niet zelf moeten koken of opruimen'],['🍹','Service en bediening'],['📍','Perfecte ligging'],['🌿','Rust en privacy']]},
 {id:'budget',q:'Binnen €5.000 kies ik liever…',max:1,opts:[['💎','Korter maar luxer'],['📆','Langer maar eenvoudiger'],['⚖️','De beste balans'],['🎟️','Meer activiteiten, eenvoudiger verblijf']]},
 {id:'newness',q:'Hoe belangrijk is een nieuwe bestemming?',max:1,opts:[['🏠','Niet — gekend is geruststellend'],['🙂','Leuk, maar niet nodig'],['🧭','Belangrijk'],['🚀','Heel belangrijk: verras me']]},
 {id:'dream',q:'Kies jouw droommoment.',max:1,opts:[['🌅','Samen dineren bij zonsondergang'],['🏊','Iedereen in en rond het zwembad'],['🚡','Boven op een berg met uitzicht'],['⛵','Op een boot op helder water'],['🏡','Rustige avond in onze eigen villa'],['🎢','Een dag vol actie en plezier']]},
];
const weights=[['comfort','Comfort'],['adventure','Avontuur'],['sun','Zon & warmte'],['water','Water & zwembad'],['discover','Nieuwe plaatsen'],['food','Goed eten'],['together','Tijd samen'],['active','Actief zijn'],['relax','Ontspannen']];
const CFG=window.VAKANTIE_CONFIG||{};
const qs=new URLSearchParams(location.search);
const TEST_MODE=qs.get('mode')==='test';
let state={view:'home',person:null,index:0,answers:{},points:Object.fromEntries(weights.map(x=>[x[0],0]))};
const app=document.getElementById('app');
function shell(c){app.innerHTML=`<div class="app"><div class="phone">${c}</div></div>`;window.scrollTo(0,0)}
function apiReady(){return CFG.apiUrl&&CFG.apiUrl.startsWith('https://script.google.com/')}
function home(){state.view='home';shell(`<section class="hero" style="background-image:url('assets/family.webp')"><div class="hero-content"><div class="eyebrow">Familie Marcelis</div><h1>Vakantie<br>Challenge</h1><p>Vijf meningen, één hond en één budget. Ontdek samen welke vakantie écht bij ons past.</p>${TEST_MODE?'<div class="tag">TESTMODUS — telt niet mee</div>':''}<button class="btn btn-primary" onclick="choose()">Start de challenge →</button><p class="small">Iedereen vult individueel in. Resultaten blijven verborgen tot iedereen klaar is.</p>${!apiReady()?'<div class="status-box warn">De online opslag is nog niet gekoppeld. Volg eerst de installatiegids.</div>':''}<div class="admin-link"><a href="?admin=1">Privé beheer</a></div></div></section>`)}
function choose(){shell(`<section class="screen"><div class="eyebrow">Stap 1</div><h2>Wie ben jij?</h2><p class="lead">Kies jezelf. Niet overleggen — jouw eigen mening telt.</p><div class="grid">${Object.entries(people).map(([n,p])=>`<button class="person" onclick="intro('${n}')"><img src="${p.img}" style="object-position:${p.pos}"><strong>${n}</strong></button>`).join('')}<button class="person loulou" onclick="loulouInfo()"><img src="assets/loulou.webp"><strong>🐾 Loulou</strong></button></div></section>`)}
function loulouInfo(){shell(`<section class="hero" style="background-image:url('assets/loulou.webp');background-position:center 35%"><div class="hero-content"><div class="eyebrow">Onze mascotte</div><h1>Loulou<br>stemt mee</h1><p>Niet door zelf antwoorden te geven — wel doordat iedereen beslist hoeveel rekening we met haar houden.</p><button class="btn btn-primary" onclick="choose()">Terug naar het gezin</button></div></section>`)}
function intro(n){state={view:'intro',person:n,index:0,answers:{},points:Object.fromEntries(weights.map(x=>[x[0],0]))};let p=people[n];shell(`<div class="profile-hero" style="background-image:url('${p.img}');background-position:${p.pos}"><div class="profile-name"><div class="eyebrow">Welkom</div><h2>${n}</h2></div></div><div class="intro-card"><div class="bubble">🐾 ${p.line}</div><div class="ticks"><div class="tick"><span>✓</span>Er zijn geen foute antwoorden</div><div class="tick"><span>♥</span>Antwoord zoals jij het voelt</div><div class="tick"><span>👨‍👩‍👧‍👦</span>We vergelijken alles pas achteraf</div></div><button class="btn btn-primary" onclick="question()">Begin →</button></div>`)}
function question(){state.view='quiz';const q=Q[state.index],sel=state.answers[q.id]||[];let pct=((state.index+1)/(Q.length+1))*100;shell(`<section class="screen"><div class="topbar"><button class="back" onclick="prev()">‹</button><div class="progress"><span style="width:${pct}%"></span></div><div class="count">${state.index+1}/${Q.length+1}</div></div>${q.loulou?`<div class="bubble"><b>🐾 Loulou-vraag</b><br>Deze antwoorden wegen mee in welke verblijven haalbaar zijn.</div>`:''}<h2>${q.q}</h2><p class="lead">${q.max===1?'Kies één antwoord.':`Kies maximaal ${q.max}.`}</p><div class="option-list">${q.opts.map(([e,t],i)=>`<button class="option ${sel.includes(i)?'selected':''}" onclick="toggle(${i})"><span class="emoji">${e}</span><span class="txt">${t}</span></button>`).join('')}</div><div class="footer-nav"><button class="btn btn-secondary" onclick="prev()">Terug</button><button class="btn next ${sel.length?'':'disabled'}" onclick="next()">Verder →</button></div></section>`)}
function toggle(i){let q=Q[state.index],a=state.answers[q.id]||[];if(q.max===1)a=[i];else if(a.includes(i))a=a.filter(x=>x!==i);else if(a.length<q.max)a=[...a,i];state.answers[q.id]=a;question()}
function prev(){if(state.view==='quiz'&&state.index>0){state.index--;question()}else if(state.view==='points') {state.index=Q.length-1;question()}else choose()}
function next(){if(!(state.answers[Q[state.index].id]||[]).length)return;if(state.index<Q.length-1){state.index++;question()}else points()}
function points(){state.view='points';let total=Object.values(state.points).reduce((a,b)=>a+b,0);shell(`<section class="screen"><div class="topbar"><button class="back" onclick="prev()">‹</button><div class="progress"><span style="width:100%"></span></div><div class="count">${Q.length+1}/${Q.length+1}</div></div><div class="tag">Finale ronde</div><h2>Verdeel 100 vakantiepunten</h2><p class="lead">Geef meer punten aan wat voor jou het belangrijkst is. Samen moeten ze exact 100 zijn.</p>${weights.map(([k,l])=>`<div class="slider-wrap"><div class="slider-row"><span>${l}</span><span>${state.points[k]}</span></div><input type="range" min="0" max="40" step="5" value="${state.points[k]}" oninput="setPoint('${k}',this.value)"></div>`).join('')}<div class="total ${total===100?'ok':'bad'}">Totaal: ${total}/100</div><button class="btn btn-primary ${total===100?'':'disabled'}" style="margin-top:16px" onclick="finish()">Maak mijn vakantieprofiel →</button></section>`)}
function setPoint(k,v){state.points[k]=Number(v);points()}
function payload(){return {version:2,person:state.person,created:new Date().toISOString(),answers:state.answers,points:state.points}}
function encode(o){return btoa(unescape(encodeURIComponent(JSON.stringify(o))))}
function decode(s){return JSON.parse(decodeURIComponent(escape(atob(s.trim()))))}
async function finish(){
 const data={...payload(),familyId:CFG.familyId,testMode:TEST_MODE,trip:CFG.trip};
 localStorage.setItem('vakantie_'+state.person,JSON.stringify(data));
 shell(`<section class="result"><div class="eyebrow">Even geduld, ${state.person}</div><h1>We bewaren<br>jouw stem.</h1><div id="submitStatus" class="status-box">Bezig met veilig registreren…</div></section>`);
 if(!apiReady()){
   document.getElementById('submitStatus').className='status-box warn';
   document.getElementById('submitStatus').innerHTML='De online opslag is nog niet gekoppeld. Jouw antwoorden zijn alleen op dit toestel bewaard.<br><br><button class="btn btn-secondary" onclick="home()">Terug</button>';
   return;
 }
 try{
   const body=new URLSearchParams({action:'submit',payload:JSON.stringify(data)});
   const res=await fetch(CFG.apiUrl,{method:'POST',body});
   const out=await res.json();
   if(!out.ok) throw new Error(out.error||'Onbekende fout');
   document.getElementById('submitStatus').className='status-box ok';
   document.getElementById('submitStatus').innerHTML=`<b>Bedankt!</b><br>Je antwoorden zijn geregistreerd${TEST_MODE?' als test':''}. De resultaten worden pas gedeeld nadat iedereen heeft geantwoord.<br><br><button class="btn btn-secondary" onclick="home()">Klaar</button>`;
 }catch(e){
   document.getElementById('submitStatus').className='status-box warn';
   document.getElementById('submitStatus').innerHTML=`Registreren lukte niet: ${e.message}. Probeer opnieuw.<br><br><button class="btn btn-primary" onclick="finish()">Opnieuw proberen</button>`;
 }
}
function payload(){return {version:3,person:state.person,created:new Date().toISOString(),answers:state.answers,points:state.points}}
function admin(){
 const adminToken=prompt('Voer je privé beheertoken in:');
 if(!adminToken){home();return;}
 if(!apiReady()){shell(`<section class="screen"><h2>Online opslag nog niet gekoppeld</h2><p class="lead">Vul eerst de Apps Script URL in config.js in.</p><button class="btn btn-secondary" onclick="home()">Terug</button></section>`);return}
 loadAdmin(adminToken);
}
async function loadAdmin(token){
 shell(`<section class="screen admin"><button class="back" onclick="home()">‹</button><div class="tag">Privé voor Laurent</div><h2>Gezinsstatus</h2><div id="adminmsg" class="status-box">Resultaten ophalen…</div></section>`);
 try{
  const u=`${CFG.apiUrl}?action=status&familyId=${encodeURIComponent(CFG.familyId)}&token=${encodeURIComponent(token)}`;
  const r=await fetch(u);const o=await r.json();if(!o.ok)throw new Error(o.error||'Geen toegang');
  const names=(CFG.expectedPeople||[]).map(n=>`<div class="tick"><span>${o.completed.includes(n)?'✓':'○'}</span>${n}</div>`).join('');
  document.getElementById('adminmsg').className='status-box ok';
  document.getElementById('adminmsg').innerHTML=`<b>${o.completed.length}/${o.expected} echte antwoorden binnen</b><div class="ticks">${names}</div><p>Tests: ${o.testCount}</p><a class="btn btn-primary" href="${o.exportUrl}" target="_blank" rel="noopener">Open privé exportlink</a><button class="btn btn-secondary" style="margin-top:10px" onclick="clearTests('${token}')">Wis testantwoorden</button>`;
 }catch(e){document.getElementById('adminmsg').className='status-box warn';document.getElementById('adminmsg').textContent=e.message}
}
async function clearTests(token){if(!confirm('Alle testantwoorden verwijderen?'))return;const b=new URLSearchParams({action:'clearTests',familyId:CFG.familyId,token});const r=await fetch(CFG.apiUrl,{method:'POST',body:b});const o=await r.json();alert(o.ok?'Testantwoorden verwijderd.':o.error);loadAdmin(token)}
if(qs.get('admin')==='1')admin();else home();
