import './style.css';
import './responsive.css';
import './refinement.css';
import './mobile.css';
import { equipment, team, promises } from './company-data';

const arrow = '<span aria-hidden="true">↗</span>';
const services = [
 ['Earth & Footing Excavation','Accurate earthwork and stable foundations for projects of every scale.','Earth excavation · Footing excavation · Cut and fill'],
 ['Rock & Controlled Blasting','Specialist rock excavation supported by excavators and rock breakers.','Rock excavation · Controlled blasting'],
 ['Basement & Trench Excavation','Careful excavation for below-ground spaces, utilities and infrastructure.','Basement excavation · Trench excavation · Muck excavation'],
 ['Building Construction','Personal attention from the planning phase through to project completion.','Building construction · Site management']
];
const projects = [
 {image:'project-pune-metro.jpg',name:'Pune Metro',place:'Swargate, Pune',client:'J. Kumar Infraprojects Ltd.',value:'1.50',duration:'3',progress:100,type:'Metro'},
 {image:'folder-earthworks-poster.webp',name:'Irrigation Project',place:'Solapur',client:'Irrigation works',value:'1.25',duration:'2',progress:60,type:'Infrastructure'},
 {image:'hero-excavator.webp',name:'RR Properties',place:'Pune',client:'RR Properties',value:'0.50',duration:'3',progress:80,type:'Commercial'},
 {image:'project-pimpri-chinchwad-metro.jpg',name:'Pimpri Chinchwad Metro',place:'Pimpri Chinchwad',client:'NCC Ltd.',value:'0.65',duration:'3.5',progress:95,type:'Metro'},
 {image:'project-surat-metro.jpg',name:'Surat Metro',place:'Surat',client:'J. Kumar Infraprojects Ltd.',value:'1.25',duration:'24',progress:80,type:'Metro'}
];
const portfolioValue = projects.reduce((total,p)=>total+Number(p.value),0);
const averageCompletion = Math.round(projects.reduce((total,p)=>total+p.progress,0)/projects.length);
const advancedProjects = projects.filter(p=>p.progress>=80).length;
const films = [
 {title:'Earthworks From Above',detail:'Excavation in motion',file:'site-film.mp4',poster:'folder-earthworks-poster.webp'},
 {title:'Breaking New Ground',detail:'Rock-breaking equipment',file:'folder-rock-breaking.mp4',poster:'folder-rock-breaking-poster.webp'},
 {title:'Power At Work',detail:'Heavy excavation',file:'folder-heavy-excavation.mp4',poster:'folder-heavy-excavation-poster.webp'},
 {title:'Precision In Every Move',detail:'A closer look at earthmoving',file:'folder-precision-digging.mp4',poster:'folder-precision-digging-poster.webp'}
];
const img = (name:string) => `/assets/${name}`;
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<a class="skip" href="#main">Skip to content</a>
<header class="header"><a class="brand" href="#home" aria-label="SJ Constructions home"><span class="brand-mark">SJ<span>▰</span></span><span>CONSTRUCTIONS<small>BUILDING TRUST SINCE 2016</small></span></a><nav id="navigation" aria-label="Main navigation"><a href="#about">About us</a><a href="#services">Our expertise</a><a href="#projects">Projects</a><a href="#fleet">Our fleet</a></nav><a class="nav-cta" href="#contact">Let’s build together ${arrow}</a><button class="menu-toggle" aria-expanded="false" aria-controls="navigation" aria-label="Open navigation"><span></span><span></span></button></header>
<main id="main">
<section class="hero cinema-hero" id="home" aria-labelledby="hero-heading">
 <div class="hero-cinema"><video class="autoplay-film" muted loop playsinline preload="none" poster="/assets/hero-background.webp" aria-label="Construction background video"><source data-src="/assets/hero-background.mp4" type="video/mp4"/></video><button class="video-toggle" aria-label="Pause construction background video">Ⅱ</button></div>
 <div class="cinema-content"><p class="eyebrow">Construction & Excavation · Since 2016</p><h1 id="hero-heading">Solid Foundations. <br><span>Lasting Progress.</span></h1><p class="cinema-description">From the first excavation to the final structure, we bring the people, equipment and commitment your project needs.</p><div class="hero-actions"><a class="button" href="#contact">Discuss your project ${arrow}</a><a class="hero-secondary" href="#projects">Explore our work <span aria-hidden="true">↓</span></a></div></div>
 <div class="cinema-footer"><div><span>Based in</span><strong>Pune & Ahmednagar</strong></div><p>Excavation <span> / </span> Infrastructure <span> / </span> Civil works</p><a href="#about" aria-label="Discover SJ Constructions">Discover SJ <span aria-hidden="true">↓</span></a></div>
