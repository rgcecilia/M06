/**
  * @author Raúl Gutiérrez Cecilia
  * @DAW M06 ACT 04
  */

/** 
 * Con este evento iniciamos la función ini 
 * al cargarse la pagina
 */
window.addEventListener("load", ini, false);

/** 
 * Con esta función ponemos a la espera 
 * los distintos eventos asociados al formulario
 */
function ini() {
    let miForm = document.forms["miForm"];
    miForm["inputNombre"].addEventListener("keyup",validaNombre,false);
    miForm["inputCodigo"].addEventListener("keyup",validaCodigo,false);
    miForm["inputDia"].addEventListener("keyup",validaFecha,false);
    miForm["inputMes"].addEventListener("keyup",validaFecha,false);
    miForm["inputAño"].addEventListener("keyup",validaFecha,false);
}

/** 
 * Con esta función validamos que el formulario se haya rellenado correctamente.
 * @returns {true o false} 
 */
function validaSubmit(){
    
    let formValido = true;
    if(!validaChecks()){
        formValido = false;
    }
    if(!validaNombre()){
        formValido = false;
    }
    if(!validaCodigo()){
        formValido = false;
    }
    if(!validaFecha()){
        formValido = false;
    }
    if(!formValido){
        document.getElementById("muestra").innerHTML = "Formulario No Enviado";  
    }
    return formValido;
}

/**
 * Funcion para comprobar si el usuario ha seleccionado
 * algun checkbox del formulario
 * @returns {true o false} 
 */
function validaChecks(){
    var checkboxs = document.forms["miForm"]["checks"]; //array con los checkbox de name="vehicle"
        for(var k =0; k < checkboxs.length; k++){
            if(checkboxs[k].checked === true){
            return true;
        }
    }return false;
}

/**
 * Funcion para comprobar si el nombre introducido en el formulario
 * no comienza con 1 numero y contiene entre 3 y 20 caracteres
 * @returns {true o false} 
 */
function validaNombre(){
    let nombre = document.forms["miForm"]["inputNombre"];
    var pattern = new RegExp("^[^0-9][A-z]{2,20}$");
    if (pattern.test(nombre.value)) {
        document.getElementById("muestra").innerHTML = "Nombre = " + nombre.value + " Ok";
        return true;
    } else {
        document.getElementById("muestra").innerHTML = "Nombre = " + nombre.value + " No valido";
        return false;
    }
}

/**
 * Funcion para comprobar si el codigo introducido en el formulario
 * es numerico y contiene 13 caracteres
 * @returns {true o false} 
 */
function validaCodigo(){
    let codigo = document.forms["miForm"]["inputCodigo"];
    var pattern = new RegExp("^[0-9]{13}$");
    if (pattern.test(codigo.value)) {
        document.getElementById("muestra").innerHTML = "Codigo = " + codigo.value + " Ok";
        return true;
    } else {
        document.getElementById("muestra").innerHTML = "Codigo = " + codigo.value + " No valido";
        return false;
    }
}

/**
 * Funcion para comprobar si la fecha introducida es correcta
 * @returns {true o false} 
 */
function validaFecha(){
    
  var dia = document.forms["miForm"]["inputDia"].value;
  var mes = document.forms["miForm"]["inputMes"].value;
  var año = document.forms["miForm"]["inputAño"].value;
  var fechaActual = new Date();
  var añoActual = fechaActual.getFullYear();
  var mesActual = fechaActual.getMonth()+1;
  var diaActual = fechaActual.getDate();
  var mifecha = dia + "/" + mes + "/" + año;
  
  if (dia < 1 || dia > 31|| mes < 1 || mes > 12 || año < añoActual || dia === null || mes === null || año === null) {
    document.getElementById("muestra").innerHTML = "Fecha = " + mifecha + " No valido";
    return false;
  }
  if ((dia === 31) && (mes === 2 || mes === 4 || mes === 6 || mes === 9 || mes === 11)) {
    document.getElementById("muestra").innerHTML = "Fecha = " + mifecha + " No valida";
    return false;
  }
  if ((dia >= 29) && (mes == 2)) {
    document.getElementById("muestra").innerHTML = "Fecha = " + mifecha + " No valida";
    return false;
  }
  if ((año == añoActual) && (mes < mesActual)){
      document.getElementById("muestra").innerHTML = "Fecha = " + mifecha + " Fecha No Valida "; 
      return false;
  }
  if((mes == mesActual) && (dia < diaActual)){
      document.getElementById("muestra").innerHTML = "Fecha = " + mifecha + " Fecha No Valida "; 
      return false;
  }  
  document.getElementById("muestra").innerHTML = "Fecha = " + mifecha + " Fecha Valida";
  return true;
}

/**
 * Funcion para limpiar el formulario
 */
function limpia(){
    location.reload(true);
}

/**
 * Funcion para guardar en cookies los datos del formulario
 */
function guarda(){
    
  var fomulario = document.forms["miForm"];
  var usuario = fomulario["inputNombre"].value;
  setCookie("inputNombre", usuario, 3 );
  var password = fomulario["inputCodigo"].value;
  setCookie("inputCodigo", password, 3 );
  var password2 = fomulario["inputDia"].value;
  setCookie("inputDia", password2, 3 );
  var dia = fomulario["inputMes"].value;
  setCookie("inputMes", dia, 3 );
  var year = fomulario["inputAño"].value;
  setCookie("inputAño", year, 3 );
  var oferta = fomulario["oferta"].value;
  setCookie("oferta", oferta, 3 );
  for(k=1;k<4;k++){
  var ch = document.getElementById(k);
      if(ch.checked === true){
         setCookie("ch"+k+"", true, 3 );
         }else{
         setCookie("ch"+k+"", false, 3 ); 
         } 
    } 
}

/**
 * Funcion para recuperar los datos de las cookies y mostrarlos en el formulario
 */
function recupera() {
    
  var inputNombre = getCookie("inputNombre");
  document.forms["miForm"]["inputNombre"].value = inputNombre;
  var inputCodigo = getCookie("inputCodigo");
  document.forms["miForm"]["inputCodigo"].value = inputCodigo;
  var inputDia = getCookie("inputDia");
  document.forms["miForm"]["inputDia"].value = inputDia;
  var inputMes = getCookie("inputMes");
  document.forms["miForm"]["inputMes"].value = inputMes;
  var inputAño = getCookie("inputAño");
  document.forms["miForm"]["inputAño"].value = inputAño;
  var oferta = getCookie("oferta");
  document.forms["miForm"]["oferta"].value = oferta;
  for(i=1;i<4;i++){
  var ch = getCookie("ch"+i+"");
    if (ch === "true"){
        document.getElementById(i).checked = true;
    }else{
        document.getElementById(i).checked = false;
    } 
  }
}

/**
 * Función para crear una cookie
 * @param {type} cname
 * @param {type} cvalue
 * @param {type} exdays
 */
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

/**
 * Funcion para devolver el valor de una cookie
 * @param {type} cname
 * @returns {String}
 */
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) === 0)
      return c.substring(name.length, c.length);
  }
  return "";
}
