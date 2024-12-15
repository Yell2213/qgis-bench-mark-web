var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "전기에너지사용량",
                interactive: true,
                title: '전기에너지사용량'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "가스에너지사용량",
                interactive: true,
                title: '가스에너지사용량'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "벤치마크점수(전기)",
                interactive: true,
                title: '벤치마크점수(전기)'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "벤치마크점수(가스)",
                interactive: true,
                title: '벤치마크점수(가스)'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: "지역별 가스에너지사용량",
                interactive: true,
    title: '지역별 가스에너지사용량<br />\
    <img src="styles/legend/_5_0.png" /> 0 - 35132<br />\
    <img src="styles/legend/_5_1.png" /> 35132 - 116854<br />\
    <img src="styles/legend/_5_2.png" /> 116854 - 220408<br />\
    <img src="styles/legend/_5_3.png" /> 220408 - 351752<br />\
    <img src="styles/legend/_5_4.png" /> 351752 - 517053<br />\
    <img src="styles/legend/_5_5.png" /> 517053 - 731440<br />\
    <img src="styles/legend/_5_6.png" /> 731440 - 1010493<br />\
    <img src="styles/legend/_5_7.png" /> 1010493 - 1419594<br />\
    <img src="styles/legend/_5_8.png" /> 1419594 - 2183462<br />\
    <img src="styles/legend/_5_9.png" /> 2183462 - 6087521<br />'
        });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: "지역별 전기에너지사용량",
                interactive: true,
    title: '지역별 전기에너지사용량<br />\
    <img src="styles/legend/_6_0.png" /> 0 - 47228<br />\
    <img src="styles/legend/_6_1.png" /> 47228 - 157735<br />\
    <img src="styles/legend/_6_2.png" /> 157735 - 299051<br />\
    <img src="styles/legend/_6_3.png" /> 299051 - 474733<br />\
    <img src="styles/legend/_6_4.png" /> 474733 - 691193<br />\
    <img src="styles/legend/_6_5.png" /> 691193 - 980490<br />\
    <img src="styles/legend/_6_6.png" /> 980490 - 1347218<br />\
    <img src="styles/legend/_6_7.png" /> 1347218 - 1849241<br />\
    <img src="styles/legend/_6_8.png" /> 1849241 - 3203316<br />\
    <img src="styles/legend/_6_9.png" /> 3203316 - 7252789<br />'
        });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: "지역별 벤치마크점수(가스)",
                interactive: true,
    title: '지역별 벤치마크점수(가스)<br />\
    <img src="styles/legend/_7_0.png" /> 0 - 10<br />\
    <img src="styles/legend/_7_1.png" /> 10 - 20<br />\
    <img src="styles/legend/_7_2.png" /> 20 - 30<br />\
    <img src="styles/legend/_7_3.png" /> 30 - 40<br />\
    <img src="styles/legend/_7_4.png" /> 40 - 50<br />\
    <img src="styles/legend/_7_5.png" /> 50 - 60<br />\
    <img src="styles/legend/_7_6.png" /> 60 - 70<br />\
    <img src="styles/legend/_7_7.png" /> 70 - 80<br />\
    <img src="styles/legend/_7_8.png" /> 80 - 90<br />\
    <img src="styles/legend/_7_9.png" /> 90 - 100<br />'
        });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: "지역별 벤치마크점수(전기)",
                interactive: true,
    title: '지역별 벤치마크점수(전기)<br />\
    <img src="styles/legend/_8_0.png" /> 0 - 10<br />\
    <img src="styles/legend/_8_1.png" /> 10 - 20<br />\
    <img src="styles/legend/_8_2.png" /> 20 - 30<br />\
    <img src="styles/legend/_8_3.png" /> 30 - 40<br />\
    <img src="styles/legend/_8_4.png" /> 40 - 50<br />\
    <img src="styles/legend/_8_5.png" /> 50 - 60<br />\
    <img src="styles/legend/_8_6.png" /> 60 - 70<br />\
    <img src="styles/legend/_8_7.png" /> 70 - 80<br />\
    <img src="styles/legend/_8_8.png" /> 80 - 90<br />\
    <img src="styles/legend/_8_9.png" /> 90 - 100<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8];
