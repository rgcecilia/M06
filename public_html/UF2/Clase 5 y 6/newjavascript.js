function Alumno(){
    this.edat; this.nombre;
}
//CLASES
function MiClase(){
    this.alumnos=[];
    var alumno1 = new Alumno();
    this.alumnos.push(alumno1);
    
    this.numeroAlumnos="10";
    this.nombre="Los patitos felices";
    this.muestraAlumnos = function(){
        var numeroAlumnos=5;
        console.log("numero alumnos en la clase:"
                + this.numeroAlumnos);
          console.log("numero alumnos en la funcion:"
                + numeroAlumnos);
    };
    
}
var miObjeto = new MiClase();
miObjeto.numeroAlumnos =20;
console.log("numeroAlumnos:"+miObjeto.numeroAlumnos);
miObjeto.muestraAlumnos();



////ARRAYS
//var miArray = new Array(9,3,1,5);
var miArray = [9,3,1,5];

miArray[0] = "Hola";
miArray[5] = "Adios";
miArray["nom"+"bre"] = "Jose Luis";
miArray.apellido = "De todos los santos";
miArray["contactos"] = ["Maria","Juan","Josefa"];
console.log("--- INFO DEL ARRAY ----");
console.dir(miArray);
console.log(miArray[1]);
console.log(miArray["nombre"]);
console.log(miArray.apellido);

console.log("--- Contenido del Array- For clasico- ");
for(var k =0; k< miArray.length;k++){
    console.log(miArray[k]);
}

console.log("--- Contenido del Array- For/in- ");
for(var key in miArray){
    console.log( miArray[key]);
}


//FUNCIONES

function clickIniciaInterval() {
    var numero=0;
    window.setInterval(
            function() {
                numero++;
                document.getElementById("iniciaInterval")
                        .innerHTML += "nuevo Interval"+numero+" </br>";
            }
    , 1000);

}



function muestraMensaje(textoParametro, repeticion) {
    while (repeticion >= 0) {
        document.getElementById("hola").innerHTML += textoParametro + " para JoseLuis <br />";
        repeticion--;
    }
    if (repeticion == -1) {
        return repeticion;
    } else {
        return "Puede retornar un texto";
    }

}