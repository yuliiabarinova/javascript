// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numbers = [ 1, 2, 3, 4, 5 ];
let text = [ 'apple', 'banana', 'orange', 'melon', 'kiwi'];
let mix = [6, 7, 'pen', 'book', true];

console.log(numbers);
console.log(text);
console.log(mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[0] = 'table';
array[1] = 'chair';
array[2] = 'floor';
array[3] = 'wall';
array[4] = 'door';
console.log(array)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div> item </div> ')
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div> item ${i} </div>`)
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write ( '<h1>hello</h1>' );
    i++;
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0;
while  (i < 20){
    document.write ( `<h1>hello ${i}</h1>` );
    i++
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < number.length; i++) {
    document.write(number[i])
};

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let random = ['table', 'chair', 'floor', 'window', 'street', 'car', 'pencil', 'sofa', 'kitchen', 'food'];
for (let i = 0; i < random.length; i++) {
    document.write(random[i])
};

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let mixedarray = [ 1, 2, 3, 'hello', 'name', true, 6, 7, 8, 'bye'];
for (let i = 0; i < mixedarray.length; i++) {
    document.write(mixedarray[i])
};




// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let mixedarray = [ 1, 2, 3, 'hello', 'name', true, 6, 7, 8, 'bye'];
for ( let i = 0; i < mixedarray.length; i++) {
    if (typeof mixedarray [i] === 'boolean' ){
        document.write(mixedarray[i])
    }
};


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let mixedarray = [ 1, 2, 3, 'hello', 'name', true, 6, 7, 8, 'bye'];
for (let i = 0; i < mixedarray.length; i++) {
    if ( typeof mixedarray [i] === 'number') {
        document.write(mixedarray[i])
    }
};


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let mixedarray = [ 1, 2, 3, 'hello', 'name', true, 6, 7, 8, 'bye'];
for ( let i = 0; i < mixedarray.length; i++) {
    if (typeof mixedarray [i] === 'string'){
        document.write(mixedarray [i])
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let emptyarray = [];
emptyarray[0] = 'food';
emptyarray[1] = 'two';
emptyarray[2] = 3;
emptyarray[3] = 4;
emptyarray[4] = true;
emptyarray[5] = false;
emptyarray[6] = 'speed';
emptyarray[7] = 'phone';
emptyarray[8] = '10';
emptyarray[9] = 'table';

for (let i = 0; i < emptyarray.length; i++ ){
    console.log (emptyarray[i])
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log('поточний номер кроку ' + i + ' ');
    document.write('поточний номер кроку ' + i + ' ');
};

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++){
    console.log(' ');
    document.write('поточний номер кроку ' + i + '')
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for ( let i = 0; i < 100; i += 2) {
    document.write(' поточний номер кроку ' + i + ' ');
    console.log(' поточний номер кроку ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++ ) {
    if (i%2===0)
        console.log('парне число ' + i + '')
        document.write('<div>парне число ' + i + '</div>')
}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++){
    if (i%2===1){
        document.write('<div>непарне число ' + i + '</div>')
        console.log('непарне число ' + i + '')
    }
}