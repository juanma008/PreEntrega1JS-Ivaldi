let zona = prompt ("En que barrio vivis??? palermo, villa pueyrredon, devoto o belgrano");

switch(zona) {
    
    case "palermo":
    console.log("el valor del envio es $500");
    break;
    
    case "villa pueyrredon":
    console.log("el envio es gratuito");
    break;

    case "devoto":
    console.log("el valor del envio es $300");
    break;

    case "belgrano":
    console.log("el valor del envio es $400");
    break;

    default:
        console.log("El barrio ingresado es incorrecto")
}

