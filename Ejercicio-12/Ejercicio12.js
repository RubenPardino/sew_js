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

    procesarArchivos() {
        var nBytes = 0,
        archivos = document.getElementById("subirArchivos").files,
        nArchivos = archivos.length;
        document.getElementById("contenidoFicheros").innerHTML = "";
        for (var i = 0; i < nArchivos; i++) {
            nBytes += archivos[i].size;
        }
        var nombresTiposTamaños="";
        for (var i = 0; i < nArchivos; i++) {
            nombresTiposTamaños += "<p>Archivo[" + i +"] = "+ archivos[i].name  + " Tamaño: " + archivos[i].size +" bytes " + " Tipo: " + archivos[i].type+"</p>" ;
            if (!archivos[i]) {
                return;
            }
            if (archivos[i].type=="text/xml" || archivos[i].type=="text/plain" || archivos[i].type=="application/json"){
                var lector = new FileReader();
                lector.onload = function(e) {
                    var contenido = e.target.result;
                    document.getElementById("contenidoFicheros").innerHTML += "\n\n"+contenido;
                };
                lector.readAsText(archivos[i]);
            }
        }

        document.getElementById("numero").innerHTML = nArchivos;
        document.getElementById("tamaño").innerHTML = nBytes + " bytes";
        document.getElementById("ficheros").innerHTML = nombresTiposTamaños;
    }
}
var admin = new AdminArchivos();

