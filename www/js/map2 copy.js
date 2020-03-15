// var parse_georaster = require("georaster");
//
// var GeoRasterLayer = require("georaster-layer-for-leaflet");
 
var map = L.map('map',{
    minZoom: 0,
    maxZoom: 15,
    zoom: 12
}).setView([-24.898, -54.547]);

var streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var capaRelieve = new L.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg');
capaRelieve.addTo(map);

var stamenToner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});

// var pedroMapbox = new L.tileLayer('https://api.mapbox.com/styles/v1/pedrocalas/cj9xf83rz6muv2sobidhajg36/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGVkcm9jYWxhcyIsImEiOiJjajJ4cjluMTMwMThtMndxOGg4Y3NoZWkzIn0.83VnuZwLtidmCHxuP1briA');
// pedroMapbox.addTo(map);



var satelite = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGpob29rZXIiLCJhIjoiUllwRXNldyJ9.-wSBKOCm_XUxGiM1yWLxPQ',
	{id: 'pjhooker.lad5pfap'});


//Saco la dirección de la URL a partir de la dirección de mi página
var path = location.href.split("/");
path.pop();
path = path.concat("geotif").join("/") + "/";

path = "geotif";

//Mi array de promesas. Se resuelven cuando se cargan los ficheros
var promesas = [
	parseGeoraster(path + "al.tif"),
	parseGeoraster(path + "argila.tif"),
    parseGeoraster(path + "b.tif"),
    parseGeoraster(path + "calcio.tif"),
    parseGeoraster(path + "ctc.tif"),
    parseGeoraster(path + "cu.tif"),
    parseGeoraster(path + "fe.tif"),
    parseGeoraster(path + "hidrogeno.tif"),
    parseGeoraster(path + "k.tif"),
    parseGeoraster(path + "mg.tif"),
    parseGeoraster(path + "mn.tif"),
    parseGeoraster(path + "mos.tif"),
    parseGeoraster(path + "p.tif"),
    parseGeoraster(path + "pcal.tif"),
    parseGeoraster(path + "ph.tif"),
    parseGeoraster(path + "s.tif"),
    parseGeoraster(path + "sil.tif"),
    parseGeoraster(path + "zn.tif"),
    parseGeoraster(path + "cal.tif"),
    parseGeoraster(path + "kcal.tif"),
    parseGeoraster(path + "sat.tif"),
    parseGeoraster(path + "sili.tif"),

];