lyr__1.set('fieldAliases', {'UFID': 'UFID', 'BLD_NM': 'BLD_NM', 'DONG_NM': 'DONG_NM', 'PNU': 'PNU', '건축물p': '건축물p', 'benchmarkn': 'benchmarkn', 'x': 'x', 'y': 'y', '도로명주소': '도로명주소', '대지위치': '대지위치', 'pk번호': 'pk번호', '건물명': '건물명', '동명': '동명', '대지면적': '대지면적', '건폐율': '건폐율', '건축면적': '건축면적', '연면적': '연면적', '용적률산정': '용적률산정', '건물높이': '건물높이', '지상층수': '지상층수', '지하층수': '지하층수', '사용승인일': '사용승인일', '건축물연령': '건축물연령', '연령등급': '연령등급', '건물용도': '건물용도', 'AWS ID': 'AWS ID', '전기에너지': '전기에너지', '전기EUI': '전기EUI', '난방도일': '난방도일', '냉방도일': '냉방도일', 'Score': 'Score', });
lyr__2.set('fieldAliases', {'UFID': 'UFID', 'BLD_NM': 'BLD_NM', 'DONG_NM': 'DONG_NM', 'PNU': 'PNU', '건축물p': '건축물p', 'benchmarkn': 'benchmarkn', 'x': 'x', 'y': 'y', '도로명주소': '도로명주소', '대지위치': '대지위치', 'pk번호': 'pk번호', '건물명': '건물명', '동명': '동명', '대지면적': '대지면적', '건폐율': '건폐율', '건축면적': '건축면적', '연면적': '연면적', '용적률산정': '용적률산정', '건물높이': '건물높이', '지상층수': '지상층수', '지하층수': '지하층수', '사용승인일': '사용승인일', '건축물연령': '건축물연령', '연령등급': '연령등급', '건물용도': '건물용도', 'AWS ID': 'AWS ID', '가스에너지': '가스에너지', '가스 EUI': '가스 EUI', '난방도일': '난방도일', '냉방도일': '냉방도일', 'Score': 'Score', });
lyr__3.set('fieldAliases', {'UFID': 'UFID', 'BLD_NM': 'BLD_NM', 'DONG_NM': 'DONG_NM', 'PNU': 'PNU', '건축물p': '건축물p', 'benchmarkn': 'benchmarkn', 'x': 'x', 'y': 'y', '도로명주소': '도로명주소', '대지위치': '대지위치', 'pk번호': 'pk번호', '건물명': '건물명', '동명': '동명', '대지면적': '대지면적', '건폐율': '건폐율', '건축면적': '건축면적', '연면적': '연면적', '용적률산정': '용적률산정', '건물높이': '건물높이', '지상층수': '지상층수', '지하층수': '지하층수', '사용승인일': '사용승인일', '건축물연령': '건축물연령', '연령등급': '연령등급', '건물용도': '건물용도', 'AWS ID': 'AWS ID', '전기에너지': '전기에너지', '전기EUI': '전기EUI', '난방도일': '난방도일', '냉방도일': '냉방도일', 'Score': 'Score', });
lyr__4.set('fieldAliases', {'UFID': 'UFID', 'BLD_NM': 'BLD_NM', 'DONG_NM': 'DONG_NM', 'PNU': 'PNU', '건축물p': '건축물p', 'benchmarkn': 'benchmarkn', 'x': 'x', 'y': 'y', '도로명주소': '도로명주소', '대지위치': '대지위치', 'pk번호': 'pk번호', '건물명': '건물명', '동명': '동명', '대지면적': '대지면적', '건폐율': '건폐율', '건축면적': '건축면적', '연면적': '연면적', '용적률산정': '용적률산정', '건물높이': '건물높이', '지상층수': '지상층수', '지하층수': '지하층수', '사용승인일': '사용승인일', '건축물연령': '건축물연령', '연령등급': '연령등급', '건물용도': '건물용도', 'AWS ID': 'AWS ID', '가스에너지': '가스에너지', '가스 EUI': '가스 EUI', '난방도일': '난방도일', '냉방도일': '냉방도일', 'Score': 'Score', });
lyr__5.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Gas energy': 'Gas energy', 'Gas Score': 'Gas Score', 'Elec energ': 'Elec energ', 'Elec Score': 'Elec Score', });
lyr__6.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Gas energy': 'Gas energy', 'Gas Score': 'Gas Score', 'Elec energ': 'Elec energ', 'Elec Score': 'Elec Score', });
lyr__7.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Gas energy': 'Gas energy', 'Gas Score': 'Gas Score', 'Elec energ': 'Elec energ', 'Elec Score': 'Elec Score', });
lyr__8.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Gas energy': 'Gas energy', 'Gas Score': 'Gas Score', 'Elec energ': 'Elec energ', 'Elec Score': 'Elec Score', });
lyr__1.set('fieldImages', {'UFID': 'TextEdit', 'BLD_NM': 'TextEdit', 'DONG_NM': 'TextEdit', 'PNU': 'TextEdit', '건축물p': 'TextEdit', 'benchmarkn': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', '도로명주소': 'TextEdit', '대지위치': 'TextEdit', 'pk번호': 'TextEdit', '건물명': 'TextEdit', '동명': 'TextEdit', '대지면적': 'TextEdit', '건폐율': 'TextEdit', '건축면적': 'TextEdit', '연면적': 'TextEdit', '용적률산정': 'TextEdit', '건물높이': 'TextEdit', '지상층수': 'TextEdit', '지하층수': 'TextEdit', '사용승인일': 'TextEdit', '건축물연령': 'TextEdit', '연령등급': 'TextEdit', '건물용도': 'TextEdit', 'AWS ID': 'TextEdit', '전기에너지': 'TextEdit', '전기EUI': 'TextEdit', '난방도일': 'TextEdit', '냉방도일': 'TextEdit', 'Score': 'TextEdit', });
lyr__2.set('fieldImages', {'UFID': 'TextEdit', 'BLD_NM': 'TextEdit', 'DONG_NM': 'TextEdit', 'PNU': 'TextEdit', '건축물p': 'TextEdit', 'benchmarkn': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', '도로명주소': 'TextEdit', '대지위치': 'TextEdit', 'pk번호': 'TextEdit', '건물명': 'TextEdit', '동명': 'TextEdit', '대지면적': 'TextEdit', '건폐율': 'TextEdit', '건축면적': 'TextEdit', '연면적': 'TextEdit', '용적률산정': 'TextEdit', '건물높이': 'TextEdit', '지상층수': 'TextEdit', '지하층수': 'TextEdit', '사용승인일': 'TextEdit', '건축물연령': 'TextEdit', '연령등급': 'TextEdit', '건물용도': 'TextEdit', 'AWS ID': 'TextEdit', '가스에너지': 'TextEdit', '가스 EUI': 'TextEdit', '난방도일': 'TextEdit', '냉방도일': 'TextEdit', 'Score': 'TextEdit', });
lyr__3.set('fieldImages', {'UFID': 'TextEdit', 'BLD_NM': 'TextEdit', 'DONG_NM': 'TextEdit', 'PNU': 'TextEdit', '건축물p': 'TextEdit', 'benchmarkn': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', '도로명주소': 'TextEdit', '대지위치': 'TextEdit', 'pk번호': 'TextEdit', '건물명': 'TextEdit', '동명': 'TextEdit', '대지면적': 'TextEdit', '건폐율': 'TextEdit', '건축면적': 'TextEdit', '연면적': 'TextEdit', '용적률산정': 'TextEdit', '건물높이': 'TextEdit', '지상층수': 'TextEdit', '지하층수': 'TextEdit', '사용승인일': 'TextEdit', '건축물연령': 'TextEdit', '연령등급': 'TextEdit', '건물용도': 'TextEdit', 'AWS ID': 'TextEdit', '전기에너지': 'TextEdit', '전기EUI': 'TextEdit', '난방도일': 'TextEdit', '냉방도일': 'TextEdit', 'Score': 'TextEdit', });
lyr__4.set('fieldImages', {'UFID': 'TextEdit', 'BLD_NM': 'TextEdit', 'DONG_NM': 'TextEdit', 'PNU': 'TextEdit', '건축물p': 'TextEdit', 'benchmarkn': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', '도로명주소': 'TextEdit', '대지위치': 'TextEdit', 'pk번호': 'TextEdit', '건물명': 'TextEdit', '동명': 'TextEdit', '대지면적': 'TextEdit', '건폐율': 'TextEdit', '건축면적': 'TextEdit', '연면적': 'TextEdit', '용적률산정': 'TextEdit', '건물높이': 'TextEdit', '지상층수': 'TextEdit', '지하층수': 'TextEdit', '사용승인일': 'TextEdit', '건축물연령': 'TextEdit', '연령등급': 'TextEdit', '건물용도': 'TextEdit', 'AWS ID': 'TextEdit', '가스에너지': 'TextEdit', '가스 EUI': 'TextEdit', '난방도일': 'TextEdit', '냉방도일': 'TextEdit', 'Score': 'TextEdit', });
lyr__5.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Gas energy': 'TextEdit', 'Gas Score': 'TextEdit', 'Elec energ': 'TextEdit', 'Elec Score': 'TextEdit', });
lyr__6.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Gas energy': 'TextEdit', 'Gas Score': 'TextEdit', 'Elec energ': 'TextEdit', 'Elec Score': 'TextEdit', });
lyr__7.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Gas energy': 'TextEdit', 'Gas Score': 'TextEdit', 'Elec energ': 'TextEdit', 'Elec Score': 'TextEdit', });
lyr__8.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Gas energy': 'TextEdit', 'Gas Score': 'TextEdit', 'Elec energ': 'TextEdit', 'Elec Score': 'TextEdit', });
lyr__1.set('fieldLabels', {'UFID': 'no label', 'BLD_NM': 'no label', 'DONG_NM': 'no label', 'PNU': 'no label', '건축물p': 'no label', 'benchmarkn': 'no label', 'x': 'no label', 'y': 'no label', '도로명주소': 'inline label - visible with data', '대지위치': 'inline label - visible with data', 'pk번호': 'inline label - visible with data', '건물명': 'inline label - visible with data', '동명': 'inline label - visible with data', '대지면적': 'inline label - visible with data', '건폐율': 'inline label - visible with data', '건축면적': 'inline label - visible with data', '연면적': 'inline label - visible with data', '용적률산정': 'no label', '건물높이': 'inline label - visible with data', '지상층수': 'inline label - visible with data', '지하층수': 'inline label - visible with data', '사용승인일': 'inline label - visible with data', '건축물연령': 'no label', '연령등급': 'inline label - visible with data', '건물용도': 'inline label - visible with data', 'AWS ID': 'inline label - visible with data', '전기에너지': 'inline label - visible with data', '전기EUI': 'inline label - visible with data', '난방도일': 'no label', '냉방도일': 'no label', 'Score': 'inline label - visible with data', });
lyr__2.set('fieldLabels', {'UFID': 'no label', 'BLD_NM': 'no label', 'DONG_NM': 'no label', 'PNU': 'no label', '건축물p': 'no label', 'benchmarkn': 'no label', 'x': 'no label', 'y': 'no label', '도로명주소': 'inline label - visible with data', '대지위치': 'inline label - visible with data', 'pk번호': 'inline label - visible with data', '건물명': 'inline label - visible with data', '동명': 'inline label - visible with data', '대지면적': 'inline label - visible with data', '건폐율': 'inline label - visible with data', '건축면적': 'inline label - visible with data', '연면적': 'inline label - visible with data', '용적률산정': 'no label', '건물높이': 'inline label - visible with data', '지상층수': 'inline label - visible with data', '지하층수': 'inline label - visible with data', '사용승인일': 'inline label - visible with data', '건축물연령': 'no label', '연령등급': 'inline label - visible with data', '건물용도': 'inline label - visible with data', 'AWS ID': 'inline label - visible with data', '가스에너지': 'inline label - visible with data', '가스 EUI': 'inline label - visible with data', '난방도일': 'no label', '냉방도일': 'no label', 'Score': 'inline label - visible with data', });
lyr__3.set('fieldLabels', {'UFID': 'no label', 'BLD_NM': 'no label', 'DONG_NM': 'no label', 'PNU': 'no label', '건축물p': 'no label', 'benchmarkn': 'no label', 'x': 'no label', 'y': 'no label', '도로명주소': 'inline label - visible with data', '대지위치': 'inline label - visible with data', 'pk번호': 'inline label - visible with data', '건물명': 'inline label - visible with data', '동명': 'inline label - visible with data', '대지면적': 'inline label - visible with data', '건폐율': 'inline label - visible with data', '건축면적': 'inline label - visible with data', '연면적': 'inline label - visible with data', '용적률산정': 'no label', '건물높이': 'inline label - visible with data', '지상층수': 'inline label - visible with data', '지하층수': 'inline label - visible with data', '사용승인일': 'inline label - visible with data', '건축물연령': 'no label', '연령등급': 'inline label - visible with data', '건물용도': 'inline label - visible with data', 'AWS ID': 'inline label - visible with data', '전기에너지': 'inline label - visible with data', '전기EUI': 'inline label - visible with data', '난방도일': 'no label', '냉방도일': 'no label', 'Score': 'inline label - visible with data', });
lyr__4.set('fieldLabels', {'UFID': 'no label', 'BLD_NM': 'no label', 'DONG_NM': 'no label', 'PNU': 'no label', '건축물p': 'no label', 'benchmarkn': 'no label', 'x': 'no label', 'y': 'no label', '도로명주소': 'inline label - visible with data', '대지위치': 'inline label - visible with data', 'pk번호': 'inline label - visible with data', '건물명': 'inline label - visible with data', '동명': 'inline label - visible with data', '대지면적': 'inline label - visible with data', '건폐율': 'inline label - visible with data', '건축면적': 'inline label - visible with data', '연면적': 'inline label - visible with data', '용적률산정': 'no label', '건물높이': 'inline label - visible with data', '지상층수': 'inline label - visible with data', '지하층수': 'inline label - visible with data', '사용승인일': 'inline label - visible with data', '건축물연령': 'no label', '연령등급': 'inline label - visible with data', '건물용도': 'inline label - visible with data', 'AWS ID': 'inline label - visible with data', '가스에너지': 'inline label - visible with data', '가스 EUI': 'inline label - visible with data', '난방도일': 'no label', '냉방도일': 'no label', 'Score': 'inline label - visible with data', });
lyr__5.set('fieldLabels', {'id': 'inline label - visible with data', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'Gas energy': 'inline label - visible with data', 'Gas Score': 'inline label - visible with data', 'Elec energ': 'inline label - visible with data', 'Elec Score': 'inline label - visible with data', });
lyr__6.set('fieldLabels', {'id': 'inline label - visible with data', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'Gas energy': 'inline label - visible with data', 'Gas Score': 'inline label - visible with data', 'Elec energ': 'inline label - visible with data', 'Elec Score': 'inline label - visible with data', });
lyr__7.set('fieldLabels', {'id': 'inline label - visible with data', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'Gas energy': 'inline label - visible with data', 'Gas Score': 'inline label - visible with data', 'Elec energ': 'inline label - visible with data', 'Elec Score': 'inline label - visible with data', });
lyr__8.set('fieldLabels', {'id': 'inline label - visible with data', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'Gas energy': 'inline label - visible with data', 'Gas Score': 'inline label - visible with data', 'Elec energ': 'inline label - visible with data', 'Elec Score': 'inline label - visible with data', });
lyr__8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});