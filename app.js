let menu= document.querySelector(".menu")
let nav= document.querySelector(".nav")
let close= document.querySelector(".close")
menu.onclick=function(){
    nav.classList.add("open")
}
close.onclick=function(){
    nav.classList.remove("open")
}