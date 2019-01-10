/**
 * @author Raúl Gutiérrez Cecilia
 * @DAW M06 ACT 05
 */

/*
 * Ejecuta la funcion ini al cargarse la web
 */
$(document).ready(ini);

function ini(){
    
    /*
     * Al cargarse la web divMobil cambia a color azul
     */
    $("#divMobil").css("color", "blue");
    
    /*
     * al pasar sobre setBlueColor 
     * divMobil cambia su fondo a verde
     */
    $("#setBlueColor").hover(function(){
        $("#divMobil").css("background-color", "green");
    });
    
    /*
     * al clicar sobre setBlueColor 
     * divMobil cambia su fondo a azul
     */
    $("#setBlueColor").click( function(){
        $("#divMobil").css("background-color", "blue");
    });
    
    /*
     * al salir el raton de setBlueColor 
     * divMobil cambia su fondo a naranja
     */
    $("#setBlueColor").mouseout( function(){
        $("#divMobil").css("background-color", "orange");
    });
    
    /*
     * al clicar sobre setRedColor 
     * divMobil cambia su fondo a rojo
     */
    $("#setRedColor").click( function(){
        $("#divMobil").css("background-color", "red");
    });
    
    /*
     * al clicar sobre setInvisible
     * divMobil se oculta (si esta visible)
     */
    $("#setInvisible").click( function(){
        $("#divMobil").fadeOut(500);
    });
    
    /*
     * al clicar sobre setVisible
     * divMobil se muestra (si esta oculto)
     */
    $("#setVisible").click( function(){
        $("#divMobil").fadeIn(1000);
    });
    
    /*
     * al clicar sobre toggleVisible
     * divMobil alterna su estado entre oculto/visible
     */
    $("#toggleVisible").click( function(){
        $("#divMobil").fadeToggle(1000);
    });
    
    /*
     * al clicar sobre incSize
     * divMobil crece 50 pixeles de alto
     */
    $("#incSize").click(function(){
        $("#divMobil").animate(
            {height: "+=50px"},
            {duration: 1500}
        );
    });
    
     /*
     * al clicar sobre decSize
     * divMobil decrece 50 pixeles de alto
     */
    $("#decSize").click(function(){
        $("#divMobil").animate(
            {height: "-=50px"},
            {duration: 2000}
        );
    });
    
     /*
     * al clicar sobre decRight
     * divMobil se mueve 50 pixeles a la izquierda
     */
    $("#decRight").click( function(){
        $("#divMobil").animate(
            {left: "-=50px"},
            {duration: 1500}
        );
    });
    
     /*
     * al clicar sobre decRight
     * divMobil se mueve 50 pixeles a la derecha
     */
    $("#incRight").click( function(){
        $("#divMobil").animate(
            {left: "+=50px"},
            {duration: 1500}
        );
    });
    
    /*
     * Al pasar el raton sobre img,
     * infoImg adopta el tamaño del 100% de img
     */
    $("img").hover( function(){
        $("#infoImg").animate(
            {height: "100%"},
            {duration: 1000}
        );
    });
    
    /*
     * Al salir el raton de img,
     * infoImg adopta el tamaño del 30% de img
     */
    $("img").mouseout( function(){
        $("#infoImg").animate(
            {height: "30%"},
            {duration: 1000}
        );
    });
    
    /* 
     * Variable para detener el div movContinuo
     */
    var parar = false;
    
    /*
     * al clicar sobre movContinuo
     * el divMobil empieza a moverse 
     * hasta que lo cliquemos de nuevo
     */
    $("#movContinuo").click(function(){
        if(!parar){
            parar = true;
            moverDerecha();
        }else{
            parar = false;
            $("#divMobil").stop();
        }
    });    
}

/*
 * mueve a la derecha divMobil
 */
function moverDerecha(){
    $("#divMobil").animate(
        {left: "150px"},
        {duration: 1500,complete: moverIzquierda}
    );
}

/*
 * mueve a la izquierda divMobil
 */
function moverIzquierda(){
    $("#divMobil").animate(
        {left: "0px"},
        {duration: 1500, complete: moverDerecha}
    );
    
}


