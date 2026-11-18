// Пиксельные версии фоновых кораблей: подменяют содержимое <symbol> в index.html.
(function(){
 const px=window.PX, grid=window.PXGRID;
 const put=(id,vb,svg)=>{const s=document.getElementById(id);if(!s)return;s.setAttribute("viewBox",vb);s.innerHTML=svg;};

 /* TIE-истребитель: спереди, крылья-шестигранники, шар-кабина */
 const tie=["f.............f","ff...........ff","fwf.........fwf","fwf..hhbbb..fwf","fwf.hbbbbbb.fwf","fwfpbbkkkbbpfwf","fwfpbkkskkbpfwf","fwfpbbkkkbbpfwf","fwf.bbbbbbb.fwf","fwf..bbbbb..fwf","fwf.........fwf","ff...........ff","f.............f"];
 put("tie","0 0 120 104",px(tie,{f:"#9aa1a9",w:"#2c3138",p:"#7d858e",b:"#8a9199",h:"#c9ced4",k:"#12161c",s:"#6f7781"},8));

 /* X-wing: сверху, нос вправо, крылья буквой X, красные полосы */
 const xw=[
  "..........cccccccccccccccccdd.....",
  "..........wwwr....................",
  "...........wwwr...................",
  "............wwww..................",
  ".............wwww.................",
  "..............wwww................",
  "...............wwww...............",
  ".eggggggggg.....www...............",
  ".egggggggggs.....ww...............",
  "..sssssssssss.....................",
  "..wwwwwwwwwwwwwwwkkkkwwwwrrwwgg...",
  ".gwwwwwawwwwwwwwwwkkkkkwwwrrwwwgg..",
  ".gwwwwwwwwwwwwwwwwkkkkkwwwrrwwwgg..",
  "..wwwwwwwwwwwwwwwkkkkwwwwrrwwgg...",
  "..sssssssssss.....................",
  ".egggggggggs.....ww...............",
  ".eggggggggg.....www...............",
  "...............wwww...............",
  "..............wwww................",
  ".............wwww.................",
  "............wwww..................",
  "...........wwwr...................",
  "..........wwwr....................",
  "..........cccccccccccccccccdd....."];
 put("xwing","0 0 170 120",`<g opacity=".55"><rect x="0" y="35" width="10" height="10" fill="#ff5f7e"/><rect x="0" y="75" width="10" height="10" fill="#ff5f7e"/></g>`+px(xw,{w:"#f1efe9",g:"#b9b4aa",r:"#c8392e",k:"#26323f",e:"#ff5f7e",c:"#a39e95",d:"#6e6a63",a:"#2f6fd6",s:"#8c877e"},5));

 /* «Тысячелетний сокол»: сверху, мандибулы влево */
 const fal=grid(30,24,(x,y)=>{
  const cx=17,cy=11.5,dx=x-cx,dy=y-cy,r=Math.hypot(dx,dy);
  if(x>=27&&r<=12.2&&r>10.6&&Math.abs(dy)<8)return "e";
  if(x<9&&((y>=3&&y<=8)||(y>=15&&y<=20)))return (y===3||y===20)&&x<2?".":"g";
  if(x<9&&y>8&&y<15)return x===8?"k":".";
  if(r<=11){ if(r<=2)return "t"; if(r<=3.6)return "d"; if((x===24||x===25)&&(y===5||y===6))return "w";
   if(Math.abs(dx)<.6||Math.abs(dy)<.6)return "s"; return "g";}
  if(y>=19&&y<=22&&x>=3&&x<=8)return (x>=3&&x<=5&&y>=20)?"c":"g";
  return ".";});
 put("falcon","0 0 150 120",px(fal,{g:"#d3d0c8",s:"#a9a59c",d:"#8f8b83",k:"#3b3f45",e:"#7fd8ff",w:"#ece9e2",c:"#2b3a4a",t:"#7c7870"},5));

 /* Звёздный разрушитель: сбоку, клин носом влево */
 const sd=grid(70,22,(x,y)=>{
  if(x>=66&&y>=9&&y<=17)return (x===66&&y>=11&&y<=15)?"w":"e";
  if(x>=50&&x<=60&&y>=3&&y<=6)return y===4?"d":"s";
  if((x===52||x===53||x===58||x===59)&&y>=1&&y<=2)return "s";
  if(x>=44&&x<=62&&y===7)return "h";
  const top=x<50?16-x*10/50:6; if(y<top||y>19||x>65)return null;
  if(y<top+1.4)return "h"; if(y>=17)return "d"; if((y===11&&x%6<4&&x>10)||(y===14&&x%7<4&&x>20))return "b"; return "a";});
 put("destroyer","0 0 420 132",px(sd,{h:"#c3c9cf",a:"#8d959e",d:"#4e565f",b:"#3e454d",s:"#b6bdc4",e:"#8fd6ff",w:"#e6f8ff"},6));

 /* Звезда Смерти */
 const ds=grid(16,16,(x,y)=>{
  const dx=x-7.5,dy=y-7.5,r=Math.hypot(dx,dy); if(r>7.7)return null;
  if(Math.hypot(x-5,y-4.5)<=2.1)return Math.hypot(x-5,y-4.5)<=.8?"k":"m";
  if(y===8)return "k"; const l=(-dx-dy)/15; return l>.25?"h":l>-.2?"a":"d";});
 put("deathstar","0 0 96 96",px(ds,{h:"#b8bec5",a:"#8a9199",d:"#4c535b",m:"#5f666e",k:"#2a2f35"},6));
})();
