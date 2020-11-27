var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COMMUNESTRAVERSEES_1 = new ol.format.GeoJSON();
var features_COMMUNESTRAVERSEES_1 = format_COMMUNESTRAVERSEES_1.readFeatures(json_COMMUNESTRAVERSEES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNESTRAVERSEES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNESTRAVERSEES_1.addFeatures(features_COMMUNESTRAVERSEES_1);
var lyr_COMMUNESTRAVERSEES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNESTRAVERSEES_1, 
                style: style_COMMUNESTRAVERSEES_1,
                interactive: true,
                title: '<img src="styles/legend/COMMUNESTRAVERSEES_1.png" /> COMMUNES TRAVERSEES'
            });
var format_EPCITRAVERSEES_2 = new ol.format.GeoJSON();
var features_EPCITRAVERSEES_2 = format_EPCITRAVERSEES_2.readFeatures(json_EPCITRAVERSEES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCITRAVERSEES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCITRAVERSEES_2.addFeatures(features_EPCITRAVERSEES_2);
var lyr_EPCITRAVERSEES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCITRAVERSEES_2, 
                style: style_EPCITRAVERSEES_2,
                interactive: true,
    title: 'EPCI TRAVERSEES<br />\
    <img src="styles/legend/EPCITRAVERSEES_2_0.png" /> CA Châteauroux Métropole<br />\
    <img src="styles/legend/EPCITRAVERSEES_2_1.png" /> CC Berry Grand Sud<br />\
    <img src="styles/legend/EPCITRAVERSEES_2_2.png" /> CC Coeur de France<br />\
    <img src="styles/legend/EPCITRAVERSEES_2_3.png" /> CC de la Châtre et Sainte Sévère<br />\
    <img src="styles/legend/EPCITRAVERSEES_2_4.png" /> CC de la Marche Berrichonne<br />\
    <img src="styles/legend/EPCITRAVERSEES_2_5.png" /> CC du Val de Bouzanne<br />\
    <img src="styles/legend/EPCITRAVERSEES_2_6.png" /> CC Eguzon - Argenton - Vallée de la Creuse<br />\
    <img src="styles/legend/EPCITRAVERSEES_2_7.png" /> Département de la CREUSE<br />'
        });
var format_BOUCLEDECYCLOTOURISMEn13_3 = new ol.format.GeoJSON();
var features_BOUCLEDECYCLOTOURISMEn13_3 = format_BOUCLEDECYCLOTOURISMEn13_3.readFeatures(json_BOUCLEDECYCLOTOURISMEn13_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUCLEDECYCLOTOURISMEn13_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUCLEDECYCLOTOURISMEn13_3.addFeatures(features_BOUCLEDECYCLOTOURISMEn13_3);
var lyr_BOUCLEDECYCLOTOURISMEn13_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOUCLEDECYCLOTOURISMEn13_3, 
                style: style_BOUCLEDECYCLOTOURISMEn13_3,
                interactive: false,
                title: '<img src="styles/legend/BOUCLEDECYCLOTOURISMEn13_3.png" /> BOUCLE DE CYCLOTOURISME n°13'
            });
var format_INDREAVELO_4 = new ol.format.GeoJSON();
var features_INDREAVELO_4 = format_INDREAVELO_4.readFeatures(json_INDREAVELO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDREAVELO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDREAVELO_4.addFeatures(features_INDREAVELO_4);
var lyr_INDREAVELO_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDREAVELO_4, 
                style: style_INDREAVELO_4,
                interactive: true,
    title: 'INDRE A VELO<br />\
    <img src="styles/legend/INDREAVELO_4_0.png" /> ANTENNE<br />\
    <img src="styles/legend/INDREAVELO_4_1.png" /> INDRE A VELO<br />'
        });
var format_STJACQUESAVELO_5 = new ol.format.GeoJSON();
var features_STJACQUESAVELO_5 = format_STJACQUESAVELO_5.readFeatures(json_STJACQUESAVELO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STJACQUESAVELO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STJACQUESAVELO_5.addFeatures(features_STJACQUESAVELO_5);
var lyr_STJACQUESAVELO_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STJACQUESAVELO_5, 
                style: style_STJACQUESAVELO_5,
                interactive: true,
    title: 'ST JACQUES A VELO<br />\
    <img src="styles/legend/STJACQUESAVELO_5_0.png" /> ANTENNE<br />\
    <img src="styles/legend/STJACQUESAVELO_5_1.png" /> ST JACQUES A VELO<br />'
        });
var format_STATIONNEMENTVELO_6 = new ol.format.GeoJSON();
var features_STATIONNEMENTVELO_6 = format_STATIONNEMENTVELO_6.readFeatures(json_STATIONNEMENTVELO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STATIONNEMENTVELO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STATIONNEMENTVELO_6.addFeatures(features_STATIONNEMENTVELO_6);cluster_STATIONNEMENTVELO_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_STATIONNEMENTVELO_6
});
var lyr_STATIONNEMENTVELO_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_STATIONNEMENTVELO_6, 
                style: style_STATIONNEMENTVELO_6,
                interactive: true,
                title: '<img src="styles/legend/STATIONNEMENTVELO_6.png" /> STATIONNEMENT VELO'
            });
