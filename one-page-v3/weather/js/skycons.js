var Skycons;(function(q){"use strict";var z,cancelInterval;(function(){var d=q.requestAnimationFrame||q.webkitRequestAnimationFrame||q.mozRequestAnimationFrame||q.oRequestAnimationFrame||q.msRequestAnimationFrame,caf=q.cancelAnimationFrame||q.webkitCancelAnimationFrame||q.mozCancelAnimationFrame||q.oCancelAnimationFrame||q.msCancelAnimationFrame;if(d&&caf){z=function(a,b){var c={value:null};function loop(){c.value=d(loop);a()}loop();return c};cancelInterval=function(a){caf(a.value)}}else{z=setInterval;cancelInterval=clearInterval}}());var A=500,STROKE=0.08,TWO_PI=2.0*Math.PI,TWO_OVER_SQRT_2=2.0/Math.sqrt(2);function circle(a,x,y,r){a.beginPath();a.arc(x,y,r,0,TWO_PI,false);a.fill()}function line(a,b,c,d,e){a.beginPath();a.moveTo(b,c);a.lineTo(d,e);a.stroke()}function puff(a,t,b,d,e,f,g,h){var c=Math.cos(t*TWO_PI),s=Math.sin(t*TWO_PI);h-=g;circle(a,b-s*e,d+c*f+h*0.5,g+(1-c*0.5)*h)}function puffs(a,t,b,c,d,e,f,g){var i;for(i=5;i--;)puff(a,t+i/5,b,c,d,e,f,g)}function cloud(e,t,f,g,h,s,i){t/=30000;var a=h*0.21,b=h*0.12,c=h*0.24,d=h*0.28;e.fillStyle=i;puffs(e,t,f,g,a,b,c,d);e.globalCompositeOperation='destination-out';puffs(e,t,f,g,a,b,c-s,d-s);e.globalCompositeOperation='source-over'}function sun(d,t,e,f,g,s,h){t/=120000;var a=g*0.25-s*0.5,b=g*0.32+s*0.5,c=g*0.50-s*0.5,i,p,cos,sin;d.strokeStyle=h;d.lineWidth=s;d.lineCap="round";d.beginPath();d.arc(e,f,a,0,TWO_PI,false);d.stroke();for(i=8;i--;){p=(t+i/8)*TWO_PI;cos=Math.cos(p);sin=Math.sin(p);line(d,e+cos*b,f+sin*b,e+cos*c,f+sin*c)}}function moon(d,t,e,f,g,s,h){t/=15000;var a=g*0.29-s*0.5,b=g*0.05,c=Math.cos(t*TWO_PI),p=c*TWO_PI/-16;d.strokeStyle=h;d.lineWidth=s;d.lineCap="round";e+=c*b;d.beginPath();d.arc(e,f,a,p+TWO_PI/8,p+TWO_PI*7/8,false);d.arc(e+Math.cos(p)*a*TWO_OVER_SQRT_2,f+Math.sin(p)*a*TWO_OVER_SQRT_2,a,p+TWO_PI*5/8,p+TWO_PI*3/8,true);d.closePath();d.stroke()}function rain(d,t,e,f,g,s,h){t/=1350;var a=g*0.16,b=TWO_PI*11/12,c=TWO_PI*7/12,i,p,x,y;d.fillStyle=h;for(i=4;i--;){p=(t+i/4)%1;x=e+((i-1.5)/1.5)*(i===1||i===2?-1:1)*a;y=f+p*p*g;d.beginPath();d.moveTo(x,y-s*1.5);d.arc(x,y,s*0.75,b,c,false);d.fill()}}function sleet(d,t,e,f,g,s,h){t/=750;var a=g*0.1875,b=TWO_PI*11/12,c=TWO_PI*7/12,i,p,x,y;d.strokeStyle=h;d.lineWidth=s*0.5;d.lineCap="round";for(i=4;i--;){p=(t+i/4)%1;x=Math.floor(e+((i-1.5)/1.5)*(i===1||i===2?-1:1)*a)+0.5;y=f+p*g;line(d,x,y-s*1.5,x,y+s*1.5)}}function snow(c,t,d,e,f,s,g){t/=3000;var a=f*0.16,b=s*0.75,u=t*TWO_PI*0.7,ux=Math.cos(u)*b,uy=Math.sin(u)*b,v=u+TWO_PI/3,vx=Math.cos(v)*b,vy=Math.sin(v)*b,w=u+TWO_PI*2/3,wx=Math.cos(w)*b,wy=Math.sin(w)*b,i,p,x,y;c.strokeStyle=g;c.lineWidth=s*0.5;c.lineCap="round";for(i=4;i--;){p=(t+i/4)%1;x=d+Math.sin((p+i/4)*TWO_PI)*a;y=e+p*f;line(c,x-ux,y-uy,x+ux,y+uy);line(c,x-vx,y-vy,x+vx,y+vy);line(c,x-wx,y-wy,x+wx,y+wy)}}function fogbank(e,t,f,g,h,s,i){t/=30000;var a=h*0.21,b=h*0.06,c=h*0.21,d=h*0.28;e.fillStyle=i;puffs(e,t,f,g,a,b,c,d);e.globalCompositeOperation='destination-out';puffs(e,t,f,g,a,b,c-s,d-s);e.globalCompositeOperation='source-over'}var B=[[-0.7500,-0.1800,-0.7219,-0.1527,-0.6971,-0.1225,-0.6739,-0.0910,-0.6516,-0.0588,-0.6298,-0.0262,-0.6083,0.0065,-0.5868,0.0396,-0.5643,0.0731,-0.5372,0.1041,-0.5033,0.1259,-0.4662,0.1406,-0.4275,0.1493,-0.3881,0.1530,-0.3487,0.1526,-0.3095,0.1488,-0.2708,0.1421,-0.2319,0.1342,-0.1943,0.1217,-0.1600,0.1025,-0.1290,0.0785,-0.1012,0.0509,-0.0764,0.0206,-0.0547,-0.0120,-0.0378,-0.0472,-0.0324,-0.0857,-0.0389,-0.1241,-0.0546,-0.1599,-0.0814,-0.1876,-0.1193,-0.1964,-0.1582,-0.1935,-0.1931,-0.1769,-0.2157,-0.1453,-0.2290,-0.1085,-0.2327,-0.0697,-0.2240,-0.0317,-0.2064,0.0033,-0.1853,0.0362,-0.1613,0.0672,-0.1350,0.0961,-0.1051,0.1213,-0.0706,0.1397,-0.0332,0.1512,0.0053,0.1580,0.0442,0.1624,0.0833,0.1636,0.1224,0.1615,0.1613,0.1565,0.1999,0.1500,0.2378,0.1402,0.2749,0.1279,0.3118,0.1147,0.3487,0.1015,0.3858,0.0892,0.4236,0.0787,0.4621,0.0715,0.5012,0.0702,0.5398,0.0766,0.5768,0.0890,0.6123,0.1055,0.6466,0.1244,0.6805,0.1440,0.7147,0.1630,0.7500,0.1800],[-0.7500,0.0000,-0.7033,0.0195,-0.6569,0.0399,-0.6104,0.0600,-0.5634,0.0789,-0.5155,0.0954,-0.4667,0.1089,-0.4174,0.1206,-0.3676,0.1299,-0.3174,0.1365,-0.2669,0.1398,-0.2162,0.1391,-0.1658,0.1347,-0.1157,0.1271,-0.0661,0.1169,-0.0170,0.1046,0.0316,0.0903,0.0791,0.0728,0.1259,0.0534,0.1723,0.0331,0.2188,0.0129,0.2656,-0.0064,0.3122,-0.0263,0.3586,-0.0466,0.4052,-0.0665,0.4525,-0.0847,0.5007,-0.1002,0.5497,-0.1130,0.5991,-0.1240,0.6491,-0.1325,0.6994,-0.1380,0.7500,-0.1400]],WIND_OFFSETS=[{start:0.36,end:0.11},{start:0.56,end:0.16}];function leaf(g,t,x,y,h,s,i){var a=h/8,b=a/3,c=2*b,d=(t%1)*TWO_PI,e=Math.cos(d),f=Math.sin(d);g.fillStyle=i;g.strokeStyle=i;g.lineWidth=s;g.lineCap="round";g.beginPath();g.arc(x,y,a,d,d+Math.PI,false);g.arc(x-b*e,y-b*f,c,d+Math.PI,d,false);g.arc(x+c*e,y+c*f,b,d+Math.PI,d,true);g.globalCompositeOperation='destination-out';g.fill();g.globalCompositeOperation='source-over';g.stroke()}function swoosh(g,t,h,j,k,s,l,m,n){t/=2500;var o=B[l],a=(t+l-WIND_OFFSETS[l].start)%m,c=(t+l-WIND_OFFSETS[l].end)%m,e=(t+l)%m,b,d,f,i;g.strokeStyle=n;g.lineWidth=s;g.lineCap="round";if(a<1){g.beginPath();a*=o.length/2-1;b=Math.floor(a);a-=b;b*=2;b+=2;g.moveTo(h+(o[b-2]*(1-a)+o[b]*a)*k,j+(o[b-1]*(1-a)+o[b+1]*a)*k);if(c<1){c*=o.length/2-1;d=Math.floor(c);c-=d;d*=2;d+=2;for(i=b;i!==d;i+=2)g.lineTo(h+o[i]*k,j+o[i+1]*k);g.lineTo(h+(o[d-2]*(1-c)+o[d]*c)*k,j+(o[d-1]*(1-c)+o[d+1]*c)*k)}else for(i=b;i!==o.length;i+=2)g.lineTo(h+o[i]*k,j+o[i+1]*k);g.stroke()}else if(c<1){g.beginPath();c*=o.length/2-1;d=Math.floor(c);c-=d;d*=2;d+=2;g.moveTo(h+o[0]*k,j+o[1]*k);for(i=2;i!==d;i+=2)g.lineTo(h+o[i]*k,j+o[i+1]*k);g.lineTo(h+(o[d-2]*(1-c)+o[d]*c)*k,j+(o[d-1]*(1-c)+o[d+1]*c)*k);g.stroke()}if(e<1){e*=o.length/2-1;f=Math.floor(e);e-=f;f*=2;f+=2;leaf(g,t,h+(o[f-2]*(1-e)+o[f]*e)*k,j+(o[f-1]*(1-e)+o[f+1]*e)*k,k,s,n)}}Skycons=function(a){this.list=[];this.interval=null;this.color=a&&a.color?a.color:"black"};Skycons.CLEAR_DAY=function(a,t,b){var w=a.canvas.width,h=a.canvas.height,s=Math.min(w,h);sun(a,t,w*0.5,h*0.5,s,s*STROKE,b)};Skycons.CLEAR_NIGHT=function(a,t,b){var w=a.canvas.width,h=a.canvas.height,s=Math.min(w,h);moon(a,t,w*0.5,h*0.5,s,s*STROKE,b)};Skycons.PARTLY_CLOUDY_DAY=function(a,t,b){var w=a.canvas.width,h=a.canvas.height,s=Math.min(w,h);sun(a,t,w*0.625,h*0.375,s*0.75,s*STROKE,b);cloud(a,t,w*0.375,h*0.625,s*0.75,s*STROKE,b)};Skycons.PARTLY_CLOUDY_NIGHT=function(a,t,b){var w=a.canvas.width,h=a.canvas.height,s=Math.min(w,h);moon(a,t,w*0.667,h*0.375,s*0.75,s*STROKE,b);cloud(a,t,w*0.375,h*0.625,s*0.75,s*STROKE,b)};Skycons.CLOUDY=function(a,t,b){var w=a.canvas.width,h=a.canvas.height,s=Math.min(w,h);cloud(a,t,w*0.5,h*0.5,s,s*STROKE,b)};Skycons.RAIN=function(a,t,b){var w=a.canvas.width,h=a.canvas.height,s=Math.min(w,h);rain(a,t,w*0.5,h*0.37,s*0.9,s*STROKE,b);cloud(a,t,w*0.5,h*0.37,s*0.9,s*STROKE,b)};Skycons.SLEET=function(a,t,b){var w=a.canvas.width,h=a.canvas.height,s=Math.min(w,h);sleet(a,t,w*0.5,h*0.37,s*0.9,s*STROKE,b);cloud(a,t,w*0.5,h*0.37,s*0.9,s*STROKE,b)};Skycons.SNOW=function(a,t,b){var w=a.canvas.width,h=a.canvas.height,s=Math.min(w,h);snow(a,t,w*0.5,h*0.37,s*0.9,s*STROKE,b);cloud(a,t,w*0.5,h*0.37,s*0.9,s*STROKE,b)};Skycons.WIND=function(a,t,b){var w=a.canvas.width,h=a.canvas.height,s=Math.min(w,h);swoosh(a,t,w*0.5,h*0.5,s,s*STROKE,0,2,b);swoosh(a,t,w*0.5,h*0.5,s,s*STROKE,1,2,b)};Skycons.FOG=function(g,t,i){var w=g.canvas.width,h=g.canvas.height,s=Math.min(w,h),k=s*STROKE;fogbank(g,t,w*0.5,h*0.32,s*0.75,k,i);t/=5000;var a=Math.cos((t)*TWO_PI)*s*0.02,b=Math.cos((t+0.25)*TWO_PI)*s*0.02,c=Math.cos((t+0.50)*TWO_PI)*s*0.02,d=Math.cos((t+0.75)*TWO_PI)*s*0.02,n=h*0.936,e=Math.floor(n-k*0.5)+0.5,f=Math.floor(n-k*2.5)+0.5;g.strokeStyle=i;g.lineWidth=k;g.lineCap="round";line(g,a+w*0.2+k*0.5,e,b+w*0.8-k*0.5,e);line(g,c+w*0.2+k*0.5,f,d+w*0.8-k*0.5,f)};Skycons.prototype={add:function(a,b){var c;if(typeof a==="string")a=document.getElementById(a);c={element:a,context:a.getContext("2d"),drawing:b};this.list.push(c);this.draw(c,A)},set:function(a,b){var i;if(typeof a==="string")a=document.getElementById(a);for(i=this.list.length;i--;)if(this.list[i].element===a){this.list[i].drawing=b;this.draw(this.list[i],A);return}this.add(a,b)},remove:function(a){var i;if(typeof a==="string")a=document.getElementById(a);for(i=this.list.length;i--;)if(this.list[i].element===a){this.list.splice(i,1);return}},draw:function(a,b){var c=a.context.canvas;a.context.globalCompositeOperation='destination-out';a.context.fillRect(0,0,c.width,c.height);a.context.globalCompositeOperation='source-over';a.drawing(a.context,b,this.color)},play:function(){var b=this;this.pause();this.interval=z(function(){var a=Date.now(),i;for(i=b.list.length;i--;)b.draw(b.list[i],a)},1000/60)},pause:function(){var i;if(this.interval){cancelInterval(this.interval);this.interval=null}}}}(this));