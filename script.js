// Map
//  1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que sea el resultado de elevar cada número a si mismo.
const numbers = [4,5,6,7,8,9,10]

function elevados(elementos){
  return elementos * elementos
}

const numbersElevados = numbers.map(elevados)
console.log("La solución al ejercicio 1 es: ",numbersElevados)


//  2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
] */
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']

const lista = foodList.map((elemento, indice) => {
  if (indice === 0) return `Como soy de Italia, amo comer ${elemento}`
  if (indice === 1) return `Como soy de Japon, amo comer ${elemento}`
  if (indice === 2) return `Como soy de Valencia, amo comer ${elemento}`
  return `Aunque no como carne, el ${elemento} es sabroso`
})

console.log("La solución al ejercicio 2 es: ",lista)

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
const staff = [
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
];

function parafrasear(elemento){
  return `${elemento.name} es ${elemento.role} y le gusta ${elemento.hobbies[0]} y ${elemento.hobbies[1]}`
}
const mensaje = staff.map(parafrasear)
console.log("La solución al ejercicio 3 es: ",mensaje)



// Filter
//  4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function soloPares (elemento){
//   if (elemento % 2 == 0){
//     return elemento
//   }
// }
// const numerosPares = numbers2.filter(soloPares)
const numerosPares = numbers2.filter((numeros)=>numeros%2==0)
console.log("La solución al ejercicio 4 es: ",numerosPares)


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
}]; 

let result5 = foodList2.filter(elemento => elemento.isVeggie)
// Al filtrar queda un array formado por dos objetos. Se hace un map para hacer un array de dos strings
result5 = result5.map(elemento => `Que rico ${elemento.name} me voy a comer!`)
console.log("La solución al ejercicio 5 es: ",result5)



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
const mayorDe300 = inventory
.filter(elemento => elemento.price >= 300)
.map(elemento => elemento.name)
console.log("El resultado al ejercicio 6 es: ",mayorDe300)

// Reduce
//  6.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
let numeros = [39, 2, 4, 25, 62]
let resultado6 = numeros.reduce((anterior, actual) => anterior*actual)
console.log("El resultado del ejercicio 6 con reduce es:",resultado6)


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

const sentenceElements = [
  'Me',
  'llamo',
  "Luis",
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];
const resultado7 = sentenceElements.reduce((anterior, actual) => anterior + " " + actual)
console.log("El resultado del ejercicio 7 es: ",resultado7)



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

const books = [
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
]
const resultado8 = books
.filter(elemento => elemento.category=="code")
.reduce((anterior,actual) => anterior.price+actual.price)
console.log("El resultado del ejercicio 8 es: ",resultado8)