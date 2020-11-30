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

    leerKml(files) {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(43.31690071949383, -5.551319884250986),
            zoom: 9,
          });
        var archivo = files[0];
        var lector = new FileReader();
        
        lector.onload = function(e) {
            var contenido = e.target.result;
            var parser = new DOMParser();
            var doc = parser.parseFromString(contenido,"text/xml");
            var pila = [];
            var pila2 = [];
            
            for (var i = 0; i< doc.children[0].children[0].children.length;i++){
                var str = doc.children[0].children[0].children[i].children[1].children[2].textContent;
                pila.push(str.split(" "));
            }

            for (var i = 0;i<pila.length;i++){
                var a = pila[i];
                pila2.push(a[0].split("\n"))
            }

            for (var j = 0; j<pila2.length;j++){
                var coor = pila2[j];
                var ruteCoordinates = [];
                for (var i = 1;i<coor.length-1;i++){
                    var lng = parseFloat(coor[i].split(",")[0]);
                    var lat = parseFloat(coor[i].split(",")[1]);
                    ruteCoordinates.push({lat:lat, lng:lng});
                    var rutePath = new google.maps.Polyline({
                        path: ruteCoordinates,
                        geodesic: true,
                        strokeColor: "#FF0000",
                        strokeOpacity: 1.0,
                        strokeWeight: 2,
                    });
                    rutePath.setMap(map);
                }
            }
        }
        lector.readAsText(archivo);

    }
}
var admin = new AdminArchivos();