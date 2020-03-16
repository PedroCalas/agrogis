
var configGeoraster = [{
		filename: "www/geotif/al.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <= 0.05 						? '#215a23' :
					values[0] >  0.05 && values[0] <= 0.1 	? '#4caf50' :
					values[0] >  0.1  && values[0] <= 0.5 	? '#cddc39' :
					values[0] >  0.5  && values[0] <= 1 	? '#ff9800' :
					values[0] >  1 							? '#9c1f16' : 'rgba(255,255,255,0)';
		},
		leyenda: {
			name: "Aluminio",
			elements: [{
					label: '<0.05 cmolc+/dm3',
					style: {'background-color': '#215a23','width': '7px','height': '10px'}
				}, {
					label: '0.06-0.1 cmolc+/dm3',
					style: {'background-color': '#4caf50','width': '7px','height': '10px'}
				}, {
					label: '0.11-0.5 cmolc+/dm3',
					style: {'background-color': '#cddc39','width': '7px','height': '10px'}
				}, {
					label: '0.51-1 cmolc+/dm3',
					style: {'background-color': '#ff9800','width': '7px','height': '10px'}
				}, {
					label: '>1 cmolc+/dm3',
					style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
			}]
		},
 	}, {
		filename: "www/geotif/argila.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 ? null :
					values[0] <  10 					? '#ff9800' :
					values[0] >= 10 && values[0] < 25 	? '#cddc39' :
					values[0] >= 25 && values[0] < 45 	? '#4caf50' :
					values[0] >= 45 && values[0] < 55 	? '#215a23' :
					values[0] >= 55 					? '#20308a' : 'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Arcilla',
			elements: [{
					label: '<10%',
					style: {'background-color': '#ff9800','width': '7px','height': '9px'}
				}, {
					label: '10%-25%',
					style: {'background-color': '#cddc39','width': '7px','height': '9px'}
				}, {
					label: '25%-45%',
					style: {'background-color': '#4caf50','width': '7px','height': '9px'}
				}, {
					label: '45%-55%',
					style: {'background-color': '#215a23','width': '7px','height': '9px'}
				}, {
					label: '>55%',
					style: {'background-color': '#20308a','width': '7px','height': '9px'}
			}]
		},
	}, {
		filename: "www/geotif/b.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38	? null :
					values[0] <  0.1 						? '#9c1f16' :
					values[0] >= 0.1 && values[0] < 0.3 	? '#ff9800' :
					values[0] >= 0.3 && values[0] < 0.5 	? '#cddc39' :
					values[0] >= 0.5 && values[0] < 0.8 	? '#4caf50' :
					values[0] >= 0.8 && values[0] < 1 		? '#215a23' :
					values[0] >= 1 							? '#20308a' :'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Boro',
			elements: [{
					label: '<0.1 mg/dm3',
					style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
				}, {
					label: '0.1-0.3 mg/dm3',
					style: {'background-color': '#ff9800','width': '7px','height': '10px'}
				}, {
					label: '0.3-0.5 mg/dm3',
					style: {'background-color': '#cddc39','width': '7px','height': '10px'}
				}, {
					label: '0.5-0.8 mg/dm3',
					style: {'background-color': '#4caf50','width': '7px','height': '10px'}
				}, {
					label: '0.8-1 mg/dm3',
					style: {'background-color': '#215a23','width': '7px','height': '10px'}
				}, {
					label: '>1 mg/dm3',
					style: {'background-color': '#20308a','width': '7px','height': '10px'}
			}]
		},
	}, {
		filename: "www/geotif/calcio.tif",
		pixelValuesToColorFn: function(values){
			return values[0] === -3.4028230607370965e+38 	? null :
				values[0] < 1 								? '#9c1f16' :
				values[0] >= 1 && values[0] < 2 			? '#ff9800' :
				values[0] >= 2 && values[0] < 3 			? '#cddc39' :
				values[0] >= 3 && values[0] < 4 			? '#4caf50' :
				values[0] >= 4 && values[0] < 5 			? '#215a23' :
				values[0] >= 5 								? '#20308a' :'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Calcio',
			elements: [{
					label: '<1.0 cmolc+/dm3',
					style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
				}, {
					label: '1.0-2.0 cmolc+/dm3',
					style: {'background-color': '#ff9800','width': '7px','height': '10px'}
				}, {
					label: '2.0-3.0 cmolc+/dm3',
					style: {'background-color': '#cddc39','width': '7px','height': '10px'}
				}, {
					label: '3.0-4.0 cmolc+/dm3',
					style: {'background-color': '#4caf50','width': '7px','height': '10px'}
				}, {
					label: '4.0-5.0 cmolc+/dm3',
					style: {'background-color': '#215a23','width': '7px','height': '10px'}
				}, {
					label: '>5.0 cmolc+/dm3',
					style: {'background-color': '#20308a','width': '7px','height': '10px'}
			}]
		},
	}, {
		filename: "www/geotif/ctc.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38	? null :
					values[0] <  5 							? '#cddc39' :
					values[0] >= 5  && values[0] <= 10 		? '#4caf50' :
					values[0] >  10 && values[0] <= 17 		? '#215a23' :
					values[0] >  17 						? '#20308a' :'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'CTC',
			elements: [{
					label: '<5.0 cmolc+/dm3',
					style: {'background-color': '#cddc39','width': '7px','height': '10px'}
				},{
					label: '5.0-10.0 cmolc+/dm3',
					style: {'background-color': '#4caf50','width': '7px','height': '10px'}
				},{
					label: '10.0-17 cmolc+/dm3',
					style: {'background-color': '#215a23','width': '7px','height': '10px'}
				},{
					label: '>17.0 cmolc+/dm3',
					style: {'background-color': '#20308a','width': '7px','height': '10px'}
			}]
		},
	}, {
		filename: "www/geotif/cu.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  0.3 						? '#ff9800' :
					values[0] >= 0.3 && values[0] <  0.7 	? '#cddc39' :
					values[0] >= 0.7 && values[0] <  1.2 	? '#4caf50' :
					values[0] >= 1.2 && values[0] <= 1.8 	? '#215a23' :
					values[0] >  1.8 						? '#20308a' : 'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Cobre',
			elements: [{
					label: '<0.3 mg/dm3',
					style: {'background-color': '#ff9800','width': '7px','height': '10px'}
				},{
					label: '0.3-0.7 mg/dm3',
					style: {'background-color': '#cddc39','width': '7px','height': '10px'}
				},{
					label: '0.7-1.2 mg/dm3',
					style: {'background-color': '#4caf50','width': '7px','height': '10px'}
				},{
					label: '1.2-1.8 mg/dm3',
					style: {'background-color': '#215a23','width': '7px','height': '10px'}
				},{
					label: '>1.8 mg/dm3',
					style: {'background-color': '#20308a','width': '7px','height': '10px'}
			}]
		}
	}, {
		filename: "www/geotif/fe.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  0.8 						? '#ff9800' :
					values[0] >= 0.8 && values[0] <  18 	? '#cddc39' :
					values[0] >= 18  && values[0] <  30 	? '#4caf50' :
					values[0] >= 30  && values[0] <= 45 	? '#215a23' :
					values[0] >  45 						? '#20308a' : 'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Hierro',
			elements: [{
					label: '<8.0 mg/dm3',
					style: {'background-color': '#ff9800','width': '7px','height': '10px'}
				},{
					label: '8.0-18.0 mg/dm3',
					style: {'background-color': '#cddc39','width': '7px','height': '10px'}
				},{
					label: '18.0-30.0 mg/dm3',
					style: {'background-color': '#4caf50','width': '7px','height': '10px'}
				},{
					label: '30.0-45.0 mg/dm3',
					style: {'background-color': '#215a23','width': '7px','height': '10px'}
				},{
					label: '>45 mg/dm3',
					style: {'background-color': '#20308a','width': '7px','height': '10px'}
			}]
		},
	}, {
		filename: "www/geotif/hidrogeno.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  0.8 						? '#ff9800' :
					values[0] >= 0.8 && values[0] < 18 		? '#cddc39' :
					values[0] >= 18  && values[0] < 30 		? '#4caf50' :
					values[0] >= 30  && values[0] <= 45 	? '#215a23' :
					values[0] >  45 						? '#20308a' : 'rgba(255,255,255,0)';
		},
		leyenda: {
            name: 'Hidrógeno',
            elements: [{
				label: 'NO DATA',
				style: {'background-color': '#ff9800','width': '7px','height': '10px'}
			}]
		},

	}, {
		filename: "www/geotif/k.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  0.12 						? '#9c1f16' :
                    values[0] >= 0.12 && values[0] < 0.24 	? '#ff9800' :
                    values[0] >= 0.24 && values[0] < 0.37 	? '#cddc39' :
                    values[0] >= 0.37 && values[0] < 0.62 	? '#4caf50' :
                    values[0] >= 0.62 && values[0] < 3 		? '#215a23' :
                    values[0] >= 3 							? '#20308a' :'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Potasio',
			elements: [{
					label: '<0.12 cmolc+/dm3',
					style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
				},{
					label: '0.12-0.24 cmolc+/dm3',
					style: {'background-color': '#ff9800','width': '7px','height': '10px'}
				},{
					label: '0.24-0.37 cmolc+/dm3',
					style: {'background-color': '#cddc39','width': '7px','height': '10px'}
				},{
					label: '0.37-0.62 cmolc+/dm3',
					style: {'background-color': '#4caf50','width': '7px','height': '10px'}
				},{
					label: '0.62-3.0 cmolc+/dm3',
					style: {'background-color': '#215a23','width': '7px','height': '10px'}
				},{
					label: '>3.0 cmolc+/dm3',
					style: {'background-color': '#20308a','width': '7px','height': '10px'}
			}]
		},
	}, {
		filename: "www/geotif/mg.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  0.4 						? '#9c1f16' :
					values[0] >= 0.4 && values[0] < 0.8 	? '#ff9800' :
					values[0] >= 0.8 && values[0] < 1.2 	? '#cddc39' :
					values[0] >= 1.2 && values[0] < 1.6 	? '#4caf50' :
					values[0] >= 1.6 && values[0] < 2 		? '#215a23' :
					values[0] >= 2 							? '#20308a' :'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Magnesio',
            elements: [{
					label: '<0.4 cmolc+/dm3',
                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
                },{
                    label: '0.4-0.8 cmolc+/dm3',
                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
                },{
                    label: '0.8-1.2 cmolc+/dm3',
                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
                },{
                    label: '1.2-1.6 cmolc+/dm3',
                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
                },{
                    label: '1.6-2.0 cmolc+/dm3',
                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
                },{
                    label: '>2.0 cmolc+/dm3',
                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
            }]
		},
	}, {
		filename: "www/geotif/mn.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  3 							? '#ff9800' :
					values[0] >= 3  && values[0] < 5 		? '#ffeb3b' :
					values[0] >= 5  && values[0] < 8 		? '#78ca18' :
					values[0] >= 8  && values[0] < 12 		? '#4caf50' :
					values[0] >= 12 && values[0] <= 80 		? '#215a23' :
					values[0] > 80 							? '#20308a' : 'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Manganeso',
			elements: [{
					label: '<3 mg/dm3',
					style: {'background-color': '#ff9800','width': '7px','height': '9px'}
				},{
					label: '3.0-5.0 mg/dm3',
					style: {'background-color': '#ffeb3b','width': '7px','height': '9px'}
				}, {
					label: '5.0-8.0 mg/dm3',
					style: {'background-color': '#cddc39','width': '7px','height': '9px'}
				},{
					label: '8.0-12.0 mg/dm3',
					style: {'background-color': '#4caf50','width': '7px','height': '9px'}
				},{
					label: '12.0-80 mg/dm3',
					style: {'background-color': '#215a23','width': '7px','height': '9px'}
				},{
					label: '>80 mg/dm3',
					style: {'background-color': '#20308a','width': '7px','height': '9px'}
			}]
		},
	}, {
		filename: "www/geotif/mos.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  10 						? '#9c1f16' :
					values[0] >= 10   && values[0] < 12.5 	? '#ff9800' :
					values[0] >= 12.5 && values[0] < 15 	? '#cddc39' :
					values[0] >= 15   && values[0] < 25 	? '#4caf50' :
					values[0] >= 25   && values[0] < 40 	? '#215a23' :
					values[0] >= 40 						? '#20308a' :'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Materio Orgánica',
            elements: [{
                   	label: '<10 g/dm3',
                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
                },{
                   	label: '10-12.5 g/dm3',
                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
                },{
                    label: '12.5-15 g/dm3',
                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
                },{
                    label: '15-25 g/dm3',
                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
                },{
                    label: '25-40 g/dm3',
                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
                },{
                    label: '>40 g/dm3',
                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
            }]
		},
	}, {
		filename: "www/geotif/p.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  10 						? '#9c1f16' :
					values[0] >= 10   && values[0] < 12.5 	? '#ff9800' :
					values[0] >= 12.5 && values[0] < 15 	? '#cddc39' :
					values[0] >= 15   && values[0] < 25 	? '#4caf50' :
					values[0] >= 25   && values[0] < 40 	? '#215a23' :
					values[0] >= 40 						? '#20308a' :'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Fósforo',
			elements: [{
				label: 'NO DATA',
				style: {'background-color': '#ff9800','width': '7px','height': '10px'}
			}]
		},

	}, {
		filename: "www/geotif/pcal.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  10 						? '#9c1f16' :
					values[0] >= 10   && values[0]   < 12.5 ? '#ff9800' :
					values[0] >= 12.5 && values[0]   < 15 	? '#cddc39' :
					values[0] >= 15   && values[0]   < 25 	? '#4caf50' :
					values[0] >= 25   && values[0]   < 40 	? '#215a23' :
					values[0] >= 40 ? '#20308a' :'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'PCAL',
			elements: [{
				label: 'NO DATA',
				style: {'background-color': '#ff9800','width': '7px','height': '10px'}
			}]
		},

	}, {
		filename: "www/geotif/ph.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <= 4 							? '#9c1f16' :
					values[0] >  4.1 && values[0] <= 4.5 	? '#ff9800' :
					values[0] >  4.5 && values[0] <= 5 		? '#cddc39' :
					values[0] >  5   && values[0] <= 5.5 	? '#4caf50' :
					values[0] >  5.5 && values[0] <= 6 		? '#215a23' :
					values[0] >  6 							? '#20308a' :'rgba(255,255,255,0)';
		 },
		 leyenda: {
			name: 'Ph',
            elements: [{
                   	label: '<4 H2O',
                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
                },{
                    label: '4.1-4.5 H2O',
                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
                },{
                    label: '4.5-5.0 H2O',
                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
                },{
                    label: '5-5.5 H2O',
                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
                },{
                    label: '5.5-6 H2O',
                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
                },{
                   	label: '>6.5 H2O',
                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
            }]
		},
	}, {
		filename: "www/geotif/s.tif",
		pixelValuesToColorFn: function(values){
			return values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  2.5 						? '#9c1f16' :
					values[0] >= 2.5 && values[0] < 5 		? '#ff9800' :
					values[0] >= 5   && values[0] < 7.5 	? '#cddc39' :
					values[0] >= 7.5 && values[0] < 10 		? '#4caf50' :
					values[0] >= 10  && values[0] < 15 		? '#215a23' :
					values[0] >= 15 						? '#20308a' :'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Azufre',
            elements: [{
                   	label: '<2.5 mg/dm3',
                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
                },{
                    label: '2.5-5 mg/dm3',
                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
                },{
                    label: '5-7.5 mg/dm3',
                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
                },{
                    label: '7.5-10 mg/dm3',
                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
                },{
                    label: '10-15 mg/dm3',
                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
                },{
                   	label: '>15 mg/dm3',
                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
            }]
		},
	}, {
		filename: "www/geotif/sil.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === 655358 					? null :
					values[0] <  0.3 						? '#ff9800' :
					values[0] >= 0.3 && values[0] <  0.7 	? '#cddc39' :
					values[0] >= 0.7 && values[0] < 1.2 	? '#4caf50' :
					values[0] >= 1.2 && values[0] <= 1.8 	? '#215a23' :
					values[0] >  1.8 						? '#20308a' : 'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Silicio',
			elements: [{
				label: 'NO DATA',
				style: {'background-color': '#ff9800','width': '7px','height': '10px'}
			}]
		},

	}, {
		filename: "www/geotif/zn.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  0.4 						? '#ff9800' :
					values[0] >= 0.4 && values[0] <  0.9 	? '#cddc39' :
					values[0] >= 0.9 && values[0] <  1.5 	? '#4caf50' :
					values[0] >= 1.5 && values[0] <= 2.2 	? '#215a23' :
					values[0] >  2.2 						? '#20308a' : 'rga(255,255,255,0)';
		},
		leyenda: {
			name: 'Zinc',
			elements: [{
					label: '<0.4 mg/dm3',
					style: {'background-color': '#ff9800','width': '7px','height': '10px'}
				},{
					label: '0.4-0.9 mg/dm3',
					style: {'background-color': '#cddc39','width': '7px','height': '10px'}
				},{
					label: '0.9-1.5 mg/dm3',
					style: {'background-color': '#4caf50','width': '7px','height': '10px'}
				},{
					label: '1.5-2.2 mg/dm3',
					style: {'background-color': '#215a23','width': '7px','height': '10px'}
				},{
					label: '>2.2 mg/dm3',
					style: {'background-color': '#20308a','width': '7px','height': '10px'}
			}]
		},
	}, {
		filename: "www/geotif/cal.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === 65535 					? null :
					values[0] <  1 							? 'rgb(11,11,57)' :
					values[0] >= 1 	  && values[0] <= 500 	? 'rgb(4,4,180)' :
					values[0] >  500  && values[0] <= 1000 	? 'rgb(11,97,11)' :
					values[0] >  1000 && values[0] <= 1500 	? 'rgb(8,138,8)' :
					values[0] >  1500 && values[0] <= 2000 	? 'rgb(4,180,4)' :
					values[0] >  2000 && values[0] <= 2500 	? 'rgb(255,191,0)' :
					values[0] >  2500 && values[0] <= 3000 	? 'rgb(223,116,1)' :
					values[0] >= 3000 						? 'rgb(138,8,8)' : 'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Calcario',
			elements: [{
                    label: '= 0 kg/ha',
                    style: {'background-color': 'rgb(11,11,57)','width': '7px','height': '10px'}
                },{
                    label: '1-500 kg/ha',
                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
                },{
					label: '501-1000 kg/ha',
					style: {'background-color': '#215a23','width': '7px','height': '10px'}
				},{
					label: '1001-1500 kg/ha',
					style: {'background-color': '#4caf50','width': '7px','height': '10px'}
				},{
					label: '1501-2000 kg/ha',
					style: {'background-color': '#cddc39','width': '7px','height': '10px'}
				},{
					label: '2001-2500 kg/ha',
					style: {'background-color': 'rgb(255,191,0)','width': '7px','height': '10px'}
				},{
					label: '2501-3000 kg/ha',
					style: {'background-color': '#ff9800','width': '7px','height': '10px'}
				},{
					label: '>3000 kg/ha',
					style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
			}]
		},
	}, {
		filename: "www/geotif/kcal.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === 65535 					? null :
					values[0] <  50 						? 'rgb(11,11,57)' :
					values[0] >= 50  && values[0] <= 100 	? 'rgb(4,4,180)' :
					values[0] >  100 && values[0] <= 150 	? 'rgb(11,97,11)' :
					values[0] >  150 && values[0] <= 200 	? 'rgb(8,138,8)' :
					values[0] >  200 && values[0] <= 250 	? 'rgb(4,180,4)' :
					values[0] >  250 && values[0] <= 300 	? 'rgb(255,191,0)' :
					values[0] >  300 && values[0] <= 350 	? 'rgb(223,116,1)' :
					values[0] >= 350 						? 'rgb(138,8,8)' : 'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'KCL',
            elements: [{
                   	label: '< 50 kg/ha',
                    style: {'background-color': 'rgb(11,11,57)','width': '7px','height': '10px'}
                },{
                    label: '51-100 kg/ha',
                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
                },{
                   	label: '101-150 kg/ha',
                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
                },{
                    label: '151-200 kg/ha',
                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
                },{
                   	label: '201-250 kg/ha',
                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
                },{
                    label: '251-300 kg/ha',
                    style: {'background-color': 'rgb(255,191,0)','width': '7px','height': '10px'}
                },{
                    label: '301-350 kg/ha',
                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
                },{
                    label: '350-400 kg/ha',
                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
			}]
		},
	}, {
		filename: "www/geotif/sat.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === -3.4028230607370965e+38 	? null :
					values[0] <  2.5 						? '#9c1f16' :
					values[0] >= 2.5 && values[0] < 5 		? '#ff9800' :
					values[0] >= 5 	 && values[0] < 7.5 	? '#cddc39' :
					values[0] >= 7.5 && values[0] < 10 		? '#4caf50' :
					values[0] >= 10  && values[0] < 15 		? '#215a23' :
					values[0] >= 15 						? '#20308a' :'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Silicato',
            elements: [{
                    label: '= 0 kg/ha',
                    style: {'background-color': 'rgb(11,11,57)','width': '7px','height': '10px'}
                },{
                    label: '1-250 kg/ha',
                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
                },{
                    label: '251-500 kg/ha',
                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
                },{
                    label: '501-750 kg/ha',
                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
                },{
                    label: '751-1000 kg/ha',
                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
                },{
                    label: '1001-1250 kg/ha',
                    style: {'background-color': 'rgb(255,191,0)','width': '7px','height': '10px'}
                },{
                    label: '1251-1500 kg/ha',
                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
                },{
                    label: '>1500 kg/ha',
                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
			}]
		},
		leyenda: {
			name: 'SPS',
			elements: [{
				label: 'NO DATA',
				style: {'background-color': '#ff9800','width': '7px','height': '10px'}
			}]
		},

	}, {
		filename: "www/geotif/sili.tif",
		pixelValuesToColorFn: function(values){
			return 	values[0] === 65535 ? null :
					values[0] <  1 							? 'rgb(11,11,57)' :
					values[0] >= 1    && values[0] <= 250 	? 'rgb(4,4,180)' :
					values[0] >  250  && values[0] <= 500 	? 'rgb(11,97,11)' :
					values[0] >  500  && values[0] <= 750 	? 'rgb(8,138,8)' :
					values[0] >  750  && values[0] <= 1000 	? 'rgb(4,180,4)' :
					values[0] >  1000 && values[0] <= 1250 	? 'rgb(255,191,0)' :
					values[0] >  1250 && values[0] <= 1500	? 'rgb(223,116,1)' :
					values[0] >  1500 						? 'rgb(138,8,8)' : 'rgba(255,255,255,0)';
		},
		leyenda: {
			name: 'Silicato',
            elements: [{
                    label: '= 0 kg/ha',
                    style: {'background-color': 'rgb(11,11,57)','width': '7px','height': '10px'}
                },{
                    label: '1-250 kg/ha',
                    style: {'background-color': '#20308a','width': '7px','height': '10px'}
                },{
                    label: '251-500 kg/ha',
                    style: {'background-color': '#215a23','width': '7px','height': '10px'}
                },{
                    label: '501-750 kg/ha',
                    style: {'background-color': '#4caf50','width': '7px','height': '10px'}
                },{
                    label: '751-1000 kg/ha',
                    style: {'background-color': '#cddc39','width': '7px','height': '10px'}
                },{
                    label: '1001-1250 kg/ha',
                    style: {'background-color': 'rgb(255,191,0)','width': '7px','height': '10px'}
                },{
                    label: '1251-1500 kg/ha',
                    style: {'background-color': '#ff9800','width': '7px','height': '10px'}
                },{
                    label: '>1500 kg/ha',
                    style: {'background-color': '#9c1f16','width': '7px','height': '10px'}
			}]
		},

	}
];


