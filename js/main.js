const initApp = () =>{
    const hamBtn = document.getElementById('ham-icon')
    const mobileMenu = document.getElementById('ham-menu')


    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')

    }

    hamBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click',toggleMenu)
} 


document.addEventListener('DOMContentLoaded', initApp)