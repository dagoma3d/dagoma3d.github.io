(this.webpackJsonpnotices_dagoma=this.webpackJsonpnotices_dagoma||[]).push([[0],{34:function(e,t,n){e.exports=n(57)},39:function(e,t,n){},40:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(26),r=n.n(l),o=(n(39),n(40),n(5)),i=n(2),s=n(1);var m=function(){var e=Object(s.b)(),t=e.t,n=e.i18n,l=function(e){n.changeLanguage(e)},r=function(e){return{e:l("en"),f:l("fr")}[e.key]};return Object(a.useEffect)((function(){document.title=t("Notices de montage et d'utilisation")})),c.a.createElement("section",{className:"top-lang row"},c.a.createElement("div",{className:"wrap row"},c.a.createElement("div",{className:"left"},c.a.createElement(o.b,{to:{pathname:"/"},onClick:function(){return document.body.scrollIntoView({behavior:"smooth"})}},c.a.createElement("i",{className:"fa fa-home"}))),c.a.createElement("div",{className:"right"},c.a.createElement("span",{className:"language-choice",onClick:function(){return l("en")},onKeyPress:r,role:"button",tabIndex:0},"en")," | ",c.a.createElement("span",{className:"language-choice",onClick:function(){return l("fr")},onKeyPress:r,role:"button",tabIndex:-1},"fr"))))},u=n(3);function f(e){var t=e.to,n=e.src,a=e.title,l=e.onClick,r=Object(s.b)().t;return c.a.createElement("article",{className:"col-xl-6 col-l-8 col-m-12 col-s-24 col-space margin-bottom-box"},c.a.createElement(o.b,{className:"btn-diag-or",to:t,onClick:l},c.a.createElement("div",{className:"btn-diag"},c.a.createElement("img",{src:"/pictos/".concat(n,".svg"),alt:r(a)})),c.a.createElement("h2",null,r(a))))}f.defaultProps={to:"/",src:"addon",title:"",onClick:null};var b=f;function E(e){var t=e.display,n=Object(a.useRef)(null),l=Object(s.b)().t;return Object(a.useEffect)((function(){t&&n.current.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[t]),t?c.a.createElement("div",{className:"block-sub row col-xl-24"},c.a.createElement("div",{className:"col-xl-24 block-white-space"},c.a.createElement("p",{className:"tcenter bold col-vspace"},l("Magis : Num\xe9ro de s\xe9rie > 6000")),c.a.createElement("p",{className:"tcenter bold col-vspace"},l("Neva : Num\xe9ro de s\xe9rie < 6000 ou pas de num\xe9ro de s\xe9rie")),c.a.createElement("figure",{className:"col-xl-18 col-xl-offset-3 col-l-20 col-l-offset-2 col-m-24 col-m-offset-0 col-space"},c.a.createElement("img",{className:"col-xl-24",src:"/img/home/n-serie-neva.jpg",alt:l("Trouver num\xe9ro de s\xe9rie de ma Neva"),ref:n})))):null}function d(e){var t=e.printer,n=Object(a.useState)(!1),l=Object(u.a)(n,2),r=l[0],i=l[1],m=Object(s.b)().t;return["magis","neva"].includes(t.toLowerCase())?c.a.createElement("section",{className:"col-xl-24 col-space row"},c.a.createElement("div",{className:"wrap row"},c.a.createElement("p",{className:"tcenter"},c.a.createElement(o.b,{to:"/",className:"link-classic",onClick:function(){return i(!r)}},m("Comment v\xe9rifier la version de votre Neva ?")))),c.a.createElement(E,{display:r})):null}d.defaultProps={printer:""};var v=d;var p=function(e){var t=e.choice,n=Object(a.useRef)(null),l=Object(s.b)().t;return Object(a.useEffect)((function(){n.current&&n.current.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[t]),t?c.a.createElement("section",{className:"block-sub col-xl-24 bg-light-grey-blue row",ref:n},c.a.createElement("div",{className:"btn-diag-container container no-float wrap row"},c.a.createElement("div",{className:"col-xl-24 col-vspace"},c.a.createElement("p",{className:"big-title tcenter"},l(t.title))),t.options.map((function(e,t){return c.a.createElement(b,{key:t,to:e.to,src:e.src,title:e.title})}))),c.a.createElement(v,{printer:t.title})):null};var g=function(e){var t=e.content,n=Object(a.useState)(),l=Object(u.a)(n,2),r=l[0],o=l[1];return c.a.createElement(a.Fragment,null,c.a.createElement("section",{className:"col-xl-24 row"},c.a.createElement("div",{className:"btn-diag-container container wrap row"},t.map((function(e,t){return c.a.createElement(b,{key:t,to:e.to,src:e.src,title:e.title,onClick:function(){return o(t)}})})))),c.a.createElement(p,{choice:t[r]}))};function h(e){var t=e.content,n=e.italic,a=e.frame,l=e.warning,r=e.bold,o=Object(s.b)().t;if(!t)return null;var i=[];return n&&i.push("italic"),r&&i.push("bold"),a&&i.push("bg-orange text-white col-space"),l&&i.push("text-red"),c.a.createElement("p",{className:i.join(" ")},o(t))}function N(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("h3",{className:"title tleft"},n(t)):null}function w(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("p",{className:"big-title"},n(t)):null}function j(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("ul",{className:"list-classic tleft-child"},t.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("p",null,"string"==typeof e?n(e):c.a.createElement(S,{key:t,content:e})))}))):null}function x(e){var t=e.content;return t?c.a.createElement("div",{className:"bg-orange text-white col-space tleft-child"},t.map((function(e,t){return c.a.createElement(S,{key:t,content:e})}))):null}function y(e){var t=e.text,n=e.color,a=e.to,l=e.href,r=e.download,i=e.label,m=e.position,u=Object(s.b)().t;if(!a&&!l)return null;var f=function(e){var t={white:"new-btn btn-classic btn-grey btn-wide",orange:"new-btn btn-valid btn-wide",default:"link-classic"};return t[e]||t.default},b=t?"".concat(u(t)," "):null,E=t?".":null,d=a?c.a.createElement(o.b,{to:a,className:f(n),download:r},u(i)):c.a.createElement("a",{href:l,className:f(n),download:r,target:"_blank",rel:"noopener noreferrer"},u(i));return c.a.createElement("p",{className:function(e){var t={left:"tleft",center:"tcenter",right:"tright",default:"tleft"};return t[e]||t.default}(m)},b,d,E)}function k(e){var t=e.content;return t?c.a.createElement("div",{className:"col-xl-10 col-xl-offset-7 col-s-10 col-s-offset-7 margin-bottom-shop"},t.map((function(e,t){return c.a.createElement(S,{key:t,content:e})}))):null}function O(e){var t=e.content,n=Object(s.b)().t;return t?t.map((function(e,t){return c.a.createElement("p",{className:"tleft col-vbspace",key:t},n(e))})):null}function C(e){var t=e.content,n=t.text,l=t.id,r=Object(s.b)().t,o=Object(a.useState)(!1),i=Object(u.a)(o,2),m=i[0],f=i[1];return c.a.createElement("section",null,c.a.createElement("p",{className:"tleft col-vbspace"},c.a.createElement("button",{className:"new-btn btn-classic btn-grey btn-wide btn-show-video",type:"button",onClick:function(){return f(!m)}},r("Lire la vid\xe9o"))),c.a.createElement(O,{content:n}),c.a.createElement("section",{className:"col-xl-24 row block-video block-video-hidden ".concat(m?"active":null),style:{border:"none"}},c.a.createElement("div",{className:"block-video-yt"},c.a.createElement("iframe",{title:l,src:"https://www.youtube.com/embed/".concat(l),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),c.a.createElement("div",{className:"close-video"},c.a.createElement("i",{className:"fa fa-close",onClick:function(){return f(!m)},onKeyPress:function(e){"s"===e.key&&f(!m)},tabIndex:0,role:"button"},c.a.createElement("span",null,"s"))))))}function S(e){var t=e.content,n=Object(u.a)(Object.entries(t)[0],2),a=n[0],l=n[1],r={container:c.a.createElement(k,{content:l}),pretitle:c.a.createElement(N,{content:l}),title:c.a.createElement(w,{content:l}),text:c.a.createElement(h,{content:l}),bold:c.a.createElement(h,{content:l,bold:!0}),italic:c.a.createElement(h,{content:l,italic:!0}),warning:c.a.createElement(h,{content:l,warning:!0}),list:c.a.createElement(j,{content:l}),frame:"string"===typeof l?c.a.createElement(h,{content:l,frame:!0}):c.a.createElement(x,{content:l}),button:c.a.createElement(y,{text:l.text,color:l.color,to:l.to,href:l.href,download:l.download,label:l.label,position:l.position}),video:c.a.createElement(C,{content:l}),default:null};return r[a]||r.default}y.defaultProps={label:"ici"},y.defaultProps={label:"ici"};var I=S;function P(e){var t=e.content,n=Object(s.b)().t;return t?t.map((function(e,t){return c.a.createElement("h1",{key:t,className:"title tleft"},n(e))})):null}function F(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("p",{className:"big-title tleft"},n(t)):null}function L(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("p",{className:"small tleft light italic"},n(t)):null}function M(e){var t=e.content;return t?t.map((function(e,t){return c.a.createElement(I,{key:t,content:e})})):null}function K(e){var t=e.content,n=e.validationUrl;if(!n)return null;var a=t&&t.text?t.text:"Je valide cette \xe9tape";return c.a.createElement(o.b,{to:n},c.a.createElement("div",{className:"checkbox-classic checkbox-full-width"},c.a.createElement("input",{id:"yo",type:"checkbox"}),c.a.createElement("label",{className:"tnormal valid-step",htmlFor:"yo"},a)))}function B(e){var t=e.content,n=e.validationUrl;if(!t)return null;var a=t.flip,l=t.img,r=t.title,o=t.subtitle,i=t.items,s=t.note,m=t.validation,u=a?"block-caption-left":"block-caption-right";return c.a.createElement("section",{className:"col-xl-24 notice-mask row"},c.a.createElement("figure",{className:"row col-xl-24"},c.a.createElement("img",{className:"col-xl-24",src:"/img/".concat(l),alt:""})),c.a.createElement("section",{className:"block-caption-classic ".concat(u)},c.a.createElement(P,{content:r}),c.a.createElement(F,{content:o}),c.a.createElement(M,{content:i}),c.a.createElement(K,{content:m,validationUrl:n}),c.a.createElement(L,{content:s})))}B.defaultProps={flip:!1};var U=B;function V(e){var t=e.content,n=Object(s.b)().t;return t?c.a.createElement("p",{className:"big-title"},n(t)):null}function z(e){var t=e.content,n=e.small,l=Object(s.b)().t;if(!t)return null;var r=n?1===t.length?["col-vspace"]:["col-vtspace","col-vbspace"]:null;return c.a.createElement(a.Fragment,null,t.map((function(e,t){return function(e,t){return"string"==typeof e?c.a.createElement("p",{key:t,className:r?r[t]:null},l(e)):c.a.createElement(I,{content:e})}(e,t)})))}function J(e){var t=e.content,n=e.small;if(!t)return null;var a=t.title,l=t.subtitle,r=t.background,o=(n?"col-xl-24 row":"col-xl-24 block-big-white-space row")+" ".concat(function(e){var t={default:"bg-gradient-orange",grey:"bg-light-grey-blue",transparent:" "};return t[e]||t.default}(r));return c.a.createElement("section",{className:o},c.a.createElement(V,{content:a}),c.a.createElement(z,{small:n,content:l}))}J.defaultProps={small:!1};var _=J;var R=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){fetch("./content/home.json").then((function(e){e.json().then((function(e){l(e)}))}))}),[]),n?c.a.createElement(a.Fragment,null,c.a.createElement(U,{content:n.header}),c.a.createElement(_,{content:n.title}),c.a.createElement(g,{content:n.choices})):null};function D(e){var t=e.id,n=e.children;return c.a.createElement("div",{className:"block-video-yt"},n,c.a.createElement("iframe",{title:t,src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}function T(e){var t=e.small,n=e.src,a=t?"notice-small-img":null;return c.a.createElement("figure",{className:a},c.a.createElement("img",{src:"/img/".concat(n),alt:""}))}var q=function(e){var t=e.index,n=e.content,a=n.id,l=n.src,r=n.small,o=n.gray,i=o?"color-anthracite":"bg-white",s=t%2===0?"col-xl-push-12 col-m-push-0":null,m=null;return a?m=c.a.createElement(D,{id:a}):l&&(m=c.a.createElement(T,{small:r||o,src:l})),c.a.createElement("section",{className:"col col-xl-12 col-m-24 block-info-cursor row ".concat(i," ").concat(s)},m)};function A(e){var t=e.index,n=e.content;return c.a.createElement("section",{className:"col col-xl-12 col-m-24 row ".concat(t%2===0?"col-xl-pull-12 col-m-pull-0":"")},c.a.createElement("div",{className:"block-caption-classic block-caption-left row col-vspace"},n.map((function(e,t){return c.a.createElement(I,{key:t,content:e})}))))}var G=function(e){var t=e.index,n=e.content,a=n.id,l=n.media,r=n.article;return c.a.createElement("section",{id:a,className:"col-xl-24 display-flex height-350 bg-light-grey-blue row"},c.a.createElement(q,{index:t,content:l}),c.a.createElement(A,{index:t,content:r}))};var H=function(e){var t=e.content,n=t.title,a=t.id,l=t.children,r=Object(s.b)().t;return c.a.createElement("div",{id:"content-page",className:"custom-page row wrap"},c.a.createElement("div",{className:"row margin-bottom-shop"},c.a.createElement("div",{className:"col-xl-24 capsule-h1 margin-bottom-shop"},c.a.createElement("h1",{className:"tcenter"},r(n)))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-20 col-xl-offset-2 col-s-24 col-s-offset-0 iframe-width margin-bottom-shop"},c.a.createElement("iframe",{title:n,align:"middle",frameBorder:"0",height:"569",width:"960",src:"https://docs.google.com/presentation/d/".concat(a,"/embed?start=false&amp;loop=false&amp;delayms=3000")}))),l)};n(55);function Q(e){var t=e.content,n=e.onMouseEnter,a=e.onMouseLeave,l=t.type,r=t.top,o=t.left,i=t.title,m=Object(s.b)().t;return c.a.createElement("div",{className:l?"zone zone-".concat(l):"zone",style:{top:r,left:o},title:m(i),onMouseEnter:n,onMouseLeave:a})}function W(e){var t=e.list,n=Object(s.b)().t;return t?c.a.createElement("ul",{className:"list-classic tleft-child"},t.map((function(e,t){return c.a.createElement("li",{key:t},n(e))}))):null}function X(e){var t=e.content,n=Object(s.b)().t;if(!t)return null;var a=t.messages,l=t.list;return c.a.createElement("div",{className:"col-xl-offset-6 col-xl-12 row Interface-description"},a.map((function(e,t){return c.a.createElement("span",{key:t},n(e))})),c.a.createElement(W,{list:l}))}var Y=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(),o=Object(u.a)(r,2),i=o[0],s=o[1];return Object(a.useEffect)((function(){fetch("/content/cura-by-dagoma/interface.json").then((function(e){e.json().then((function(e){l(e.items)}))}))}),[]),n?c.a.createElement("section",{className:"col-xl-24 block-big-white-space bg-gradient-orange row"},c.a.createElement("div",{className:"wrap row margin-bottom-shop"},c.a.createElement("div",{className:"col-xl-24 row container-interface"},c.a.createElement("img",{src:"/img/Cura/Notice/e-interface-cura.jpg",alt:"Interface Cura by Dagoma"}),n.map((function(e,t){return c.a.createElement(Q,{key:t,content:e.bubble,onMouseEnter:function(){return s(e.description)},onMouseLeave:function(){return s()}})}))),c.a.createElement(X,{content:i}))):null};n(56);var Z=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(!1),o=Object(u.a)(r,2),i=o[0],m=o[1],f=Object(s.b)().t;Object(a.useEffect)((function(){fetch("/content/magis/slide.json").then((function(e){e.json().then((function(e){l(e)}))}))}),[]);var b=function(e){"t"===e.key&&m(!i)};if(!n)return null;var E=n.left,d=n.right;return c.a.createElement("section",{className:"moving-banner-top row"},c.a.createElement("article",{className:"row ".concat(i?"covered":"hover")},c.a.createElement("figure",null,c.a.createElement("div",{className:"hover-tap"},c.a.createElement("i",{className:"fa fa-hand-pointer-o",onClick:function(){return m(!i)},onKeyPress:b,tabIndex:0,role:"button"},c.a.createElement("span",null,"t"))),c.a.createElement("img",{src:"/img/".concat(E.img),alt:f(E.title)}),c.a.createElement("figcaption",{className:"error row"},c.a.createElement("p",{className:"title-banner title"},c.a.createElement("i",{className:"fa fa-times-circle-o text-red","aria-hidden":"true"}),f(E.title)),c.a.createElement("p",null,f(E.text))))),c.a.createElement("article",{className:"row ".concat(i?"hover":"covered")},c.a.createElement("figure",null,c.a.createElement("div",{className:"hover-tap"},c.a.createElement("i",{className:"fa fa-hand-pointer-o",onClick:function(){return m(!i)},onKeyPress:b,tabIndex:0,role:"button"},c.a.createElement("span",null,"t"))),c.a.createElement("img",{src:"/img/".concat(d.img),alt:f(d.title)}),c.a.createElement("figcaption",{className:"valid row"},c.a.createElement("p",{className:"title-banner title"},c.a.createElement("i",{className:"fa fa-times-circle-o text-green","aria-hidden":"true"}),f(d.title)),c.a.createElement("p",null,f(d.text))))))};var $=function(e){var t=e.index,n=e.content,a={interface:c.a.createElement(Y,null),slide:c.a.createElement(Z,null),banner:c.a.createElement(_,{content:n}),"google-document":c.a.createElement(H,{content:n}),item:function(){return delete n.type,c.a.createElement(I,{content:n})},default:c.a.createElement(G,{index:t,content:n})};return a[n.type]||a.default};function ee(e){var t=e.img;return t?c.a.createElement("figure",null,c.a.createElement("img",{src:"/img/".concat(t),alt:""})):null}function te(e){var t=Object(s.b)().t,n=e.active,a=e.href,l=e.label,r=e.img;return c.a.createElement("li",{className:"new-btn btn-classic btn-grey step ".concat(n?"active":null)},c.a.createElement("a",{className:"btn-wide btn-big",href:a},t(l),c.a.createElement(ee,{img:r})))}var ne=function(e){var t=e.nav,n=e.active,l=Object(a.useState)(!1),r=Object(u.a)(l,2),o=r[0],i=r[1];return t?c.a.createElement("nav",{className:"nav-vertical col-xl-4 row ".concat(o?null:"closed")},c.a.createElement("div",{className:"border-nav col-xl-3"},c.a.createElement("p",null,"Navigation")),c.a.createElement("ul",{className:"col-xl-21 col-xl-offset-3 row notice-step lsn"},t.map((function(e,t){return c.a.createElement(te,{key:t,href:e.href,label:e.label,img:e.img,active:n===t})}))),c.a.createElement("button",{className:"toggle-nav",onClick:function(){return i(!o)},type:"button"},c.a.createElement("i",{className:"fa fa-arrow-right"}))):null};var ae=function(e){var t=e.content||"?";return c.a.createElement(a.Fragment,null,c.a.createElement("h1",null,"404"),c.a.createElement("p",null,t))};function ce(e){var t=e.content;return t?t.map((function(e,t){return c.a.createElement($,{key:t,index:t,content:e})})):null}var le=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(),o=Object(u.a)(r,2),s=o[0],m=o[1],f=Object(a.useState)(),b=Object(u.a)(f,2),E=b[0],d=b[1],v=Object(i.f)();return Object(a.useEffect)((function(){var e=["/content".concat(v.url,".json"),"/content".concat(v.url,"/0.json")];fetch(e[0]).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(){fetch(e[1]).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return l({error:e.message})}))}))}),[v]),Object(a.useEffect)((function(){var e=Object.values(v.params).filter((function(e){return void 0!==e})),t=["/nav/".concat(e.join("/"),".json")];e.pop(),t.push("/nav/".concat(e.join("/"),".json"));var n=function(e){m(e);for(var t=0;t<e.length;t+=1)if(e[t].href===v.url){d(t);break}};fetch(t[0]).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(){fetch(t[1]).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(){return m()}))}))}),[v]),n?n.error?c.a.createElement(ae,{content:n.error}):c.a.createElement(a.Fragment,null,c.a.createElement(ne,{nav:s,active:E}),c.a.createElement(_,{small:!0,content:n.time}),c.a.createElement(U,{content:n.header}),c.a.createElement(ce,{content:n.blocks}),c.a.createElement(U,{content:n.footer,validationUrl:function(){return console.log(s,E),s?E<s.length-1?s[E+1].href:void 0:null}})):null};function re(){return c.a.createElement(o.a,null,c.a.createElement(m,null),c.a.createElement("div",{className:"mb-25"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:R}),c.a.createElement(i.a,{path:"/:p0/:p1?/:p3?",component:le}),c.a.createElement(i.a,{component:ae}))))}var oe=n(22),ie=n(33),se=n(32);oe.a.use(ie.a).use(se.a).use(s.a).init({fallbackLng:"fr",debug:!1,nsSeparator:!1,keySeparator:!1,interpolation:{escapeValue:!1},react:{useSuspense:!1}});oe.a;r.a.render(c.a.createElement(re,null),document.getElementById("body"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f1dfcc92.chunk.js.map