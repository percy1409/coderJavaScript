//la entrada al parque cuesta $50 para menores de 5,$100 entre
//5 y 10, y $150 mayores de 10
let edad = Number(prompt("Ingrese edad"))

let esMayor =  edad > 18

if(esMayor){
  alert("Eres mayor de edad ")
}else{
  alert("Eres menor de edad")
}