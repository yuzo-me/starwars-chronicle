// Лента «Голонет». Новые записи добавляются в НАЧАЛО массива.
// d: дата публикации новости (ГГГГ-ММ-ДД) · tag: Премьера | Анонс | Дата | Трейлер | Кастинг | Продление | Событие | Слух
// t: заголовок (своими словами) · s: 1–2 предложения пересказа своими словами, без цитат
// src: ссылка на первоисточник · srcN: имя сайта · rel: id тайтлов из data.js, к которым относится новость (можно пусто)
window.NEWS = [
  {d:"2026-11-13",tag:"Событие",t:"Lucasfilm объявила годовое празднование 50-летия «Звёздных войн»",
   s:"В 2027 году сага отмечает полвека. Студия обещает серию событий по всему миру на протяжении всего года: показы, выставки, коллекционные товары и спецпроекты на Disney+.",
   src:"https://press.disney.co.uk/news/lucasfilm-and-disney-announce-a-global-year-long-celebration-of-the-50th-anniversary-of-star-wars",srcN:"press.disney.co.uk",rel:[]},
  {d:"2026-11-13",tag:"Событие",t:"«Новая надежда» вернётся в кинотеатры, в том числе в IMAX 70 мм",
   s:"Оригинальный фильм 1977 года отреставрирован и выйдет в прокат в нескольких форматах. Премьера переиздания запланирована на февраль 2027 года.",
   src:"https://deadline.com/2026/11/lucasfilm-star-wars-50th-anniversary-rerelease-imax-1237221738/",srcN:"deadline.com",rel:["ep4"]},
  {d:"2026-11-13",tag:"Дата",t:"Второй сезон «Асоки» стартует 20 января 2027 года",
   s:"Lucasfilm официально подтвердила дату премьеры на Disney+. Сериал продолжит историю после финала первого сезона в Перидее.",
   src:"https://press.disney.co.uk/news/lucasfilm-and-disney-announce-a-global-year-long-celebration-of-the-50th-anniversary-of-star-wars",srcN:"press.disney.co.uk",rel:["ahsoka2","ahsoka1"]},
  {d:"2026-11-13",tag:"Анонс",t:"Документальный фильм «The Hero Awakens» выйдет 4 мая 2027 года",
   s:"Документалку о создании саги снимают Lucasfilm вместе с Kennedy/Marshall. Премьера на Disney+ приурочена к Дню «Звёздных войн».",
   src:"https://poppednews.com/2026/11/15/star-wars-50th-anniversary-2027-events-documentary-cinema/",srcN:"poppednews.com",rel:[]},
  {d:"2026-11-13",tag:"Дата",t:"«Звёздный истребитель» подтверждён на 28 мая 2027 года",
   s:"Фильм Шона Леви с Райаном Гослингом остаётся в графике студии и выйдет в кинотеатрах по всему миру в конце мая.",
   src:"https://en.wikipedia.org/wiki/Star_Wars:_Starfighter",srcN:"wikipedia.org",rel:["starfighter"]},
  {d:"2026-08-17",tag:"Продление",t:"Второй сезон «Мол: Повелитель теней» выйдет в 2027 году",
   s:"Сценарист Мэтт Мишновец подтвердил, что продолжение истории Мола выйдет в 2027 году. Точной даты пока нет.",
   src:"https://www.gamesradar.com/au/upcoming-star-wars-movies",srcN:"gamesradar.com",rel:["maul2","maul"]},
  {d:"2026-04-02",tag:"Продление",t:"«Мол: Повелитель теней» продлили ещё до премьеры",
   s:"Lucasfilm Animation объявила о втором сезоне за несколько дней до выхода первых серий. Дэйв Филони пообещал, что история Мола продолжится.",
   src:"https://www.starwars.com/news/star-wars-maul-shadow-lord-season-2",srcN:"starwars.com",rel:["maul2"]}
];
