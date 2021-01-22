"use strict";
class CalculadoraConPila {
    constructor (){
        this.pila = new Array();
    }
    digitos(digito){
        document.getElementById('pantalla').value = document.getElementById('pantalla').value+digito;
    }

    punto(){
        document.getElementById('pantalla').value = document.getElementById('pantalla').value+".";
    }

    suma(){
        var x = parseFloat(this.borrar(),10);
        var y = parseFloat(this.borrar(),10);
        if (isNaN(x)) {
            document.getElementById('pantalla').value = "No se puede sumar sin tener nada apilado";
        }
        else if (isNaN(y)) {
            this.apilar(x);
            document.getElementById('pantalla').value = "No se puede sumar solo un elemento";
        }
        else {
            var z = y + x;
            this.apilar(z);
        }
    }

    resta(){
        var x = parseFloat(this.borrar(),10);
        var y = parseFloat(this.borrar(),10);
        var z = y - x;
        this.apilar(z);
    }

    multiplicacion(){
        var x = parseFloat(this.borrar(),10);
        var y = parseFloat(this.borrar(),10);
        var z = y * x;
        this.apilar(z);
    }

    division(){
        var x = parseFloat(this.borrar(),10);
        var y = parseFloat(this.borrar(),10);
        var z = y / x;
        this.apilar(z);
    }

    seno(){
        var x = this.borrar();
        this.apilar(Math.sin(x));
    }

    coseno(){
        var x = this.borrar();
        this.apilar(Math.cos(x));
    }

    tangente(){
        var x = this.borrar();
        this.apilar(Math.tan(x));
    }

    borrar(){
        var a = this.pila.pop();
        document.getElementById('pantalla').value=""; 
        document.getElementById('pila').innerHTML=this.mostrarPila(); 
        return(a);
    }

    enter(){
        if (document.getElementById('pantalla').value!="" && document.getElementById('pantalla').value!="." && !isNaN(document.getElementById('pantalla').value))
            this.apilar(document.getElementById('pantalla').value);
    }

    apilar(valor) {
        this.pila.push(valor);
        document.getElementById('pantalla').value="";
        document.getElementById('pila').innerHTML = this.mostrarPila()  
    }

    mostrarPila() {
        var stringPila = "<ul>\n";
        for (var i in this.pila) 
            stringPila += "<li>" + this.pila[i] + "</li>\n";
        stringPila += "</ul>";

        return stringPila;
    }
}

var calculadora = new CalculadoraConPila();