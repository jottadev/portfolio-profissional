let emailCopy = document.querySelector('#email-copy')
let btnCopy = document.querySelector('#btn-copy')
function copyEmail(){
    navigator.clipboard.writeText(emailCopy.textContent).then()
}
btnCopy.addEventListener('click', copyEmail)

