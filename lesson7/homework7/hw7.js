
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id,
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.phone = phone
}
const userArray = [
    new User(1, 'ivan', 'petrov', 'ivan@test.com', 0981263728),
    new User(2, 'vova', 'petrov', 'vova@test.com', 0981263728),
    new User(3, 'ben', 'cham', 'ben@test.com', 0981263728),
    new User(4, 'drew', 'feifer', 'drew@test.com', 0981263728),
    new User(5, 'pete', 'chadwick', 'pete@test.com', 0981263728),
    new User(6, 'nick', 'seebold', 'nicj@test.com', 0981263728),
    new User(7, 'brandon', 'hansen', 'brandon@test.com', 0981263728),
    new User(8, 'donovan', 'johnson', 'donovan@test.com', 0981263728),
    new User(9, 'alexander', 'lolo', 'alex@test.com', 0981263728),
    new User(10, 'danylo', 'mysko', 'dan@test.com', 0981263728)
]
console.log(userArray)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = userArray.filter((value => {
    return value.id %2 ===0;
}));
console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// Зробила по спаданню, бо сам масив йдк по зростанню.
let sort = userArray.sort((a, b) => {
    return b.id -a.id
});
console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {

    constructor(id, name, surname , email, phone, order) {
        this.id = id,
            this.name = name,
            this.surname = surname,
            this.email = email,
            this.phone = phone,
            this.order = order
    }
}
const clientArray = [
    new Client(1, 'ivan', 'petrov', 'ivan@test.com', 0981263728, [1, 2),
new Client(2, 'vova', 'petrov', 'vova@test.com', 0981263728, [4, 5, 6,67, 78, 89, 32]),
new Client(3, 'ben', 'cham', 'ben@test.com', 0981263728,[5,4,3,56,34]),
new Client(4, 'drew', 'feifer', 'drew@test.com', 0981263728,[34, 56, 57]),
new Client(5, 'pete', 'chadwick', 'pete@test.com', 0981263728, [23, 45, 32, 234]),
new Client(6, 'nick', 'seebold', 'nicj@test.com', 0981263728,[12, 34, 12, 423, 12, 34]),
new Client(7, 'brandon', 'hansen', 'brandon@test.com', 0981263728,[53,34, 234, 45, 43, 56, 78]),
new Client(8, 'donovan', 'johnson', 'donovan@test.com', 0981263728,[234, 345, 456]),
new Client(9, 'alexander', 'lolo', 'alex@test.com', 0981263728,[234, 546, 567]),
new Client(10, 'danylo', 'mysko', 'dan@test.com', 0981263728,[123, 345, 46]),
]
console.log(clientArray)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort = clientArray.sort((a, b) => {
    return b.order.length -a.order.length
});
console.log(sort)