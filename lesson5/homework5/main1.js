// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let areaRect = (a, b) => {return a * b;}
console.log(areaRect(10, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const pi = 3.14
let areaCircle = (pi, r) => {
    return pi * Math.pow (r, 2);
}

console.log(areaCircle(pi, 10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 2πRH

const pi = 3.14;
let areaCylinder = (pi, h, r) => {
    return 2 * pi * h * r
}
console.log(areaCylinder(pi, 13, 15))



// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [1, 2, 3, 4, 5, 'finger', 'hand', 'head', 'list', false, 'array'];
let arrayList = (array) => {
    for( let i = 0; i < array.length; i++) {
        document.write(array[i])
    }
}
arrayList (array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let pCreator = (a,b,c, d) => {
    document.write(`<p>${a}</p>`)
    document.write(`<p>${b}</p>`)
    document.write(`<p>${c}</p>`)
    document.write(`<p>${d}</p>`)

}
pCreator('text1', 'text2', 'text3', 'text4')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let listCreator = (arg) => {
    document.write(`<ul>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`</ul>`);

}
listCreator('hello')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listCreator = (arg, size) => {
    document.write(`<ul>`);
    for ( let i = 0; i < size; i++) {
        document.write(`<li>${arg}</li>`);
    }
    document.write(`</ul>`);
}
listCreator('hello', 4)

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [5, 6, 7, 8, 'hello', 'bye', 'dance'];

let elementArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(array[i])
    }
}
elementArray(array)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = [1, 2, 3, 4, 5, 'finger', 'hand', 'head', 'list', false, 'array'];
let listArray = (array) => {
    document.write (`<ul>`)
    for ( let i = 0; i < array.length; i++) {
        document.write (`<li>${array[i]}</li>`);
    }
    document.write (`</ul>`);
}
listArray (array)


// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let array = [{id:1, name:'Yuliia', age:23}, {id:2, name:'Olena', age:24}, {id:3, name:'Olha', age:36}]

let arrayObject = (array)=>{
    for (const arrayElement of array){
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
arrayObject(array)