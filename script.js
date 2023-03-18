const header=document.querySelector('nav')

window.addEventListener("scroll",function(){
        header.classList.toggle("sticky",window.scrollY > 0)
})
let menu=document.querySelector('#menu')
let nav=document.querySelector('.navbar')

menu.onclick=()=>{
        menu.classList.toggle('bx-x')
        nav.classList.toggle('active')
}
window.onscroll=()=>{
        menu.classList.remove('bx-x');
        nav.classList.remove('active')
    }