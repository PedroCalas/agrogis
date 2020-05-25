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

            var haciendasCaja = document.getElementById("haciendasCaja");
            for (var i = 0; i <= 2; i++){

                var haciendasRow = document.createElement("div");
                haciendasRow.className = "row justify-content-center align-items-center columnaBorde mt-2";
                haciendasCaja.appendChild(haciendasRow);

                var haciendasColIcon = document.createElement("div");
                haciendasColIcon.className = "col col-2 text-center mt-2 ";
                haciendasRow.appendChild(haciendasColIcon);

                var icon = document.createElement("img");
                icon.setAttribute("src", "img/icons/vinedo.png");
                icon.setAttribute("width", "40px");
                haciendasColIcon.appendChild(icon);

                var haciendasCol = document.createElement("div");
                haciendasCol.className = "col col-10 text-center mt-2";
                haciendasRow.appendChild(haciendasCol);

                var enlaceHacienda = document.createElement("a");
                // var path = "eligeParcela.html" + "?" + "id=" + escape(objetoJSON[i].id);
                // enlaceHacienda.setAttribute("href", path);
                haciendasCol.appendChild(enlaceHacienda);

                var titulo = document.createElement("h6");
                titulo.innerHTML = objetoJSON[i].titulo;
                enlaceHacienda.appendChild(titulo);
            }
            
            console.log();
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
