const MenuBurger = document.querySelector(".menu-burger"),
    MenuPrincipal = document.querySelector(".menu-principal");

    MenuBurger.addEventListener("click", () =>{
        MenuPrincipal.classList.toggle("open-menu");

        MenuBurger.classList.toggle("lines");
    })
