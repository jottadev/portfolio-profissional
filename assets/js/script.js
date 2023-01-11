//Função de copiar email
let emailCopy = document.querySelector('#email-copy')
let btnCopy = document.querySelector('#btn-copy')
function copyEmail(){
    navigator.clipboard.writeText(emailCopy.textContent).then()
}
btnCopy.addEventListener('click', copyEmail)


//Função do menu mobile
function menuShow(){
    let menuMobileItems = document.querySelector('.menu-mobile-items')
    if(menuMobileItems.classList.contains('open')) {
        menuMobileItems.classList.remove('open')
        document.querySelector('.icon').src = "assets/imgs/menu-open.svg"
    } else{
        menuMobileItems.classList.add('open')
        document.querySelector('.icon').src = "assets/imgs/close-menu.svg"
    }
    
}
let btnMenuOpen = document.querySelector('#menuOpen')
btnMenuOpen.addEventListener('click', menuShow)