var map;
var config1, config2;
var controlLeyendaIzquierda, controlLeyendaDerecha;
var controlSideBySide;


// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);



// device APIs are available
function onDeviceReady() {
	console.log("onDeviceReady");
	console.log(cordova.file);
	cargarMapa();
}


function cargarMapa(){

	var streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		zIndex: 0
	});

	var satelite = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGpob29rZXIiLCJhIjoiUllwRXNldyJ9.-wSBKOCm_XUxGiM1yWLxPQ', {
		id: 'pjhooker.lad5pfap',
		zIndex: 0
	});


	map = L.map('map',{
			minZoom: 	0,
			maxZoom: 	15,
			zoom: 		12,
			layers: 	[streets]
	}).setView([-24.898, -54.547]);

	//CONTROL LAYER
	var baseMaps = {
		Streets: streets,
		Satelite: satelite
	};

	L.control.layers(baseMaps,null,{
		collapsed: false,
		autoZIndex: false
	}).addTo(map);
}


$("#compararBoton").click(function(){
	if (controlSideBySide){
		map.removeControl(controlSideBySide);
		controlSideBySide = null;

		if (config2){
			map.removeLayer(config2.capa);
			config2 = null;
		}

		if (controlLeyendaDerecha){
			map.removeControl(controlLeyendaDerecha);
			controlLeyendaDerecha = null;
		}

	} else {
		var capa1, capa2;
		if (config1){
			capa1 = config1.capa;
		}
		if (config2){
			capa2 = config2.capa;
		}
		controlSideBySide = L.control.sideBySide(capa1, capa2).addTo(map);
	}
});