</section>
<section class="intro section" id="about"><div class="outline-word" aria-hidden="true">EXCELLENCE</div><div class="intro-grid"><div class="reveal"><p class="eyebrow">The Right Partner. From The Ground Up.</p><h2>BUILDING TRUST. <br>DELIVERING <br><em>EXCELLENCE.</em></h2><a class="button" href="#contact">Start your project ${arrow}</a></div><div class="intro-copy reveal"><span class="orange-line"></span><h3>Strong Foundations. <br>Stronger Relationships.</h3><p>Since 2016, SJ Constructions has built its reputation in Ahmednagar and Pune through honest work, dependable execution and a commitment to quality.</p><p>Our highly qualified personnel understand construction operations and the design process, enabling cost-effective, quality-controlled site management at any scale. Every project receives personal attention from planning to completion.</p><p>We prioritise transparent communication, client education and strong working partnerships. Our work spans Maharashtra and Gujarat, from metro infrastructure to commercial development and specialised excavation.</p><a class="text-link" href="/assets/company-profile.pdf" target="_blank" rel="noopener">Explore our company profile <span>↓</span></a></div></div></section>
<section class="services section" id="services"><div class="section-heading reveal"><div><p class="eyebrow">Expertise That Goes Deeper</p><h2>READY FOR THE <br><em>GROUNDWORK.</em></h2></div><p>Specialist excavation and construction services. <br>One committed team, from start to finish.</p></div><div class="service-grid">${services.map((s,i)=>`<article class="service-card reveal"><div class="service-image"><span class="service-symbol">${['⌁','◈','▱','▥'][i]}</span><img src="${img(['hero-excavator.webp','service-hydraulic-hammer.jpg','service-basement-excavation.jpg','site-earthworks.webp'][i])}" alt="${s[0]}" loading="lazy"/></div><h3>${s[0]}</h3><p>${s[1]}</p><details><summary>Explore services <span>+</span></summary><p>${s[2]}</p><a href="#contact">Discuss your requirements ${arrow}</a></details></article>`).join('')}</div></section>
<section class="numbers"><div class="numbers-heading reveal"><p class="eyebrow">The Portfolio In Numbers</p><h2>Measured In Progress.</h2></div><div class="stats"><div><strong>₹${portfolioValue.toFixed(2)}<small> Cr</small></strong><span>Total portfolio value</span></div><div><strong>${projects.length}</strong><span>Projects in the profile</span></div><div><strong>${averageCompletion}%</strong><span>Average completion</span></div><div><strong>${advancedProjects}<small> / 5</small></strong><span>At or above 80%</span></div></div><p class="snapshot-note">Company-profile snapshot · Completion is an unweighted average across five projects.</p></section>
<section class="project-section section" id="projects"><div class="section-heading reveal"><div><p class="eyebrow">Commitment You Can See</p><h2>ONGOING PROJECTS. <br><em>VISIBLE PROGRESS.</em></h2></div><a class="text-link" href="/assets/company-profile.pdf" target="_blank" rel="noopener">Company profile <span>↓</span></a></div><p class="portfolio-intro">Metro infrastructure, irrigation and commercial developments across Maharashtra and Gujarat. Every project below covers excavation work.</p><div class="project-dashboard"><div class="chart-heading"><div><p class="eyebrow">Completion Status</p><h3>Every Milestone, At A Glance.</h3></div><div class="chart-switch" role="group" aria-label="Chart metric"><button data-metric="completion" aria-pressed="true">Completion %</button><button data-metric="value" aria-pressed="false">Value ₹ Cr</button></div></div><div id="progress-chart" aria-live="polite"></div><p class="data-note">Figures reproduced from the supplied profile, not a live project feed. Swargate is listed at 100% within the brochure’s ongoing portfolio.</p></div><div class="project-table-wrap" role="region" aria-label="Detailed project portfolio" tabindex="0"><table class="project-table"><caption>Complete Project Breakdown</caption><thead><tr><th scope="col">Project / location</th><th scope="col">Client</th><th scope="col">Scope</th><th scope="col">Value</th><th scope="col">Duration</th><th scope="col">Completion</th></tr></thead><tbody>${projects.map(p=>`<tr><th scope="row">${p.name}<small>${p.place}</small></th><td data-label="Client">${p.client}</td><td data-label="Scope">Excavation work</td><td class="numeric" data-label="Contract value">₹${p.value} Cr</td><td class="numeric" data-label="Duration">${p.duration} months</td><td class="numeric" data-label="Completion"><strong>${p.progress}%</strong><span class="table-progress"><i style="width:${p.progress}%"></i></span></td></tr>`).join('')}</tbody><tfoot><tr><th scope="row" colspan="3">Portfolio total · 5 projects</th><td class="numeric">₹${portfolioValue.toFixed(2)} Cr</td><td>—</td><td class="numeric">${averageCompletion}% average</td></tr></tfoot></table></div><p class="data-note">Individual contract values come from the supplied project schedule; their total matches the PDF’s ₹5.15 crore portfolio.</p><div class="filters" role="group" aria-label="Filter projects">${['All projects','Metro','Infrastructure','Commercial'].map((s,i)=>`<button data-filter="${s}" aria-pressed="${i===0}">${s}</button>`).join('')}</div><div id="project-grid" class="project-grid"></div><p class="project-note">Project values and completion figures are as listed in the supplied company profile. Images from the supplied folder illustrate our sector and capabilities.</p></section>
<section class="fleet" id="fleet"><div class="fleet-picture"><img src="${img('site-earthworks.webp')}" alt="Heavy loader and excavation machinery" loading="lazy"/><span class="fleet-outline" aria-hidden="true">POWER</span></div><div class="fleet-copy reveal"><p class="eyebrow">Machinery & Equipment</p><h2>BUILT FOR <br><em>HEAVY WORK.</em></h2><p>A modern, well-maintained fleet supports operational readiness and efficiency, from excavation to material handling and concrete production.</p><div class="fleet-summary"><div><strong>${equipment.reduce((sum,item)=>sum+item.count,0)}</strong><span>Listed units</span></div><div><strong>${equipment.length}</strong><span>Equipment categories</span></div><div><strong>60<small> TPS</small></strong><span>RMC plant specification</span></div></div><p class="data-note">Inventory and plant specification as listed in the PDF.</p><a class="button" href="#equipment-detail">Explore the full inventory <span>↓</span></a></div></section>
<section class="films section" id="films"><div class="section-heading reveal"><div><p class="eyebrow">See The Machinery In Motion</p><h2>POWER. PRECISION. <br><em>PROGRESS.</em></h2></div><p>A closer look at excavation, earthmoving and the equipment behind the work.</p></div><div class="film-grid">${films.map(f=>`<figure class="film-card"><div class="inline-film"><video class="autoplay-film" muted loop playsinline preload="none" poster="${img(f.poster)}" aria-label="${f.title}"><source data-src="${img(f.file)}" type="video/mp4"/></video><button class="video-toggle" aria-label="Pause ${f.title}">Ⅱ</button></div><figcaption class="film-caption"><small>${f.detail}</small><h3>${f.title}</h3></figcaption></figure>`).join('')}</div></section>
<section class="inventory section" id="equipment-detail"><div class="section-heading reveal"><div><p class="eyebrow">Every Machine Has A Purpose</p><h2>THE COMPLETE <br><em>EQUIPMENT LINE-UP.</em></h2></div><p>All eleven equipment categories and quantities from the company brochure.</p></div><div class="equipment-grid">${equipment.map(item=>`<article class="equipment-item"><strong>${String(item.count).padStart(2,'0')}<small>UNITS</small></strong><div><h3>${item.name}</h3><p>${item.detail}</p></div></article>`).join('')}</div><details class="source-detail"><summary>Earlier equipment schedule supplied with the screenshots</summary><p>TATA Poclain: 2 · JCB: 3 · Bobcat: 1 · Hyva heavy tippers: 6 · Tippers: 4. This earlier schedule differs from the PDF inventory shown above.</p></details></section>
<section class="team-section section" id="team"><div class="section-heading reveal"><div><p class="eyebrow">Human Capital</p><h2>EXPERIENCED PEOPLE. <br><em>PERSONAL COMMITMENT.</em></h2></div><p>From site engineers and supervisors to operators and drivers, our people support quality and reliability on every project.</p></div><div class="team-grid">${team.map(role=>`<article><strong>${String(role.count).padStart(2,'0')}</strong><h3>${role.name}</h3><p>${role.detail}</p></article>`).join('')}</div><div class="promise-grid">${promises.map(p=>`<article><h3>${p[0]}</h3><p>${p[1]}</p></article>`).join('')}</div></section>

