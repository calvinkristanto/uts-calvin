var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Akita_1 = new ol.format.GeoJSON();
var features_Akita_1 = format_Akita_1.readFeatures(json_Akita_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Akita_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Akita_1.addFeatures(features_Akita_1);
var lyr_Akita_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Akita_1, 
                style: style_Akita_1,
                popuplayertitle: "Akita ",
                interactive: true,
                title: '<img src="styles/legend/Akita_1.png" /> Akita '
            });
var format_Iwate_2 = new ol.format.GeoJSON();
var features_Iwate_2 = format_Iwate_2.readFeatures(json_Iwate_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Iwate_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Iwate_2.addFeatures(features_Iwate_2);
var lyr_Iwate_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Iwate_2, 
                style: style_Iwate_2,
                popuplayertitle: "Iwate",
                interactive: true,
                title: '<img src="styles/legend/Iwate_2.png" /> Iwate'
            });
var format_aomorikenaomori__3 = new ol.format.GeoJSON();
var features_aomorikenaomori__3 = format_aomorikenaomori__3.readFeatures(json_aomorikenaomori__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aomorikenaomori__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aomorikenaomori__3.addFeatures(features_aomorikenaomori__3);
var lyr_aomorikenaomori__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aomorikenaomori__3, 
                style: style_aomorikenaomori__3,
                popuplayertitle: "aomori ken — aomori_",
                interactive: true,
                title: '<img src="styles/legend/aomorikenaomori__3.png" /> aomori ken — aomori_'
            });
var format_raill_jpn_4 = new ol.format.GeoJSON();
var features_raill_jpn_4 = format_raill_jpn_4.readFeatures(json_raill_jpn_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_raill_jpn_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_raill_jpn_4.addFeatures(features_raill_jpn_4);
var lyr_raill_jpn_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_raill_jpn_4, 
                style: style_raill_jpn_4,
                popuplayertitle: "raill_jpn",
                interactive: true,
                title: '<img src="styles/legend/raill_jpn_4.png" /> raill_jpn'
            });
var format_airp_jpn_5 = new ol.format.GeoJSON();
var features_airp_jpn_5 = format_airp_jpn_5.readFeatures(json_airp_jpn_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_airp_jpn_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_airp_jpn_5.addFeatures(features_airp_jpn_5);
var lyr_airp_jpn_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_airp_jpn_5, 
                style: style_airp_jpn_5,
                popuplayertitle: "airp_jpn",
                interactive: true,
                title: '<img src="styles/legend/airp_jpn_5.png" /> airp_jpn'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Akita_1.setVisible(true);lyr_Iwate_2.setVisible(true);lyr_aomorikenaomori__3.setVisible(true);lyr_raill_jpn_4.setVisible(true);lyr_airp_jpn_5.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Akita_1,lyr_Iwate_2,lyr_aomorikenaomori__3,lyr_raill_jpn_4,lyr_airp_jpn_5];
lyr_Akita_1.set('fieldAliases', {'id': 'id', 'Akita': 'Akita', });
lyr_Iwate_2.set('fieldAliases', {'id': 'id', 'Iwate': 'Iwate', });
lyr_aomorikenaomori__3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'aomori': 'aomori', });
lyr_raill_jpn_4.set('fieldAliases', {'f_code': 'f_code', 'exs': 'exs', 'fco': 'fco', 'loc': 'loc', 'soc': 'soc', });
lyr_airp_jpn_5.set('fieldAliases', {'f_code': 'f_code', 'iko': 'iko', 'ita': 'ita', 'nam': 'nam', 'use': 'use', 'zv3': 'zv3', 'soc': 'soc', });
lyr_Akita_1.set('fieldImages', {'id': 'TextEdit', 'Akita': 'TextEdit', });
lyr_Iwate_2.set('fieldImages', {'id': 'TextEdit', 'Iwate': 'TextEdit', });
lyr_aomorikenaomori__3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'aomori': 'TextEdit', });
lyr_raill_jpn_4.set('fieldImages', {'f_code': 'TextEdit', 'exs': 'Range', 'fco': 'Range', 'loc': 'Range', 'soc': 'TextEdit', });
lyr_airp_jpn_5.set('fieldImages', {'f_code': 'TextEdit', 'iko': 'TextEdit', 'ita': 'TextEdit', 'nam': 'TextEdit', 'use': 'Range', 'zv3': 'Range', 'soc': 'TextEdit', });
lyr_Akita_1.set('fieldLabels', {'id': 'no label', 'Akita': 'no label', });
lyr_Iwate_2.set('fieldLabels', {'id': 'no label', 'Iwate': 'no label', });
lyr_aomorikenaomori__3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'aomori': 'no label', });
lyr_raill_jpn_4.set('fieldLabels', {'f_code': 'no label', 'exs': 'no label', 'fco': 'no label', 'loc': 'no label', 'soc': 'no label', });
lyr_airp_jpn_5.set('fieldLabels', {'f_code': 'no label', 'iko': 'no label', 'ita': 'no label', 'nam': 'no label', 'use': 'no label', 'zv3': 'no label', 'soc': 'no label', });
lyr_airp_jpn_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});