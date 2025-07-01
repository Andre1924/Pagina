const formulario = document.getElementById("form1");
formulario.addEventListener("submit", promedio);
const respuesta = document.getElementById("resultado");
function promedio(event){
    const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
numero1=parseInt(num1.value) || 0;
numero2=parseInt(num2.value) || 0;
numero3=parseInt(num3.value) || 0;
numero4=parseInt(num4.value) || 0;
    event.preventDefault();
    const PromedioTotal = [numero1, numero2, numero3, numero4];
    let suma=0
    for(let x=0; x<PromedioTotal.length; x++){
        suma+=PromedioTotal[x];}
        const promedioo = suma/PromedioTotal.length;
            respuesta.innerHTML="Su promedio total es: "+promedioo;
        
    }
    
             
        

    
