const people = [
  { id: '1', name: 'Leigh', age: 35 },
  { id: '2', name: 'Jenny', age: 30 },
  { id: '3', name: 'Heather', age: 28 },
]

console.log(people)

// count
resultCount = people.reduce((acc, person) => acc + 1, 0)
console.log(`numero de personas en el array es: ${resultCount}`)

// sum ages
resultAges = people.reduce((acc, person) => acc + person.age, 0)
console.log(
  `la suma de las edades de las personas en el array es: ${resultAges}`
)

// array of names
resultNames = people.reduce((acc, person) => acc + person.name + '-', [])
console.log(`estos son los nombres de las personas del array: ${resultNames}`)





// Beginning Functional JavaScript
let useless = [2, 5, 6, 1, 10]
uselessReduce = useless.reduce((acc, val) => acc + val)
console.log(uselessReduce);

