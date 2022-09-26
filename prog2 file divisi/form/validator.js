const checkForm = conf => {
    switch (conf.currentStep) {
        case 1: checkStep1(conf); break
        case 2: checkStep2(conf); break
        case 3: checkStep3(conf); break
    }
}

function checkStep1(conf) {
    resetErrorMessage(conf)
    if(
        conf.formApp.elements['nome'].value.length >= 2 &&
        conf.formApp.elements['cognome'].value.length >= 2
    ) {
        return conf.stepValid = true
    }
    showErrorMessage(conf, 'Compilare i campi obbligatori *')
}

function checkStep2(conf) {
    resetErrorMessage(conf)
    let ver_tel;
    const email = conf.formApp.elements['email'].value
    const telefono = conf.formApp.elements['telefono'].value

    if(telefono[0] == '+'){
        ver_tel = telefono.slice(1);
    }else{
        ver_tel = telefono;
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

function checkStep3(conf) {
    resetErrorMessage(conf)
    const cap = conf.formApp.elements['cap'].value
    if(/^[0-9]{5}$/.test(cap)){
        alert('I moduli sono stati compilati correttamente!')
        conf.formApp.submit()
    }else{
        showErrorMessage(conf, 'CAP non valido!')
    }
}

function showErrorMessage(conf, msg) {
    conf.errorMessage.textContent = msg
}
function resetErrorMessage(conf) {
    conf.errorMessage.textContent = ''
}

export default checkForm
