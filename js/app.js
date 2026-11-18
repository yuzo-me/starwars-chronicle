/* ============ PLANETS ============ */
const PLANETS={
 lothal:{n:"Лотал",s:"Внешнее Кольцо · сектор Лотал",
  d:"Степной мир бесконечных травяных равнин, над которыми встают каменные шпили. Когда-то здесь было тихое захолустье, пока Империя не превратила его в фабрику для звёздного флота. Родина Эзры Бриджера и лот-волков, место скрытого храма джедаев и прохода в Мир между мирами.",
  f:"Климат: умеренный, травяные равнины · Появления: «Повстанцы», «Асока», «Бракованная партия»"},
 tatooine:{n:"Татуин",s:"Внешнее Кольцо · система Татуу",
  d:"Пустынная планета у двух солнц, где воду добывают из воздуха, а законы пишут хатты. Отсюда родом оба Скайуокера, здесь прятался Оби-Ван, а в Мос-Эйсли собиралась вся шваль Галактики.",
  f:"Климат: засушливый, пустыни · Появления: эпизоды I–VI, «Мандалорец», «Книга Бобы Фетта», «Оби-Ван Кеноби»"},
 coruscant:{n:"Корусант",s:"Глубокое Ядро · столица Галактики",
  d:"Город размером с планету: тысячи уровней, от сенатских шпилей до нижних ярусов, куда не доходит солнце. Сердце Республики, затем Империи. Здесь стоял Храм джедаев и родился Приказ 66.",
  f:"Климат: искусственный, сплошной мегаполис · Появления: эпизоды I–III, «Войны клонов», «Андор», «Аколит»"},
 hoth:{n:"Хот",s:"Внешнее Кольцо · система Хот",
  d:"Ледяной мир метелей и снежных пустошей, где ночью не выжить без укрытия. Альянс повстанцев спрятал здесь Эхо-базу. Её обнаружение обернулось одной из самых известных битв Галактики.",
  f:"Климат: ледниковый, тундра · Появления: «Империя наносит ответный удар»"},
 mustafar:{n:"Мустафар",s:"Внешнее Кольцо · сектор Атравис",
  d:"Вулканический мир рек лавы и чёрного базальта. Здесь Оби-Ван сразился с Энакином, а позже Вейдер построил свой замок прямо над потоком магмы.",
  f:"Климат: вулканический · Появления: «Месть ситхов», «Изгой-один», «Оби-Ван Кеноби», «Повстанцы»"}
};
function landSVG(p){
 const sky=`<defs><linearGradient id="g_${p}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--l2)"/><stop offset="1" stop-color="var(--l3)"/></linearGradient></defs>`;
 if(p==="tatooine")return sky+`<circle cx="880" cy="140" r="46" fill="var(--orb)" opacity=".95"/><circle cx="975" cy="175" r="30" fill="var(--orb)" opacity=".8"/>
<path d="M0 300 C180 250 300 270 470 290 S760 240 960 270 1120 300 1200 285 V420 H0Z" fill="var(--l1)"/>
<path d="M0 350 C200 310 380 330 560 345 S880 300 1200 340 V420 H0Z" fill="var(--l2)"/>
<path d="M0 395 C260 370 520 385 760 380 S1050 370 1200 390 V420 H0Z" fill="var(--l3)"/>`;
 if(p==="coruscant"){let b="",w="";let x=0,i=0;while(x<1200){const bw=30+((i*37)%55),bh=90+((i*71)%230);b+=`<rect x="${x}" y="${420-bh}" width="${bw}" height="${bh}" fill="${i%2?'var(--l1)':'var(--l2)'}"/>`;for(let k=0;k<4;k++){const wy=420-bh+12+k*((bh-20)/4);if((i+k)%3)w+=`<rect x="${x+6+(k*7)%(bw-10)}" y="${wy.toFixed(0)}" width="3" height="2" fill="var(--acc)" opacity=".8"/>`;}x+=bw+4;i++;}
  return `<circle cx="180" cy="110" r="26" fill="var(--orb)" opacity=".5"/><path d="M0 330 H1200 V420 H0Z" fill="var(--l3)"/>`+b+w+`<path d="M0 404 H1200 V420 H0Z" fill="var(--acc2)" opacity=".35"/>`;}
 if(p==="hoth")return `<circle cx="300" cy="120" r="34" fill="var(--orb)"/><path d="M0 300 L120 210 L210 270 L330 170 L460 280 L560 220 L700 300 L820 190 L960 285 L1080 230 L1200 290 V420 H0Z" fill="var(--l1)"/>
<path d="M320 175 L330 170 L345 182 L332 190Z M815 196 L820 190 L835 202Z" fill="var(--l3)"/>
<path d="M0 350 C220 320 420 345 640 335 S1000 320 1200 345 V420 H0Z" fill="var(--l2)"/><path d="M0 390 C300 375 700 395 1200 380 V420 H0Z" fill="var(--l3)"/>`;
 if(p==="mustafar")return `<circle cx="1000" cy="110" r="30" fill="var(--orb)" opacity=".35"/><path d="M0 310 L90 220 L150 270 L260 160 L340 260 L430 200 L520 290 L640 180 L740 270 L860 210 L960 300 L1080 200 L1200 270 V420 H0Z" fill="var(--l1)"/>
<path d="M0 345 C200 330 400 360 620 350 S980 330 1200 352 V372 C980 352 640 380 400 372 S120 360 0 372Z" fill="var(--l3)" opacity=".95"/>
<path d="M0 372 C200 362 420 385 650 376 S1000 362 1200 376 V420 H0Z" fill="var(--l2)"/>`;
 /* lothal */
 return sky+`<circle cx="930" cy="120" r="38" fill="var(--orb)" opacity=".9"/><circle cx="1010" cy="90" r="14" fill="var(--orb)" opacity=".6"/>
<path d="M120 300 L132 150 L150 140 L166 160 L176 300Z M250 300 L262 200 L282 196 L290 300Z M760 300 L772 120 L790 108 L812 130 L822 300Z M860 300 L870 210 L890 205 L898 300Z" fill="var(--l1)"/>
<path d="M0 310 C150 280 330 300 520 296 S860 270 1200 300 V420 H0Z" fill="var(--l1)" opacity=".75"/>
<path d="M0 340 C180 315 400 345 620 330 S960 312 1200 338 V420 H0Z" fill="url(#g_${p})"/>
<path d="M0 390 C260 370 540 392 820 378 S1100 372 1200 384 V420 H0Z" fill="var(--l3)"/>`;
}

