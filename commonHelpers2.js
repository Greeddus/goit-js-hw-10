import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as o}from"./assets/vendor-2e8c1f02.js";document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();const t=e.target.elements.delay,s=e.target.elements.state,r=Number(t.value),n=s.value;m(r,n).then(i=>{o.success({title:"Success",message:i})}).catch(i=>{o.error({title:"Error",message:i})})});function m(e,t){return new Promise((s,r)=>{setTimeout(()=>{t==="fulfilled"?s(`✅ Fulfilled promise in ${e}ms`):r(`❌ Rejected promise in ${e}ms`)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
