"use strict";
class ClaseFunciones {
    constructor(){
      this.sumado = false;
    }

    ocultar(){
      $("ul").hide();
      $("h2").hide();
      $("h3").hide();
      $("p").hide();
      $("table").hide();
    }

    mostrar(){
      $("ul").show();
      $("h2").show();
      $("h3").show();
      $("p").show();
      $("table").show();
    }

    cambiar(){
      $("li").text("Esto es un texto de prueba");
      $("h2").text("Título aleatorio:");
      $("h3").text("Lista sin sentido:");
      $("p").text("Hola buenos días, estoy usando jquery para cambiar este texto");
    }

    cambiarST(){
      $("li").text("Equipo de StarTrek");
      $("h2").text("Historia:");
      $("h3").text("Equipo:");
      $("p").text("Star Trek: The Motion Picture (en España, Star Trek: la película) es una película estadounidense de ciencia ficción que forma parte del universo de Star Trek, creado por Gene Roddenberry. Fue la primera película de la franquicia basada en la serie de los 60 (Star Trek: La Serie Original), y se estrenó el 7 de diciembre de 1979. Su director fue el ganador del Óscar de la Academia Robert Wise; era su tercer film de ciencia ficción. Star Trek: The Motion Picture revitalizó la franquicia, que continuaría la historia con nueve secuelas y dos precuelas.");
    }

    addHistoria(){
      $("#Historia").after("<p>Más historia sobre Star Trek</p>");
    }

    addEquipo(){
      $("#lista").after("<li>Más equipo de StarTrek</li>");
    }

    eliminarEquipo(){
      $("#Equipo").remove();
    }

    sumarTabla() {
      if (!this.sumado){
        var tabla = document.getElementById('tabla');

        for (var i=1;i<tabla.children[1].children.length;i++){
          tabla.children[1].children[i].append(this.sumaFilas(tabla.children[1].children[i].children));
          
        }

        for (var i=1;i<tabla.children[1].children.length;i++){
          var suma = 0;
          var j=1
          var a = tabla.children[1].children[j];
          for (j;j<a.children.length;j++){
            var valor = tabla.children[1].children[j].children[i].innerText;
            suma+= parseFloat(valor);
          }
          tabla.children[1].children[3].children[i].append("\n"+suma);
        }
        this.sumado=true;
      }
    }

    sumaFilas(filas) {
      var suma=0;
      for (var i = 1;i<filas.length;i++){
        suma+= parseFloat(filas[i].innerText);
      }
      return suma;
    }

    mostrarDatos(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $("#mostrarDatos").after(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> Tipo de elemento : <" + $(this).get(0).tagName +">\t"));
        });
    }

}

var fun = new ClaseFunciones();
