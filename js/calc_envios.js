const zona = prompt ("En que barrio vivis??? palermo, villa pueyrredon, devoto o belgrano");

switch(zona) {
    
    case "palermo":
    alert("el valor del envio es $500");
    console.log("cobrar envio")
    break;
    
    case "villa pueyrredon":
    alert("el envio es $0");
    console.log("No cobrar envio")
    break;

    case "devoto":
    alert("el valor del envio es $300");
    console.log("cobrar envio")
    break;

    case "belgrano":
    alert("el valor del envio es $400");
    console.log("cobrar envio")
    break;

    default:
        alert("El barrio ingresado es incorrecto , vuelve a intentarlo")
}

