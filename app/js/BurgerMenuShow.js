'use client'

export default function BurgerMenuShow(opening, burgerNavigationRef, burgerCloseRef) {

    let burgerNavigation = burgerNavigationRef.current;
    let burgerClose = burgerCloseRef.current;
    if (opening) {
        burgerNavigation.classList.remove("hideBurgerMenu");
        burgerClose.classList.add("closeBurger");
    } else {
        burgerNavigation.classList.add("hideBurgerMenu");
        burgerClose.classList.remove("closeBurger");
    }


}