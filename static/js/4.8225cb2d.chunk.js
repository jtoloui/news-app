(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{120:function(a,e,t){"use strict";t.r(e);var n=t(102),r=t(43),o=t(0),c=t.n(o),l=t(93),i=t(132),m=t(121),s=t(123),u=t(124),d=t(125),p=t(122),g=t(126),h=t(127),E=t(128),b=t(131),f=t(129),v=t(110),x=t.n(v),w=t(111),S=t.n(w),k=t(21),O=Object(l.a)(function(a){return{card:{maxWidth:"100%",marginBottom:"5%"},media:{height:0,paddingTop:"56.25%"},button:{},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:a.transitions.create("transform",{duration:a.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}});e.default=function(a){var e,t=a.news,o=a.reload,l=O(),v=c.a.useState(!1),w=Object(r.a)(v,2),N=w[0],T=w[1],j=t.map(function(a,t){e="article-".concat(t);var r,o=a.author?"".concat(a.author," from"):"",f=null!==a.content?a.content.replace(/[\\+[0-9]{0,10} chars]$/gi,""):"Please visit page to see content",v=a.source.name.match(/^\S/),w=Math.floor(16777215*Math.random()).toString(16);return a.urlToImage&&(a.urlToImage.match(/https/)||(r=a.urlToImage.replace(/(http)/,"https"))),c.a.createElement(i.a,{className:l.card,key:e},c.a.createElement(m.a,{avatar:c.a.createElement(s.a,{"aria-label":"Source",style:{backgroundColor:"#".concat(w)}},v),title:a.title,subheader:"".concat(o," ").concat(a.source.name)}),c.a.createElement(u.a,{className:l.media,image:a.urlToImage||r,title:a.title}),c.a.createElement(d.a,null,c.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},a.description)),c.a.createElement(g.a,{disableSpacing:!0},c.a.createElement(h.a,{"aria-label":"Share",onClick:function(){navigator.share?navigator.share({title:"".concat(a.title),url:"".concat(a.url)}):console.log("n/a")}},c.a.createElement(x.a,null)),c.a.createElement(E.a,{variant:"outlined",href:a.url,target:"_self",className:l.button},"Visit page"),c.a.createElement(h.a,{className:Object(k.a)(l.expand,Object(n.a)({},l.expandOpen,N)),onClick:function(a){T(!N)},"aria-expanded":N,"aria-label":"Show more"},c.a.createElement(S.a,null))),c.a.createElement(b.a,{in:N,timeout:"auto",unmountOnExit:!0},c.a.createElement(d.a,null,c.a.createElement(p.a,{paragraph:!0},f))))});return c.a.createElement("div",{className:""},c.a.createElement("button",{onClick:o},"Reload"),c.a.createElement(f.a,{container:!0},c.a.createElement(f.a,{item:!0,xs:12,md:8},j)))}}}]);