//Ejecución: Cuando tengo todos los ficheros cargados se resuelven las promesas.
//El resultado está en el array respuestas
Promise.all(promesas).then(function (respuestas) {
	var capas 		= [];
	var leyendas 	= [];

    var pixelValuesToColorFnArray = [
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] <= 0.05 ? '#215a23' :
                   values[0] > 0.05 && values[0] <= 0.1 ? '#4caf50' :
                   values[0] > 0.1 && values[0] <= 0.5 ? '#cddc39' :
                   values[0] > 0.5 && values[0] <= 1 ? '#ff9800' :
                   values[0] > 1 ? '#9c1f16' : 'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                    values[0] < 10 ? '#ff9800' :
                    values[0] >= 10 && values[0] < 25 ? '#cddc39' :
                    values[0] >= 25 && values[0] < 45 ? '#4caf50' :
                    values[0] >= 45 && values[0] < 55 ? '#215a23' :
                    values[0] >= 55 ? '#20308a' : 'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] < 0.1 ? '#9c1f16' :
                   values[0] >= 0.1 && values[0] < 0.3 ? '#ff9800' :
                   values[0] >= 0.3 && values[0] < 0.5 ? '#cddc39' :
                   values[0] >= 0.5 && values[0] < 0.8 ? '#4caf50' :
                   values[0] >= 0.8 && values[0] < 1 ? '#215a23' :
                   values[0] >= 1 ? '#20308a' :'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] < 1 ? '#9c1f16' :
                   values[0] >= 1 && values[0] < 2 ? '#ff9800' :
                   values[0] >= 2 && values[0] < 3 ? '#cddc39' :
                   values[0] >= 3 && values[0] < 4 ? '#4caf50' :
                   values[0] >= 4 && values[0] < 5 ? '#215a23' :
                   values[0] >= 5 ? '#20308a' :'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] < 5 ? '#cddc39' :
                   values[0] >= 5 && values[0] <= 10 ? '#4caf50' :
                   values[0] > 10 && values[0] <= 17 ? '#215a23' :
                   values[0] > 17 ? '#20308a' :'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                    values[0] < 0.3 ? '#ff9800' :
                    values[0] >= 0.3 && values[0] < 0.7 ? '#cddc39' :
                    values[0] >= 0.7 && values[0] < 1.2 ? '#4caf50' :
                    values[0] >= 1.2 && values[0] <= 1.8 ? '#215a23' :
                    values[0] > 1.8 ? '#20308a' : 'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                    values[0] < 0.8 ? '#ff9800' :
                    values[0] >= 0.8 && values[0] < 18 ? '#cddc39' :
                    values[0] >= 18 && values[0] < 30 ? '#4caf50' :
                    values[0] >= 30 && values[0] <= 45 ? '#215a23' :
                    values[0] > 45 ? '#20308a' : 'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                    values[0] < 0.8 ? '#ff9800' :
                    values[0] >= 0.8 && values[0] < 18 ? '#cddc39' :
                    values[0] >= 18 && values[0] < 30 ? '#4caf50' :
                    values[0] >= 30 && values[0] <= 45 ? '#215a23' :
                    values[0] > 45 ? '#20308a' : 'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] < 0.12 ? '#9c1f16' :
                   values[0] >= 0.12 && values[0] < 0.24 ? '#ff9800' :
                   values[0] >= 0.24 && values[0] < 0.37 ? '#cddc39' :
                   values[0] >= 0.37 && values[0] < 0.62 ? '#4caf50' :
                   values[0] >= 0.62 && values[0] < 3 ? '#215a23' :
                   values[0] >= 3 ? '#20308a' :'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] < 0.4 ? '#9c1f16' :
                   values[0] >= 0.4 && values[0] < 0.8 ? '#ff9800' :
                   values[0] >= 0.8 && values[0] < 1.2 ? '#cddc39' :
                   values[0] >= 1.2 && values[0] < 1.6 ? '#4caf50' :
                   values[0] >= 1.6 && values[0] < 2 ? '#215a23' :
                   values[0] >= 2 ? '#20308a' :'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                    values[0] < 3 ? '#ff9800' :
                    values[0] >= 3 && values[0] < 5 ? '#ffeb3b' :
                    values[0] >= 5 && values[0] < 8 ? '#78ca18' :
                    values[0] >= 8 && values[0] < 12 ? '#4caf50' :
                    values[0] >= 12 && values[0] <= 80 ? '#215a23' :
                    values[0] > 80 ? '#20308a' : 'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] < 10 ? '#9c1f16' :
                   values[0] >= 10 && values[0] < 12.5 ? '#ff9800' :
                   values[0] >= 12.5 && values[0] < 15 ? '#cddc39' :
                   values[0] >= 15 && values[0] < 25 ? '#4caf50' :
                   values[0] >= 25 && values[0] < 40 ? '#215a23' :
                   values[0] >= 40 ? '#20308a' :'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] < 10 ? '#9c1f16' :
                   values[0] >= 10 && values[0] < 12.5 ? '#ff9800' :
                   values[0] >= 12.5 && values[0] < 15 ? '#cddc39' :
                   values[0] >= 15 && values[0] < 25 ? '#4caf50' :
                   values[0] >= 25 && values[0] < 40 ? '#215a23' :
                   values[0] >= 40 ? '#20308a' :'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] < 10 ? '#9c1f16' :
                   values[0] >= 10 && values[0] < 12.5 ? '#ff9800' :
                   values[0] >= 12.5 && values[0] < 15 ? '#cddc39' :
                   values[0] >= 15 && values[0] < 25 ? '#4caf50' :
                   values[0] >= 25 && values[0] < 40 ? '#215a23' :
                   values[0] >= 40 ? '#20308a' :'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] <= 4 ? '#9c1f16' :
                   values[0] > 4.1 && values[0] <= 4.5 ? '#ff9800' :
                   values[0] > 4.5 && values[0] <= 5 ? '#cddc39' :
                   values[0] > 5 && values[0] <= 5.5 ? '#4caf50' :
                   values[0] > 5.5 && values[0] <= 6 ? '#215a23' :
                   values[0] > 6 ? '#20308a' :'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] < 2.5 ? '#9c1f16' :
                   values[0] >= 2.5 && values[0] < 5 ? '#ff9800' :
                   values[0] >= 5 && values[0] < 7.5 ? '#cddc39' :
                   values[0] >= 7.5 && values[0] < 10 ? '#4caf50' :
                   values[0] >= 10 && values[0] < 15 ? '#215a23' :
                   values[0] >= 15 ? '#20308a' :'rgba(255,255,255,0)';
        },

        function(values){
            return values[0] === 655358 ? null :
                    values[0] < 0.3 ? '#ff9800' :
                    values[0] >= 0.3 && values[0] < 0.7 ? '#cddc39' :
                    values[0] >= 0.7 && values[0] < 1.2 ? '#4caf50' :
                    values[0] >= 1.2 && values[0] <= 1.8 ? '#215a23' :
                    values[0] > 1.8 ? '#20308a' : 'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                    values[0] < 0.4 ? '#ff9800' :
                    values[0] >= 0.4 && values[0] < 0.9 ? '#cddc39' :
                    values[0] >= 0.9 && values[0] < 1.5 ? '#4caf50' :
                    values[0] >= 1.5 && values[0] <= 2.2 ? '#215a23' :
                    values[0] > 2.2 ? '#20308a' : 'rga(255,255,255,0)';
        },
        function(values){
            return values[0] === 65535 ? null :
                   values[0] < 1 ? 'rgb(11,11,57)' :
                   values[0] >= 1 && values[0] <= 500 ? 'rgb(4,4,180)' :
                   values[0] > 500 && values[0] <= 1000 ? 'rgb(11,97,11)' :
                   values[0] > 1000 && values[0] <= 1500 ? 'rgb(8,138,8)' :
                   values[0] > 1500 && values[0] <= 2000 ? 'rgb(4,180,4)' :
                   values[0] > 2000 && values[0] <= 2500 ? 'rgb(255,191,0)' :
                   values[0] > 2500 && values[0] <= 3000 ? 'rgb(223,116,1)' :
                   values[0] >= 3000 ? 'rgb(138,8,8)' : 'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === 65535 ? null :
                   values[0] < 50 ? 'rgb(11,11,57)' :
                   values[0] >= 50 && values[0] <= 100 ? 'rgb(4,4,180)' :
                   values[0] > 100 && values[0] <= 150 ? 'rgb(11,97,11)' :
                   values[0] > 150 && values[0] <= 200 ? 'rgb(8,138,8)' :
                   values[0] > 200 && values[0] <= 250 ? 'rgb(4,180,4)' :
                   values[0] > 250 && values[0] <= 300 ? 'rgb(255,191,0)' :
                   values[0] > 300 && values[0] <= 350 ? 'rgb(223,116,1)' :
                   values[0] >= 350 ? 'rgb(138,8,8)' : 'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === -3.4028230607370965e+38 ? null :
                   values[0] < 2.5 ? '#9c1f16' :
                   values[0] >= 2.5 && values[0] < 5 ? '#ff9800' :
                   values[0] >= 5 && values[0] < 7.5 ? '#cddc39' :
                   values[0] >= 7.5 && values[0] < 10 ? '#4caf50' :
                   values[0] >= 10 && values[0] < 15 ? '#215a23' :
                   values[0] >= 15 ? '#20308a' :'rgba(255,255,255,0)';
        },
        function(values){
            return values[0] === 65535 ? null :
                   values[0] < 1 ? 'rgb(11,11,57)' :
                   values[0] >= 1 && values[0] <= 250 ? 'rgb(4,4,180)' :
                   values[0] > 250 && values[0] <= 500 ? 'rgb(11,97,11)' :
                   values[0] > 500 && values[0] <= 750 ? 'rgb(8,138,8)' :
                   values[0] > 750 && values[0] <= 1000 ? 'rgb(4,180,4)' :
                   values[0] > 1000 && values[0] <= 1250 ? 'rgb(255,191,0)' :
                   values[0] > 1250 && values[0] <= 1500 ? 'rgb(223,116,1)' :
                   values[0] > 1500 ? 'rgb(138,8,8)' : 'rgba(255,255,255,0)';
        },
    ];
	for(var i = 0; i < respuestas.length; i++){
		var georaster = respuestas[i];

	    var capaGeoraster = new GeoRasterLayer({
	        attribution: "Planet",
	        georaster: georaster,
	        opacity: 0.9,
	        pixelValuesToColorFn: pixelValuesToColorFnArray[i],
	        resolution: 350 // optional parameter for adjusting display resolution
	    });

	    map.fitBounds(capaGeoraster.getBounds());
	    capas.push(capaGeoraster);
	}



	//AÑADIR LEYENDAS
	parametrosLeyendas = [
		{
			position: 'bottomleft',
			legends: [{
				name: 'Aluminio',
				layer: capas[0],
				elements: [{
						label: '<0.05 cmolc+/dm3',
						html: '',
						style: {'background-color': '#215a23','width': '7px','height': '10px'}
					}, {
						label: '0.06-0.1 cmolc+/dm3',
						html: '',
						style: {'background-color': '#4caf50','width': '7px','height': '10px'}
					},{
						label: '0.11-0.5 cmolc+/dm3',
						html: '',
						style: {'background-color': '#cddc39','width': '7px','height': '10px'}
					},{
						label: '0.51-1 cmolc+/dm3',
						html: '',
						style: {'background-color': '#ff9800','width': '7px','height': '10px'}
					},{
						label: '>1 cmolc+/dm3',
						html: '',
						style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
				}]
			}],
			collapseSimple: 	true,
			detectStretched:	true,
			collapsedOnInit: 	false,
			defaultOpacity: 	1,
			visibleIcon: 		"",
			hiddenIcon: 		""
		}, 
	    {
			position: 'bottomright',
			legends: [{
				name: 'Arcilla',
				layer: capas[1],
				elements: [{
						label: '<10%',
						html: '',
						style: {'background-color': '#ff9800','width': '7px','height': '9px'}
					}, {
						label: '10%-25%',
						html: '',
						style: {'background-color': '#cddc39','width': '7px','height': '9px'}
					},{
						label: '25%-45%',
						html: '',
						style: {'background-color': '#4caf50','width': '7px','height': '9px'}
					},{
						label: '45%-55%',
						html: '',
						style: {'background-color': '#215a23','width': '7px','height': '9px'}
					},{
						label: '>55%',
						html: '',
						style: {'background-color': '#20308a','width': '7px','height': '9px'}
				}]
			}],
			collapseSimple: 	true,
			detectStretched:	true,
			collapsedOnInit: 	false,
			defaultOpacity: 	0.7,
			visibleIcon: 		"icon icon-eye",
			hiddenIcon: 		"icon icon-eye-slash"
		},
	    {
			position: 'bottomleft',
			legends: [{
				name: 'Boro',
				layer: capas[2],
				elements: [{
						label: '<0.1 mg/dm3',
						html: '',
						style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
					},{
						label: '0.1-0.3 mg/dm3',
						html: '',
						style: {'background-color': '#ff9800','width': '7px','height': '10px'}
					},{
						label: '0.3-0.5 mg/dm3',
						html: '',
						style: {'background-color': '#cddc39','width': '7px','height': '10px'}
					},{
						label: '0.5-0.8 mg/dm3',
						html: '',
						style: {'background-color': '#4caf50','width': '7px','height': '10px'}
					},{
						label: '0.8-1 mg/dm3',
						html: '',
						style: {'background-color': '#215a23','width': '7px','height': '10px'}
					},{
						label: '>1 mg/dm3',
						html: '',
						style: {'background-color': '#20308a','width': '7px','height': '10px'}
				}]
			}],
			collapseSimple: 	true,
			detectStretched:	true,
			collapsedOnInit: 	false,
			defaultOpacity: 	1,
			visibleIcon: 		"",
			hiddenIcon: 		""
		},
	    {
			position: 'bottomleft',
			legends: [{
				name: 'Calcio',
				layer: capas[3],
				elements: [{
						label: '<1.0 cmolc+/dm3',
						html: '',
						style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
					},{
						label: '1.0-2.0 cmolc+/dm3',
						html: '',
						style: {'background-color': '#ff9800','width': '7px','height': '10px'}
					},{
						label: '2.0-3.0 cmolc+/dm3',
						html: '',
						style: {'background-color': '#cddc39','width': '7px','height': '10px'}
					},{
						label: '3.0-4.0 cmolc+/dm3',
						html: '',
						style: {'background-color': '#4caf50','width': '7px','height': '10px'}
					},{
						label: '4.0-5.0 cmolc+/dm3',
						html: '',
						style: {'background-color': '#215a23','width': '7px','height': '10px'}
					},{
						label: '>5.0 cmolc+/dm3',
						html: '',
						style: {'background-color': '#20308a','width': '7px','height': '10px'}
				}]
			}],
			collapseSimple: 	true,
			detectStretched:	true,
			collapsedOnInit: 	false,
			defaultOpacity: 	1,
			visibleIcon: 		"",
			hiddenIcon: 		""
		},
	    {
			position: 'bottomleft',
			legends: [{
				name: 'CTC',
				layer: capas[4],
				elements: [{
						label: '<5.0 cmolc+/dm3',
						html: '',
						style: {'background-color': '#cddc39','width': '7px','height': '10px'}
					},{
						label: '5.0-10.0 cmolc+/dm3',
						html: '',
						style: {'background-color': '#4caf50','width': '7px','height': '10px'}
					},{
						label: '10.0-17 cmolc+/dm3',
						html: '',
						style: {'background-color': '#215a23','width': '7px','height': '10px'}
					},{
						label: '>17.0 cmolc+/dm3',
						html: '',
						style: {'background-color': '#20308a','width': '7px','height': '10px'}
				}]
			}],
			collapseSimple: 	true,
			detectStretched:	true,
			collapsedOnInit: 	false,
			defaultOpacity: 	1,
			visibleIcon: 		"",
			hiddenIcon: 		""
		},
	    {
			position: 'bottomleft',
			legends: [{
				name: 'Cobre',
				layer: capas[5],
				elements: [{
						label: '<0.3 mg/dm3',
						html: '',
						style: {'background-color': '#ff9800','width': '7px','height': '10px'}
					},{
						label: '0.3-0.7 mg/dm3',
						html: '',
						style: {'background-color': '#cddc39','width': '7px','height': '10px'}
					},{
						label: '0.7-1.2 mg/dm3',
						html: '',
						style: {'background-color': '#4caf50','width': '7px','height': '10px'}
					},{
						label: '1.2-1.8 mg/dm3',
						html: '',
						style: {'background-color': '#215a23','width': '7px','height': '10px'}
					},{
						label: '>1.8 mg/dm3',
						html: '',
						style: {'background-color': '#20308a','width': '7px','height': '10px'}
				}]
			}],
			collapseSimple: 	true,
			detectStretched:	true,
			collapsedOnInit: 	false,
			defaultOpacity: 	1,
			visibleIcon: 		"",
			hiddenIcon: 		""
		},
	    {
			position: 'bottomleft',
			legends: [{
				name: 'Hierro',
				layer: capas[6],
				elements: [{
						label: '<8.0 mg/dm3',
						html: '',
						style: {'background-color': '#ff9800','width': '7px','height': '10px'}
					},{
						label: '8.0-18.0 mg/dm3',
						html: '',
						style: {'background-color': '#cddc39','width': '7px','height': '10px'}
					},{
						label: '18.0-30.0 mg/dm3',
						html: '',
						style: {'background-color': '#4caf50','width': '7px','height': '10px'}
					},{
						label: '30.0-45.0 mg/dm3',
						html: '',
						style: {'background-color': '#215a23','width': '7px','height': '10px'}
					},{
						label: '>45 mg/dm3',
						html: '',
						style: {'background-color': '#20308a','width': '7px','height': '10px'}
				}]
			}],
			collapseSimple: 	true,
			detectStretched:	true,
			collapsedOnInit: 	false,
			defaultOpacity: 	1,
			visibleIcon: 		"",
			hiddenIcon: 		""
		},
	    {
	        position: 'bottomleft',
	        legends: [{
	            name: 'Hidrógeno',
	            layer: capas[7],
	            elements: [{
	                    label: 'NO DATA',
	                    html: '',
	                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
	                }]
	        }],
	        collapseSimple: 	true,
	        detectStretched:	true,
	        collapsedOnInit: 	false,
	        defaultOpacity: 	1,
	        visibleIcon: 		"",
	        hiddenIcon: 		""
	    },
	    {
			position: 'bottomleft',
			legends: [{
				name: 'Potasio',
				layer: capas[8],
				elements: [{
						label: '<0.12 cmolc+/dm3',
						html: '',
						style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
					},{
						label: '0.12-0.24 cmolc+/dm3',
						html: '',
						style: {'background-color': '#ff9800','width': '7px','height': '10px'}
					},{
						label: '0.24-0.37 cmolc+/dm3',
						html: '',
						style: {'background-color': '#cddc39','width': '7px','height': '10px'}
					},{
						label: '0.37-0.62 cmolc+/dm3',
						html: '',
						style: {'background-color': '#4caf50','width': '7px','height': '10px'}
					},{
						label: '0.62-3.0 cmolc+/dm3',
						html: '',
						style: {'background-color': '#215a23','width': '7px','height': '10px'}
					},{
						label: '>3.0 cmolc+/dm3',
						html: '',
						style: {'background-color': '#20308a','width': '7px','height': '10px'}
				}]
			}],
			collapseSimple: 	true,
			detectStretched:	true,
			collapsedOnInit: 	false,
			defaultOpacity: 	1,
			visibleIcon: 		"",
			hiddenIcon: 		""
		},
	    {
	        position: 'bottomleft',
	        legends: [{
	            name: 'Magnesio',
	            layer: capas[9],
	            elements: [{
	                    label: '<0.4 cmolc+/dm3',
	                    html: '',
	                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
	                },{
	                    label: '0.4-0.8 cmolc+/dm3',
	                    html: '',
	                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
	                },{
	                    label: '0.8-1.2 cmolc+/dm3',
	                    html: '',
	                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
	                },{
	                    label: '1.2-1.6 cmolc+/dm3',
	                    html: '',
	                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
	                },{
	                    label: '1.6-2.0 cmolc+/dm3',
	                    html: '',
	                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
	                },{
	                    label: '>2.0 cmolc+/dm3',
	                    html: '',
	                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
	            }]
	        }],
	        collapseSimple: 	true,
	        detectStretched:	true,
	        collapsedOnInit: 	false,
	        defaultOpacity: 	1,
	        visibleIcon: 		"",
	        hiddenIcon: 		""
	    },
	    {
			position: 'bottomright',
			legends: [{
				name: 'Manganeso',
				layer: capas[10],
				elements: [{
						label: '<3 mg/dm3',
						html: '',
						style: {'background-color': '#ff9800','width': '7px','height': '9px'}
					},{
						label: '3.0-5.0 mg/dm3',
						html: '',
						style: {'background-color': '#ffeb3b','width': '7px','height': '9px'}
					}, {
						label: '5.0-8.0 mg/dm3',
						html: '',
						style: {'background-color': '#cddc39','width': '7px','height': '9px'}
					},{
						label: '8.0-12.0 mg/dm3',
						html: '',
						style: {'background-color': '#4caf50','width': '7px','height': '9px'}
					},{
						label: '12.0-80 mg/dm3',
						html: '',
						style: {'background-color': '#215a23','width': '7px','height': '9px'}
					},{
						label: '>80 mg/dm3',
						html: '',
						style: {'background-color': '#20308a','width': '7px','height': '9px'}
				}]
			}],
			collapseSimple: 	true,
			detectStretched:	true,
			collapsedOnInit: 	false,
			defaultOpacity: 	0.7,
			visibleIcon: 		"icon icon-eye",
			hiddenIcon: 		"icon icon-eye-slash"
		},
	    {
	        position: 'bottomleft',
	        legends: [{
	            name: 'Materio Orgánica',
	            layer: capas[11],
	            elements: [{
	                    label: '<10 g/dm3',
	                    html: '',
	                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
	                },{
	                    label: '10-12.5 g/dm3',
	                    html: '',
	                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
	                },{
	                    label: '12.5-15 g/dm3',
	                    html: '',
	                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
	                },{
	                    label: '15-25 g/dm3',
	                    html: '',
	                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
	                },{
	                    label: '25-40 g/dm3',
	                    html: '',
	                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
	                },{
	                    label: '>40 g/dm3',
	                    html: '',
	                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
	            }]
	        }],
	        collapseSimple: 	true,
	        detectStretched:	true,
	        collapsedOnInit: 	false,
	        defaultOpacity: 	1,
	        visibleIcon: 		"",
	        hiddenIcon: 		""
	    },
	    {
	        position: 'bottomleft',
	        legends: [{
	            name: 'Fósforo',
	            layer: capas[12],
	            elements: [{
	                    label: 'NO DATA',
	                    html: '',
	                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
	                }]
	        }],
	        collapseSimple: 	true,
	        detectStretched:	true,
	        collapsedOnInit: 	false,
	        defaultOpacity: 	1,
	        visibleIcon: 		"",
	        hiddenIcon: 		""
	    },
	    {
	        position: 'bottomleft',
	        legends: [{
	            name: 'PCAL',
	            layer: capas[13],
	            elements: [{
	                    label: 'NO DATA',
	                    html: '',
	                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
	                }]
	        }],
	        collapseSimple: 	true,
	        detectStretched:	true,
	        collapsedOnInit: 	false,
	        defaultOpacity: 	1,
	        visibleIcon: 		"",
	        hiddenIcon: 		""
	    },
	    {
	        position: 'bottomleft',
	        legends: [{
	            name: 'Ph',
	            layer: capas[14],
	            elements: [{
	                    label: '<4 H2O',
	                    html: '',
	                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
	                },{
	                    label: '4.1-4.5 H2O',
	                    html: '',
	                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
	                },{
	                    label: '4.5-5.0 H2O',
	                    html: '',
	                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
	                },{
	                    label: '5-5.5 H2O',
	                    html: '',
	                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
	                },{
	                    label: '5.5-6 H2O',
	                    html: '',
	                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
	                },{
	                    label: '>6.5 H2O',
	                    html: '',
	                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
	            }]
	        }],
	        collapseSimple: 	true,
	        detectStretched:	true,
	        collapsedOnInit: 	false,
	        defaultOpacity: 	1,
	        visibleIcon: 		"",
	        hiddenIcon: 		""
	    },
	    {
	        position: 'bottomleft',
	        legends: [{
	            name: 'Azufre',
	            layer: capas[15],
	            elements: [{
	                    label: '<2.5 mg/dm3',
	                    html: '',
	                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
	                },{
	                    label: '2.5-5 mg/dm3',
	                    html: '',
	                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
	                },{
	                    label: '5-7.5 mg/dm3',
	                    html: '',
	                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
	                },{
	                    label: '7.5-10 mg/dm3',
	                    html: '',
	                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
	                },{
	                    label: '10-15 mg/dm3',
	                    html: '',
	                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
	                },{
	                    label: '>15 mg/dm3',
	                    html: '',
	                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
	            }]
	        }],
	        collapseSimple: 	true,
	        detectStretched:	true,
	        collapsedOnInit: 	false,
	        defaultOpacity: 	1,
	        visibleIcon: 		"",
	        hiddenIcon: 		""
	    },
	    {
	        position: 'bottomleft',
	        legends: [{
	            name: 'Silicio',
	            layer: capas[16],
	            elements: [{
	                    label: 'NO DATA',
	                    html: '',
	                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
	                }]
	        }],
	        collapseSimple: 	true,
	        detectStretched:	true,
	        collapsedOnInit: 	false,
	        defaultOpacity: 	1,
	        visibleIcon: 		"",
	        hiddenIcon: 		""
	    },
	    {
			position: 'bottomleft',
			legends: [{
				name: 'Zinc',
				layer: capas[17],
				elements: [{
						label: '<0.4 mg/dm3',
						html: '',
						style: {'background-color': '#ff9800','width': '7px','height': '10px'}
					},{
						label: '0.4-0.9 mg/dm3',
						html: '',
						style: {'background-color': '#cddc39','width': '7px','height': '10px'}
					},{
						label: '0.9-1.5 mg/dm3',
						html: '',
						style: {'background-color': '#4caf50','width': '7px','height': '10px'}
					},{
						label: '1.5-2.2 mg/dm3',
						html: '',
						style: {'background-color': '#215a23','width': '7px','height': '10px'}
					},{
						label: '>2.2 mg/dm3',
						html: '',
						style: {'background-color': '#20308a','width': '7px','height': '10px'}
				}]
			}],
			collapseSimple: 	true,
			detectStretched:	true,
			collapsedOnInit: 	false,
			defaultOpacity: 	1,
			visibleIcon: 		"",
			hiddenIcon: 		""
		},
	    {
			position: 'bottomleft',
			legends: [{
				name: 'Calcario',
				layer: capas[18],
				elements: [{
	                    label: '= 0 kg/ha',
	                    html: '',
	                    style: {'background-color': 'rgb(11,11,57)','width': '7px','height': '10px'}
	                },{
	                    label: '1-500 kg/ha',
	                    html: '',
	                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
	                },{
						label: '501-1000 kg/ha',
						html: '',
						style: {'background-color': '#215a23','width': '7px','height': '10px'}
					},{
						label: '1001-1500 kg/ha',
						html: '',
						style: {'background-color': '#4caf50','width': '7px','height': '10px'}
					},{
						label: '1501-2000 kg/ha',
						html: '',
						style: {'background-color': '#cddc39','width': '7px','height': '10px'}
					},{
						label: '2001-2500 kg/ha',
						html: '',
						style: {'background-color': 'rgb(255,191,0)','width': '7px','height': '10px'}
					},{
						label: '2501-3000 kg/ha',
						html: '',
						style: {'background-color': '#ff9800','width': '7px','height': '10px'}
					},{
						label: '>3000 kg/ha',
						html: '',
						style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
					}]
			}],
			collapseSimple: 	true,
			detectStretched:	true,
			collapsedOnInit: 	false,
			defaultOpacity: 	1,
			visibleIcon: 		"",
			hiddenIcon: 		""
		},
	    {
	        position: 'bottomleft',
	        legends: [{
	            name: 'KCL',
	            layer: capas[19],
	            elements: [{
	                    label: '< 50 kg/ha',
	                    html: '',
	                    style: {'background-color': 'rgb(11,11,57)','width': '7px','height': '10px'}
	                },{
	                    label: '51-100 kg/ha',
	                    html: '',
	                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
	                },{
	                    label: '101-150 kg/ha',
	                    html: '',
	                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
	                },{
	                    label: '151-200 kg/ha',
	                    html: '',
	                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
	                },{
	                    label: '201-250 kg/ha',
	                    html: '',
	                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
	                },{
	                    label: '251-300 kg/ha',
	                    html: '',
	                    style: {'background-color': 'rgb(255,191,0)','width': '7px','height': '10px'}
	                },{
	                    label: '301-350 kg/ha',
	                    html: '',
	                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
	                },{
	                    label: '350-400 kg/ha',
	                    html: '',
	                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
	                }]
	        }],
	        collapseSimple: 	true,
	        detectStretched:	true,
	        collapsedOnInit: 	false,
	        defaultOpacity: 	1,
	        visibleIcon: 		"",
	        hiddenIcon: 		""
	    },
	    {
	        position: 'bottomleft',
	        legends: [{
	            name: 'Silicato',
	            layer: capas[20],
	            elements: [{
	                    label: '= 0 kg/ha',
	                    html: '',
	                    style: {'background-color': 'rgb(11,11,57)','width': '7px','height': '10px'}
	                },{
	                    label: '1-250 kg/ha',
	                    html: '',
	                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
	                },{
	                    label: '251-500 kg/ha',
	                    html: '',
	                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
	                },{
	                    label: '501-750 kg/ha',
	                    html: '',
	                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
	                },{
	                    label: '751-1000 kg/ha',
	                    html: '',
	                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
	                },{
	                    label: '1001-1250 kg/ha',
	                    html: '',
	                    style: {'background-color': 'rgb(255,191,0)','width': '7px','height': '10px'}
	                },{
	                    label: '1251-1500 kg/ha',
	                    html: '',
	                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
	                },{
	                    label: '>1500 kg/ha',
	                    html: '',
	                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
	                }]
	        }],
	        collapseSimple: 	true,
	        detectStretched:	true,
	        collapsedOnInit: 	false,
	        defaultOpacity: 	1,
	        visibleIcon: 		"",
	        hiddenIcon: 		""
	    }
	];

	//CONTROL LAYER
	var baseMaps = {
		"Streets": streets,
        // "Relieve": capaRelieve,
        // "Stamen": stamenToner,
        "Satelite": satelite
        // "MapBox": pedroMapbox,
	};

	var overlayMaps = {
			"Aluminio": capas[0],
			"Argila": capas[1],
            "Boro": capas[2],
            "Calcario": capas[3],
            "Calcio": capas[4],
            "CTC": capas[5],
            "Cobre": capas[6],
            "Hierro": capas[7],
            "HidroMAL": capas[8],
            "Potasio": capas[9],
            "Kcal": capas[10],
            "Magnesio": capas[11],
            "Manganeso": capas[12],
            "Materia Órganica ?": capas[13],
            "P ?": capas[14],
            "Pcal ?": capas[15],
            "Ph": capas[16],
            "Azufre": capas[17],
            "sat ??": capas[18],
            "sil ??": capas[19],
            "Silicato": capas[20],
            "Zinc": capas[21],
	};

	// L.control.custom({
    //     position: 'topright',
    //     content : '<button type="button" class="btn btn-primary">'+'<i class="fa fa-map"></i>'+'</button>',
    //     style: {
    //         margin: '10px',
    //         padding: '0px 0 0 0',
    //         cursor: 'pointer',
    //     },
    //     events: {
    //         click: function(data){
    //             console.log('layers(baseMaps)');
    //         },
    //     }
    // }).addTo(map);

    L.control.layers(baseMaps,null,{
        //position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
	     collapsed: false
    }).addTo(map);
