var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Folkeskoler_1 = new ol.format.GeoJSON();
var features_Folkeskoler_1 = format_Folkeskoler_1.readFeatures(json_Folkeskoler_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_1.addFeatures(features_Folkeskoler_1);
var lyr_Folkeskoler_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_1, 
                style: style_Folkeskoler_1,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_1.png" /> Folkeskoler'
            });
var format_Lokalplaner_2 = new ol.format.GeoJSON();
var features_Lokalplaner_2 = format_Lokalplaner_2.readFeatures(json_Lokalplaner_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplaner_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplaner_2.addFeatures(features_Lokalplaner_2);
var lyr_Lokalplaner_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplaner_2, 
                style: style_Lokalplaner_2,
                popuplayertitle: 'Lokalplaner',
                interactive: true,
    title: 'Lokalplaner<br />\
    <img src="styles/legend/Lokalplaner_2_0.png" /> 1024399<br />\
    <img src="styles/legend/Lokalplaner_2_1.png" /> 1053515<br />\
    <img src="styles/legend/Lokalplaner_2_2.png" /> 1061002<br />\
    <img src="styles/legend/Lokalplaner_2_3.png" /> 1061022<br />\
    <img src="styles/legend/Lokalplaner_2_4.png" /> 1061038<br />\
    <img src="styles/legend/Lokalplaner_2_5.png" /> 1061103<br />\
    <img src="styles/legend/Lokalplaner_2_6.png" /> 1061140<br />\
    <img src="styles/legend/Lokalplaner_2_7.png" /> 1061206<br />\
    <img src="styles/legend/Lokalplaner_2_8.png" /> 1061209<br />\
    <img src="styles/legend/Lokalplaner_2_9.png" /> 1061210<br />\
    <img src="styles/legend/Lokalplaner_2_10.png" /> 1061715<br />\
    <img src="styles/legend/Lokalplaner_2_11.png" /> 1061734<br />\
    <img src="styles/legend/Lokalplaner_2_12.png" /> 1061739<br />\
    <img src="styles/legend/Lokalplaner_2_13.png" /> 1061746<br />\
    <img src="styles/legend/Lokalplaner_2_14.png" /> 1061756<br />\
    <img src="styles/legend/Lokalplaner_2_15.png" /> 1061757<br />\
    <img src="styles/legend/Lokalplaner_2_16.png" /> 1061824<br />\
    <img src="styles/legend/Lokalplaner_2_17.png" /> 1061829<br />\
    <img src="styles/legend/Lokalplaner_2_18.png" /> 1062026<br />\
    <img src="styles/legend/Lokalplaner_2_19.png" /> 1062121<br />\
    <img src="styles/legend/Lokalplaner_2_20.png" /> 1070479<br />\
    <img src="styles/legend/Lokalplaner_2_21.png" /> 1071381<br />\
    <img src="styles/legend/Lokalplaner_2_22.png" /> 1074662<br />\
    <img src="styles/legend/Lokalplaner_2_23.png" /> 1074664<br />\
    <img src="styles/legend/Lokalplaner_2_24.png" /> 1074675<br />\
    <img src="styles/legend/Lokalplaner_2_25.png" /> 1075214<br />\
    <img src="styles/legend/Lokalplaner_2_26.png" /> 1075219<br />\
    <img src="styles/legend/Lokalplaner_2_27.png" /> 1075387<br />\
    <img src="styles/legend/Lokalplaner_2_28.png" /> 1075393<br />\
    <img src="styles/legend/Lokalplaner_2_29.png" /> 1075552<br />\
    <img src="styles/legend/Lokalplaner_2_30.png" /> 1075553<br />\
    <img src="styles/legend/Lokalplaner_2_31.png" /> 1075577<br />\
    <img src="styles/legend/Lokalplaner_2_32.png" /> 1075593<br />\
    <img src="styles/legend/Lokalplaner_2_33.png" /> 1075598<br />\
    <img src="styles/legend/Lokalplaner_2_34.png" /> 1075609<br />\
    <img src="styles/legend/Lokalplaner_2_35.png" /> 1075669<br />\
    <img src="styles/legend/Lokalplaner_2_36.png" /> 1075682<br />\
    <img src="styles/legend/Lokalplaner_2_37.png" /> 1075695<br />\
    <img src="styles/legend/Lokalplaner_2_38.png" /> 1075708<br />\
    <img src="styles/legend/Lokalplaner_2_39.png" /> 1075710<br />\
    <img src="styles/legend/Lokalplaner_2_40.png" /> 1075718<br />\
    <img src="styles/legend/Lokalplaner_2_41.png" /> 1075751<br />\
    <img src="styles/legend/Lokalplaner_2_42.png" /> 1075752<br />\
    <img src="styles/legend/Lokalplaner_2_43.png" /> 1075779<br />\
    <img src="styles/legend/Lokalplaner_2_44.png" /> 1075795<br />\
    <img src="styles/legend/Lokalplaner_2_45.png" /> 1075800<br />\
    <img src="styles/legend/Lokalplaner_2_46.png" /> 1075801<br />\
    <img src="styles/legend/Lokalplaner_2_47.png" /> 1075815<br />\
    <img src="styles/legend/Lokalplaner_2_48.png" /> 1075877<br />\
    <img src="styles/legend/Lokalplaner_2_49.png" /> 1075893<br />\
    <img src="styles/legend/Lokalplaner_2_50.png" /> 1075897<br />\
    <img src="styles/legend/Lokalplaner_2_51.png" /> 1075900<br />\
    <img src="styles/legend/Lokalplaner_2_52.png" /> 1075902<br />\
    <img src="styles/legend/Lokalplaner_2_53.png" /> 1075905<br />\
    <img src="styles/legend/Lokalplaner_2_54.png" /> 1075907<br />\
    <img src="styles/legend/Lokalplaner_2_55.png" /> 1075908<br />\
    <img src="styles/legend/Lokalplaner_2_56.png" /> 1076004<br />\
    <img src="styles/legend/Lokalplaner_2_57.png" /> 1076010<br />\
    <img src="styles/legend/Lokalplaner_2_58.png" /> 1076019<br />\
    <img src="styles/legend/Lokalplaner_2_59.png" /> 1076041<br />\
    <img src="styles/legend/Lokalplaner_2_60.png" /> 1076064<br />\
    <img src="styles/legend/Lokalplaner_2_61.png" /> 1076086<br />\
    <img src="styles/legend/Lokalplaner_2_62.png" /> 1076094<br />\
    <img src="styles/legend/Lokalplaner_2_63.png" /> 1076107<br />\
    <img src="styles/legend/Lokalplaner_2_64.png" /> 1076114<br />\
    <img src="styles/legend/Lokalplaner_2_65.png" /> 1076115<br />\
    <img src="styles/legend/Lokalplaner_2_66.png" /> 1076126<br />\
    <img src="styles/legend/Lokalplaner_2_67.png" /> 1076129<br />\
    <img src="styles/legend/Lokalplaner_2_68.png" /> 1076287<br />\
    <img src="styles/legend/Lokalplaner_2_69.png" /> 1076379<br />\
    <img src="styles/legend/Lokalplaner_2_70.png" /> 1076865<br />\
    <img src="styles/legend/Lokalplaner_2_71.png" /> 1076868<br />\
    <img src="styles/legend/Lokalplaner_2_72.png" /> 1076874<br />\
    <img src="styles/legend/Lokalplaner_2_73.png" /> 1076892<br />\
    <img src="styles/legend/Lokalplaner_2_74.png" /> 1076902<br />\
    <img src="styles/legend/Lokalplaner_2_75.png" /> 1076939<br />\
    <img src="styles/legend/Lokalplaner_2_76.png" /> 1076961<br />\
    <img src="styles/legend/Lokalplaner_2_77.png" /> 1076968<br />\
    <img src="styles/legend/Lokalplaner_2_78.png" /> 1077070<br />\
    <img src="styles/legend/Lokalplaner_2_79.png" /> 1077082<br />\
    <img src="styles/legend/Lokalplaner_2_80.png" /> 1077085<br />\
    <img src="styles/legend/Lokalplaner_2_81.png" /> 1077086<br />\
    <img src="styles/legend/Lokalplaner_2_82.png" /> 1077558<br />\
    <img src="styles/legend/Lokalplaner_2_83.png" /> 1077565<br />\
    <img src="styles/legend/Lokalplaner_2_84.png" /> 1078074<br />\
    <img src="styles/legend/Lokalplaner_2_85.png" /> 1078075<br />\
    <img src="styles/legend/Lokalplaner_2_86.png" /> 1078077<br />\
    <img src="styles/legend/Lokalplaner_2_87.png" /> 1078184<br />\
    <img src="styles/legend/Lokalplaner_2_88.png" /> 1078227<br />\
    <img src="styles/legend/Lokalplaner_2_89.png" /> 1078229<br />\
    <img src="styles/legend/Lokalplaner_2_90.png" /> 1078231<br />\
    <img src="styles/legend/Lokalplaner_2_91.png" /> 1078248<br />\
    <img src="styles/legend/Lokalplaner_2_92.png" /> 1078275<br />\
    <img src="styles/legend/Lokalplaner_2_93.png" /> 1078279<br />\
    <img src="styles/legend/Lokalplaner_2_94.png" /> 1078289<br />\
    <img src="styles/legend/Lokalplaner_2_95.png" /> 1078346<br />\
    <img src="styles/legend/Lokalplaner_2_96.png" /> 1078464<br />\
    <img src="styles/legend/Lokalplaner_2_97.png" /> 1078465<br />\
    <img src="styles/legend/Lokalplaner_2_98.png" /> 1078468<br />\
    <img src="styles/legend/Lokalplaner_2_99.png" /> 1079122<br />\
    <img src="styles/legend/Lokalplaner_2_100.png" /> 1079123<br />\
    <img src="styles/legend/Lokalplaner_2_101.png" /> 1079666<br />\
    <img src="styles/legend/Lokalplaner_2_102.png" /> 1079671<br />\
    <img src="styles/legend/Lokalplaner_2_103.png" /> 1081381<br />\
    <img src="styles/legend/Lokalplaner_2_104.png" /> 1084485<br />\
    <img src="styles/legend/Lokalplaner_2_105.png" /> 1084491<br />\
    <img src="styles/legend/Lokalplaner_2_106.png" /> 1084492<br />\
    <img src="styles/legend/Lokalplaner_2_107.png" /> 1103890<br />\
    <img src="styles/legend/Lokalplaner_2_108.png" /> 1109560<br />\
    <img src="styles/legend/Lokalplaner_2_109.png" /> 1328884<br />\
    <img src="styles/legend/Lokalplaner_2_110.png" /> 1359145<br />\
    <img src="styles/legend/Lokalplaner_2_111.png" /> 1369547<br />\
    <img src="styles/legend/Lokalplaner_2_112.png" /> 1374739<br />\
    <img src="styles/legend/Lokalplaner_2_113.png" /> 1792902<br />\
    <img src="styles/legend/Lokalplaner_2_114.png" /> 1869505<br />\
    <img src="styles/legend/Lokalplaner_2_115.png" /> 2136388<br />\
    <img src="styles/legend/Lokalplaner_2_116.png" /> 2186492<br />\
    <img src="styles/legend/Lokalplaner_2_117.png" /> 2269185<br />\
    <img src="styles/legend/Lokalplaner_2_118.png" /> 2641209<br />\
    <img src="styles/legend/Lokalplaner_2_119.png" /> 2702963<br />\
    <img src="styles/legend/Lokalplaner_2_120.png" /> 2702964<br />\
    <img src="styles/legend/Lokalplaner_2_121.png" /> 2702965<br />\
    <img src="styles/legend/Lokalplaner_2_122.png" /> 2702968<br />\
    <img src="styles/legend/Lokalplaner_2_123.png" /> 2702969<br />\
    <img src="styles/legend/Lokalplaner_2_124.png" /> 2702993<br />\
    <img src="styles/legend/Lokalplaner_2_125.png" /> 2978253<br />\
    <img src="styles/legend/Lokalplaner_2_126.png" /> 3016098<br />\
    <img src="styles/legend/Lokalplaner_2_127.png" /> 3016099<br />\
    <img src="styles/legend/Lokalplaner_2_128.png" /> 3016105<br />\
    <img src="styles/legend/Lokalplaner_2_129.png" /> 3186913<br />\
    <img src="styles/legend/Lokalplaner_2_130.png" /> 3188617<br />\
    <img src="styles/legend/Lokalplaner_2_131.png" /> 3188619<br />\
    <img src="styles/legend/Lokalplaner_2_132.png" /> 3812280<br />\
    <img src="styles/legend/Lokalplaner_2_133.png" /> 3964626<br />\
    <img src="styles/legend/Lokalplaner_2_134.png" /> 3964627<br />\
    <img src="styles/legend/Lokalplaner_2_135.png" /> 3964812<br />\
    <img src="styles/legend/Lokalplaner_2_136.png" /> 9419556<br />\
    <img src="styles/legend/Lokalplaner_2_137.png" /> 9431987<br />\
    <img src="styles/legend/Lokalplaner_2_138.png" /> 9431989<br />\
    <img src="styles/legend/Lokalplaner_2_139.png" /> 9431990<br />\
    <img src="styles/legend/Lokalplaner_2_140.png" /> 9431991<br />\
    <img src="styles/legend/Lokalplaner_2_141.png" /> 9431992<br />\
    <img src="styles/legend/Lokalplaner_2_142.png" /> 9431993<br />\
    <img src="styles/legend/Lokalplaner_2_143.png" /> 9431994<br />\
    <img src="styles/legend/Lokalplaner_2_144.png" /> 9690454<br />\
    <img src="styles/legend/Lokalplaner_2_145.png" /> 9717080<br />\
    <img src="styles/legend/Lokalplaner_2_146.png" /> 9731022<br />\
    <img src="styles/legend/Lokalplaner_2_147.png" /> 9732835<br />\
    <img src="styles/legend/Lokalplaner_2_148.png" /> 9732862<br />\
    <img src="styles/legend/Lokalplaner_2_149.png" /> 9753254<br />\
    <img src="styles/legend/Lokalplaner_2_150.png" /> 10353005<br />\
    <img src="styles/legend/Lokalplaner_2_151.png" /> 10456675<br />\
    <img src="styles/legend/Lokalplaner_2_152.png" /> 10478656<br />\
    <img src="styles/legend/Lokalplaner_2_153.png" /> 10840028<br />\
    <img src="styles/legend/Lokalplaner_2_154.png" /> 10900534<br />\
    <img src="styles/legend/Lokalplaner_2_155.png" /> 10906517<br />\
    <img src="styles/legend/Lokalplaner_2_156.png" /> 10985743<br />\
    <img src="styles/legend/Lokalplaner_2_157.png" /> 11021467<br />\
    <img src="styles/legend/Lokalplaner_2_158.png" /> 11126774<br />\
    <img src="styles/legend/Lokalplaner_2_159.png" /> 11159816<br />\
    <img src="styles/legend/Lokalplaner_2_160.png" /> 11176926<br />\
    <img src="styles/legend/Lokalplaner_2_161.png" /> 11185105<br />\
    <img src="styles/legend/Lokalplaner_2_162.png" /> 11198619<br />\
    <img src="styles/legend/Lokalplaner_2_163.png" /> 11228193<br />\
    <img src="styles/legend/Lokalplaner_2_164.png" /> 11240317<br />\
    <img src="styles/legend/Lokalplaner_2_165.png" /> 11252419<br />\
    <img src="styles/legend/Lokalplaner_2_166.png" /> 11307736<br />\
    <img src="styles/legend/Lokalplaner_2_167.png" /> 11307768<br />\
    <img src="styles/legend/Lokalplaner_2_168.png" /> 11317442<br />\
    <img src="styles/legend/Lokalplaner_2_169.png" /> 11347122<br />\
    <img src="styles/legend/Lokalplaner_2_170.png" /> 11367622<br />\
    <img src="styles/legend/Lokalplaner_2_171.png" /> 11442254<br />\
    <img src="styles/legend/Lokalplaner_2_172.png" /> <br />' });
