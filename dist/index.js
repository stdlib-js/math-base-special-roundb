"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=o(function(m,f){
var a=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-assert-is-infinite/dist'),q=require('@stdlib/math-base-special-pow/dist'),s=require('@stdlib/math-base-special-round/dist'),c=require('@stdlib/math-base-special-roundn/dist');function d(r,e,i){var n,t;return a(r)||a(e)||a(i)||i<=0||u(e)||u(i)?NaN:u(r)||r===0?r:i===10?c(r,e):e===0||i===1?s(r):(t=q(i,-e),u(t)||(n=s(r*t)/t,u(n))?r:n)}f.exports=d
});var p=v();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
