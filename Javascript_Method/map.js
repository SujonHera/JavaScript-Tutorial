const users =["user1", "user2", "user3", "user4", "something", "something2"]

const newUsers = users.map(user => {
    return user.toUpperCase()
})

const numbers =[12, 3, 353, 35,53]

console.log(newUsers)

const userCollection = [
    {name: "Sujon Hossain", email: 'sujon@gmail.com'},
    {name: "Sharlina  Hossain", email: 'sharlina@gmail.com'},
    {name: "Naiem Islam", email:"naiem@gmail.com"}
]

const newUsersCollection = userCollection.map(user => user.name)

console.log(newUsersCollection)

const user = numbers.map((currentValue, index, array) => {
    console.log(currentValue)
    console.log(index)
    console.log(array)
})

