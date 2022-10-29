const harmBurger = document.querySelector('.harmburger')
const navMenu = document.querySelector('.mobile_nav_menu')

harmBurger.addEventListener('click' , () => {
    harmBurger.classList.toggle('active')
    navMenu.classList.toggle('active')

})
