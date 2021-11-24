// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minValue = (a,b,c) => {
    if (a < b && a < c ){
        console.log (a)
    } else if (b < a && b < c) {
        console.log(b)
    } else if (c < a && c < b){
        console.log(c)
    }
}

minValue(10, 100, 56)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxValue = (a, b, c)=>{
    if (a > b && a > c){
        console.log(a)
    }
    else if (b > a && b > c){
        console.log(b)
    }
    else if (c > a && c > b){
        console.log(c)
    }
}

maxValue(5, 3, 98)



// - створити функцію яка повертає найбільше число з масиву
let array = [ 1, 2, 3,4 ,5 ,6 ,78, 9,45, 67, 89, 346, 789, 765, 234346];

let maxNumber = (array) => {
    return Math.max.apply(null, array)
}

console.log (maxNumber (array));

// - створити функцію яка повертає найменьше число з масиву
let array = [ 1, 2, 3,4 ,5 ,6 ,78, 9,45, 67, 89, 346, 789, 765, 234346];
let minNumber = (array) => {
    return Math.min.apply(null, array)
}
console.log(minNumber(array))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let array = [1, 2, 3, 4, 5];

let sumArray = (array) => {
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}
console.log(sumArray(array))





// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


let array = [1, 2, 3, 4];

let averageArray = (array) =>{
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum / array.length;
}
console.log(averageArray(array))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMax = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (const element of arg) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log("max ", max);
    return min;
}
document.write('Min: ' + minMax(1, 5, 10, 132085, -34873465))



// - створити функцію яка заповнює масив рандомними числами
let randomArray = (arrayLength) =>{
    let emptyArray = []
    for (let i = 0; i < arrayLength; i++) {
        emptyArray.push(Math.round(Math.random()*100))
    }
    return emptyArray
}
document.write (randomArray(10))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomArray = (length, limit) => {
    let emptyArray =[]
    for ( let i = 0; i < length; i++){
        emptyArray.push(Math.round(Math.random()*limit))
    }
    return emptyArray
}
document.write( randomArray (10, 30))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let array = [ 1, 2, 3,4 ,5 ,6];
let reverse = (array)=> {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i])
    }
}
reverse (array)