(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),i=a(43),s=a.n(i),l=a(62),u=a(23),h=a(67),p=a(27),m=a(145),d=a(150),f=a(32),b=a(146),g=a(147),w=a(149),v=a(152),E=a(17),S=a(148),N=a(151),k=a(154),y=a(63),x=a.n(y),j=a(153),C=a(66),T=a.n(C),O=(a(84),Object(m.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(f.a)({fontSize:"1rem",flexGrow:1,display:"none",flexDirection:"column-reverse"},e.breakpoints.up("sm"),{display:"block"}),search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(E.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(E.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}}),NavBar:{textAlign:"center",maxHeight:"100px"},mainNav:Object(f.a)({margin:"1.5% 1.5%",width:"97%"},e.breakpoints.up("sm"),{margin:"0.5% 0.5%",width:"99%"}),dropDown:Object(f.a)({fontSize:"13px",marginRight:"21px",marginLeft:"6px",position:"relative",color:"#fff"},e.breakpoints.up("sm"),{marginLeft:"auto",width:"auto"})}})),R=function(e){var t=e.ArticleCount,a=e.NewSource,n=e.reload,r=e.reloadState,o=e.reloadCSS,i=e.onSearchSubmit,s=O(),l=c.a.useState(null),h=Object(u.a)(l,2),p=h[0],m=h[1],d=c.a.useState("Home"),f=Object(u.a)(d,2),E=f[0],y=f[1],C=c.a.useState(""),R=Object(u.a)(C,2),H=R[0],z=R[1];return c.a.createElement("div",{className:s.root},c.a.createElement(b.a,{className:s.mainNav},c.a.createElement(g.a,{className:s.NavBar},c.a.createElement(S.a,{disabled:r,className:"reload-data",onClick:function(){n()}},c.a.createElement(j.a,{className:"reload-".concat(o," ").concat(s.reload)})),c.a.createElement(w.a,{variant:"h6",className:s.title},"".concat(E," - Search Results "),c.a.createElement(x.a,{start:0,end:t,duration:2,decimals:0})),c.a.createElement(S.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},className:s.dropDown},"Categories"),c.a.createElement(N.a,{id:"simple-menu",anchorEl:p,keepMounted:!0,open:Boolean(p),onClose:function(){m(null)}},c.a.createElement(k.a,{onClick:function(){a("Home"),y("Home"),m(null)}},"Home"),c.a.createElement(k.a,{onClick:function(){a("Technology"),y("Latest Tech News"),m(null)}},"Technology News"),c.a.createElement(k.a,{onClick:function(){a("TechCrunch"),y("TechCrunch"),m(null)}},"TechCrunch"),c.a.createElement(k.a,{onClick:function(){a("TechRadar"),y("TechRadar"),m(null)}},"TechRadar"),c.a.createElement(k.a,{onClick:function(){a("NextWeb"),y("The Next Web"),m(null)}},"The Next Web")),c.a.createElement("div",{className:s.search},c.a.createElement("div",{className:s.searchIcon},c.a.createElement(T.a,null)),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i(H)},className:"ui form"},c.a.createElement(v.a,{placeholder:"Search\u2026",classes:{root:s.inputRoot,input:s.inputInput},inputProps:{"aria-label":"Search"},value:H,onChange:function(e){z(e.target.value)}}))))))},H=a(21),z=a.n(H),K=a(14),W=a.n(K),I=z.a.create({baseURL:W.a.HomeNews}),L=Object(m.a)(function(){return{progress:{position:"absolute",top:"45%",left:"45%",height:"50vh"}}}),A=Object(n.lazy)(function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,162))}),B=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=c.a.useState(null),i=Object(u.a)(o,2),m=i[0],f=i[1],b=c.a.useState(!0),g=Object(u.a)(b,2),w=g[0],v=g[1],E=c.a.useState("disabled"),S=Object(u.a)(E,2),N=S[0],k=S[1],y=function(){z.a.get(m).then(function(e){return r(e.data.articles)})};Object(n.useEffect)(function(){I.get().then(function(e){return r(e.data.articles)})},[]);var x=function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:z.a.get(W.a.EveryThing+t).then(function(e){return r(e.data.articles)}),f(W.a.EveryThing+t),v(!1),k("active");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),j=function(e){switch(e){case"Home":z.a.get(W.a.HomeNews).then(function(e){return r(e.data.articles)}),f(W.a.HomeNews),v(!1),k("active");break;case"Technology":z.a.get(W.a.TechEndpoint).then(function(e){return r(e.data.articles)}),f(W.a.TechEndpoint),v(!1),k("active");break;case"TechCrunch":r([]),z.a.get(W.a.techcrunch).then(function(e){return r(e.data.articles)}),f(W.a.techcrunch),v(!1),k("active");break;case"TechRadar":z.a.get(W.a.techradar).then(function(e){return r(e.data.articles)}),f(W.a.techradar),v(!1),k("active");break;case"NextWeb":z.a.get(W.a.NextWeb).then(function(e){return r(e.data.articles)}),f(W.a.NextWeb),v(!1),k("active")}},C=L();return c.a.createElement(h.a,null,c.a.createElement(n.Suspense,{fallback:c.a.createElement(d.a,{className:C.progress,color:"primary"})},c.a.createElement(p.c,null,c.a.createElement(p.a,{render:function(){return c.a.createElement("div",null,c.a.createElement(R,{ArticleCount:a.length,NewSource:j,reload:y,reloadState:w,reloadCSS:N,onSearchSubmit:x}),c.a.createElement(A,{news:a}))}}))))};o.a.render(c.a.createElement(B,null),document.querySelector("#root"))},14:function(e,t){var a="4902b5f3a0f34f279787e3215f86183f",n="https://newsapi.org/v2/top-headlines?category=technology&country=gb&country=us&apiKey=".concat(a,"&pageSize=40"),c="https://newsapi.org/v2/top-headlines?apiKey=".concat(a,"&pageSize=40&sources=techcrunch, techradar, hacker-news, the-verge, wired, the-next-web"),r="https://newsapi.org/v2/top-headlines?apiKey=".concat(a,"&pageSize=40&sources=techcrunch"),o="https://newsapi.org/v2/top-headlines?apiKey=".concat(a,"&pageSize=40&sources=techradar"),i="https://newsapi.org/v2/top-headlines?apiKey=".concat(a,"&pageSize=40&sources=the-next-web"),s="https://newsapi.org/v2/everything?apiKey=".concat(a,"&q="),l="https://newsapi.org/v2/top-headlines?apiKey=".concat(a,"&pageSize=40&sources=techcrunch, techradar, hacker-news, the-verge, wired");e.exports={API:a,TechEndpoint:n,HomeNews:c,techcrunch:r,techradar:o,backUp:l,NextWeb:i,EveryThing:s}},75:function(e,t,a){e.exports=a(116)},84:function(e,t,a){}},[[75,1,2]]]);