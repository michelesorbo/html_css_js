//Entry point

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

}

const stepEvent = e => {
    
}


export default () => {
    console.log('App in esecuzione...');
    conf.btnNext.addEventListener('clik', stepValidatorEvent)
    conf.btnNext.addEventListener('clik', stepEvent)
    conf.btnPrev.addEventListener('click', stepEvent)
}