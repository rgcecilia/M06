/**
 * @author Raúl Gutiérrez Cecilia
 * @DAW M06 ACT 05
 */

/** 
 * Variables Globales para 
 * el juego de los numeros 
 */
var aciertos = 0;
var fallos = 0;
var ganas = 5;
var pierdes = 5;
var nueva = 0;

/** 
 * Con este evento iniciamos la función ini 
 * al cargarse la pagina
 */
window.addEventListener("load", ini, false);

/** 
 * Con esta función ponemos a la espera 
 * los distintos eventos asociados nuestra pagina
 * son todos de tipo click, sobre los distintos Divs de la misma
 */
function ini() {
    document.getElementById("inicioXML").addEventListener("click", inicioXml, false);
    document.getElementById("checkAjaxXML").addEventListener("click", checkAjaxXml, false);
    document.getElementById("inicioJSON").addEventListener("click", inicioJson, false);
    document.getElementById("checkAjaxJSON").addEventListener("click", checkAjaxJson, false);
}

/** 
 * Con esta función enviamos una peticion 
 * Ajax con los parametros inicio=si al archivo
 * aciertaNumeroXML.php, la respuesta xml
 * la enviamos a la funcion recibeNumeroXml()
 */
function inicioXml(){
    var xmlHttp = new XMLHttpRequest();
    var urlDestino="aciertaNumeroXML.php?inicio=si";
    xmlHttp.open("GET",urlDestino,true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState === 4){
            recibeNumeroXml(xmlHttp);
        }
    };
    xmlHttp.send(null);
}

/*
 * Recibe una respuesta Ajax en formato xml 
 * y la muestra por consola y pantalla
 * @param {ajax} xmlHttp
 */
function recibeNumeroXml(xmlHttp){
        if(xmlHttp.status === 200) {
        var respuesta = xmlHttp.responseXML;
        var numero = respuesta.getElementsByTagName("inicio");
        document.getElementById("mensaje").innerHTML = "Se ha generado un nuevo numero";
        console.log(numero[0].innerHTML);
    }
}

/** 
 * Con esta función enviamos una peticion 
 * Ajax con los parametros numero=(Valor Introducido) al archivo
 * aciertaNumeroXML.php, la consulta devuelta
 * la enviamos a la funcion compruebaNumeroXml()
 */
function checkAjaxXml(){
    var xmlHttp = new XMLHttpRequest();
    var miNumero = document.getElementById("numero").value;
    var urlDestino="aciertaNumeroXML.php?numero="+miNumero;
    xmlHttp.open("GET",urlDestino,true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState === 4){
            compruebaNumeroXml(xmlHttp);
        }
    };
    xmlHttp.send(null);
    }

/*
 * Recibe una respuesta AJAX 
 * y la muestra pantalla
 * comparando los numeros del juego, 
 * y sumando los fallos y aciertos
 * @param {xmlHttp} xml
 */
function compruebaNumeroXml(xmlHttp){
    if(xmlHttp.status === 200) {
        var respuesta = xmlHttp.responseXML;
        var encontrado = respuesta.getElementsByTagName("encontrado");
        var mensaje = respuesta.getElementsByTagName("mensaje");
     
        document.getElementById("mensaje").innerHTML = mensaje[0].innerHTML;
        document.getElementById("encontrado").innerHTML = encontrado[0].innerHTML;
        
        if(encontrado[0].innerHTML === "si"){ // Sumamos los aciertos, si llegamos al limite, se inicia una nueva partida
            aciertos++;
            document.getElementById("aciertos").innerHTML = aciertos;
            inicioXml();
            if(aciertos == ganas){
                alert("Victoria!!!");
                nueva = 1;
            }      
        }else{ // Sumamos los errores, si llegamos al limite, se inicia una nueva partida
            fallos++;
            document.getElementById("errores").innerHTML = fallos;
            if(fallos == pierdes) {
                alert("Derrota");
                nueva = 1;
            }
        }
        if(nueva == 1){ //inicia automaticamente una nueva partida
            aciertos = 0;
            fallos = 0;
            nueva = 0;
            document.getElementById("aciertos").innerHTML = aciertos;
            document.getElementById("errores").innerHTML = fallos;
            inicioXml();
        }
    }
}

/** 
 * Con esta función enviamos una peticion 
 * Ajax con los parametros inicio=si al archivo
 * aciertaNumeroJson.php, la respuesta Json
 * la enviamos a la funcion recibeNumeroJson()
 */
function inicioJson(){
    var xmlHttp = new XMLHttpRequest();
    var urlDestino="aciertaNumeroJSON.php?inicio=si";
    xmlHttp.open("GET",urlDestino,true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState === 4){
            recibeNumeroJson(xmlHttp);
        }
    };
    xmlHttp.send(null);
}

/*
 * Recibe una respuesta AJAX y 
 * la muestra por consola y pantalla
 * @param {xmlHttp} JSON
 */
function recibeNumeroJson(xmlHttp){
        if(xmlHttp.status === 200) {
        var res= xmlHttp.responseText;
        var respuesta = JSON.parse(res);
        var numero = respuesta.inicio;
        document.getElementById("mensaje").innerHTML = "Se ha generado un nuevo numero";
        console.log(numero);
    }
}

/** 
 * Con esta función enviamos una peticion 
 * Ajax con los parametros numero=(Valor Introducido) al archivo
 * aciertaNumeroJson.php, la consulta devuelta
 * la enviamos a la funcion compruebaNumeroJson()
 */
function checkAjaxJson(){
    var xmlHttp = new XMLHttpRequest();
    var miNumero = document.getElementById("numero").value;
    var urlDestino="aciertaNumeroJSON.php?numero="+miNumero;
    xmlHttp.open("GET",urlDestino,true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState === 4){
            compruebaNumeroJson(xmlHttp);
        }
    };
    xmlHttp.send(null);
    }

/*
 * Recibe una respuesta AJAX
 * y la muestra por pantalla
 * comparando los numeros del juego, 
 * y sumando los fallos y aciertos
 * @param {xmlHttp} JSON
 */
function compruebaNumeroJson(xmlHttp){
    if(xmlHttp.status === 200) {
        var res = xmlHttp.responseText;
        var respuesta = JSON.parse(res);
        var encontrado = respuesta.encontrado;
        var mensaje = respuesta.mensaje;
     
        document.getElementById("mensaje").innerHTML = mensaje;
        document.getElementById("encontrado").innerHTML = encontrado;
        
        if(encontrado  == "si"){ // Sumamos los aciertos, si llegamos al limite, se inicia una nueva partida
            aciertos++;
            document.getElementById("aciertos").innerHTML = aciertos;
            inicioJson();
            if(aciertos == ganas){
                alert("Victoria!!!");
                nueva = 1;
            }      
        }else{ // Sumamos los errores, si llegamos al limite, se inicia una nueva partida
            fallos++;
            document.getElementById("errores").innerHTML = fallos;
            if(fallos == pierdes) {
                alert("Derrota");
                nueva = 1;
            }
        }
        if(nueva == 1){ // Inicia automaticamente una nueva partida
            aciertos = 0;
            fallos = 0;
            nueva = 0;
            document.getElementById("aciertos").innerHTML = aciertos;
            document.getElementById("errores").innerHTML = fallos;
            inicioJson();
        }
    }
}
