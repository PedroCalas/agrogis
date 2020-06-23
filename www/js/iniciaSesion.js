var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
        jQuery("#btnLogin").click(function(){
        	app.login();
        });
    },
    
    
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    
    login: function(){
    	console.log("login")
    	
    	app.autenticar.call(this, jQuery("#username").val(),jQuery("#password").val(), 
    			function(respuesta){
    				console.log(respuesta)
    				localStorage.setItem("login", respuesta);
    				$('#ModalPrimero').modal("hide");
    				window.location.replace("menu.html");
    			},
    			function(error){
    				console.log(error)
    				$("#msgUsuarioIncorrecto").show();
    			}
    	)
    	return false;
    },
    
    
	autenticar: function(usuario, password, callbackSuccess, callbackError){
		var url 	= comun.baseURL + "authenticate";
		var data 	= JSON.stringify({
			username: 	usuario,
			password:	password
		});
		
		var callbackAutenticacionSuccess = function(respuesta){
			this.token = respuesta.jwttoken
			var callback = callbackSuccess || this.callbackSuccess;
			callback(respuesta);
		}.bind(this)
		
		jQuery.ajax({
			url: 			url,
			type: 			"POST", 
			contentType:	"application/json",
			data:			data,
			success: 		callbackAutenticacionSuccess,
			error: 			callbackError 	|| this.callbackError
		});
		
	},
    
    
    
};
