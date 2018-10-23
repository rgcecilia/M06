//SI ARRIBA DEL TODO se añade "use strict"
//No puedo redefinir los tipos de las variables
var edad = 30;
// Puedo redefinirla las veces que quiera
let nombre = "Juanjo"; 
// Con let no puedo redefinir la variable
// Pero si puedo cambiarle el valor! CUIDADO
// no puedo acceder a ella desde fuera del bloque donde se define
// Es el tipo de variable mas recomendado
const o = 10;
// no puedo acceder a ella desde fuera del bloque donde se define
// no puedo redefinirla
// no puedo cambiarle su valor

edat="treinta"; 
//  con var las variables se definen dentro de la funcion que las contiene,
//  en el aunque la haya definido en el for, puedo usarla fuera

const otravariable = 22; //Numerico
// Cuatro formas de mostrar informacion al usuario
// no la veo en la web, la veo en la consola del inspector
    console.log("Edad:"+edad + "Nombre"+nombre);
// Me muestra una ventana de alerta que detiene la carga de la web 
    window.alert("Edad:"+edad + "Nombre"+nombre);
// escribe en el html
    document.write("Edad:"+edad + "Nombre"+nombre);
   
// Estructuras de control de flujo
// Iguales que en java
// Incluyen continue, break y return
for(var k=0; k<5; k++){
    console.log(k);
}
console.log("Fuera del bucle!:"+k);

// Operadores
var edad = 30; // var edad="30";
if(edat==30){
    console.log(edat+ "Tiene el mismo valor que " +30);
}
// Con el === compara valor y tipo!!
// su opuesto es !==
if(edat===30){
    console.log(edat+ "Tiene el mismo valor y tipo que" +30);
}
 
 //EN html ctrl + escpacio me muestra todos los eventos
 //realizables en ese tipo de etiqueta

