var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.cargarHaciendas();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    cargarHaciendas: function(){
        var url = comun.baseURL + "haciendas"
    	jQuery.getJSON(url, function(respuesta) {
            console.log(respuesta);

            var divDestino = document.getElementById("haciendasCaja");
            for (var i = 0; i < respuesta.length; i++){
            	var fila = document.createElement("div")
            	fila.className = "row justify-content-center align-items-center columnaBorde mt-2";
            	divDestino.appendChild(fila);

            	var columnaIcono = document.createElement("div")
            	columnaIcono.className = "col col-2 text-center mt-2 ";
            	fila.appendChild(columnaIcono);

            	var icon = document.createElement("img");
            	icon.setAttribute("src", "img/icons/vinedo.png");
            	icon.setAttribute("width", "40px");
            	columnaIcono.appendChild(icon);

            	var columna = document.createElement("div")
            	columna.className = "col col-10 text-center mt-2";
            	fila.appendChild(columna);

            	var link 	= document.createElement("a");
            	var titulo 	= document.createElement("h6")
            	titulo.innerHTML = respuesta[i].nombre;
            	var path 	= "eligeParcela.html" + "?" + "hacienda=" + escape(respuesta[i].id);
            	link.setAttribute("href", path);
            	link.appendChild(titulo);

            	columna.appendChild(link);

            }
            
        });

    },
    pasarVariables: function(pagina, nombres) {

    pagina +="?";
    nomVec = nombres.split(",");
    for (i=0; i<nomVec.length; i++){
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
        pagina = pagina.substring(0,pagina.length-1);
        location.href=pagina;
    }
    }
};
