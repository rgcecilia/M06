window.addEventListener("load", ini, false);
function ini() { 
    document.getElementById("boton2").addEventListener("click",modificaHijo2,false);
    document.getElementById("boton2")
            .nextElementSibling
            .addEventListener("click",modificaHijo3,false);
//    let boton2= document.getElementById("boton2");
//    let boton3 = boton2.nextElementSibling;
//    boton3.addEventListener("click",modificaHijo3,false);

}

function eliminaFather(){
    let elemEliminar = document.getElementById("father");
    let padre = document.body;
    padre.removeChild(elemEliminar);
}

function modificaHijo3(){
    let father = document.getElementById("father");
    let hijo3 = father.lastElementChild;
    console.log("hijo3"+hijo3.innerHTML);
    let hijo2= hijo3.previousElementSibling;
    console.log("hijo2"+hijo2.innerHTML);
    
    hijo3.className="hijo heredero";
}
function addNodoHijo2(){
    var newElem = document.createElement("SPAN");
    newElem.innerHTML=" Nuevo span creado";
    let segundoHijo= document.getElementById("father").firstElementChild.nextElementSibling;
    segundoHijo.appendChild(newElem);
    
    newElem.addEventListener("click",eliminaSpan,false);
    newElem.className="nuevoSpan";
    newElem.setAttribute("nuevoAtributo","valor atributo");
}

function eliminaSpan(event){
    let spanClicadoEliminar = event.target;
    let padre = spanClicadoEliminar.parentNode;
    padre.removeChild(spanClicadoEliminar);
}


function modificaHijo2(){
    let father = document.getElementById("father");
    let hijo1 = father.firstElementChild;
    let textoEntreH1H2 = hijo1.nextSibling;
    
    let hijo2 =hijo1.nextElementSibling;
      //  hijo2= textoEntreH1H2.nextSibling;
        
    console.log(textoEntreH1H2.textContent);
    console.log(hijo2.innerHTML);
    console.log(hijo2.firstChild);
}

function modificaHijo1(){
    let father = document.getElementById("father");
    let hijo1= father.firstElementChild;
    console.log(hijo1.innerHTML);
    let colorTexto = hijo1.style.color;
    console.log(colorTexto);
    
    hijo1.style.color="white";
    hijo1.style.backgroundColor="black";
    hijo1.style.textDecoration="underline";
    
}