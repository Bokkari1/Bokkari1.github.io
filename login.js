function validarFormulario() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
                alert('Favor de completar todos los campos');
            } else {
                if (password.length < 8) {
                    alert('La contraseña debe tener al menos 8 caracteres.');
                } else {
                    if (validacioncorreo(email)) {
                        document.getElementById('result').innerHTML = 'Formulario enviado correctamente. Correo: ' + email;
                    } else {
                        mostrarErrorCorreo();
                    }
                }
            }
        }

function validacioncorreo(email) {
    
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(email);
}

function mostrarErrorCorreo() {
            alert('El formato del correo electrónico no es válido. Ingrese un correo válido.');
        }

document.addEventListener("DOMContentLoaded", function () {
    console.log("Hello World");

    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');

    console.log(inputEmail);
    console.log(inputPassword);

    var correoValido = validacioncorreo('usuario@correo.com');

    if (correoValido) {
        console.log('Correo electrónico válido');
    } else {
        console.log('Correo electrónico no válido');
    }
});