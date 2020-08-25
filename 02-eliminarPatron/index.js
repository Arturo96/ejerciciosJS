

const eliminarPatron = (cadena, patron) => {

    let exp = new RegExp(patron,'gi')

    cadena = cadena.replace(exp, "");

    console.log(cadena);

}

eliminarPatron("xyz1, xyz2, xyz3", "xyz")

// Math.floor(Math.random() * (601 - 500)) + 500