<div class="marquee" aria-hidden="true"><div>BUILDING TRUST. <span>DELIVERING EXCELLENCE.</span> BUILDING TRUST. <span>DELIVERING EXCELLENCE.</span> </div></div>
<section class="contact section" id="contact"><div class="contact-copy reveal"><p class="eyebrow">Let’s Get To Work</p><h2>YOUR NEXT PROJECT. <br><em>OUR COMMITMENT.</em></h2><p>Tell us what you’re planning. Let’s discuss how we can help build it.</p><a class="contact-number" href="tel:+918308900900">+91 83089 00900 ${arrow}</a><span class="contact-person">Sushant Jawak</span><a class="contact-number" href="tel:+918149995999" aria-label="Call Shrikant Jawak at +91 81499 95999">+91 81499 95999 ${arrow}</a><span class="contact-person">Shrikant Jawak</span><div class="offices"><div><h3>Office 1 · Shrigonda</h3><p>Shop No. 1, Sainath Complex, <br>Near Sainath Gas Agency, Shrigonda, <br>Ahmednagar 413701</p><a href="https://www.google.com/maps/search/?api=1&query=Sainath+Complex+Shrigonda+Ahmednagar" target="_blank" rel="noopener">View area on map ${arrow}</a></div><div><h3>Office 2 · Model Colony</h3><p>403, B Wing, DSK Vrindavanam, <br>Nargis Dutt Road, Model Colony, <br>Shivajinagar, Pune 411016</p><a href="https://www.google.com/maps/search/?api=1&query=DSK+Vrindavanam+Model+Colony+Pune" target="_blank" rel="noopener">View area on map ${arrow}</a></div></div></div><form class="enquiry reveal"><h3>Let’s Build Something Great.</h3><p>Prepare your enquiry and continue to WhatsApp.</p><label for="name">Your name</label><input id="name" name="name" autocomplete="name" required maxlength="100" placeholder="Full name"/><label for="phone">Phone number</label><input id="phone" name="phone" type="tel" autocomplete="tel" required minlength="7" maxlength="20" placeholder="Your contact number"/><label for="service">I’m interested in</label><select id="service" name="service"><option>Excavation & earthwork</option>Rock excavation & blasting</option>Building construction</option>Other project requirements</option></select><label for="message">Project details</label><textarea id="message" name="message" rows="3" required maxlength="2000" placeholder="Site location, scope and expected timeline"></textarea><button class="button" type="submit">Prepare WhatsApp enquiry ${arrow}</button><p class="form-note">You review and send the message in WhatsApp.</p><p id="form-status" role="status"></p></form></section>
</main><footer><a class="footer-brand" href="#home">SJ CONSTRUCTIONS<span>.</span></a><div><p>Building trust. Delivering excellence.</p><small>© ${new Date().getFullYear()} SJ Constructions · GSTIN 27ACYFS3414J1ZJ</small></div><a href="#home" class="back-top" aria-label="Back to top">↑</a></footer>
<dialog id="project-dialog"><button class="close-dialog" aria-label="Close project details">×</button><div id="project-detail"></div></dialog>`;

const grid=document.querySelector<HTMLDivElement>('#project-grid')!;
function renderProjects(filter='All projects') {
 grid.innerHTML=projects.filter(p=>filter==='All projects'||p.type===filter).map(p=>`<button class="project-card" data-project="${projects.indexOf(p)}"><div class="project-image"><img src="${img(p.image)}" alt="${p.name} excavation sector" loading="lazy"/><span class="project-category">${p.type}</span><span class="project-open" aria-hidden="true">↗</span></div><div class="project-caption"><div><small>${p.place}</small><h3>${p.name}</h3></div><span><span>${p.progress}%</span> complete</span></div></button>`).join('');
}
renderProjects();
document.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed','false'));button.setAttribute('aria-pressed','true');renderProjects(button.dataset.filter)}));
const dialog=document.querySelector<HTMLDialogElement>('#project-dialog')!;
grid.addEventListener('click',e=>{const card=(e.target as HTMLElement).closest<HTMLButtonElement>('[data-project]');if(!card)return;const p=projects[Number(card.dataset.project)];document.querySelector('#project-detail')!.innerHTML=`<p class="eyebrow">${p.type} · ${p.place}</p><h2 id="dialog-title">${p.name}</h2><p>${p.client}</p><div class="project-facts"><div><span>Scope of work</span><strong>Excavation work</strong></div><div><span>Contract value</span><strong>₹${p.value} crore</strong></div><div><span>Duration</span><strong>${p.duration} months</strong></div><div><span>Reported completion</span><strong>${p.progress}%</strong></div></div><p class="project-note">Figures from the supplied company profile; not a live status update.</p><a class="button" href="#contact" id="project-enquire">Discuss a similar project ${arrow}</a>`;dialog.setAttribute('aria-labelledby','dialog-title');dialog.showModal();document.querySelector('#project-enquire')!.addEventListener('click',()=>dialog.close())});
document.querySelector('.close-dialog')!.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
const menu=document.querySelector<HTMLButtonElement>('.menu-toggle')!;
const header=document.querySelector<HTMLElement>('.header')!;
function setMenu(open:boolean){
 menu.setAttribute('aria-expanded',String(open));
 menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');
 header.classList.toggle('menu-open',open);
}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setMenu(false);menu.focus()}
});
document.addEventListener('click',e=>{if(!header.contains(e.target as Node))setMenu(false)});
window.matchMedia('(max-width: 900px)').addEventListener('change',()=>setMenu(false));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:0.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const enquiry=document.querySelector<HTMLFormElement>('.enquiry')!;
const formStatus=document.querySelector<HTMLElement>('#form-status')!;
enquiry.addEventListener('input',()=>formStatus.replaceChildren());
enquiry.addEventListener('submit',e=>{
 e.preventDefault();
 const data=new FormData(enquiry);
 const name=String(data.get('name')).trim();
 const phone=String(data.get('phone')).trim();
 const message=String(data.get('message')).trim();
 const fail=(text:string,id:string)=>{formStatus.textContent=text;document.querySelector<HTMLInputElement>(id)!.focus()};
 if(!name){fail('Please enter your name.','#name');return}
 if(!/^[+\d\s().-]+$/.test(phone)||phone.replace(/\D/g,'').length<7||phone.replace(/\D/g,'').length>15){fail('Enter a phone number with 7 to 15 digits.','#phone');return}
 if(!message){fail('Please add your project details.','#message');return}
 const text=`Hello SJ Constructions,\nMy name is ${name}.\nPhone: ${phone}\nService: ${data.get('service')}\nProject: ${message}`;
 const link=document.createElement('a');
 link.href=`https://wa.me/918308900900?text=${encodeURIComponent(text)}`;
 link.target='_blank';link.rel='noopener';link.className='prepared-link';
 link.textContent='Enquiry ready — open WhatsApp ↗';
 formStatus.replaceChildren(link);link.focus();
});

