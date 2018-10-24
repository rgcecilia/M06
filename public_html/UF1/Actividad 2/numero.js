

    var x = Math.floor((Math.random() * 10) + 0);
    console.log(x);

function cuentaAtras(){
    var segundos = 6;
    var temp = setInterval(function () {
        document.getElementById("segundero").innerHTML = "<h2 id='seg'>" + segundos + "</h2>";
        segundos--;
        if(segundos < -1){
            document.getElementById("segundero").innerHTML =
                    "<h2 id='seg'>FIN</h2>";
            clearInterval(temp);
        }
    }, 1000);
}

function compara(){
    var windowMadre = window.opener;
    var divMadre = windowMadre.document.getElementById("resultado");
    var miNumero = document.getElementById('acierta').value;
    if (miNumero > x){
        document.getElementById('resultado').innerHTML = miNumero + " es mayor que :" + x ; 
        divMadre.innerHTML = miNumero + " es mayor que :" + x ; 
     }
     if (miNumero < x){
         document.getElementById('resultado').innerHTML = miNumero + " es menor que :" + x ;
         divMadre.innerHTML = miNumero + " es mayor que :" + x ;
     }
     if (miNumero == x){
         document.getElementById('resultado').innerHTML = " Has acertado! : " + x ;
         divMadre.innerHTML = " Has acertado! : " + x ;
         setTimeout('window.close()',1000);
     }
     
 }
 
 