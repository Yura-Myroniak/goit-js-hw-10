import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const a=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),r=document.querySelector('textarea[name="message"]'),o=localStorage.getItem("feedback-form-state");o&&(e=JSON.parse(o),l.value=e.email||"",r.value=e.message||"");const n=()=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))};a.addEventListener("input",t=>{const{name:s,value:m}=t.target;e[s]=m,n()});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},a.reset()});
//# sourceMappingURL=2-form.js.map