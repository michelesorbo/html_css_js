//Entry point
//import checkForm from './validator'

/* Metodo classico
let p_error = document.getElementById('error-message');
p_error.innerHTML = "Errore vecchio metodo";
*/

//Metodo ad oggetti
const conf = {
    btnNext: document.getElementById('btn-next'),
    btnPrev: document.getElementById('btn-prev'),
    errorMessage: document.getElementById('error-message'),
    formStepWrapper: document.getElementById('form-step-wrapper'),
    indicatoriStep: document.querySelectorAll('#indicatori > div'),
    formApp: document.forms['form-app'],
    STEP_NUM: 3,
    GAP: 20,
    currentStep: 1,
    stepValid: false
}

//conf.errorMessage.innerHTML = "Errore con oggetto conf";

const stepValidatorEvent = e => {
    e.stopPropagation()
    e.preventDefault()

    //Controllo validità dati
    checkForm(conf)
}

const stepEvent = e =>{
    e.stopPropagation()
    e.preventDefault()

    //Gestire gli step
    if(e.target.id === 'btn-next'){
        if(conf.currentStep === conf.STEP_NUM || !conf.stepValid) return
        conf.currentStep++
        conf.stepValid = false
    }else{
        conf.currentStep--
    }
    
    //console.log(conf.currentStep);
    setIndicator(conf)
    setStepForm(conf)
}


export default () => {
    console.log('App in esecuzione...');
    conf.btnNext.addEventListener('click', stepValidatorEvent)
    conf.btnNext.addEventListener('click', stepEvent)
    conf.btnPrev.addEventListener('click', stepEvent)
}


//Da scrivere in validator.js
const checkForm = conf => {
    console.log(conf.currentStep)
    switch(conf.currentStep){
        case 1: 
            checkStep1(conf);
            break;
        case 2:
            checkStep2(conf);
            break;
        case 3:
            checkStep3(conf);
            break;
    } 
}

function checkStep1(conf){
    resetErrorMessage(conf)
    if(conf.formApp.elements['nome'].value.length >= 2 && conf.formApp.elements['cognome'].value.length >= 2){
        return conf.stepValid = true
    }
    showErrorMessage(conf, 'Compilare i campi obbligatori')

}

function showErrorMessage(conf, msg){
    conf.errorMessage.textContent = msg
}

function resetErrorMessage(conf){
    conf.errorMessage.textContent = ''
}