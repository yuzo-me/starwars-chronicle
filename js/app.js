/* ============ ЯЗЫК ============ */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);}catch(_){return null}}
const EN=window.I18N;
let lang=ls("swc-lang")||((navigator.language||"ru").toLowerCase().startsWith("ru")?"ru":"en");
const isEN=()=>lang==="en";
const L=(ru,en)=>isEN()?en:ru;
function pl(n,a,b,c,e1,eN){if(isEN())return n===1?e1:eN;n=Math.abs(n)%100;const m=n%10;if(n>10&&n<20)return c;if(m>1&&m<5)return b;if(m===1)return a;return c;}
const enE=e=>EN.entries[e.id]||{};
function tx(e,f){
 if(!isEN())return f==="yl"&&e.yl?e.yl.replace(/BBY/g,"ДБЯ").replace(/ABY/g,"ПБЯ"):(e[f]||"");
 const x=enE(e);
 if(f==="t")return x.t||e.o;
 if(f==="d")return x.d||e.de||e.d;
 if(f==="tip")return x.tip||"";
 if(f==="yl")return x.yl||EN.yl(e.yl);
 if(f==="o"){const o=e.o.replace(/ \(хронологически\)/,"").replace(/ финал$/," finale");return o===x.t?"":o;}
 return e[f]||"";
}
const ut=u=>isEN()?EN.unit(u.t):u.t;
const eraT=(er,f)=>isEN()?EN.eras[er.id][f]:er[f];
const plT=(id,f)=>isEN()?EN.planets[id][f]:PLANETS[id][f];
const mName=id=>isEN()?EN.mascots[id].n:MASCOT[id].n;
const mQuips=id=>isEN()?EN.mascots[id].q:MASCOT[id].q;
const fmtDate=r=>new Date(r).toLocaleDateString(isEN()?"en-GB":"ru-RU",{day:"numeric",month:"long",year:"numeric"});
const hm=m=>L(`${Math.floor(m/60)} ч ${m%60} мин`,`${Math.floor(m/60)} h ${m%60} min`);

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
  f:"Климат: вулканический · Появления: «Месть ситхов», «Изгой-один», «Оби-Ван Кеноби», «Повстанцы»"},
 naboo:{n:"Набу",s:"Средние Рубежи · система Набу",
  d:"Самая красивая планета Галактики: изумрудные луга, озёра и водопады, а над обрывами — золотые купола Тида. Под водой лежат города гунганов. Родина Падме Амидалы и, по иронии, Шива Палпатина.",
  f:"Климат: умеренный, луга, болота и озёра · Появления: эпизоды I–III, «Войны клонов», «Оби-Ван Кеноби»"}
};
function landSVG(p){const s=(window.SCENES||{})[p]||{};return (s.back||"")+baseLand(p)+(s.front||"");}
function baseLand(p){
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
 if(p==="naboo")return sky+`<circle cx="210" cy="110" r="30" fill="var(--orb)" opacity=".9"/><circle cx="270" cy="80" r="11" fill="var(--orb)" opacity=".55"/>
<path d="M0 250 L90 190 L170 230 L260 170 L380 240 L470 200 L560 250 L640 215 L720 245 V420 H0Z" fill="#9bbcd0" opacity=".7"/>
<path d="M700 300 L700 210 Q720 196 760 200 L1200 200 V420 H700Z" fill="#7a8f6a"/>
<path d="M700 210 Q720 196 760 200 L1200 200 V214 L760 214 Q726 212 712 226Z" fill="#9db08a"/>
<g fill="#efe3c4"><rect x="820" y="150" width="190" height="52"/><rect x="790" y="168" width="34" height="34"/><rect x="1006" y="168" width="34" height="34"/></g>
<g fill="#d8cba8"><rect x="830" y="168" width="6" height="34"/><rect x="852" y="168" width="6" height="34"/><rect x="874" y="168" width="6" height="34"/><rect x="954" y="168" width="6" height="34"/><rect x="976" y="168" width="6" height="34"/><rect x="996" y="168" width="6" height="34"/></g>
<path d="M870 150 A45 45 0 0 1 960 150Z" fill="#d9a441"/><path d="M886 150 A29 29 0 0 1 944 150" fill="none" stroke="#f3cf73" stroke-width="3"/>
<path d="M792 168 A15 15 0 0 1 822 168Z M1008 168 A15 15 0 0 1 1038 168Z" fill="#d9a441"/><rect x="912" y="96" width="6" height="12" fill="#d9a441"/>
<rect x="1080" y="120" width="26" height="82" fill="#efe3c4"/><path d="M1080 120 A13 13 0 0 1 1106 120Z" fill="#d9a441"/>
<path d="M0 300 C160 270 330 300 520 288 S700 300 700 300 V420 H0Z" fill="var(--l1)"/>
<path d="M0 334 C200 312 420 340 640 328 S1000 306 1200 330 V420 H0Z" fill="var(--l2)"/>
<path d="M0 352 C260 344 560 362 840 350 S1100 344 1200 352 V364 C980 358 700 372 420 366 S120 362 0 366Z" fill="#9fd0e8" opacity=".85"/>
<path d="M0 384 C260 368 540 390 820 376 S1100 370 1200 382 V420 H0Z" fill="var(--l3)"/>
<g fill="#f6e27a">${Array.from({length:26},(_,i)=>`<rect x="${(i*47+13)%1200}" y="${392+(i*7)%22}" width="4" height="4"/>`).join("")}</g>
<g fill="#f2a7c3">${Array.from({length:18},(_,i)=>`<rect x="${(i*71+40)%1200}" y="${388+(i*11)%26}" width="4" height="4"/>`).join("")}</g>`;
 /* lothal */
 return sky+`<circle cx="930" cy="120" r="38" fill="var(--orb)" opacity=".9"/><circle cx="1010" cy="90" r="14" fill="var(--orb)" opacity=".6"/>
<path d="M120 300 L132 150 L150 140 L166 160 L176 300Z M250 300 L262 200 L282 196 L290 300Z M760 300 L772 120 L790 108 L812 130 L822 300Z M860 300 L870 210 L890 205 L898 300Z" fill="var(--l1)"/>
<path d="M0 310 C150 280 330 300 520 296 S860 270 1200 300 V420 H0Z" fill="var(--l1)" opacity=".75"/>
<path d="M0 340 C180 315 400 345 620 330 S960 312 1200 338 V420 H0Z" fill="url(#g_${p})"/>
<path d="M0 390 C260 370 540 392 820 378 S1100 372 1200 384 V420 H0Z" fill="var(--l3)"/>`;
}

