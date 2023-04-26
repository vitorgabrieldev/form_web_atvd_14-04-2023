document.querySelector('#hiddenAndShow1').addEventListener('click', () => {
        if (document.querySelector('#hiddenAndShow1').className.split(' ').indexOf('bi-eye-fill') + 1 == 2) {
            document.querySelector('#hiddenAndShow1').classList.remove('bi-eye-fill');
            document.querySelector('#hiddenAndShow1').classList.add('bi-eye-slash-fill');
            document.querySelector('#inputPass').type = "text";
            // Apenas queria testar uma forma diferente de fazer isto sem ser com display none
            // Normalmente iria usar o jquery com hasclass() :)
        } else {
            document.querySelector('#hiddenAndShow1').classList.add('bi-eye-fill');
            document.querySelector('#hiddenAndShow1').classList.remove('bi-eye-slash-fill');
            document.querySelector('#inputPass').type = "password";
        };
});
document.querySelector('#hiddenAndShow2').addEventListener('click', () => {
    if (document.querySelector('#hiddenAndShow2').className.split(' ').indexOf('bi-eye-fill') + 1 == 2) {
        document.querySelector('#hiddenAndShow2').classList.remove('bi-eye-fill');
        document.querySelector('#hiddenAndShow2').classList.add('bi-eye-slash-fill');
        document.querySelector('#inputRP').type = "text";
    } else {
        document.querySelector('#hiddenAndShow2').classList.add('bi-eye-fill');
        document.querySelector('#hiddenAndShow2').classList.remove('bi-eye-slash-fill');
        document.querySelector('#inputRP').type = "password";
    };
});