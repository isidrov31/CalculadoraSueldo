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

}

sumaTotal1 = () => {

    const resultado1convertido = parseFloat(resultado1.innerHTML) || 0;
    const resultado2convertido = parseFloat(resultado2.innerHTML) || 0;
    const resultado3convertido = parseFloat(resultado3.innerHTML) || 0;

    sumaTotal2 = resultado1convertido + resultado2convertido + resultado3convertido

    sumaTotal.innerHTML = sumaTotal2
}

sumaTotalConPesoAhorro1 = () => {

    const sumaTotalconvertido = parseFloat(sumaTotal.innerHTML) || 0;
    const sumaTotalConPesoAhorroConvertido = parseFloat(sumaTotalConPesoAhorro.innerHTML) || 0;


    sumaTotalConPesoAhorro2 = sumaTotalconvertido + sumaTotalConPesoAhorroConvertido

    sumaTotalConPesoAhorro.innerHTML = sumaTotalConPesoAhorro2
}


multiplicacion1 = () => {
    resultadosuma1 = (valorHora.value * horaNormalLaV.value) + ((valorHora.value * horaAl50LaV.value)*0.5)
    resultado1.innerHTML = resultadosuma1
    
    sumaTotal1();
    sumaTotalConPesoAhorro1();

}

multiplicacion2 = () => {
    resultadosuma2 = (valorHora.value * horaSabadoAl50.value)*1.5 + ((valorHora.value * horaSabadoAl100.value)*2)
    resultado2.innerHTML = resultadosuma2

    sumaTotal1();
    sumaTotalConPesoAhorro1();

}

multiplicacion3 = () => { 
    resultadosuma3 = (valorHora.value * horaDomingoFeriadoAl100.value) *2
    resultado3.innerHTML = resultadosuma3

    sumaTotal1();
    sumaTotalConPesoAhorro1();

}

reset.addEventListener("click", resetValores);
calcular1.addEventListener("click", multiplicacion1)
calcular2.addEventListener("click", multiplicacion2)
calcular3.addEventListener("click", multiplicacion3)

sumaTotal1()
sumaTotalConPesoAhorro1()