// layers(baseMaps).
	//CONTROL CUSTOMIZADO
	// L.control.custom({
    //     position: 'topleft',
    //     content : '<button type="button" class="btn btn-default">'+
    //               '    <i class="fa fa-crosshairs"></i>'+
    //               '</button>'+
    //               '<button type="button" class="btn btn-info">'+
    //               '    <i class="fa fa-map"></i>'+
    //               '</button>'+
    //               '<button type="button" class="btn btn-primary">'+
    //               '    <i class="fa fa-spinner fa-pulse fa-fw"></i>'+
    //               '</button>'+
    //               '<button type="button" class="btn btn-danger">'+
    //               '    <i class="fa fa-times"></i>'+
    //               '</button>'+
    //               '<button type="button" class="btn btn-success">'+
    //               '    <i class="fa fa-check"></i>'+
    //               '</button>'+
    //               '<button type="button" class="btn btn-warning">'+
    //               '    <i class="fa fa-exclamation-triangle"></i>'+
    //               '</button>',
    //     classes : 'btn-group-vertical btn-group-sm',
    //     style: {
    //         margin: '10px',
    //         padding: '0px 0 0 0',
    //         cursor: 'pointer'
    //     },
    //     datas: {
    //         'foo': 'bar',
    //     },
    //     events: {
    //         click: function(data)
    //         {
    //             console.log('wrapper div element clicked');
    //             console.log(data);
    //         },
    //         dblclick: function(data)
    //         {
    //             console.log('wrapper div element dblclicked');
    //             console.log(data);
    //         },
    //         contextmenu: function(data)
    //         {
    //             console.log('wrapper div element contextmenu');
    //             console.log(data);
    //         },
    //     }
    // }).addTo(map);

    
    var capaSeleccionada1, capaSeleccionada2;
    var controlLeyendaIzquierda, controlLeyendaDerecha;
    var controlSideBySide;
    
    $("#compararBoton").click(function(){
        //Para crear sólo un control
    	if (!controlSideBySide){
        	controlSideBySide = L.control.sideBySide(capaSeleccionada1, capaSeleccionada2).addTo(map);
        }
    });
    
    $("#capasOpciones").change(function(){
        var optionValue = $(this).val();
        var capa = capas[parseInt(optionValue)];

        //Obtenemos parámetros de la leyenda de la capa
        var parametrosLeyenda;
        for (var i = 0; i < parametrosLeyendas.length; i++){
        	if (capa === parametrosLeyendas[i].legends[0].layer){
        		parametrosLeyenda = parametrosLeyendas[i];
        	}
        }
        
        if (controlSideBySide && capaSeleccionada1){
            //Si se ha indicado el control side by side y se ha seleccionado una primera capa,
        	//utilizamos la capa 2
        	if (capaSeleccionada2) {
            	//Borramos capa seleccionada anterior
        		map.removeLayer(capaSeleccionada2);
            }
        	//Añadimos la nueva capa
        	capaSeleccionada2 = capa;
        	capaSeleccionada2.addTo(map);
        	
        	//Añadimos la leyenda de la derecha
        	parametrosLeyenda.position = "bottomright";
        	if (controlLeyendaDerecha){
        		map.removeControl(controlLeyendaDerecha);
        	}
        	controlLeyendaDerecha = L.control.htmllegend(parametrosLeyenda);
            map.addControl(controlLeyendaDerecha);
        	
        } else {
        	//Si no, trabajamos sobre la capa 1
        	if (capaSeleccionada1) {
            	//Borramos capa seleccionada anterior
            	map.removeLayer(capaSeleccionada1);
            }
        	//Añadimos la nueva capa
        	capaSeleccionada1 = capa;
        	capaSeleccionada1.addTo(map);

        	//Añadimos la leyenda de la izquierda
        	parametrosLeyenda.position = "bottomleft";
        	if (controlLeyendaIzquierda){
        		map.removeControl(controlLeyendaIzquierda);
        	}
        	controlLeyendaIzquierda = L.control.htmllegend(parametrosLeyenda);
            map.addControl(controlLeyendaIzquierda);
        }
        
        
        //Si se ha cargado, indicamos las capas de la izquierda y derecha del control
        if (controlSideBySide){
        	controlSideBySide.setLeftLayers(capaSeleccionada1);
        	controlSideBySide.setRightLayers(capaSeleccionada2);
        }
    });

});
