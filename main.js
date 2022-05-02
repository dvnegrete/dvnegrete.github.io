const menuShow = document.querySelector("#menuShow")
const menuClose = document.querySelector("#menuClose")
const imgGif = document.querySelector(".main__intro__img")
const nav = document.getElementById("nav")
const mediaquery = window.matchMedia("(min-width: 530px)")
const skills = document.querySelector("#skills")
const buttonForm = document.querySelector("#buttonForm")

const ajusteNav = () => {
    nav.classList.toggle("nav-hide")
    nav.classList.toggle("navMin")
}

const mediaqueryAjuste = function() {    
    if (mediaquery.matches){    
        ajusteNav();
    } else {
        nav.classList.toggle("navMin")
        nav.classList.toggle("nav-hide")      
    }
}

const showMenu = () => {      
    if (nav.classList.contains("nav-hide")) {
        nav.classList.toggle("nav-hide")
        nav.classList.toggle("header__nav")
        menuShow.classList.toggle("menu-hide")
        menuShow.classList.toggle("menu__mobile")
        menuClose.classList.toggle("menu-hide")
        menuClose.classList.toggle("menu__mobile")        
        imgGif.style = "opacity: 0.5";      
    } else {        
        nav.classList.toggle("nav-hide")
        nav.classList.toggle("header__nav")                  
    }      
}

const noDisponible = () => {
    swal({
        title: "En construcción...",
        text: "Proximanente disponible",
        icon: "warning",
      });    
}

if(mediaquery.matches){
    ajusteNav();
}
mediaquery.addListener(mediaqueryAjuste)

document.addEventListener("click", (e) =>{
    if (nav.classList.contains("header__nav")) {        
        nav.classList.toggle("nav-hide")
        nav.classList.toggle("header__nav")
        menuClose.classList.toggle("menu__mobile")
        menuClose.classList.toggle("menu-hide")        
        menuShow.classList.toggle("menu__mobile")
        menuShow.classList.toggle("menu-hide")
    } else if (e.target.dataset.node === "menu") {        
        showMenu();
    }
    if(e.target.dataset.node === "noDisponible"){
        noDisponible();
    }
})