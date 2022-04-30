console.log("****************SIMULADOR DE CAJERO PERSONALIZADO******************");
console.log("* Debe ingresar la cantidad de billetes a considerar en el cajero *");
console.log("* Debe ingresar el valor de cada billete de mayor a menor         *");
console.log("*******************************************************************");
let nroBilletes = 0;
let montoDinero = 0;
let billetes = [];
let billete;
let cantidad2 = 0;
//creamos función para calcular cantidad de billetes por cada monto
function CantidadBilletes(monto,billete) {
    let cantidad = parseInt(monto / billete);
    if (cantidad>0) {
        console.log(cantidad + " billetes de $" + billete);
    }    
    return cantidad;
}
//bucle para solicitar cantidad de billetes
do {
    //solicitamos entrada de cadena
    cadena = prompt("Ingresa cantidad de billetes:");
    //convertimos cadena a numero
    nroBilletes = parseInt(cadena);
//mientras no sea un numero o si es un numero combinado con letras rechazamos
} while (Number.isNaN(nroBilletes) || (cadena.length != nroBilletes.toString().length));

//bucle para solicitar el monto de cada billete
//Solicitamos y guardamos los billetes
for (let i = 0; i < nroBilletes; i++) {
    do {
        //solicitamos entrada de cadena
        cadena = prompt("Ingrese billete " + (i + 1));
        //convertimos cadena a numero
        billete = parseInt(cadena);
    //mientras no sea un numero o si es un numero combinado con letras rechazamos
    } while (Number.isNaN(billete) || (cadena.length != billete.toString().length));
    billetes[i] = billete;
}
do {
    //solicitamos entrada de cadena
    cadena = prompt("Ingresa monto:");
    //convertimos cadena a numero
    montoDinero = parseInt(cadena);
    //mientras no sea un numero o si es un numero combinado con letras rechazamos
} while (Number.isNaN(montoDinero) || (cadena.length != montoDinero.toString().length));
billetes.forEach(e => {
    cantidad2 = cantidad2 + CantidadBilletes(montoDinero,parseInt(e));
    montoDinero = montoDinero % (montoDinero,parseInt(e));
});
console.log("Cantidad mínimo de billetes: " + cantidad2);