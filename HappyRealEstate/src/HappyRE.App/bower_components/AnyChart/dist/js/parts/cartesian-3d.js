if(!_.cartesian_3d){_.cartesian_3d=1;(function($){var O9=function(a,b,c){if(a=a.f[b])a.zIndex=c},$ra=function(a){return $.oa(a.ol())+"_"+$.oa(a.bb())},asa=function(a,b){var c=0;(0,$.Ne)(a,function(a,e,f){b.call(void 0,a,e,f)&&++c},void 0);return c},P9=function(){$.az.call(this)},Q9=function(){$.az.call(this)},R9=function(){$.Wz.call(this)},S9=function(){$.Zz.call(this)},T9=function(){$.bA.call(this)},U9=function(a){$.CA.call(this,a)},V9=function(a){$.CA.call(this,a)},bsa=function(a,b,c){if(!b.o("skipDrawing")){var d=b.o("x"),e=b.o("zero"),f=b.o("value");
a.ya||(d+=a.f,e-=a.b,f-=a.b);b=c.bottom;var h=c.back,k=c.left,l=c.right,m=c.front,p=c.top,q=c.rightHatch,r=c.frontHatch;c=c.topHatch;var t=a.i,u=a.D,v=m.stroke().thickness%2/2||0;if(a.ya){var w=a.j;var x=Math.min(e,f)+a.f;d=d-w/2-a.b;a=Math.abs(e-f);e=v;f=0}else a=a.j,x=d-a/2,d=Math.min(e,f),w=Math.abs(e-f),f=e=-v;b.moveTo(x+v,d+w).lineTo(x+a,d+w).lineTo(x+a+t-v,d+w-u+v).lineTo(x+t,d+w-u).close();h.moveTo(x+t,d-u).lineTo(x+t+a,d-u).lineTo(x+t+a,d-u+w).lineTo(x+t,d-u+w).close();k.moveTo(x,d).lineTo(x+
t+e,d-u+v).lineTo(x+t,d+w-u).lineTo(x,d+w-v).close();l.moveTo(x+a,d).lineTo(x+a+t+f,d-u+v).lineTo(x+a+t,d+w-u).lineTo(x+a,d+w-v).close();q.moveTo(x+a,d).lineTo(x+a+t+f,d-u+v).lineTo(x+a+t,d+w-u).lineTo(x+a,d+w-v).close();m.moveTo(x,d).lineTo(x+a,d).lineTo(x+a,d+w).lineTo(x,d+w).close();r.moveTo(x,d).lineTo(x+a,d).lineTo(x+a,d+w).lineTo(x,d+w).close();p.moveTo(x+v,d).lineTo(x+a,d).lineTo(x+a+t-v,d-u+v).lineTo(x+t,d-u).close();c.moveTo(x+v,d).lineTo(x+a,d).lineTo(x+a+t-v,d-u+v).lineTo(x+t,d-u).close()}},
W9=function(a){$.CA.call(this,a)},X9=function(){$.HB.call(this);this.Fa("cartesian","cartesian3dBase","cartesian3d");this.K=0;this.qe="cartesian-3d"},Y9=function(a){var b=$.po(a.domTarget);if(b&&b.X&&b.X.check(4)){var c=$.po(a.relatedDomTarget);c&&c.X&&c.X==b.X&&c.index==b.index||(b=b.X)&&!b.nd&&b.enabled()&&(c=b.Si(),b.ib(null),b.lh(a.LD),b.ib(c))}},csa=function(a,b,c){var d,e,f;var h=$.Yl("fill",1,!0)(a,c);c=$.C(h)?h.opacity:1;var k=$.C(h)?h.color:h;h=$.Gl(k);if(null===h)a=k=d=e=f=h="none";else{k=
h.pk;var l=$.zl(k);e=$.Dl(l,.2);h=$.Dl(l,.25);f=$.Cl([255,255,255],l,.1);d=$.Rb($.Cl(l,e,.7));f=$.Rb($.Cl(e,f,.1));l=$.Rb($.Cl(l,e,.1));a={angle:a.g("isVertical")?0:90,opacity:c,keys:[$.Kl(d,.2),$.Kl(k,.3)]};k=$.Kl(l,.2);d=$.Kl(d,.2);e=$.Rb(e);h=$.Rb(h)}b.bottom.fill({color:e,opacity:c});b.back.fill({color:f,opacity:c});b.left.fill({color:h,opacity:c});b.right.fill({color:k,opacity:c});b.top.fill({color:d,opacity:c});b.front.fill(a)},dsa=function(){var a=new X9;a.ra("defaultSeriesType","column");
a.dd();$.wA(a);a.Tg();return a},$9=function(a,b){var c=Z9(a),d=a.i,e=a.ii;!b&&a.g("zDistribution")&&(e=(e-d*(c-1))/c);return e},a$=function(a,b){var c=Z9(a),d=a.j,e=a.Fh;!b&&a.g("zDistribution")&&(e=(e-d*(c-1))/c);return e},Z9=function(a){return asa(a.gb,function(a){return!!(a&&a.enabled()&&a.check($.gB))})},esa=function(a,b){for(var c=0,d=0,e=Math.min(a.gb.length-1,b);d<=e;d++){var f=a.gb[d];f&&f.enabled()&&f.check($.gB)&&c++}return c-1},fsa=function(a){var b=new X9;b.Fa("area3d");b.qe="area-3d";
b.ra("defaultSeriesType","area");b.dd();b.Tg();$.wA(b);arguments.length&&b.cl.apply(b,arguments);return b},gsa=function(a){var b=new X9;b.Fa("bar","bar3d");b.qe="bar-3d";b.ra("defaultSeriesType","bar");b.dd();b.Tg();$.wA(b);arguments.length&&b.cl.apply(b,arguments);return b},hsa=function(a){var b=new X9;b.Fa("column","column3d");b.qe="column-3d";b.ra("defaultSeriesType","column");b.dd();b.Tg();$.wA(b);arguments.length&&b.cl.apply(b,arguments);return b},isa=function(a){var b=new X9;b.Fa("line3d");
b.qe="line-3d";b.ra("defaultSeriesType","line");b.dd();b.Tg();$.wA(b);arguments.length&&b.cl.apply(b,arguments);return b},jsa={GB:"area",NE:"bar",OE:"column",mt:"line",Mma:"line-2d"},ksa={name:"top",Pb:"path",Wb:null,Xb:"stroke",Zb:!0,Fb:!1,zIndex:3E-6},b$={name:"bottom",Pb:"path",Wb:null,Xb:"stroke",Zb:!0,Fb:!1,zIndex:2E-6},c$={name:"left",Pb:"path",Wb:null,Xb:"stroke",Zb:!0,Fb:!1,zIndex:1E-6},d$={name:"right",Pb:"path",Wb:null,Xb:"stroke",Zb:!0,Fb:!1,zIndex:4E-6},e$={name:"back",Pb:"path",Wb:null,
Xb:"stroke",Zb:!0,Fb:!1,zIndex:0},f$={name:"frontHatch",Pb:"path",Wb:"hatchFill",Xb:null,Zb:!0,Fb:!0,zIndex:8E-6},lsa={name:"rightHatch",Pb:"path",Wb:"hatchFill",Xb:null,Zb:!0,Fb:!0,zIndex:7E-6},msa={name:"topHatch",Pb:"path",Wb:"hatchFill",Xb:null,Zb:!0,Fb:!0,zIndex:6E-6};$.H(P9,$.az);$.g=P9.prototype;$.g.vg=function(a){var b=0;$.X(a,4)&&(b|=4);$.X(a,2)&&(b|=1);this.B(20,b|8)};
$.g.iG=function(a){var b=this.ja()||$.kn(0,0,0,0);a=Math.round(b.Sa()-a*b.height);var c=this.Oh().stroke();c=$.ap(c);a=$.O(a,c);c=b.sb()+this.ii;var d=a-this.Fh;this.j.moveTo(b.sb(),a).lineTo(c,d).lineTo(b.ab()+this.ii,d)};$.g.jG=function(a){var b=this.ja()||$.kn(0,0,0,0);a=Math.round(b.sb()+a*b.width);var c=this.Oh().stroke();c=$.ap(c);a=$.O(a,c);c=a+this.ii;var d=Math.ceil($.O(b.Sa()-this.Fh,1));this.j.moveTo(a,Math.ceil($.O(b.Sa(),1))).lineTo(c,d).lineTo(c,b.Ub()-this.Fh)};
$.g.fG=function(a,b,c,d){if(!(0,window.isNaN)(b)){var e=this.ja()||$.kn(0,0,0,0);var f=Math.round(e.Sa()-b*e.height);var h=Math.round(e.Sa()-a*e.height);1==a?h-=d:h+=d;1==b?f-=d:f+=d;c.moveTo(e.sb(),f).lineTo(e.sb()+this.ii,f-this.Fh).lineTo(e.ab()+this.ii,f-this.Fh).lineTo(e.ab()+this.ii,h-this.Fh).lineTo(e.sb()+this.ii,h-this.Fh).lineTo(e.sb(),h).close()}};
$.g.gG=function(a,b,c,d){if(!(0,window.isNaN)(b)){var e=this.ja()||$.kn(0,0,0,0);var f=Math.round(e.sb()+b*e.width);var h=Math.round(e.sb()+a*e.width);1==a?h+=d:h-=d;1==b?f+=d:f-=d;c.moveTo(f+this.ii,e.Ub()-this.Fh).lineTo(h+this.ii,e.Ub()-this.Fh).lineTo(h+this.ii,e.Sa()-this.Fh).lineTo(h,e.Sa()).lineTo(f,e.Sa()).lineTo(f+this.ii,e.Sa()-this.Fh).close()}};$.H(Q9,P9);$.pu(Q9,P9);var g$=P9.prototype;g$.isHorizontal=g$.Lb;g$.scale=g$.scale;g$.axis=g$.axis;g$=Q9.prototype;
$.F("anychart.standalones.grids.linear3d",function(){var a=new Q9;a.N($.im("standalones.linearGrid"));return a});g$.layout=g$.ue;g$.draw=g$.W;g$.parentBounds=g$.ja;g$.container=g$.O;$.H(R9,$.Wz);
R9.prototype.Yr=function(){var a=$.Za(this.scale().transform(this.value(),.5),0,1);if(!(0,window.isNaN)(a)){var b=0==$.Ey(this).Zk()%2?0:-.5,c=this.ja(),d=this.Ip();$.Ey(this).clear();var e=this.nc().ii,f=this.nc().Fh;if("horizontal"==this.ue()){var h=Math.round(c.Ub()+c.height-a*c.height);1==a?h-=b:h+=b;$.Ey(this).moveTo(c.sb(),h).lineTo(c.sb()+e,h-f).lineTo(c.ab()+e,h-f)}else"vertical"==this.ue()&&(h=Math.round(c.sb()+a*c.width),1==a?h+=b:h-=b,$.Ey(this).moveTo(h+e,c.Ub()-f).lineTo(h+e,c.Sa()-f).lineTo(h,
c.Sa()));c.top-=f;c.height+=f;c.width+=e;$.Ey(this).clip(d.yj(c))}};$.H(S9,$.Zz);
S9.prototype.Yr=function(){var a=this.ue(),b=this.g("from"),c=this.g("to");this.g("from")>this.g("to")&&(b=this.g("to"),c=this.g("from"));var d=$.Za(this.scale().transform(b,0),0,1),e=$.Za(this.scale().transform(c,1),0,1);if(!(0,window.isNaN)(d)&&!(0,window.isNaN)(e)){c=this.ja();b=this.Ip();$.Ey(this).clear();var f=this.nc().ii,h=this.nc().Fh;if("horizontal"==a){e=Math.floor(c.Sa()-c.height*e);d=Math.ceil(c.Sa()-c.height*d);a=c.sb();var k=c.ab();$.Ey(this).moveTo(a,e).lineTo(a+f,e-h).lineTo(k+f,
e-h).lineTo(k+f,d-h).lineTo(a+f,d-h).lineTo(a,d).close()}else"vertical"==a&&(a=c.Sa(),k=c.Ub(),d=Math.floor(c.sb()+c.width*d),e=Math.ceil(c.sb()+c.width*e),$.Ey(this).moveTo(d,a).lineTo(d+f,a-h).lineTo(d+f,k-h).lineTo(e+f,k-h).lineTo(e+f,a-h).lineTo(e,a).close());c.top-=h;c.height+=h;c.width+=f;$.Ey(this).clip(b.yj(c))}};$.H(T9,$.bA);T9.prototype.ja=function(a,b,c,d){b=T9.u.ja.call(this,a,b,c,d);$.n(a)||(a=this.nc().ii,c=this.nc().Fh,b.top-=c,b.height+=c,b.width+=a);return b};$.H(U9,$.CA);$.yG[2]=U9;$.g=U9.prototype;$.g.type=2;$.g.flags=$.gB|49;$.g.Bh={top:"path",bottom:"path",left:"path",right:"path",back:"path",front:"path",cap:"path",frontHatch:"path"};$.g.OJ=function(){for(var a=this.X.Kf();a.advance();){var b=a.o("shapes");if(b){var c=a.o("zIndex");this.ad.st(c+1E-8*a.la(),b)}}};
$.g.Dd=function(a){U9.u.Dd.call(this,a);this.da=!0;a=this.X.Ca;var b=this.X.la(),c=this.X.dh(),d=$ra(this.X);this.Wa=!c||b==a.H2[d];this.Ia=a.iM(b,c);this.P=a.jM(b,c);this.b=$9(a,c);this.i=a$(a,c);a.Xa().sf()?(O9(this.ad,"left",4E-6),O9(this.ad,"right",1E-6)):(O9(this.ad,"left",1E-6),O9(this.ad,"right",4E-6));a.bb().sf()?(O9(this.ad,"top",2E-6),O9(this.ad,"bottom",3E-6)):(O9(this.ad,"top",3E-6),O9(this.ad,"bottom",2E-6))};
$.g.Ho=function(a){var b=this.ad.cd(this.Dc,null,this.X.zIndex()),c=a.o("x")+this.Ia,d=a.o("zero")-this.P,e=a.o("zeroMissing");a=a.o("value")-this.P;b.front.moveTo(c,d).lineTo(c,a);b.frontHatch.moveTo(c,d).lineTo(c,a);this.X.dh()?this.f=[c,d,e]:(b.back.moveTo(c+this.b,d-this.i).lineTo(c+this.b,a-this.i),b.bottom.moveTo(c,d).lineTo(c+this.b,d-this.i),"none"==this.X.bb().cn()&&a>=d&&b.cap.moveTo(c,d).lineTo(c+this.b,d-this.i),b.left.moveTo(c,d).lineTo(c,a).lineTo(c+this.b,a-this.i).lineTo(c+this.b,
d-this.i).close());this.D=c;this.K=a;this.Di=this.ma=d};
$.g.qg=function(a){var b=this.ad.cd(this.Dc),c=a.o("x")+this.Ia,d=a.o("zero")-this.P,e=a.o("zeroMissing");a=a.o("value")-this.P;this.X.dh()?this.f.push(c,d,e):(b.bottom.lineTo(c+this.b,d-this.i),b.back.lineTo(c+this.b,a-this.i));e=b.front.PY();this.Wa&&(this.da?b.top.moveTo(e.x,e.y).lineTo(e.x+this.b,e.y-this.i).lineTo(c+this.b,a-this.i).lineTo(c,a).close():b.top.moveTo(e.x,e.y).lineTo(c,a).lineTo(c+this.b,a-this.i).lineTo(e.x+this.b,e.y-this.i).close(),this.da=!this.da);if("none"==this.X.bb().cn()){var f=
(d-e.y)*(c-e.x)/(a-e.y)+e.x;0<a-e.y&&e.y<=d&&a>d?b.cap.moveTo(f,d).lineTo(f+this.b,d-this.i):0>a-e.y&&e.y>d&&a<=d&&b.cap.lineTo(f+this.b,d-this.i).lineTo(f,d).close()}b.front.lineTo(c,a);b.frontHatch.lineTo(c,a);this.D=c;this.K=a;this.ma=d};
$.g.Em=function(){if(this.G){var a=this.ad.cd(this.Dc),b=a.front,c=a.frontHatch;if(this.f){for(var d=window.NaN,e=window.NaN,f=!1,h=this.f.length-1;0<=h;h-=3){var k=this.f[h-2],l=this.f[h-1],m=this.f[h];m&&!(0,window.isNaN)(d)?(b.lineTo(d,l),c.lineTo(d,l)):f&&!(0,window.isNaN)(e)&&(b.lineTo(k,e),c.lineTo(k,e));b.lineTo(k,l);c.lineTo(k,l);d=k;e=l;f=m}b.close();c.close();this.f=null}else(0,window.isNaN)(this.D)||(b.lineTo(this.D,this.Di).close(),c.lineTo(this.D,this.Di).close(),a.back.lineTo(this.D+
this.b,this.Di-this.i).close(),a.bottom.lineTo(this.D,this.Di).close(),"none"==this.X.bb().cn()&&this.K>=this.X.Di&&a.cap.lineTo(this.D+this.b,this.Di-this.i).lineTo(this.D,this.Di).close());(0,window.isNaN)(this.D)||a.right.moveTo(this.D,this.ma).lineTo(this.D,this.K).lineTo(this.D+this.b,this.K-this.i).lineTo(this.D+this.b,this.ma-this.i).close()}};$.H(V9,$.CA);$.yG[7]=V9;$.g=V9.prototype;$.g.type=7;$.g.flags=$.gB|263717;$.g.Bh={top:"path",bottom:"path",left:"path",right:"path",back:"path",front:"path",frontHatch:"path",rightHatch:"path",topHatch:"path"};$.g.Dd=function(a){V9.u.Dd.call(this,a);a=this.X.Ca;var b=this.X.la(),c=this.X.dh();this.f=a.iM(b,c);this.b=a.jM(b,c);this.i=$9(a,c);this.D=a$(a,c)};$.g.OJ=function(a){for(var b=this.X.Kf();b.advance();){var c=b.o("shapes");c&&(a=b.o("zIndex"),this.ad.st(a+1E-8*b.la(),c))}};
$.g.qg=function(a,b){var c=a.o("zIndex")+1E-8*(a.o("directIndex")+a.la());c=this.ad.cd(b,null,c);bsa(this,a,c)};$.g.rt=function(a){var b=a.o("shapes"),c;for(c in b)b[c].clear();bsa(this,a,b)};$.H(W9,$.CA);$.yG[33]=W9;$.g=W9.prototype;$.g.type=33;$.g.flags=$.gB|32848;$.g.Bh={path:"path"};$.g.OJ=function(){for(var a=this.X.Kf();a.advance();){var b=a.o("shapes");if(b){var c=a.o("zIndex");this.ad.st(c+1E-8*a.la(),b)}}};$.g.Dd=function(a){W9.u.Dd.call(this,a);this.K=!0;a=this.X.Ca;var b=this.X.la();this.P=a.iM(b,!1);this.da=a.jM(b,!1);this.i=$9(a,!1);this.D=a$(a,!1)};$.g.Ho=function(a){this.b=a.o("x")+this.P;this.f=a.o("value")-this.da};
$.g.qg=function(a){var b=this.ad.cd(this.Dc),c=a.o("x")+this.P;a=a.o("value")-this.da;this.K?b.path.moveTo(this.b,this.f).lineTo(this.b+this.i,this.f-this.D).lineTo(c+this.i,a-this.D).lineTo(c,a).close():b.path.moveTo(this.b,this.f).lineTo(c,a).lineTo(c+this.i,a-this.D).lineTo(this.b+this.i,this.f-this.D).close();this.K=!this.K;this.b=c;this.f=a};$.H(X9,$.HB);X9.prototype.zf=function(a){Y9(a);X9.u.zf.call(this,a)};X9.prototype.cg=function(a){Y9(a);X9.u.cg.call(this,a)};X9.prototype.Nj=function(a){Y9(a);X9.u.Nj.call(this,a)};X9.prototype.zh=function(a){Y9(a);X9.u.zh.call(this,a)};var h$={},i$=$.zG|5767168;
h$.area={Eb:2,Jb:1,Nb:[{name:"top",Pb:"path",Wb:null,Xb:null,Zb:!1,Fb:!1,zIndex:3E-6},b$,c$,d$,e$,$.AH,{name:"cap",Pb:"path",Wb:null,Xb:null,Zb:!1,Fb:!1,zIndex:3.5E-6},f$],Mb:null,Gb:function(a,b,c){var d,e,f,h;c=$.Yl("fill",1,!0)(a,c);a=$.C(c)?c.opacity:1;var k=$.C(c)?c.color:c;c=$.Gl(k);if(null===c)k=d=e=f=h=c="none";else{k=c.pk;f=$.zl(k);var l=$.Dl(f,.2);e=$.Dl(f,.3);c=$.Dl(f,.25);h=$.Cl([255,255,255],f,.1);d=$.Rb($.Cl(f,l,.7));e=$.Rb($.Cl(f,e,.7));h=$.Rb($.Cl(l,h,.1));f=$.Rb($.Cl(f,l,.1));k={angle:90,
opacity:a,keys:[$.Kl(d,.2),$.Kl(k,.3)]};d=$.Kl(e,.2);e=f=$.Kl(f,.2);c=$.Rb(c)}b.bottom.fill({color:f,opacity:a});b.back.fill({color:h,opacity:a});b.left.fill({color:c,opacity:a});b.right.fill({color:e,opacity:a});b.top.fill({color:d,opacity:a});b.cap.fill({color:f,opacity:a});b.front.fill(k);b.top.stroke({color:d,thickness:.8})},Bb:i$,Ab:"value",yb:"zero"};h$.bar={Eb:7,Jb:2,Nb:[ksa,b$,c$,d$,e$,$.AH,f$,lsa,msa],Mb:null,Gb:csa,Bb:i$,Ab:"value",yb:"zero"};
h$.column={Eb:7,Jb:2,Nb:[ksa,b$,c$,d$,e$,$.AH,f$,lsa,msa],Mb:null,Gb:csa,Bb:i$,Ab:"value",yb:"zero"};h$.line={Eb:33,Jb:1,Nb:[{name:"path",Pb:"path",Wb:null,Xb:null,Zb:!1,Fb:!1,zIndex:0}],Mb:null,Gb:function(a,b,c){c=$.Yl("fill",1,!0)(a,c);a=$.C(c)?c.opacity:1;c=$.C(c)?c.color:c;c=$.Gl(c);null===c?c="none":(c=c.pk,c=$.zl(c),c=$.Rb($.Cl(c,$.Dl(c,.3),.7)),c=$.Kl(c,.2));b.path.fill({color:c,opacity:a}).stroke({color:c,thickness:.8})},Bb:i$,Ab:"value",yb:"value"};
h$["line-2d"]={Eb:8,Jb:1,Nb:[{name:"stroke",Pb:"path",Wb:null,Xb:"stroke",Zb:!0,Fb:!1,zIndex:9E-6}],Mb:null,Gb:null,Bb:i$|2097152,Ab:"value",yb:"value"};X9.prototype.aj=h$;$.Dz(X9,X9.prototype.aj);$.Op["cartesian-3d"]=dsa;$.g=X9.prototype;$.g.Ns=function(a){return $.yk(jsa,a,"column")};$.g.OM=function(){return!0};$.g.iM=function(a,b){if(b||!this.g("zDistribution"))var c=0;else c=Z9(this),a=esa(this,a),c=c-a-1,c*=$9(this,b)+this.i;return c};
$.g.jM=function(a,b){if(b||!this.g("zDistribution"))var c=0;else c=Z9(this),a=esa(this,a),c=c-a-1,c*=a$(this,b)+this.j;return c};$.g.gF=function(){return new P9};$.g.iZ=function(){var a=new R9;a.sa=this;return a};$.g.jZ=function(){var a=new S9;a.sa=this;return a};$.g.kZ=function(){var a=new T9;a.sa=this;return a};
$.g.iW=function(){this.H2={};for(var a=this.Qe(),b,c="none"!=this.bb().cn(),d="direct"==this.bb().Zw(),e=[30],f=!0,h=1;h<a.length;h++)a[h].Na()==a[h-1].Na()?e.push(e[h-1]):(e.push(30+(1-1/(h+1))),f=!1);for(h=0;h<a.length;h++){var k=30+(1-1/(h+1));b=a.length-h-1;var l=c&&d?b:h;if((b=a[l])&&b.enabled())if(b.check($.gB)){if(b.ah())for(l=b.zc();l.advance();){var m=b,p=h;var q=a.length;var r=e[h],t=f,u=m.$(),v=$.N(u.get("value")),w=u.la();p+=1;var x=.01,y="none"!=this.bb().cn(),B=this.Xa().sf();w=B?u.Ib()-
w:w+1;r=this.g("zDistribution")?30+(1-1/p):t?30:r;this.bb().sf()^0>v&&(p=-p);m.g("isVertical")?y||this.g("zDistribution")?(m=w,w=p,p=m,m=1-1/Math.abs(w),r=0<w?r+x*(p+m):r-x*(q-p+m)):(B&&(p=q-Math.abs(p)+1),w=w*q-q+Math.abs(p),x*=w,r+=x,this.bb().sf()&&(v=-v),0>v&&(x=-x),r+=x):(y||this.g("zDistribution")||(B&&(p=q-Math.abs(p)+1),w=w*q-q+Math.abs(p)),x*=w,r+=x);u.o("zIndex",r);u.o("directIndex",w*p);q=r;k<q&&(k=q)}else b.zIndex()!=b.Xh&&b.zIndex()!=k&&(k=b.zIndex()),b.check(32)&&(this.H2[$ra(b)]=l);
b.zIndex(k)}else k=1E-5*b.th()+32,b.Xh=k}};
$.g.S0=function(a){a=a.clone().round();var b=this.PC(a),c=Z9(this),d=this.g("zAngle"),e=this.g("zAspect"),f=this.g("zPadding"),h=this.g("zDistribution"),k=$.bb(d);d=$.bb(90-d);if($.ro(e)){var l=(0,window.parseFloat)(e)/100;e=l*Math.sin(d);for(var m=l*Math.sin(k),p=l=0,q=this.Qe(),r,t=0;t<q.length;t++)if((r=q[t])&&r.enabled()&&r.check($.gB)){var u=r.Xa();u=1/("ordinal"==u.Na()?u.values().length:r.$().Ib());var v=this.g("barsPadding");var w=this.g("barGroupsPadding");v=r.dh()||h?1/(1+w):1/(c+(c-1)*
v+w);u*=v;!r.dh()&&h?(l+=u*e,p+=u*m):l||(l=u*e,p=u*m)}this.i=Math.round(f*Math.sin(d));this.j=Math.round(f*Math.sin(k));f=this.Fs?b.height/(1+l):b.width/(1+l);this.ii=f*l;this.Fh=f*p;!this.iD&&h&&(this.ii+=this.i*(c-1),this.Fh+=this.j*(c-1));this.ii=Math.round(this.ii);this.Fh=Math.round(this.Fh)}else this.K=!this.iD&&h?e*c+f*(c-1):$.N(e),this.ii=Math.round(this.K*Math.sin(d)),this.Fh=Math.round(this.K*Math.sin(k)),h=c-1,f*h>=this.K&&(f=(this.K-c)/h),this.i=Math.round(f*Math.sin(d)),this.j=Math.round(f*
Math.sin(k));this.ii=Math.max(this.ii,0)||0;this.Fh=Math.max(this.Fh,0)||0;this.i=Math.max(this.i,0)||0;this.j=Math.max(this.j,0)||0;a.top+=this.Fh;a.height-=this.Fh;a.width-=this.ii;return a};$.g.mL=function(a,b,c){if(!this.iD&&this.g("zDistribution")){if(0<a){a=1+this.g("barGroupsPadding");for(var d=1/a,e=0;e<b.length;e++)a=b[e].X,a.check(262144)&&c^a.g("isVertical")&&($.YA(a,.5),$.XA(a,d))}}else X9.u.mL.call(this,a,b,c)};
$.g.ug=function(a){var b=$.po(a.target);return(b=b&&b.X)&&!b.nd&&b.enabled()?b.ug(a):X9.u.ug.call(this,a)};$.g.U=function(a,b){X9.u.U.call(this,a,b)};var j$=X9.prototype;$.F("anychart.cartesian3d",dsa);j$.xScale=j$.Xa;j$.yScale=j$.bb;j$.crosshair=j$.jh;j$.xGrid=j$.gm;j$.yGrid=j$.im;j$.xMinorGrid=j$.Jr;j$.yMinorGrid=j$.Mr;j$.xAxis=j$.Uh;j$.getXAxesCount=j$.aD;j$.yAxis=j$.dj;j$.getYAxesCount=j$.cD;j$.getSeries=j$.Ue;j$.zIndex=j$.zIndex;j$.lineMarker=j$.Sm;j$.rangeMarker=j$.an;j$.textMarker=j$.fn;
j$.palette=j$.$b;j$.markerPalette=j$.Ef;j$.hatchFillPalette=j$.te;j$.getType=j$.Na;j$.addSeries=j$.cl;j$.getSeriesAt=j$.Lh;j$.getSeriesCount=j$.nj;j$.removeSeries=j$.so;j$.removeSeriesAt=j$.Jn;j$.removeAllSeries=j$.vp;j$.getPlotBounds=j$.Uf;j$.xZoom=j$.Mq;j$.yZoom=j$.Nq;j$.xScroller=j$.Ep;j$.yScroller=j$.Nr;j$.getStat=j$.Og;j$.getXScales=j$.ky;j$.getYScales=j$.my;$.Op["area-3d"]=fsa;$.Op["bar-3d"]=gsa;$.Op["column-3d"]=hsa;$.Op["line-3d"]=isa;$.F("anychart.area3d",fsa);$.F("anychart.bar3d",gsa);$.F("anychart.column3d",hsa);$.F("anychart.line3d",isa);}).call(this,$)}