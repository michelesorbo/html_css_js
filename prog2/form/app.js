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

/*Da scrivere in validator.js */
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

function checkStep2(conf){ //Completare controllo telefono
    resetErrorMessage(conf)
    let ver_telefono
    const email = conf.formApp.elements['email'].value
    const telefono = conf.formApp.elements['telefono'].value
    
    if(telefono[0] == "+"){
        ver_telefono = telefono.slice(1)
    }else{
        ver_telefono = telefono
    }
    
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
        if(!isNaN(ver_telefono)){ //  /^\+?\d[0-9 .]{7,12}\d$/
            return conf.stepValid = true
        }else{
            showErrorMessage(conf, "Telefono non valido")
        }
    }else{
        showErrorMessage(conf, "Email non valido")
    }
}

function checkStep3(conf){ 
    resetErrorMessage(conf)
    const cap = conf.formApp.elements['cap'].value
    if(cap.length === 5 && !isNaN(cap)){ //Opzione con REG EXP /^[0-9]{5}$/
        alert("I moduli sono stati compilati correttamente")
        conf.formApp.submit()
    }else{
        showErrorMessage(conf, "CAP non valido!")
    }
}

function showErrorMessage(conf, msg){
    conf.errorMessage.textContent = msg
}

function resetErrorMessage(conf){
    conf.errorMessage.textContent = ''
} 


//DA INSERIRE NEL FILE INDICATORI.JS
const setStepForm = conf => {
    const stepMargin = (conf.currentStep - 1) * (100 + conf.GAP)
    conf.formStepWrapper.style.marginLeft = `-${stepMargin}%`
}


const setIndicator = conf =>{
    conf.indicatoriStep.forEach((item, i) => {
        item.className = 'n-step ' + (i < conf.currentStep - 1 ? 'valid' : 'next')
        item.className = (i === conf.currentStep - 1) ? 'n-step current' : item.className
    });

    //Setto la visibilità del pulsante prev
    conf.btnPrev.style.display = conf.currentStep > 1 ? 'inline' : 'none'
    conf.btnNext.textContent = conf.currentStep === conf.STEP_NUM ? 'Completa' : 'Next'
}