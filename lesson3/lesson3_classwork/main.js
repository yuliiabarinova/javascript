// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

        //     1. перебрати його циклом while
let array = [2,17,13,6,22,31,45,66,100,-18]
let i = 0;
while (i < array.length) {
    document.write(array[i])
    i++
}

        // в зворотньому напрямку
let array = [2,17,13,6,22,31,45,66,100,-18]
let i = array.length;
while (i -- ) {
    console.log(array[i])

}





        //     2. перебрати його циклом for
let array = [2,17,13,6,22,31,45,66,100,-18]
for (let i = 0; i < array.length; i++){
    document.write(array[i])
}

        // в зворотньому напрямку
let array = [2,17,13,6,22,31,45,66,100,-18]
for (let i = array.length; i >= 0; i--) {
    console.log(array[i])
}





//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let array = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < array.length){
    if (i%2 !== 0 ){
        console.log('число з непарним індексом '+ array [i] +'')
    }
    i++
}
     // в зворотньому напрямку
let array = [2,17,13,6,22,31,45,66,100,-18];
let i = array.length;
while (i -- ){
    if (i%2 !== 0 ){
        document.write('число з непарним індексом '+ array [i] +'')
    }
}







// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
let array = [2,17,13,6,22,31,45,66,100,-18]
for (let i = 0; i < array.length; i++){
    if (i%2 !== 0){
        document.write('числа з непарним індексом '+ array[i] +'')
    }
}

            // в зворотньому напрямку
let array = [2,17,13,6,22,31,45,66,100,-18]
for (let i = array.length; i >= 0; i--) {
    if (i%2 !== 0){
        console.log('числа з непарним індексом '+ array[i] +'')
    }
}




// 5. перебрати циклом while та вивести  числа тільки парні значення
let array = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < array.length){
    if (array [i] % 2 === 0 ){
        document.write(' парне число '+ array [i] +'')
    }
    i++
}

            // в зворотньому напрямку
let array = [2,17,13,6,22,31,45,66,100,-18];
let i = array.length;
while (i--){
    if (array[i] % 2 ==0){
        document.write(' парне число '+ array [i] +'')
    }
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
let array = [2,17,13,6,22,31,45,66,100,-18]
for (let i = 0; i < array.length; i++){
    if (array[i] % 2 == 0){
        document.write('парне число '+ array[i] +'')
    }
}

            // в зворотньому напрямку
let array = [2,17,13,6,22,31,45,66,100,-18]
for (let i = array.length; i >= 0; i--) {
    if (array[i] % 2 == 0){
        document.write('парне число '+ array[i] +'')
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
let array = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
        array [i] = 'okten';
        console.log(array[i]);
    }
}
console.log(array);



// 8. вивести масив в зворотньому порядку.

let array = [2,17,13,6,22,31,45,66,100,-18];
for (let i = array.length; i >= 0; i--) {
    console.log(array[i])
}
