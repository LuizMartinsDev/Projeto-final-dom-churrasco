
const formulario = document.querySelector("#form");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputCep = document.querySelector("#cep");
const buttonForm = document.querySelector("#buttonForm");

const formularioChurrasco = document.querySelector("#formularioChurrasco");
const inputHomens = document.querySelector("#homens");
const inputMulheres = document.querySelector("#mulheres");
const inputCriancas = document.querySelector("#criancas");
const inputPessoasQueBebem = document.querySelector("#pessoasQueBebem");


const emailValidacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cepValidacao = /^\d{8}$/;
const nomeLocalStorage = localStorage.getItem("nome");
const emailLocalStorage = localStorage.getItem("email");
const cepLocalStorage = localStorage.getItem("cep");


const quantidadeCarne = document.getElementById('quantidadeCarne')
const quantidadeCerveja = document.getElementById('quantidadeCerveja')
const quantidadeSal = document.getElementById('quantidadeSal')
const quantidadeRefrigerante = document.getElementById('quantidadeRefrigerante')
const quantidadeAgua = document.getElementById('quantidadeAgua')
const quantidadeCarvao = document.getElementById('quantidadeCarvao')
const quantidadeGelo = document.getElementById('quantidadeGelo')
const quantidadePaoAlho = document.getElementById('quantidadePaoAlho')



if(nomeLocalStorage === null){
    formulario.addEventListener("submit", (event) => {
         event.preventDefault();
    
       
        const mensagemErroNome = document.getElementById('error-message-nome');
        const mensagemErroEmail = document.getElementById('error-message-email');
        const mensagemErroCep = document.getElementById('error-message-cep');
    
    
    
        if(inputNome.value == "") {
            mensagemErroNome.textContent = 'Por favor, insira um nome válido.';
        } else {
            mensagemErroNome.textContent = ""
            localStorage.setItem('nome', inputNome.value)
        }
    
        if(!emailValidacao.test(inputEmail.value)){
            mensagemErroEmail.textContent = 'Por favor, insira um e-mail válido.';
        } else{
            mensagemErroEmail.textContent = ""
            localStorage.setItem('email', inputEmail.value)
        }
    
        if(!cepValidacao.test(inputCep.value)){
            mensagemErroCep.textContent = 'Por favor, insira um cep válido.';
        } else{
            mensagemErroCep.textContent = '';
            localStorage.setItem('cep', inputCep.value)
        }
    
       
    
    })
    
   
            buttonForm.addEventListener('click', () => {
                if(inputNome.value !== "" && emailValidacao.test(inputEmail.value) && cepValidacao.test(inputCep.value)){
                    location.reload()
                }
            })
           
        
    
} else if(emailLocalStorage !== null && cepLocalStorage !== null && emailLocalStorage !== null) {
    const sectionFormulario = document.querySelector('.container-form-promo');
    sectionFormulario.innerHTML = `<p class="mensagemCadastro">Cadastro feito com sucesso!</p>`
}


