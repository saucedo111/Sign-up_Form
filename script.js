let pass = document.querySelector('#password')
let pass2 = document.querySelector('#cpassword')
let div = document.querySelector('.errorT')

pass.addEventListener('keyup', check)
pass2.addEventListener('keyup', check)
div.style.visibility= 'hidden'
function check(){
    if (pass.value === pass2.value) {
        pass.classList.remove('error')
        pass2.classList.remove('error')
        div.style.visibility= 'hidden'
    } else {
        pass.classList.add('error')
        pass2.classList.add('error')
        div.style.visibility= 'visible'

    }
}