// Inline videos start muted, loop, and pause when off-screen to avoid unnecessary decoding.
const videos=[...document.querySelectorAll<HTMLVideoElement>('.autoplay-film')];
const visibleVideos=new Set<HTMLVideoElement>();
const manuallyPaused=new Set<HTMLVideoElement>();
const manuallyStarted=new Set<HTMLVideoElement>();
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
function loadVideo(video:HTMLVideoElement){
 const source=video.querySelector<HTMLSourceElement>('source[data-src]');
 if(source){source.src=source.dataset.src!;delete source.dataset.src;video.load()}
}
function syncVideo(video:HTMLVideoElement){
 const shouldPlay=visibleVideos.has(video)&&!manuallyPaused.has(video)&&!document.hidden&&(!reducedMotion.matches||manuallyStarted.has(video));
 if(shouldPlay){loadVideo(video);void video.play().catch(()=>{})}else video.pause();
}
const videoObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
 const video=entry.target as HTMLVideoElement;
 if(entry.isIntersecting&&entry.intersectionRatio>=0.15)visibleVideos.add(video);else visibleVideos.delete(video);
 syncVideo(video);
}),{threshold:0.15});
videos.forEach(video=>{
 video.muted=true;
 video.autoplay=false;
 if(reducedMotion.matches)video.pause();
 const control=video.parentElement!.querySelector<HTMLButtonElement>('.video-toggle')!;
 const update=()=>{control.textContent=video.paused?'▷':'Ⅱ';control.setAttribute('aria-label',`${video.paused?'Play':'Pause'} ${video.getAttribute('aria-label')}`)};
 video.addEventListener('play',update);video.addEventListener('pause',update);update();
 control.addEventListener('click',()=>{if(video.paused){manuallyPaused.delete(video);manuallyStarted.add(video)}else{manuallyPaused.add(video);manuallyStarted.delete(video)}syncVideo(video)});
 videoObserver.observe(video);
});
document.addEventListener('visibilitychange',()=>videos.forEach(syncVideo));
reducedMotion.addEventListener('change',()=>videos.forEach(syncVideo));


