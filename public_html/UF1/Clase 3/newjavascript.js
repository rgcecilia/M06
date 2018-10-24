
console.log( isNaN("asdfa"));

eval( "saluda()");

function saluda(){
    console.log("saludos");
    var texto ="123456789";
    console.log(texto.substr(3,5));
    console.log(texto.substring(3,5));
    console.log(texto[3]);
}

var fecha = new  Date();

fecha.setDate(fecha.getDate()+1);
console.log(fecha.getDate()+"/"+fecha.getMonth()
        +" :: "+fecha.getHours()+":"+fecha.getMinutes());

console.log("navigator.userAgent:"+navigator.userAgent);
console.log("navigator.platform:"+navigator.platform ) ;

document.title="Ejemplo Document";
console.log(document.title);
console.log(document.URL);

document.getElementById("log").innerHTML=obtieneFecha();

window.setInterval( obtieneFecha , 1000 );
        
function obtieneFecha(){
    var fecha = new  Date();
    window.document.getElementById("log").innerHTML= fecha.getDate()+"/"+fecha.getMonth()     
            +" :: "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
   // return function(){console.log("hola");};
}

var windowChild= window.open("nuevaVentana.html","NewWindow","width=200,height=100");

window.setTimeout( function(){
    windowChild.document.getElementById("divChild").innerHTML="Soy tu padre";    
},1000);