var format_Hospital_layerHospital_3 = new ol.format.GeoJSON();
var features_Hospital_layerHospital_3 = format_Hospital_layerHospital_3.readFeatures(json_Hospital_layerHospital_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_layerHospital_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_layerHospital_3.addFeatures(features_Hospital_layerHospital_3);
var lyr_Hospital_layerHospital_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_layerHospital_3, 
                style: style_Hospital_layerHospital_3,
                popuplayertitle: 'Hospital_layer — Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_layerHospital_3.png" /> Hospital_layer — Hospital'
            });
var format_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4 = new ol.format.GeoJSON();
var features_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4 = format_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.readFeatures(json_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.addFeatures(features_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4);
var lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4, 
                style: style_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4,
                popuplayertitle: 'fredede områder Lokalplaner strandbeskyttelse — frededeområder',
                interactive: false,
    title: 'fredede områder Lokalplaner strandbeskyttelse — frededeområder<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />' });
var format_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5 = new ol.format.GeoJSON();
var features_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5 = format_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5.readFeatures(json_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5.addFeatures(features_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5);
var lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5, 
                style: style_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5,
                popuplayertitle: 'fredede områder Lokalplaner strandbeskyttelse — strandbeskyttelse',
                interactive: true,
                title: '<img src="styles/legend/frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5.png" /> fredede områder Lokalplaner strandbeskyttelse — strandbeskyttelse'
            });
