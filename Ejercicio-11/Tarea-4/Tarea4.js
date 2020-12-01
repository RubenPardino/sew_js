"use strict";
class MapaDinamicoGoogle {
    constructor (){
    }

    initMap(){
        var coliseo = {lat: 41.890243921509075, lng: 12.492022701728864};
        var mapaColiseo = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:coliseo});
        var marcador = new google.maps.Marker({position:coliseo,map:mapaColiseo});
    }
    
}
var mapaDinamicoGoogle = new MapaDinamicoGoogle();
mapaDinamicoGoogle.initMap();

