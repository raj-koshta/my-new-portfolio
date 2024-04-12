// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}


//  Nav Hide
let navBar = document.querySelectorAll(".nav-link");

let navCollapse = document.querySelector(".navbar-collapse.collapse")

navBar.forEach((a)=>{
    a.addEventListener("click",()=>{
        navCollapse.classList.remove("show");
    })
})


