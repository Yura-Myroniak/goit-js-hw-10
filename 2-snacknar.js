import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();const t=e.target,s=parseInt(t.delay.value,10),r=t.state.value;m(s,r).then(i=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${i}ms`})}).catch(i=>{o.error({title:"Error",message:`❌ Rejected promise in ${i}ms`})})});function m(e,t){return new Promise((s,r)=>{setTimeout(()=>{t==="fulfilled"?s(e):r(e)},e)})}
//# sourceMappingURL=2-snacknar.js.map
