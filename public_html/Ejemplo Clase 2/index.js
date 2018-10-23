var edat ="30"; //string

if(edat == 30){
    console.log(edat+ " Tiene el mismo valor que "+30);
}
if(edat === 30){
    console.log(edat+ " Tiene el mismo valor y tipo que "+30);
}

edat="treinta";

let nombre = "Juanjo";  //string

for(var k=0; k<5; k++){
    const o=10;
    console.log(k);    
}
console.log("Fuera del bucle!:"+k);
muestraEdad();

function muestraEdad(){
   
    let miInput= document.getElementById("inputEdad");
    let edat = miInput.value;
    
    let miDiv = document.getElementById("mostrarTexto");
    miDiv.innerHTML ="  Edat: "+edat + " Nombre"+nombre;
    
    console.log("  Edat: "+edat + " Nombre"+nombre);
    alert("  Edat: "+edat + " Nombre"+nombre);
  
}
//document.write("Edat:"+edat + "Nombre"+nombre);