/* ============ POSTERS, CREDITS, TRAILERS ============ */
const POSTER_ALIAS={cw0:"cw1",cw7a:"cw7",cw7b:"cw7",totj1:"totj",totj4:"totj",totj5:"totj",totj6:"totj",maul2:"maul"};
const posterOf=e=>(e.k==="book"||e.k==="comic")?coverURI(e):"posters/"+(POSTER_ALIAS[e.id]||e.id)+".jpg";
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
 mandofilm:["Режиссёр","Джон Фавро","Педро Паскаль, Джереми Аллен Уайт, Сигурни Уивер"],
 starfighter:["Режиссёр","Шон Леви","Райан Гослинг, Флинн Грей, Мэтт Смит, Миа Гот"],
 cw:["Создатель","Дэйв Филони","Голоса: Мэтт Лантер, Эшли Экштейн, Джеймс Арнольд Тейлор, Ди Брэдли Бейкер"],
 reb:["Создатели","Дэйв Филони, Саймон Кинберг, Карри Бек","Голоса: Тейлор Грэй, Ванесса Маршалл, Фредди Принц-младший, Стивен Блум"],
 bb:["Создатели","Дэйв Филони, Дженнифер Корбетт","Голоса: Ди Брэдли Бейкер, Мишель Энг"],
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
 maul:["Создатели","Дэйв Филони, Мэтт Мишновец","Голоса: Сэм Уитвер, Гидеон Адлон, Вагнер Моура"],
 yja:["Создатель","Майкл Олсон","Детский анимационный сериал"]
};
function credOf(e){
 const key=CREDITS[e.id]?e.id:e.id.replace(/\d.*$/,"");const c=CREDITS[key];if(!c)return null;
 if(!isEN())return c;
 const x=EN.credits[key]||[c[1],c[2]];return [EN.roles[c[0]]||c[0],x[0],x[1]];
}
function trailerURL(e){
 let q=e.o.split(" — ")[0].replace(/^Star Wars:?\s*/,"");
 const s=e.t.match(/Сезон (\d)/); if(s)q+=" season "+s[1];
 if(e.id==="cw7b")q="The Clone Wars Siege of Mandalore";
 return "https://www.youtube.com/results?search_query="+encodeURIComponent("Star Wars "+q+" official trailer");
}
const TR=window.TRAILERS||{};
const trailerId=e=>TR[e.id]||TR[POSTER_ALIAS[e.id]]||TR[e.id.replace(/\d.*$/,"")]||null;
function trailerBlock(e,tid){
 return `<div class="trailer" id="trailer" data-id="${e.id}"><button class="tr-thumb" type="button" data-play="${tid}" aria-label="${esc(L("Смотреть трейлер","Watch trailer"))}: ${esc(tx(e,"t"))}"><img src="https://i.ytimg.com/vi/${tid}/hqdefault.jpg" alt="" loading="lazy"><span class="tr-play">▶</span></button></div>`;
}

/* ============ STATE ============ */
const MASCOT=window.MASCOT_ART;
const TODAY=new Date();
D.forEach(e=>{
 if(!e.st)e.st=new Date(e.r)>TODAY?"soon":"out";
 e.units=e.eps?e.eps.trim().split("\n").map(l=>{const[c,t,mm]=l.split("|");return{c:c.trim(),t:t.trim(),m:mm?+mm:e.m,k:e.id+":"+c.trim()};}):[{c:"",t:e.t,m:e.m||120,k:e.id}];
});
/* книги и комиксы: js/books.js; встраиваются в хронологию между фильмами и сериалами */
const BOOKS=(window.BOOKS||[]).map(b=>({...b,t:b.ru||b.o,st:new Date(b.r)>TODAY?"soon":"out",units:[{c:"",t:b.ru||b.o,m:0,k:b.id}]}));
const ERA_IDX=Object.fromEntries(ERAS.map((x,i)=>[x.id,i]));
const CHRONO=(()=>{const out=[...D];[...BOOKS].sort((a,b)=>a.y-b.y).forEach(b=>{let i=out.findIndex(e=>ERA_IDX[e.era]>ERA_IDX[b.era]||(e.era===b.era&&e.y>b.y));if(i<0)i=out.length;out.splice(i,0,b);});return out;})();
const ALL=[...D,...BOOKS];
const BY=Object.fromEntries(ALL.map(e=>[e.id,e]));
let watched=new Set(), theme="lothal", order="chrono";
const F={film:true,live:true,anim:true,book:false,comic:false,kids:false,hide:false};
/* фильтры запоминаются в браузере; книги и комиксы по умолчанию выключены */
try{const s=JSON.parse(ls("swc-filters")||"{}");for(const k in F)if(typeof s[k]==="boolean")F[k]=s[k];}catch(_){}
const saveF=()=>ls("swc-filters",JSON.stringify(F));
const open=new Set();
try{const c=JSON.parse(ls("swc-local")||"{}");if(c.w)watched=new Set(c.w);if(c.theme&&PLANETS[c.theme])theme=c.theme;}catch(_){}
const unitName=(e,u)=>e.eps?ut(u):tx(e,"t");

