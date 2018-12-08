window.addEventListener("load", ini, false);
function ini() { }
/**Mostrar por consola todos los gas que contiene #father
 */
function muestraTagsHijosFather(){
    let padre = document.getElementById("father");
    let hijosElement = padre.children;
    for(let k=0; k<hijosElement.length;k++){
        let tag = hijosElement[k];
        console.log(tag.tagName);
    }
}
/**
 */
function muestraContenidoHijosFather(){
    let padre = document.getElementById("father");
     let hijosElement = padre.children;
      for(let k=0; k<hijosElement.length;k++){
           let tag = hijosElement[k];
           console.log(tag.innerHTML);
      }
}
/**Va a añadir un evento a cada hijo de father, al clicar muestre su contenido 
 */
function addEventosClickMuestraHTML() {
    let padre = document.getElementById("father");
    let hijosElement = padre.children;
    for(let k=0; k <hijosElement.length;k++){
        let tagHijo = hijosElement[k];
        tagHijo.addEventListener("click",muestraConteido,false);
    }
}
/**Mostrar el contenido del tag que la ha clicado
 * 
 * @param {type} evt
 * @returns {undefined}
 */
function muestraConteido(evt){
    let tagclicado = evt.target;
    let contenido = tagclicado.innerHTML;
    console.log(contenido);
}
/** Creamos un elemento DIV y lo añadimos despues del primer hijo*/
function addElementAfterPrimerHijo(){
    let nuevoElemento= document.createElement("DIV");
    nuevoElemento.innerHTML="Nuevo DIV";
    nuevoElemento.addEventListener("click",swapFirstNode,false);
    
    let padre = document.getElementById("father");
    let segundoHijo = padre.children[1];
    //insertamos el span1 como hijo de divSaludo delante delante de newElem
    //divSaludo.insertBefore(span1,newElem);
    padre.insertBefore(nuevoElemento, segundoHijo);
    
    
}
/** sustituye el primer nodo hijo de father por el clicado*/
function swapFirstNode(evt){
    let elemClicado = evt.target;
    let padre = document.getElementById("father");
    let elemToSwap = padre.firstElementChild;
    padre.replaceChild(elemClicado,elemToSwap);
    
}

