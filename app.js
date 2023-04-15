document.querySelector('#btnSendForm').addEventListener('click', () => verifyForm.verifyDATA());

const nameInputs = [
    'Nome',
    'Telefone',
    'Data de Nascimento',
    'CPF',
    'CEP',
    'Bairro',
    'Rua',
    'Número',
    'E-mail',
    'Senha',
];

var verifyForm = {
    verifyDATA: function() {
        let DATA = this.request_data();
        if(DATA.senhaAgain&&DATA.nome&&DATA.tell&&DATA.DN&&DATA.CPF&&DATA.CEP&&DATA.bairro&&DATA.rua&&DATA.num&&DATA.email&&DATA.senha) {
            let verifyEmail_request = this.verify_email(DATA.email);
            let verifyPassword_request = this.verify_password(DATA.senha, DATA.senhaAgain);
            if(verifyEmail_request == 1&&verifyPassword_request == 1) {
                alert('você foi cadastrado com sucesso!');
            };
        } else {
            let arrayReset = document.getElementsByTagName('input');
            for(let i = 0;i < 10; i ++) {
                arrayReset[i].classList.remove('border_red');
            };

            let inputsNull = [];
            let tokenItem = 0;
            let tokenNull = [];

            let arrayObject = Object.entries(DATA);
            arrayObject.forEach(element => {
                if(element[1].length === 0) {
                    inputsNull.push(` ${nameInputs[tokenItem]}`);
                    tokenNull.push(tokenItem);
                    this.draw_input(0,tokenNull);
                };
                tokenItem ++;
            });
            let descrip = document.querySelector('.description__card');
            if(inputsNull.length == 10) {
                hiddenShow.show('Preencha todos os campos');
            } else {
                hiddenShow.show(`Os campos ${inputsNull} não foi preenchidos!`);
            };
        };
    },
    draw_input: function(type,token) {
        switch(type) {
            case 0: 
                token.forEach(element  => {
                    document.getElementsByTagName('input')[element].classList.add('border_red');
                });
            break;
            case 1:
                token.forEach(element  => {
                    document.getElementsByTagName('input')[token].classList.remove('border_red');
                });
            break; 
        };
    },
    request_data: function() {
        let DATA = {
            nome: document.querySelector('#inputName').value,
            tell: document.querySelector('#inputTell').value,
            DN: document.querySelector('#inputDN').value,
            CPF: document.querySelector('#inputCPF').value,
            CEP: document.querySelector('#inputCEP').value,
            bairro: document.querySelector('#inputBairro').value,
            rua: document.querySelector('#inputRua').value,
            num: document.querySelector('#inputNum').value,
            email: document.querySelector('#inputEmail').value,
            senha: document.querySelector('#inputPassword').value,
            senhaAgain: document.querySelector('#inputPasswordAgain').value
        };
        return DATA;
    },


    // Verify Datas
    verify_email: function(data) {
        let pattern = /@/;
        if(pattern.test(data) == true) {
            return 1;
        } else {
            hiddenShow.show("No campo e-mail insira o '@'!");
            return 0;
        };
    },
    verify_password: function(data1, data2) {
        if(data1.length >= 8) {
            if(data1 === data2) {
                return 1;
            } else {
            hiddenShow.show("As senha não são igual!");
                return 0;
            };
            // return 1;
        } else {
            hiddenShow.show("A senha deve conter acima ou 8 digitos!");
            return 0;
        };
    },
};

document.querySelector('#hiddenCard').addEventListener('click', () => hiddenShow.hidden());

var hiddenShow = { 
    hidden: function() {
        document.querySelector('.cardForm').classList.add('hidden');
    },
    show: function(txt) {
        window.scrollTo(0, 50);
        let descrip = document.querySelector('.description__card');
        descrip.innerHTML = txt;
        document.querySelector('.cardForm').classList.remove('hidden');
    },
};

document.querySelector('#typePassView').addEventListener('click', () => {
    let inputPass = document.querySelector('#inputPassword');
    if(inputPass.type === 'text') {
        inputPass.type = "password";
    } else {
        inputPass.type = "text";
    };
});