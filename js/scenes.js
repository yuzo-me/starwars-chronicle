// Живые сцены планет в шапке: back рисуется за холмами, front — поверх.
// Координаты в системе viewBox 0 0 1200 420 (как у пейзажа). Анимации — в css/scenes.css.
(function(){
 const rnd=i=>{const x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x);};

 /* ---------- Лотал ---------- */
 const blades=Array.from({length:46},(_,i)=>{const x=Math.round(i*26+rnd(i)*14),h=18+Math.round(rnd(i+9)*22);
  return `<path class="sc-blade" style="--dl:${(-rnd(i+3)*3).toFixed(2)}s" d="M${x} 420 Q${x+3} ${420-h/2} ${x+(rnd(i+5)>.5?6:-6)} ${420-h}" stroke="var(--acc2)" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".75"/>`;}).join("");
 const lothCat=(dl)=>`<g class="sc-fly" style="--d:24s;--dl:${dl}s"><g class="sc-hop"><g transform="translate(0,372)">
   <ellipse cx="10" cy="10" rx="10" ry="6" fill="#efe3c6"/><circle cx="20" cy="5" r="5" fill="#efe3c6"/>
   <path d="M17 1L16-6L20-1ZM23 1L24-6L21-1Z" fill="#efe3c6"/><path d="M6 8q2 3 0 6M11 7q2 3 0 6" stroke="#c98a4b" stroke-width="1.6" fill="none"/>
   <path d="M0 9q-6-2-8-8" stroke="#efe3c6" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="21.5" cy="4.5" r="1" fill="#2a1d14"/></g></g></g>`;
 const lothal={
  back:`<g class="sc-fly" style="--d:46s;--dl:-12s"><g transform="translate(0,74)">
    <circle cx="2" cy="12" r="5" fill="#8fe3ff" opacity=".85"/><circle cx="2" cy="12" r="9" fill="#8fe3ff" opacity=".25"/>
    <path d="M2 12L20 5L50 3L72 9L80 12L72 15L50 21L20 19Z" fill="var(--l1)"/><path d="M58 10L70 11L70 13L58 14Z" fill="#cfe9ff" opacity=".55"/></g></g>`,
  front:`<g class="sc-wolf" transform="translate(646,280)">
    <path d="M44 50q16-2 20-18" stroke="#d9d3ea" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M6 52C4 36 10 26 20 22L24 4L29 15L35 2L37 19C46 24 50 36 48 52Z" fill="#ece8f7"/>
    <path d="M30 22C40 26 44 38 42 52H48C50 36 46 24 37 19Z" fill="#c9c2de"/>
    <circle class="sc-blink" cx="31" cy="15" r="1.8" fill="#ffd75e"/><circle cx="31" cy="15" r="4" fill="#ffd75e" opacity=".3"/></g>
   ${lothCat(-3)}${lothCat(-14)}
   <g>${blades}</g>`
 };

 /* ---------- Татуин ---------- */
 const jawa=cls=>`<g class="${cls}"><g class="sc-bob">
   <path d="M7 0C2 0 0 8 0 14L-2 28H16L14 14C14 8 12 0 7 0Z" fill="#6e4a2c"/>
   <ellipse cx="7" cy="9" rx="5" ry="3.6" fill="#140d08"/><circle cx="5" cy="9" r="1.3" fill="#ffe680"/><circle cx="9" cy="9" r="1.3" fill="#ffe680"/>
   <path d="M1 17L13 24" stroke="#3b2717" stroke-width="2"/></g></g>`;
 const tatooine={
  back:`<g class="sc-fly" style="--d:150s;--dl:-55s"><g transform="translate(0,268) scale(.8)">
    <path d="M0 42L12 12L74 0L132 6L156 30L156 42Z" fill="#8a5a36"/><path d="M12 12L74 0L132 6L128 12L76 8L18 18Z" fill="#a8744a"/>
    <rect x="-2" y="42" width="160" height="12" rx="5" fill="#3e2c1e"/><g fill="#5e4430"><circle cx="12" cy="48" r="4"/><circle cx="44" cy="48" r="4"/><circle cx="78" cy="48" r="4"/><circle cx="112" cy="48" r="4"/><circle cx="144" cy="48" r="4"/></g>
    <rect x="96" y="12" width="10" height="4" fill="#ffd27a" opacity=".8"/><rect x="112" y="13" width="10" height="4" fill="#ffd27a" opacity=".8"/>
    <rect x="30" y="22" width="40" height="6" fill="#6b4529"/></g></g>`,
  front:`<g transform="translate(790,322)">
    <circle class="sc-zap" cx="10" cy="22" r="22" fill="#9fd8ff"/>
    <g class="sc-r5"><rect x="0" y="14" width="20" height="26" rx="3" fill="#e8e2d8" stroke="#9c958a"/>
     <path d="M2 14L4 3H16L18 14Z" fill="#c9853a"/><circle cx="10" cy="8" r="2" fill="#1b1b1b"/><circle cx="10" cy="8" r=".8" fill="#ff4a4a"/>
     <rect x="4" y="20" width="12" height="3" fill="#c9853a"/><rect x="-3" y="18" width="4" height="22" rx="1" fill="#cfc8bc"/><rect x="19" y="18" width="4" height="22" rx="1" fill="#cfc8bc"/></g>
    ${jawa("sc-jw1")}${jawa("sc-jw2")}</g>`
 };

 /* ---------- Корусант ---------- */
 const speeder=(c,lane,i,dir,police)=>{const d=lane.d+(i%2)*1.6,dl=-(i*lane.d/3+rnd(i+lane.y)*2).toFixed(2);
  const body=`<path d="M0 3Q2 0 8 0H22Q28 1 30 3Q28 5 22 6H8Q2 6 0 3Z" fill="${c}"/><circle cx="29" cy="3" r="1.6" fill="#fff6c8"/><circle cx="34" cy="3" r="5" fill="#fff6c8" opacity=".2"/><circle cx="1" cy="3" r="1.3" fill="#ff3b3b"/>${police?`<rect class="sc-siren" x="12" y="-2" width="6" height="2.4" rx="1"/>`:""}`;
  return `<g class="${dir>0?"sc-fly":"sc-fly-l"}" style="--d:${d}s;--dl:${dl}s"><g transform="translate(0,${lane.y})${dir<0?" scale(-1,1)":""}">${body}</g></g>`;};
 const lanes=[{y:296,d:15,dir:1},{y:318,d:11,dir:-1},{y:352,d:9,dir:1},{y:376,d:17,dir:-1}];
 const colors=["#c9d3e6","#ffd23f","#ff6b8a","#9be7ff","#e8e8e8"];
 const traffic=lanes.map((ln,li)=>[0,1,2].map(i=>speeder(colors[(li*3+i)%colors.length],ln,i+li*3,ln.dir,false)).join("")).join("");
 const chase=`<g class="sc-fly" style="--d:6s;--dl:-2s"><g transform="translate(0,336)"><path d="M0 3Q2 0 8 0H22Q28 1 30 3Q28 5 22 6H8Q2 6 0 3Z" fill="#ff9d42"/><circle cx="29" cy="3" r="1.6" fill="#fff6c8"/></g></g>
  <g class="sc-fly" style="--d:6s;--dl:-1.25s"><g transform="translate(0,336)"><path d="M0 3Q2 0 8 0H22Q28 1 30 3Q28 5 22 6H8Q2 6 0 3Z" fill="#dfe6f2"/><rect class="sc-siren" x="11" y="-2.4" width="8" height="2.6" rx="1"/><circle cx="29" cy="3" r="1.6" fill="#fff6c8"/></g></g>`;
 const wins=Array.from({length:18},(_,i)=>`<rect class="sc-win" style="--d:${(3+rnd(i)*6).toFixed(1)}s;animation-delay:${(-rnd(i+4)*6).toFixed(1)}s" x="${Math.round(30+rnd(i+1)*1140)}" y="${Math.round(140+rnd(i+2)*240)}" width="4" height="3" fill="#ffd27a"/>`).join("");
 const coruscant={
  back:`<path class="sc-beam" d="M300 420L270 60L330 60Z" fill="#cfe7ff" opacity=".07"/><path class="sc-beam b" d="M880 420L850 40L910 40Z" fill="#ffd1ec" opacity=".06"/>`,
  front:`${wins}${traffic}${chase}`
 };

 /* ---------- Хот ---------- */
 const leg=(x,b)=>`<g class="sc-leg${b?" b":""}"><rect x="${x}" y="30" width="6" height="22" fill="#7e8a95"/><rect x="${x-1}" y="50" width="8" height="20" fill="#6d7984"/><rect x="${x-3}" y="68" width="12" height="4" rx="1" fill="#5b6670"/></g>`;
 const snowspeeder=(dur,begin)=>`<g><path d="M-12 0L6-4L14 0L6 4Z" fill="#eef2f5" stroke="#8d98a3" stroke-width=".8"/><path d="M-4-3L2-3L2 3L-4 3Z" fill="#e0662e"/>
   <animateMotion dur="${dur}s" begin="${begin}s" repeatCount="indefinite" rotate="auto" path="M70 30 m-110 0 a110 34 0 1 0 220 0 a110 34 0 1 0 -220 0"/></g>`;
 const flakes=Array.from({length:60},(_,i)=>`<circle class="sc-snow" style="--d:${(6+rnd(i)*8).toFixed(1)}s;--dl:${(-rnd(i+7)*14).toFixed(1)}s;--x:${Math.round((rnd(i+3)-.5)*80)}px" cx="${Math.round(rnd(i+1)*1200)}" cy="0" r="${(1+rnd(i+2)*1.8).toFixed(1)}" fill="#fff" opacity=".85"/>`).join("");
 const hoth={
  back:"",
  front:`<g class="sc-fly" style="--d:190s;--dl:-70s"><g transform="translate(0,300)">
    <rect x="40" y="0" width="10" height="12" fill="#8d98a3"/>
    ${leg(22,false)}${leg(36,true)}${leg(78,true)}${leg(92,false)}
    <path d="M14 10L96 6L108 14L106 32L16 34Z" fill="#9aa5b0"/><path d="M14 10L96 6L108 14L16 18Z" fill="#b3bdc6"/>
    <rect x="104" y="14" width="10" height="8" fill="#8d98a3"/>
    <path d="M112 10L136 8L144 16L138 26L112 26Z" fill="#a7b1bb"/><rect x="136" y="20" width="10" height="2" fill="#5b6670"/><rect x="120" y="13" width="10" height="2.4" fill="#2b3640"/>
    ${snowspeeder(5.5,0)}${snowspeeder(5.5,-2.75)}</g></g><g>${flakes}</g>`
 };

 /* ---------- Мустафар ---------- */
 const embers=Array.from({length:28},(_,i)=>`<circle class="sc-ember" style="--d:${(3+rnd(i)*4).toFixed(1)}s;--dl:${(-rnd(i+5)*7).toFixed(1)}s" cx="${Math.round(rnd(i+1)*1200)}" cy="${Math.round(352+rnd(i+2)*22)}" r="${(1+rnd(i+3)*1.6).toFixed(1)}" fill="${rnd(i+4)>.5?"#ffb347":"#ff6a1a"}"/>`).join("");
 const geyser=(x,dl)=>`<path class="sc-geyser" style="--dl:${dl}s" d="M${x-7} 362Q${x-3} 300 ${x} 268Q${x+3} 300 ${x+7} 362Z" fill="#ff7a1a"/><path class="sc-geyser" style="--dl:${dl}s" d="M${x-3} 362Q${x} 312 ${x+3} 362Z" fill="#ffe08a"/>`;
 const mustafar={
  back:`<path d="M1040 300L1046 170H1056L1058 136H1064L1066 170H1070L1072 136H1078L1080 170H1090L1096 300Z" fill="#0e0605"/>
    <rect class="sc-pulse" x="1064" y="138" width="8" height="34" fill="#ff6a1a"/><ellipse class="sc-pulse" cx="1068" cy="150" rx="22" ry="30" fill="#ff6a1a" opacity=".18"/>
    <path d="M1052 300L1054 230H1084L1086 300Z" fill="#160a07"/><rect x="1060" y="244" width="18" height="3" fill="#ff8a3a" opacity=".7"/>`,
  front:`<path class="sc-flow" d="M0 360C200 346 400 372 620 362S980 344 1200 364" stroke="#ffd36a" stroke-width="3" fill="none" stroke-dasharray="30 60" opacity=".85"/>
    <path class="sc-flow b" d="M0 356C220 342 420 368 640 358S990 340 1200 360" stroke="#ff9a3c" stroke-width="2" fill="none" stroke-dasharray="14 76" opacity=".8"/>
    ${geyser(300,-1)}${geyser(880,-4.5)}${embers}`
 };

 window.SCENES={lothal,tatooine,coruscant,hoth,mustafar};
})();
