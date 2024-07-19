// • Teniendo un array de ovejas, cada oveja será un objeto con nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que
//   además su nombre contenga tanto las letras "n" y "a", sin importar el orden, las mayúsculas o espacios. 

//* ========= DATOS ========== *\\

let ovejas = [{
    nombre: 'Margarita',
    color: 'blanco'
}, {
    nombre: 'Azucena',
    color: 'rojo'
}, {
    nombre: 'Ferdinando',
    color: 'rojo'
}, {
    nombre: 'Leandro',
    color: 'blanco'
}, {
    nombre: 'Isabel',
    color: 'marrón'
}];

//* ========= DECLARACIÓN DE FUNCIONES ========== *\\

//* Bucles clásicos

// ----- for

const lista1 = array => {
    let lista = [];
    let busqueda = /[an]/gi;
    let isRojo = 'rojo';
    for (let i = 0; i < array.length; i++) {
        if (array[i].nombre.match(busqueda) && array[i].color == isRojo) {
            lista.push(array[i].nombre)
        }
    }
    return lista;
}

// ------ for...of

const lista2 = array => {
    let lista = [];
    let busqueda = /[an]/gi;
    let isRojo = 'rojo';
    for (let objeto of array) {
            if (objeto.nombre.match(busqueda) && objeto.color == isRojo) {
                lista.push(objeto.nombre)
            }
        }
    return lista;
}

//* .forEach

const lista3 = (array) => {
    let busqueda = /[an]/gi;
    let isRojo = 'rojo';
    let lista = [];
    array.forEach(objeto => {
        if (objeto.nombre.match(busqueda) && objeto.color == isRojo) {
            lista.push(objeto.nombre);
        }
    }) 
    return lista;
} 


//* .filter y map

const lista4 = (array) => {
    let busqueda = /[an]/gi;
    let isRojo = 'rojo';
    let lista = array.filter(objeto => objeto.nombre.match(busqueda) && objeto.color == isRojo).map(objeto => objeto.nombre);   //filter selecciona los objetos completos que cumplen la condicion; map selecciona el nombre, para que solo se muestre eso.
    return lista;
    }

//* ========= INVOCACIÓN DE FUNCIONES ========== *\\

console.log('Bucle for');
console.log(lista1(ovejas));
console.log('Bucles for...of');
console.log(lista2(ovejas));
console.log('.forEach');
console.log(lista3(ovejas));
console.log('.filter y .map');
console.log(lista4(ovejas));

