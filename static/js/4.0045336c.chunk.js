(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{122:function(a,e,t){"use strict";t.r(e);var n=t(103),r=t(44),c=t(0),o=t.n(c),l=t(94),i=t(134),m=t(123),s=t(125),u=t(126),d=t(127),p=t(124),E=t(128),g=t(129),b=t(130),h=t(133),f=t(131),v=t(21),x=t(111),w=t.n(x),O=t(112),k=t.n(O),N=t(22),S=Object(l.a)(function(a){return{card:{maxWidth:"100%",marginBottom:"5%"},media:{height:0,paddingTop:"56.25%"},button:{},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:a.transitions.create("transform",{duration:a.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:v.a[500]}}});e.default=function(a){var e,t=a.news,c=S(),l=o.a.useState(!1),v=Object(r.a)(l,2),x=v[0],O=v[1],j=t.map(function(a,t){e="article-".concat(t);var r=a.author?"".concat(a.author," from"):"",l=null!==a.content?a.content.replace(/[\\+[0-9]{0,10} chars]$/gi,""):"Please visit page to see content";return o.a.createElement(i.a,{className:c.card,key:e},o.a.createElement(m.a,{avatar:o.a.createElement(s.a,{"aria-label":"Recipe",className:c.avatar},"R"),title:a.title,subheader:"".concat(r," ").concat(a.source.name)}),o.a.createElement(u.a,{className:c.media,image:a.urlToImage,title:a.title}),o.a.createElement(d.a,null,o.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},a.description)),o.a.createElement(E.a,{disableSpacing:!0},o.a.createElement(g.a,{"aria-label":"Share",onClick:function(){navigator.share?navigator.share({title:"".concat(a.title),url:"".concat(a.url)}):console.log("n/a")}},o.a.createElement(w.a,null)),o.a.createElement(b.a,{variant:"outlined",href:a.url,target:"_self",className:c.button},"Visit page"),o.a.createElement(g.a,{className:Object(N.a)(c.expand,Object(n.a)({},c.expandOpen,x)),onClick:function(a){O(!x)},"aria-expanded":x,"aria-label":"Show more"},o.a.createElement(k.a,null))),o.a.createElement(h.a,{in:x,timeout:"auto",unmountOnExit:!0},o.a.createElement(d.a,null,o.a.createElement(p.a,{paragraph:!0},l))))});return o.a.createElement("div",{className:""},o.a.createElement(f.a,{container:!0},o.a.createElement(f.a,{item:!0,xs:12,md:8},j)))}}}]);