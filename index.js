const a=document.querySelector("a");
const login=document.querySelector(".a");
const kingdomsNames=document.querySelectorAll(".kingdomname");
const m1=document.querySelector(".m1");
const m2=document.querySelector(".m2");
const one=document.querySelector(".one");
const two=document.querySelector(".two");

let flag1=false;
let flag2=false;

const username=JSON.parse(localStorage.getItem("username"))||null;
if(username)
{
    a.innerHTML=username[0].toUpperCase();
    login.style.borderRadius="4rem"
}

kingdomsNames.forEach((x)=>{
    x.addEventListener("click",()=>{
        x.classList.toggle("rotate");
        x.nextElementSibling.classList.toggle("heigtz")
    })
})


m1.addEventListener("click",()=>{
    if(flag1)
    {
        one.pause();
        one.currentTime=0;
        m1.innerHTML="music2";
        flag1=false;
    }else{
        one.play();
        m1.innerHTML="stop";
        flag1=true;
        if(flag2){
            two.pause();
            two.currentTime=0;
            m2.innerHTML="music1";
            flag2=false;
        }
    }
})
m2.addEventListener("click",()=>{
    if(flag2)
    {
        two.pause();
        two.currentTime=0;
        m2.innerHTML="music1";
        flag2=false;
    }else{
        two.play();
        m2.innerHTML="stop";
        flag2=true
        if(flag1){
            one.pause();
            one.currentTime=0;
            m1.innerHTML="music2";
            flag1=false;
        }
    }
})