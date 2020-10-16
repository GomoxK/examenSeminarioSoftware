exports.calculoInteresCompuesto = (capital, tasaInteres, plazo) => {
    let capitalFinal = 0;
    
    let mes = 0;
    let interes = 0;
    
    let tasaInteresDecimal = tasaInteres / 100;


    const cuotas = [];
  
  
    //plazo = Math.round(plazo * 12);
  
    // Calcular la cuota
    capitalFinal =
      (capital * ((1 + tasaInteresDecimal) ** plazo));
  
      capitalFinal = capitalFinal.toFixed(2);
      console.log(capitalFinal);	
  
      while (mes != plazo) {


        // Obtener el interés por período
        interes = capital * tasaInteresDecimal;
        interes = interes.toFixed(2);
    
        // El capital que se amortiza en la cuota
        capitalAmortizar = capitalFinal - interes;
        capitalAmortizar = capitalAmortizar.toFixed(2);
    
        // Actualizar el mes (período)
        mes++;
       
    
      /*  // Actualizar la deuda
        capital += capitalAmortizar;
        capital = capital.toFixed(2);
    
        // TODO: Verificar los cálculos con valores decimales*/
    
        // Almacenar los valores en el arreglo*/
        cuotas.push({
            mes,
         capital,
         interes,
         capitalAmortizar,
          
        });
      }
    
      return cuotas;
    };