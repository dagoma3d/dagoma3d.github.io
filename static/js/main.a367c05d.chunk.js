(this.webpackJsonpnotices_dagoma=this.webpackJsonpnotices_dagoma||[]).push([[0],{44:function(e,t,n){e.exports=n(74)},59:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),l=n.n(r),o=n(9),i=n(4),u=n(79),m=n(76),s=n(2);n(59);var f=function(){var e=Object(s.b)(),t=e.t,n=e.i18n,r=function(e){n.changeLanguage(e)},l=function(e){return{e:r("en"),f:r("fr")}[e.key]};return Object(a.useEffect)((function(){document.title=t("Notices de montage et d'utilisation")})),c.a.createElement(u.a,{sticky:"top",bg:"gray",className:"p-0"},c.a.createElement(m.a,null,c.a.createElement(u.a.Brand,null,c.a.createElement(o.b,{to:{pathname:"/"},onClick:function(){return document.body.scrollIntoView({behavior:"smooth"})}},c.a.createElement("i",{className:"fa fa-home"}))),c.a.createElement(u.a.Toggle,null),c.a.createElement(u.a.Text,null,c.a.createElement("span",{onClick:function(){return r("en")},onKeyPress:l,role:"button",tabIndex:0},"en")," ","|"," ",c.a.createElement("span",{onClick:function(){return r("fr")},onKeyPress:l,role:"button",tabIndex:-1},"fr"))))},E=n(5),b=n(78),d=n(77);n(64);function p(e){var t=e.to,n=e.href,a=e.src,r=e.title,l=e.onClick,i=Object(s.b)().t,u=t?o.b:"a";return c.a.createElement(d.a,{as:"article",xl:3},c.a.createElement("div",{className:"Pictogram"},c.a.createElement(u,{to:t,href:n,onClick:l},c.a.createElement("div",null,c.a.createElement("img",{src:"/pictos/".concat(a,".svg"),alt:i(r)})),c.a.createElement("h4",{className:"text-center font-weight-bold text-uppercase"},i(r)))))}p.defaultProps={src:"addon",title:"",onClick:null};var v=p;n(65);function g(e){var t=e.printer,n=Object(a.useState)(!1),r=Object(E.a)(n,2),l=r[0],i=r[1],u=Object(a.useRef)(null),f=Object(s.b)().t;return Object(a.useEffect)((function(){u.current&&u.current.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[l]),["magis","neva"].includes(t.toLowerCase())?c.a.createElement(m.a,{ref:u},c.a.createElement(b.a,{className:"py-3"},c.a.createElement(d.a,null,c.a.createElement("p",{className:"text-center"},c.a.createElement(o.b,{to:"/",className:"link-classic",onClick:function(){return i(!l)}},f("Comment v\xe9rifier la version de votre Neva ?"))))),c.a.createElement(b.a,{className:l?null:"hidden"},c.a.createElement(d.a,null,c.a.createElement("p",{className:"text-center font-weight-bold"},f("Magis : Num\xe9ro de s\xe9rie > 6000")),c.a.createElement("p",{className:"text-center font-weight-bold"},f("Neva : Num\xe9ro de s\xe9rie < 6000 ou pas de num\xe9ro de s\xe9rie")),c.a.createElement("figure",null,c.a.createElement("img",{src:"/img/home/n-serie-neva.jpg",alt:f("Trouver num\xe9ro de s\xe9rie de ma Neva")}))))):null}g.defaultProps={printer:""};var h=g;var N=function(e){var t=e.choice,n=Object(a.useRef)(null),r=Object(s.b)().t;return Object(a.useEffect)((function(){n.current&&n.current.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[t]),t?c.a.createElement("div",{ref:n},c.a.createElement(m.a,{fluid:!0,as:"section",className:"bg-light-grey"},c.a.createElement(m.a,null,c.a.createElement(b.a,null,c.a.createElement(d.a,{className:"py-3"},c.a.createElement("h4",{className:"text-center font-weight-bold text-uppercase"},r(t.title)))),c.a.createElement(b.a,{className:"justify-content-md-center"},t.options.map((function(e,t){return c.a.createElement(v,{key:t,to:e.to,href:e.href,src:e.src,title:e.title})})))),c.a.createElement(h,{printer:t.title}))):null};var j=function(e){var t=e.content,n=Object(a.useState)(),r=Object(E.a)(n,2),l=r[0],o=r[1];return t?c.a.createElement(a.Fragment,null,c.a.createElement(m.a,{as:"section"},c.a.createElement(b.a,null,t.map((function(e,t){return c.a.createElement(v,{key:t,to:e.to,href:e.href,src:e.src,title:e.title,onClick:function(){return o(t)}})})))),c.a.createElement(N,{choice:t[l]})):null};n(66);function y(e){var t=e.content,n=e.italic,a=e.frame,r=e.warning,l=e.bold,o=Object(s.b)().t;if(!t)return null;if(Array.isArray(t))return t.map((function(e,t){return c.a.createElement(y,{key:t,content:e})}));var i=[];return n&&i.push("font-italic"),l&&i.push("font-weight-bold"),a&&i.push("bg-orange text-white p-3"),r&&i.push("text-danger"),c.a.createElement("p",{className:i.join(" ")},o(t))}function x(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("h5",{className:"font-weight-bold text-uppercase"},n(t)):null}function O(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("h1",{className:"font-weight-bold text-uppercase"},n(t)):null}function k(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("ul",{className:"list-classic"},t.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("p",{className:"text-left"},"string"===typeof e?n(e):c.a.createElement(K,{key:t,content:e})))}))):null}function w(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("ol",{type:"1",className:"list-classic"},t.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("p",{className:"text-left"},"string"===typeof e?n(e):c.a.createElement(K,{key:t,content:e})))}))):null}function S(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("ol",{type:"A",className:"list-classic"},t.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("p",{className:"text-left"},"string"===typeof e?n(e):c.a.createElement(K,{key:t,content:e})))}))):null}function C(e){var t=e.content;return t?c.a.createElement("div",{className:"bg-orange p-3"},t.map((function(e,t){return c.a.createElement(K,{key:t,content:e,frame:!0})}))):null}function I(e){var t=e.text,n=e.color,a=e.to,r=e.href,l=e.download,i=e.label,u=e.position,m=Object(s.b)().t;if(!a&&!r)return null;var f=function(e){var t={white:"new-btn btn-classic btn-grey btn-wide",orange:"new-btn btn-valid btn-wide",default:"link-classic"};return t[e]||t.default},E=t?"".concat(m(t)," "):null,b=t?".":null,d=a?c.a.createElement(o.b,{to:a,className:f(n),download:l},m(i)):c.a.createElement("a",{href:r,className:f(n),download:l,target:"_blank",rel:"noopener noreferrer"},m(i));return c.a.createElement("p",{className:function(e){var t={left:"text-left",center:"text-center",right:"text-right",default:"text-left"};return t[e]||t.default}(u)},E,d,b)}function P(e){var t=e.content;return t?c.a.createElement("div",{className:"col-xl-10 col-xl-offset-7 col-s-10 col-s-offset-7 mb-5"},t.map((function(e,t){return c.a.createElement(K,{key:t,content:e})}))):null}function F(e){var t=e.content,n=Object(s.b)().t;return t?t.map((function(e,t){return c.a.createElement("p",{className:"text-left mb-3",key:t},n(e))})):null}function L(e){var t=e.content,n=Object(s.b)().t;if(!t)return null;function a(e){var a=e.type;return t[a]?c.a.createElement(d.a,{className:Object.keys(t).length>1?"text-center ".concat(a):"text-left"},c.a.createElement("div",{className:"help-container align-items-center"},c.a.createElement("div",null,c.a.createElement("img",{height:"50px",src:"/pictos/".concat(a,".png"),alt:"".concat(a)})),c.a.createElement("p",{className:"text-justify font-weight-bold m-0"},n(t[a])))):null}return c.a.createElement(b.a,null,c.a.createElement(a,{type:"quick_tips"}),c.a.createElement(a,{type:"danger"}))}function M(e){var t=e.content,n=t.text,r=t.id,l=Object(s.b)().t,o=Object(a.useState)(!1),i=Object(E.a)(o,2),u=i[0],m=i[1];return c.a.createElement("section",null,c.a.createElement("p",{className:"text-left mb-3"},c.a.createElement("button",{className:"new-btn btn-classic btn-grey btn-wide btn-show-video",type:"button",onClick:function(){return m(!u)}},l("Lire la vid\xe9o"))),c.a.createElement(F,{content:n}),c.a.createElement("section",{className:"block-video block-video-hidden ".concat(u?"active":null),style:{border:"none"}},c.a.createElement("div",{className:"block-video-yt"},c.a.createElement("iframe",{title:r,src:"https://www.youtube.com/embed/".concat(r),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),c.a.createElement("i",{className:"fa fa-times-circle-o close-video",onClick:function(){return m(!u)},onKeyPress:function(e){"s"===e.key&&m(!u)},tabIndex:0,role:"button"},c.a.createElement("span",null,"s")))))}function K(e){var t=e.content;if(!t)return null;var n=Object(E.a)(Object.entries(t)[0],2),a=n[0],r=n[1];if(!r)return null;var l={container:c.a.createElement(P,{content:r}),pretitle:c.a.createElement(x,{content:r}),title:c.a.createElement(O,{content:r}),text:c.a.createElement(y,{content:r}),bold:c.a.createElement(y,{content:r,bold:!0}),italic:c.a.createElement(y,{content:r,italic:!0}),warning:c.a.createElement(y,{content:r,warning:!0}),list:c.a.createElement(k,{content:r}),"numbered-list":c.a.createElement(w,{content:r}),"lettered-list":c.a.createElement(S,{content:r}),help:c.a.createElement(L,{content:r}),frame:"string"===typeof r?c.a.createElement(y,{content:r,frame:!0}):c.a.createElement(C,{content:r}),button:c.a.createElement(I,{text:r.text,color:r.color,to:r.to,href:r.href,download:r.download,label:r.label,position:r.position}),video:c.a.createElement(M,{content:r}),default:null};return l[a]||l.default}I.defaultProps={label:"ici"};var B=K;n(67);function T(e){var t=e.content,n=Object(s.b)().t;return t?t.map((function(e,t){return c.a.createElement("h5",{className:"font-weight-bold text-uppercase",key:t},n(e))})):null}function R(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("h1",{className:"font-weight-bold text-uppercase"},n(t)):null}function U(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("p",{className:"font-weight-light font-italic"},n(t)):null}function V(e){var t=e.content;return t?t.map((function(e,t){return c.a.createElement(B,{key:t,content:e})})):null}function _(e){var t=e.content,n=e.validationUrl,r=Object(s.b)().t;if(!n)return null;var l=t&&t.text?t.text:"Je valide cette \xe9tape";return c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"checkbox-classic checkbox-full-width",onClick:function(){setTimeout((function(){document.querySelector("a[href='".concat(n,"']")).click()}),300)},onKeyPress:function(e){"c"===e.key&&setTimeout((function(){document.querySelector("a[href='".concat(n,"']")).click()}),300)},tabIndex:0,role:"button"},c.a.createElement("input",{id:"yo",type:"checkbox"}),c.a.createElement("label",{className:"valid-step",htmlFor:"yo"},r(l))),c.a.createElement(o.b,{to:n}))}function q(e){var t=e.content,n=e.validationUrl;if(!t)return null;var a=t.flip,r=t.img,l=t.title,o=t.subtitle,i=t.text,u=t.items,s=t.note,f=t.validation,E=a?"ribbon-text-left":"ribbon-text-right";return c.a.createElement(m.a,{fluid:!0,as:"section"},c.a.createElement(b.a,{className:"align-items-center"},c.a.createElement(d.a,{className:"notice-mask px-0"},c.a.createElement("figure",{className:"mb-0"},c.a.createElement("img",{src:"/img/".concat(r),alt:""})),c.a.createElement("section",{className:"ribbon-text ".concat(E)},c.a.createElement(T,{content:l}),c.a.createElement(R,{content:o}),c.a.createElement(B,{content:{text:i}}),c.a.createElement(V,{content:u}),c.a.createElement(_,{content:f,validationUrl:n}),c.a.createElement(U,{content:s})))))}q.defaultProps={flip:!1};var z=q;function A(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement(b.a,null,c.a.createElement(d.a,null,c.a.createElement("h1",{className:"text-center font-weight-bold text-uppercase"},n(t)))):null}function J(e){var t=e.content,n=e.small,a=Object(s.b)().t;if(!t)return null;var r=n?1===t.length?["py-3"]:["pt-3","pb-3"]:null;return c.a.createElement(b.a,null,c.a.createElement(d.a,null,t.map((function(e,t){return function(e,t){return"string"===typeof e?c.a.createElement("p",{key:t,className:"mb-0 text-center ".concat(r?r[t]:null)},a(e)):c.a.createElement(B,{content:e})}(e,t)}))))}function D(e){var t=e.content;return t?t.map((function(e,t){return c.a.createElement(B,{key:t,content:e})})):null}function W(e){var t=e.content,n=e.small;if(!t)return null;var a=t.title,r=t.subtitle,l=t.background,o=t.items,i=function(e){var t={default:"bg-gradient-orange",grey:"bg-light-grey",transparent:" "};return t[e]||t.default},u=n?"".concat(i(l)):"py-5 ".concat(i(l));return c.a.createElement(m.a,{fluid:!0,as:"section",className:u},c.a.createElement(A,{content:a}),c.a.createElement(J,{small:n,content:r}),c.a.createElement(D,{content:o}))}W.defaultProps={small:!1};var G=W;var H=function(){var e=Object(a.useState)(),t=Object(E.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("./content/home.json").then((function(e){e.json().then((function(e){r(e)}))}))}),[]),n?c.a.createElement(a.Fragment,null,c.a.createElement(z,{content:n.header}),c.a.createElement(G,{content:n.title}),c.a.createElement(j,{content:n.choices})):null};n(68);function Q(e){var t=e.id,n=e.children;return c.a.createElement("div",{className:"block-video-yt"},n,c.a.createElement("iframe",{title:t,src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}function X(e){var t=e.small,n=e.src,a=t?"notice-small-img text-center":null;return c.a.createElement("figure",{className:a},c.a.createElement("img",{src:"/img/".concat(n),alt:""}))}var Y=function(e){var t=e.content,n=e.position,a=t.id,r=t.src,l=t.small,o=t.color,i="bg-".concat(o||"white"),u=null;return a?u=c.a.createElement(Q,{id:a}):r&&(u=c.a.createElement(X,{small:l||"anthracite"===o,src:r})),c.a.createElement(d.a,{className:"media-arrow media-arrow-".concat(n," col-xl-6 ").concat(i," px-0")},u)};function Z(e){var t=e.content;return c.a.createElement(d.a,{className:"col-xl-6 px-0"},c.a.createElement("div",{className:"py-3 px-5"},t.map((function(e,t){return c.a.createElement(B,{key:t,content:e})}))))}var $=function(e){var t=e.index,n=e.content,r=n.id,l=n.media,o=n.article,i=t%2===0?c.a.createElement(a.Fragment,null,c.a.createElement(Z,{content:o}),c.a.createElement(Y,{content:l,position:"right"})):c.a.createElement(a.Fragment,null,c.a.createElement(Y,{content:l,position:"left"}),c.a.createElement(Z,{content:o}));return c.a.createElement(m.a,{fluid:!0,as:"section",id:r,className:"height-350 bg-light-grey"},c.a.createElement(b.a,{className:"align-items-center"},i))};var ee=function(e){var t=e.content,n=t.title,r=t.id,l=t.children,o=Object(s.b)().t,i=Object(a.useRef)(),u=Object(a.useRef)();return Object(a.useEffect)((function(){u.current.height=i.current.clientWidth/2}),[u]),c.a.createElement(m.a,{ref:i},c.a.createElement(b.a,null,c.a.createElement(d.a,null,c.a.createElement("h1",{className:"text-center font-weight-bold"},o(n)))),c.a.createElement(b.a,null,c.a.createElement(d.a,null,c.a.createElement("iframe",{ref:u,title:n,align:"middle",frameBorder:"0",width:"100%",src:"https://docs.google.com/presentation/d/".concat(r,"/embed?start=false&amp;loop=false&amp;delayms=3000")}))),c.a.createElement(b.a,null,c.a.createElement(d.a,null,l)))};n(69);function te(e){var t=e.content,n=e.onMouseEnter,a=e.onMouseLeave,r=t.type,l=t.top,o=t.left,i=t.title,u=Object(s.b)().t;return c.a.createElement("div",{className:r?"zone zone-".concat(r):"zone",style:{top:l,left:o},title:u(i),onMouseEnter:n,onMouseLeave:a})}function ne(e){var t=e.list,n=Object(s.b)().t;return t?c.a.createElement("ul",{className:"list-classic"},t.map((function(e,t){return c.a.createElement("li",{key:t,className:"text-left"},n(e))}))):null}function ae(e){var t=e.content,n=Object(s.b)().t;if(!t)return null;var a=t.messages,r=t.list;return c.a.createElement(m.a,null,c.a.createElement(b.a,null,c.a.createElement(d.a,{className:"Interface-description"},a.map((function(e,t){return c.a.createElement("span",{key:t},n(e))})),c.a.createElement(ne,{list:r}))))}var ce=function(){var e=Object(a.useState)(),t=Object(E.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(),o=Object(E.a)(l,2),i=o[0],u=o[1];return Object(a.useEffect)((function(){fetch("/content/cura-by-dagoma/interface.json").then((function(e){e.json().then((function(e){r(e.items)}))}))}),[]),n?c.a.createElement(m.a,{fluid:!0,as:"section",className:"py-5 bg-gradient-orange"},c.a.createElement(m.a,null,c.a.createElement(b.a,{className:"mb-5 mx-auto"},c.a.createElement(d.a,{className:"container-interface px-0"},c.a.createElement("img",{src:"/img/Cura/Notice/e-interface-cura.jpg",alt:"Interface Cura by Dagoma"}),n.map((function(e,t){return c.a.createElement(te,{key:t,content:e.bubble,onMouseEnter:function(){return u(e.description)},onMouseLeave:function(){return u()}})}))))),c.a.createElement(ae,{content:i})):null};n(70);var re=function(){var e=Object(a.useState)(),t=Object(E.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(!1),o=Object(E.a)(l,2),i=o[0],u=o[1],f=Object(s.b)().t;Object(a.useEffect)((function(){fetch("/content/magis/slide.json").then((function(e){e.json().then((function(e){r(e)}))}))}),[]);var b=function(e){"t"===e.key&&u(!i)};if(!n)return null;var d=n.left,p=n.right;return c.a.createElement(m.a,{fluid:!0,as:"section",className:"moving-banner-top"},c.a.createElement("article",{className:"".concat(i?"covered":"hover")},c.a.createElement("figure",null,c.a.createElement("div",{className:"hover-tap text-center"},c.a.createElement("i",{className:"fa fa-hand-pointer-o",onClick:function(){return u(!i)},onKeyPress:b,tabIndex:0,role:"button"},c.a.createElement("span",null,"t"))),c.a.createElement("img",{src:"/img/".concat(d.img),alt:f(d.title)}),c.a.createElement("figcaption",{className:"error"},c.a.createElement("h3",{className:"text-uppercase text-left font-weight-bold"},c.a.createElement("i",{className:"fa fa-times-circle-o text-danger","aria-hidden":"true"}),f(d.title)),c.a.createElement("p",{className:"text-left"},f(d.text))))),c.a.createElement("article",{className:"".concat(i?"hover":"covered")},c.a.createElement("figure",null,c.a.createElement("div",{className:"hover-tap text-center"},c.a.createElement("i",{className:"fa fa-hand-pointer-o",onClick:function(){return u(!i)},onKeyPress:b,tabIndex:0,role:"button"},c.a.createElement("span",null,"t"))),c.a.createElement("img",{src:"/img/".concat(p.img),alt:f(p.title)}),c.a.createElement("figcaption",{className:"valid"},c.a.createElement("h3",{className:"text-uppercase text-left font-weight-bold"},c.a.createElement("i",{className:"fa fa-times-circle-o text-success","aria-hidden":"true"}),f(p.title)),c.a.createElement("p",{className:"text-left"},f(p.text))))))};var le=function(e){var t=e.index,n=e.content,a={interface:c.a.createElement(ce,null),slide:c.a.createElement(re,null),banner:c.a.createElement(G,{content:n}),"google-document":c.a.createElement(ee,{content:n}),item:c.a.createElement(B,{content:n}),default:c.a.createElement($,{index:t,content:n})};return a[n.type]||a.default};n(71);function oe(e){var t=e.img;return t?c.a.createElement("figure",null,c.a.createElement("img",{src:"/img/".concat(t),alt:""})):null}function ie(e){var t=Object(s.b)().t,n=e.active,a=e.href,r=e.label,l=e.img;return c.a.createElement("li",{className:"new-btn btn-classic btn-grey step ".concat(n?"active":"")},c.a.createElement("a",{className:"btn-wide btn-big",href:a},t(r),c.a.createElement(oe,{img:l})))}var ue=function(e){var t=e.nav,n=e.active,r=Object(a.useState)(!1),l=Object(E.a)(r,2),o=l[0],i=l[1];return t?c.a.createElement("nav",{className:"nav-vertical ".concat(o?"opened":"closed")},c.a.createElement("div",{className:"border-nav"},c.a.createElement("p",null,"Navigation")),c.a.createElement("ul",{className:"notice-step lsn text-center"},t.map((function(e,t){return c.a.createElement(ie,{key:t,href:e.href,label:e.label,img:e.img,active:n===t})}))),c.a.createElement("button",{className:"toggle-nav",onClick:function(){return i(!o)},type:"button"},c.a.createElement("i",{className:"fa fa-arrow-right"}))):null};var me=function(e){var t=e.content||"?";return c.a.createElement(a.Fragment,null,c.a.createElement("h1",null,"404"),c.a.createElement("p",null,t))};function se(e){var t=e.content;return t?t.map((function(e,t){return c.a.createElement(le,{key:t,index:t,content:e})})):null}var fe=function(){var e=Object(a.useState)(),t=Object(E.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(),o=Object(E.a)(l,2),u=o[0],m=o[1],s=Object(a.useState)(),f=Object(E.a)(s,2),b=f[0],d=f[1],p=Object(i.f)();return Object(a.useEffect)((function(){var e=["/content".concat(p.url,".json"),"/content".concat(p.url,"/0.json")];fetch(e[0]).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(){fetch(e[1]).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return r({error:e.message})}))}))}),[p]),Object(a.useEffect)((function(){var e=Object.values(p.params).filter((function(e){return void 0!==e})),t=["/nav/".concat(e.join("/"),".json")];e.pop(),t.push("/nav/".concat(e.join("/"),".json"));var n=function(e){m(e);for(var t=0;t<e.length;t+=1)if(e[t].href===p.url){d(t);break}};fetch(t[0]).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(){fetch(t[1]).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(){return m()}))}))}),[p]),n?n.error?c.a.createElement(me,{content:n.error}):c.a.createElement(a.Fragment,null,c.a.createElement(ue,{nav:u,active:b}),c.a.createElement(G,{small:!0,content:n.time}),c.a.createElement(z,{content:n.header}),c.a.createElement(G,{content:n.title}),c.a.createElement(j,{content:n.choices}),c.a.createElement(se,{content:n.blocks}),c.a.createElement(z,{content:n.footer,validationUrl:u?b<u.length-1?u[b+1].href:void 0:null})):null};n(72),n(73);function Ee(){return c.a.createElement(o.a,null,c.a.createElement(f,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:H}),c.a.createElement(i.a,{path:"/:p0/:p1?/:p3?",component:fe}),c.a.createElement(i.a,{component:me})))}var be=n(28),de=n(42),pe=n(40);be.a.use(de.a).use(pe.a).use(s.a).init({fallbackLng:"fr",debug:!1,nsSeparator:!1,keySeparator:!1,interpolation:{escapeValue:!1},react:{useSuspense:!1}});be.a;l.a.render(c.a.createElement(Ee,null),document.getElementById("app"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a367c05d.chunk.js.map