/* ============ ГДЕ СМОТРЕТЬ / ГДЕ ЧИТАТЬ ============ */
const isRead=e=>e.k==="book"||e.k==="comic";
const baseTitle=e=>e.o.split(" — ")[0].replace(/\s*\(.*\)$/,"");
/* JustWatch показывает все легальные сервисы, где тайтл доступен в стране зрителя */
function watchURL(e){let q=baseTitle(e);if(!/star wars/i.test(q)&&!/^(Andor|Ahsoka|Obi-Wan|The Mandalorian|The Book of Boba Fett|Rogue One|Solo|The Acolyte)/.test(q))q="Star Wars "+q;return "https://www.justwatch.com/us/search?q="+encodeURIComponent(q);}
function readLinks(e){
 const q=e.o,links=[];
 if(e.ru)links.push([`https://www.litres.ru/search/?q=${encodeURIComponent(e.ru)}`,L("ЛитРес (рус.)","LitRes (Russian)")]);
 if(e.k==="comic"&&e.marvel)links.push([`https://www.marvel.com/search?limit=20&query=${encodeURIComponent(q)}`,"Marvel Unlimited"]);
 links.push([`https://www.amazon.com/s?k=${encodeURIComponent("Star Wars "+q)}`,"Amazon / Kindle"]);
 links.push([`https://www.goodreads.com/search?q=${encodeURIComponent("Star Wars "+q)}`,"Goodreads"]);
 return links.map(([u,n],i)=>`<a class="btn${i?"":" primary"}" href="${u}" target="_blank" rel="noopener noreferrer">${i?"":"📖 "}${n}</a>`).join("");
}

/* ============ DETAIL ============ */
let detailId=null;
const daysTo=r=>Math.ceil((new Date(r)-TODAY)/864e5);
const inDays=n=>L(`через ${n} дн.`,`in ${n} ${n===1?"day":"days"}`);
function seqNow(){return (order==="intro"?INTRO.map(id=>BY[id]):order==="release"?[...ALL].sort((a,b)=>a.r.localeCompare(b.r)):CHRONO).filter(e=>F[e.k]!==false).filter(e=>!e.kids||F.kids||e.id===detailId);}
function renderDetail(){
 const e=BY[detailId];if(!e)return;
 const p=eProg(e),soon=e.st!=="out",c=credOf(e),era=ERAS.find(x=>x.id===e.era);
 const mins=e.units.reduce((s,u)=>s+(u.m||0),0);
 const seq=seqNow(),i=seq.indexOf(e),prev=seq[i-1],next=seq[i+1];
 const st=p.n===0?"false":p.n===p.t?"true":"mixed";
 const tid=trailerId(e), oldTr=$("#trailer"), keepTr=oldTr&&oldTr.dataset.id===e.id?oldTr:null;
 const T=tx(e,"t"),O=tx(e,"o"),tip=tx(e,"tip");
 $("#detailIn").innerHTML=`<div class="d-hero"><div class="bgp" style="background-image:url('${posterOf(e)}')"></div>
  <button class="btn d-close" type="button" data-close>✕ ${L("Закрыть","Close")}</button>
  <div class="d-grid"><img src="${posterOf(e)}" alt="${esc(L("Постер","Poster"))}: ${esc(T)}"><div style="min-width:0">
   <div class="mono" style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--acc)">${KIND()[e.k]} · ${eraT(era,"t")}</div>
   <h2 style="margin:6px 0 4px">${esc(T)}</h2>${O?`<div class="orig">${esc(O)}</div>`:""}
   <div class="meta" style="margin-top:10px">${soon?`<span class="pill soon">${e.st==="tba"?L("Ожидается в 2027","Expected in 2027"):L("Скоро","Soon")+" · "+inDays(daysTo(e.r))}</span>`:`<span class="pill">${new Date(e.r).getFullYear()}</span>`}${e.kids?`<span class="pill">${L("Детское","Kids")}</span>`:""}</div>
   <div class="row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
    ${isRead(e)?readLinks(e):`${tid?`<button class="btn primary" type="button" data-play="${tid}">▶ ${L("Смотреть трейлер","Watch trailer")}</button>`:`<a class="btn primary" href="${trailerURL(e)}" target="_blank" rel="noopener noreferrer">▶ ${L("Трейлер на YouTube","Trailer on YouTube")}</a>`}
    ${soon?"":`<a class="btn" href="${watchURL(e)}" target="_blank" rel="noopener noreferrer">📺 ${L("Где смотреть","Where to watch")}</a>`}`}
    ${soon?"":`<button class="btn" type="button" data-all="${e.id}">${st==="true"?L("Снять отметки","Unmark all"):"✓ "+(isRead(e)?L("Прочитано","Mark as read"):L("Отметить всё","Mark all watched"))}</button>`}
   </div></div></div></div>
 <div class="d-body">
  ${tid?trailerBlock(e,tid):""}
  <p style="margin:0;font-size:15px;max-width:70ch">${esc(tx(e,"d"))}</p>${tip?`<div class="tip" style="margin:0">${esc(tip)}</div>`:""}
  <div class="facts-grid">
   <div class="fact"><small>${L("Время в Галактике","In-universe time")}</small><b>${esc(tx(e,"yl"))}</b></div>
   <div class="fact"><small>${isRead(e)?L("Выход","Published"):L("Премьера","Premiere")}</small><b>${e.st==="tba"?L("2027, дата не объявлена","2027, date TBA"):fmtDate(e.r)}</b></div>
   ${isRead(e)?`<div class="fact"><small>${L("Автор","Author")}</small><b>${esc(e.by||"—")}</b></div>${e.ru?`<div class="fact"><small>${L("Русское издание","Russian edition")}</small><b>${esc(e.ru)}</b></div>`:""}`
   :`<div class="fact"><small>${e.k==="film"?L("Хронометраж","Runtime"):L("Объём","Length")}</small><b>${e.k==="film"?(e.m?hm(e.m):L("ещё неизвестен","not announced yet")):e.eps?`${e.units.length} ${pl(e.units.length,"пункт","пункта","пунктов","item","items")} · ≈${Math.round(mins/60)} ${L("ч","h")}`:L("ещё неизвестен","not announced yet")}</b></div>`}
   ${c?`<div class="fact"><small>${c[0]}</small><b>${esc(c[1])}</b></div><div class="fact" style="grid-column:span 2"><small>${L("В ролях","Cast")}</small><b>${esc(c[2])}</b></div>`:""}
   ${soon?"":`<div class="fact"><small>${L("Твой прогресс","Your progress")}</small><b class="mono">${p.n}/${p.t} · ${Math.round(p.n/p.t*100)}%</b></div>`}
  </div>
  ${e.eps?`<div class="eps">`+e.units.map(u=>epBtn(e,u,soon)).join("")+`</div>`:""}
  <div class="d-nav">${prev?`<button class="btn" type="button" data-detail="${prev.id}">← ${esc(tx(prev,"t"))}</button>`:"<span></span>"}${next?`<button class="btn" type="button" data-detail="${next.id}">${esc(tx(next,"t"))} →</button>`:""}</div>
 </div>`;
 if(keepTr){const fresh=$("#trailer");if(fresh)fresh.replaceWith(keepTr);}
}
function playTrailer(tid){
 const box=$("#trailer");if(!box)return;
 box.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${tid}?autoplay=1&rel=0&modestbranding=1&hl=${lang}" title="${L("Трейлер","Trailer")}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
 box.scrollIntoView({behavior:"smooth",block:"center"});
}
function openDetail(id){if(!BY[id])return;const same=detailId===id;detailId=id;renderDetail();$("#detail").hidden=false;if(!same)$("#detailIn").scrollTop=0;if(location.hash!=="#"+id)location.hash=id;}
function closeDetail(){detailId=null;$("#detail").hidden=true;$("#detailIn").innerHTML="";if(location.hash)location.hash="";}
window.addEventListener("hashchange",()=>{const id=location.hash.slice(1);if(BY[id]){if(detailId!==id)openDetail(id);}else if(detailId){detailId=null;$("#detail").hidden=true;$("#detailIn").innerHTML="";}});

