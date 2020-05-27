var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.LlamadaAjaxActividades();
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

    LlamadaAjaxActividades: function(){
        $.getJSON( "https://sergiobasile.com/basileservice/api/noticias", function( objetoJSON ) {
            console.log(objetoJSON);

            var mapasRow = document.getElementById("mapasRow");
            for (var i = 0; i <= 4; i++){

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
                // var path = "eligeParcela.html" + "?" + "id=" + escape(objetoJSON[i].id);
                var path = "mapSidebar.html"
                enlaceMapas.setAttribute("href", path);
                mapasCol.appendChild(enlaceMapas);

                var titulo = document.createElement("h6");
                if(i == 0){
                    titulo.innerHTML = "Mapas de Atributos";
                }
                if(i == 1){
                    titulo.innerHTML = "Mapas de Recomendación";
                }
                if(i == 2){
                    titulo.innerHTML = "Imágenes Aéreas";
                }
                if(i == 3){
                    titulo.innerHTML = "Mapas de Compactación";
                }
                if(i == 4){
                    titulo.innerHTML = "Mapas de Colecta de Muestras";
                }
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
