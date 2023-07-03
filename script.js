const MenuBurger = document.querySelector(".menu-burger"),
    MenuPrincipal = document.querySelector(".menu-principal");

    MenuBurger.addEventListener("click", () =>{
        MenuPrincipal.classList.toggle("open-menu");

        MenuBurger.classList.toggle("lines");
    });



// DEIXAR FIXO COM SCROLL //

window.addEventListener("scroll", function (){
    var NavBar = document.querySelector(".nav-bar-principal");
    var scrollTop = NavBar.scrollTop || document.documentElement.scrollTop; 
    
    if (scrollTop > 250){
        NavBar.classList.add("nav-fixed-top");
    }else{
        NavBar.classList.remove("nav-fixed-top");
    }
});
