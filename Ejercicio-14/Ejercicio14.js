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

    dropHandler(event) {
        
        event.preventDefault();
        var canvas = document.getElementById('canvas');
        var canvas1 = canvas.getContext('2d');
        var lector = new FileReader();
        for (var i = 0; i < event.dataTransfer.files.length; i++) {
            lector.onload = function(e) {
                var contenido = e.target.result;
                var pila = contenido.split("\n");
                for (var j = 0;j<pila.length;j++){
                    var a = pila[j];
                    if (a.includes("be")) {
                        canvas1.beginPath();
                        canvas1.strokeStyle = "rgba(255, 0, 0, 0.5)";
                        var inicio = pila[j+1];
                        canvas1.moveTo(inicio.split(",")[0],inicio.split(",")[1]);
                        i++;
                    }
                    else if (a.includes("clo")) {
                        canvas1.closePath();
                        canvas1.stroke();
                    }
                    else {
                        var punto = pila[j];
                        canvas1.lineTo(punto.split(",")[0],punto.split(",")[1]);
                    }
                }
            };
            lector.readAsText(event.dataTransfer.files[i]);
        }

        this.removeDragData(event)
    }

    dragOverHandler(event) {

        event.preventDefault();
    }

    removeDragData(ev) {
      
        if (ev.dataTransfer.items) {
          ev.dataTransfer.items.clear();
        } else {
          ev.dataTransfer.clearData();
        }
      }

    procesarArchivos() {
        
    }


}
var admin = new AdminArchivos();

