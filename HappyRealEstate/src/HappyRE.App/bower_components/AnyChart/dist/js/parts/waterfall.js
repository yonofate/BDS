if(!_.waterfall){_.waterfall=1;(function($){var y5=function(){$.U.call(this);$.R(this.ua,[["stroke",0,8192]])},z5=function(a){$.Y.call(this);this.Fa("waterfall.arrow");this.jb=a;$.R(this.ua,[["from",0,4],["to",0,4]]);this.b=new y5;this.b.Fa("waterfall.arrow.connector");$.K(this.b,this.Ica,this);this.j=!0},A5=function(a,b){$.n(b)&&(a.D=b);return a.D},B5=function(a,b){return $.n(b)?(a.j=b,a):a.j},C5=function(a){a.i||(a.i=a.O().path());return a.i},D5=function(a){$.n(a.f)||(a.f=a.O().path());return a.f},E5=function(a){$.Y.call(this);this.sa=a;
this.b=[];this.K=null;this.f=[];$.tl(this)},F5=function(a){return a.ya()===a.sa.bb().sf()},G5=function(a,b){return a.sa.Xa().Nv(b)},H5=function(a){return a.g("from")},I5=function(a){return a.g("to")},K5=function(a,b){var c=H5(b);c=G5(a,c);return 0<=J5(a.sa,c,"diff")},L5=function(a,b){var c=b.Rf().g("stroke");c=$.ap(c)/2+2;var d=a.Bp.x>a.cq.x;c=new $.I(d?a.cq.x:a.Bp.x,a.mr-c,d?a.Bp.x-a.cq.x:a.cq.x-a.Bp.x,2*c);d=b.mk().rb();var e=b.label(),f=e.g("position");e=e.g("anchor");f=$.Ox(c.clone(),d.height,
f,e);$.qb(c,new $.I(f.left,f.top,d.width,d.height));return c},cpa=function(a,b){for(var c=a.sa,d=c.nj(),e=[],f=0;f<d;f++){var h=c.Ue(f).labels();e.push(h.Vd(b))}c.xE().enabled()&&e.push(c.xE().Vd(b));c=(0,$.Ye)(e,function(a){return a});return(0,$.Wa)(c,function(a){a=this.lk(a);return this.ya()?new $.I(a.Ub(),a.sb(),a.pd(),a.yd()):a},a)},dpa=function(a,b){var c=M5(a.sa,b);0>c.pd()&&(c=new $.I(c.sb(),c.Ub()+c.pd(),c.yd(),-c.pd()));var d=cpa(a,b);(0,$.Ne)(d,function(a){$.qb(c,a)});return c},fpa=function(a){a.i=
[];for(var b=0;b<epa(a.sa);b++)a.i.push(dpa(a,b))},gpa=function(a){$.n(a.i)||fpa(a);return a.i},hpa=function(a,b,c){return null===$.ya(b,function(a){return H5(c)===H5(a)&&I5(c)===I5(a)},a)},ipa=function(a){var b=[];(0,$.Ne)(a.b,function(a){var c=H5(a);var e=I5(a),f=G5(this,c),h=G5(this,e);c=!(0,window.isNaN)(f)&&!(0,window.isNaN)(h)&&c!==e;e=hpa(this,b,a);B5(a,c&&e);b.push(a)},a)},jpa=function(a,b,c){var d=K5(a,b),e=F5(a),f=A5(b),h={cq:f.cq,Bp:f.Bp,mr:f.mr,SU:f.SU},k=L5(h,b);$.Pa(c,function(a,b){return d===
e?b.Sa()-a.Sa():a.Ub()-b.Ub()});(0,$.Ne)(c,function(a){var c=k;if(a=a.lo(c)?d===F5(this)?a.Ub()-c.Sa():a.Sa()-c.Ub():0)h.mr+=a,k=L5(h,b)},a);A5(b,h)},kpa=function(a,b,c){var d=$.Ha(gpa(a));c=(0,$.Wa)(c,function(a){return L5(A5(a),a)},a);d=$.Ga(c,d);jpa(a,b,d)},lpa=function(a,b,c){var d=H5(b);b=I5(b);d=G5(a,d);a=G5(a,b);return Math.min(d,a,c)===c},mpa=function(a,b){return(0,$.pa)(function(a,d){var c=lpa(this,a,b),f=lpa(this,d,b),h=K5(this,a);return c!==f?c===(this.ya()!==this.sa.Xa().sf())?-1:1:h===
F5(this)?A5(a).mr-A5(d).mr:A5(d).mr-A5(a).mr},a)},npa=function(a,b,c){var d=M5(a.sa,c),e=d.yd()/(b.length+1);$.Pa(b,mpa(a,c));(0,$.Ne)(b,function(a,b){var f=H5(a);f=G5(this,f);var h=d.sb()+(b+1)*e;f===c?A5(a).cq.x=h:A5(a).Bp.x=h},a)},opa=function(a){(0,$.Ne)(a.f,function(a,c){if(a&&1<a.length){var b=(0,$.Ye)(a,function(a){return K5(this,a)},this),e=(0,$.Ye)(a,function(a){return!K5(this,a)},this);npa(this,b,c);npa(this,e,c)}},a)},ppa=function(a){fpa(a);a.f.length=0;var b=[];(0,$.Ne)(a.b,function(a){if(a.enabled()&&
B5(a)){var c=H5(a),e=I5(a);c=G5(this,c);var f=G5(this,e),h=gpa(this);e=h[c];f=h[f];c=0<=J5(this.sa,c,"diff");h=F5(this);e=new $.on(e.sb()+e.yd()/2,c===h?e.Ub():e.Sa());f=new $.on(f.sb()+f.yd()/2,c===h?f.Ub():f.Sa());h=c&&F5(this)?Math.min(e.y,f.y)-15:Math.max(e.y,f.y)+15;A5(a,{cq:e,Bp:f,mr:h,SU:c});kpa(this,a,b);e=H5(a);c=I5(a);e=G5(this,e);c=G5(this,c);this.f[e]=this.f[e]||[];this.f[c]=this.f[c]||[];h=H5(a);f=I5(a);h=G5(this,h);G5(this,f)>h?(this.f[e].push(a),this.f[c].unshift(a)):(this.f[e].unshift(a),
this.f[c].push(a));b.push(a)}},a);opa(a)},rpa=function(a){a.Cf||(a.Rk=$.kg().No(),a.Cf=$.tk(a.Rk),a.Cf.zIndex(42));var b=a.Cf;var c=qpa(a),d=a.nl();a.O().gc(d);d.gc(c).gc(b);d.clip(a.sa.Uf())},spa=function(a,b){var c=a.b[b];return $.n(c)?($.dr(c,a.d_,a),$.Ca(a.b,b,1),$.od(c),!0):!1},tpa=function(a,b){var c=new z5(a);$.n(b)&&(c.N(b),$.K(c,a.d_,a));a.b.push(c);$.hr(a,"waterfall",["appearance","recalculation"],1);return c},qpa=function(a){a.K||(a.K=$.nk(),a.K.zIndex(N5));return a.K},O5=function(){$.U.call(this);
$.R(this.ua,[["stroke",0,8192]])},P5=function(a,b,c,d,e){$.kB.call(this,a,b,c,d,e)},Q5=function(){$.HB.call(this);this.Fa("waterfall");this.qe="waterfall";this.Md=[];this.jf=[];this.oe=[];$.R(this.ua,[["dataMode",360448,1]])},R5=function(a,b,c){var d=a.ya();a=a.Xa().sf();return b+(d^a?-c:c)},S5=function(a,b){var c=a.bb().transform(b),d=a.fc;if(a.ya()){var e=d.left;d=d.width}else e=d.Sa(),d=-d.height;return e+c*d},upa=function(a,b){for(var c=a.length;c--;){var d=a[c].data;if(d.length&&!d[b].o.missing)return c}return window.NaN},
vpa=function(a){(0,$.Ne)(a.oe,function(a){this.jf.push(a)},a);a.oe.length=0},T5=function(a){var b=a.jf.pop()||new $.xw;a.oe.push(b);return b},wpa=function(a,b,c){var d=a.Md[b];b=Math.min(d.hi,d.f6);var e=Math.min(d.Me,d.h6),f=Math.max(d.f6,d.hi);d=Math.max(d.h6,d.Me);a=a.ya()?$.kn(e,b,d-e,f-b):$.kn(b,e,f-b,d-e);return{value:$.Co(a,c)}},xpa=function(a,b,c,d){"auto"===b&&("auto"===c?(a=a.ya()?["left-center","right-center"]:["center-bottom","center-top"],b=0<=d?a[0]:a[1]):b="center"===c?"center":$.Ho(c,
180));return b},ypa=function(a,b,c){return"auto"===b?(a=a.ya()?["right-center","left-center"]:["center-top","center-bottom"],0<=c?a[0]:a[1]):b},zpa=function(a,b,c){var d=T5(a);d.Ci([a]);b=J5(a,b,"diff");var e=J5(a,c,"diff");c=J5(a,c,"absolute");a=b/Math.abs(e);c=b/Math.abs(c);e=(0,window.isFinite)(a);var f=(0,window.isFinite)(c);return $.gv(d,{value:{value:b,type:"number"},stack:{value:e?a:"-",type:e?"percent":"string"},total:{value:f?c:"-",type:f?"percent":"string"}})},Apa=function(a){var b=a.ij().labels();
a.qb||(a.qb=a.Ma.Ad(),a.qb.zIndex(31),b.O(a.qb));a.qb.clip(a.fc);for(var c=b.g("anchor"),d=b.g("position"),e=a.Lh(0).Kf(),f=null,h=0;e.advance();){var k=e.la(),l=e.o("isTotal"),m=(0,$.Fg)(a.gb,function(a,b){var c=b.$();c.select(k);return c.o("missing")?++a:a},0),p=null===f;m=m==a.gb.length;p||m?f=p&&!m?k:f:(l||(p=J5(a,k,"diff"),l=xpa(a,c,d,p),p=ypa(a,d,p),p=wpa(a,h,p),f=zpa(a,k,f),b.add(f,p,h).ra("anchor",l)),f=k,h++)}b.W()},Cpa=function(a){a.rc||(a.rc=a.Ma.Ad(),a.rc.zIndex(40),a.i.O(a.rc));a.rc.clip(a.fc);
for(var b=a.Lh(0).zc(),c=a.i.anchor(),d=a.i.position();b.advance();){var e=b.la();if(Bpa(a,e)){var f=a;var h=c,k=d;"auto"==h&&(h="auto"==k?0<=J5(f,e,"diff")?"center-bottom":"center-top":"center"==k?"center":$.Ho(k,180));f=$.Ho(h,f.ya()?-90:0);h=d;k="auto"==h?0<=J5(a,e,"diff")?"center-top":"center-bottom":h;h=a;var l=M5(h,e);l=$.Co(l,k);k=l.x;l=l.y;var m=k;k=h.ya()?l:k;l=h.ya()?m:l;h={value:{x:k,y:l}};var p=a;k=e;l=T5(p);m=J5(p,k,"absolute");p=J5(p,k,"diff",!0);k=$.gv(l,{index:{value:k,type:"number"},
value:{value:m,type:"number"},total:{value:m,type:"number"},stack:{value:p,type:"number"}});l=(l=a.i.Vd(e))?l:a.i.add(null,null,e);l.yf(k);l.wc(h);l.anchor(f)}}a.i.W()},Dpa=function(a){var b=a.J(4)||$.kr(a,"waterfall","stackLabels"),c=a.xE();b&&(c.clear(),1<(0,$.Fg)(a.gb,function(a,b){return b.enabled()?a+1:a},0)&&c.g("enabled")&&Cpa(a));c.I(c.qa)},M5=function(a,b){var c=(0,$.Fg)(a.Gj,function(a,b){return Math.max(b.X.zr,a)},-window.Infinity),d=a.Gj[0].data[b].o.valueX-c/2,e=S5(a,Epa(a,b)),f=S5(a,
Fpa(a,b));return $.kn(d,e,c,f-e)},epa=function(a){return a.Gj.length?a.Gj[0].data.length:0},J5=function(a,b,c,d){return(0,$.Fg)(a.gb,function(a,f){if(f.enabled()){var e=f.$();e.select(b);if(e.o("missing"))return a;e=d?this.xT(e.Jf):e.o(c);return a+e}return a},0,a)},Bpa=function(a,b){return(0,$.Fg)(a.Gj,function(a,d){return a||!d.data[b].o.missing},!1)},Epa=function(a,b){return(0,$.Fg)(a.gb,function(a,d){if(d.enabled()){var c=d.$();c.select(b);if(c.o("missing"))return a;var f=c.o("stackedValue");c=
c.o("stackedZero");return Math.max(a,f,c)}return a},-window.Infinity)},Fpa=function(a,b){return(0,$.Fg)(a.gb,function(a,d){if(d.enabled()){var c=d.$();c.select(b);if(c.o("missing"))return a;var f=c.o("stackedValue");c=c.o("stackedZero");return Math.min(f,c,a)}return a},window.Infinity)},U5=function(a){$.n(a.j)||(a.j=new E5(a),$.K(a.j,a.kca,a));return a.j},V5=function(a){$.CA.call(this,a)},Gpa=function(a){var b=new Q5;b.Tg();b.dd();for(var c=0,d=arguments.length;c<d;c++)b.waterfall(arguments[c]);return b},
Hpa={wka:"absolute",Wla:"diff"};$.H(y5,$.U);var W5={};$.nq(W5,[[1,"stroke",$.Jq]]);$.S(y5,W5);y5.prototype.oa=8192;y5.prototype.F=function(){var a=y5.u.F.call(this);$.Nq(this,W5,a);return a};y5.prototype.U=function(a,b){y5.u.U.call(this,a,b);$.Fq(this,W5,a,b)};$.H(z5,$.Y);var X5={};$.nq(X5,[[0,"from",$.xq],[0,"to",$.xq]]);$.S(z5,X5);$.zz(z5,"waterfall",["labels","appearance"]);$.g=z5.prototype;$.g.oa=40964;
$.g.W=function(){if(this.Ac()){this.J(4)&&($.hr(this,"waterfall",["labels","appearance"]),this.I(4));if($.kr(this,"waterfall","appearance")){if(B5(this)){this.Ox();D5(this).clear();var a=this.Rf().g("stroke"),b=$.ap(a),c=A5(this);b=new $.on($.O(c.Bp.x,b),$.O(c.Bp.y,b));var d=D5(this);c=c.SU===F5(this.jb)?-10:10;var e=this.jb.ya();$.AA(d,e,b.x,b.y);$.BA(d,e,b.x-5,b.y+c);$.BA(d,e,b.x+5,b.y+c);$.BA(d,e,b.x,b.y);d.fill(a);d.stroke("none")}$.ir(this,"waterfall","appearance")}$.kr(this,"waterfall","labels")&&
(B5(this)&&this.mf(),$.ir(this,"waterfall","labels"));B5(this)||this.remove()}};$.g.Ox=function(){C5(this).clear();var a=A5(this),b=C5(this);b.zIndex(N5);var c=this.Rf().g("stroke"),d=$.ap(c),e=new $.on($.O(a.cq.x,d),$.O(a.cq.y,d)),f=new $.on($.O(a.Bp.x,d),$.O(a.Bp.y,d));a=$.O(a.mr,d);b.stroke(c);c=this.jb.ya();$.AA(b,c,e.x,e.y);$.BA(b,c,e.x,a);$.BA(b,c,f.x,a);$.BA(b,c,f.x,f.y)};
$.g.mf=function(){var a=this.mk();if(this.label().enabled()){$.Ix(a,this.jb.Rk);var b=A5(this);b=this.jb.ya()?new $.I(b.mr,b.cq.x,0,b.Bp.x-b.cq.x):new $.I(Math.min(b.cq.x,b.Bp.x),b.mr,Math.abs(b.Bp.x-b.cq.x),0);$.Px(a,b);$.Jx(a)}else $.Ix(a,null)};$.g.remove=function(){$.Ix(this.mk(),null);C5(this).clear();D5(this).clear()};$.g.label=function(a){this.tj||(this.tj=new $.Ax,this.tj.Fa("defaultFontSettings","waterfall.arrow.label"),$.K(this.tj,this.HH,this));return $.n(a)?(this.tj.N(a),this):this.tj};
$.g.HH=function(){$.gr(this,"waterfall","appearance",4)};$.g.mk=function(){$.n(this.hc)||(this.hc=new $.Bx);return this.hc};$.g.Rf=function(){return this.b};$.g.Ica=function(){$.gr(this,"waterfall","appearance",8192)};$.g.U=function(a,b){z5.u.U.call(this,a,b);this.label().fa(!!b,a.label);this.Rf().fa(!!b,a.connector);$.Fq(this,X5,a,b)};$.g.F=function(){var a=z5.u.F.call(this);$.Nq(this,X5,a,void 0,void 0,!0);a.label=this.label().F();a.connector=this.Rf().F();return a};
$.g.R=function(){this.jb=null;$.sd(this.i,this.f,this.hc,this.b);z5.u.R.call(this)};var Y5=z5.prototype;Y5.connector=Y5.Rf;Y5.label=Y5.label;$.H(E5,$.Y);E5.prototype.oa=$.Y.prototype.oa|1|$.uE|$.vE;$.zz(E5,"waterfall",["recalculation","appearance"]);var N5=41;$.g=E5.prototype;$.g.ya=function(){return this.sa.ya()};$.g.lk=function(a){return a.Yh().rb()};
$.g.yx=function(){(0,$.Ne)(this.b,function(a){var b=a.label().flatten(),c=a.mk(),d=H5(a),e=I5(a);d=G5(this,d);var f=G5(this,e),h=this.sa;e=T5(h);e.Ci([h]);d=J5(h,d,"absolute");f=J5(h,f,"absolute")-d;e=$.gv(e,{value:{value:f,type:"number"},absolute:{value:f,type:"number"},percent:{value:0==d?"-":f/Math.abs(d),type:0==d?"string":"percent"}});a=a.label().mk(e);c.text(a);c.style(b);$.Fx(c);c.Cj()},this)};
$.g.W=function(){if(this.b.length){if(rpa(this),this.J(4)&&((0,$.Ne)(this.b,function(a){$.V(a);a.B(4);a.ea(!1)},this),$.hr(this,"waterfall",["recalculation","appearance"]),this.I(4)),$.kr(this,"waterfall","recalculation")&&(ipa(this),this.yx(),this.va($.vE|$.uE),$.sl.measure(),ppa(this),$.ir(this,"waterfall","recalculation")),$.kr(this,"waterfall","appearance")){var a=qpa(this);(0,$.Ne)(this.b,function(b){b.O(a);b.W()},this);$.ir(this,"waterfall","appearance")}}else"waterfall"in this.il&&(this.il.waterfall=
0),this.I(4294967295)};$.g.d_=function(a){var b=["appearance"];if($.X(a,4)||$.X(a,32768))b.push("recalculation"),(0,$.Ne)(this.b,function(a){$.V(a);$.fr(a,"waterfall")&&(a.il.waterfall|=a.Uq.waterfall.Bu);a.ea(!1)},this);$.hr(this,"waterfall",b,1)};$.g.nl=function(){this.La||(this.La=$.nk(),this.La.zIndex(N5));return this.La};$.g.U=function(a,b){E5.u.U.call(this,a,b);(0,$.Ne)(a,function(a){tpa(this,a)},this)};$.g.F=function(){var a=[];(0,$.Ne)(this.b,function(b){a.push(b.F())},this);return a};
$.g.R=function(){$.sd(this.b,this.K,this.Cf);E5.u.R.call(this)};$.g.Iw=function(){return(0,$.Wa)(this.b,function(a){return a.mk()},this)};$.H(O5,$.U);var Z5={};$.nq(Z5,[[1,"stroke",$.Jq]]);$.S(O5,Z5);$.g=O5.prototype;$.g.oa=12288;$.g.labels=function(a){this.Ba||(this.Ba=new $.Hu,$.W(this,"labels",this.Ba),$.K(this.Ba,this.Nd,this));return $.n(a)?(!$.C(a)||"enabled"in a||(a.enabled=!0),this.Ba.N(a),this):this.Ba};$.g.Nd=function(){this.va(4096)};$.g.F=function(){var a=O5.u.F.call(this);$.Nq(this,Z5,a);a.labels=this.labels().F();return a};$.g.U=function(a,b){O5.u.U.call(this,a,b);this.labels().fa(!!b,a.labels);$.Fq(this,Z5,a,b)};
$.g.R=function(){$.od(this.Ba);O5.u.R.call(this)};var Ipa=O5.prototype;Ipa.labels=Ipa.labels;$.H(P5,$.kB);$.g=P5.prototype;$.g.SE={"%BubbleSize":"size","%RangeStart":"low","%RangeEnd":"high","%XValue":"x","%Diff":"diff","%Absolute":"absolute","%IsTotal":"isTotal"};$.g.dO=function(a,b){if("auto"==a){if(1<this.Ca.nj())return"center";a="value"}return P5.u.dO.call(this,a,b)};$.g.Ji=function(a,b){"auto"==a&&(1<this.Ca.nj()?a="center":a="value");return P5.u.Ji.call(this,a,b)};
$.g.Nm=function(a,b){var c=P5.u.Nm.call(this,a,b);c.diff={value:b.o("diff"),type:"number"};c.absolute={value:b.o("absolute"),type:"number"};c.isTotal={value:b.o("isTotal"),type:""};return c};$.g.i2=function(){return{prevValue:0,I1:!1,Jga:"absolute"==this.Ca.g("dataMode")}};
$.g.Q3=function(a,b,c){var d=-1<(0,$.za)(this.Jm||[],b.o.rawIndex);a=a.get("isTotal");d=!!b.o.missing||d;var e=!(c.I1||d);a=e||($.n(a)?!!a:d);!d||!e&&a?(d=c.Jga?d?c.prevValue:+b.data.value:c.prevValue+(d?0:+b.data.value),b.o.absolute=d,b.o.diff=d-c.prevValue,b.o.isTotal=a,b.o.missing=0,c.I1=!0,c.prevValue=d):b.o.missing=1};$.g.sR=function(a){return"value"==a?0<=(Number(this.$().o("diff"))||0):P5.u.sR.call(this,a)};$.g.yT=function(a){return a.o("isTotal")?a.get("value"):a.o("diff")};$.H(Q5,$.HB);$.zz(Q5,"waterfall",["stackLabels","connectorsLabels","arrows"]);var Jpa={};Jpa.waterfall={Eb:32,Jb:2,Nb:[$.iH,$.mH,$.nH,$.rH,$.zH,$.ZG],Mb:null,Gb:null,Bb:$.zG|5767168,Ab:"value",yb:"zero"};Q5.prototype.aj=Jpa;$.Dz(Q5,Q5.prototype.aj);$.g=Q5.prototype;$.g.Ns=function(){return"waterfall"};$.g.SG=function(){return"value"};$.g.hs=function(){};$.g.xT=function(a){return+a.o[a.o.isTotal?"absolute":"diff"]};
$.g.R3=function(a,b,c,d){var e=0,f;if(b)for(f=0;f<a.length;f++){var h=a[f].data[b-1];e+=Number(h.o.diff)||0}this.Ed=[];for(f=b;f<=c;f++){for(var k=b=0;k<a.length;k++)h=a[k].data[f],h.o.isTotal||(h.o.stackedZero+=e,h.o.stackedValue+=e,h.o.stackedZeroPrev+=e,h.o.stackedValuePrev+=e,h.o.stackedZeroNext+=e,h.o.stackedValueNext+=e),d.Vc(h.o.stackedValue),d.Vc(h.o.stackedValuePrev),d.Vc(h.o.stackedValueNext),b+=h.o.missing?0:Number(h.o.diff)||0;e+=b;this.Ed.push(e)}};
$.g.Kh=function(a){Q5.u.Kh.call(this,a);this.oi();a=U5(this);this.K||(this.K=this.Ma.Ad(),this.K.zIndex(N5),a.O(this.K));var b=$.kr(this,"waterfall","arrows"),c=this.J(4);c&&a.B(4);if(b||c)a.W(),$.ir(this,"waterfall","arrows")};
$.g.iQ=function(){Q5.u.iQ.call(this);this.P?this.P.clear():this.P=$.pk();var a=this.Xa(),b=this.Wo[String($.oa(a))];if(b&&b.length){var c=this.ij().g("stroke");this.P.stroke(c);c=$.ac(c);this.P.parent(this.O());this.P.zIndex(1E3);this.P.clip(this.Uf());var d=this.ya();a=a.iv();var e=b[0].Qi,f=b[0].lastIndex,h;var k=upa(b,e);if((0,window.isNaN)(k))var l=h=window.NaN;else{var m=b[k];k=m.data[e].o;var p=a?m.X.ms($.n(k.category)?k.category:e):m.X.zr;h=$.O(S5(this,this.Ed[0]),c);l=R5(this,k.valueX,p/2)}this.Md.length=
0;for(var q=e+1;q<=f;q++){a:{for(k=0;k<b.length;k++)if(!b[k].data[q].o.missing)break a;k=window.NaN}(0,window.isNaN)(k)?k=m=window.NaN:(m=b[k],k=m.data[q].o,p=a?m.X.ms($.n(k.category)?k.category:e):m.X.zr,m=$.O(S5(this,this.Ed[q-e-1]),c),k=R5(this,k.valueX,-(p/2)));if(!(0,window.isNaN)(l)&&!(0,window.isNaN)(h))if((0,window.isNaN)(k)||(0,window.isNaN)(m))continue;else $.AA(this.P,d,l,h),$.BA(this.P,d,k,m),this.Md.push({hi:l,Me:h,f6:k,h6:m});k=upa(b,q);(0,window.isNaN)(k)?l=h=window.NaN:(m=b[k],k=m.data[q].o,
p=a?m.X.ms($.n(k.category)?k.category:e):m.X.zr,h=$.O(S5(this,this.Ed[q-e]),c),l=R5(this,k.valueX,p/2))}}};$.g.zt=function(a,b){return new P5(this,this,a,b,!0)};var $5={};$.mq($5,0,"dataMode",function(a,b){return $.yk(Hpa,a,b||"absolute")});$.S(Q5,$5);$.g=Q5.prototype;
$.g.oi=function(){vpa(this);Dpa(this);var a=this.J(4)||$.kr(this,"waterfall","connectorsLabels"),b=this.ij().labels();a&&($.V(this.ij()),b.clear(),b.g("enabled")&&this.nj()&&Apa(this),this.ij().ea(!1));b.I(b.qa);$.jr(this,"waterfall",["stackLabels","connectorsLabels"])};$.g.uja=function(){$.hr(this,"waterfall",["stackLabels","arrows"],1)};
$.g.xE=function(a){this.i||(this.i=new $.Hu,$.W(this,"stackLabels",this.i),this.i.I(this.i.qa),$.K(this.i,this.uja,this));return $.n(a)?(!$.C(a)||"enabled"in a||(a.enabled=!0),this.i.N(a),this):this.i};$.g.Hs=function(){return!0};
$.g.Il=function(a,b){var c=[];if("categories"==a){this.ma={};for(var d=this.Qe(),e,f,h,k={},l=0,m=0;m<d.length;m++)e=d[m],f=$.Yl("risingFill",1,!1),f=f(e,$.bm,!0,!0),h=$.no(f),h in k?this.ma[k[h]].X.push(e):(k[h]=l,this.ma[l]={X:[e],type:"rising"},c.push({text:"Increase",categoryType:"increase",iconEnabled:!0,iconFill:f,sourceUid:$.oa(this),sourceKey:l++})),f=$.Yl("fallingFill",1,!1),f=f(e,$.bm,!0,!0),h=$.no(f),h in k?this.ma[k[h]].X.push(e):(k[h]=l,this.ma[l]={X:[e],type:"falling"},c.push({text:"Decrease",
categoryType:"decrease",iconEnabled:!0,iconFill:f,sourceUid:$.oa(this),sourceKey:l++})),f=$.Yl("fill",1,!1),f=f(e,$.bm,!0,!0),h=$.no(f),h in k?this.ma[k[h]].X.push(e):(k[h]=l,this.ma[l]={X:[e],type:"total"},c.push({text:"Total",categoryType:"total",iconEnabled:!0,iconFill:f,sourceUid:$.oa(this),sourceKey:l++}))}else c=Q5.u.Il.call(this,a,b);return c};
$.g.oq=function(a,b){if("categories"==this.Vf().g("itemsSourceMode")){var c=a.Bi(),d=this.ma[c];c=d.X;d=d.type;for(var e,f,h,k,l,m,p=0;p<c.length;p++){e=c[p];f=e.Kf();for(m=[];f.advance();){var q=f.la();f.o("missing")||(h=f.o("isTotal"),k=0<=f.o("diff")&&!h,l=0>f.o("diff")&&!h,(h=h&&"total"==d||k&&"rising"==d||l&&"falling"==d)&&m.push(q))}e.ak(m)}}else return Q5.u.oq.call(this,a,b)};$.g.nq=function(a,b){if("categories"==this.Vf().g("itemsSourceMode"))this.Zd();else return Q5.u.nq.call(this,a,b)};
$.g.sr=function(a,b){if("default"==this.Vf().g("itemsSourceMode"))return Q5.u.sr.call(this,a,b)};$.g.iE=function(a){$.hr(this,"waterfall",["stackLabels","arrows"]);Q5.u.iE.call(this,a)};$.g.EU=function(){Q5.u.EU.call(this);$.hr(this,"waterfall",["stackLabels","connectorsLabels"])};$.g.cca=function(a,b,c,d,e){$.hl(405,null,["chart.connectorStroke()","chart.connectors().stroke()"],!0);var f=this.ij();return arguments.length?f.stroke.apply(f,arguments)&&this:f.stroke()};
$.g.ij=function(a){this.Ej||(this.Ej=new O5,$.W(this,"connectors",this.Ej),$.K(this.Ej,this.Kca,this));return $.n(a)?(this.Ej.N(a),this):this.Ej};$.g.Kca=function(a){$.X(a,8192)&&this.B(32768,1);$.X(a,4096)&&$.gr(this,"waterfall","connectorsLabels",1)};$.g.kca=function(){$.gr(this,"waterfall","arrows",1)};$.g.bca=function(a){return tpa(U5(this),a)};$.g.eca=function(a){return U5(this).b[a]||null};$.g.gca=function(a){return spa(U5(this),a)};
$.g.fca=function(a){var b=U5(this);a=(0,$.za)(b.b,a);return 0<=a?spa(b,a):!1};$.g.dca=function(){return $.Ha(U5(this).b)};$.g.F=function(){var a=Q5.u.F.call(this);$.Nq(this,$5,a.chart);a.chart.stackLabels=this.xE().F();a.chart.connectors=this.ij().F();a.chart.arrows=U5(this).F();return a};
$.g.U=function(a,b){Q5.u.U.call(this,a,b);var c=a.stackLabels;c&&this.xE().fa(!!b,c);a.arrows&&U5(this).fa(!!b,a.arrows);if((c=a.connectors)||a.connectorStroke)c=c||{},c.stroke=c.stroke||a.connectorStroke,this.ij().fa(!!b,c);$.Fq(this,$5,a)};$.g.R=function(){$.sd(this.i,this.rc,this.P,this.qb,this.Ej,this.j);Q5.u.R.call(this)};var a6=Q5.prototype;a6.stackLabels=a6.xE;a6.xScale=a6.Xa;a6.yScale=a6.bb;a6.crosshair=a6.jh;a6.xGrid=a6.gm;a6.yGrid=a6.im;a6.xMinorGrid=a6.Jr;a6.yMinorGrid=a6.Mr;a6.xAxis=a6.Uh;
a6.getXAxesCount=a6.aD;a6.yAxis=a6.dj;a6.getYAxesCount=a6.cD;a6.getSeries=a6.Ue;a6.lineMarker=a6.Sm;a6.rangeMarker=a6.an;a6.textMarker=a6.fn;a6.palette=a6.$b;a6.markerPalette=a6.Ef;a6.hatchFillPalette=a6.te;a6.getType=a6.Na;a6.addSeries=a6.cl;a6.getSeriesAt=a6.Lh;a6.getSeriesCount=a6.nj;a6.removeSeries=a6.so;a6.removeSeriesAt=a6.Jn;a6.removeAllSeries=a6.vp;a6.getPlotBounds=a6.Uf;a6.xZoom=a6.Mq;a6.yZoom=a6.Nq;a6.xScroller=a6.Ep;a6.yScroller=a6.Nr;a6.getStat=a6.Og;a6.annotations=a6.Fk;
a6.getXScales=a6.ky;a6.getYScales=a6.my;a6.data=a6.data;a6.connectors=a6.ij;a6.addArrow=a6.bca;a6.getArrow=a6.eca;a6.removeArrowAt=a6.gca;a6.removeArrow=a6.fca;a6.getAllArrows=a6.dca;a6.connectorStroke=a6.cca;$.H(V5,$.XB);$.yG[32]=V5;$.g=V5.prototype;$.g.type=32;$.g.flags=263713;$.g.Bh={rising:"path",risingHatchFill:"path",falling:"path",fallingHatchFill:"path",path:"path",hatchFill:"path"};$.g.rt=function(a){var b=a.o("shapes");for(c in b)b[c].clear();var c=0<=a.o("diff");if(a.o("isTotal")){c="path";var d="hatchFill"}else c?(c="rising",d="risingHatchFill"):(c="falling",d="fallingHatchFill");this.hF(a,b[c],b[d])};
$.g.qg=function(a,b){var c=0<=a.o("diff");if(a.o("isTotal")){c="path";var d="hatchFill"}else c?(c="rising",d="risingHatchFill"):(c="falling",d="fallingHatchFill");var e={};e[c]=e[d]=!0;e=this.ad.cd(b,e);this.hF(a,e[c],e[d])};$.Op.waterfall=Gpa;$.F("anychart.waterfall",Gpa);}).call(this,$)}
