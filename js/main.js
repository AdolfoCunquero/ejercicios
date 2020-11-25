let btnSaludar = document.getElementById("saludar")
let btnSaludarPersona = document.getElementById("saludar_persona")
let btnValidar = document.getElementById("validar_form")

btnSaludar.addEventListener("click",function(){
    mostrarMensaje("success","Hola, esto es un saludo")
})

btnSaludarPersona.addEventListener("click",function(){
    let nombre = document.getElementById("nombre")
    let edad = document.getElementById("edad")
    mostrarMensaje("success",'Hola '+nombre.value+' tienes '+edad.value + ' años')
})

btnValidar.addEventListener("click",function(){
    let nombre = document.getElementById("nombre1").value
    let edad = document.getElementById("edad1").value
    let email = document.getElementById("email").value 

    if (!nombre){
        mostrarMensaje("error","Ingrese un nombre")
        return
    }else{
        let resultado = nombre.match(/^[A-Za-z ]+$/)
        if(!resultado){
            mostrarMensaje("error","Ingrese un nombre valido")
            return
        }
    }

    if (!edad){
        mostrarMensaje("error","Ingrese una edad")
        return
    }

    if(!email){
        mostrarMensaje("error","Ingrese un email")
        return
    }else{
        let resultado = email.match(/^[A-Za-z0-9-_.]+@[A-Za-z]+\.[A-Za-z]{2,4}(\.)?([A-Za-z]{2})?$/)
        if(!resultado){
            mostrarMensaje("error","Ingrese un email valido")
            return
        }
    }
    mostrarMensaje("success","Bienvenido")
})

function mostrarMensaje(tipo,mensaje){
    Swal.fire(
        mensaje,
        '',
        tipo
      )
}