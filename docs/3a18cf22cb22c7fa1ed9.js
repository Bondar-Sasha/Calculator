(()=>{"use strict";var e=[{mainFond:"rgb(186, 196, 205)",fond:"#333333",screen:{fond:"#b8c0a9",data:"#333333"},buttons:{fond:"#838383",data:"#fcfcfc"}},{mainFond:"rgb(186, 196, 205)",fond:"#40668b",screen:{fond:"#e9eeef",data:"#25312f"},buttons:{fond:"#25312f",data:"#e9eeef"}},{mainFond:"rgb(186, 196, 205)",fond:"#333333",screen:{fond:"rgb(151, 154, 157)",data:"#333333"},buttons:{fond:"rgb(151, 154, 157)",data:"#333333"}},{mainFond:"rgb(186, 196, 205)",fond:"#019a9c",screen:{fond:"aliceblue",data:"#333333"},buttons:{fond:"aliceblue",data:"#333333"}},{mainFond:"rgb(186, 196, 205)",fond:"#565c6c",screen:{fond:"#36b7d4",data:"#333333"},buttons:{fond:"#36b7d4",data:"#333333"}}],n={"--mainFond":e[0].mainFond,"--fond":e[0].fond,"--screenFond":e[0].screen.fond,"--screenColor":e[0].screen.data,"--buttonsFond":e[0].buttons.fond,"--buttonsColor":e[0].buttons.data};const r=e,t=function(e){var n=document.documentElement;Object.entries(e).forEach((function(e){n.style.setProperty(e[0],e[1])}))},o=function(e){return document.getElementById(e)};var i=o("color_scheme");r.forEach((function(e){var n=document.createElement("div");n.setAttribute("class","colors_container");var r={"--fond":e.fond,"--screenFond":e.screen.fond,"--screenColor":e.screen.data,"--buttonsFond":e.buttons.fond,"--buttonsColor":e.buttons.data};n.addEventListener("click",(function(){t(r)})),n.style.borderTopColor=e.fond,n.style.borderRightColor=e.screen.fond,n.style.borderLeftColor=e.buttons.fond,i.append(n)}));const s=function(e){return e[e.length-1]},u=function e(n){return n<0||n%1!=0?null:0===n||1===n?1:n*e(n-1)};var a={number:function(e){return Number(e[0])},degree:function(e){return Math.pow(Number(e[1]),Number(e[0]))},sqrt:function(e){return Math.pow(Number(e[1]),1/Number(e[0]))},factorial:function(e){return u(Number(e[0]))},count:function(e,n,r){switch(n){case"plus":return e+r;case"minus":return e-r;case"multiply":return e*r;case"divide":return e/r;default:return null}}};function l(e){try{var n=null;if(2===e.length){if(!(n=a[e[1].operation](e[1].values)))throw new Error("");return n}var r=a[e[1].operation](e[1].values),t=a[e[3].operation](e[3].values);if(!(n=a.count(r,e[2].operation,t)))throw new Error("");return n}catch(e){return"error"}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function p(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,f(t.key),t)}}function f(e){var n=function(e){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(n)?n:n+""}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}var v={currentOperation:function(e,n){var r=!1;return n.forEach((function(n){s(e).operation===n&&(r=!0)})),r},currentOperationNot:function(e,n){var r=!0;return n.forEach((function(n){s(e).operation===n&&(r=!1)})),r}};const m=function(e,n){var r=!0;return Object.entries(n).forEach((function(n){var t,o,i=(o=2,function(e){if(Array.isArray(e))return e}(t=n)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i,s,u=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;a=!1}else for(;!(a=(t=i.call(r)).done)&&(u.push(t.value),u.length!==n);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw o}}return u}}(t,o)||function(e,n){if(e){if("string"==typeof e)return d(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,n):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=i[0],u=i[1];r=v[s](e,u)})),r},b={currentOperation:["number","minus","sqrt","degree"]},h={currentOperation:["null","number","plus","sqrt","degree"]},y={currentOperation:["number","sqrt","degree"]},x={currentOperation:["number","sqrt","degree"]},g={currentOperationNot:["number","sqrt","degree","factorial","divide"]},_={currentOperation:["number"]},w={currentOperationNot:["number","sqrt","degree","factorial"]},O={currentOperationNot:["number","sqrt","degree","factorial"]},S={currentOperation:["number"]},E={currentOperationNot:["factorial"]},j={currentOperation:["number"]},I={currentOperation:["number"]};var U=["getUI","setUI"];function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function M(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(M=function(){return!!e})()}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function N(e,n){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},N(e,n)}function C(e,n,r){return(n=T(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function T(e){var n=function(e){if("object"!=q(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==q(n)?n:n+""}const L=new(function(e){function n(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return C(e=function(e,n,r){return n=P(n),function(e,n){if(n&&("object"==q(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,M()?Reflect.construct(n,r||[],P(e).constructor):n.apply(e,r))}(this,n,[].concat(t)),"getUI",(function(){return e.setUI(),e.UI.join("")})),C(e,"setUI",(function(){e.UI=[],e.expression.forEach((function(n){if("null"===n.operation)return!1;var r,t,o,i;if("sqrt"===n.operation)e.UI.push(n.change?'<span class="sqrt"><sup class="sup">'.concat(null!==(r=n.values[0])&&void 0!==r?r:"","</sup>&radic;<span>").concat(null!==(t=n.values[1])&&void 0!==t?t:"","</span></span>"):'<span class="sqrt"><sup>'.concat(null!==(o=n.values[0])&&void 0!==o?o:"",'</sup>&radic;<span class="sqrt_base">').concat(null!==(i=n.values[1])&&void 0!==i?i:"","</span></span>"));else if("degree"===n.operation){var s,u,a,l;e.UI.push(n.change?'<span class="degree"><span >'.concat(null!==(s=n.values[1])&&void 0!==s?s:"",'</span><sup class="sup">').concat(null!==(u=n.values[0])&&void 0!==u?u:"","</sup></span>"):'<span class="degree"><span class="sup_base">'.concat(null!==(a=n.values[1])&&void 0!==a?a:"","</span><sup>").concat(null!==(l=n.values[0])&&void 0!==l?l:"","</sup></span>"))}else{var c;e.UI.push(null!==(c=n.values[0])&&void 0!==c?c:""+n.icon)}}))})),C(e,"clear",(function(){return e.expression=[{operation:"null"}],e.UI=[],!0})),C(e,"setValue",(function(n){return function(){if(!m(e.expression,E))return!1;if("null"===s(e.expression).operation)return e.expression.push({icon:"",operation:"number",values:[n.toString()]}),!0;if(s(e.expression).twoValue){var r=s(e.expression).values;return s(e.expression).change?(r[0]?r[0]+=n.toString():r[0]=n.toString(),!0):(r[1]?r[1]+=n.toString():r[1]=n.toString(),!0)}return"number"!==s(e.expression).operation?(e.expression.push({icon:"",operation:"number",values:[n.toString()]}),!0):(s(e.expression).values[0]+=n.toString(),!0)}})),C(e,"change_sign",(function(){return!(!m(e.expression,j)||("plus"===e.expression[e.expression.length-2].operation?(e.expression[e.expression.length-2].operation="minus",e.expression[e.expression.length-2].icon="-",0):"minus"===e.expression[e.expression.length-2].operation?(e.expression[e.expression.length-2].operation="plus",e.expression[e.expression.length-2].icon="+",0):"-"===s(e.expression).values[0][0]?(s(e.expression).values[0]=s(e.expression).values[0].slice(1),0):(s(e.expression).values[0]="-"+s(e.expression).values[0],0)))})),C(e,"percent",(function(){return!!m(e.expression,I)&&(4===e.expression.length&&(e.expression=[{operation:"null"},{icon:"",operation:"number",values:[l(e.expression)]}]),e.expression.push({icon:"%",operation:"percent",values:[]}),!0)})),C(e,"division",(function(){return!!m(e.expression,x)&&(4===e.expression.length&&(e.expression=[{operation:"null"},{icon:"",operation:"number",values:[l(e.expression)]}]),e.expression.push({icon:"/",operation:"divide",values:[]}),!0)})),C(e,"multiply",(function(){return!!m(e.expression,y)&&(4===e.expression.length&&(e.expression=[{operation:"null"},{icon:"",operation:"number",values:[l(e.expression)]}]),e.expression.push({icon:"*",operation:"multiply",values:[]}),!0)})),C(e,"minus",(function(){return!!m(e.expression,h)&&(4===e.expression.length&&(e.expression=[{operation:"null"},{icon:"",operation:"number",values:[l(e.expression)]}]),"plus"===s(e.expression)?(s(e.expression).operation="minus",!0):(e.expression.push({icon:"-",operation:"minus",values:[]}),!0))})),C(e,"sum",(function(){return!!m(e.expression,b)&&(4===e.expression.length&&(e.expression=[{operation:"null"},{icon:"",operation:"number",values:[l(e.expression)]}]),"minus"===s(e.expression)?(s(e.expression).operation="plus",!0):(e.expression.push({icon:"+",operation:"plus",values:[]}),!0))})),C(e,"dot",(function(){return!!m(e.expression,S)&&(s(e.expression).values[0]+=".",!0)})),C(e,"equal",(function(){return![1,3].includes(e.expression.length)&&(e.expression=[{operation:"null"},{icon:"",operation:"number",values:[l(e.expression)]}],!0)})),C(e,"cancel",(function(){})),C(e,"MC",(function(){return e.memory="",alert(e.memory),!0})),C(e,"MR",(function(){return!!e.memory&&(e.expression=[{operation:"null"},{icon:"",operation:"number",values:[e.memory]}],!0)})),C(e,"M_MINUS",(function(){return 2===e.expression.length&&"number"===e.expression[1].operation&&(e.memory-=Number(e.expression[1].values[0]),alert(e.memory),!0)})),C(e,"M_PLUS",(function(){return 2===e.expression.length&&"number"===e.expression[1].operation&&(e.memory+=Number(e.expression[1].values[0]),alert(e.memory),!0)})),C(e,"factorial",(function(){if(!m(e.expression,_))return!1;4===e.expression.length&&(e.expression=[{operation:"null"},{icon:"",operation:"number",values:[l(e.expression)]}]),e.expression.push({icon:"!",operation:"factorial",values:[]})})),C(e,"_1_x",(function(){return!!m(e.expression,g)&&(e.setValue(1)(),e.division(),!0)})),C(e,"ten_x",(function(){return!!m(e.expression,w)&&(e.expression.push({icon:"",operation:"degree",twoValue:!0,change:!0,values:[null,"10"]}),!0)})),C(e,"degree",(function(n){return function(){return!!m(e.expression,w)&&(n?(e.expression.push({icon:"",operation:"degree",twoValue:!0,change:!1,values:[n.toString()]}),!0):(e.expression.push({icon:"",operation:"degree",twoValue:!0,change:!1,values:[]}),!0))}})),C(e,"sqrt",(function(n){return function(){return!!m(e.expression,O)&&(n?(e.expression.push({icon:"",operation:"sqrt",twoValue:!0,change:!1,values:[n.toString()]}),!0):(e.expression.push({icon:"",operation:"sqrt",twoValue:!0,change:!0,values:[]}),!0))}})),C(e,"getActions",(function(){var n=e;return n.getUI,n.setUI,function(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.includes(t))continue;r[t]=e[t]}return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,U)})),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&N(e,n)}(n,e),r=n,Object.defineProperty(r,"prototype",{writable:!1}),r;var r}(function(){return e=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.expression=[{operation:"null"}],this.UI=[],this.memory=0},(n=[{key:"getExpression",value:function(){throw new Error('The "getExpression" method must be implemented')}},{key:"getUI",value:function(){throw new Error('The "getUI" method must be implemented')}},{key:"actions",value:function(){throw new Error('The "actions" method must be implemented')}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}()));var F=L.getActions(),A=F.setValue,V=F.clear,k=F.MC,R=F.MR,B=F.M_MINUS,H=F.M_PLUS,D=F.cancel,W=F.factorial,$=F.change_sign,z=F.minus,G=F.percent,J=F.multiply,K=F.sum,Q=F.dot,X=F.equal,Y=F.division,Z=F.sqrt,ee=F.degree,ne=F.ten_x,re=F._1_x,te={value_0:{el:o("value_0"),handler:A(0)},value_1:{el:o("value_1"),handler:A(1)},value_2:{el:o("value_2"),handler:A(2)},value_3:{el:o("value_3"),handler:A(3)},value_4:{el:o("value_4"),handler:A(4)},value_5:{el:o("value_5"),handler:A(5)},value_6:{el:o("value_6"),handler:A(6)},value_7:{el:o("value_7"),handler:A(7)},value_8:{el:o("value_8"),handler:A(8)},value_9:{el:o("value_9"),handler:A(9)},clear:{el:o("clear"),handler:V},change_sign:{el:o("change_sign"),handler:$},percent:{el:o("percent"),handler:G},division:{el:o("division"),handler:Y},multiply:{el:o("multiply"),handler:J},minus:{el:o("minus"),handler:z},sum:{el:o("sum"),handler:K},dot:{el:o("dot"),handler:Q},MC:{el:o("MC"),handler:k},MR:{el:o("MR"),handler:R},M_MINUS:{el:o("M_MINUS"),handler:B},M_PLUS:{el:o("M_PLUS"),handler:H},cancel:{el:o("cancel"),handler:D},x_2:{el:o("x_2"),handler:ee(2)},x_3:{el:o("x_3"),handler:ee(3)},x_y:{el:o("x_y"),handler:ee()},sqrt_2:{el:o("sqrt_2"),handler:Z(2)},sqrt_3:{el:o("sqrt_3"),handler:Z(3)},sqrt_y:{el:o("sqrt_y"),handler:Z()},_10_x:{el:o("_10_x"),handler:ne},_1_x:{el:o("_1_x"),handler:re},factorial:{el:o("factorial"),handler:W},equal:{el:o("equal"),handler:X}},oe=o("screen_data"),ie=o("input_buttons");oe.addEventListener("click",(function(){var e=L.expression[L.expression.length-1];e&&e.twoValue&&(e.change=!e.change),oe.innerHTML=L.getUI()})),Object.keys(te).forEach((function(e){var n=te[e];n.el.addEventListener("click",n.handler)})),ie.addEventListener("click",(function(){oe.scrollLeft=oe.scrollWidth,oe.innerHTML=L.getUI()})),t(n)})();
//# sourceMappingURL=3a18cf22cb22c7fa1ed9.js.map