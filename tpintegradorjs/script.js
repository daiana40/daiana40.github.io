//capturamos el evento click de boton


//uego en Javascript obtenemos el formulario como un arreglo asociativo, así tenemos acceso a cada uno de sus campos.
const btnResumen = document.getElementById('Resumen');

var cantidad = cantidad;

function resumen(categorias){
    //tomo el valor del input a seria cantidad
    const cantidad = cantidad//string > number
    //tomo el valor del input b letras estudiante, trainee o junior
    const precio = 200; //string > number
    // definir un valor c que es iguala doscientos que es el valor de al entrada

    let resultado;
       //invoco a la funcion sumar, pasando a y b como parametros
        switch(categorias) {
            case '1': 
                resultado = (precio*cantidad)-((precio*cantidad)*0.80);
                break;
            case '2': 
                resultado = (precio*cantidad)-((precio*cantidad)*0.50);
                break;
            case '3': 
                resultado = (precio*cantidad)-((precio*cantidad)*0.15);
                break;
                   } 
    

    resultado(resultado);    
};
div.innerHTML = resultado;





/*
btn.addEventListener('click',() => {
    //tomo el valor del input a
    const valorA = a.value; //string > number
    //tomo el valor del input b
    const valorB = b.value; //string > number

    if(esValido(valorA) && esValido(valorB)) {
        //invoco a la funcion sumar, pasando a y b como parametros
        const suma = division(valorA,valorB);        
        actualizarResultado(suma);
    }else {
        actualizarResultado('debe completar a y b');
    }
});
*/
/*function actualizarResultado(suma) {
    //capturo el div por su id
    const div = document.getElementById('Estudiante');
    div.className = 'Estudiante';
    //actualizo el contenido del div con la variable suma
    div.innerHTML = resultado;
}

function sumar(a,b) {
    return parseInt(a) + Number(b);
}
function restar(a,b) {
    return parseInt(a) - Number(b);
}
function multiplicar(a,b) {
    return parseInt(a) * Number(b);
}
function division(a,b) {
    return parseInt(a) / Number(b);
}

/*las funciones deben tener un solo return*/
/*function esValido(valor) {
    return valor !== '';
}*/

