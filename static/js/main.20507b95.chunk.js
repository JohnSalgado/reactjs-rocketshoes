(this.webpackJsonppepega=this.webpackJsonppepega||[]).push([[0],{44:function(n,t,e){n.exports=e.p+"static/media/background.38ea808a.svg"},49:function(n,t,e){n.exports=e.p+"static/media/Logo.38a4d24b.svg"},58:function(n,t,e){n.exports=e(87)},87:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"addToCartRequest",(function(){return I})),e.d(r,"addToCartSuccess",(function(){return P})),e.d(r,"removeFromCart",(function(){return Q})),e.d(r,"updateAmountRequest",(function(){return q})),e.d(r,"updateAmountSuccess",(function(){return L}));var a=e(0),c=e.n(a),o=e(15),u=e.n(o),i=e(19),l=e(16),d=e(23),s=e(11),p=e(12),m=(e(67),e(44)),b=e.n(m);function f(){var n=Object(s.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #191920 url(",") no-repeat center top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 1020px;\n    margin: 0 auto;\n    padding: 0 20px 50px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return f=function(){return n},n}var g=Object(p.a)(f(),b.a),x=e(21),E=e(18);function h(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 0.7;\n  }\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #fff;\n    }\n\n    span {\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]);return h=function(){return n},n}function v(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 50px 0;\n"]);return v=function(){return n},n}var O=p.b.header(v()),y=Object(p.b)(x.a)(h()),j=e(49),k=e.n(j);var w=Object(l.b)((function(n){return{cartSize:n.cart.length}}))((function(n){var t=n.cartSize;return c.a.createElement(O,null,c.a.createElement(x.a,{to:"/"},c.a.createElement("img",{src:k.a,alt:"Rocketshoes"})),c.a.createElement(y,{to:"/cart"},c.a.createElement("div",null,c.a.createElement("strong",null,"Meu carrinho"),c.a.createElement("span",null,t," itens")),c.a.createElement(E.e,{size:36,color:"#FFF"})))})),A=e(13),S=e.n(A),C=e(22),T=e(50),R=e(51),U=e(55),D=e(52),z=e(57),F=e(8),_=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format,M=e(53),N=e.n(M).a.create({baseURL:"http://localhost:3333"});function I(n){return{type:"@cart/ADD_REQUEST",id:n}}function P(n){return{type:"@cart/ADD_SUCCESS",product:n}}function Q(n){return{type:"@cart/REMOVE",id:n}}function q(n,t){return{type:"@cart/UPDATE_AMOUNT_REQUEST",id:n,amount:t}}function L(n,t){return{type:"@cart/UPDATE_AMOUNT_SUCCESS",id:n,amount:t}}var B=e(26);function J(){var n=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  list-style: none;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 4px;\n    padding: 20px;\n\n    img {\n      align-self: center;\n      max-width: 250px;\n    }\n\n    > strong {\n      font-size: 16px;\n      line-height: 20px;\n      color: #333;\n      margin-top: 5px\n    }\n\n    > span {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 5px 0 20px;\n    }\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-top: auto;\n\n      display: flex;\n      align-items: center;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.1);\n\n        svg {\n          margin-right: 5px;\n        }\n      }\n\n      span {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n      }\n    }\n  }\n"]);return J=function(){return n},n}var V=p.b.ul(J(),Object(B.a)(.03,"#7159c1")),H=function(n){function t(){var n,e;Object(T.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=Object(U.a)(this,(n=Object(D.a)(t)).call.apply(n,[this].concat(a)))).state={products:[]},e.handleAddProduct=function(n){(0,e.props.addToCartRequest)(n)},e}return Object(z.a)(t,n),Object(R.a)(t,[{key:"componentDidMount",value:function(){var n,t;return S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.awrap(N.get("products"));case 2:n=e.sent,t=n.data.map((function(n){return Object(C.a)({},n,{priceFormatted:_(n.price)})})),this.setState({products:t});case 5:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var n=this,t=this.state.products,e=this.props.amount;return c.a.createElement(V,null,t.map((function(t){return c.a.createElement("li",{key:t.id},c.a.createElement("img",{src:t.image,alt:t.title}),c.a.createElement("strong",null,t.title),c.a.createElement("span",null,t.priceFormatted),c.a.createElement("button",{type:"button",onClick:function(){return n.handleAddProduct(t.id)}},c.a.createElement("div",null,c.a.createElement(E.b,{size:16,color:"#FFF"})," ",e[t.id]||0),c.a.createElement("span",null,"ADICIONAR AO CARRINHO")))})))}}]),t}(a.Component),G=Object(l.b)((function(n){return{amount:n.cart.reduce((function(n,t){return n[t.id]=t.amount,n}),{})}}),(function(n){return Object(F.b)(r,n)}))(H);function K(){var n=Object(s.a)(["\n  display: flex;\n  align-items: baseline;\n\n  span {\n    color: #999;\n    font-weight: bold;\n  }\n\n  strong {\n    font-size: 28px;\n    margin-left: 5px;\n  }\n"]);return K=function(){return n},n}function W(){var n=Object(s.a)(["\n  width: 100%;\n\n  thead th {\n    color: #999;\n    text-align: left;\n    padding: 12px;\n  }\n\n  tbody td {\n    padding: 12px;\n    border-bottom: 1px solid #eee;\n  }\n\n  img {\n    height: 100px;\n  }\n\n  strong {\n    color: #333;\n    display: block;\n  }\n\n  span {\n    display: block;\n    margin-top: 5px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    input {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      color: #666;\n      padding: 6px;\n      width: 50px;\n    }\n  }\n\n  button {\n    background: none;\n    border: 0;\n    padding: 6px;\n  }\n"]);return W=function(){return n},n}function X(){var n=Object(s.a)(["\n  padding: 30px;\n  background: #fff;\n  border-radius: 4px;\n\n  footer {\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      padding: 12px 20px;\n      font-weight: bold;\n      text-transform: uppercase;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ","\n      }\n    }\n  }\n"]);return X=function(){return n},n}var Y=p.b.div(X(),Object(B.a)(.03,"#7159c1")),Z=p.b.table(W()),$=p.b.div(K());var nn=Object(l.b)((function(n){return{cart:n.cart.map((function(n){return Object(C.a)({},n,{subtotal:_(n.price*n.amount)})})),total:_(n.cart.reduce((function(n,t){return n+t.price*t.amount}),0))}}),(function(n){return Object(F.b)(r,n)}))((function(n){var t=n.cart,e=n.total,r=n.removeFromCart,a=n.updateAmountRequest;return c.a.createElement(Y,null,c.a.createElement(Z,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null),c.a.createElement("th",null,"PRODUTO"),c.a.createElement("th",null,"QTD"),c.a.createElement("th",null,"SUBTOTAL"),c.a.createElement("th",null))),c.a.createElement("tbody",null,t.map((function(n){return c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("img",{src:n.image,alt:n.title})),c.a.createElement("td",null,c.a.createElement("strong",null,n.title),c.a.createElement("span",null,n.priceFormatted)),c.a.createElement("td",null,c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:function(){return function(n){a(n.id,n.amount-1)}(n)}},c.a.createElement(E.d,{size:20,color:"#7159c1"})),c.a.createElement("input",{type:"number",readOnly:!0,value:n.amount}),c.a.createElement("button",{type:"button",onClick:function(){return function(n){a(n.id,n.amount+1)}(n)}},c.a.createElement(E.a,{size:20,color:"#7159c1"})))),c.a.createElement("td",null,c.a.createElement("strong",null,n.subtotal)),c.a.createElement("td",null,c.a.createElement("button",{type:"button",onClick:function(){return r(n.id)}},c.a.createElement(E.c,{size:20,color:"#7159c1"}))))})))),c.a.createElement("footer",null,c.a.createElement("button",{type:"button"},"Finalizar pedido"),c.a.createElement($,null,c.a.createElement("span",null,"TOTAL"),c.a.createElement("strong",null,e))))}));function tn(){return c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:G}),c.a.createElement(i.a,{path:"/cart",component:nn}))}var en=e(6),rn=Object(en.a)(),an=e(54),cn=e(27);var on=Object(F.c)({cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@cart/ADD_SUCCESS":return Object(cn.a)(n,(function(n){var e=t.product;n.push(e)}));case"@cart/REMOVE":return Object(cn.a)(n,(function(n){var e=n.findIndex((function(n){return n.id===t.id}));e>=0&&n.splice(e,1)}));case"@cart/UPDATE_AMOUNT_SUCCESS":return Object(cn.a)(n,(function(n){var e=n.findIndex((function(n){return n.id===t.id}));e>=0&&(n[e].amount=Number(t.amount))}));default:return n}}}),un=e(10),ln=S.a.mark(sn),dn=S.a.mark(pn);function sn(n){var t,e,r,a,c,o,u,i;return S.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=n.id,l.next=3,Object(un.d)((function(n){return n.cart.find((function(n){return n.id===t}))}));case 3:return e=l.sent,l.next=6,Object(un.b)(N.get,"/stock/".concat(t));case 6:if(r=l.sent,a=r.data.amount,c=e?e.amount:0,!((o=c+1)>a)){l.next=13;break}return d.b.error("Quantidade solicitada fora de estoque"),l.abrupt("return");case 13:if(!e){l.next=18;break}return l.next=16,Object(un.c)(L(t,o));case 16:l.next=25;break;case 18:return l.next=20,Object(un.b)(N.get,"/products/".concat(t));case 20:return u=l.sent,i=Object(C.a)({},u.data,{amount:1,priceFormatted:_(u.data.price)}),l.next=24,Object(un.c)(P(i));case 24:rn.push("/cart");case 25:case"end":return l.stop()}}),ln)}function pn(n){var t,e,r,a;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(t=n.id,!((e=n.amount)<=0)){c.next=3;break}return c.abrupt("return");case 3:return c.next=5,Object(un.b)(N.get,"stock/".concat(t));case 5:if(r=c.sent,a=r.data.amount,!(e>a)){c.next=10;break}return d.b.error("Quantidade solicitada fora de estoque"),c.abrupt("return");case 10:return c.next=12,Object(un.c)(L(t,e));case 12:case"end":return c.stop()}}),dn)}var mn=Object(un.a)([Object(un.e)("@cart/ADD_REQUEST",sn),Object(un.e)("@cart/UPDATE_AMOUNT_REQUEST",pn)]),bn=S.a.mark(fn);function fn(){return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(un.a)([mn]);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),bn)}var gn=Object(an.a)(),xn=Object(F.a)(gn),En=Object(F.e)(on,xn);gn.run(fn);var hn=En;var vn=function(){return c.a.createElement(l.a,{store:hn},c.a.createElement(i.b,{history:rn},c.a.createElement(w,null),c.a.createElement(tn,null),c.a.createElement(g,null),c.a.createElement(d.a,{autoClose:3e3})))};u.a.render(c.a.createElement(vn,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.20507b95.chunk.js.map