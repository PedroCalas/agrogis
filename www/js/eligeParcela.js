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

            var parcelasCaja = document.getElementById("parcelasCaja");
            for (var i = 0; i <= 2; i++){

                var parcelasRow = document.createElement("div");
                parcelasRow.className = "row justify-content-center align-items-center columnaBorde mt-2";
                parcelasCaja.appendChild(parcelasRow);

                var parcelasColIcon = document.createElement("div");
                parcelasColIcon.className = "col col-2 text-center mt-2";
                parcelasRow.appendChild(parcelasColIcon);

                var icon = document.createElement("img");
                icon.setAttribute("src", "img/icons/parcela.png");
                icon.setAttribute("width", "40px");
                parcelasColIcon.appendChild(icon);

                var parcelasCol = document.createElement("div");
                parcelasCol.className = "col col-10 mt-2 text-center";
                parcelasRow.appendChild(parcelasCol);

                var enlaceParcela = document.createElement("a");
                var path = "eligeMapa.html" + "?" + "id=" + escape(objetoJSON[i].id);
                enlaceParcela.setAttribute("href", path);
                parcelasCol.appendChild(enlaceParcela);

                var titulo = document.createElement("h6");
                titulo.innerHTML = objetoJSON[i].fecha;
                enlaceParcela.appendChild(titulo);
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