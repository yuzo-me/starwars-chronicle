
/* ============ DATA ============ */
const ERAS=[
 {id:"hr",t:"Высокая Республика",y:"≈ 232–100 ДБЯ",d:"Золотой век джедаев. Орден на пике силы, а в тени уже зреет то, что приведёт к его падению."},
 {id:"fall",t:"Падение джедаев",y:"≈ 36–19 ДБЯ",d:"Скайуокер найден, Палпатин рвётся к власти, Войны клонов истощают Орден и заканчиваются Приказом 66."},
 {id:"empire",t:"Правление Империи",y:"19–5 ДБЯ",d:"Джедаи истреблены, клонов сменяют штурмовики. Выжившие прячутся, а первые искры сопротивления только загораются."},
 {id:"reb",t:"Эпоха Восстания",y:"5 ДБЯ – 4 ПБЯ",d:"Разрозненные ячейки складываются в Альянс повстанцев. Звезда Смерти, Явин, Хот, Эндор."},
 {id:"nr",t:"Новая Республика",y:"9–11 ПБЯ",d:"Император мёртв, но остатки Империи живы. Мандалорцы, охотники за головами и возвращение Трауна."},
 {id:"fo",t:"Восход Первого Ордена",y:"34–35 ПБЯ",d:"Первый Орден поднимается из руин Империи. Сопротивление, Рей и финал саги Скайуокеров."},
 {id:"next",t:"Новая эра",y:"после 35 ПБЯ",d:"Что будет с Галактикой после «Восхода Скайуокера». Пока об этом знают только анонсы."}
];

/* k: film|live|anim · y: год (минус = ДБЯ) · r: дата выхода · st: out|soon|tba · m: минут (фильм или средняя серия)
   eps: строки "код|название[|минут]" — каждая строка отмечается отдельно */
