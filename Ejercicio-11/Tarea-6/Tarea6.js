"use strict";
class MapaDinamicoGoogle {
    constructor (){
        this.lat = 41.890243921509075;
        this.lng = 12.492022701728864;
    }

    cambiarCoordenadas() {
          try {
            var latitud = parseFloat(document.getElementById('Latitud').value,10);
            var longitud = parseFloat(document.getElementById('Longitud').value,10);
          }
          catch(err){
            document.getElementById('pantalla').value = "Error = " + err;
          }
          this.lat = latitud;
          this.lng = longitud;
          this.initMap();
    }

    initMap(){
        var coliseo = {lat: this.lat, lng: this.lng};
        var mapaColiseo = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:coliseo});
        var marcador = new google.maps.Marker({position:coliseo,map:mapaColiseo});
    }
    
}
var mapaDinamicoGoogle = new MapaDinamicoGoogle();
mapaDinamicoGoogle.initMap();

