valorHora = document.querySelector(".valorHora")
valorPesoAhorro = document.querySelector(".valorPesoAhorro")
reset = document.querySelector(".reset")
horaNormalLaV = document.querySelector(".horaNormalLaV")
horaAl50LaV = document.querySelector(".horaAl50LaV")
calcular1 = document.querySelector(".calcular1")
resultado1 = document.querySelector(".resultado1")
horaSabadoAl50 = document.querySelector(".horaSabadoAl50")
horaSabadoAl100 = document.querySelector(".horaSabadoAl100")
resultado2 = document.querySelector(".resultado2")
calcular2 = document.querySelector(".calcular2")
horaDomingoFeriadoAl100 = document.querySelector(".horaDomingoFeriadoAl100")
resultado3 = document.querySelector(".resultado3")
calcular3 = document.querySelector(".calcular3")
sumaTotal = document.querySelector(".sumaTotal")
sumaTotalConPesoAhorro = document.querySelector(".sumaTotalConPesoAhorro")
horasPesoAhorro = document.querySelector(".horasPesoAhorro")
calcularPesoAhorro = document.querySelector(".calcularPesoAhorro")
divresultadoPesoAhorro = document.querySelector(".resultadoPesoAhorro")
SumarPesoAhorro = document.querySelector(".SumarPesoAhorro")

resetValores = () => {
    valorHora.value = "0"
    valorPesoAhorro.value = "0"
    horaNormalLaV.value = "0"
    horaAl50LaV.value = "0"
    resultado1.innerHTML = ""
    horaSabadoAl50.value = "0"
    horaSabadoAl100.value = "0"
    resultado2.innerHTML = ""
    horaDomingoFeriadoAl100.value = "0"
    resultado3.innerHTML = ""
    sumaTotal.innerHTML = ""
    sumaTotalConPesoAhorro.innerHTML = ""
    horasPesoAhorro.innerHTML = ""
    divresultadoPesoAhorro.innerHTML = ""

}

const obtenerResultado = (valorHora, horasNormales, horasAl50, horasAl100) => {
    const result = valorHora * horasNormales + ((valorHora * horasAl50) *1.5) + ((valorHora * horasAl100)*2)
    return result;
}

const actualizarResultado = (resultadoElement, valor) => {
    resultadoElement.innerHTML = valor;
}

sumaTotal1 = () => {

    const resultado1convertido = parseFloat(resultado1.innerHTML) || 0;
    const resultado2convertido = parseFloat(resultado2.innerHTML) || 0;
    const resultado3convertido = parseFloat(resultado3.innerHTML) || 0;

    sumaTotal2 = resultado1convertido + resultado2convertido + resultado3convertido

    sumaTotal.innerHTML = sumaTotal2
}


ContarHorasPesoAhorro = () => {

    const valorHoraNormalLaV = parseFloat(horaNormalLaV.value);
    const valorHoraAl50LaV = parseFloat(horaAl50LaV.value);
    const valorHoraSabadoAl50 = parseFloat(horaSabadoAl50.value);
    const valorHoraSabadoAl100 = parseFloat(horaSabadoAl100.value);
    const valorHoraDomingoFeriadoAl100 = parseFloat(horaDomingoFeriadoAl100.value);

    sumaHorasPesoAhorro = valorHoraNormalLaV + valorHoraAl50LaV + valorHoraSabadoAl50 + valorHoraSabadoAl100 +  valorHoraDomingoFeriadoAl100
    horasPesoAhorro.innerHTML = sumaHorasPesoAhorro
}

calcularResultadoPesoAhorro = () => {
    const horaPesoAhorroConvertido = parseFloat(horasPesoAhorro.innerHTML);
    const valorPesoAhorroConvertido = parseFloat(valorPesoAhorro.value);

    resultadoPesoAhorro = valorPesoAhorroConvertido * horaPesoAhorroConvertido
    divresultadoPesoAhorro.innerHTML = resultadoPesoAhorro

}   

sumaTotalConPesoAhorro1 = () => {

    const sumaTotalconvertido = parseFloat(sumaTotal.innerHTML);
    const sumaTotalConPesoAhorroConvertido = parseFloat(divresultadoPesoAhorro.innerHTML);


    sumaTotalConPesoAhorro2 = sumaTotalconvertido + sumaTotalConPesoAhorroConvertido

    sumaTotalConPesoAhorro.innerHTML = sumaTotalConPesoAhorro2
}

const obtenerYActualizarResultados = () => {
    const result1 = obtenerResultado (valorHora.value,  horaNormalLaV.value, horaAl50LaV.value, 0)
    actualizarResultado (resultado1,result1)

    const result2 = obtenerResultado (valorHora.value, 0, horaSabadoAl50.value, horaSabadoAl100.value)
    actualizarResultado (resultado2,result2)

    const result3 = obtenerResultado (valorHora.value, 0, 0, horaDomingoFeriadoAl100.value)
    actualizarResultado (resultado3,result3)


    sumaTotal1()    
    ContarHorasPesoAhorro()   


}

reset.addEventListener("click", resetValores);
calcular1.addEventListener("click", obtenerYActualizarResultados)
calcular2.addEventListener("click", obtenerYActualizarResultados)
calcular3.addEventListener("click", obtenerYActualizarResultados)
calcularPesoAhorro.addEventListener("click", calcularResultadoPesoAhorro)
SumarPesoAhorro.addEventListener("click", sumaTotalConPesoAhorro1)



// Calcuadora

const pantalla = document.querySelector(".pantalla")
const botones = document.querySelectorAll(".btns-calc")

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        if (boton.id === "c") {
            pantalla.textContent = "0"
            return;
        }

        if(boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR"){
                pantalla.textContent = "0"
            } else {
                pantalla.textContent = pantalla.textContent.slice(0,-1)
            }
            return;
        }

        if (boton.id === "igual") {
            try{
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "ERROR"
            }
            return
        }


        botonApretado = boton.textContent

        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
            pantalla.textContent = botonApretado
        } else pantalla.textContent += botonApretado

        })
})


