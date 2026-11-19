// Живые сцены планет в шапке — пиксель-арт.
// back рисуется за холмами, front — поверх. Координаты в системе viewBox 0 0 1200 420.
// Спрайты задаются строками: каждый символ — пиксель цвета из палитры, "." — пусто.
(function(){
 const rnd=i=>{const x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x);};

 const px=window.PX; /* общий рендер из js/pixel.js */
 /* два кадра анимации, сменяются по CSS */
 const frames=(a,b,speed)=>`<g class="sc-fa" style="--fs:${speed}s">${a}</g><g class="sc-fb" style="--fs:${speed}s">${b}</g>`;

 /* ================= ЛОТАЛ ================= */
 const WOLF_PAL={w:"#ece8f7",s:"#c3bbdb",y:"#ffd75e",k:"#3a3450"};
 const wolfSit=["........w.....",".......ww.w...",".......wwww...","......wwwyww..","......wwwwwwk.",".....wwwwww...","....wwwwww....","...wwwwwws....","..wwwwwwss....","..wwwwwwss....",".wwwwwwwss....","swwwwwwwwss...","swwwwwswwss...","sswwwwswwws...",".sssw.sww.ss.."];
 const wolfHowl=["..........w...",".........wwk..","........www...","......wwwyw...","......wwwww...",".....wwwwww...","....wwwwww....","...wwwwwws....","..wwwwwwss....","..wwwwwwss....",".wwwwwwwss....","swwwwwwwwss...","swwwwwswwss...","sswwwwswwws...",".sssw.sww.ss.."];
 const CAT_PAL={c:"#efe3c6",o:"#c98a4b",k:"#2a1d14"};
 const catA=["........c.c.","........cccc","c......cckc.",".cccocococc.","..cccccccc..","..c.c..c.c..",".c...c...c.."];
 const catB=["........c.c.","........cccc","c......cckc.",".cccocococc.","..cccccccc..","...cc..cc...","..c..cc..c.."];
 const GHOST_PAL={g:"#4d4278",l:"#6f64a0",e:"#8fe3ff",w:"#cfe9ff"};
 const ghost=["....gggggggg........","..gglllllllllgg.....","eegllllllllllllggg..","eegggggggggggggwwgg.","eeglllllllllllllggg.","..gggggggggggggg....","....ggggg..........."];

 const blades=Array.from({length:46},(_,i)=>{const x=Math.round(i*26+rnd(i)*14),h=18+Math.round(rnd(i+9)*22);
  return `<path class="sc-blade" style="--dl:${(-rnd(i+3)*3).toFixed(2)}s" d="M${x} 420 Q${x+3} ${420-h/2} ${x+(rnd(i+5)>.5?6:-6)} ${420-h}" stroke="var(--acc2)" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".75"/>`;}).join("");
 const lothCat=dl=>`<g class="sc-fly" style="--d:24s;--dl:${dl}s"><g class="sc-hop"><g transform="translate(0,370)">${frames(px(catA,CAT_PAL,2.6),px(catB,CAT_PAL,2.6),.18)}</g></g></g>`;
 const lothal={
  back:`<g class="sc-fly" style="--d:46s;--dl:-12s"><g transform="translate(0,68)">${px(ghost,GHOST_PAL,4,{e:"sc-pulse"})}</g></g>`,
  front:`<g class="sc-wolf" transform="translate(646,282)">${frames(px(wolfSit,WOLF_PAL,3.6,{y:"sc-blink"}),px(wolfHowl,WOLF_PAL,3.6,{y:"sc-blink"}),3.5)}</g>
   ${lothCat(-3)}${lothCat(-14)}<g>${blades}</g>`
 };

 /* ================= ТАТУИН ================= */
 const JAWA_PAL={b:"#6e4a2c",d:"#4a311c",k:"#140d08",y:"#ffe680",s:"#2f1f12",g:"#7a7f86"};
 const jawaA=["...bbb...","..bbbbb..",".bbkkkbb.",".bkykykb.",".bbkkkbb.",".bbbbbbb.","gsbbbbbbb","ggsbbbbbb",".bbsbbbbb",".bbbsbbbb",".bbbbbbbb","dbbbbbbbd","d.d...d.d"];
 const jawaB=["...bbb...","..bbbbb..",".bbkkkbb.",".bkykykb.",".bbkkkbb.",".bbbbbbb.","gsbbbbbbb","ggsbbbbbb",".bbsbbbbb",".bbbsbbbb",".bbbbbbbb",".dbbbbbd.","..d.d.d.."];
 const jawa=cls=>`<g class="${cls}">${frames(px(jawaA,JAWA_PAL,2.3),px(jawaB,JAWA_PAL,2.3),.22)}</g>`;
 const R5_PAL={o:"#c9853a",w:"#e8e2d8",g:"#9c958a",k:"#1b1b1b",r:"#ff4a4a",l:"#cfc8bc"};
 const r5=["..oooo..",".ookroo.",".oooooo.","lwwwwwwl","lwoooowl","lwwwwwwl","lwwggwwl","lwwwwwwl","lwoooowl","lwwwwwwl","lwwwwwwl","l.wwww.l","l......l","ll....ll"];
 const CRAWL_PAL={a:"#8a5a36",b:"#a8744a",c:"#6b4529",t:"#3e2c1e",w:"#5e4430",y:"#ffd27a"};
 const crawler=["..........bbbbbbbbbbbb..........","........bbaaaaaaaaaaaabb........","......bbaaaaaaaaaaaaaaaabb......","....bbaaaayyaayyaaaaaaaaaabb....","...baaaaaaaaaaaaaaaaaaaaaaaab...","..baaaaaaaaaaaaaaaaaaaaaaaaaab..",".baaacccccaaaaaaaaaaaaaaaaaaaab.","baaaacccccaaaaaaaaaaaaacccaaaaab","aaaaaaaaaaaaaaaaaaaaaaacccaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","cccccccccccccccccccccccccccccccc","ttwwttttwwttttwwttttwwttttwwtttt","twwwwttwwwwttwwwwttwwwwttwwwwttt",".tttttttttttttttttttttttttttttt."];
 const zap=["...b.b...","..bbwbb..",".bwwwwwb.","bbwwwwwbb",".bwwwwwb.","..bbwbb..","...b.b..."];
 const tatooine={
  back:`<g class="sc-fly" style="--d:150s;--dl:-55s"><g transform="translate(0,244)">${px(crawler,CRAWL_PAL,3.6)}</g></g>`,
  front:`<g transform="translate(790,322)">
    <g transform="translate(-10,6)"><g class="sc-zap">${px(zap,{b:"#6cc4ff",w:"#e9f8ff"},4.4)}</g></g>
    <g class="sc-r5">${px(r5,R5_PAL,2.8)}</g>
    ${jawa("sc-jw1")}${jawa("sc-jw2")}</g>`
 };

 /* ================= КОРУСАНТ ================= */
 const speederRows=["...dddd.......",".cccccccccccc.","rcccccccccccch",".cccccccccccc."];
 const speederPx=(c,police)=>px(speederRows,{d:"#2b3346",c,r:"#ff3b3b",h:"#fff6c8"},2.3)+(police?`<rect class="sc-siren" x="11.5" y="-3" width="9.2" height="2.6" shape-rendering="crispEdges"/>`:"")+`<rect x="34" y="3" width="6" height="2.6" fill="#fff6c8" opacity=".25" shape-rendering="crispEdges"/>`;
 const lanes=[{y:296,d:15,dir:1},{y:318,d:11,dir:-1},{y:352,d:9,dir:1},{y:376,d:17,dir:-1}];
 const colors=["#c9d3e6","#ffd23f","#ff6b8a","#9be7ff","#e8e8e8"];
 const traffic=lanes.map((ln,li)=>[0,1,2].map(i=>{const k=i+li*3,d=ln.d+(i%2)*1.6,dl=-(i*ln.d/3+rnd(k+ln.y)*2).toFixed(2);
  return `<g class="${ln.dir>0?"sc-fly":"sc-fly-l"}" style="--d:${d}s;--dl:${dl}s"><g transform="translate(0,${ln.y})${ln.dir<0?" scale(-1,1)":""}">${speederPx(colors[k%colors.length],false)}</g></g>`;}).join("")).join("");
 const chase=`<g class="sc-fly" style="--d:6s;--dl:-2s"><g transform="translate(0,336)">${speederPx("#ff9d42",false)}</g></g>
  <g class="sc-fly" style="--d:6s;--dl:-1.25s"><g transform="translate(0,336)">${speederPx("#dfe6f2",true)}</g></g>`;
 const wins=Array.from({length:18},(_,i)=>`<rect class="sc-win" style="--d:${(3+rnd(i)*6).toFixed(1)}s;animation-delay:${(-rnd(i+4)*6).toFixed(1)}s" x="${Math.round(30+rnd(i+1)*1140)}" y="${Math.round(140+rnd(i+2)*240)}" width="4" height="4" fill="#ffd27a" shape-rendering="crispEdges"/>`).join("");
 const coruscant={
  back:`<path class="sc-beam" d="M300 420L270 60L330 60Z" fill="#cfe7ff" opacity=".07"/><path class="sc-beam b" d="M880 420L850 40L910 40Z" fill="#ffd1ec" opacity=".06"/>`,
  front:`${wins}${traffic}${chase}`
 };

 /* ================= ХОТ ================= */
 const ATAT_PAL={a:"#9aa5b0",b:"#b3bdc6",c:"#7e8a95",d:"#5b6670",k:"#2b3640"};
 const atat=["....bbbbbbbbbbbbbbbbbb............","..bbaaaaaaaaaaaaaaaaaab...........",".baaaaaaaaaaaaaaaaaaaaab..........","baaaaaaaaaaaaaaaaaaaaaaab..bbbbb..","baaaaaaaaaaaaaaaaaaaaaaacccbaaaab.","baaaaaaaaaaaaaaaaaaaaaaacccaakkaab","caaaaaaaaaaaaaaaaaaaaaaacccaaaaaad","ccaaaaaaaaaaaaaaaaaaaaaaccaaddaaad",".ccccccccccccccccccccccc...cdddd..","..cc...cc.........cc...cc........."];
 const legRows=["cc","cc","cc","cc","dd","cc","cc","cc","cc","cc","dddd"];
 const S=3;
 const leg=(col,b)=>`<g transform="translate(${col*S},${10*S})"><g class="sc-leg${b?" b":""}">${px(legRows,{c:"#7e8a95",d:"#5b6670"},S)}</g></g>`;
 const snowspeeder=(dur,begin)=>`<g>${px(["..gww.....","wwwwwwwwo.","wooowwwwww","..gww....."],{w:"#eef2f5",o:"#e0662e",g:"#8d98a3"},2.2)}
   <animateMotion dur="${dur}s" begin="${begin}s" repeatCount="indefinite" rotate="auto" path="M50 30 m-110 0 a110 34 0 1 0 220 0 a110 34 0 1 0 -220 0"/></g>`;
 const flakes=Array.from({length:60},(_,i)=>{const sz=rnd(i+2)>.6?4:2.5;return `<rect class="sc-snow" style="--d:${(6+rnd(i)*8).toFixed(1)}s;--dl:${(-rnd(i+7)*14).toFixed(1)}s;--x:${Math.round((rnd(i+3)-.5)*80)}px" x="${Math.round(rnd(i+1)*1200)}" y="0" width="${sz}" height="${sz}" fill="#fff" opacity=".85" shape-rendering="crispEdges"/>`;}).join("");
 const hoth={
  back:"",
  front:`<g class="sc-fly" style="--d:190s;--dl:-70s"><g transform="translate(0,300)">
    ${leg(2,false)}${leg(7,true)}${leg(18,true)}${leg(23,false)}
    ${px(atat,ATAT_PAL,S)}
    ${snowspeeder(5.5,0)}${snowspeeder(5.5,-2.75)}</g></g><g>${flakes}</g>`
 };

 /* ================= МУСТАФАР ================= */
 const castle=[];
 for(let y=0;y<34;y++){
  if(y<10)castle.push(y<2?"..k......k..":"..kk....kk..");
  else if(y<12)castle.push(".kkkkkkkkkk.");
  else if(y<24)castle.push(y===16?".kkkoooookk.":"..kkkkkkkk..");
  else castle.push(y>30?"kkkkkkkkkkkk":".kkkkkkkkkk.");
 }
 const embers=Array.from({length:28},(_,i)=>{const sz=rnd(i+3)>.5?4:2.6;return `<rect class="sc-ember" style="--d:${(3+rnd(i)*4).toFixed(1)}s;--dl:${(-rnd(i+5)*7).toFixed(1)}s" x="${Math.round(rnd(i+1)*1200)}" y="${Math.round(352+rnd(i+2)*22)}" width="${sz}" height="${sz}" fill="${rnd(i+4)>.5?"#ffb347":"#ff6a1a"}" shape-rendering="crispEdges"/>`;}).join("");
 const geyserPx=(x,dl)=>{const rows=["...y...","..yoy..","..ooo..",".oyyo..",".ooyoo.","..ooo..",".ooyoo.","oooyooo","ooyyyoo","ooooooo"];
  return `<g transform="translate(${x-14},322)"><g class="sc-geyser" style="--dl:${dl}s">${px(rows,{o:"#ff7a1a",y:"#ffe08a"},4)}</g></g>`;};
 const mustafar={
  back:"",
  front:`<g transform="translate(1046,176)"><rect class="sc-pulse" x="${4.5*4}" y="${1*4}" width="${3*4}" height="${9*4}" fill="#ff6a1a" opacity=".85" shape-rendering="crispEdges"/>
    ${px(castle,{k:"#0e0605",o:"#ff8a3a"},4,{o:"sc-pulse"})}</g>
    <path class="sc-flow" d="M0 360C200 346 400 372 620 362S980 344 1200 364" stroke="#ffd36a" stroke-width="3" fill="none" stroke-dasharray="30 60" opacity=".85"/>
    <path class="sc-flow b" d="M0 356C220 342 420 368 640 358S990 340 1200 360" stroke="#ff9a3c" stroke-width="2" fill="none" stroke-dasharray="14 76" opacity=".8"/>
    ${geyserPx(300,-1)}${geyserPx(880,-4.5)}${embers}`
 };

 /* ================= НАБУ ================= */
 const N1_PAL={y:"#f2c230",c:"#dfe4ea",s:"#9aa3ad",k:"#26323f",e:"#8fd6ff"};
 const n1=["...........cc.........","eecccyyyyyyyykkyyy....","eecccyyyyyyyyyyyyyyyy.","...ssccccyyyyyyyyyyyyy","eecccyyyyyyyyyyyyyyyy.","eecccyyyyyyyyyyyy.....","...........cc........."];
 const SHAAK_PAL={b:"#c9a46a",w:"#efe4cc",d:"#5a4a33",k:"#2a2015"};
 const shaakA=["...bbbbbbb....",".bbbbbbbbbbbb.","bbbbbbbbbbbbbb","bbbwwwwwwbbbkb","bbwwwwwwwwbbbb",".bwwwwwwwwbbb.","..dd..dd..dd..","..d...d....d.."];
 const shaakB=["...bbbbbbb....",".bbbbbbbbbbbb.","bbbbbbbbbbbbbb","bbbwwwwwwbbbkb","bbwwwwwwwwbbbb",".bwwwwwwwwbbb.","..dd..dd..dd..","...d...d..d..."];
 const fall=(x,y1,y2,w)=>`<rect x="${x}" y="${y1}" width="${w}" height="${y2-y1}" fill="#e8f6fb" opacity=".55"/>
   <path class="sc-fall" d="M${x+w/2} ${y1}V${y2}" stroke="#ffffff" stroke-width="${w-2}" stroke-dasharray="10 14" fill="none"/>
   <ellipse cx="${x+w/2}" cy="${y2}" rx="${w*1.4}" ry="5" fill="#ffffff" opacity=".7" class="sc-pulse"/>`;
 const shaak=(dl,y,sc)=>`<g class="sc-fly" style="--d:120s;--dl:${dl}s"><g transform="translate(0,${y}) scale(${sc})">${frames(px(shaakA,SHAAK_PAL,2.6),px(shaakB,SHAAK_PAL,2.6),.5)}</g></g>`;
 const naboo={
  back:"",
  front:`${fall(740,214,330,12)}${fall(1052,214,328,10)}${fall(1150,214,326,8)}
   <g class="sc-fly" style="--d:7s;--dl:-2s"><g transform="translate(0,64)">${px(n1,N1_PAL,2.6)}</g></g>
   <g class="sc-fly" style="--d:7s;--dl:-1.6s"><g transform="translate(-30,84)">${px(n1,N1_PAL,2.2)}</g></g>
   ${shaak(-20,366,1)}${shaak(-58,372,.85)}${shaak(-90,368,1.1)}`
 };

 window.SCENES={lothal,tatooine,coruscant,hoth,mustafar,naboo};
})();