/* ============ MASCOT ============ */
let quipI=0, quipT=null;
function renderMascot(){$("#mascotArt").innerHTML=MASCOT[theme].svg;$("#mascot").setAttribute("aria-label",mName(theme)+L(": нажми, чтобы услышать реплику",": click to hear a line"));$("#bubble").hidden=true;}
function quip(){const q=mQuips(theme);const b=$("#bubble");b.textContent=mName(theme)+": "+q[quipI++%q.length];b.hidden=false;clearTimeout(quipT);quipT=setTimeout(()=>b.hidden=true,5000);}

/* ============ SYNC (Firebase через js/sync.js) ============ */
let cloud=null, uid=null, unsub=null, writing=false, dirty=false, wTimer=null, syncKey=["",""];
const SYNC={
 connecting:["Подключаюсь к архиву…","Connecting to the archive…"],
 saving:["Сохраняю…","Saving…"],
 synced:["Синхронизировано","Synced"],
 saveFail:["Не удалось сохранить в облако, прогресс сохранён на устройстве","Couldn't save to the cloud. Progress is saved on this device"],
 signIn:["Войди через GitHub, чтобы прогресс был на всех устройствах. Пока он хранится в этом браузере","Sign in with GitHub to keep progress on all your devices. For now it's stored in this browser"],
 loading:["Загружаю прогресс…","Loading progress…"],
 noSync:["Синхронизация недоступна, прогресс сохраняется в браузере","Sync is unavailable. Progress is saved in this browser"],
 local:["Прогресс хранится в этом браузере","Progress is stored in this browser"],
 authFail:["Вход не удался","Sign-in failed"]
};
function setSync(s,key,extra){syncKey=[s,key,extra||""];$("#syncDot").className="dot "+(s==="ok"?"ok":s==="warn"?"warn":"");const v=SYNC[key];$("#syncTxt").textContent=(v?(isEN()?v[1]:v[0]):key)+(extra?" · "+extra:"");}
function setAuthBtn(){const b=$("#authBtn");if(!cloud){b.hidden=true;return;}b.hidden=false;b.textContent=uid?L("Выйти","Sign out"):L("Войти через ","Sign in with ")+(cloud.provider||"GitHub");}
const acct=()=>cloud.userName()||L("аккаунт","account");
function persist(){
 ls("swc-local",JSON.stringify({w:[...watched],theme}));
 if(!cloud||!uid)return;
 dirty=true;clearTimeout(wTimer);wTimer=setTimeout(flush,700);
}
async function flush(){
 if(!cloud||!uid||writing||!dirty)return;
 writing=true;dirty=false;setSync("ok","saving");
 try{await cloud.save(uid,{w:[...watched],theme});setSync("ok","synced",acct());}
 catch(err){setSync("warn","saveFail");}
 writing=false;if(dirty)flush();
}
function onCloudUser(u){
 if(unsub){unsub();unsub=null;}
 uid=u?u.uid:null;setAuthBtn();
 /* после первого входа на этом устройстве — один раз карта галактики */
 if(uid&&!ls("swc-galaxy-login-"+uid)){ls("swc-galaxy-login-"+uid,"1");setTimeout(()=>window.Galaxy&&Galaxy.open({first:true}),300);}
 if(!uid){setSync("warn","signIn");return;}
 setSync("","loading");
 let first=true;
 unsub=cloud.subscribe(uid,d=>{
  if(writing||dirty)return;
  setSync("ok","synced",acct());
  if(d){
   const remote=d.w||[];
   const merged=first&&watched.size?[...new Set([...remote,...watched])]:remote; /* при первом входе объединяем с локальным */
   watched=new Set(merged);
   if(d.theme&&PLANETS[d.theme]&&d.theme!==theme){theme=d.theme;applyTheme();}
   ls("swc-local",JSON.stringify({w:[...watched],theme}));render();
   if(first&&merged.length!==remote.length){dirty=true;flush();}
  }else if(first&&watched.size){dirty=true;flush();}
  first=false;
 },()=>setSync("warn","noSync"));
}
function startCloud(api){
 cloud=api;
 if(!cloud){setSync("warn","local");setAuthBtn();return;}
 cloud.onAuth(onCloudUser);
}
if(window.SWCloud!==undefined)startCloud(window.SWCloud);
else{setSync("","connecting");window.addEventListener("cloud-ready",e=>startCloud(e.detail),{once:true});}

