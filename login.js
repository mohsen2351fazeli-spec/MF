const toost=document.querySelector(".toost");
const button=document.querySelector(".done");
const toostmother=document.querySelector(".toostmother");
const minitoost=document.querySelector(".minitoost");
const matn=document.querySelector(".matn");
const usernameInput=document.querySelector(".username-input");
const passwordInput=document.querySelector(".password-input");
const z=document.querySelector(".z");
    


const tictoost=()=>{
    toostmother.className="toostmother ticmother";
    minitoost.className="minitoost tic";
    matn.innerHTML="با موفقیت انجام شد";
    z.className="minitoost xx hidden";
    toostHandler();
}
const xtoost=()=>{
    toostmother.className="toostmother xmother";
    minitoost.className="minitoost x";
    matn.innerHTML="متاسفانه انجام نشد";
    z.className="minitoost xx";
    toostHandler();
}
const toostHandler=()=>{
    toost.classList.add("right");
    setTimeout(() => { 
        toost.classList.add("left");  
    }, 3000);
    setTimeout(() => { 
        toost.classList.remove("left"); 
        toost.classList.remove("right"); 
    }, 4000);
}
const loginHandler=()=>{
    let flagp=true;
    let flagu=true;
    const username=usernameInput.value.trim();
    const password=passwordInput.value.trim();

    username.split("").forEach((x,i)=>{
        const index=username.charCodeAt(i)
        if(username.length<4||!username||index<65||index>122||index==91||index==92||index==93||index==94||index==95||index==96)
        flagu=false;
    })
    if(password.length<8||!password)
    flagp=false;
    if(flagp&&flagu){
        usernameInput.value="";
        passwordInput.value="";
        localStorage.setItem("username",JSON.stringify(username))
        tictoost()
        setTimeout(() => {
            location.assign("./index.html")
        }, 1500);
    }else{
        if(!flagu)
        usernameInput.value="";
        if(!flagp)
        passwordInput.value="";
        xtoost()
    }

}

button.addEventListener("click",loginHandler);


