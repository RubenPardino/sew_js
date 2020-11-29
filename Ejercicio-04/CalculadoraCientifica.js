var pi = Math.PI
var e = Math.E

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

    ms(){
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

class CalculadoraCientifica extends Calculadora {
    constructor (memoria){
        super(memoria);
    }
    digitos(digito){
        return(super.digitos(digito));
    }

    punto(){
        return(super.punto());
    }

    suma(){
        return(super.suma());
    }

    resta(){
        return(super.resta());
    }

    multiplicacion(){
        return(super.multiplicacion());
    }

    division(){
        return(super.division());
    }

    ms(){
        return(super.ms());
    }

    mMenos(){
        return(super.mMenos());
    }

    mMas(){
        return(super.mMas());
    }

    borrar(){
        return(super.borrar());
    }

    igual(){
        return(super.igual());
    }  

    mr(){
        super.memoria = 0;
    }

    pi(){
        document.getElementById('pantalla').value = document.getElementById('pantalla').value+pi;
    }

    e(){
        document.getElementById('pantalla').value = document.getElementById('pantalla').value+e;
    }

    seno(){
        var x = document.getElementById('pantalla').value;
        try {
            x = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;           
        }
        document.getElementById('pantalla').value = Math.sin(x);
    }

    coseno(){
        var x = document.getElementById('pantalla').value;
        try {
            x = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;           
        }
        document.getElementById('pantalla').value = Math.cos(x);
    }

    tangente(){
        var x = document.getElementById('pantalla').value;
        try {
            x = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;           
        }
        document.getElementById('pantalla').value = Math.tan(x);
    }

    arcoseno(){
        var x = document.getElementById('pantalla').value;
        try {
            x = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;           
        }
        document.getElementById('pantalla').value = Math.asin(x);
    }

    arcocoseno(){
        var x = document.getElementById('pantalla').value;
        try {
            x = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;           
        }
        document.getElementById('pantalla').value = Math.acos(x);
    }

    arcotangente(){
        var x = document.getElementById('pantalla').value;
        try {
            x = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;           
        }
        document.getElementById('pantalla').value = Math.atan(x);
    }

    logaritmo(){
        var x = document.getElementById('pantalla').value;
        try {
            x = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;           
        }
        document.getElementById('pantalla').value = Math.log(x);
    }

    exp(){
        var x = document.getElementById('pantalla').value;
        try {
            x = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;           
        }
        document.getElementById('pantalla').value = Math.exp(x);
    }

    pow2(){
        var x = document.getElementById('pantalla').value;
        try {
            x = eval(x);
        }
        catch(err){
            document.getElementById('pantalla').value = "Error = " + err;           
        }
        document.getElementById('pantalla').value = Math.pow(x,2);
    }
}

var calculadora = new CalculadoraCientifica(0);