/* ============ RENDER ============ */
const KIND=()=>isEN()?{film:"Film",live:"Series",anim:"Animation",book:"Novel",comic:"Comic"}:{film:"Фильм",live:"Сериал",anim:"Анимация",book:"Книга",comic:"Комикс"};
function eProg(e){const n=e.units.filter(u=>watched.has(u.k)).length;return{n,t:e.units.length};}
function visible(e){
 if(!F[e.k])return false;
 if(e.kids&&!F.kids)return false;
 if(F.hide&&e.st==="out"){const p=eProg(e);if(p.n===p.t)return false;}
 const q=$("#q").value.trim().toLowerCase();
 if(q){const x=enE(e);const hay=[e.t,e.o,e.d,x.t,x.d,...e.units.map(u=>u.c+" "+u.t)].join(" ").toLowerCase();if(!hay.includes(q))return false;}
 return true;
}
function ordered(){
 if(order==="release")return [...ALL].sort((a,b)=>a.r.localeCompare(b.r));
 if(order==="intro")return INTRO.map(id=>BY[id]);
 return CHRONO;
}
const CHECK=`<svg viewBox="0 0 16 16" fill="none" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.2 3L13 4.5"/></svg>`;
function epBtn(e,u,soon){const on=watched.has(u.k);return`<button class="ep ${on?"on":""}" type="button" data-u="${u.k}" aria-pressed="${on}" ${soon?"disabled":""}><span class="chk" aria-hidden="true" aria-checked="${on}">${CHECK}</span><code>${esc(u.c)}</code><span>${esc(ut(u))}</span></button>`;}
function card(e){
 const p=eProg(e),soon=e.st!=="out",done=!soon&&p.n===p.t,multi=!!e.eps;
 const st=p.n===0?"false":p.n===p.t?"true":"mixed";
 const T=tx(e,"t"),O=tx(e,"o"),tip=tx(e,"tip");
 const status=soon?(e.st==="tba"?`<span class="pill soon">${L("Ожидается в 2027","Expected in 2027")}</span>`:`<span class="pill soon">${L("Скоро","Soon")}</span> <span class="cd">${fmtDate(e.r)} · ${inDays(daysTo(e.r))}</span>`):`<span class="pill">${new Date(e.r).getFullYear()}</span>`;
 const len=e.k==="film"?(e.m?`<span class="pill">${hm(e.m)}</span>`:""):(e.eps?`<span class="pill">${e.units.length} ${pl(e.units.length,"пункт","пункта","пунктов","item","items")}</span>`:"");
 const isOpen=open.has(e.id);
 let h=`<article class="card ${done?"done":""} ${soon?"soon":""}" id="c-${e.id}" data-era="${e.era}" data-k="${e.k}">
 <div class="gl"><div class="glow" style="background-image:url('${posterOf(e)}')"></div></div>
 <div class="yr">${esc(tx(e,"yl"))}</div>
 <div class="c-head">
  <div class="poster"><button class="pbtn" type="button" data-detail="${e.id}" aria-label="${esc(L("Открыть карточку","Open details"))}: ${esc(T)}"><img src="${posterOf(e)}" alt="" loading="lazy" decoding="async"></button><button class="chk" role="checkbox" aria-checked="${st}" aria-label="${esc(L("Отметить целиком","Mark all watched"))}: ${esc(T)}" data-all="${e.id}" ${soon?"disabled":""}>${CHECK}</button></div>
  <div class="c-title"><button class="ttl" type="button" data-detail="${e.id}"><h3>${esc(T)}</h3></button>${O?`<div class="orig">${esc(O)}</div>`:""}
   <div class="meta"><span class="pill ${e.k}">${KIND()[e.k]}</span>${e.kids?`<span class="pill">${L("Детское","Kids")}</span>`:""}${len}${status}${multi&&p.n?`<span class="pill mono">${p.n}/${p.t}</span>`:""}</div>
   <p class="c-desc">${esc(tx(e,"d"))}</p>${tip?`<div class="tip">${esc(tip)}</div>`:""}
  </div>
  ${multi?`<button class="expand" type="button" data-open="${e.id}" aria-expanded="${isOpen}">${isOpen?L("Свернуть","Collapse"):L("Серии","Episodes")}</button>`:"<span></span>"}
 </div>`;
 if(multi&&p.n&&p.n<p.t)h+=`<div class="mini"><i style="width:${(p.n/p.t*100).toFixed(1)}%"></i></div>`;
 if(multi&&isOpen){
  h+=`<div class="eps">`+e.units.map(u=>epBtn(e,u,soon)).join("")+
  `<div class="eps-tools"><button class="link" type="button" data-upto="${e.id}">${L("Заполнить пропуски до последней отмеченной","Fill gaps up to the last marked one")}</button></div></div>`;
 }
 return h+`</article>`;
}
function render(){
 const list=ordered().filter(visible);
 let h="";
 if(order==="chrono"){
  for(const er of ERAS){const items=list.filter(e=>e.era===er.id);if(!items.length)continue;
   h+=`<section id="era-${er.id}"><div class="era-h"><h2>${eraT(er,"t")}</h2><span>${eraT(er,"y")}</span><p>${eraT(er,"d")}</p></div><div class="rail">${items.map(card).join("")}</div></section>`;}
 }else{
  const intro=order==="intro"?`<div class="era-h"><h2>${L("Путь новичка","The newcomer's path")}</h2><span>${INTRO.length} ${L("пунктов","items")}</span><p>${L("Сначала оригинальная трилогия, как её увидели зрители в 1977-м. Затем приквелы, потом лучшие сериалы на пути к сиквелам. Анимацию можно добавить позже: переключись на «Хронологию».",EN.intro)}</p></div>`:
   `<div class="era-h"><h2>${L("В порядке выхода","In release order")}</h2><span>1977 → 2027</span><p>${L("Как сагу видели зрители. Блоки «Войн клонов» внутри следуют официальной хронологии.",EN.release)}</p></div>`;
  h=intro+`<div class="rail">${list.map(card).join("")}</div>`;
 }
 $("#list").innerHTML=h||`<div class="empty">${L("Ничего не нашлось. Попробуй другой запрос или включи фильтры.","Nothing found. Try another search or turn the filters back on.")}</div>`;
 renderStats();renderEras();
 if(detailId)renderDetail();
}
function renderStats(){
 const out=D.filter(e=>e.st==="out"&&(!e.kids||F.kids));
 let tot=0,done=0,mins=0;
 out.forEach(e=>e.units.forEach(u=>{tot++;if(watched.has(u.k))done++;else mins+=u.m;}));
 const pct=tot?Math.round(done/tot*100):0;
 $("#sPct").textContent=pct+"%";$("#sUnits").textContent=`${done}/${tot}`;$("#sHours").textContent=Math.round(mins/60)+" "+L("ч","h");
 $("#sBar").style.width=(tot?done/tot*100:0)+"%";
 const seq=(order==="intro"?INTRO.map(id=>BY[id]):order==="release"?[...D].sort((a,b)=>a.r.localeCompare(b.r)):D).filter(e=>e.st==="out"&&(!e.kids||F.kids));
 let nx=null;for(const e of seq){const u=e.units.find(u=>!watched.has(u.k));if(u){nx={e,u};break;}}
 const soon=D.filter(e=>e.st==="soon").sort((a,b)=>a.r.localeCompare(b.r))[0];
 const ordName=order==="chrono"?L("хронология","chronology"):order==="release"?L("по выходу","release order"):L("для новичка","newcomer");
 $("#nextBox").innerHTML=nx?`<div class="next-grid"><img src="${posterOf(nx.e)}" alt=""><div style="min-width:0"><div class="eyebrow">${L("Смотреть дальше","Up next")} · ${ordName}</div>
  <h3>${esc(unitName(nx.e,nx.u))}</h3><div class="sub">${nx.e.eps?esc(tx(nx.e,"t"))+" · "+esc(nx.u.c)+" · ":""}${esc(tx(nx.e,"yl"))}</div>
  <div class="row"><button class="btn primary" type="button" data-u="${nx.u.k}">✓ ${L("Посмотрел","Watched")}</button><button class="btn" type="button" data-goto="${nx.e.id}">${L("Показать в списке","Show in list")}</button></div>
  ${soon?`<div class="sub" style="margin-top:10px">${L("Следующая премьера","Next premiere")}: <b>${esc(tx(soon,"t"))}</b>, ${inDays(daysTo(soon.r))}</div>`:""}</div></div>`
  :`<div class="eyebrow">${L("Сага пройдена","Saga complete")}</div><h3>${L("Ты посмотрел всё, что вышло","You've watched everything released")}</h3>${soon?`<div class="sub">${L("Дальше","Next")} — ${esc(tx(soon,"t"))}, ${fmtDate(soon.r)}</div>`:""}`;
}
function renderRibbon(){
 const seen=new Set();
 $("#ribbon").innerHTML=[...D].sort((a,b)=>a.r.localeCompare(b.r)).filter(e=>{const p=posterOf(e);if(seen.has(p)||(e.kids&&!F.kids))return false;seen.add(p);return true;})
  .map(e=>{const p=eProg(e);return`<button type="button" class="${e.st==="out"&&p.n===p.t?"w":""}" data-goto="${e.id}" title="${esc(tx(e,"t"))}"><img src="${posterOf(e)}" alt="${esc(tx(e,"t"))}" loading="lazy"></button>`;}).join("");
}

