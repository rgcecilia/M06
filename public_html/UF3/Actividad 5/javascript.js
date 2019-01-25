/**
 * @author Raúl Gutiérrez Cecilia
 * @DAW M06 ACT 05
 */

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
    document.getElementById("addText").addEventListener("click", cambiarTexto, false);
    document.getElementById("setColor").addEventListener("click", cambiarColor, false);
    document.getElementById("addDiv").addEventListener("click", crearDiv, false);
    document.getElementById("addSpan").addEventListener("click", crearSpan, false);
    document.getElementById("setContentPrev").addEventListener("click", crearNuevoDivPrev, false);
    document.getElementById("delPrevNode").addEventListener("click", crearDivBorrarAnterior, false);
    document.getElementById("delNextNode").addEventListener("click", crearDivBorrarSiguiente, false);
    document.getElementById("addAttr").addEventListener("click", nuevoAtributo, false);
    document.getElementById("delAllType").addEventListener("click", borrarElemento, false);
}

/** 
 * Con esta función introducimos un texto
 * en el elemento que dispara el evento
 */
function cambiarTexto(){
    var element = event.target;
    var newTexto = prompt("Introduce el nuevo texto");
    element.innerHTML = newTexto;
}

/** 
 * Con esta función pedimos un color por ventana
 * al usuario, y cambia el color de fondo
 * del elemento que lo ha disparado
 */
function cambiarColor(){
    var element = event.target;
    var nuevoColor = prompt("Introduce el nombre del nuevo color de fondo");
    element.style.backgroundColor = nuevoColor;
}

/** 
 * Con esta función creamos un nuevo div
 * con el cuya clase sera el id, del elemento 
 * del dom, que le llega como parametro
 * @param element
 * @returns {div} 
 */
function crearNuevoDiv(element) {
    var nuevoDiv = document.createElement("div");
    nuevoDiv.className = element.id;
    return nuevoDiv;
}

/** 
 * Esta funcion, crea un nuevo div
 * y lo añade al final
 * del div de id #domNodes
 */
function crearDiv() {
    var element = event.target;
    var elementDomNodes = document.getElementById("domNodes");
    var nuevoDiv = crearNuevoDiv(element);
    var nuevoTexto = prompt("Introduce el texto del nuevo div");
    nuevoDiv.innerHTML = nuevoTexto;
    elementDomNodes.appendChild(nuevoDiv);
}

/** 
 * Esta función añade un span, de la clase 
 * span, al final div de id domNodes
 */
function crearSpan() {
    var nuevoSpan = document.createElement("span");
    nuevoSpan.className = "span";
    var nuevoTexto = prompt("Introduce el texto");
    var elementDomNodes = document.getElementById("domNodes");
    nuevoSpan.innerHTML = nuevoTexto;
    elementDomNodes.appendChild(nuevoSpan);
}

/** 
 * Esta funcion crea un div con el mismo
 * id del elemento que la disparo, 
 * al final div de id #domNodes
 */
function crearNuevoDivPrev() {
    var element = event.target;
    var elementDomNodes = document.getElementById("domNodes");
    var nuevoDiv = crearNuevoDiv(element);
    nuevoDiv.innerHTML = element.id;
    elementDomNodes.appendChild(nuevoDiv);
    nuevoDiv.addEventListener('click', cambiarTextoPrev, false);
}

/** 
 * Esta funcion cambia el texto del 
 * elemento hermano anterior al que
 * la dispara.
 */
function cambiarTextoPrev() {
    var element = event.target;
    var hermanoAnterior = element.previousElementSibling;
    var nuevoTexto = prompt("Introduce el texto");
    hermanoAnterior.innerHTML = nuevoTexto;
}

/** 
 * Esta funcion crea un div con el texto predefinido
 * "Remove Preview", y le añade un evento, que al clicarlo, 
 * llama a la funcion borrarAnterior()
 */
function crearDivBorrarAnterior() {
    var element = event.target;
    var elementDomNodes = document.getElementById("domNodes");
    var nuevoDiv = crearNuevoDiv(element);
    nuevoDiv.innerHTML = "Remove Preview";
    elementDomNodes.appendChild(nuevoDiv);
    nuevoDiv.addEventListener("click", borrarAnterior, false);
}

/** 
 * Elimina en el dom, el elemento
 * hermano anterior a quien la dispara
 */
function borrarAnterior() {
    var element = event.target;
    var anterior = element.previousElementSibling;
    if (anterior !== null) {
        anterior.parentNode.removeChild(anterior);
    }
}

/** 
 * Crea un div en el div de id #domNodes, 
 * con el texto "Remove Next" que al clicarlo
 * llama a la funcion borrarSiguienteDiv
 */
function crearDivBorrarSiguiente() {
    var element = event.target;
    var elementDomNodes = document.getElementById("domNodes");
    var nuevoDiv = crearNuevoDiv(element);
    nuevoDiv.innerHTML = "Remove Next";
    elementDomNodes.appendChild(nuevoDiv);
    nuevoDiv.addEventListener("click", borrarSiguienteDiv, false);
}

/** 
 * Elimina en el dom, el elemento
 * hermano posterior (si existe) a quien la dispara
 */
function borrarSiguienteDiv() {
    var element = event.target;
    var siguiente = element.nextElementSibling;
    if (siguiente !== null) {
        siguiente.parentNode.removeChild(siguiente);
    }
}

/** 
 * Añade un atributo a un elemento del div de id
 * #domNodes seleccionandolo por su posicion
 */
function nuevoAtributo() {
    var elementDomNodes = document.getElementById("domNodes");
    var childDomNodes = elementDomNodes.children;
    var posicion = parseInt(prompt("Introduce la posición del elemento: "));
    if (posicion < 0 || posicion >= childDomNodes.length || isNaN(posicion)) {
        alert("Posicion Seleccionada no valida");
        return;
    }
    var atributo = prompt("Introduce el nombre del nuevo atributo");
    var valor = prompt("Introduce el valor del nuevo atributo");
    childDomNodes[posicion].setAttribute(atributo, valor);

}

/** 
 * Elimina en el div de id #domNodes, todos los
 * elementos del tipo indicado por el usuario
 */
function borrarElemento() {
    var elementDomNodes = document.getElementById("domNodes");
    var childDomNodes = elementDomNodes.children;
    var type = prompt("Introduce el tipo de elemento que quieres borrar");
    type = type.toUpperCase();
    for (var i = 1; i < childDomNodes.length; i++) {
        var tipo = childDomNodes[i].tagName;
        if (tipo === type) {
            elementDomNodes.removeChild(childDomNodes[i]);
            i--;
        }
    }
}





