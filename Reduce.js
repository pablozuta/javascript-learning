const people = [
  { id: '1', name: 'Leigh', age: 35 },
  { id: '2', name: 'Jenny', age: 30 },
  { id: '3', name: 'Heather', age: 28 },
]

console.log(people)

// la funcion reduce siempre va a recibir un acumulator value y un valor por cada iteracion dentro del array que le pasemos

// count
resultCount = people.reduce((acc, person) => acc + 1, 0)
resultCountTwo = people.reduce((a, value) => {
  return a + 1
}, 0)
console.log(`numero de personas en el array es: ${resultCount}`)
console.log(`numero de personas en el array Dos es: ${resultCountTwo}`)

// sum ages
resultAges = people.reduce((acc, person) => acc + person.age, 0)
console.log(
  `la suma de las edades de las personas en el array es: ${resultAges}`
)
// sum ids , esto nos concatenara el valor de ids porque son strings
resultIds = people.reduce((a, i) => a + i.id, 0)
console.log(`la suma de los ids del array es: ${resultIds}`)

// array of names (map) , el valor inicial es un array
resultNames = people.reduce((acc, person) => acc + person.name + '-', [])
console.log(`estos son los nombres de las personas del array: ${resultNames}`)

// covert to id => person lookup (dict) , el valor inicial es un objeto
resultConvertToId = people.reduce((a, i) => {
  return { ...a, [i.id]: i }
}, {})
console.log(resultConvertToId)
console.log(resultConvertToId['1'])

// max age
resultMaxAge = people.reduce((a, i) => {
  if (a === null || i.age > a) return i.age
  return a
}, null)
console.log(`la mayor edad del array es: ${resultMaxAge}`)

// min age
resultMinAge = people.reduce((a, i) => {
  if (a === null || i.age < a) return i.age
  return a
}, null)
console.log(`la menor edad del array es: ${resultMinAge}`)

// find by name

// Beginning Functional JavaScript
let useless = [2, 5, 6, 1, 10]
uselessReduce = useless.reduce((acc, val) => acc + val)
console.log(uselessReduce)
