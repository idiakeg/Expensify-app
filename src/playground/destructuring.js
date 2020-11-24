// // const person = {
// //     name: 'James',
// //     age: 20,
// //     location: {
// //         city:'Lagos',
// //         temp: 105
// //     }
// // }

// // const { age, name: firstName = 'Anonymous'} = person

// // const { city, temp: temperature} =  person.location

// // console.log(`${firstName} is ${age}`)

// // console.log(`it is ${temperature} in ${city}`)


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name:'Penguin'
//     }
// }

// const { name:publisherName = 'Self-Published'} = book.publisher

// console.log(`${publisherName}`)

// Array destructuring

const address = [ '1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, city, state] = address

console.log(`we are in ${city} ${state}.`)

const item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [coffe_type, , amount] = item

console.log(`A medium ${coffe_type} costs ${amount} `)