formularioChurrasco.addEventListener('submit', (event) => {
    event.preventDefault();
    

    const mensagemErro = document.querySelectorAll('.error-message-number');
  
    if(inputHomens.value < 0){
        mensagemErro[0].textContent = "Valores negativos não são permitidos"
    } else {
        mensagemErro[0].textContent = ""
    }

    if(inputMulheres.value < 0){
        
        mensagemErro[1].textContent = "Valores negativos não são permitidos"
    } else {
        mensagemErro[1].textContent = ""
    }

    if( inputCriancas.value < 0){
        mensagemErro[2].textContent = "Valores negativos não são permitidos"
    } else {
        mensagemErro[2].textContent = ""
    }

    if(inputPessoasQueBebem.value < 0){
        mensagemErro[3].textContent = "Valores negativos não são permitidos"
    } else {
        mensagemErro[3].textContent = ""
    }

    let acumuladorCarne = 0;
    let acumuladorCerveja = 0;
    let acumuladorSal = 0;
    let acumuladorRefrigerante = 0;
    let acumuladorAgua = 0;
    let acumuladorCarvao = 0;
    let acumuladorGelo = 0;
    let acumuladorPaoAlho = 0;
    

    if(inputHomens.value > 0){
        acumuladorCarne += inputHomens.value * 0.4;
        acumuladorSal += inputHomens.value * 0.04;
        acumuladorRefrigerante += (inputHomens.value / 5) * 2;
        acumuladorAgua += inputHomens.value / 5;
        acumuladorCarvao += inputHomens.value / 3;
        acumuladorGelo += (inputHomens.value / 10) * 5
        acumuladorPaoAlho += inputHomens.value * 2;
        
        quantidadeCarne.textContent = `${acumuladorCarne.toFixed(2)} kg`;
        quantidadeSal.textContent = `${acumuladorSal.toFixed(2)} kg`;
        quantidadeRefrigerante.textContent = `${acumuladorRefrigerante.toFixed(2)} litros`;
        quantidadeAgua.textContent = `${acumuladorAgua.toFixed(2)} litros`
        quantidadeCarvao.textContent = `${acumuladorCarvao.toFixed(2)} kg`;
        quantidadeGelo.textContent = `${acumuladorGelo.toFixed(2)} kg`;
        quantidadePaoAlho.textContent = `${acumuladorPaoAlho.toFixed(2)} uni.`

        
    } 

    if(inputMulheres.value > 0){
        acumuladorCarne += inputMulheres.value * 0.32;
        acumuladorSal += inputMulheres.value * 0.04;
        acumuladorRefrigerante += (inputMulheres.value / 5) * 2;
        acumuladorAgua += inputMulheres.value / 5;
        acumuladorCarvao += inputMulheres.value / 3;
        acumuladorGelo += (inputMulheres.value / 10) * 5
        acumuladorPaoAlho += inputMulheres.value * 2;

        quantidadeCarne.textContent = `${acumuladorCarne.toFixed(2)} kg`
        quantidadeSal.textContent = `${acumuladorSal.toFixed(2)} kg`
        quantidadeRefrigerante.textContent = `${acumuladorRefrigerante.toFixed(2)} litros`
        quantidadeAgua.textContent = `${acumuladorAgua.toFixed(2)} litros`
        quantidadeCarvao.textContent = `${acumuladorCarvao.toFixed(2)} kg`
        quantidadeGelo.textContent = `${acumuladorGelo.toFixed(2)} kg`;
        quantidadePaoAlho.textContent = `${acumuladorPaoAlho.toFixed(2)} uni.`;
    }

    if(inputCriancas.value > 0){
        acumuladorCarne += inputCriancas.value * 0.2
        acumuladorSal += inputCriancas.value * 0.04;
        acumuladorAgua += inputCriancas.value / 5;
        acumuladorRefrigerante += (inputCriancas.value / 5) * 2;
        acumuladorCarvao += inputCriancas.value / 3
        acumuladorGelo += (inputCriancas.value / 10) * 5   
        acumuladorPaoAlho += inputCriancas.value * 1;

        quantidadeCarne.textContent = `${acumuladorCarne.toFixed(2)} kg`;
        quantidadeSal.textContent = `${acumuladorSal.toFixed(2)} kg`;
        quantidadeRefrigerante.textContent = `${acumuladorRefrigerante.toFixed(2)} litros`;
        quantidadeAgua.textContent = `${acumuladorAgua.toFixed(2)} litros`;
        quantidadeCarvao.textContent = `${acumuladorCarvao.toFixed(2)} kg`;
        quantidadeGelo.textContent = `${acumuladorGelo.toFixed(2)} kg`;
        quantidadePaoAlho.textContent = `${acumuladorPaoAlho.toFixed(2)} uni.`;
    }

    if(inputPessoasQueBebem.value > 0){

         acumuladorCerveja += inputPessoasQueBebem.value * 3;
         quantidadeCerveja.textContent = `${acumuladorCerveja} garrafas`
    } else{
        quantidadeCerveja.textContent = ``
    }
})