const D=[
{id:"yja",t:"Приключения юных джедаев",o:"Young Jedi Adventures",k:"anim",kids:1,era:"hr",y:-232,yl:"≈232 ДБЯ",r:"2023-05-04",m:12,
 d:"Мультсериал для детей о юнлингах Кае, Лис и Нэше. Самая ранняя точка экранного канона.",
 eps:`S1|Сезон 1 · 49 серий|588
S2|Сезон 2 · 44 серии|528
S3|Сезон 3 · 13 серий|156`},
{id:"acolyte",t:"Аколит",o:"The Acolyte",k:"live",era:"hr",y:-132,yl:"132 ДБЯ",r:"2024-06-04",m:38,
 d:"Мастер-джедай Сол расследует убийства коллег, и след ведёт к его прошлому. Детектив на закате Высокой Республики.",
 tip:"Третья серия — флешбэк на 16 лет назад, так и задумано.",
 eps:`1|Lost / Found
2|Revenge / Justice
3|Destiny
4|Day
5|Night
6|Teach / Corrupt
7|Choice
8|The Acolyte`},
{id:"totj1",t:"Сказания о джедаях · эп. 1–3",o:"Tales of the Jedi",k:"anim",era:"fall",y:-36,yl:"36–33 ДБЯ",r:"2022-10-26",m:15,
 d:"Рождение Асоки на Шили и молодой граф Дуку, который всё сильнее разочаровывается в Республике.",
 eps:`1|Life and Death
2|Justice
3|Choices`},
{id:"ep1",t:"Эпизод I. Скрытая угроза",o:"The Phantom Menace",k:"film",era:"fall",y:-32,yl:"32 ДБЯ",r:"1999-05-19",m:136,
 d:"Квай-Гон и Оби-Ван находят на Татуине мальчика по имени Энакин. Ситхи возвращаются."},
{id:"totj4",t:"Сказания о джедаях · «Лорд ситхов»",o:"Tales of the Jedi: The Sith Lord",k:"anim",era:"fall",y:-32,yl:"32 ДБЯ",r:"2022-10-26",m:15,
 d:"Дуку после гибели Квай-Гона делает последний шаг к тёмной стороне.",
 eps:`4|The Sith Lord`},
{id:"ep2",t:"Эпизод II. Атака клонов",o:"Attack of the Clones",k:"film",era:"fall",y:-22,yl:"22 ДБЯ",r:"2002-05-16",m:142,
 d:"Армия клонов, тайный брак Энакина и Падме, битва на Джеонозисе — война начинается."},
{id:"cw0",t:"Войны клонов · Пролог",o:"The Clone Wars",k:"anim",era:"fall",y:-22,yl:"22 ДБЯ",r:"2008-10-03",m:22,
 d:"Две серии, которые по официальной хронологии идут ещё до фильма.",
 eps:`2x16|Cat and Mouse
1x16|Hidden Enemy`},
{id:"cwfilm",t:"Войны клонов (фильм)",o:"The Clone Wars",k:"film",era:"fall",y:-22,yl:"22 ДБЯ",r:"2008-08-15",m:98,
 d:"Знакомство с Асокой Тано — падаваном Энакина. Старт анимационного сериала."},
{id:"cw1",t:"Войны клонов · Сезон 1",o:"The Clone Wars — S1 (хронологически)",k:"anim",era:"fall",y:-22,yl:"22–21 ДБЯ",r:"2008-10-03",m:22,
 d:"Охота на «Злонамеренный», Рилот, Кристофсис. Сериал раскачивается и находит голос.",
 eps:`3x3|Supply Lines
1x1|Ambush
1x2|Rising Malevolence
1x3|Shadow of Malevolence
1x4|Destroy Malevolence
1x5|Rookies
1x6|Downfall of a Droid
1x7|Duel of the Droids
1x8|Bombad Jedi
1x9|Cloak of Darkness
1x10|Lair of Grievous
1x11|Dooku Captured
1x12|The Gungan General
1x13|Jedi Crash
1x14|Defenders of Peace
1x15|Trespass
1x17|Blue Shadow Virus
1x18|Mystery of a Thousand Moons
1x19|Storm Over Ryloth
1x20|Innocents of Ryloth
1x21|Liberty on Ryloth
1x22|Hostage Crisis`},
{id:"cw2",t:"Войны клонов · Сезон 2",o:"The Clone Wars — S2 (хронологически)",k:"anim",era:"fall",y:-21,yl:"21 ДБЯ",r:"2009-10-02",m:22,
 d:"Кэд Бейн, Джеонозис, Мандалор и герцогиня Сатин. Плюс две серии третьего сезона, вставленные по хронологии.",
 eps:`2x1|Holocron Heist
2x2|Cargo of Doom
2x3|Children of the Force
2x4|Senate Spy
2x5|Landing at Point Rain
2x6|Weapons Factory
2x7|Legacy of Terror
2x8|Brain Invaders
2x9|Grievous Intrigue
2x10|The Deserter
2x11|Lightsaber Lost
2x12|The Mandalore Plot
2x13|Voyage of Temptation
2x14|Duchess of Mandalore
2x15|Senate Murders
3x10|Heroes on Both Sides
3x11|Pursuit of Peace
2x17|Bounty Hunters
2x18|The Zillo Beast
2x19|The Zillo Beast Strikes Back
2x20|Death Trap
2x21|R2 Come Home
2x22|Lethal Trackdown`},
{id:"totj5",t:"Сказания о джедаях · «Практика»",o:"Tales of the Jedi: Practice Makes Perfect",k:"anim",era:"fall",y:-21,yl:"≈21 ДБЯ",r:"2022-10-26",m:15,
 d:"Энакин тренирует Асоку жёстче, чем ей кажется справедливым.",
 eps:`5|Practice Makes Perfect`},
{id:"cw3",t:"Войны клонов · Сезон 3",o:"The Clone Wars — S3 (хронологически)",k:"anim",era:"fall",y:-21,yl:"21 ДБЯ",r:"2010-09-17",m:22,
 d:"Кадеты-клоны, Сёстры ночи и Вентресс, трилогия Мортиса — одна из ключевых арок для лора Силы.",
 eps:`3x1|Clone Cadets
3x2|ARC Troopers
3x4|Sphere of Influence
3x5|Corruption
3x6|The Academy
3x7|Assassin
3x8|Evil Plans
3x9|Hunt for Ziro
3x12|Nightsisters
3x13|Monster
3x14|Witches of the Mist
3x15|Overlords
3x16|Altar of Mortis
3x17|Ghosts of Mortis
3x18|The Citadel
3x19|Counterattack
3x20|Citadel Rescue
3x21|Padawan Lost
3x22|Wookiee Hunt`},
{id:"cw4",t:"Войны клонов · Сезон 4",o:"The Clone Wars — S4",k:"anim",era:"fall",y:-20,yl:"20 ДБЯ",r:"2011-09-16",m:22,
 d:"Умбара и Понг Крелл, Мон-Каламари, «Ящик», возвращение Мола.",
 tip:"После 4x19 «Massacre» можно сразу посмотреть «Путь страха» из «Сказаний об Империи» — это та же ночь на Датомире.",
 eps:`4x1|Water War
4x2|Gungan Attack
4x3|Prisoners
4x4|Shadow Warrior
4x5|Mercy Mission
4x6|Nomad Droids
4x7|Darkness on Umbara
4x8|The General
4x9|Plan of Dissent
4x10|Carnage of Krell
4x11|Kidnapped
4x12|Slaves of the Republic
4x13|Escape from Kadavo
4x14|A Friend in Need
4x15|Deception
4x16|Friends and Enemies
4x17|The Box
4x18|Crisis on Naboo
4x19|Massacre
4x20|Bounty
4x21|Brothers
4x22|Revenge`},
{id:"cw5",t:"Войны клонов · Сезон 5",o:"The Clone Wars — S5",k:"anim",era:"fall",y:-20,yl:"20–19 ДБЯ",r:"2012-09-29",m:22,
 d:"Мол захватывает Мандалор, юнлинги на Илуме и арка, после которой Асока покидает Орден.",
 eps:`5x1|Revival
5x2|A War on Two Fronts
5x3|Front Runners
5x4|The Soft War
5x5|Tipping Points
5x6|The Gathering
5x7|A Test of Strength
5x8|Bound for Rescue
5x9|A Necessary Bond
5x10|Secret Weapons
5x11|A Sunny Day in the Void
5x12|Missing in Action
5x13|Point of No Return
5x14|Eminence
5x15|Shades of Reason
5x16|The Lawless
5x17|Sabotage
5x18|The Jedi Who Knew Too Much
5x19|To Catch a Jedi
5x20|The Wrong Jedi`},
{id:"cw6",t:"Войны клонов · Сезон 6 «Потерянные миссии»",o:"The Clone Wars — S6",k:"anim",era:"fall",y:-19,yl:"19 ДБЯ",r:"2014-03-07",m:22,
 d:"Тайна чипов клонов, исчезновение Сайфо-Диаса и путешествие Йоды к истокам Силы.",
 eps:`6x1|The Unknown
6x2|Conspiracy
6x3|Fugitive
6x4|Orders
6x5|An Old Friend
6x6|The Rise of Clovis
6x7|Crisis at the Heart
6x8|The Disappeared, Part I
6x9|The Disappeared, Part II
6x10|The Lost One
6x11|Voices
6x12|Destiny
6x13|Sacrifice`},
{id:"cw7a",t:"Войны клонов · Сезон 7, арки 1–2",o:"The Clone Wars — S7",k:"anim",era:"fall",y:-19,yl:"19 ДБЯ",r:"2020-02-21",m:22,
 d:"Первое появление Бракованной партии и возвращение Асоки на нижние уровни Корусанта.",
 eps:`7x1|The Bad Batch
7x2|A Distant Echo
7x3|On the Wings of Keeradaks
7x4|Unfinished Business
7x5|Gone with a Trace
7x6|Deal No Deal
7x7|Dangerous Debt
7x8|Together Again`},
{id:"ep3",t:"Эпизод III. Месть ситхов",o:"Revenge of the Sith",k:"film",era:"fall",y:-19,yl:"19 ДБЯ",r:"2005-05-19",m:140,
 d:"Падение Энакина, Приказ 66 и рождение Империи.",
 tip:"Арка «Осада Мандалора» идёт параллельно фильму. Удобнее всего смотреть её сразу после III эпизода."},
{id:"cw7b",t:"Войны клонов · «Осада Мандалора»",o:"The Clone Wars — S7 финал",k:"anim",era:"fall",y:-19,yl:"19 ДБЯ",r:"2020-04-24",m:22,
 d:"Асока и Рекс против Мола, пока на Корусанте Энакин делает свой выбор. Лучший финал анимационной саги.",
 eps:`7x9|Old Friends Not Forgotten
7x10|The Phantom Apprentice
7x11|Shattered
7x12|Victory and Death`},
{id:"totj6",t:"Сказания о джедаях · «Решимость»",o:"Tales of the Jedi: Resolve",k:"anim",era:"empire",y:-18,yl:"≈18 ДБЯ",r:"2022-10-26",m:15,
 d:"Асока прячется от инквизиторов после Приказа 66.",
 eps:`6|Resolve`},
{id:"tote",t:"Сказания об Империи",o:"Tales of the Empire",k:"anim",era:"empire",y:-19,yl:"20 ДБЯ → годы Империи",r:"2024-05-04",m:15,
 d:"Две истории: Морган Элсбет — от резни на Датомире до службы Империи; Баррисс Оффи — бывший джедай, которого вербуют инквизиторы.",
 tip:"Серии 1–3 охватывают много лет, вплоть до времён «Повстанцев». Серии 4–6 начинаются сразу после Приказа 66.",
 eps:`1|The Path of Fear
2|The Path of Anger
3|The Path of Hate
4|Devoted
5|Realization
6|The Way Out`},
{id:"tou",t:"Сказания о преступном мире",o:"Tales of the Underworld",k:"anim",era:"empire",y:-19,yl:"≈19 ДБЯ",r:"2025-05-04",m:15,
 d:"Асажж Вентресс после Приказа 66 и молодость Кэда Бейна на Дуро.",
 tip:"Серии 1–3 — история Вентресс, 4–6 — Бейна (флешбэки на десятилетия назад).",
 eps:`1|A Way Forward
2|Friends
3|One Warrior to Another
4|The Good Life
5|A Good Turn
6|One Good Deed`},
{id:"bb1",t:"Бракованная партия · Сезон 1",o:"The Bad Batch",k:"anim",era:"empire",y:-19,yl:"19 ДБЯ",r:"2021-05-04",m:25,
 d:"Отряд 99 отказывается подчиниться Приказу 66 и берёт с собой девочку Омегу.",
 eps:`1|Aftermath|70
2|Cut and Run
3|Replacements
4|Cornered
5|Rampage
6|Decommissioned
7|Battle Scars
8|Reunion
9|Bounty Lost
10|Common Ground
11|Devil's Deal
12|Rescue on Ryloth
13|Infested
14|War-Mantle
15|Return to Kamino
16|Kamino Lost`},
{id:"maul",t:"Мол: Повелитель теней · Сезон 1",o:"Maul — Shadow Lord",k:"anim",era:"empire",y:-18,yl:"≈18 ДБЯ",r:"2026-04-06",m:25,
 d:"Мол строит криминальную империю на нетронутой войной планете и сталкивается с джедаем, пережившим чистку.",
 eps:`1|Chapter 1: The Dark Revenge
2|Chapter 2: Sinister Schemes
3|Chapter 3: Whispers in the Unknown
4|Chapter 4: Pride and Vengeance
5|Chapter 5: Inquisition
6|Chapter 6: Night of the Hunted
7|Chapter 7: Call to Oblivion
8|Chapter 8: The Creeping Fear
9|Chapter 9: Strange Allies
10|Chapter 10: The Dark Lord`},
{id:"bb2",t:"Бракованная партия · Сезон 2",o:"The Bad Batch",k:"anim",era:"empire",y:-18,yl:"18 ДБЯ",r:"2023-01-04",m:25,
 d:"Империя строит армию штурмовиков, а клоны теряют своё место в Галактике.",
 eps:`1|Spoils of War
2|Ruins of War
3|The Solitary Clone
4|Faster
5|Entombed
6|Tribe
7|The Clone Conspiracy
8|Truth and Consequences
9|The Crossing
10|Retrieval
11|Metamorphosis
12|The Outpost
13|Pabu
14|Tipping Point
15|The Summit
16|Plan 99`},
{id:"bb3",t:"Бракованная партия · Сезон 3",o:"The Bad Batch",k:"anim",era:"empire",y:-18,yl:"18 ДБЯ",r:"2024-02-21",m:25,
 d:"Омега на базе Тантисс и финал истории отряда.",
 eps:`1|Confined
2|Paths Unknown
3|Shadows of Tantiss
4|A Different Approach
5|The Return
6|Infiltration
7|Extraction
8|Bad Territory
9|The Harbinger
10|Identity Crisis
11|Point of No Return
12|Juggernaut
13|Into the Breach
14|Flash Strike
15|The Cavalry Has Arrived`},
{id:"solo",t:"Хан Соло. Звёздные войны: Истории",o:"Solo: A Star Wars Story",k:"film",era:"empire",y:-13,yl:"13–10 ДБЯ",r:"2018-05-25",m:135,
 d:"Как Хан встретил Чуи, выиграл «Сокол» у Лэндо и прошёл Кесселя меньше чем за 12 парсеков."},
{id:"obi",t:"Оби-Ван Кеноби",o:"Obi-Wan Kenobi",k:"live",era:"empire",y:-9,yl:"9 ДБЯ",r:"2022-05-27",m:45,
 d:"Оби-Ван покидает Татуин, чтобы спасти маленькую Лею, и снова встречает Вейдера.",
 eps:`1|Part I
2|Part II
3|Part III
4|Part IV
5|Part V
6|Part VI`},
{id:"andor1",t:"Андор · Сезон 1",o:"Andor",k:"live",era:"reb",y:-5,yl:"5 ДБЯ",r:"2022-09-21",m:45,
 d:"Кассиан Андор — вор, которого Лютен Раэль втягивает в восстание. Ограбление на Алдхани, тюрьма на Наркине-5.",
 eps:`1|Kassa
2|That Would Be Me
3|Reckoning
4|Aldhani
5|The Axe Forgets
6|The Eye
7|Announcement
8|Narkina 5
9|Nobody's Listening!
10|One Way Out
11|Daughter of Ferrix
12|Rix Road`},
{id:"reb1",t:"Повстанцы · Сезон 1",o:"Star Wars Rebels",k:"anim",era:"reb",y:-5,yl:"5 ДБЯ",r:"2014-10-03",m:22,
 d:"Экипаж «Призрака» и юный Эзра Бриджер против Империи на Лотале.",
 tip:"4 короткометражки 2014 года — необязательная прелюдия, их можно посмотреть до пилота.",
 eps:`S|Короткометражки (4 шт.)|12
1-2|Spark of Rebellion|44
3|Droids in Distress
4|Fighter Flight
5|Rise of the Old Masters
6|Breaking Ranks
7|Out of Darkness
8|Empire Day
9|Gathering Forces
10|Path of the Jedi
11|Idiot's Array
12|Vision of Hope
13|Call to Action
14|Rebel Resolve
15|Fire Across the Galaxy`},
{id:"reb2",t:"Повстанцы · Сезон 2",o:"Star Wars Rebels",k:"anim",era:"reb",y:-4,yl:"4–3 ДБЯ",r:"2015-06-20",m:22,
 d:"Асока и Рекс возвращаются, инквизиторы охотятся, Вейдер появляется лично.",
 eps:`1-2|The Siege of Lothal|44
3|The Lost Commanders
4|Relics of the Old Republic
5|Always Two There Are
6|Brothers of the Broken Horn
7|Wings of the Master
8|Blood Sisters
9|Stealth Strike
10|The Future of the Force
11|Legacy
12|A Princess on Lothal
13|The Protector of Concord Dawn
14|Legends of the Lasat
15|The Call
16|Homecoming
17|The Honorable Ones
18|Shroud of Darkness
19|The Forgotten Droid
20|The Mystery of Chopper Base
21-22|Twilight of the Apprentice|44`},
{id:"reb3",t:"Повстанцы · Сезон 3",o:"Star Wars Rebels",k:"anim",era:"reb",y:-3,yl:"3–2 ДБЯ",r:"2016-09-24",m:22,
 d:"Гранд-адмирал Траун берётся за повстанцев. Мол и Оби-Ван встречаются на Татуине.",
 eps:`1-2|Steps Into Shadow|44
3|The Holocrons of Fate
4|The Antilles Extraction
5|Hera's Heroes
6|The Last Battle
7|Imperial Supercommandos
8|Iron Squadron
9|The Wynkahthu Job
10|An Inside Man
11|Visions and Voices
12-13|Ghosts of Geonosis|44
14|Warhead
15|Trials of the Darksaber
16|Legacy of Mandalore
17|Through Imperial Eyes
18|Secret Cargo
19|Double Agent Droid
20|Twin Suns
21-22|Zero Hour|44`},
{id:"andor2",t:"Андор · Сезон 2",o:"Andor",k:"live",era:"reb",y:-4,yl:"4–1 ДБЯ",r:"2025-04-22",m:45,
 d:"Четыре года до «Изгоя-один», по году на каждые три серии. Гормэн, Мон Мотма в сенате, путь к Скарифу.",
 tip:"Сезон перекрывает 3–4 сезоны «Повстанцев». Можно чередовать блоками по три серии.",
 eps:`1|One Year Later
2|Sagrona Teema
3|Harvest
4|Ever Been to Ghorman?
5|I Have Friends Everywhere
6|What a Festive Evening
7|Messenger
8|Who Are You?
9|Welcome to the Rebellion
10|Make It Stop
11|Who Else Knows?
12|Jedha, Kyber, Erso`},
{id:"reb4",t:"Повстанцы · Сезон 4",o:"Star Wars Rebels",k:"anim",era:"reb",y:-1,yl:"1 ДБЯ (+ эпилог)",r:"2017-10-16",m:22,
 d:"Освобождение Лотала. Тот самый сезон с Миром между мирами и лот-волками — родная планета этой темы.",
 tip:"Эпилог последней серии переносит действие за пределы «Возвращения джедая». Он напрямую ведёт к «Асоке».",
 eps:`1-2|Heroes of Mandalore|44
3-4|In the Name of the Rebellion|44
5|The Occupation
6|Flight of the Defender
7|Kindred
8|Crawler Commandeers
9|Rebel Assault
10|Jedi Night
11|DUME
12|Wolves and a Door
13|A World Between Worlds
14|A Fool's Hope
15-16|Family Reunion – and Farewell|44`},
{id:"rogue",t:"Изгой-один. Звёздные войны: Истории",o:"Rogue One",k:"film",era:"reb",y:0,yl:"0 ДБЯ",r:"2016-12-16",m:133,
 d:"Джин Эрсо и Кассиан крадут чертежи Звезды Смерти. Заканчивается за минуты до «Новой надежды»."},
{id:"ep4",t:"Эпизод IV. Новая надежда",o:"A New Hope",k:"film",era:"reb",y:0,yl:"0 ДБЯ/ПБЯ",r:"1977-05-25",m:121,
 d:"Люк, Лея, Хан, Оби-Ван и Битва при Явине, от которой ведётся отсчёт лет."},
{id:"ep5",t:"Эпизод V. Империя наносит ответный удар",o:"The Empire Strikes Back",k:"film",era:"reb",y:3,yl:"3 ПБЯ",r:"1980-05-21",m:124,
 d:"Хот, Дагоба, Беспин. «Я твой отец»."},
{id:"ep6",t:"Эпизод VI. Возвращение джедая",o:"Return of the Jedi",k:"film",era:"reb",y:4,yl:"4 ПБЯ",r:"1983-05-25",m:131,
 d:"Эндор, вторая Звезда Смерти и искупление Энакина Скайуокера."},
{id:"mando1",t:"Мандалорец · Сезон 1",o:"The Mandalorian",k:"live",era:"nr",y:9,yl:"9 ПБЯ",r:"2019-11-12",m:37,
 d:"Охотник за головами Дин Джарин находит Грогу и нарушает Кодекс гильдии.",
 eps:`1|Chapter 1: The Mandalorian
2|Chapter 2: The Child
3|Chapter 3: The Sin
4|Chapter 4: Sanctuary
5|Chapter 5: The Gunslinger
6|Chapter 6: The Prisoner
7|Chapter 7: The Reckoning
8|Chapter 8: Redemption`},
{id:"mando2",t:"Мандалорец · Сезон 2",o:"The Mandalorian",k:"live",era:"nr",y:9,yl:"9 ПБЯ",r:"2020-10-30",m:40,
 d:"Поиск джедаев для Грогу: Бо-Катан, Асока и финал, после которого Интернет кричал.",
 eps:`9|Chapter 9: The Marshal
10|Chapter 10: The Passenger
11|Chapter 11: The Heiress
12|Chapter 12: The Siege
13|Chapter 13: The Jedi
14|Chapter 14: The Tragedy
15|Chapter 15: The Believer
16|Chapter 16: The Rescue`},
{id:"boba",t:"Книга Бобы Фетта",o:"The Book of Boba Fett",k:"live",era:"nr",y:9,yl:"9 ПБЯ",r:"2021-12-29",m:45,
 d:"Боба Фетт берёт власть над преступным миром Мос-Эспы.",
 tip:"Главы 5 и 6 — фактически серии «Мандалорца». Без них третий сезон будет непонятен.",
 eps:`1|Chapter 1: Stranger in a Strange Land
2|Chapter 2: The Tribes of Tatooine
3|Chapter 3: The Streets of Mos Espa
4|Chapter 4: The Gathering Storm
5|Chapter 5: Return of the Mandalorian
6|Chapter 6: From the Desert Comes a Stranger
7|Chapter 7: In the Name of Honor`},
{id:"skel",t:"Skeleton Crew",o:"Star Wars: Skeleton Crew",k:"live",era:"nr",y:9,yl:"≈9 ПБЯ",r:"2024-12-02",m:37,
 d:"Четверо детей с тихой планеты теряются в Галактике пиратов, а помогает им загадочный Джод На Навуд.",
 eps:`1|This Could Be a Real Adventure
2|Way, Way Out Past the Barrier
3|Very Interesting, as an Astrogation Problem
4|Can't Say I Remember No At Attin
5|You Have a Lot to Learn About Pirates
6|Zero Friends Again
7|We're Gonna Be in So Much Trouble
8|The Real Good Guys`},
{id:"mando3",t:"Мандалорец · Сезон 3",o:"The Mandalorian",k:"live",era:"nr",y:9,yl:"9 ПБЯ",r:"2023-03-01",m:40,
 d:"Искупление Дина, руины Мандалора и объединение кланов.",
 eps:`17|Chapter 17: The Apostate
18|Chapter 18: The Mines of Mandalore
19|Chapter 19: The Convert
20|Chapter 20: The Foundling
21|Chapter 21: The Pirate
22|Chapter 22: Guns for Hire
23|Chapter 23: The Spies
24|Chapter 24: The Return`},
{id:"mandofilm",t:"Мандалорец и Грогу",o:"The Mandalorian & Grogu",k:"film",era:"nr",y:9,yl:"≈9 ПБЯ",r:"2026-05-22",m:130,
 d:"Дин Джарин и Грогу на службе Новой Республики. Первый фильм «Звёздных войн» после 2019 года."},
{id:"ahsoka1",t:"Асока · Сезон 1",o:"Ahsoka",k:"live",era:"nr",y:10,yl:"≈10 ПБЯ",r:"2023-08-22",m:45,
 d:"Асока, Сабин и Гера ищут Эзру, а остатки Империи хотят вернуть Трауна. Прямое продолжение «Повстанцев».",
 eps:`1|Part One: Master and Apprentice
2|Part Two: Toil and Trouble
3|Part Three: Time to Fly
4|Part Four: Fallen Jedi
5|Part Five: Shadow Warrior
6|Part Six: Far, Far Away
7|Part Seven: Dreams and Madness
8|Part Eight: The Jedi, the Witch, and the Warlord`},
{id:"ahsoka2",t:"Асока · Сезон 2",o:"Ahsoka",k:"live",era:"nr",y:10,yl:"≈10 ПБЯ",r:"2027-01-20",st:"soon",m:45,
 d:"Продолжение истории в Перидее и возвращение Трауна в известную Галактику.",
 tip:"Дата премьеры 20 января 2027 года официально подтверждена Lucasfilm в ноябре 2026-го."},
{id:"res1",t:"Сопротивление · Сезон 1",o:"Star Wars Resistance",k:"anim",era:"fo",y:34,yl:"34 ПБЯ",r:"2018-10-07",m:22,
 d:"Пилот Каз шпионит для Сопротивления на станции-заправке «Колосс» незадолго до «Пробуждения силы».",
 eps:`S|Короткометражки (12 шт.)|36
1-2|The Recruit|44
3|The Triple Dark
4|Fuel for the Fire
5|The High Tower
6|The Children from Tehar
7|Signal from Sector Six
8|Synara's Score
9|The Platform Classic
10|Secrets and Holograms
11|Station Theta Black
12|Bibo
13|Dangerous Business
14|The Doza Dilemma
15|The First Order Occupation
16|The New Trooper
17|The Core Problem
18|The Disappeared
19|Descent
20-21|No Escape|44`},
{id:"ep7",t:"Эпизод VII. Пробуждение силы",o:"The Force Awakens",k:"film",era:"fo",y:34,yl:"34 ПБЯ",r:"2015-12-18",m:138,
 d:"Рей, Финн, По и Кайло Рен. Люк Скайуокер пропал."},
{id:"res2",t:"Сопротивление · Сезон 2",o:"Star Wars Resistance",k:"anim",era:"fo",y:34,yl:"34 ПБЯ",r:"2019-10-06",m:22,
 d:"«Колосс» в бегах от Первого Ордена. Действие между VII и VIII эпизодами и немного после.",
 eps:`1|Into the Unknown
2|A Quick Salvage Run
3|Live Fire
4|Hunt On Celsor 3
5|The Engineer
6|From Beneath
7|The Relic Raiders
8|Rendezvous Point
9|The Voxx Vortex 5000
10|Kaz's Curse
11|Station to Station
12|The Missing Agent
13|Breakout
14|The Mutiny
15|The New World
16|No Place Safe
17|Rebuilding the Resistance
18-19|The Escape|44`},
{id:"ep8",t:"Эпизод VIII. Последние джедаи",o:"The Last Jedi",k:"film",era:"fo",y:34,yl:"34 ПБЯ",r:"2017-12-15",m:152,
 d:"Рей находит Люка на Ак-То. Сопротивление на грани исчезновения."},
{id:"ep9",t:"Эпизод IX. Скайуокер. Восход",o:"The Rise of Skywalker",k:"film",era:"fo",y:35,yl:"35 ПБЯ",r:"2019-12-20",m:142,
 d:"Последняя битва Сопротивления и финал саги Скайуокеров."},
{id:"starfighter",t:"Звёздный истребитель",o:"Star Wars: Starfighter",k:"film",era:"next",y:40,yl:"≈40 ПБЯ",r:"2027-05-28",st:"soon",m:0,
 d:"Новая самостоятельная история через несколько лет после «Восхода Скайуокера». Режиссёр — Шон Леви, в главной роли Райан Гослинг."},
{id:"maul2",t:"Мол: Повелитель теней · Сезон 2",o:"Maul — Shadow Lord",k:"anim",era:"empire",y:-18,yl:"≈18 ДБЯ",r:"2027-12-31",st:"tba",m:25,
 d:"Второй сезон подтверждён. Ожидается в 2027 году, точной даты пока нет."}
];

const INTRO=["ep4","ep5","ep6","ep1","ep2","ep3","rogue","andor1","andor2","mando1","mando2","boba","mando3","ahsoka1","ep7","ep8","ep9","mandofilm","ahsoka2","starfighter"];

