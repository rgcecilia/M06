
function listaPropiedades(){
   
    var miDate = new Date();
    var hora = miDate.getHours();
    var min = miDate.getMinutes();
    
    if(min === ""){
        min = 00;
    } 
    if( min > 0 || min < 10 ){
        min="0"+miDate.getMinutes();
    }    
    if(min > 9){
        min = miDate.getMinutes();
    }
    
    var dateString = "La fecha actual es: " + miDate.getDate() +
                     "-" + (miDate.getMonth()+1) + "-" + miDate.getFullYear();
    var hourString = "La hora actual es: " + hora +
                     ":" + min + " h";
    
    var miArray =
    [Number.MAX_VALUE, Number.MIN_VALUE,screen.height,screen.width, 
    window.innerHeight,window.innerWidth,
    document.URL,document.title, Math.floor((Math.random() * 200) + 0),
    navigator.platform,dateString,hourString];
   
    var ul = document.createElement('ul');
    document.getElementById('listaPropiedades').appendChild(ul);
    miArray.forEach(function (item) {
        var li = document.createElement('li');
        li.innerHTML += item;
         ul.appendChild(li);
    });
}

function miCookie(){ 
    var nombre = document.getElementById('nombre');
    document.cookie = "nombre_usuario=" + nombre.value;
   
}

function getValorCookie(){
    var micookie = (document.cookie.indexOf('nombre_usuario=') === -1 ? '' :
        ("; " + document.cookie).split('; nombre_usuario=')[1].split(';')[0]);
    var x = document.getElementById('nombre');
    x.setAttribute('value',micookie);
}

function abreteSesamo(){  
    var altura=300;
    var anchura=300;
    var y = parseInt((window.screen.height/2)-(altura/2));
    var x = parseInt((window.screen.width/2)-(anchura/2));
    window.open('numero.html','NewWindow','width=' + anchura + ',height=' + altura + ',top='+ y +',left='+ x +',menubar=no');
}