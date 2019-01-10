/* 
    Created on : 21-dic-2018, 20:27:09
    Author     : rgcec
*/

$(document).ready(ini);

function ini(){
    $("#divMobil").css("color", "blue");
    $("#setBlueColor").hover(function(){
        $("#divMobil").css("background-color", "green");
    });
    $("#setBlueColor").click( function(){
        $("#divMobil").css("background-color", "aqua");
    });
    $("#setBlueColor").mouseout( function(){
        $("#divMobil").css("background-color", "orange");
    });
    $("#setRedColor").click( function(){
        $("#divMobil").css("background-color", "red");
    });
    $("#setInvisible").click( function(){
        $("#divMobil").fadeOut( 1000 );
    });
    $("#setVisible").click( function(){
        $("#divMobil").fadeIn( 1000 );
    });
    $("#toggleVisible").click( function(){
        $("#divMobil").fadeToggle( 1000 );
    });
    $("#incSize").click( function(){
        $("#divMobil").animate({
            height: "+=50px"
        },{
            duration: 1500
        });
    });
    $("#decSize").click( function(){
        $("#divMobil").animate({
            height: "-=50px"
        },{
            duration: 2000
        });
    });
    $("#decRight").click( function(){
        $("#divMobil").animate({
            left: "+=50px"
        },{
            duration: 1500
        });
    });
    $("#incRight").click( function(){
        $("#divMobil").animate({
            left: "-=50px"
        },{
            duration: 1500
        });
    });
    $("img").hover( function(){
        $("#infoImg").animate({
            height: "100%"
        },{
            duration: 1000
        });
    });
    $("img").mouseout( function(){
        $("#infoImg").animate({
            height: "30%"
        },{
            duration: 1000
        });
    });
    var interruptor = false;
    $("#movContinuo").click(function(){
        if( !interruptor ){
            interruptor = true;
            moverDerecha();
        } else {
            interruptor = false;
            $("#divMobil").stop();
        }
    });
        
}

function moverDerecha(){
    $("#divMobil").animate({
        left: "100%"
    },{
        duration: 3000,
        complete: moverIzquierda
    });
}

function moverIzquierda(){
    $("#divMobil").animate({
        left: "0%"
    },{
        duration: 3000,
        complete: moverDerecha
    });
    
}