$("#capasOpciones").change(function(){
	console.log("cambiarCapa")

	var optionValue = $(this).val();
	var config = configGeoraster[parseInt(optionValue)];


	if (!config.capa){
		window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + config.filename, ficheroEncontrado.bind(config), errorFichero);
	} else {
		anyadirCapa(config);
	}
});



function ficheroEncontrado(fileEntry) {
	var config = this;
	fileEntry.file(function(file) {
		console.log(config)
		var reader = new FileReader();
		reader.onloadend = function(e) {
			parseGeoraster(e.target.result).then(function(georaster){
				var capa = new GeoRasterLayer({
					attribution: "Planet",
					georaster: georaster,
					opacity: 0.9,
					pixelValuesToColorFn: configGeoraster[0].pixelValuesToColorFn,
					resolution: 350 // optional parameter for adjusting display resolution
				});
				map.fitBounds(capa.getBounds());
				
				config.capa = capa;
				anyadirCapa(config);
			}.bind(this))
		}.bind(this)
		reader.readAsArrayBuffer(file);
	}.bind(this));
}


function errorFichero(error) {
	console.log(error);
}

function anyadirCapa(config){

	if ((config1 && config.filename === config1.filename) || (config2 && config.filename === config2.filename)){
		alert("Esta capa ya se ha seleccionado");
		return;
	}
	config.capa.addTo(map)
	var posicionLeyenda;
	if (!controlSideBySide || !config1){
		if (config1 && config1.capa) {
			map.removeLayer(config1.capa);
		}
		config1 = jQuery.extend({}, config);
		posicionLeyenda = "bottomleft";
	} else {
		if (config2 && config2.capa) {
			map.removeLayer(config2.capa);
		}
		config2 = jQuery.extend({}, config);
		posicionLeyenda = "bottomright";
	}

	//Si se ha cargado, indicamos las capas de la izquierda y derecha del control
	if (controlSideBySide){
		var capa1, capa2;
		if (config1){
			capa1 = config1.capa;
		}
		if (config2){
			capa2 = config2.capa;
		}
	 	controlSideBySide.setLeftLayers(capa1);
		controlSideBySide.setRightLayers(capa2);
	}


	mostrarLeyenda(config, posicionLeyenda);
}


function mostrarLeyenda(config, posicionLeyenda){

	if (posicionLeyenda === "bottomleft"){
		if (controlLeyendaIzquierda){
			map.removeControl(controlLeyendaIzquierda);
		}
	} else {
		if (controlLeyendaDerecha){
			map.removeControl(controlLeyendaDerecha);
		}
	}
	
	var parametrosLeyenda = {		
		position: 			posicionLeyenda,
		collapseSimple: 	true,
		detectStretched:	true,
		collapsedOnInit: 	false,
		defaultOpacity: 	1,
		visibleIcon: 		"",
		hiddenIcon: 		"",
		legends:			[config.leyenda]
	};
	parametrosLeyenda.legends[0].layer =  config.capa;
	for(var i = 0; i < parametrosLeyenda.legends[0].elements.length; i++){
		parametrosLeyenda.legends[0].elements[i].html = "";
	}
	
	
	var control = L.control.htmllegend(parametrosLeyenda);
	map.addControl(control);

	if (posicionLeyenda === "bottomleft"){
		controlLeyendaIzquierda = control;
	} else {
		controlLeyendaDerecha = control;
	}
}


