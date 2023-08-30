//Variables Globales
let flagNavegacion = true
                                       

//Funciones utilizadas
function menuInicio(opcion){
    opcion = Number(prompt("Que tipo de operación desea realizar? \n 1.- Calcular el factorial de un número"+
                                                                 "\n 2.- Calcular la raiz cuadrada de un número"+ 
                                                                 "\n 3.- Calcular la potencia de un número"+ 
                                                                 "\n 4.- Calcular la serie Fibonacci"+
                                                                 "\n 5.- Extra - Conversion de unidades"))
    return opcion
}

function menuFactorial(){
    numero = prompt("Ingrese el número para calcular el factorial: ")    
    if(numero === null){
        return
    }else if (!isNaN(numero) && !(numero === null)) {
        numero = Number(numero)
        resultado = calcularFactorial(numero)
        alert("El factorial de "+numero+"! es: "+resultado)
        continuar = confirm("Desea continuar calculando factoriales?")
        if(continuar){
            menuFactorial()
        } 
    } else {
        alert("Por favor, ingrese un número válido.");
        menuFactorial()
    }
}

function calcularFactorial(numero){
    let factorial =numero
    for (let i = 1; i < numero; i++) {
        factorial=factorial*(numero-i) 
    }
    return factorial;
}

function menuRaizCuadrada(){
    numero = prompt("Ingrese el número para calcular la raiz cuadrada: ")    
    if(numero === null){
        return
    }else if (!isNaN(numero) && !(numero === null)) {
        numero = Number(numero)
        resultado = Math.sqrt(numero);
        alert("La raiz cuadrada de "+numero+" es: "+resultado)
        continuar = confirm("Desea continuar calculando raices cuadradas?")
        if(continuar){
            menuRaizCuadrada()
        }    
    } else {
        alert("Por favor, ingrese un número válido.");
        menuFactorial()
    }
}

function menuPotencia(){
    numeroBase = prompt("Primero ingrese el número base: ")
    numeroPotencia = prompt("ahora ingrese a que potencia desea elevar el numero base: ")
    if(numeroBase === null || numeroPotencia === null){
        return
    }else if (!isNaN(numeroBase) && !(numeroBase === null) && !isNaN(numeroPotencia) && !(numeroPotencia === null) ) {
        numeroBase = Number(numeroBase)
        numeroPotencia = Number(numeroPotencia)
        resultado = Math.pow(numeroBase, numeroPotencia)
        alert("El numero: "+numeroBase+" elevado a la potencia de: "+numeroPotencia+" es: "+resultado);
        continuar = confirm("Desea continuar calculando potencias?")
        if(continuar){
            menuPotencia()
        } 
    }else {
        alert("Por favor, ingrese valores validos");
        menuPotencia();
    }
}

function menuFibonacci(){
    numero = prompt("Ingrese la cantidad de digitos que desea de la serie fibonacci")
    if(numero === null){
        return
    }else if (!isNaN(numero) && !(numero === null)) {
        numero = Number(numero)
        resultado = calcularFibonacci(numero)
        alert("La serie fibonacci de "+numero+" digitos es: \n"+resultado)
        continuar = confirm("Desea continuar calculando la serie fibonacci?")
        if(continuar){
            menuFibonacci()
        }    
    } else {
        alert("Por favor, ingrese un número válido.");
        menuFactorial()
    }
}

function calcularFibonacci(numero){
  let a = 1;
  let b = 1;
  let contador = 2; 
  let serie = "1, 1"; 
  if(numero == 1){
    serie= "1"
  }else{
    while (contador < numero) {
        const siguiente = a + b;
        serie += ", " + siguiente;
        a = b;
        b = siguiente;
        contador++;
      }
  }
  return serie;
}



//Logica
alert("Bienvenido a la aplicacion de operaciones matemáticas") 
do {
    switch( menuInicio()){
        case 1: 
            menuFactorial();
            break;
        case 2:
            menuRaizCuadrada()
            break;
        case 3:
            menuPotencia()
            break;
        case 4:
            menuFibonacci()
            break;
        case 5:
            console.log("5")
            break;
        default:
            alert("Ingrese una opcion del 1 al 5")
            break;
    }
} while (flagNavegacion);
