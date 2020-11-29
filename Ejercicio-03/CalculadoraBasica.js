"use strict";
class Calculadora {
    constructor (memoria){
        this.memoria=memoria;
    }
    digitos(digito){
        document.getElementById('pantalla').value = document.getElementById('pantalla').value+digito;
    }

    punto(){
        document.getElementById('pantalla').value = document.getElementById('pantalla').value+".";
    }

    suma(){
        document.getElementById('pantalla').value = document.getElementById('pantalla').value+"+";
    }

    resta(){
        document.getElementById('pantalla').value = document.getElementById('pantalla').value+"-";
    }

    multiplicacion(){
        document.getElementById('pantalla').value = document.getElementById('pantalla').value+"*";
    }

    division(){
        document.getElementById('pantalla').value = document.getElementById('pantalla').value+"/";
    }

    mrc(){
        var x;
        x = document.getElementById('pantalla').value;
        try {
            this.memoria = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;
        }
    }

    mMenos(){
        var x;
        x = document.getElementById('pantalla').value+"-"+this.memoria;
        try{
            document.getElementById('pantalla').value = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;
        }
    }

    mMas(){
        var x;
        x = document.getElementById('pantalla').value+"+"+this.memoria;
        try{
            document.getElementById('pantalla').value = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;
        }
    }

    borrar(){
        document.getElementById('pantalla').value = "";
    }

    igual(){
        var x;
        x = document.getElementById('pantalla').value;
        try{
            document.getElementById('pantalla').value = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;
        }
    }
}

var calculadora = new Calculadora(0);