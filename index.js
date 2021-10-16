const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

const showMenu = () => {
    if (nav.classList.contains("nav-hide")) {
        nav.classList.toggle("nav-hide")
        nav.classList.toggle("header__nav")        
    } else {
        nav.classList.toggle("nav-hide")
        nav.classList.toggle("header__nav")           
    }      
}

document.addEventListener("click", (e) =>{
    
    if (nav.classList.contains("header__nav")) {
        nav.classList.toggle("nav-hide")
        nav.classList.toggle("header__nav")        
    }

    else if (e.target.dataset.node === "menu") {        
        showMenu();
    }    
})