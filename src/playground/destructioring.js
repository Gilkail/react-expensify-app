// const person = {
//     name: 'Gil',
//     age: 33,
//     location: {
//         city: 'Haifa',
//         temp: 22
//     }
// }

// const {name, age, location} = person

// console.log(`${name}, age ${location.city}`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Publish'} = book.publisher

// console.log(`${publisherName}`)


// const address = ['Hafia', 'Qiryat Motzkin', 55]

// const [test, test2, test3] = address

// console.log(test)

const item = ['Coffee', '$2.0', '$2.5', '$2.75']

const [itemName, , medium] = item

console.log(`${itemName} price is ${medium}`)