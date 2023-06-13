const navToggle = document.querySelector('.nav-toggle')
const closeMenu = document.querySelector('.close-button')
const mobileMenu = document.querySelector('.mobile-nav')



navToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('hide-mobile.nav')
    mobileMenu.classList.add('show-mobile-nav')
})

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('show-mobile-nav')
        // mobileMenu.classList.add('hide-mobile-nav')
})