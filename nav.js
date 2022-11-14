
const burgerNav = document.querySelector('.burgerNav')
const navLinks = document.querySelector('.navLinks')

burgerNav.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})
