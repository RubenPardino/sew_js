"use strict";
class AdminArchivos {
    constructor() {
        if (window.File && window.FileReader && window.FileList && window.Blob) 
        {  
            //El navegador soporta el API File
            document.write("<p>Este navegador soporta el API File </p>");
        }
        else document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
    }

    leerGeoJson(files) {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(43.31690071949383, -5.551319884250986),
            zoom: 9,
          });
        var archivo = files[0];
        var lector = new FileReader();
        lector.onload = function(e) {
            var contenido = e.target.result;
            var doc = JSON.parse(contenido);
            
            for (var i = 0;i<doc.features.length;i++){
                var rutaCoordinates = [];
                for (var j = 0;j<doc.features[i].geometry.coordinates.length;j++){
                    for (var k = 0;k<doc.features[i].geometry.coordinates[j].length;k++){
                        var lat = doc.features[i].geometry.coordinates[j][k][1];
                        var lng = doc.features[i].geometry.coordinates[j][k][0];
                        rutaCoordinates.push({lat:lat,lng:lng});

                        var rutaPath = new google.maps.Polyline({
                            path: rutaCoordinates,
                            geodesic: true,
                            strokeColor: "#FF0000",
                            strokeOpacity: 1.0,
                            strokeWeight: 2,
                        });
                        rutaPath.setMap(map);
                    }
                }
            }
        }
        lector.readAsText(archivo);

    }
}
var admin = new AdminArchivos();