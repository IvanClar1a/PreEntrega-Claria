

let productoPrecio = 29090;  //Precio del producto


alert("Con Visa y Mastercard hay 12 o 18 cuotas con las demas tarjetas 6 cuotas");

alert("Tarjetas aceptables para 3 o 6 cuotas Nativa, Cabal, NaranjaX, BBVA");

alert("Ingresar el nombre de las tarjetas en minusculo , por ejemplo (visa, mastercard, etc")
let metodoDePago = prompt("Ingrese metodo de pago deseado");


//Hacemos un condicional para las tarjetas en promoción
if(metodoDePago === "visa" || metodoDePago === "mastercard"){


    //Condional para saber cuantas cuotas eligio el usuario y su valor final a pagar en total y al mes
    let cuotas = Number(prompt("Cuantas cuotas quiere? (12 o 18 cuotas)"));

    if(cuotas === 12){


        //Llamamos a la funcion
        let resultadoFinalCuotas = calcularPrecioFinal(productoPrecio,cuotas);

        alert("El monto total a pagar en 12 meses es de : "+resultadoFinalCuotas+" "+"  pesos  ");

        for(let i = 1; i<cuotas; i++){
            
            let resultadoPagoCuotaMensual = calcularCuotasMensual(productoPrecio,cuotas);
            
            alert( "El monto a pagar mensual es de : " + cuotas+" X "+ i + "  =  "+resultadoPagoCuotaMensual+" pesos");

        }

    }else if(cuotas === 18){

        resultadoFinalCuotas = calcularPrecioFinal(productoPrecio,cuotas);

        alert("El monto total a pagar en 18 meses es de : "+resultadoFinalCuotas+" "+"  pesos  ");

        for(let i = 1; i<cuotas; i++){
            
            
            resultadoPagoCuotaMensual = calcularCuotasMensual(productoPrecio,cuotas);
            
            
            alert( "El monto a pagar mensual es de : " + cuotas+" X "+ i + "  =  "+resultadoPagoCuotaMensual+" pesos");

        }
        
    }
    


    
}else if(metodoDePago ==="nativa" || metodoDePago === "cabal" || metodoDePago === "naranjaX" || metodoDePago === "bbva"){


    let cuotas = Number(prompt("Cuantas cuotas quiere? (3 o 6 cuotas)"));

    if(cuotas === 3){

        resultadoFinalCuotas = calcularPrecioFinal(productoPrecio,cuotas);
        alert("El monto total a pagar en 3 meses es de : "+resultadoFinalCuotas+" "+"  pesos  ");

        for(let i = 1; i<cuotas; i++){
            
            
            resultadoPagoCuotaMensual = calcularCuotasMensual(productoPrecio,cuotas);
            
            
            alert( "El monto a pagar mensual es de : " + cuotas+" X "+ i + "  =  "+resultadoPagoCuotaMensual+" pesos");

        }
    }else if(cuotas === 6){

        resultadoFinalCuotas = calcularPrecioFinal(productoPrecio,cuotas);
        alert("El monto total a pagar en 6 meses es de : "+resultadoFinalCuotas+" "+"  pesos  ");

        for(let i = 1; i<cuotas; i++){
            
            
            resultadoPagoCuotaMensual = calcularCuotasMensual(productoPrecio,cuotas);
            
            
            alert( "El monto a pagar mensual es de : " + cuotas+" X "+ i + "  =  "+resultadoPagoCuotaMensual+" pesos");

        }
    }
    
    
    

}else if(metodoDePago != " "){
    alert("Tarjeta no disponible, ingrese otra por favor");
}


//funcion para calcular el valor vinal
function calcularPrecioFinal(productoPrecio, cuotas){

    if(cuotas === 12){

        let precioFinal = productoPrecio * (1+0.4);
        precioFinal = precioFinal.toFixed(2);
        
        return precioFinal;

    }else if(cuotas === 18){

        let precioFinal = productoPrecio * (1+0.6);
        precioFinal = precioFinal.toFixed(2)

        return precioFinal;
    }else if(cuotas === 3){
        
        let precioFinal = productoPrecio * (1+0.1);
        precioFinal = precioFinal.toFixed(2);
        
        return precioFinal;
    }else if(cuotas === 6){

        let precioFinal = productoPrecio * (1+0.3);
        precioFinal = precioFinal.toFixed(2);
        
        return precioFinal;
    }

}

//funcion para calcular el valor mensaul en cuotas
function calcularCuotasMensual(productoPrecio,cuotas){

    if(cuotas === 12){

        let pagoMensual = (productoPrecio * (1+0.4))/cuotas;
        pagoMensual = pagoMensual.toFixed(2);

        return pagoMensual;

    }else if(cuotas === 18){

        let pagoMensual = (productoPrecio * (1+0.6))/cuotas;
        pagoMensual = pagoMensual.toFixed(2);
        
        return pagoMensual;
    }else if(cuotas === 3)  {
        
        let pagoMensual = (productoPrecio * (1+0.1))/cuotas;
        pagoMensual = pagoMensual.toFixed(2);
        
        return pagoMensual;
    }else if(cuotas === 6){

        let pagoMensual = (productoPrecio * (1+0.3))/cuotas;
        pagoMensual = pagoMensual.toFixed(2);
        
        return pagoMensual;
    }


    
    

    
}
