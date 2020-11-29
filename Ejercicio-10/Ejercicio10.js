"use strict";
class DatosFacebookAnual {
  constructor(){
    this.apikey = "ECwQiZvT9isDg3L5Mgke";
    this.year = "2014";
    this.startDate = this.year+"-01-01";
    this.endDate = this.year+"-12-31";
    this.url = "https://www.quandl.com/api/v3/datasets/WIKI/FB.json?column_index=4&start_date="+this.startDate+"&end_date="+this.endDate+"&collapse=monthly&transform=rdiff&api_key="+this.apikey;
    this.correcto = "¡Todo correcto! JSON recibido de <a href='https://docs.quandl.com/'>Quandl</a>"
  }

  cambiarAño(){
    try {
      var year = parseInt(document.getElementById('año').value);
    }
    catch(err){
      document.getElementById('pantalla').value = "Error = " + err;
    }
    if (year<2019 && year>2011){
      this.startDate = year+"-01-01";
      this.endDate = year+"-12-31";
      this.year = year;
    }
    else {
      document.getElementById('año').value = "Año incorrecto"
    }
  }

  cargarDatos(){
    $.ajax({
      dataType: "json",
      url: this.url,
      method: 'GET',
      success: function(datos){
              
              var stringDatos =  "<ul><li>Nombre: "+datos.dataset.name+"</li>";
              stringDatos     += "<li>Descripción: "+datos.dataset.description+"</li>";
              stringDatos     += "<li>Fecha de incio: "+datos.dataset.start_date+"</li>";
              stringDatos     += "<li>Fecha final: "+datos.dataset.end_date+"</li>";
              stringDatos     += "<li>Febrero: "+datos.dataset.data[10][0]+" - Porcentaje de cambios en el precio de cierre de mes: "+datos.dataset.data[10][1]+"%</li>";
              stringDatos     += "<li>Marzo: "+datos.dataset.data[9][0]+" - Porcentaje de cambios en el precio de cierre de mes: "+datos.dataset.data[9][1]+"%</li>";
              stringDatos     += "<li>Abril: "+datos.dataset.data[8][0]+" - Porcentaje de cambios en el precio de cierre de mes: "+datos.dataset.data[8][1]+"%</li>";
              stringDatos     += "<li>Mayo: "+datos.dataset.data[7][0]+" - Porcentaje de cambios en el precio de cierre de mes: "+datos.dataset.data[7][1]+"%</li>";
              stringDatos     += "<li>Junio: "+datos.dataset.data[6][0]+" - Porcentaje de cambios en el precio de cierre de mes: "+datos.dataset.data[6][1]+"%</li>";
              stringDatos     += "<li>Julio: "+datos.dataset.data[5][0]+" - Porcentaje de cambios en el precio de cierre de mes: "+datos.dataset.data[5][1]+"%</li>";
              stringDatos     += "<li>Agosto: "+datos.dataset.data[4][0]+" - Porcentaje de cambios en el precio de cierre de mes: "+datos.dataset.data[4][1]+"%</li>";
              stringDatos     += "<li>Septiembre: "+datos.dataset.data[3][0]+" - Porcentaje de cambios en el precio de cierre de mes: "+datos.dataset.data[3][1]+"%</li>";
              stringDatos     += "<li>Octubre: "+datos.dataset.data[2][0]+" - Porcentaje de cambios en el precio de cierre de mes: "+datos.dataset.data[2][1]+"%</li>";
              stringDatos     += "<li>Noviembre: "+datos.dataset.data[1][0]+" - Porcentaje de cambios en el precio de cierre de mes: "+datos.dataset.data[1][1]+"%</li>";
              stringDatos     += "<li>Diciembre: "+datos.dataset.data[0][0]+" - Porcentaje de cambios en el precio de cierre de mes: "+datos.dataset.data[0][1]+"%</li></ul>";
              
              $("p").html(stringDatos);
          },
      error:function(){
          $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='https://docs.quandl.com/'>Quandl</a>"); 
          $("p").remove();
          }
    });
  }

  crearElemento(tipoElemento, texto, insertarAntesDe){
    // Crea un nuevo elemento modificando el Ã¡rbol DOM
    // El elemnto creado es de 'tipoElemento' con un 'texto' 
    // El elemnto se coloca antes del elemnto 'insertarAntesDe'
    var elemento = document.createElement(tipoElemento); 
    elemento.innerHTML = texto;
    $(insertarAntesDe).before(elemento);
}

verJSON(){
    $("h2").remove();
    $("h3").remove();
    $("p").remove();

    this.url = "https://www.quandl.com/api/v3/datasets/WIKI/FB.json?column_index=4&start_date="+this.startDate+"&end_date="+this.endDate+"&collapse=monthly&transform=rdiff&api_key="+this.apikey;

    //Muestra el archivo JSON recibido
    this.crearElemento("h2","Datos en JSON desde <a href='https://docs.quandl.com/'>Quandl</a>","footer"); 
    this.crearElemento("h3","Datos","footer");
    this.crearElemento("p","","footer"); 
    this.cargarDatos();
    $("button").attr("disabled","disabled");
}

}

var fb = new DatosFacebookAnual(2014);
