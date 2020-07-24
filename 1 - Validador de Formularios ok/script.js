const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmar = document.getElementById("confirmar");
//demonstrar mensagem de sucesso
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//Demonstrar Mensagem de erro
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className ="form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// verificador de email

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError (input, "Email nao e valido");
    }
}
//Verificar campos obrigatorios
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
      if(input.value.trim() === "") {
          showError(input, `${getFieldName(input)} Obrigatorio`);
      } else {
          showSuccess (input);
      }
    });
}


// verificar lenght de input
function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} deve ser maior que ${min}
        caracteres`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} deve ser menor que ${max} caracteres`);
    } else {
        showSuccess(input);
    }
}

//verificar senhas
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "Senhas nao batem");
    }
}

// pegar fieldname

function getFieldName (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Event Listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkRequired([username, email, senha, confirmar]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail (email);
    checkPasswordsMatch(senha, confirmar);
});