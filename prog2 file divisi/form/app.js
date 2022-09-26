// Entry point
import checkForm from '/form/validator.js'
import { setStepForm, setIndicator } from '/form/indicatori.js'

const conf = {
    btnNext: document.getElementById('btn-next'),
    btnPrev: document.getElementById('btn-prev'),
    formStepWrapper: document.getElementById('form-step-wrapper'),
    errorMessage: document.getElementById('error-message'),
    indicatoriStep: document.querySelectorAll('#indicatori > div'),
    formApp: document.forms['form-app'],
    STEP_NUM: 3,
    GAP: 20,
    currentStep: 1,
    stepValid: false
}

const stepValidatorEvent = e => {
    e.stopPropagation()
    e.preventDefault()

    // Controllo validità campi
    checkForm(conf)
}

const stepEvent = e => {
    e.stopPropagation()
    e.preventDefault()

    // Gestione step
    if(e.target.id === 'btn-next') {
        if(conf.currentStep === conf.STEP_NUM || !conf.stepValid) return
        conf.currentStep++
        conf.stepValid = false
    } else {
        conf.currentStep--
    }

    setIndicator(conf)
    setStepForm(conf)
}

export default () => {
    console.log('App in esecuzione...')
    conf.btnNext.addEventListener('click', stepValidatorEvent)
    conf.btnNext.addEventListener('click', stepEvent)
    conf.btnPrev.addEventListener('click', stepEvent)
}
