var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.cargarMeteriales();
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

    cargarMeteriales: function(){
        $.getJSON( "https://sergiobasile.com/basileservice/api/noticias", function( objetoJSON ) {
            console.log(objetoJSON);

            var materialesCaja = document.getElementById("materialesCaja");
            var flechaSiguiente = document.getElementById("flechaSiguiente");
            for (var i = 0; i <= 2; i++){

                var materialesRow = document.createElement("div");
                materialesRow.className = "row justify-content-center align-items-center columnaBorde mt-2";
                materialesCaja.appendChild(materialesRow);

                var materialesColIcon = document.createElement("div");
                materialesColIcon.className = "col col-2 text-center mt-2 mb-1";
                materialesRow.appendChild(materialesColIcon);

                var icon = document.createElement("img");
                icon.setAttribute("src", "img/icons/alfiler.png");
                icon.setAttribute("width", "30px");
                materialesColIcon.appendChild(icon);

                var materialesCol = document.createElement("div");
                materialesCol.className = "col col-10 mt-2 text-center";
                materialesRow.appendChild(materialesCol);

                var enlaceMaterial = document.createElement("a");
                var path = "eligeMapa.html" + "?" + "id=" + escape(objetoJSON[i].id);
                enlaceMaterial.setAttribute("href", path);
                materialesCol.appendChild(enlaceMaterial);

                var titulo = document.createElement("h6");
                titulo.innerHTML = objetoJSON[i].fecha;
                enlaceMaterial.appendChild(titulo);
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
