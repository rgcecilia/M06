/**Funcion que pida si del menu quiere 1-Ensalada 2-Tallarines 3-Arroz
 * y muestre la opcion seleecionada en el elemento con id "primero"
 * o que indique que no es una opcion valida
 */
function seleccionaPrimero() {
    //pide mediante un prompt el numero de opcion  del menu
    var opcion = parseInt(window.prompt("Qué quieres de primero?"
            + "\n 1-Ensalada" + "\n 2-Tallarines" + "\n 3-Arroz"));
    var texto;
    
    switch (opcion) {
        case 1:
            texto = "Ensalada";
            break;
        case 2:
            texto = "Tallarines";
            break;
        case 3:
            texto = "Arroz";
            break;
        default:
            texto = "No has escogido una opcion valida";      
    }
    document.getElementById("miPrimero").innerHTML=texto;
}
/**Funcion que pida si del menu quiere 1-Solomillo 2-Pescado 3-Lasanya
 * y muestre la opcion seleecionada en el elemento con id "segundo"
 * Programa que si no se selecciona una opción válida se vuelva 
 * a pedir hasta que el usuario introduzca una opción válida.
 */
function seleccionaSegundo() {
   //pide mediante un prompt el numero de opcion  del menu
    var opcion = parseInt(window.prompt("Qué quieres de Segundo?"
            + "\n 1-Solomillo" + "\n 2-Pescado" + "\n 3-Lasanya"));
    var texto2;
    switch (opcion) {
        case 1:
            texto2 = "Solomillo";
            break;
        case 2:
            texto2 = "Pescado";
            break;
        case 3:
            texto2 = "Lasanya";
            break;
        default:
            texto2 = "error";     
    }
    document.getElementById("miSegundo").innerHTML=texto2;
    if (texto2==="error"){
        seleccionaSegundo();
    }
}
