var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.cargarTiposMapa();
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

    cargarTiposMapa: function(){
    	var urlParams 	= new URLSearchParams(window.location.search);
    	var idHacienda 	= urlParams.get('hacienda');
    	var idParcela 	= urlParams.get('parcela');
    	var comparar 	= urlParams.get('comparar');

    	var url = comun.baseURL + "tipomapas";
        $.getJSON(url, function(respuesta) {
            console.log(respuesta);

            var mapasRow = document.getElementById("mapasRow");
            for (var i = 0; i < respuesta.length; i++){

                var mapasColContainer = document.createElement("div");
                mapasColContainer.className = "col col-5 columnaBorde mt-5 text-center";
                mapasRow.appendChild(mapasColContainer);

                var mapasColIcon = document.createElement("div");
                mapasColIcon.className = "col col-12 text-center mt-2";
                mapasColContainer.appendChild(mapasColIcon);

                var icon = document.createElement("img");
                icon.setAttribute("src", "img/icons/ubicacion.png");
                icon.setAttribute("width", "40px");
                mapasColIcon.appendChild(icon);

                var mapasCol = document.createElement("div");
                mapasCol.className = "col col-12  text-center ";
                mapasColContainer.appendChild(mapasCol);

                var enlaceMapas = document.createElement("a");
                var path = "eligeMaterial.html" + "?" + 
                				"hacienda=" + idHacienda + 
                				"&parcela=" + idParcela	 + 
								"&tipoMapa=" + escape(respuesta[i].id);
                if (comparar){
                	path += "&comparar=" + comparar; 
                }
                
                enlaceMapas.setAttribute("href", path);
                mapasCol.appendChild(enlaceMapas);


                var titulo = document.createElement("h6") ;
                titulo.innerHTML = respuesta[i].nombre;
                enlaceMapas.appendChild(titulo);
            }
            console.log()
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
