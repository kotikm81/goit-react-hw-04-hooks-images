(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=(n(33),n(4)),s=n(9),l=n(2);var p=Object(l.a)("header",{target:"e4vzfy64"})({name:"1ssw7nl",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),u=Object(l.a)("form",{target:"e4vzfy63"})({name:"kbgsnr",styles:"display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),b=Object(l.a)("button",{target:"e4vzfy62"})({name:"1a3m8tj",styles:"display:inline-block;width:48px;height:48px;border:0;background-image:url('https://image.flaticon.com/icons/svg/149/149852.svg');background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}"}),d=Object(l.a)("span",{target:"e4vzfy61"})({name:"jnnlmv",styles:"position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0"}),f=Object(l.a)("input",{target:"e4vzfy60"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),x=n(1);function g(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(x.jsx)(p,{children:Object(x.jsxs)(u,{onSubmit:function(e){e.preventDefault(),""!==c.trim()?t(c):s.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441.")},children:[Object(x.jsx)(b,{type:"submit",children:Object(x.jsx)(d,{children:"Search"})}),Object(x.jsx)(f,{type:"text",name:"searchQuery",autocomplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var h=n(10),j=n.n(h),m=n(23),O=n(17);var v=Object(l.a)("li",{target:"e1f02xps1"})({name:"ia8atm",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),y=Object(l.a)("img",{target:"e1f02xps0"})({name:"1plt1o8",styles:"width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"}),w=n.p+"static/media/default.2e01288c.jpg";function k(e){var t=e.webformatURL,n=e.largeImageURL,a=e.tags,r=e.handleImageClick;return Object(x.jsx)(v,{children:Object(x.jsx)(y,{src:t,alt:a,onClick:function(){r(n,a)}})})}k.defaultProps={webformatURL:w,largeImageURL:w};var z=k;var S=Object(l.a)("ul",{target:"ehfmf380"})({name:"1bhb8yv",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;margin-top:0;margin-bottom:0;padding:0;list-style:none;margin-left:auto;margin-right:auto"});var C=function(e){var t=e.pictures,n=e.handleImageClick;return Object(x.jsx)(S,{id:"imageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(x.jsx)(z,{webformatURL:a,largeImageURL:r,tags:c,handleImageClick:n},t)}))})},L="https://pixabay.com/api",I="21396115-cf31dc04a3ddd307b254525ae";function E(){return(E=Object(O.a)(j.a.mark((function e(t,n){var a,r,c,o,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(L,"/?image_type=photo&orientation=horizontal&q=").concat(t,"&page=").concat(n,"&per_page=12&key=").concat(I),e.next=3,fetch(a);case 3:if(!(r=e.sent).ok){e.next=15;break}return e.next=7,r.json();case 7:return c=e.sent,e.next=10,c;case 10:if(o=e.sent,0!==(i=o.hits).length){e.next=14;break}throw new Error("\u041d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0443 ".concat(t));case 14:return e.abrupt("return",i);case 15:throw new Error("\u041d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0443 ".concat(t));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P={ApiService:function(e,t){return E.apply(this,arguments)}},R=n(24),U=n(28);var T=Object(l.a)("button",{target:"e122mgko0"})({name:"1fj4rmc",styles:"display:block;margin:0 auto;padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;min-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover,&:focus{background-color:#303f9f;}"}),q=["children","onClick"];function F(e){var t=e.children,n=e.onClick,a=Object(U.a)(e,q);return Object(x.jsx)(T,Object(R.a)(Object(R.a)({type:"button",onClick:n},a),{},{children:t}))}F.defaultProps={onClick:function(){return null},children:null};var Q,A,D=F,G=n(22),J=n(7),_=n(26),B=n.n(_),H=n(27),M=n.n(H),K=Object(J.css)(Q||(Q=Object(G.a)(["\n  top: 100px;\n  left: 0;\n  position: sticky;\n  z-index: 1200;\n\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 10px auto;\n"]))),N=Object(J.css)(A||(A=Object(G.a)(["\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%);\n  position: absolute;\n"])));function V(){return Object(x.jsx)(B.a,{color:"#3f51b5",loading:!0,css:K,size:15})}function W(){return Object(x.jsx)(M.a,{color:"#3f51b5",loading:!0,css:N,size:100})}function X(e){var t=e.searchQuery,n=e.handleImageClick,r=e.page,c=e.pictures,o=e.setPage,l=e.setPictures,p=Object(a.useState)(null),u=Object(i.a)(p,2),b=u[0],d=u[1],f=Object(a.useState)(!1),g=Object(i.a)(f,2),h=g[0],v=g[1],y=Object(a.useState)(0),w=Object(i.a)(y,2),k=w[0],z=w[1];Object(a.useEffect)((function(){if(t){v(!0),setTimeout((function(){!function(){n.apply(this,arguments)}()}),500);var e=document.querySelector("#imageGallery");z(e.clientHeight)}function n(){return(n=Object(O.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.ApiService(t,r);case 3:0!==(n=e.sent).length&&(l((function(e){return[].concat(Object(m.a)(e),Object(m.a)(n))})),v(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),d(e.t0.message),v(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}),[r,t,l]),Object(a.useEffect)((function(){s.b.error(b)}),[b]),Object(a.useEffect)((function(){0!==k&&window.scrollTo({top:k,behavior:"smooth"})}),[k,c]);return Object(x.jsxs)(x.Fragment,{children:[h&&Object(x.jsx)(V,{}),Object(x.jsx)(C,{pictures:c,handleImageClick:n}),c.length>0&&Object(x.jsx)(D,{onClick:function(e){e.preventDefault(),o((function(e){return e+1}))},"aria-label":"add contact",children:"Load more"})]})}var Y=Object(l.a)("div",{target:"e1d9azhh1"})({name:"8i9ttg",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8);z-index:1200"}),Z=Object(l.a)("div",{target:"e1d9azhh0"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),$=document.querySelector("#modal-root");function ee(e){var t=e.children,n=e.onClose;Object(a.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&n()};return Object(c.createPortal)(Object(x.jsx)(Y,{onClick:function(e){e.currentTarget===e.target&&n()},children:Object(x.jsx)(Z,{children:t})}),$)}function te(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),o=Object(i.a)(c,2),l=o[0],p=o[1],u=Object(a.useState)(""),b=Object(i.a)(u,2),d=b[0],f=b[1],h=Object(a.useState)(""),j=Object(i.a)(h,2),m=j[0],O=j[1],v=Object(a.useState)(1),y=Object(i.a)(v,2),w=y[0],k=y[1],z=Object(a.useState)([]),S=Object(i.a)(z,2),C=S[0],L=S[1],I=Object(a.useState)(!1),E=Object(i.a)(I,2),P=E[0],R=E[1],U=function(){p((function(e){return!e}))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{onSubmit:function(e){r(e),k(1),L([])}}),Object(x.jsx)(X,{searchQuery:n,handleImageClick:function(e,t){f(e),O(t),U(),R(!0)},page:w,pictures:C,setPage:k,setPictures:L}),Object(x.jsx)(s.a,{autoClose:3e3}),l&&Object(x.jsxs)(ee,{onClose:U,children:[P&&Object(x.jsx)(W,{}),Object(x.jsx)("img",{src:d,alt:m,onLoad:function(){return setTimeout((function(){R(!1)}),350)}}),";"]})]})}ee.defaultProps={onClose:function(){return null},children:null},o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(te,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.eb1114c4.chunk.js.map