var format_SIGNALISATION_7 = new ol.format.GeoJSON();
var features_SIGNALISATION_7 = format_SIGNALISATION_7.readFeatures(json_SIGNALISATION_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIGNALISATION_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIGNALISATION_7.addFeatures(features_SIGNALISATION_7);
var lyr_SIGNALISATION_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SIGNALISATION_7, 
                style: style_SIGNALISATION_7,
                interactive: true,
                title: '<img src="styles/legend/SIGNALISATION_7.png" /> SIGNALISATION'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_COMMUNESTRAVERSEES_1.setVisible(false);lyr_EPCITRAVERSEES_2.setVisible(false);lyr_BOUCLEDECYCLOTOURISMEn13_3.setVisible(false);lyr_INDREAVELO_4.setVisible(true);lyr_STJACQUESAVELO_5.setVisible(true);lyr_STATIONNEMENTVELO_6.setVisible(true);lyr_SIGNALISATION_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_COMMUNESTRAVERSEES_1,lyr_EPCITRAVERSEES_2,lyr_BOUCLEDECYCLOTOURISMEn13_3,lyr_INDREAVELO_4,lyr_STJACQUESAVELO_5,lyr_STATIONNEMENTVELO_6,lyr_SIGNALISATION_7];
lyr_COMMUNESTRAVERSEES_1.set('fieldAliases', {'NOM_COM': 'NOM_COM', 'NOM_DEPT': 'NOM_DEPT', 'PAYS': 'PAYS', 'EPCI': 'EPCI', });
lyr_EPCITRAVERSEES_2.set('fieldAliases', {'Nom_dept': 'Nom_dept', 'Dept': 'Dept', 'Raison_soc': 'Raison_soc', });
lyr_BOUCLEDECYCLOTOURISMEn13_3.set('fieldAliases', {'ITINERAIRE': 'ITINERAIRE', 'COMMUNES': 'COMMUNES', 'REMARQUES': 'REMARQUES', 'LONGUEUR': 'LONGUEUR', 'COMMENTAIR': 'COMMENTAIR', });
lyr_INDREAVELO_4.set('fieldAliases', {'ITINERAIRE': 'ITINERAIRE', 'COMMENTAIR': 'COMMENTAIR', 'Long': 'Long', });
lyr_STJACQUESAVELO_5.set('fieldAliases', {'ITINERAIRE': 'ITINERAIRE', 'LONGUEUR': 'LONGUEUR', 'COMMENTAIR': 'COMMENTAIR', });
lyr_STATIONNEMENTVELO_6.set('fieldAliases', {'IDENTIFIAN': 'IDENTIFIAN', 'ITINERAIRE': 'ITINERAIRE', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNAUTE': 'COMMUNAUTE', 'COMMUNE': 'COMMUNE', 'LOCALISATI': 'LOCALISATI', 'NB D\'ARCEA': 'NB D\'ARCEA', });
lyr_SIGNALISATION_7.set('fieldAliases', {'IDENT': 'IDENT', });
lyr_COMMUNESTRAVERSEES_1.set('fieldImages', {'NOM_COM': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'PAYS': 'TextEdit', 'EPCI': 'TextEdit', });
lyr_EPCITRAVERSEES_2.set('fieldImages', {'Nom_dept': 'TextEdit', 'Dept': 'TextEdit', 'Raison_soc': 'TextEdit', });
lyr_BOUCLEDECYCLOTOURISMEn13_3.set('fieldImages', {'ITINERAIRE': 'TextEdit', 'COMMUNES': 'TextEdit', 'REMARQUES': 'TextEdit', 'LONGUEUR': 'TextEdit', 'COMMENTAIR': 'TextEdit', });
lyr_INDREAVELO_4.set('fieldImages', {'ITINERAIRE': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'Long': 'TextEdit', });
lyr_STJACQUESAVELO_5.set('fieldImages', {'ITINERAIRE': 'TextEdit', 'LONGUEUR': 'TextEdit', 'COMMENTAIR': 'TextEdit', });
lyr_STATIONNEMENTVELO_6.set('fieldImages', {'IDENTIFIAN': 'TextEdit', 'ITINERAIRE': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNAUTE': 'TextEdit', 'COMMUNE': 'TextEdit', 'LOCALISATI': 'TextEdit', 'NB D\'ARCEA': 'TextEdit', });
lyr_SIGNALISATION_7.set('fieldImages', {'IDENT': 'TextEdit', });
lyr_COMMUNESTRAVERSEES_1.set('fieldLabels', {'NOM_COM': 'inline label', 'NOM_DEPT': 'inline label', 'PAYS': 'inline label', 'EPCI': 'inline label', });
lyr_EPCITRAVERSEES_2.set('fieldLabels', {'Nom_dept': 'inline label', 'Dept': 'inline label', 'Raison_soc': 'inline label', });
lyr_BOUCLEDECYCLOTOURISMEn13_3.set('fieldLabels', {'ITINERAIRE': 'no label', 'COMMUNES': 'no label', 'REMARQUES': 'no label', 'LONGUEUR': 'no label', 'COMMENTAIR': 'no label', });
lyr_INDREAVELO_4.set('fieldLabels', {'ITINERAIRE': 'inline label', 'COMMENTAIR': 'inline label', 'Long': 'inline label', });
lyr_STJACQUESAVELO_5.set('fieldLabels', {'ITINERAIRE': 'inline label', 'LONGUEUR': 'inline label', 'COMMENTAIR': 'inline label', });
lyr_STATIONNEMENTVELO_6.set('fieldLabels', {'IDENTIFIAN': 'inline label', 'ITINERAIRE': 'inline label', 'DEPARTEMEN': 'inline label', 'COMMUNAUTE': 'inline label', 'COMMUNE': 'inline label', 'LOCALISATI': 'inline label', 'NB D\'ARCEA': 'inline label', });
lyr_SIGNALISATION_7.set('fieldLabels', {'IDENT': 'inline label', });
lyr_SIGNALISATION_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});