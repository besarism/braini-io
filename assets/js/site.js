(() => {
'use strict';
// Each service remains in the HTML for search, links and progressive enhancement.
const rect=(x,y,w,h,fill,rx=0,stroke='none',sw=1)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const line=(x,y,x2,y2,color='#B4A6B3',sw=1)=>`<path d="M${x} ${y}L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${sw}"/>`;
const circle=(x,y,r,fill='none',stroke='#333451',sw=1)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const txt=(s,x,y,size=12,color='#333451')=>`<text x="${x}" y="${y}" font-family="Inter,sans-serif" font-size="${size}" fill="${color}">${s}</text>`;
const ink='#333451',coral='#D94F4A',paper='#FFF2EC';
function art(index){let a='';
 for(let x=30;x<640;x+=30)for(let y=10;y<270;y+=30)a+=circle(x,y,.6,'#B9ADB5','none');
 if(index===0){
  a+=line(60,151,580,151,'#BEB0B8');
  a+='<g transform="translate(75 38) rotate(-8 74 94)">'+rect(0,0,154,198,ink,15)+rect(7,7,140,184,paper,10)+rect(52,11,50,9,ink,4)+txt('Your next idea',23,45,13)+rect(22,59,110,51,'#F2D3C8',7)+circle(78,85,16,coral,'none')+rect(22,124,77,5,'#B9AFB6',2)+rect(22,137,109,5,'#D1C5C8',2)+rect(22,151,109,26,ink,5)+txt('Make it happen',40,168,10,paper)+'</g>';
  a+='<g class="art-float">'+rect(291,43,263,169,ink,9)+rect(297,67,251,139,paper,3)+circle(307,55,3,coral,'none')+circle(319,55,3,'#827E95','none')+circle(331,55,3,'#827E95','none')+rect(310,80,64,111,'#E5DAD5',4)+rect(387,81,99,7,ink,2)+rect(387,98,141,44,'#E7B6AB',4)+rect(387,154,62,37,'#DAD1D1',4)+rect(460,154,68,37,'#DAD1D1',4)+'</g>';
  a+=circle(257,151,17,paper,'#B9AEB9')+`<path d="M250 151h14M258 145l6 6-6 6" fill="none" stroke="${coral}" stroke-width="2"/>`;
 }else if(index===1){
  for(const y of [60,133,207]){a+=rect(83,y-23,127,46,ink,5)+circle(103,y,4,'#FF8477','none')+line(119,y-4,189,y-4,'#8E8DA2',4)+line(119,y+7,164,y+7,'#77758F',3);a+=`<path d="M210 ${y}H278V133H351" fill="none" stroke="${coral}" stroke-width="2"/>`;}
  a+='<g class="art-float">'+rect(352,48,173,174,ink,14)+rect(365,61,147,148,'#494A67',7)+txt('CONNECTED',386,92,11,'#FFF2EC');
  for(let i=0;i<3;i++)a+=rect(385,111+i*26,105,17,'#686981',3)+circle(475,119+i*26,3,'#FF8477','none');a+='</g>';
  a+=circle(278,133,8,paper,coral,2)+txt('APIs · data · infrastructure',226,259,11,'#696777');
 }else if(index===2){
  for(let i=0;i<5;i++){let yy=36+i*46;a+=circle(88,yy,6,ink,'none')+line(95,yy,248,136,'#B5A8B3')+line(381,136,550,yy,'#B5A8B3')+circle(550,yy,6,i===2?coral:ink,'none');}
  a+='<g class="art-float">'+rect(247,69,136,136,ink,12)+rect(266,88,98,98,coral,7)+txt('AI',289,150,41,paper)+'</g>';
  for(let i=0;i<4;i++)a+=line(267+i*31,59,267+i*31,69,ink,3)+line(267+i*31,205,267+i*31,217,ink,3);a+=txt('Context in. Useful intelligence out.',208,258,11,'#696777');
 }else if(index===3){
  a+=rect(78,37,210,182,'#FFF2EC',5,'#A79EAD')+rect(78,37,210,27,'#DCD0D2',5)+rect(94,79,177,122,'none',0,'#BEB2BC');
  a+=rect(108,95,46,87,'#C5BAC4',2)+rect(167,95,85,33,'#F0BDAE',2)+rect(167,140,35,42,'#D7C8CD',2)+rect(214,140,38,42,'#D7C8CD',2);
  a+='<g class="art-float">'+rect(347,66,161,141,coral,7)+circle(427,135,43,paper,'none')+rect(408,116,37,37,ink,3)+'</g>';
  a+=`<path d="M300 134h26M319 127l7 7-7 7" fill="none" stroke="${ink}" stroke-width="2"/>`;
  a+=`<path d="M257 170l29 11-15 6-6 15z" fill="${ink}" stroke="${paper}" stroke-width="2"/>`;
 }else if(index===4){
  a+=line(110,220,540,220,'#B8ABB5');
  [55,88,131,169].forEach((h,i)=>a+=rect(143+i*89,220-h,54,h,i===3?coral:ink,5));
  a+=`<path d="M124 140L231 112 327 70 457 20" fill="none" stroke="${coral}" stroke-width="3"/><path d="M437 19l23-2-11 21" fill="none" stroke="${coral}" stroke-width="3"/>`+txt('Reach the right people.',255,255,12,'#696777');
 }else{
  a+=circle(322,134,100,'none','#C6B7C1')+circle(322,134,68,'none','#C6B7C1');
  a+=line(180,134,462,134,'#C6B7C1')+line(322,10,322,258,'#C6B7C1');
  a+='<g class="art-float">'+rect(243,63,155,141,ink,7)+rect(259,82,123,16,'#53556F',2)+line(265,116,331,116,'#A5A2B4',5)+line(265,133,365,133,'#A5A2B4',5)+line(265,150,349,150,'#A5A2B4',5)+`<path d="M335 176l10 9 20-22" fill="none" stroke="#FF8477" stroke-width="4"/>`+'</g>';
  a+=circle(422,134,9,coral,'none')+circle(222,134,6,ink,'none');
 }
 return `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">${a}</svg>`;
}

const serviceNav = document.querySelector('.service-nav');
if (serviceNav) {
 const tabs = [...serviceNav.querySelectorAll('[role="tab"]')];
 const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
 function ensureArt(index) {
  const element = panels[index].querySelector('.service-art');
  if (!element.firstElementChild) element.innerHTML = art(index);
 }
 ensureArt(0);
 function selectService(index, moveFocus = false) {
  ensureArt(index);
  tabs.forEach((tab, i) => {
   tab.setAttribute('aria-selected', String(i === index));
   tab.tabIndex = i === index ? 0 : -1;
   panels[i].hidden = i !== index;
   panels[i].classList.toggle('changing', i === index);
  });
  if (moveFocus) tabs[index].focus();
 }
 serviceNav.addEventListener('click', event => {
  const tab = event.target.closest('[role="tab"]');
  if (tab) selectService(tabs.indexOf(tab));
 });
 serviceNav.addEventListener('keydown', event => {
  const current = tabs.indexOf(event.target.closest('[role="tab"]'));
  if (current < 0) return;
  const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'];
  if (!keys.includes(event.key)) return;
  event.preventDefault();
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
   : (current + (['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : tabs.length - 1)) % tabs.length;
  selectService(next, true);
 });
}

const menu = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (menu && mobileNav) {
 function closeMenu() {
  mobileNav.hidden = true;
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
 }
 menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = open;
  menu.setAttribute('aria-expanded', String(!open));
  menu.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
 });
 mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
 document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menu.focus(); }
 });
 document.addEventListener('click', event => {
  if (!mobileNav.hidden && !mobileNav.contains(event.target) && !menu.contains(event.target)) closeMenu();
 });
}

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = reduced.matches;
const stage = document.querySelector('.engine-stage');
const world = document.querySelector('.engine-world');
const motionToggle = document.getElementById('motion-toggle');
function setMotion(value) {
 paused = value;
 document.documentElement.classList.toggle('motion-paused', paused);
 if (motionToggle) {
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.innerHTML = paused ? 'Play motion <span aria-hidden="true">▷</span>' : 'Pause motion <span aria-hidden="true">Ⅱ</span>';
 }
}
setMotion(paused);
reduced.addEventListener('change', event => setMotion(event.matches));
if (motionToggle) motionToggle.addEventListener('click', () => setMotion(!paused));
if (stage && world) {
 stage.addEventListener('pointermove', event => {
  // Keep the surface steady while a pointer is aiming at a selectable layer.
  if (paused || event.pointerType === 'touch' || layerAt(event.target)) return;
  const bounds = stage.getBoundingClientRect();
  world.style.setProperty('--ry', `${((event.clientX - bounds.left) / bounds.width - .5) * 9}deg`);
  world.style.setProperty('--rx', `${-((event.clientY - bounds.top) / bounds.height - .5) * 7}deg`);
 });
 stage.addEventListener('pointerleave', () => {
  world.style.setProperty('--rx', '0deg'); world.style.setProperty('--ry', '0deg');
 });
 const layerButtons = [...stage.querySelectorAll('[data-layer-target]')];
 const layerNames = { apps: 'Product', ai: 'Intelligence', infra: 'Infrastructure' };
 const layers = [...stage.querySelectorAll('[data-layer]')];
 const layerControls = [...layers, ...layerButtons];
 let pointerLayer = '', keyboardLayer = '';
 function renderLayerPreview() {
  const next = pointerLayer || keyboardLayer;
  stage.classList.toggle('is-previewing', Boolean(next) && next !== stage.dataset.focus);
  layers.forEach(layer => layer.classList.toggle('is-hovered', layer.dataset.layer === next));
  layerButtons.forEach(button => button.classList.toggle('is-preview', button.dataset.layerTarget === next));
 }
 function layerAt(target) {
  const element = target instanceof Element ? target.closest('[data-layer], [data-layer-target]') : null;
  return element && stage.contains(element) ? element.dataset.layer || element.dataset.layerTarget : '';
 }
 stage.addEventListener('pointerover', event => {
  if (event.pointerType === 'touch') return;
  pointerLayer = layerAt(event.target);
  renderLayerPreview();
 });
 stage.addEventListener('pointerout', event => {
  if (event.pointerType === 'touch') return;
  pointerLayer = layerAt(event.relatedTarget);
  renderLayerPreview();
 });
 stage.addEventListener('pointerleave', () => { pointerLayer = ''; renderLayerPreview(); });
 layerControls.forEach(button => {
  button.addEventListener('focus', () => {
   keyboardLayer = button.matches(':focus-visible') ? layerAt(button) : '';
   renderLayerPreview();
  });
  button.addEventListener('blur', () => { keyboardLayer = ''; renderLayerPreview(); });
 });

 function focusLayer(next) {
  // Cancel the entrance before applying a selection, even during its first frame.
  stage.classList.add('is-exploring');
  stage.dataset.focus = next;
  renderLayerPreview();
  layerControls.forEach(control => control.setAttribute('aria-pressed', String(layerAt(control) === next)));
  stage.querySelector('.layer-status').textContent = next === 'all'
   ? 'Showing all three software layers.'
   : `${layerNames[next]} layer highlighted. Select it again to show all layers.`;
 }
 function toggleLayer(layer) {
  if (layer) focusLayer(stage.dataset.focus === layer ? 'all' : layer);
 }
 // The illustrated surfaces and their text buttons share one selection state.
 stage.addEventListener('click', event => toggleLayer(layerAt(event.target)));
 stage.addEventListener('keydown', event => {
  if (event.key === 'Escape' && stage.dataset.focus !== 'all') {
   event.preventDefault(); focusLayer('all');
  } else if (event.target instanceof Element && event.target.hasAttribute('data-layer')
   && ['Enter', ' '].includes(event.key)) {
   // SVG controls need keyboard activation; native HTML buttons already provide it.
   event.preventDefault(); toggleLayer(layerAt(event.target));
  }
 });
}
if ('IntersectionObserver' in window) {
 const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
 }), { threshold: .12 });
 document.documentElement.classList.add('js-motion');
 document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
const hero = document.querySelector('.hero');
const journey = document.querySelector('.journey');
if (hero || journey) {
 let ticking = false;
 function progress() {
  if (hero) {
   const bounds = hero.getBoundingClientRect();
   hero.style.setProperty('--spread', paused ? '0px' : `${Math.max(0, Math.min(80, -bounds.top / bounds.height * 80))}px`);
  }
  if (journey) {
   const bounds = journey.getBoundingClientRect();
   journey.style.setProperty('--progress', Math.max(0, Math.min(1, (innerHeight * .86 - bounds.top) / (Math.min(innerHeight * .5, bounds.height) + 100))));
  }
  ticking = false;
 }
 addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(progress); ticking = true; } }, { passive: true });
 progress();
}
})();
