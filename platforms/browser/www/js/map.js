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


// var url_to_geotiff_file = "https://s3-us-west-2.amazonaws.com/planet-disaster-data/hurricane-harvey/SkySat_Freeport_s03_20170831T162740Z3.tif";
// var url_to_geotiff_file = "http://127.0.0.1:53230/www/tif/JYN012002_Argila.tif";
// var url_to_geotiff_file = "http://127.0.0.1:53230/www/shp/pruebageotif.tif";
var al_to_geotiff_file = "http://127.0.0.1:3000/www/geotif/mn.tif";
parseGeoraster(al_to_geotiff_file).then(georaster => {
    console.log("georaster:", georaster);
    var aluminio = new GeoRasterLayer({
        attribution: "Planet",
        georaster: georaster,
        opacity: 0.9,
        pixelValuesToColorFn: values => values[0] === -3.4028230607370965e+38? null :
                        (values[0] < 1) ? 'rgb(11,11,57)' :
                        (values[0] >= 1 && values[0] <= 500) ? 'rgb(4,4,180)' :
                        (values[0] > 500 && values[0] <= 1000) ? 'rgb(11,97,11)' :
                        (values[0] > 1000 && values[0] <= 1500) ? 'rgb(8,138,8)' :
                        (values[0] > 1500 && values[0] <= 2000) ? 'rgb(4,180,4)' :
                        (values[0] > 2000 && values[0] <= 2500) ? 'rgb(255,191,0)' :
                        (values[0] > 2500 && values[0] <= 3000) ? 'rgb(223,116,1)' :
                        (values[0] >= 3000) ? 'rgb(138,8,8)' :
                        'rgba(255,255,255,0)',
        resolution: 350 // optional parameter for adjusting display resolution
    });
    aluminio.addTo(map);

    //console.log(aluminio.getBounds());
    map.fitBounds(aluminio.getBounds());

    //AÑADIR LEYENDA
  //   var htmlLegendaluminio = L.control.htmllegend({
  //     position: 'bottomright',
  //     legends: [{
  //         name: 'Aluminio',
  //         layer: aluminio,
  //         elements: [{
  //             label: '<0.05 cmolc+/dm3',
  //             html: '',
  //             style: {'background-color': '#215a23','width': '10px','height': '10px'}
  //         }, {
  //             label: '0.06-0.1 cmolc+/dm3',
  //             html: '',
  //             style: {'background-color': '#4caf50','width': '10px','height': '10px'}
  //         },{
  //             label: '0.11-0.5 cmolc+/dm3',
  //             html: '',
  //             style: {'background-color': '#cddc39','width': '10px','height': '10px'}
  //         },{
  //             label: '0.51-1 cmolc+/dm3',
  //             html: '',
  //             style: {'background-color': '#ff9800','width': '10px','height': '10px'}
  //         },{
  //             label: '>1 cmolc+/dm3',
  //             html: '',
  //             style: {'background-color': '#9c1f16','width': '10px','height': '10px'}
  //         },]
  //     }],
  //     collapseSimple: true,
  //     detectStretched: true,
  //     collapsedOnInit: true,
  //     defaultOpacity: 0.7,
  //     visibleIcon: 'icon icon-eye',
  //     hiddenIcon: 'icon icon-eye-slash'
  // })
  // map.addControl(htmlLegendaluminio)
  //
  // //CONTROL LAYER
  //    var baseMaps = {
  //        "Streets": streets
  //    };
  //
  //    var overlayMaps = {
  //        "Aluminio": aluminio,
  //
  //    };
  //
  //    L.control.layers(baseMaps, overlayMaps).addTo(map);
  //

});
//CONTROL CUSTOMIZADO

