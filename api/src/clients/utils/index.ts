const validateCPF = (cpf) => {

    cpf = cpf.replace(/[^\d]+/g, '')

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false

    let sum = 0
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf[i]) * (10 - i)
    }
    let firstDigitalChecker = 11 - ((sum % 11))
    if (firstDigitalChecker >= 10) {
        firstDigitalChecker = 0
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf[i]) * (11 - i)
    }
    let secondDigitChecker = (11 - (sum % 11))
    if (secondDigitChecker >= 10) {
        secondDigitChecker = 0
    }

    return cpf[9] == firstDigitalChecker && cpf[10] == secondDigitChecker
}

export default validateCPF