/* ============ HOLONET ============ */
const NEWS=(window.NEWS||[]).slice().sort((a,b)=>b.d.localeCompare(a.d));
const lastSeen=ls("swc-news-seen")||"";
const nf=(n,f)=>isEN()?(n[f+"e"]||n[f]):n[f];
function newsCard(n){
 const rel=(n.rel||[]).filter(id=>BY[id]).map(id=>`<button class="rel" type="button" data-detail="${id}">${esc(tx(BY[id],"t"))}</button>`).join("");
 const isPoster=n.img&&n.img.startsWith("posters/");
 const wide=n.img&&!isPoster?`<div class="n-img"><img src="${esc(n.img)}" alt="" loading="lazy"></div>`:"";
 const thumb=isPoster?`<img class="n-thumb" src="${esc(n.img)}" alt="" loading="lazy">`:"";
 const b=nf(n,"b");
 const body=b?`<div class="n-body">${b.split(/\n\n+/).map(p=>`<p>${esc(p)}</p>`).join("")}</div><button class="link n-more" type="button" data-more aria-expanded="false">${L("Подробнее","Read more")}</button>`:"";
 const tag=isEN()?(EN.tags[n.tag]||n.tag):n.tag;
 return `<article class="news ${isPoster?"with-thumb":""}">${wide}<div class="n-in">${thumb}<div class="n-main"><div class="top"><span class="pill">${esc(tag)}</span><time datetime="${n.d}">${fmtDate(n.d)}</time>${lastSeen&&n.d>lastSeen?`<span class="fresh">${L("НОВОЕ","NEW")}</span>`:""}</div>
  <h3>${esc(nf(n,"t"))}</h3><p class="lead-s">${esc(nf(n,"s"))}</p>${body}</div></div>
  <div class="foot"><a class="src" href="${esc(n.src)}" target="_blank" rel="noopener noreferrer">${esc(n.srcN||L("Источник","Source"))} ↗</a>${rel}</div></article>`;
}
function renderNews(){
 if(!NEWS.length){$("#holonet").hidden=true;return;}
 $("#newsRow").innerHTML=NEWS.slice(0,4).map(newsCard).join("");
 $("#holoSub").textContent=`${NEWS.length} ${pl(NEWS.length,"новость","новости","новостей","story","stories")} · ${L("обновлено","updated")} ${fmtDate(NEWS[0].d)}`;
 $("#newsAll").hidden=NEWS.length<=4;
 if(!$("#newsSheet").hidden)$("#newsFull").innerHTML=NEWS.map(newsCard).join("");
 ls("swc-news-seen",NEWS[0].d);
}
function renderEras(){
 renderRibbon();
 $("#eras").innerHTML=ERAS.map(er=>{const es=D.filter(e=>e.era===er.id&&e.st==="out"&&(!e.kids||F.kids));let t=0,n=0;es.forEach(e=>e.units.forEach(u=>{t++;if(watched.has(u.k))n++;}));
  return`<button class="era-b" type="button" data-era="${er.id}"><small>${eraT(er,"y")}</small><strong>${eraT(er,"t")}</strong><div class="bar"><i style="width:${t?n/t*100:0}%"></i></div></button>`;}).join("");
}
/* на широких экранах пейзаж целиком по ширине (видна вся сцена), на телефоне — с обрезкой по краям */
const wideMQ=window.matchMedia("(min-width: 700px)");
function fitLand(){$("#land").setAttribute("preserveAspectRatio",wideMQ.matches?"xMidYMax meet":"xMidYMax slice");}
wideMQ.addEventListener?.("change",fitLand);
function applyTheme(){
 document.documentElement.setAttribute("data-planet",theme);
 $("#land").innerHTML=landSVG(theme);fitLand();
 const ms=$("#mstage");if(ms){const fx={lothal:640,tatooine:760,coruscant:600,hoth:560,mustafar:900,naboo:880}[theme]||600;ms.setAttribute("viewBox",`${fx-270} 236 540 184`);ms.innerHTML=landSVG(theme);}
 $("#brand").textContent=L("Голоархив","Holoarchive")+" · "+plT(theme,"n");
 renderMascot();
}
function renderPlanets(){
 $("#planets").innerHTML=Object.keys(PLANETS).map(id=>`<button class="pl" type="button" data-planet="${id}" aria-pressed="${id===theme}">
  <div class="sw" data-planet-preview="${id}"><svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax slice">${landSVG(id)}</svg><span class="mini-m">${MASCOT[id].svg}</span></div>
  <div class="tx"><b>${plT(id,"n")}</b><small>${plT(id,"s")}</small><p>${plT(id,"d")}</p><div class="facts">${plT(id,"f")}<br>${L("Маскот","Mascot")}: ${mName(id)}</div></div></button>`).join("");
 document.querySelectorAll("[data-planet-preview]").forEach(el=>{const id=el.dataset.planetPreview;const cs=themeVars(id);for(const k in cs)el.style.setProperty(k,cs[k]);el.style.background=`linear-gradient(180deg,${cs["--sky1"]},${cs["--sky2"]} 62%,${cs["--sky3"]})`;});
}
function themeVars(id){const prev=document.documentElement.getAttribute("data-planet");document.documentElement.setAttribute("data-planet",id);const cs=getComputedStyle(document.documentElement);const o={};["--sky1","--sky2","--sky3","--l1","--l2","--l3","--orb","--acc","--acc2"].forEach(k=>o[k]=cs.getPropertyValue(k).trim());document.documentElement.setAttribute("data-planet",prev);return o;}