var format_Pizzaria_6 = new ol.format.GeoJSON();
var features_Pizzaria_6 = format_Pizzaria_6.readFeatures(json_Pizzaria_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pizzaria_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pizzaria_6.addFeatures(features_Pizzaria_6);
var lyr_Pizzaria_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pizzaria_6, 
                style: style_Pizzaria_6,
                popuplayertitle: 'Pizzaria',
                interactive: true,
                title: '<img src="styles/legend/Pizzaria_6.png" /> Pizzaria'
            });
var format_Togstationer_7 = new ol.format.GeoJSON();
var features_Togstationer_7 = format_Togstationer_7.readFeatures(json_Togstationer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_7.addFeatures(features_Togstationer_7);
var lyr_Togstationer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_7, 
                style: style_Togstationer_7,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_7.png" /> Togstationer'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Folkeskoler_1.setVisible(true);lyr_Lokalplaner_2.setVisible(true);lyr_Hospital_layerHospital_3.setVisible(true);lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.setVisible(true);lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5.setVisible(true);lyr_Pizzaria_6.setVisible(true);lyr_Togstationer_7.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Folkeskoler_1,lyr_Lokalplaner_2,lyr_Hospital_layerHospital_3,lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4,lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5,lyr_Pizzaria_6,lyr_Togstationer_7];
lyr_Folkeskoler_1.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Lokalplaner_2.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Hospital_layerHospital_3.set('fieldAliases', {'fid': 'fid', 'Hospital n': 'Hospital navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefon nu': 'Telefon nummer', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Pizzaria_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Folkeskoler_1.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Lokalplaner_2.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Hospital_layerHospital_3.set('fieldImages', {'fid': '', 'Hospital n': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefon nu': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5.set('fieldImages', {'fid': '', 'id': '', 'metadataproperty': '', 'description_href': '', 'description_title': '', 'description_nilreason': '', 'description': '', 'descriptionreference_href': '', 'descriptionreference_title': '', 'descriptionreference_nilreason': '', 'identifier_codespace': '', 'identifier': '', 'name': '', 'location_location': '', 'forretningshaendelse': '', 'senestesaglokalid': '', 'forretningsproces': '', 'id.namespace': '', 'id.lokalid': '', 'paataenkthandling': '', 'registreringfra': '', 'virkningfra': '', 'virkningsaktoer': '', 'temafladeid': '', 'tematype': '', 'jordstykkelokalid': '', });
lyr_Pizzaria_6.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Togstationer_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Folkeskoler_1.set('fieldLabels', {'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Lokalplaner_2.set('fieldLabels', {'planid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_Hospital_layerHospital_3.set('fieldLabels', {'fid': 'no label', 'Hospital n': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefon nu': 'no label', });
lyr_frededeomrderLokalplanerstrandbeskyttelsefrededeomrder_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_frededeomrderLokalplanerstrandbeskyttelsestrandbeskyttelse_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Pizzaria_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Togstationer_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Togstationer_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});