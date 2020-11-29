"use strict";
class ClaseFunciones {
    constructor(){
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

    mostrarDatos(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $("#mostrarDatos").after(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> Tipo de elemento : <" + $(this).get(0).tagName +">\t"));
        });
    }

}

var fun = new ClaseFunciones();


/*
    var sumaf1=0;
    var sumaf2=0;
    var sumaf3=0;
    //FALTA LO DE LA TABLA
    $("table tr td").each(function() {
        var textoCelda = $(this).text();
        if ($.trim(textoCelda) == '') {
            $(this).css('background-color', 'cyan');
        }
    });
    
*/