function renderChart(metric:'completion'|'value'){
 document.querySelector('.chart-heading .eyebrow')!.textContent=metric==='completion'?'Completion Status':'Contract Values';
 const max=metric==='completion'?100:1.5;
 const rows=[...projects].sort((a,b)=>metric==='completion'?b.progress-a.progress:Number(b.value)-Number(a.value));
 document.querySelector('#progress-chart')!.innerHTML=`<div class="chart-axis" aria-hidden="true"><span>${metric==='completion'?'0%':'₹0'}</span><span>${metric==='completion'?'50%':'₹0.75 Cr'}</span><span>${metric==='completion'?'100%':'₹1.50 Cr'}</span></div>${rows.map(p=>{const value=metric==='completion'?p.progress:Number(p.value);return `<div class="chart-row"><span class="chart-label">${p.name}<small>${p.place}</small></span><div class="chart-track"><span style="width:${value/max*100}%"></span></div><strong>${metric==='completion'?`${value}%`:`₹${p.value} Cr`}</strong></div>`}).join('')}`;
}
renderChart('completion');
document.querySelectorAll<HTMLButtonElement>('[data-metric]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-metric]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 renderChart(button.dataset.metric as 'completion'|'value');
}));

// Compact phone layouts keep full company information one tap away.
// Wrappers are removed on larger screens to preserve the desktop DOM and layout.
const phoneLayout=window.matchMedia('(max-width: 700px)');
function syncPhoneDetails(){
 document.querySelectorAll<HTMLDetailsElement>('.mobile-disclosure').forEach(wrapper=>{
  const content=wrapper.querySelector('.mobile-disclosure-content')!;
  wrapper.replaceWith(...content.childNodes);
 });
 if(!phoneLayout.matches)return;
 const fold=(elements:Element[],label:string)=>{
  if(!elements.length)return;
  const wrapper=document.createElement('details');
  wrapper.className='mobile-disclosure';
  const summary=document.createElement('summary');
  summary.textContent=label;
  const content=document.createElement('div');
  content.className='mobile-disclosure-content';
  elements[0].before(wrapper);
  content.append(...elements);
  wrapper.append(summary,content);
 };
 fold([...document.querySelectorAll('.project-table-wrap,.project-table-wrap+.data-note')],'Full Breakdown · 5 Projects');
 fold([...document.querySelectorAll('.equipment-grid,.inventory>.source-detail')],'View All 11 Equipment Categories');
 fold([...document.querySelectorAll('.promise-grid')],'Why Work With Us');
 fold([...document.querySelectorAll('.enquiry')],'Send a Project Enquiry');
}
syncPhoneDetails();
phoneLayout.addEventListener('change',syncPhoneDetails);

// The HTML is rendered by JavaScript, after the browser's initial anchor lookup.
// Restore shared section links once their final responsive layout exists.
if(window.location.hash){
 requestAnimationFrame(()=>{
  try{document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView({behavior:'instant'})}catch{/* Ignore malformed URL fragments. */}
 });
}
