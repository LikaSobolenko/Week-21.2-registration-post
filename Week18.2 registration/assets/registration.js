let errors = [];

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    };
}

function checkAll() {


    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        checkValidity(input);
    };


    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    if (emailField.value.match(mailFormat)) {
        console.log('УРА, мыло!');
    } else {
        errors.push("Ваш E-mail введен неверно!");
    };

    let passwordFormat = /^[a-z]+([-_]?[a-z0-9]+){8,}$/i;
    if (password.value.match(passwordFormat)) {
        console.log('УРА пароль!');
    } else {
        errors.push("Ваш Пароль введен неверно!");
    };

    let telFormat = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
    if (telField.value.match(telFormat)) {
        console.log('УРА телефон!');
    } else {
        errors.push("Ваш Телефон введен неверно!");
    };

    console.log(errors.length);

    if (errors.length === 0) {
        let user = {
            firstname: document.getElementById('first').value,
            lastname: document.getElementById('last').value,
            email: document.getElementById('emailField').value,
            tel: document.getElementById('telField').value,
            password: document.getElementById('password').value,
        };
        console.log(user);

        fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            })
            .then(response => response.json())
            .then(user => {
                console.log(user);
            })
            .catch(error => console.loge(error))




    } else {
        document.getElementById('errorsInfo').innerHTML = errors.join('<br/>');
        return errors = [];
    };



};