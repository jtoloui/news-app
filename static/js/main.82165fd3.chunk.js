(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),i=a(33),l=a(59),s=a(23),u=a(131),f=a(136),h=a(41),p=a(132),m=a(133),d=a(134),g=a(135),w=a(137),b=a(140),E=Object(u.a)(function(e){return{NavBar:{textAlign:"center",maxHeight:"64px"},title:Object(h.a)({fontSize:"1rem",flexGrow:1,display:"block"},e.breakpoints.up("sm"),{display:"block"}),dropDown:Object(h.a)({fontSize:"13px",marginLeft:4,padding:"0 10px",position:"relative",color:"#fff"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"})}}),v=function(e){var t=e.results,a=e.TechNews,n=e.HomeNews,r=e.techcrunch,o=e.techradar,l=E(),s=c.a.useState(null),u=Object(i.a)(s,2),f=u[0],h=u[1],v=c.a.useState("Home"),k=Object(i.a)(v,2),y=k[0],N=k[1];return c.a.createElement(p.a,null,c.a.createElement(m.a,{className:l.NavBar},c.a.createElement(d.a,{variant:"h6",className:l.title},"".concat(y," - Search Results ").concat(t)),c.a.createElement(g.a,{variant:"outlined",color:"inherit","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},className:l.dropDown},"Open Menu"),c.a.createElement(w.a,{id:"simple-menu",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:function(){h(null)}},c.a.createElement(b.a,{onClick:function(){n(),N("Home"),h(null)}},"Home"),c.a.createElement(b.a,{onClick:function(){a(),N("Latest Tech News"),h(null)}},"Technology News"),c.a.createElement(b.a,{onClick:function(){r(),N("TechCrunch"),h(null)}},"Techcrunch"),c.a.createElement(b.a,{onClick:function(){o(),N("TechRadar"),h(null)}},"Techradar"))))},k=a(28),y=a.n(k),N=a(29),S=a.n(N),O=y.a.create({baseURL:S.a.HomeNews}),T=Object(u.a)(function(){return{progress:{position:"absolute",top:"45%",left:"45%",height:"50vh"}}}),j=Object(n.lazy)(function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,148))}),H=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){O.get().then(function(e){return r(e.data.articles)})},[]);var o=function(){y.a.get(S.a.TechEndpoint).then(function(e){return r(e.data.articles)})},u=function(){y.a.get(S.a.HomeNews).then(function(e){return r(e.data.articles)})},h=function(){r([]),y.a.get(S.a.techcrunch).then(function(e){return r(e.data.articles)})},p=function(){y.a.get(S.a.techradar).then(function(e){return r(e.data.articles)})},m=T();return c.a.createElement(l.a,null,c.a.createElement(n.Suspense,{fallback:c.a.createElement(f.a,{className:m.progress,color:"primary"})},c.a.createElement(s.c,null,c.a.createElement(s.a,{render:function(){return c.a.createElement("div",null,c.a.createElement(v,{results:a.length,TechNews:o,HomeNews:u,techcrunch:h,techradar:p}),c.a.createElement(j,{news:a}))}}))))};o.a.render(c.a.createElement(H,null),document.querySelector("#root"))},29:function(e,t){e.exports={API:"4902b5f3a0f34f279787e3215f86183f",TechEndpoint:"https://newsapi.org/v2/top-headlines?apiKey=4902b5f3a0f34f279787e3215f86183f&pageSize=40&sources=techcrunch, techradar, hacker-news, the-verge, wired",HomeNews:"https://newsapi.org/v2/top-headlines?category=technology&country=gb&country=us&apiKey=4902b5f3a0f34f279787e3215f86183f&pageSize=40",techcrunch:"https://newsapi.org/v2/top-headlines?apiKey=4902b5f3a0f34f279787e3215f86183f&pageSize=40&sources=techcrunch",techradar:"https://newsapi.org/v2/top-headlines?apiKey=4902b5f3a0f34f279787e3215f86183f&pageSize=40&sources=techradar",backUp:"https://newsapi.org/v2/top-headlines?apiKey=4902b5f3a0f34f279787e3215f86183f&pageSize=40&sources=techcrunch, techradar, hacker-news, the-verge, wired"}},65:function(e,t,a){e.exports=a(103)}},[[65,1,2]]]);