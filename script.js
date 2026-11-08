const giftpage=document.getElementById("giftpage");
const messagepage=document.getElementById("messagepage");
const lovepage=document.getElementById("lovepage");
const opengiftbutton=document.getElementById("opengiftbutton")
const enterbutton=document.getElementById("enterbutton");
const backbutton=document.getElementById("backbutton");
opengiftbutton.addEventListener("click" ,function(){
    opengiftbutton.disabled=true;
    opengiftbutton.textContent="ta surprise arrive ...";
    setTimeout(function(){
        giftpage.classList.add("hidden");
        messagepage.classList.remove("hidden");
    },400);
});
enterbutton.addEventListener("click",function(){
    messagepage.classList.add("hidden");
    lovepage.classList.remove("hidden");
});
backbutton.addEventListener("click",function(){
    lovepage.classList.add("hidden");
    messagepage.classList.remove("hidden");
});