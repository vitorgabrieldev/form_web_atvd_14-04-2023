document.querySelector('#containerForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Constumo só não usar o type="Submit" no button ;-;
    requestDatas();
});


const requestDatas = () => {
    let data = responseData();
    if(data.email&&data.fullName&&data.tell&&data.againPassword&&data.password) {
        verifyDatas(data);
    } else alert('Preencha todos os campos!');
};

const responseData = () => {
    let objectData = {
        'email': document.querySelector('#inputEmail').value,
        'fullName': document.querySelector('#inputFullName').value,
        'tell': document.querySelector('#inputTell').value,
        'password': document.querySelector('#inputPass').value,
        'againPassword': document.querySelector('#inputRP').value,
    };
    return objectData;
};


const verifyDatas = (data) => {
    let validEmail = verifyEmail(data.email);
    let validPasswords = validPassword(data.password,data.againPassword);
    let validName = globalThis.validName(data.fullName); 
    let validTell = globalThis.validTell(data.tell);

    if (validEmail == true && validPasswords == true && validName == true && validTell == true) {
        document.querySelector('#containerForm').classList.remove("show");
        document.querySelector('#containerForm2').classList.remove("hidden");
    } else {
        console.log('Error register!');
    };
};

const verifyEmail = (email) => {
    // var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    var re = /\S+@\S+\.\S+/;
    return re.test(email);    
};

const validPassword = (pass,againPass) => {
    if (pass.length >= 6) { 
        if (pass === againPass) { return true; } else alert('As senha não coicidem!');
    } else {
        alert('A senha deve conter acima de 6 dígitos!');
    };
};

function validName(name) {
    let words_name = name.split(" ");
    if (words_name.length > 1) {
        let regex = /[0-9]/;
        if (regex.test(name) != true) { return true; } else alert('Digite seu nome corretamente!');
    } else {
        alert('Digite seu nome completo!');
    };
};

function validTell(tell) {
    if (tell.length == 14) {
        var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
        if (regex.test(tell)) { return true } else console.log("Digite um telefone válido!");
    } else {
        alert('Digite um telefone válido!');
    };
};


document.querySelector('#containerForm2').addEventListener('submit', (event) => {
    event.preventDefault();
    requestDatas2();
});

function requestDatas2() {
    let data = responseData2();
    
    let verifyDate = globalThis.verifyDate(data.date);
    let verifyCpf = globalThis.verifyCpf(data.cpf);
    let verifyCep = globalThis.verifyCep(data.cep);

    if( verifyDate == true && verifyCpf == true && verifyCep == true && data.cidade && data.logradouro) {
        alert('Você foi cadastro com sucesso!');
    };
};

const responseData2 = () => {
    let objectData = {
        'date': document.querySelector('#inputDataDeNascimento').value,
        'cpf': document.querySelector('#inputCpf').value,
        'cep': document.querySelector('#inputCep').value,
        'cidade': document.querySelector('#inputCidade').value,
        'logradouro': document.querySelector('#inputRua').value,
    };
    return objectData;
};


function verifyDate(date) {
    if (parseInt(date.substr(0,4)) + 18 <= new Date().getFullYear()) { return true; } else alert('É necessário ter 18 anos!'); 
};

function verifyCpf(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) {alert('Digite um CPF válido!'); return false};
    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) {alert('Digite um CPF válido!'); return false};
    return true;
};

function verifyCep(cep) {
    let regex = /[0-9]/;
    if (regex.test(cep) == true) {
        if (cep.length == 8) {
            return true;
        } else {
            alert('Digite um cep válido!'); 
        };
    } else {
        alert('Digite um cep válido!');
    };
};