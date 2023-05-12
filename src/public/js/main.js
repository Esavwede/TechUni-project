const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    hamburgerBtn.classList.toggle('toggle-btn')
  }

  hamburgerBtn.addEventListener('click', toggleMenu)
  mobileMenu.addEventListener('click', toggleMenu)

  //  typed js effect starts
//   var typed = new Typed('.typing-text', {
//     strings: [
//       'April 13th 2023'
//     ],
//     loop: false,
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 500
//   })
}

document.addEventListener('DOMContentLoaded', initApp)
