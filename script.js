// Map
//  1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que sea el resultado de elevar cada número a si mismo.
const numbers = [4,5,6,7,8,9,10]
 function elevados(params) {
    let salida = [] 
    params.forEach(elementos => {
      salida.push(elementos*elementos)
    });
    return salida
 }
let solucionEjercicio1 = elevados(numbers)
console.log("La solución al ejercicio1 es: ",solucionEjercicio1)


//  2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
] */
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']



// 3.- Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
/* const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
]; */
// Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/

// Filter
//  4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//  5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo
/* ['Que rico Tempeh me voy a comer!',
'Que rica Tofu burguer me voy a comer!']
const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}]; */





//  6.- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.
/* 
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
 */
/*
  [
    'TV Samsung',
    'Viaje a Cancún'
  ]
*/


// Reduce
//  6.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array



//  7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

// const sentenceElements = [
//   'Me',
//   'llamo',
//   /* Tu nombre aqui! */,
//   'y',
//   'quiero',
//   'sentir',
//   'la',
//   'fuerza',
//   'con',
//   'javascript'
// ];

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'





//  8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.
/* const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];
// Resultado --> 60

 */