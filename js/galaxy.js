/* ============ ГЛАВНЫЙ ЭКРАН: КАРТА ГАЛАКТИКИ И ГИПЕРПРЫЖОК ============
   Карусель вращающихся пиксельных планет (крутится мышью, пальцем, колесом, стрелками),
   под выбранной — пейзаж, описание, маскот; цвета страницы подстраиваются под планету.
   «Прыжок» — гиперпространство в стиле эпизодов IV–VI с синтезированным звуком. */
(function(){
 const IDS=Object.keys(PLANETS), N=IDS.length;
 let el, starsCv, sx, rafId=0, pos=0, target=0, vel=0, drag=null, prevTheme=null, jumping=false, lastFront=-1;
 const spheres=[];

 /* ---------- шум и текстуры планет ---------- */
 const H=(x,y,z)=>{const s=Math.sin(x*127.1+y*311.7+z*74.7)*43758.5453;return s-Math.floor(s);};
 function noise(x,y,z){const X=Math.floor(x),Y=Math.floor(y),Z=Math.floor(z),fx=x-X,fy=y-Y,fz=z-Z;
  const u=fx*fx*(3-2*fx),v=fy*fy*(3-2*fy),w=fz*fz*(3-2*fz);const L=(a,b,t)=>a+(b-a)*t;
  return L(L(L(H(X,Y,Z),H(X+1,Y,Z),u),L(H(X,Y+1,Z),H(X+1,Y+1,Z),u),v),L(L(H(X,Y,Z+1),H(X+1,Y,Z+1),u),L(H(X,Y+1,Z+1),H(X+1,Y+1,Z+1),u),v),w);}
 const fbm=(x,y,z)=>noise(x,y,z)*.6+noise(x*2.1,y*2.1,z*2.1)*.3+noise(x*4.3,y*4.3,z*4.3)*.1;
 const hex=c=>[parseInt(c.slice(1,3),16),parseInt(c.slice(3,5),16),parseInt(c.slice(5,7),16)];
 const C=o=>{const r={};for(const k in o)r[k]=hex(o[k]);return r;};
 const TEX={
  lothal:(()=>{const c=C({g:"#8fa86a",y:"#cdbb5e",d:"#5f7a45",r:"#7a6f9a"});return(x,y,z)=>{const n=fbm(x*2.2+3,y*2.2,z*2.2);if(n>.68)return c.r;return n>.5?c.y:n>.36?c.g:c.d;};})(),
  tatooine:(()=>{const c=C({a:"#f0c98a",b:"#e3b779",d:"#c98a4a",e:"#b97a3e"});return(x,y,z)=>{const n=fbm(x*1.6,y*6+fbm(x,y,z)*2,z*1.6);return n>.62?c.a:n>.48?c.b:n>.36?c.d:c.e;};})(),
  coruscant:(()=>{const c=C({b:"#1a2440",d:"#121a30",l:"#ffd27a",c:"#3fd0ff",p:"#ff4fa3"});return(x,y,z)=>{const n=H(Math.floor(x*14),Math.floor(y*14),Math.floor(z*14));if(n>.86)return c.l;if(n>.82)return c.c;if(n>.8)return c.p;return fbm(x*3,y*3,z*3)>.5?c.b:c.d;};})(),
  hoth:(()=>{const c=C({w:"#f4f8fb",i:"#d9e6ef",b:"#b8cddc",d:"#93adc0"});return(x,y,z)=>{const n=fbm(x*2.6,y*2.6,z*2.6);return n>.6?c.w:n>.47?c.i:n>.36?c.b:c.d;};})(),
  mustafar:(()=>{const c=C({k:"#2a120c",d:"#160a07",o:"#ff5a2a",y:"#ffb238"});return(x,y,z)=>{const n=fbm(x*2.4,y*2.4,z*2.4),e=Math.abs(n-.5);if(e<.025)return c.y;if(e<.055)return c.o;return n>.5?c.k:c.d;};})(),
  naboo:(()=>{const c=C({o:"#3f7fb5",s:"#5c9bd0",g:"#5f8d4e",l:"#8fb37a",w:"#f4f8fb"});return(x,y,z)=>{if(fbm(x*2+9,y*3,z*2)>.66)return c.w;const n=fbm(x*1.8,y*1.8,z*1.8);return n>.56?c.l:n>.5?c.g:n>.45?c.s:c.o;};})()
 };
 const RIM={lothal:"#c9b6ff",tatooine:"#ffd9a0",coruscant:"#7fb8ff",hoth:"#e8f6ff",mustafar:"#ff7a3a",naboo:"#9fdcff"};
 const SZ=48;
 function drawSphere(o,rot){
  const g=o.ctx,img=o.img,d=img.data,tex=TEX[o.id],R=SZ/2-1.5,rim=hex(RIM[o.id]);
  const cr=Math.cos(rot),sr=Math.sin(rot);
  for(let py=0;py<SZ;py++)for(let px=0;px<SZ;px++){
   const i=(py*SZ+px)*4,nx=(px+.5-SZ/2)/R,ny=(py+.5-SZ/2)/R,r2=nx*nx+ny*ny;
   if(r2>1){ // атмосфера
    const a=r2<1.12?(1.12-r2)/.12:0;d[i]=rim[0];d[i+1]=rim[1];d[i+2]=rim[2];d[i+3]=Math.round(a*120);continue;}
   const nz=Math.sqrt(1-r2),x=nx*cr+nz*sr,z=-nx*sr+nz*cr;
   const c=tex(x+1.3,ny+1.3,z+1.3);
   let l=Math.max(0,-.55*nx-.45*ny+.7*nz)*1.05+.12; l=Math.round(l*5)/5; // пиксельные ступени света
   const rimL=Math.pow(1-nz,3)*.6;
   d[i]=Math.min(255,c[0]*l+rim[0]*rimL);d[i+1]=Math.min(255,c[1]*l+rim[1]*rimL);d[i+2]=Math.min(255,c[2]*l+rim[2]*rimL);d[i+3]=255;}
  g.putImageData(img,0,0);
 }

 /* ---------- звук гиперпрыжка (синтез) ---------- */
 let actx=null;
 const muted=()=>ls("swc-mute")==="1";
 function jumpSound(){
  if(muted())return;
  try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();}catch(_){return;}
  const a=actx,t=a.currentTime,out=a.createGain();out.gain.value=.55;out.connect(a.destination);
  // 1) низкий нарастающий гул двигателей
  const hum=a.createOscillator(),hf=a.createBiquadFilter(),hg=a.createGain();hum.type="sawtooth";hum.frequency.setValueAtTime(48,t);hum.frequency.exponentialRampToValueAtTime(95,t+1.15);
  hf.type="lowpass";hf.frequency.setValueAtTime(260,t);hf.frequency.exponentialRampToValueAtTime(1200,t+1.15);
  hg.gain.setValueAtTime(.0001,t);hg.gain.exponentialRampToValueAtTime(.5,t+.9);hg.gain.exponentialRampToValueAtTime(.0001,t+1.6);
  hum.connect(hf).connect(hg).connect(out);hum.start(t);hum.stop(t+1.7);
  // 2) вой разгона, уходящий вверх
  [1,1.006].forEach(dt=>{const o=a.createOscillator(),bp=a.createBiquadFilter(),g=a.createGain();o.type="sawtooth";
   o.frequency.setValueAtTime(140*dt,t+.1);o.frequency.exponentialRampToValueAtTime(1900*dt,t+1.2);
   bp.type="bandpass";bp.Q.value=3;bp.frequency.setValueAtTime(400,t+.1);bp.frequency.exponentialRampToValueAtTime(3200,t+1.2);
   g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.18,t+1);g.gain.exponentialRampToValueAtTime(.0001,t+1.35);
   o.connect(bp).connect(g).connect(out);o.start(t);o.stop(t+1.4);});
  // 3) рывок: шумовой «вжух» с уходящим фильтром
  const len=a.sampleRate*1.2,buf=a.createBuffer(1,len,a.sampleRate),ch=buf.getChannelData(0);for(let i=0;i<len;i++)ch[i]=Math.random()*2-1;
  const ns=a.createBufferSource(),nf=a.createBiquadFilter(),ng=a.createGain();ns.buffer=buf;nf.type="bandpass";nf.Q.value=1.2;
  nf.frequency.setValueAtTime(4200,t+1.12);nf.frequency.exponentialRampToValueAtTime(180,t+2.1);
  ng.gain.setValueAtTime(.0001,t+1.1);ng.gain.exponentialRampToValueAtTime(.9,t+1.18);ng.gain.exponentialRampToValueAtTime(.0001,t+2.2);
  ns.connect(nf).connect(ng).connect(out);ns.start(t+1.1);
  // 4) раскат
  const b=a.createOscillator(),bg=a.createGain();b.type="sine";b.frequency.setValueAtTime(90,t+1.15);b.frequency.exponentialRampToValueAtTime(32,t+2);
  bg.gain.setValueAtTime(.0001,t+1.14);bg.gain.exponentialRampToValueAtTime(.8,t+1.2);bg.gain.exponentialRampToValueAtTime(.0001,t+2.1);
  b.connect(bg).connect(out);b.start(t+1.12);b.stop(t+2.2);
 }

 /* ---------- звёзды и гиперпространство ---------- */
 const STARS=Array.from({length:420},()=>({x:(Math.random()*2-1),y:(Math.random()*2-1),z:Math.random()*1+.05}));
 let warp=0;
 function drawStars(dt){
  const cv=starsCv,w=cv.width,h=cv.height,g=sx;
  g.fillStyle=warp>0?`rgba(4,6,14,${.55-warp*.3})`:"#05060e";g.fillRect(0,0,w,h);
  const cx=w/2,cy=h/2,f=Math.max(w,h)*.5,speed=.02+warp*warp*2.4;
  for(const s of STARS){
   const pz=s.z; s.z-=speed*dt;
   if(s.z<=.02){s.x=Math.random()*2-1;s.y=Math.random()*2-1;s.z=1;continue;}
   const x=cx+s.x/s.z*f*.5,y=cy+s.y/s.z*f*.5,ox=cx+s.x/pz*f*.5,oy=cy+s.y/pz*f*.5;
   const b=Math.min(1,(1-s.z)*1.4);
   if(warp>.05){g.strokeStyle=`rgba(${200+55*b|0},${220+35*b|0},255,${b})`;g.lineWidth=1+warp*1.6*b;g.beginPath();g.moveTo(ox,oy);g.lineTo(x,y);g.stroke();}
   else{g.fillStyle=`rgba(230,236,255,${b})`;const z=b>.7?2:1;g.fillRect(x|0,y|0,z,z);}
  }
 }
 function resize(){starsCv.width=innerWidth;starsCv.height=innerHeight;}

 /* ---------- карусель ---------- */
 function layout(){
  const wide=innerWidth>760,R=wide?Math.min(innerWidth*.34,420):innerWidth*.36;
  const items=el.querySelectorAll(".gx-pl");
  items.forEach((b,i)=>{
   let a=((i-pos)/N)*Math.PI*2;
   const x=Math.sin(a)*R,z=Math.cos(a),k=(z+1)/2,sc=.32+.68*Math.pow(k,1.6);
   b.style.transform=`translate(-50%,-50%) translate(${x.toFixed(1)}px,${(-z*18+ (1-k)*-30).toFixed(1)}px) scale(${sc.toFixed(3)})`;
   b.style.opacity=(.25+.75*k).toFixed(2);b.style.zIndex=Math.round(k*100);
   b.style.filter=`blur(${((1-k)*2.2).toFixed(1)}px)`;
   b.lastElementChild.style.opacity=k>.93?1:0;
  });
  const front=((Math.round(pos)%N)+N)%N;
  if(front!==lastFront){lastFront=front;focus(IDS[front]);}
 }
 function focus(id){
  document.documentElement.setAttribute("data-planet",id);
  const info=el.querySelector(".gx-info");info.classList.remove("in");void info.offsetWidth;info.classList.add("in");
  el.querySelector(".gx-name").textContent=plT(id,"n");
  el.querySelector(".gx-sector").textContent=plT(id,"s");
  el.querySelector(".gx-desc").textContent=plT(id,"d");
  el.querySelector(".gx-facts").textContent=plT(id,"f");
  el.querySelector(".gx-mascot").innerHTML=MASCOT[id].svg;
  el.querySelector(".gx-mname").textContent=L("Маскот: ","Mascot: ")+mName(id);
  el.querySelector(".gx-land").innerHTML=`<svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax slice">${landSVG(id)}</svg>`;
  const cs=getComputedStyle(document.documentElement);
  el.querySelector(".gx-land").style.background=`linear-gradient(180deg,${cs.getPropertyValue("--sky1")},${cs.getPropertyValue("--sky2")} 62%,${cs.getPropertyValue("--sky3")})`;
  el.querySelector(".gx-go").textContent=L("Прыжок на ","Jump to ")+plT(id,"n");
 }
 let last=0;
 function loop(t){
  const dt=Math.min(.05,(t-(last||t))/1000);last=t;
  if(!drag){ // доводка к ближайшей планете с пружиной
   const f=(target-pos);vel=vel*.82+f*.12;pos+=vel; if(Math.abs(f)<.0005&&Math.abs(vel)<.0005)pos=target;}
  layout();
  drawStars(dt);
  spheres.forEach((o,i)=>{o.rot+=dt*(.35+(i%3)*.08);drawSphere(o,o.rot);});
  rafId=requestAnimationFrame(loop);
 }
 const step=d=>{if(jumping)return;target=Math.round(target)+d;};

 /* ---------- построение ---------- */
 function build(){
  el=document.createElement("div");el.className="gx";el.id="galaxy";el.setAttribute("role","dialog");el.setAttribute("aria-modal","true");el.hidden=true;
  el.innerHTML=`<canvas class="gx-stars"></canvas><div class="gx-core"></div><div class="gx-flash"></div>
   <div class="gx-top"><div class="gx-brand mono"></div><div class="gx-actions"><button class="btn gx-mute" type="button"></button><button class="btn gx-close" type="button"></button></div></div>
   <div class="gx-stage"><button class="btn gx-arrow l" type="button" aria-label="←">‹</button><div class="gx-ring">${IDS.map((id,i)=>`<button class="gx-pl" type="button" data-i="${i}" aria-label="${plT(id,"n")}"><canvas width="${SZ}" height="${SZ}"></canvas><span>${plT(id,"n")}</span></button>`).join("")}</div><button class="btn gx-arrow r" type="button" aria-label="→">›</button></div>
   <div class="gx-info"><div class="gx-text"><div class="gx-sector mono"></div><h2 class="gx-name"></h2><p class="gx-desc"></p><div class="gx-facts mono"></div>
     <div class="gx-row"><button class="btn primary gx-go" type="button"></button><span class="gx-hint"></span></div></div>
    <div class="gx-side"><div class="gx-land"></div><div class="gx-m"><div class="gx-mascot"></div><div class="gx-mname mono"></div></div></div></div>`;
  document.body.appendChild(el);
  starsCv=el.querySelector(".gx-stars");sx=starsCv.getContext("2d");resize();addEventListener("resize",resize);
  el.querySelectorAll(".gx-pl canvas").forEach((cv,i)=>{const ctx=cv.getContext("2d");spheres.push({id:IDS[i],ctx,img:ctx.createImageData(SZ,SZ),rot:i*1.3});});
  // управление
  el.querySelector(".gx-arrow.l").onclick=()=>step(-1);
  el.querySelector(".gx-arrow.r").onclick=()=>step(1);
  el.querySelector(".gx-go").onclick=()=>jump(IDS[((Math.round(target)%N)+N)%N]);
  el.querySelector(".gx-close").onclick=()=>close(true);
  el.querySelector(".gx-mute").onclick=()=>{ls("swc-mute",muted()?"0":"1");texts();};
  el.querySelectorAll(".gx-pl").forEach(b=>b.onclick=()=>{if(b.dataset.moved==="1"){b.dataset.moved="";return;}
   const i=+b.dataset.i,front=((Math.round(target)%N)+N)%N;
   if(i===front)jump(IDS[i]);else{let d=i-front;if(d>N/2)d-=N;if(d<-N/2)d+=N;target=Math.round(target)+d;}});
  let wheelT=0;
  el.addEventListener("wheel",e=>{e.preventDefault();const now=Date.now();if(now-wheelT<180)return;wheelT=now;step((e.deltaY||e.deltaX)>0?1:-1);},{passive:false});
  const stage=el.querySelector(".gx-stage");
  stage.addEventListener("pointerdown",e=>{if(jumping||e.target.closest(".gx-arrow"))return;drag={x:e.clientX,p:pos,moved:false,t:Date.now(),lx:e.clientX};stage.setPointerCapture(e.pointerId);});
  stage.addEventListener("pointermove",e=>{if(!drag)return;const dx=e.clientX-drag.x;if(Math.abs(dx)>6)drag.moved=true;
   vel=-(e.clientX-drag.lx)/220;drag.lx=e.clientX;pos=drag.p-dx/220;});
  stage.addEventListener("pointerup",e=>{if(!drag)return;if(drag.moved){const b=e.target.closest(".gx-pl");if(b)b.dataset.moved="1";}
   target=Math.round(pos+vel*6);drag=null;});
  addEventListener("keydown",e=>{if(el.hidden||jumping)return;
   if(e.key==="ArrowRight"){step(1);e.preventDefault();}else if(e.key==="ArrowLeft"){step(-1);e.preventDefault();}
   else if(e.key==="Enter"){el.querySelector(".gx-go").click();e.preventDefault();}
   else if(e.key==="Escape"&&!el.querySelector(".gx-close").hidden)close(true);});
 }
 function texts(){
  el.querySelector(".gx-brand").textContent=L("Голоархив · карта Галактики","Holoarchive · galaxy map");
  el.querySelector(".gx-hint").textContent=L("Крути планеты мышью, пальцем, колесом или стрелками","Spin the planets with mouse, touch, wheel or arrow keys");
  el.querySelector(".gx-mute").textContent=muted()?L("🔇 Звук выкл.","🔇 Sound off"):L("🔊 Звук","🔊 Sound");
  el.querySelector(".gx-close").textContent="✕ "+L("Закрыть","Close");
  el.querySelectorAll(".gx-pl").forEach((b,i)=>{b.querySelector("span").textContent=plT(IDS[i],"n");b.setAttribute("aria-label",plT(IDS[i],"n"));});
  if(lastFront>=0)focus(IDS[lastFront]);
 }

 /* ---------- открыть / прыжок / закрыть ---------- */
 function open(opts){
  opts=opts||{};if(!el)build();
  prevTheme=theme;jumping=false;warp=0;el.classList.remove("jump","out");
  el.querySelector(".gx-close").hidden=!!opts.first;
  const i=Math.max(0,IDS.indexOf(theme));pos=target=i;vel=0;lastFront=-1;
  texts();el.hidden=false;document.documentElement.classList.add("gx-open");
  cancelAnimationFrame(rafId);last=0;rafId=requestAnimationFrame(loop);
  setTimeout(()=>{el.querySelector(".gx-go").focus({preventScroll:true});el.scrollTop=0;el.scrollLeft=0;},50);
 }
 function close(restore){
  if(restore){document.documentElement.setAttribute("data-planet",prevTheme||theme);}
  el.hidden=true;document.documentElement.classList.remove("gx-open");cancelAnimationFrame(rafId);
 }
 function jump(id){
  if(jumping)return;jumping=true;ls("swc-galaxy-seen","1");
  target=pos=IDS.indexOf(id);
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  jumpSound();el.classList.add("jump");
  const t0=performance.now(),D=reduce?200:1500;
  (function ramp(){const k=Math.min(1,(performance.now()-t0)/D);warp=k<.25?k*.6:.15+Math.pow((k-.25)/.75,2)*1.2;
   if(k<1){requestAnimationFrame(ramp);return;}
   // вспышка и выход на планету
   el.classList.add("out");
   theme=id;applyTheme();persist();
   ["#detail","#newsSheet","#sheet"].forEach(s=>{const x=document.querySelector(s);if(x)x.hidden=true;});
   if(typeof detailId!=="undefined"&&detailId)closeDetail();
   window.scrollTo({top:0,behavior:"instant"});
   setTimeout(()=>{close(false);el.classList.remove("jump","out");jumping=false;warp=0;say(L("С прибытием на ","Welcome to ")+plT(id,"n")+"!");},reduce?50:650);
  })();
 }

 window.Galaxy={open,close};
 // при первом заходе — карта галактики
 if(!ls("swc-galaxy-seen"))open({first:true});
})();
