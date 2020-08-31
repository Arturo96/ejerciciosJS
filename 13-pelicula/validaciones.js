const esIdValido = id => {
    let exp = /[a-zA-Z]{2}\d{7}/

    const resultado = id.match(exp);
    
    if(!resultado) return false;

    if(resultado[0] != id) return false;

    return true;
}

const pelValida = pel => {
    if(pel.length >= 1 && pel.length <= 100) return true;
    return false;
}

const dirValido = dir => {
    if(dir.length >= 3 && dir.length <= 50) return true;
    return false;
}

const anioValido = anio => {
    let exp = /(1[5-9][0-9]{2})|(20([01][0-9]|20))/

    const resultado = anio.match(exp);

    if(!resultado) return false;

    if(resultado[0] != anio) return false;

    return true;
}

const validarPaises = paises => {
    
}