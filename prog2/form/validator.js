const checkForm = conf => {
    console.log("Sono validator")
}

/*Da scrivere in validator.js
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
} */

export default checkForm