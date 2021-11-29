// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car (model, manufacturer,year,maxspeed, enginecapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.enginecapacity = enginecapacity;
    this.drive = function () {
        console.log (`їдемо зі швидкістю ${this.maxspeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.increaseMaxSpeed = function (increaseMaxSpeed) {
        this.maxspeed = this.maxspeed + increaseMaxSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}
let car1 = new Car('Qashqai','Nissan', 2019, 150, 2)
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(50);
car1.drive();
car1.changeYear(2021)
car1.info();
car1.addDriver('Dan')
console.log(car1)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car {
    constructor(model, manufacturer,year,maxspeed, enginecapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.enginecapacity = enginecapacity;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    }
    newMaxSpeed (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}

let car1 = new Car('Qashqai','Nissan', 2019, 150, 2);
console.log(car1);
car1.drive();
car1.info();
car1.newMaxSpeed(50);
car1.drive();
car1.changeYear(2021)
car1.info();
car1.addDriver('Dan')
console.log(car1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cindarella {

    constructor(name, age , size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
};
const CindarellaArray = [
    new Cindarella('Lola', 14, 31),
    new Cindarella('Emma', 15, 32),
    new Cindarella('Britney', 16, 33),
    new Cindarella('Amy', 17, 35),
    new Cindarella('Sofia', 18, 34),
    new Cindarella('Luna', 19, 38),
    new Cindarella('April', 20, 36),
    new Cindarella('Elsa', 21, 39),
    new Cindarella('Dora', 22, 40),
    new Cindarella('Pepa', 23, 41),
]
console.log(CindarellaArray)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.


class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
};
const prince1 = new Prince ('Harry', 24, 36);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

const whoiscindarella = (CindarellaArray, prince1) => {
    for  ( const item of CindarellaArray ) {
        if (item.size === prince1.shoe) {
            return ` Cindarella is ${item.name}`
        }
    }
};
console.log(whoiscindarella(CindarellaArray, prince1))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const findCindarella = CindarellaArray.find((item) => item.size === prince1.shoe);
console.log(findCindarella);