/* ============ СТАТИЧНЫЕ ТЕКСТЫ И ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ============ */
function applyLang(){
 document.documentElement.lang=lang;
 document.title=L("Хроники Галактики","Galactic Chronicles");
 document.querySelectorAll("[data-en]").forEach(el=>{if(el.dataset.ru===undefined)el.dataset.ru=el.innerHTML;el.innerHTML=isEN()?el.dataset.en:el.dataset.ru;});
 document.querySelectorAll("[data-en-ph]").forEach(el=>{if(el.dataset.ruPh===undefined)el.dataset.ruPh=el.placeholder;el.placeholder=isEN()?el.dataset.enPh:el.dataset.ruPh;});
 const lb=$("#langBtn");lb.textContent=isEN()?"RU":"EN";lb.setAttribute("aria-label",isEN()?"Переключить на русский":"Switch to English");
 setAuthBtn();setSync(syncKey[0],syncKey[1]||"connecting",syncKey[2]);
 applyTheme();render();renderNews();
 if(!$("#sheet").hidden)renderPlanets();
}

/* ============ ОТКЛИК НА ДЕЙСТВИЯ ============ */
let toastT=null, undoSet=null;
function toast(html,prev){
 let el=$("#toast");
 if(!el){el=document.createElement("div");el.id="toast";el.className="toast";el.setAttribute("role","status");document.body.appendChild(el);}
 undoSet=prev;
 el.innerHTML=`<span>${html}</span>${prev?`<button class="btn" type="button" id="undoBtn">${L("Отменить","Undo")}</button>`:""}`;
 setTimeout(()=>el.classList.add("show"),20);
 clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove("show"),4200);
}
function say(text){
 const b=$("#bubble"),m=$("#mascot");if(!b||!m)return;
 b.textContent=mName(theme)+": "+text;b.hidden=false;
 m.classList.remove("hop");void m.offsetWidth;m.classList.add("hop");
 clearTimeout(quipT);quipT=setTimeout(()=>b.hidden=true,4500);
}
function leftHours(){let m=0;D.forEach(e=>{if(e.st==="out"&&(!e.kids||F.kids))e.units.forEach(u=>{if(!watched.has(u.k))m+=u.m;});});return Math.round(m/60);}
function afterChange(keys,added,prev){
 const e=BY[keys[0].split(":")[0]];if(!e)return;
 requestAnimationFrame(()=>{
  keys.forEach(k=>document.querySelectorAll(`[data-u="${k}"] .chk, [data-u="${k}"].chk`).forEach(c=>{c.classList.remove("pop");void c.offsetWidth;c.classList.add("pop");}));
  document.querySelectorAll(`[data-all="${e.id}"]`).forEach(c=>{c.classList.remove("pop");void c.offsetWidth;c.classList.add("pop");});
 });
 const T=tx(e,"t");
 if(added&&e.units.every(u=>watched.has(u.k))){
  requestAnimationFrame(()=>{const c=document.getElementById("c-"+e.id);if(c){c.classList.remove("flash");void c.offsetWidth;c.classList.add("flash");}});
  say(L(`«${T}» пройдено! До конца саги ≈${leftHours()} ч.`,`“${T}” complete! About ${leftHours()} h of the saga left.`));
 }
 const u=keys.length===1?e.units.find(x=>x.k===keys[0]):null;
 const name=u&&e.eps?`${esc(ut(u))} <span style="opacity:.7">· ${esc(T)}</span>`:esc(T);
 toast(`<b>${added?"✓ "+(isRead(e)?L("Прочитано","Read"):L("Просмотрено","Watched")):L("Снята отметка","Unmarked")}:</b> ${name}`,prev);
}
function toggle(k){const prev=new Set(watched);const add=!watched.has(k);add?watched.add(k):watched.delete(k);persist();render();afterChange([k],add,prev);}

