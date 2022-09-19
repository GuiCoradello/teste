const inputs = document.querySelectorAll('[data-inputs]');
const selecionarInput = document.querySelector('[data-selecionarInput]');
selecionarInput.addEventListener('click',() => {
    for(let i = 0 ; i < inputs.length ;i++){
        if(!inputs[i].checked){
         inputs[i].setAttribute('checked', 'checked')
        }

    }

})

const desmarcarInput = document.querySelector('[data-desmarcarInput]');
desmarcarInput.addEventListener('click',() => {
 for(let i= 0 ; i< inputs.length ; i++){
    if(inputs[i].checked){
        inputs[i].removeAttribute('checked', 'checked')
       }
 }
})
