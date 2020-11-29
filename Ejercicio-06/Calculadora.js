"use strict";
class CalculadoraConPila {
    constructor (){
        this.pila = new Array();
        this.pila2 = new Array();
        this.calculoEstadistico = false;
        this.pilaUsada = true;
    }
    digitos(digito){
        if (this.calculoEstadistico){
            document.getElementById('pantalla').value = "";
            document.getElementById('pantalla').value = document.getElementById('pantalla').value+digito;
            this.calculoEstadistico = false;
        }
        else{
            document.getElementById('pantalla').value = document.getElementById('pantalla').value+digito;
        }
    }

    punto(){
        if (this.calculoEstadistico){
            document.getElementById('pantalla').value ="";
            document.getElementById('pantalla').value = document.getElementById('pantalla').value+".";
            this.calculoEstadistico = false;
        }
        else{
            document.getElementById('pantalla').value = document.getElementById('pantalla').value+".";
        }
    }

    varianza(){
        if (this.pilaUsada){
            var media = parseFloat(this.media(),10);
            var N = this.pila.length;
            var arriba=0;
            var a=0;
            for (var i in this.pila){
                a=parseFloat(this.pila[i],10)-media;
                arriba+=a**2;
            }
            var varianza = arriba/N;
            document.getElementById('pantalla').value = varianza;
            this.calculoEstadistico = true;
            return varianza;
        }
        else {
            var media = parseFloat(this.media(),10);
            var N = this.pila2.length;
            var arriba=0;
            var a=0;
            for (var i in this.pila2){
                a=parseFloat(this.pila2[i],10)-media;
                arriba+=a**2;
            }
            var varianza = arriba/N;
            document.getElementById('pantalla').value = varianza;
            this.calculoEstadistico = true;
            return varianza; 
        }
    }

    varianzaMuestral(){
        if (this.pilaUsada){
            var media = parseFloat(this.media(),10);
            var N = this.pila.length-1;
            var arriba=0;
            var a=0;
            for (var i in this.pila){
                a=parseFloat(this.pila[i],10)-media;
                arriba+=a**2;
            }
            var varianza = arriba/N;
            document.getElementById('pantalla').value = varianza;
            this.calculoEstadistico = true;
        }
        else {
            var media = parseFloat(this.media(),10);
            var N = this.pila2.length-1;
            var arriba=0;
            var a=0;
            for (var i in this.pila2){
                a=parseFloat(this.pila2[i],10)-media;
                arriba+=a**2;
            }
            var varianza = arriba/N;
            document.getElementById('pantalla').value = varianza;
            this.calculoEstadistico = true;
        }
    }

    desviacion(){
        var desviacion = Math.sqrt(this.varianza());
        document.getElementById('pantalla').value = desviacion;
        this.calculoEstadistico = true;
        return desviacion;
    }

    covarianza(){
        if (this.pila.length==this.pila2.length){
            
            var media1 = this.media();
            this.cambiarPila();
            var media2 = this.media();
            this.cambiarPila();

            var N = this.pila.length;
            var arriba=0;
            var a=0;
            var b=0;

            for (var i in this.pila){
                a=parseFloat(this.pila[i],10)-media2;
                b=parseFloat(this.pila2[i],10)-media1;
                arriba+=(a*b);
            }

            var covarianza = arriba/N;
            document.getElementById('pantalla').value = covarianza;
            this.calculoEstadistico = true;

            return covarianza;
        }
    }

    coefcorre(){
        if (this.pila.length==this.pila2.length){
            var covarianza = this.covarianza();
            var desviacion1 = this.desviacion();
            this.cambiarPila();
            var desviacion2 = this.desviacion();
            this.cambiarPila();
            var coeficiente = covarianza/(desviacion1*desviacion2);
            this.calculoEstadistico = true;
        }
    }

    cambioSigno(){
        document.getElementById('pantalla').value = -document.getElementById('pantalla').value;
    }

    cambiarPila(){
        this.pilaUsada = !this.pilaUsada;
    }

    moda(){
        if (this.pilaUsada){
            var pilaModa = new Array();
            for (var i in this.pila){
                pilaModa[this.pila[i]]=0;
            }

            for (var i in this.pila){
                pilaModa[this.pila[i]]+=1;
            }

            var moda = 0;
            var indice = 0;

            for (var i in pilaModa){
                if (pilaModa[i]>indice){
                    indice=pilaModa[i];
                    moda=i;
                }
            }
            document.getElementById('pantalla').value=moda;
            this.calculoEstadistico = true;
        }
        else{
            var pilaModa = new Array();
            for (var i in this.pila2){
                pilaModa[this.pila2[i]]=0;
            }

            for (var i in this.pila2){
                pilaModa[this.pila2[i]]+=1;
            }

            var moda = 0;
            var indice = 0;

            for (var i in pilaModa){
                if (pilaModa[i]>indice){
                    indice=pilaModa[i];
                    moda=i;
                }
            }
            document.getElementById('pantalla').value=moda;
            this.calculoEstadistico = true;
        }
    }

    media(){
        if (this.pilaUsada){
            var media=0;
            for (var i in this.pila){
                media+=parseFloat(this.pila[i],10);
            }
            media=media/this.pila.length;
            document.getElementById('pantalla').value=media;
            this.calculoEstadistico = true;
            return media;
        }
        else {
            var media=0;
            for (var i in this.pila2){
                media+=parseFloat(this.pila2[i],10);
            }
            media=media/this.pila2.length;
            document.getElementById('pantalla').value=media;
            this.calculoEstadistico = true;
            return media;
        }
    }

    mediana() {
        if (this.pilaUsada){
            var indice = Math.floor(this.pila.length/2);
            document.getElementById('pantalla').value=this.pila[indice];
            this.calculoEstadistico = true;
        }
        else{
            var indice = Math.floor(this.pila2.length/2);
            document.getElementById('pantalla').value=this.pila2[indice];
            this.calculoEstadistico = true;
        }
    }

    borrar() {
        if (this.pilaUsada){
            var a = this.pila.pop();
            document.getElementById('pila').innerHTML=this.mostrarPila(); 
            return(a);
        }
        else {
            var a = this.pila2.pop();
            document.getElementById('pila2').innerHTML=this.mostrarPila2(); 
            return(a);
        }
    }

    enter(){
        if (document.getElementById('pantalla').value!="" && document.getElementById('pantalla').value!=".")
            this.apilar(document.getElementById('pantalla').value);      
    }

    apilar(valor) {
        if (this.pilaUsada){
            this.pila.push(valor);
            document.getElementById('pantalla').value="";
            document.getElementById('pila').innerHTML = this.mostrarPila()  
        }
        else {
            this.pila2.push(valor);
            document.getElementById('pantalla').value="";
            document.getElementById('pila2').innerHTML = this.mostrarPila2() 
        }
    }

    del(){
        document.getElementById('pantalla').value="";
    }

    mostrarPila() {
        var stringPila = "<ul>\n";
        for (var i in this.pila) 
            stringPila += "<li>" + this.pila[i] + "</li>\n";
        stringPila += "</ul>";

        return stringPila;
    }

    mostrarPila2() {
        var stringPila = "<ul>\n";
        for (var i in this.pila2) 
            stringPila += "<li>" + this.pila2[i] + "</li>\n";
        stringPila += "</ul>";

        return stringPila;
    }
}

var calculadora = new CalculadoraConPila();