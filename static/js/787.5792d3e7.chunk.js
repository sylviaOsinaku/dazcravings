"use strict";(self.webpackChunkcravings_e_commerce=self.webpackChunkcravings_e_commerce||[]).push([[787],{862:function(e,a,c){c.r(a),c.d(a,{default:function(){return I}});var t=c(791),n=c(413),r=c(987),i=c(694),s=c.n(i),m=c(162),o=c(184),l=["bsPrefix","fluid","as","className"],d=t.forwardRef((function(e,a){var c=e.bsPrefix,t=e.fluid,i=e.as,d=void 0===i?"div":i,u=e.className,p=(0,r.Z)(e,l),f=(0,m.vE)(c,"container"),x="string"===typeof t?"-".concat(t):"-fluid";return(0,o.jsx)(d,(0,n.Z)((0,n.Z)({ref:a},p),{},{className:s()(u,t?"".concat(f).concat(x):f)}))}));d.displayName="Container",d.defaultProps={fluid:!1};var u=d,p=c(362),f="CartSummary_amount-container__sZBNm",x="CartSummary_summary-container__DLCj+",j=function(e){var a="\u20a6".concat(e.price.toFixed(2));return(0,o.jsxs)("div",{className:x,children:[(0,o.jsxs)("div",{className:f,children:[(0,o.jsx)("p",{children:"Total Amount"}),(0,o.jsx)("p",{children:a})]}),(0,o.jsx)("button",{children:"Checkout"})]})},h={"complete-cart-container":"CompleteCart_complete-cart-container__maZzn","cart-image":"CompleteCart_cart-image__IzMS5"};var v=c.p+"static/media/icon-minus.f5073aa8273785ecf6b7811630782736.svg",_=function(e){var a="\u20a6".concat(e.price.toFixed(2));return(0,o.jsxs)("div",{className:h["complete-cart-container"],children:[(0,o.jsxs)("div",{style:{display:"flex",gap:".3em"},children:[(0,o.jsx)("img",{src:e.cartImage,alt:"",className:h["cart-imge"]}),(0,o.jsx)("p",{children:e.cakeName})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:a}),(0,o.jsxs)("small",{children:["\xd7",e.amount]}),(0,o.jsx)("button",{onClick:e.onRemove,children:(0,o.jsx)("img",{src:v,alt:"Minus sign"})})]})]})},g=c(689),C=c.p+"static/media/sad-face-emoji.317d911d5dc07787f7ef.gif",y="EmptyCart_empty-cart-container__lchID",N="EmptyCart_emptyLink__kNuqH",k=function(){var e=(0,g.s0)();return(0,o.jsxs)("div",{className:y,children:[(0,o.jsx)("img",{src:C,alt:""}),(0,o.jsx)("p",{children:"\u1eccga mi i know say sapa dey but try dey enjoy!"}),(0,o.jsx)("small",{children:(0,o.jsx)("div",{className:N,onClick:function(){e("../products")},children:"Go back to Products"})})]})},b="Cart_cart-container__kwYOI",I=function(){var e=(0,t.useContext)(p.Z),a=e.cartItems.length>0,c=e.cartItems.map((function(e){return e.amount})).reduce((function(e,a){return e+a}),0),n=function(a){e.removeItem(a)};return(0,o.jsxs)(t.Fragment,{children:[(0,o.jsxs)("h1",{children:["Shopping Cart (",c,")"]}),!a&&(0,o.jsx)(k,{}),a&&(0,o.jsxs)(u,{className:b,children:[(0,o.jsx)("div",{children:e.cartItems.map((function(e){return(0,o.jsx)(_,{cartImage:e.cartImage,price:e.price,amount:e.amount,cakeName:e.cakeName,onRemove:n.bind(null,e.id),id:e.id},e.id)}))}),(0,o.jsx)(j,{price:e.totalAmount})]})]})}}}]);
//# sourceMappingURL=787.5792d3e7.chunk.js.map