(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[4],{159:function(a,e,t){},163:function(a,e,t){"use strict";t.r(e);var n=t(21),r=t(26),o=t(0),c=t.n(o),i=t(113),l=t(164),m=t(165),s=t(166),u=t(167),p=t(168),d=t(148),h=t(169),g=t(170),b=t(151),f=t(171),E=t(172),v=t(160),x=t.n(v),j=t(161),O=t.n(j),T=t(4),S=(t(159),Object(i.a)((function(a){return{card:Object(r.a)({maxWidth:"100%",marginBottom:"5vh"},a.breakpoints.up("md"),{position:"relative",marginRight:"25%",marginLeft:"25%",marginBottom:"10vh"}),media:{height:0,paddingTop:"56.25%"},button:{},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:a.transitions.create("transform",{duration:a.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},main:{marginTop:"84px"}}})));e.default=function(a){var e,t=a.news,o=S(),i=c.a.useState(!1),v=Object(n.a)(i,2),j=v[0],k=v[1],w=t.map((function(a,t){e="article-".concat(t);var n,i=a.author?"".concat(a.author," from"):"",E=null!==a.content?a.content.replace(/[\\+[0-9]{0,10} chars]$/gi,""):"Please visit page to see content",v=a.source.name.match(/^\S/),S=a.publishedAt.replace(/(T\d{0,2}.\d{0,2}.\d{0,2}.\d{0,100}Z)$/,"").split("-").reverse().join("-"),w=Math.floor(16777215*Math.random()).toString(16);a.urlToImage&&(a.urlToImage.match(/https/)||(n=a.urlToImage.replace(/(http)/,"https")));return null===a.urlToImage&&(a.urlToImage="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjYxNjQ5fQ"),c.a.createElement(l.a,{className:o.card,key:e},c.a.createElement(m.a,{avatar:c.a.createElement(s.a,{"aria-label":"Source",style:{backgroundColor:"#".concat(w)}},v),title:a.title,subheader:"".concat(i," ").concat(a.source.name," - Published on ").concat(S)}),c.a.createElement(u.a,{className:o.media,image:n||a.urlToImage,title:a.title}),c.a.createElement(p.a,null,c.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},a.description)),c.a.createElement(h.a,{disableSpacing:!0},c.a.createElement(g.a,{"aria-label":"Share",onClick:function(){navigator.share?navigator.share({title:"".concat(a.title),url:"".concat(a.url)}):console.log("n/a")}},c.a.createElement(x.a,null)),c.a.createElement(b.a,{variant:"outlined",href:a.url,target:"_self",className:o.button},"Visit page"),c.a.createElement(g.a,{className:Object(T.a)(o.expand,Object(r.a)({},o.expandOpen,j)),onClick:function(a){k(!j)},"aria-expanded":j,"aria-label":"Show more"},c.a.createElement(O.a,null))),c.a.createElement(f.a,{in:j,timeout:"auto",unmountOnExit:!0},c.a.createElement(p.a,null,c.a.createElement(d.a,{paragraph:!0},E))))}));return c.a.createElement("div",{className:o.main},c.a.createElement(E.a,{container:!0},c.a.createElement(E.a,{item:!0,xs:12,md:12},w)))}}}]);