// Общий пиксельный рендер: строки спрайта -> SVG из прямоугольников.
// Каждый символ строки — пиксель цвета из палитры, "." (или символ без цвета) — пусто.
// Соседние пиксели одного цвета в строке склеиваются в один прямоугольник.
window.PX = function(rows, pal, s, cls){
 cls = cls || {}; let o = "";
 rows.forEach((r, y) => { let x = 0;
  while (x < r.length) { const ch = r[x]; if (!pal[ch]) { x++; continue; } let w = 1; while (r[x+w] === ch) w++;
   o += `<rect x="${+(x*s).toFixed(2)}" y="${+(y*s).toFixed(2)}" width="${+(w*s+.25).toFixed(2)}" height="${+(s+.25).toFixed(2)}" fill="${pal[ch]}"${cls[ch]?` class="${cls[ch]}"`:""}/>`;
   x += w; } });
 return `<g shape-rendering="crispEdges">${o}</g>`;
};
// Сетка пикселей из функции f(x,y) -> символ (для кругов, клиньев и т.п.)
window.PXGRID = function(w, h, f){ const rows=[]; for(let y=0;y<h;y++){ let r=""; for(let x=0;x<w;x++) r+=f(x,y)||"."; rows.push(r);} return rows; };
