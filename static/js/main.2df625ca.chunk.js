(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,n){e.exports=n(82)},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),o=n.n(c),u=n(43),l=n(45),s=n(12),i=n(93),f=n(94),p=n(44),b=n.n(p).a.create({baseURL:"https://newsapi.org/v2/top-headlines?category=technology&country=gb&country=us&apiKey=".concat("4902b5f3a0f34f279787e3215f86183f","&pageSize=40")}),m=Object(i.a)(function(){return{progress:{position:"absolute",top:"45%",left:"45%",height:"50vh"}}}),d=Object(a.lazy)(function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,120))}),g=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)(function(){b.get().then(function(e){return c(e.data.articles)})},[]);var o=function(){b.get().then(function(e){return c(e.data.articles)})},i=m();return r.a.createElement(l.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(f.a,{className:i.progress,color:"primary"})},r.a.createElement(s.c,null,r.a.createElement(s.a,{render:function(){return r.a.createElement(d,{news:n,reload:o})}}))))};o.a.render(r.a.createElement(g,null),document.querySelector("#root"))}},[[50,1,2]]]);