//      L.control.custom({
//         position: 'topleft',
//         content : '<button type="button" class="btn btn-default">'+
//                   '    <i class="fa fa-crosshairs"></i>'+
//                   '</button>'+
//                   '<button type="button" class="btn btn-info">'+
//                   '    <i class="fa fa-compass"></i>'+
//                   '</button>'+
//                   '<button type="button" class="btn btn-primary">'+
//                   '    <i class="fa fa-spinner fa-pulse fa-fw"></i>'+
//                   '</button>'+
//                   '<button type="button" class="btn btn-danger">'+
//                   '    <i class="fa fa-times"></i>'+
//                   '</button>'+
//                   '<button type="button" class="btn btn-success">'+
//                   '    <i class="fa fa-check"></i>'+
//                   '</button>'+
//                   '<button type="button" class="btn btn-warning">'+
//                   '    <i class="fa fa-exclamation-triangle"></i>'+
//                   '</button>',
//         classes : 'btn-group-vertical btn-group-sm',
//         style   :
//         {
//             margin: '10px',
//             padding: '0px 0 0 0',
//             cursor: 'pointer'
//         },
//         datas   :
//         {
//             'foo': 'bar',
//         },
//         events:
//         {
//             click: function(data)
//             {
//                 console.log('wrapper div element clicked');
//                 console.log(data);
//             },
//             dblclick: function(data)
//             {
//                 console.log('wrapper div element dblclicked');
//                 console.log(data);
//             },
//             contextmenu: function(data)
//             {
//                 console.log('wrapper div element contextmenu');
//                 console.log(data);
//             },
//         }
//     })
//     .addTo(map);
//
// var sideToside= L.control.sideBySide(streets, aluminio).addTo(map);
// });
//
//     var argila_to_geotiff_file = "http://127.0.0.1:53230/www/geotif/argila.tif";
//     parseGeoraster(argila_to_geotiff_file).then(georaster => {
//         console.log("georaster:", georaster);
//         var argila = new GeoRasterLayer({
//             attribution: "Planet",
//             georaster: georaster,
//             opacity: 0.9,
//             pixelValuesToColorFn: values => values[0] === -3.4028230607370965e+38 ? null :
//                             (values[0] <= 0.05) ? '#215a23' :
//                             (values[0] > 0.05 && values[0] <= 0.1) ? '#4caf50' :
//                             (values[0] > 0.1 && values[0] <= 0.5) ? '#cddc39' :
//                             (values[0] > 0.5 && values[0] <= 1) ? '#ff9800' :
//                             (values[0] > 1) ? '#9c1f16' :
//                             'rgba(255,255,255,0)',
//             resolution: 350 // optional parameter for adjusting display resolution
//         });
//         argila.addTo(map);
//
//         var overlayMaps = {
//             "Argila": argila
//         };
//
//         L.control.layers(overlayMaps).addTo(map);
//
//
// });
// var argila_to_geotiff_file = "http://127.0.0.1:53230/www/geotif/argila.tif";
// parseGeoraster(argila_to_geotiff_file).then(georaster => {
//     //console.log("georaster:", georaster);
//         var argila = new GeoRasterLayer({
//             attribution: "Planet",
//             georaster: georaster,
//             opacity: 0.1,
//             pixelValuesToColorFn: values => values[0] === 42 ? '#ffffff' : 'blue',
//             //pixelValuesToColorFn: values => values[0] === -3.4028230607370965e+38 ? 'rgba(255,255,255,0)' : '#9a5c5c',
//             resolution: 5 // optional parameter for adjusting display resolution
//         });
//         argila.addTo(map);
//
//     console.log(argila.getBounds());
//     map.fitBounds(argila.getBounds());
//
//
//     //CONTROL LAYER
//     var baseMaps = {
//         "Streets": streets
//     };
//
//     var overlayMaps = {
//         "Arcilla": argila
//     };
//
//     L.control.layers(baseMaps, overlayMaps).addTo(map);
//
//     var sideToside= L.control.sideBySide(streets, argila).addTo(map);
// });



//





//fetch(url_to_geotiff_file)
//  .then(response => response.arrayBuffer())
//  .then(arrayBuffer => {
//    parse_georaster(arrayBuffer).then(georaster => {
//      console.log("georaster:", georaster);
//
//      /*
//          GeoRasterLayer is an extension of GridLayer,
//          which means can use GridLayer options like opacity.
//
//          Just make sure to include the georaster option!
//
//          Optionally set the pixelValuesToColorFn function option to customize
//          how values for a pixel are translated to a color.
//
//          http://leafletjs.com/reference-1.2.0.html#gridlayer
//      */
//      var layer = new GeoRasterLayer({
//          georaster: georaster,
//          opacity: 0.7,
//          pixelValuesToColorFn: values => values[0] === 42 ? '#ffffff' : '#000000',
//          resolution: 64 // optional parameter for adjusting display resolution
//      });
//      layer.addTo(map);
//
//      map.fitBounds(layer.getBounds());
//
//  });
//});