/* ============ EVENTS ============ */
document.addEventListener("click",ev=>{
 const t=ev.target.closest("button");if(!t||t.disabled)return;
 if(t.dataset.u){toggle(t.dataset.u);return;}
 if(t.dataset.all){const e=BY[t.dataset.all];const prev=new Set(watched);const all=e.units.every(u=>watched.has(u.k));e.units.forEach(u=>all?watched.delete(u.k):watched.add(u.k));persist();render();afterChange(e.units.map(u=>u.k),!all,prev);return;}
 if(t.id==="undoBtn"&&undoSet){watched=new Set(undoSet);undoSet=null;persist();render();$("#toast").classList.remove("show");return;}
 if(t.id==="langBtn"){lang=isEN()?"ru":"en";ls("swc-lang",lang);applyLang();return;}
 if(t.dataset.open){const id=t.dataset.open;open.has(id)?open.delete(id):open.add(id);render();return;}
 if(t.dataset.upto){const e=BY[t.dataset.upto];let last=-1;e.units.forEach((u,i)=>{if(watched.has(u.k))last=i;});e.units.slice(0,last+1).forEach(u=>watched.add(u.k));persist();render();return;}
 if(t.dataset.order){order=t.dataset.order;document.querySelectorAll("[data-order]").forEach(b=>b.setAttribute("aria-pressed",b===t));render();return;}
 if(t.dataset.f){F[t.dataset.f]=!F[t.dataset.f];t.setAttribute("aria-pressed",F[t.dataset.f]);saveF();render();return;}
 if(t.dataset.era){if(order!=="chrono"){order="chrono";document.querySelectorAll("[data-order]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.order==="chrono"));render();}const el=document.getElementById("era-"+t.dataset.era);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});return;}
 if(t.dataset.goto){const id=t.dataset.goto;if(BY[id].eps)open.add(id);render();const el=document.getElementById("c-"+id);if(el)el.scrollIntoView({behavior:"smooth",block:"center"});return;}
 if(t.dataset.planet){theme=t.dataset.planet;applyTheme();renderPlanets();persist();return;}
 if(t.dataset.play){playTrailer(t.dataset.play);return;}
 if(t.dataset.detail){$("#newsSheet").hidden=true;openDetail(t.dataset.detail);return;}
 if(t.hasAttribute("data-more")){const a=t.closest(".news");const o=a.classList.toggle("open");t.textContent=o?L("Свернуть","Collapse"):L("Подробнее","Read more");t.setAttribute("aria-expanded",o);return;}
 if(t.id==="newsAll"){$("#newsFull").innerHTML=NEWS.map(newsCard).join("");$("#newsSheet").hidden=false;return;}
 if(t.hasAttribute("data-close-news")){$("#newsSheet").hidden=true;return;}
 if(t.hasAttribute("data-close")){closeDetail();return;}
 if(t.id==="mascot"){quip();return;}
 if(t.id==="authBtn"&&cloud){(uid?cloud.signOut():cloud.signIn()).catch(err=>setSync("warn","authFail",err&&err.code||""));return;}
 if(t.id==="themeBtn"){if(window.Galaxy)Galaxy.open();else{renderPlanets();$("#sheet").hidden=false;}return;}
 if(t.id==="sheetX"){$("#sheet").hidden=true;return;}
});
$("#sheet").addEventListener("click",e=>{if(e.target.id==="sheet")$("#sheet").hidden=true;});
$("#detail").addEventListener("click",e=>{if(e.target.id==="detail")closeDetail();});
$("#newsSheet").addEventListener("click",e=>{if(e.target.id==="newsSheet")$("#newsSheet").hidden=true;});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("#sheet").hidden=true;$("#newsSheet").hidden=true;if(detailId)closeDetail();}});
$("#q").addEventListener("input",render);


/* ============ ОБЛОЖКИ КНИГ И КОМИКСОВ ============
   Настоящих обложек нет — рисуем свою: цвет эпохи, значок формата, название и автор. */
const ERA_COL={hr:"#f0c75e",fall:"#62b0ff",empire:"#ff5a4a",reb:"#ff9d42",nr:"#3fd8c2",fo:"#ff4f7a",next:"#b493ff"};
const coverCache={};
function coverURI(e){
 if(coverCache[e.id])return coverCache[e.id];
 const c=ERA_COL[e.era]||"#d8c467",title=(e.o||"").toUpperCase(),words=title.split(/\s+/),lines=[];let cur="";
 words.forEach(w=>{if((cur+" "+w).trim().length>13&&cur){lines.push(cur);cur=w;}else cur=(cur+" "+w).trim();});if(cur)lines.push(cur);
 const L5=lines.slice(0,5),esc2=s=>String(s).replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
 const comic=e.k==="comic";
 const icon=comic?`<path d="M60 52h80a8 8 0 0 1 8 8v34a8 8 0 0 1-8 8h-46l-18 14v-14h-16a8 8 0 0 1-8-8V60a8 8 0 0 1 8-8z" fill="${c}"/><text x="100" y="86" font-family="Arial Black,Arial" font-weight="900" font-size="24" fill="#111" text-anchor="middle">POW!</text>`
  :`<path d="M100 60c-14-8-30-10-44-8v52c14-2 30 0 44 8 14-8 30-10 44-8V52c-14-2-30 0-44 8z" fill="none" stroke="${c}" stroke-width="5" stroke-linejoin="round"/><path d="M100 60v52" stroke="${c}" stroke-width="5"/>`;
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#141826"/><stop offset="1" stop-color="#05060c"/></linearGradient></defs>
  <rect width="200" height="300" fill="url(#g)"/><rect x="0" y="0" width="200" height="10" fill="${c}"/><rect x="10" y="20" width="180" height="270" fill="none" stroke="${c}" stroke-opacity=".5" stroke-width="2"/>
  ${icon}<text x="100" y="40" font-family="Arial" font-size="11" letter-spacing="3" fill="${c}" text-anchor="middle">${comic?"STAR WARS · COMIC":"STAR WARS · NOVEL"}</text>
  ${L5.map((l,i)=>`<text x="100" y="${150+i*22}" font-family="Arial Black,Arial" font-weight="900" font-size="17" fill="#f2efe6" text-anchor="middle">${esc2(l)}</text>`).join("")}
  <text x="100" y="272" font-family="Arial" font-size="11" fill="#b9bfd0" text-anchor="middle">${esc2((e.by||"").slice(0,30))}</text></svg>`;
 return coverCache[e.id]="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
}

document.querySelectorAll("[data-f]").forEach(b=>b.setAttribute("aria-pressed",!!F[b.dataset.f]));
applyLang();
{const h=location.hash.slice(1);if(BY[h])openDetail(h);}
