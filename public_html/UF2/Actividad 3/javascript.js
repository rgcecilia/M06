
    /**
    * @author Raúl Gutiérrez Cecilia
    * @DAW M06 ACT 03
    */
   
    // Creamos nuestros dos arrays para almacenar coches y extras
    var extrasDisponibles = new Array();
    var cochesDisponibles = new Array();

    //Clase extra  
    function Extra(){
        this.nombre;
        this.url;
        this.precio = "10";
        this.getHTML = function(){     
            var html = "<span> <img src='" + this.url +"'/>Precio = " + this.precio + "</span>";
            return html;
        };
    }
    
    //Clase extra
    function Coche(){
        this.nombre;
        this.velocidad = "10";
        this.extras = new Array();
        this.addExtra = function(nuevoextra){     
            this.extras.push(nuevoextra);
            return nuevoextra;
        };
        this.getHTML = function(){
           var html = "<span>" + this.nombre + this.velocidad + "[" + extra.getHTML() + "]</span><br />";
           return html; 
        };
    }
    
    //Creamos un extra y lo mostramos por consola
    var extra = new Extra();
    extra.nombre = "Airbag";
    extra.url = "imgs/conchaazul.jpg";
    console.log(extra.getHTML());
    
    //Creamos un coche, le asignamos un extra y lo mostramos por consola
    var coche = new Coche();
    coche.nombre = "Carricoche";
    coche.addExtra(extra);
    console.log(coche.getHTML());

    //Creamos un extra
    var extraNuevo = new Extra();
    extraNuevo.nombre = "Super Fuerza";
    extraNuevo.url = "imgs/estrelladorada.jpg";
    
    //Añadimos nuestros extras al array de extras
    extrasDisponibles.push(extra);
    extrasDisponibles.push(extraNuevo);
    
    //Añadimos nuestro coche al array de coches
    cochesDisponibles[coche.nombre] = coche;
    
    //Mostramos por consola los extras almacenados en el array
    for(var key in extrasDisponibles){
    console.log(extrasDisponibles[key]);
    }
    /**
    * Funcion para mostrar todos los extras disponibles 
    */
    function mostrarExtras(){
        // Inicializamos la variable select del desplegable de asignar extra a coche
        var select = document.getElementsByName("idExtra")[0];
        //Limpiamos los extras disponibles y el desplegable en el html
        document.getElementById("ejercicio7").innerHTML ="";
        document.getElementById("idExtra").innerHTML ="";
        //Mostramos los coches disponibles en ambos elementos
        for(var i=0 ; i<extrasDisponibles.length; i++){
            // En el select ASIGNA UN EXTRA A UN COCHE
            var option = document.createElement("option");
            option.text = i;
            select.add(option);
            // EN MOSTRAR COCHES DISPONIBLES
            document.getElementById("ejercicio7").innerHTML +="<span><img src='" + extrasDisponibles[i].url    + "'/>" +
                                                                             " " + extrasDisponibles[i].precio + " €</span>";                  
        
        }  
    }
        
   
   /**
    * Funcion para mostrar todos los coches disponibles 
    */
    function mostrarCoches(){
        // Inicializamos la variable select del desplegable de asignar extra a coche
        var select = document.getElementsByName("nombreCoche")[0];
        //Limpiamos los coches disponibles y el desplegable en el html
        document.getElementById("ejercicio8").innerHTML ="";
        document.getElementById("nombreCoche").innerHTML ="";
        //Mostramos los coches disponibles en ambos elementos
        for(var clave in cochesDisponibles){
            // En el select ASIGNA UN EXTRA A UN COCHE
            var option = document.createElement("option");
            option.text = clave;
            select.add(option);
            //EN MOSTRAR COCHES DISPONIBLES
            var micoche = cochesDisponibles[clave]; 
            var extras = micoche.extras;
            document.getElementById("ejercicio8").innerHTML +="<span>" + clave 
                                                            + " "      + micoche.velocidad + " Km/h ";
                for(var i=0 ; i< extras.length; i++){
                   document.getElementById("ejercicio8").innerHTML += "<img src='" + extras[i].url + "'/>" 
                                                                                   + extras[i].precio + " €</span>";         
            }      
        } 
    }
    
    /**
    * (GESTIONA EXTRAS)
    * Función para cargar los extras en desplegable (ADD EXTRA)
    */
    function cargarExtras() {
        var select = document.getElementsByName("extras")[0];
        for (var i=0 ; i<extrasDisponibles.length; i++) {
        var option = document.createElement("option");
            option.text = extrasDisponibles[i].url;
        select.add(option);
        }
    }

    /**
    * (GESTIONA EXTRAS)
    * Funcion para añadir nuevos extras disponibles (ADD EXTRA)
    */
    function añadirExtra(){
        var nuevoExtra = new Extra();
        nuevoExtra.precio = document.getElementById('precio').value;
        nuevoExtra.url = document.getElementById('url').value;
        extrasDisponibles.push(nuevoExtra);
        mostrarExtras();
    }
    
    /**
    * (GESTIONA EXTRAS)
    * Funcion para eliminar extras (BORRAR)
    */
    function borrarExtra(){
        extrasDisponibles.splice(document.getElementById('posicion').value,1);
        mostrarExtras();
    }

    /**
    * (CREA UN COCHE DISPONIBLE)
    * Funcion para crear coches (ADD COCHE)
    */
    function añadirCoche(){
        var nuevo = new Coche();
        nuevo.nombre = document.getElementById('nombre').value;
        nuevo.velocidad = document.getElementById('velocidad').value;
        cochesDisponibles[nuevo.nombre] = nuevo;
        mostrarCoches();
    }
    
    /**
    * (ASIGNA UN EXTRA DISPONIBLE) 
    * Funcion para añadir uno de los extras disponibles a un coche (ADD EXTRA)
    */
    function addExtraCoche(){
        var miCoche = cochesDisponibles[document.getElementById('nombreCoche').value]; 
        var miExtra = extrasDisponibles[(document.getElementById('idExtra').value)];
        miCoche.addExtra(miExtra);
        mostrarCoches();
    }