/* ============ POSTERS & MASCOTS ============ */
const POSTER_ALIAS={cw0:"cw1",cw7a:"cw7",cw7b:"cw7",totj1:"totj",totj4:"totj",totj5:"totj",totj6:"totj",maul2:"maul"};
const posterOf=e=>"posters/"+(POSTER_ALIAS[e.id]||e.id)+".jpg";
const CREDITS={
 ep1:["Режиссёр","Джордж Лукас","Лиам Нисон, Юэн Макгрегор, Натали Портман, Джейк Ллойд"],
 ep2:["Режиссёр","Джордж Лукас","Хейден Кристенсен, Юэн Макгрегор, Натали Портман, Кристофер Ли"],
 ep3:["Режиссёр","Джордж Лукас","Хейден Кристенсен, Юэн Макгрегор, Натали Портман, Иэн Макдермид"],
 ep4:["Режиссёр","Джордж Лукас","Марк Хэмилл, Харрисон Форд, Кэрри Фишер, Алек Гиннесс"],
 ep5:["Режиссёр","Ирвин Кершнер","Марк Хэмилл, Харрисон Форд, Кэрри Фишер, Билли Ди Уильямс"],
 ep6:["Режиссёр","Ричард Маркуанд","Марк Хэмилл, Харрисон Форд, Кэрри Фишер, Иэн Макдермид"],
 ep7:["Режиссёр","Дж. Дж. Абрамс","Дейзи Ридли, Джон Бойега, Адам Драйвер, Оскар Айзек"],
 ep8:["Режиссёр","Райан Джонсон","Дейзи Ридли, Марк Хэмилл, Адам Драйвер, Кэрри Фишер"],
 ep9:["Режиссёр","Дж. Дж. Абрамс","Дейзи Ридли, Адам Драйвер, Джон Бойега, Оскар Айзек"],
 rogue:["Режиссёр","Гарет Эдвардс","Фелисити Джонс, Диего Луна, Бен Мендельсон, Донни Йен"],
 solo:["Режиссёр","Рон Ховард","Олден Эренрайк, Эмилия Кларк, Дональд Гловер, Вуди Харрельсон"],
 cwfilm:["Режиссёр","Дэйв Филони","Голоса: Мэтт Лантер, Эшли Экштейн, Джеймс Арнольд Тейлор"],
 mandofilm:["Режиссёр","Джон Фавро","Педро Паскаль, Сигурни Уивер"],
 starfighter:["Режиссёр","Шон Леви","Райан Гослинг"],
 cw:["Создатель","Дэйв Филони","Голоса: Мэтт Лантер, Эшли Экштейн, Джеймс Арнольд Тейлор, Ди Брэдли Бейкер"],
 reb:["Создатели","Дэйв Филони, Саймон Кинберг, Карри Бек","Голоса: Тейлор Грэй, Ванесса Маршалл, Фредди Принц-младший, Стивен Блум"],
 bb:["Создатели","Дэйв Филони, Дженнифер Корбетт, Брэд Рау","Голоса: Ди Брэдли Бейкер, Мишель Энг"],
 res:["Создатель","Дэйв Филони","Голоса: Кристофер Шон, Скотт Лоуренс, Боби Мойнахан"],
 mando:["Шоураннер","Джон Фавро","Педро Паскаль, Карл Уэзерс, Кэти Сакхофф, Джанкарло Эспозито"],
 boba:["Шоураннер","Джон Фавро","Темуэра Моррисон, Мин-На Вен, Педро Паскаль"],
 obi:["Режиссёр","Дебора Чоу","Юэн Макгрегор, Хейден Кристенсен, Мозес Ингрэм, Вивьен Лира Блэр"],
 andor:["Шоураннер","Тони Гилрой","Диего Луна, Стеллан Скарсгард, Женевьева О’Райли, Кайл Сол"],
 ahsoka:["Шоураннер","Дэйв Филони","Розарио Доусон, Наташа Лью Бордиццо, Ларс Миккельсен, Мэри Элизабет Уинстэд"],
 acolyte:["Шоураннер","Лесли Хэдленд","Амандла Стенберг, Ли Джон Джэ, Мэнни Хасинто"],
 skel:["Создатели","Джон Уоттс, Кристофер Форд","Джуд Лоу, Рави Кабот-Конйерс, Райан Кира Армстронг"],
 totj:["Создатель","Дэйв Филони","Голоса: Эшли Экштейн, Кори Бертон"],
 tote:["Создатель","Дэйв Филони","Голоса: Диана Ли Иносанто, Мередит Сэленджер"],
 tou:["Создатель","Дэйв Филони","Голоса: Ника Футтерман, Кори Бертон"],
 maul:["Шоураннер","Мэтт Мишновец","Голос: Сэм Уитвер"],
 yja:["Создатель","Майкл Олсон","Детский анимационный сериал"]
};
const credOf=e=>CREDITS[e.id]||CREDITS[e.id.replace(/\d.*$/,"")]||null;
function trailerURL(e){
 let q=e.o.split(" — ")[0].replace(/^Star Wars:?\s*/,"");
 const s=e.t.match(/Сезон (\d)/); if(s)q+=" season "+s[1];
 if(e.id==="cw7b")q="The Clone Wars Siege of Mandalore";
 return "https://www.youtube.com/results?search_query="+encodeURIComponent("Star Wars "+q+" official trailer");
}
const TR=window.TRAILERS||{};
const trailerId=e=>TR[e.id]||TR[POSTER_ALIAS[e.id]]||TR[e.id.replace(/\d.*$/,"")]||null;
function trailerBlock(e,tid){
 return `<div class="trailer" id="trailer" data-id="${e.id}"><button class="tr-thumb" type="button" data-play="${tid}" aria-label="Смотреть трейлер «${esc(e.t)}»"><img src="https://i.ytimg.com/vi/${tid}/hqdefault.jpg" alt="" loading="lazy"><span class="tr-play">▶</span></button></div>`;
}
let detailId=null;
function seqNow(){return (order==="intro"?INTRO.map(id=>BY[id]):order==="release"?[...D].sort((a,b)=>a.r.localeCompare(b.r)):D).filter(e=>!e.kids||F.kids||e.id===detailId);}
function renderDetail(){
 const e=BY[detailId];if(!e)return;
 const p=eProg(e),soon=e.st!=="out",c=credOf(e),era=ERAS.find(x=>x.id===e.era);
 const mins=e.units.reduce((s,u)=>s+(u.m||0),0);
 const seq=seqNow(),i=seq.indexOf(e),prev=seq[i-1],next=seq[i+1];
 const st=p.n===0?"false":p.n===p.t?"true":"mixed";
 const tid=trailerId(e), oldTr=$("#trailer"), keepTr=oldTr&&oldTr.dataset.id===e.id?oldTr:null;
 $("#detailIn").innerHTML=`<div class="d-hero"><div class="bgp" style="background-image:url('${posterOf(e)}')"></div>
  <button class="btn d-close" type="button" data-close>✕ Закрыть</button>
  <div class="d-grid"><img src="${posterOf(e)}" alt="Постер: ${esc(e.t)}"><div style="min-width:0">
   <div class="mono" style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--acc)">${KIND[e.k]} · ${era.t}</div>
   <h2 style="margin:6px 0 4px">${esc(e.t)}</h2><div class="orig">${esc(e.o)}</div>
   <div class="meta" style="margin-top:10px">${soon?`<span class="pill soon">${e.st==="tba"?"Ожидается в 2027":"Скоро · через "+daysTo(e.r)+" дн."}</span>`:`<span class="pill">${new Date(e.r).getFullYear()}</span>`}${e.kids?'<span class="pill">Детское</span>':""}</div>
   <div class="row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
    ${tid?`<button class="btn primary" type="button" data-play="${tid}">▶ Смотреть трейлер</button>`:`<a class="btn primary" href="${trailerURL(e)}" target="_blank" rel="noopener noreferrer">▶ Трейлер на YouTube</a>`}
    ${soon?"":`<button class="btn" type="button" data-all="${e.id}">${st==="true"?"Снять отметки":"✓ Отметить всё"}</button>`}
   </div></div></div></div>
 <div class="d-body">
  ${tid?trailerBlock(e,tid):""}
  <p style="margin:0;font-size:15px;max-width:70ch">${esc(e.d)}</p>${e.tip?`<div class="tip" style="margin:0">${esc(e.tip)}</div>`:""}
  <div class="facts-grid">
   <div class="fact"><small>Время в Галактике</small><b>${esc(e.yl)}</b></div>
   <div class="fact"><small>Премьера</small><b>${e.st==="tba"?"2027, дата не объявлена":fmtDate(e.r)}</b></div>
   <div class="fact"><small>${e.k==="film"?"Хронометраж":"Объём"}</small><b>${e.k==="film"?(e.m?`${Math.floor(e.m/60)} ч ${e.m%60} мин`:"ещё неизвестен"):e.eps?`${e.units.length} ${plural(e.units.length,"пункт","пункта","пунктов")} · ≈${Math.round(mins/60)} ч`:"ещё неизвестен"}</b></div>
   ${c?`<div class="fact"><small>${c[0]}</small><b>${esc(c[1])}</b></div><div class="fact" style="grid-column:span 2"><small>В ролях</small><b>${esc(c[2])}</b></div>`:""}
   ${soon?"":`<div class="fact"><small>Твой прогресс</small><b class="mono">${p.n}/${p.t} · ${Math.round(p.n/p.t*100)}%</b></div>`}
  </div>
  ${e.eps?`<div class="eps">`+e.units.map(u=>{const on=watched.has(u.k);return`<button class="ep ${on?"on":""}" type="button" data-u="${u.k}" aria-pressed="${on}" ${soon?"disabled":""}><span class="chk" aria-hidden="true" aria-checked="${on}">${CHECK}</span><code>${esc(u.c)}</code><span>${esc(u.t)}</span></button>`;}).join("")+`</div>`:""}
  <div class="d-nav">${prev?`<button class="btn" type="button" data-detail="${prev.id}">← ${esc(prev.t)}</button>`:"<span></span>"}${next?`<button class="btn" type="button" data-detail="${next.id}">${esc(next.t)} →</button>`:""}</div>
 </div>`;
 if(keepTr){const fresh=$("#trailer");if(fresh)fresh.replaceWith(keepTr);}
}
function playTrailer(tid){
 const box=$("#trailer");if(!box)return;
 box.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${tid}?autoplay=1&rel=0&modestbranding=1" title="Трейлер" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
 box.scrollIntoView({behavior:"smooth",block:"center"});
}
function openDetail(id){if(!BY[id])return;const same=detailId===id;detailId=id;renderDetail();$("#detail").hidden=false;if(!same)$("#detailIn").scrollTop=0;if(location.hash!=="#"+id)location.hash=id;}
function closeDetail(){detailId=null;$("#detail").hidden=true;$("#detailIn").innerHTML="";if(location.hash)location.hash="";}
window.addEventListener("hashchange",()=>{const id=location.hash.slice(1);if(BY[id]){if(detailId!==id)openDetail(id);}else if(detailId){detailId=null;$("#detail").hidden=true;$("#detailIn").innerHTML="";}});
const MASCOT={
 lothal:{n:"Лот-кот",svg:`<svg viewBox="0 0 140 140" aria-hidden="true"><path d="M98 118C126 116 132 92 118 84C110 80 104 90 112 94" fill="none" stroke="#e6d7b4" stroke-width="9" stroke-linecap="round"/><ellipse cx="70" cy="104" rx="30" ry="26" fill="#efe3c6"/><path d="M52 92q6 8 0 16M88 92q-6 8 0 16M70 90v14" stroke="#c98a4b" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="56" cy="126" rx="10" ry="6" fill="#f7eedb"/><ellipse cx="84" cy="126" rx="10" ry="6" fill="#f7eedb"/><path d="M40 58L24 12L62 40Z" fill="#efe3c6"/><path d="M100 58L116 12L78 40Z" fill="#efe3c6"/><path d="M42 50L31 22L55 41Z" fill="#d79a62"/><path d="M98 50L109 22L85 41Z" fill="#d79a62"/><path d="M24 12l-5-9M24 12l4-10M116 12l5-9M116 12l-4-10" stroke="#c98a4b" stroke-width="2.6" stroke-linecap="round"/><path d="M36 64l-10 10 14-2M104 64l10 10-14-2" fill="#efe3c6"/><ellipse cx="70" cy="62" rx="33" ry="26" fill="#efe3c6"/><path d="M61 38q9 6 18 0M58 45q12 7 24 0" stroke="#c98a4b" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="56" cy="62" rx="8.5" ry="9.5" fill="#f2c84b"/><ellipse cx="84" cy="62" rx="8.5" ry="9.5" fill="#f2c84b"/><ellipse cx="56" cy="62" rx="2.3" ry="7.5" fill="#2a1d14"/><ellipse cx="84" cy="62" rx="2.3" ry="7.5" fill="#2a1d14"/><circle cx="58.5" cy="57.5" r="1.8" fill="#fff"/><circle cx="86.5" cy="57.5" r="1.8" fill="#fff"/><path d="M65.5 72h9l-4.5 5z" fill="#c76f5a"/><path d="M70 77q-4 5-9 3M70 77q4 5 9 3" stroke="#6b4a36" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M50 74l-19-3M50 78l-19 3M90 74l19-3M90 78l19 3" stroke="#a88e70" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  q:["Мррр. Лот-коты охраняют этот архив.","Совет: 4 сезон «Повстанцев» — всё, что нужно знать о Лотале.","Если кликнешь ещё раз, я зашиплю. Наверное.","Эзра нас кормил. Ты тоже можешь — отметь серию."]},
 tatooine:{n:"Йава",svg:`<svg viewBox="0 0 140 140" aria-hidden="true"><path d="M70 14C46 14 38 40 36 62L24 132H116L104 62C102 40 94 14 70 14Z" fill="#6e4a2c"/><path d="M52 80l-6 50M88 80l6 50M70 76v54" stroke="#5a3b22" stroke-width="2.5" fill="none"/><path d="M70 14C50 16 43 36 43 54C43 67 56 75 70 75C84 75 97 67 97 54C97 36 90 16 70 14Z" fill="#7d5533"/><ellipse cx="70" cy="56" rx="20" ry="15" fill="#140d08"/><circle cx="61" cy="56" r="8" fill="#ffd54a" opacity=".3"/><circle cx="79" cy="56" r="8" fill="#ffd54a" opacity=".3"/><circle cx="61" cy="56" r="3.8" fill="#ffe680"/><circle cx="79" cy="56" r="3.8" fill="#ffe680"/><path d="M40 86L100 120" stroke="#3b2717" stroke-width="7"/><rect x="58" y="92" width="7" height="9" rx="1" fill="#a37b4c" transform="rotate(30 61 96)"/><rect x="76" y="102" width="7" height="9" rx="1" fill="#a37b4c" transform="rotate(30 79 106)"/><path d="M44 90q-10 10-6 20" stroke="#6e4a2c" stroke-width="11" fill="none" stroke-linecap="round"/><circle cx="38" cy="112" r="5.5" fill="#3a2a1e"/><path d="M96 90q12 6 12 16" stroke="#6e4a2c" stroke-width="11" fill="none" stroke-linecap="round"/><rect x="100" y="100" width="32" height="6" rx="2" fill="#5b5f66" transform="rotate(-18 100 100)"/><circle cx="108" cy="108" r="5.5" fill="#3a2a1e"/></svg>`,
  q:["Утини!","Продам дроида. Почти не ржавый. Почти.","Совет: начни с IV эпизода — так смотрели в 1977-м.","На Татуине два солнца и ноль сериалов. Тут лучше."]},
 coruscant:{n:"Дроид-мышка MSE-6",svg:`<svg viewBox="0 0 140 140" aria-hidden="true"><ellipse cx="70" cy="122" rx="50" ry="5" fill="#000" opacity=".3"/><path d="M50 66V48" stroke="#5b616b" stroke-width="2.5"/><circle cx="50" cy="47" r="3" fill="#3fd0ff"/><path d="M24 86L37 66H104L118 86V110H24Z" fill="#2b2f36"/><path d="M37 66H104L111 75H30Z" fill="#3d434d"/><rect x="38" y="80" width="28" height="17" rx="2" fill="#1c1f24"/><rect x="43" y="84" width="5" height="5" fill="#ff4fa3"/><rect x="52" y="84" width="5" height="5" fill="#3fd0ff"/><rect x="72" y="80" width="32" height="6" rx="1" fill="#4a515c"/><rect x="72" y="90" width="32" height="6" rx="1" fill="#4a515c"/><rect x="112" y="86" width="10" height="12" rx="2" fill="#1c1f24"/><circle cx="119" cy="92" r="3.4" fill="#3fd0ff"/><circle cx="119" cy="92" r="7" fill="#3fd0ff" opacity=".25"/><circle cx="42" cy="111" r="9" fill="#14161a"/><circle cx="70" cy="111" r="9" fill="#14161a"/><circle cx="98" cy="111" r="9" fill="#14161a"/><circle cx="42" cy="111" r="3" fill="#5b616b"/><circle cx="70" cy="111" r="3" fill="#5b616b"/><circle cx="98" cy="111" r="3" fill="#5b616b"/></svg>`,
  q:["Би-ди-ди-ди! (Перевод: нижние уровни опасны после заката.)","Ви-и-ип! (Я видел Приказ 66. Не спрашивай.)","Бип-буп. (Советую «Андор»: там много коридоров.)","Ви-и-и-и! *уезжает в панике*"]},
 hoth:{n:"Таунтаун",svg:`<svg viewBox="0 0 140 140" aria-hidden="true"><ellipse cx="70" cy="132" rx="44" ry="4" fill="#000" opacity=".15"/><path d="M44 94Q18 106 14 126" stroke="#cfc8b8" stroke-width="11" fill="none" stroke-linecap="round"/><path d="M80 100L86 128H98" stroke="#b3aa97" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M58 100L52 128H64" stroke="#c6bead" stroke-width="13" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="68" cy="86" rx="29" ry="24" fill="#ddd6c6" transform="rotate(-20 68 86)"/><path d="M54 66q14-9 28 0l-4 11q-10-5-20 0z" fill="#7a4e33"/><path d="M80 72Q86 46 96 40" stroke="#ddd6c6" stroke-width="22" fill="none" stroke-linecap="round"/><ellipse cx="102" cy="40" rx="17" ry="11" fill="#ddd6c6" transform="rotate(20 102 40)"/><ellipse cx="117" cy="48" rx="9" ry="6.5" fill="#cbc2ae"/><circle cx="122" cy="47" r="1.4" fill="#5a5040"/><path d="M93 32C85 18 70 24 76 35C80 41 89 37 85 31" stroke="#8a7a62" stroke-width="5.5" fill="none" stroke-linecap="round"/><circle cx="104" cy="37" r="2.8" fill="#1e1a14"/><path d="M86 84q9 6 7 15" stroke="#cfc8b8" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M50 78l-4 3M58 90l-4 3M74 96l-3 4" stroke="#b9b09c" stroke-width="2" stroke-linecap="round"/></svg>`,
  q:["Снаружи −60. Сиди, смотри сериал.","Ночью я замерзаю за 4 часа. «Империя наносит ответный удар» идёт 2 ч 4 мин — успеваем.","Пахну я, конечно, ужасно. Но архив у нас уютный.","Совет: после V эпизода не спойлери себе VI."]},
 mustafar:{n:"Лавовая блоха",svg:`<svg viewBox="0 0 140 140" aria-hidden="true"><ellipse cx="70" cy="128" rx="60" ry="6" fill="#ff4a1c" opacity=".45"/><path d="M54 74L30 46L18 126M60 82L44 70L36 128M86 74L110 46L122 126M80 82L96 70L104 128" stroke="#2a1a14" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18" cy="126" r="3.5" fill="#ff7a2a"/><circle cx="36" cy="128" r="3.5" fill="#ff7a2a"/><circle cx="104" cy="128" r="3.5" fill="#ff7a2a"/><circle cx="122" cy="126" r="3.5" fill="#ff7a2a"/><ellipse cx="70" cy="70" rx="31" ry="23" fill="#3a2620"/><ellipse cx="70" cy="85" rx="21" ry="6" fill="#ff5a1f" opacity=".55"/><path d="M48 66l9 6-4 8M73 54l4 11 11 2M64 84l7-7M86 60l-6 6" stroke="#ff8a3a" stroke-width="2.6" fill="none" stroke-linecap="round"/><ellipse cx="99" cy="61" rx="12" ry="9" fill="#2f1f1a"/><circle cx="105" cy="58" r="2.8" fill="#ffb238"/><circle cx="99" cy="56" r="2.2" fill="#ffb238"/><path d="M104 53q8-14 18-14M98 53q2-12 10-16" stroke="#2a1a14" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  q:["Тсс-с-с… Осторожно, пол — это лава.","Совет: финал III эпизода лучше не смотреть на ночь.","Вейдер построил тут замок. Соседи из нас так себе.","Шшш! *убегает по лаве*"]}
};
let quipI=0, quipT=null;
function renderMascot(){const m=MASCOT[theme];$("#mascotArt").innerHTML=m.svg;$("#mascot").setAttribute("aria-label",m.n+": нажми, чтобы услышать реплику");$("#bubble").hidden=true;}
function quip(){const m=MASCOT[theme];const b=$("#bubble");b.textContent=m.n+": "+m.q[quipI++%m.q.length];b.hidden=false;clearTimeout(quipT);quipT=setTimeout(()=>b.hidden=true,5000);}

/* ============ STATE ============ */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const TODAY=new Date();
D.forEach(e=>{
 if(!e.st)e.st=new Date(e.r)>TODAY?"soon":"out";
 e.units=e.eps?e.eps.trim().split("\n").map(l=>{const[c,t,mm]=l.split("|");return{c:c.trim(),t:t.trim(),m:mm?+mm:e.m,k:e.id+":"+c.trim()};}):[{c:"",t:e.t,m:e.m||120,k:e.id}];
});
const BY=Object.fromEntries(D.map(e=>[e.id,e]));
let watched=new Set(), theme="lothal", order="chrono";
const F={film:true,live:true,anim:true,kids:false,hide:false};
const open=new Set();
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);}catch(_){return null}}
try{const c=JSON.parse(ls("swc-local")||"{}");if(c.w)watched=new Set(c.w);if(c.theme&&PLANETS[c.theme])theme=c.theme;}catch(_){}

/* ============ SYNC (Firebase через js/sync.js) ============ */
let cloud=null, uid=null, unsub=null, writing=false, dirty=false, wTimer=null;
function setSync(s,txt){$("#syncDot").className="dot "+(s==="ok"?"ok":s==="warn"?"warn":"");$("#syncTxt").textContent=txt;}
function setAuthBtn(){const b=$("#authBtn");if(!cloud){b.hidden=true;return;}b.hidden=false;b.textContent=uid?"Выйти":"Войти через Google";}
function persist(){
 ls("swc-local",JSON.stringify({w:[...watched],theme}));
 if(!cloud||!uid)return;
 dirty=true;clearTimeout(wTimer);wTimer=setTimeout(flush,700);
}
async function flush(){
 if(!cloud||!uid||writing||!dirty)return;
 writing=true;dirty=false;setSync("ok","Сохраняю…");
 try{await cloud.save(uid,{w:[...watched],theme});setSync("ok","Синхронизировано · "+(cloud.userName()||"аккаунт Google"));}
 catch(err){setSync("warn","Не удалось сохранить в облако, прогресс сохранён на устройстве");}
 writing=false;if(dirty)flush();
}
function onCloudUser(u){
 if(unsub){unsub();unsub=null;}
 uid=u?u.uid:null;setAuthBtn();
 if(!uid){setSync("warn","Войди через Google, чтобы прогресс был на всех устройствах. Пока он хранится в этом браузере");return;}
 setSync("","Загружаю прогресс…");
 let first=true;
 unsub=cloud.subscribe(uid,d=>{
  if(writing||dirty)return;
  setSync("ok","Синхронизировано · "+(cloud.userName()||"аккаунт Google"));
  if(d){
   const remote=d.w||[];
   const merged=first&&watched.size?[...new Set([...remote,...watched])]:remote; /* при первом входе объединяем с локальным */
   watched=new Set(merged);
   if(d.theme&&PLANETS[d.theme]&&d.theme!==theme){theme=d.theme;applyTheme();}
   ls("swc-local",JSON.stringify({w:[...watched],theme}));render();
   if(first&&merged.length!==remote.length){dirty=true;flush();}
  }else if(first&&watched.size){dirty=true;flush();}
  first=false;
 },()=>setSync("warn","Синхронизация недоступна, прогресс сохраняется в браузере"));
}
function startCloud(api){
 cloud=api;
 if(!cloud){setSync("warn","Прогресс хранится в этом браузере");setAuthBtn();return;}
 cloud.onAuth(onCloudUser);
}
if(window.SWCloud!==undefined)startCloud(window.SWCloud);
else{setSync("","Подключаюсь к архиву…");window.addEventListener("cloud-ready",e=>startCloud(e.detail),{once:true});}

/* ============ RENDER ============ */
const KIND={film:"Фильм",live:"Сериал",anim:"Анимация"};
const fmtDate=r=>new Date(r).toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"});
const daysTo=r=>Math.ceil((new Date(r)-TODAY)/864e5);
function eProg(e){const n=e.units.filter(u=>watched.has(u.k)).length;return{n,t:e.units.length};}
function visible(e){
 if(!F[e.k])return false;
 if(e.kids&&!F.kids)return false;
 if(F.hide&&e.st==="out"){const p=eProg(e);if(p.n===p.t)return false;}
 const q=$("#q").value.trim().toLowerCase();
 if(q){const hay=(e.t+" "+e.o+" "+e.d+" "+e.units.map(u=>u.c+" "+u.t).join(" ")).toLowerCase();if(!hay.includes(q))return false;}
 return true;
}
function ordered(){
 if(order==="release")return [...D].sort((a,b)=>a.r.localeCompare(b.r));
 if(order==="intro")return INTRO.map(id=>BY[id]);
 return D;
}
const CHECK=`<svg viewBox="0 0 16 16" fill="none" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.2 3L13 4.5"/></svg>`;
function card(e){
 const p=eProg(e),soon=e.st!=="out",done=!soon&&p.n===p.t,multi=!!e.eps;
 const st=p.n===0?"false":p.n===p.t?"true":"mixed";
 const status=soon?(e.st==="tba"?`<span class="pill soon">Ожидается в 2027</span>`:`<span class="pill soon">Скоро</span> <span class="cd">${fmtDate(e.r)} · через ${daysTo(e.r)} дн.</span>`):`<span class="pill">${new Date(e.r).getFullYear()}</span>`;
 const len=e.k==="film"?(e.m?`<span class="pill">${Math.floor(e.m/60)} ч ${e.m%60} мин</span>`:""):(e.eps?`<span class="pill">${e.units.length} ${plural(e.units.length,"пункт","пункта","пунктов")}</span>`:"");
 const isOpen=open.has(e.id);
 let h=`<article class="card ${done?"done":""} ${soon?"soon":""}" id="c-${e.id}">
 <div class="gl"><div class="glow" style="background-image:url('${posterOf(e)}')"></div></div>
 <div class="yr">${esc(e.yl)}</div>
 <div class="c-head">
  <div class="poster"><button class="pbtn" type="button" data-detail="${e.id}" aria-label="Открыть карточку «${esc(e.t)}»"><img src="${posterOf(e)}" alt="" loading="lazy" decoding="async"></button><button class="chk" role="checkbox" aria-checked="${st}" aria-label="Отметить «${esc(e.t)}» целиком" data-all="${e.id}" ${soon?"disabled":""}>${CHECK}</button></div>
  <div class="c-title"><button class="ttl" type="button" data-detail="${e.id}"><h3>${esc(e.t)}</h3></button><div class="orig">${esc(e.o)}</div>
   <div class="meta"><span class="pill ${e.k}">${KIND[e.k]}</span>${e.kids?'<span class="pill">Детское</span>':""}${len}${status}${multi&&p.n?`<span class="pill mono">${p.n}/${p.t}</span>`:""}</div>
   <p class="c-desc">${esc(e.d)}</p>${e.tip?`<div class="tip">${esc(e.tip)}</div>`:""}
  </div>
  ${multi?`<button class="expand" type="button" data-open="${e.id}" aria-expanded="${isOpen}">${isOpen?"Свернуть":"Серии"}</button>`:"<span></span>"}
 </div>`;
 if(multi&&p.n&&p.n<p.t)h+=`<div class="mini"><i style="width:${(p.n/p.t*100).toFixed(1)}%"></i></div>`;
 if(multi&&isOpen){
  h+=`<div class="eps">`+e.units.map(u=>{const on=watched.has(u.k);return`<button class="ep ${on?"on":""}" type="button" data-u="${u.k}" aria-pressed="${on}" ${soon?"disabled":""}><span class="chk" aria-hidden="true" aria-checked="${on}">${CHECK}</span><code>${esc(u.c)}</code><span>${esc(u.t)}</span></button>`;}).join("")+
  `<div class="eps-tools"><button class="link" type="button" data-upto="${e.id}">Заполнить пропуски до последней отмеченной</button></div></div>`;
 }
 return h+`</article>`;
}
function plural(n,a,b,c){n=Math.abs(n)%100;const m=n%10;if(n>10&&n<20)return c;if(m>1&&m<5)return b;if(m===1)return a;return c;}
function render(){
 const list=ordered().filter(visible);
 let h="";
 if(order==="chrono"){
  for(const er of ERAS){const items=list.filter(e=>e.era===er.id);if(!items.length)continue;
   h+=`<section id="era-${er.id}"><div class="era-h"><h2>${er.t}</h2><span>${er.y}</span><p>${er.d}</p></div><div class="rail">${items.map(card).join("")}</div></section>`;}
 }else{
  const intro=order==="intro"?`<div class="era-h"><h2>Путь новичка</h2><span>${INTRO.length} пунктов</span><p>Сначала оригинальная трилогия, как её увидели зрители в 1977-м. Затем приквелы, потом лучшие сериалы на пути к сиквелам. Анимацию можно добавить позже: переключись на «Хронологию».</p></div>`:
   `<div class="era-h"><h2>В порядке выхода</h2><span>1977 → 2027</span><p>Как сагу видели зрители. Блоки «Войн клонов» внутри следуют официальной хронологии.</p></div>`;
  h=intro+`<div class="rail">${list.map(card).join("")}</div>`;
 }
 $("#list").innerHTML=h||`<div class="empty">Ничего не нашлось. Попробуй другой запрос или включи фильтры.</div>`;
 renderStats();renderEras();
 if(detailId)renderDetail();
}
function renderStats(){
 const out=D.filter(e=>e.st==="out"&&(!e.kids||F.kids));
 let tot=0,done=0,mins=0,minsTot=0;
 out.forEach(e=>e.units.forEach(u=>{tot++;minsTot+=u.m;if(watched.has(u.k))done++;else mins+=u.m;}));
 const pct=tot?Math.round(done/tot*100):0;
 $("#sPct").textContent=pct+"%";$("#sUnits").textContent=`${done}/${tot}`;$("#sHours").textContent=Math.round(mins/60)+" ч";
 $("#sBar").style.width=(tot?done/tot*100:0)+"%";
 /* next up */
 const seq=(order==="intro"?INTRO.map(id=>BY[id]):order==="release"?[...D].sort((a,b)=>a.r.localeCompare(b.r)):D).filter(e=>e.st==="out"&&(!e.kids||F.kids));
 let nx=null;for(const e of seq){const u=e.units.find(u=>!watched.has(u.k));if(u){nx={e,u};break;}}
 const soon=D.filter(e=>e.st==="soon").sort((a,b)=>a.r.localeCompare(b.r))[0];
 $("#nextBox").innerHTML=nx?`<div class="next-grid"><img src="${posterOf(nx.e)}" alt=""><div style="min-width:0"><div class="eyebrow">Смотреть дальше · ${order==="chrono"?"хронология":order==="release"?"по выходу":"для новичка"}</div>
  <h3>${esc(nx.e.eps?nx.u.t:nx.e.t)}</h3><div class="sub">${nx.e.eps?esc(nx.e.t)+" · "+esc(nx.u.c)+" · ":""}${esc(nx.e.yl)}</div>
  <div class="row"><button class="btn primary" type="button" data-u="${nx.u.k}">✓ Посмотрел</button><button class="btn" type="button" data-goto="${nx.e.id}">Показать в списке</button></div>
  ${soon?`<div class="sub" style="margin-top:10px">Следующая премьера: <b>${esc(soon.t)}</b>, через ${daysTo(soon.r)} дн.</div>`:""}</div></div>`
  :`<div class="eyebrow">Сага пройдена</div><h3>Ты посмотрел всё, что вышло</h3>${soon?`<div class="sub">Дальше — ${esc(soon.t)}, ${fmtDate(soon.r)}</div>`:""}`;
}
function renderRibbon(){
 const seen=new Set();
 $("#ribbon").innerHTML=[...D].sort((a,b)=>a.r.localeCompare(b.r)).filter(e=>{const p=posterOf(e);if(seen.has(p)||(e.kids&&!F.kids))return false;seen.add(p);return true;})
  .map(e=>{const p=eProg(e);return`<button type="button" class="${e.st==="out"&&p.n===p.t?"w":""}" data-goto="${e.id}" title="${esc(e.t)}"><img src="${posterOf(e)}" alt="${esc(e.t)}" loading="lazy"></button>`;}).join("");
}
function renderEras(){
 renderRibbon();
 $("#eras").innerHTML=ERAS.map(er=>{const es=D.filter(e=>e.era===er.id&&e.st==="out"&&(!e.kids||F.kids));let t=0,n=0;es.forEach(e=>e.units.forEach(u=>{t++;if(watched.has(u.k))n++;}));
  return`<button class="era-b" type="button" data-era="${er.id}"><small>${er.y}</small><strong>${er.t}</strong><div class="bar"><i style="width:${t?n/t*100:0}%"></i></div></button>`;}).join("");
}
function applyTheme(){
 document.documentElement.setAttribute("data-planet",theme);
 $("#land").innerHTML=landSVG(theme);
 $("#brand").textContent="Голоархив · "+PLANETS[theme].n;
 renderMascot();
}
function renderPlanets(){
 $("#planets").innerHTML=Object.entries(PLANETS).map(([id,p])=>`<button class="pl" type="button" data-planet="${id}" aria-pressed="${id===theme}">
  <div class="sw" data-planet-preview="${id}"><svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax slice">${landSVG(id)}</svg><span class="mini-m">${MASCOT[id].svg}</span></div>
  <div class="tx"><b>${p.n}</b><small>${p.s}</small><p>${p.d}</p><div class="facts">${p.f}<br>Маскот: ${MASCOT[id].n}</div></div></button>`).join("");
 /* each preview uses its own planet's tokens */
 document.querySelectorAll("[data-planet-preview]").forEach(el=>{const id=el.dataset.planetPreview;const cs=themeVars(id);for(const k in cs)el.style.setProperty(k,cs[k]);el.style.background=`linear-gradient(180deg,${cs["--sky1"]},${cs["--sky2"]} 62%,${cs["--sky3"]})`;});
}
function themeVars(id){const prev=document.documentElement.getAttribute("data-planet");document.documentElement.setAttribute("data-planet",id);const cs=getComputedStyle(document.documentElement);const o={};["--sky1","--sky2","--sky3","--l1","--l2","--l3","--orb","--acc","--acc2"].forEach(k=>o[k]=cs.getPropertyValue(k).trim());document.documentElement.setAttribute("data-planet",prev);return o;}

/* ============ EVENTS ============ */
function toggle(k){watched.has(k)?watched.delete(k):watched.add(k);persist();render();}
document.addEventListener("click",ev=>{
 const t=ev.target.closest("button");if(!t||t.disabled)return;
 if(t.dataset.u){toggle(t.dataset.u);return;}
 if(t.dataset.all){const e=BY[t.dataset.all];const all=e.units.every(u=>watched.has(u.k));e.units.forEach(u=>all?watched.delete(u.k):watched.add(u.k));persist();render();return;}
 if(t.dataset.open){const id=t.dataset.open;open.has(id)?open.delete(id):open.add(id);render();return;}
 if(t.dataset.upto){const e=BY[t.dataset.upto];/* отмечает всё до последней отмеченной серии */let last=-1;e.units.forEach((u,i)=>{if(watched.has(u.k))last=i;});e.units.slice(0,last+1).forEach(u=>watched.add(u.k));persist();render();return;}
 if(t.dataset.order){order=t.dataset.order;document.querySelectorAll("[data-order]").forEach(b=>b.setAttribute("aria-pressed",b===t));render();return;}
 if(t.dataset.f){F[t.dataset.f]=!F[t.dataset.f];t.setAttribute("aria-pressed",F[t.dataset.f]);render();return;}
 if(t.dataset.era){if(order!=="chrono"){order="chrono";document.querySelectorAll("[data-order]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.order==="chrono"));render();}const el=document.getElementById("era-"+t.dataset.era);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});return;}
 if(t.dataset.goto){const id=t.dataset.goto;if(BY[id].eps)open.add(id);render();const el=document.getElementById("c-"+id);if(el)el.scrollIntoView({behavior:"smooth",block:"center"});return;}
 if(t.dataset.planet){theme=t.dataset.planet;applyTheme();renderPlanets();persist();return;}
 if(t.dataset.play){playTrailer(t.dataset.play);return;}
 if(t.dataset.detail){openDetail(t.dataset.detail);return;}
 if(t.hasAttribute("data-close")){closeDetail();return;}
 if(t.id==="mascot"){quip();return;}
 if(t.id==="authBtn"&&cloud){(uid?cloud.signOut():cloud.signIn()).catch(err=>setSync("warn","Вход не удался: "+(err&&err.code||"ошибка")));return;}
 if(t.id==="themeBtn"){renderPlanets();$("#sheet").hidden=false;$("#sheetX").focus();return;}
 if(t.id==="sheetX"){$("#sheet").hidden=true;return;}
});
$("#sheet").addEventListener("click",e=>{if(e.target.id==="sheet")$("#sheet").hidden=true;});
$("#detail").addEventListener("click",e=>{if(e.target.id==="detail")closeDetail();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("#sheet").hidden=true;if(detailId)closeDetail();}});
$("#q").addEventListener("input",render);

applyTheme();render();
{const h=location.hash.slice(1);if(BY[h])openDetail(h);}
