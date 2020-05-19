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

            var haciendasRow = document.getElementById("haciendasRow");
            for (var i = 0; i <= 3; i++){

                var haciendasCol = document.createElement("div");
                haciendasCol.className = "col col-5 m-2 text-center";
                haciendasRow.appendChild(haciendasCol);

                var enlaceHacienda = document.createElement("a");
                // var path = "eligeParcela.html" + "?" + "id=" + escape(objetoJSON[i].id);
                var path = "mapSidebar.html"
                enlaceHacienda.setAttribute("href", path);
                haciendasCol.appendChild(enlaceHacienda);

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
                enlaceHacienda.appendChild(titulo);
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
