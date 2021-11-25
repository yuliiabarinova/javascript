// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world'
console.log(str1.length)

let str2 = 'lorem ipsum'
console.log(str2.length)

let str3 = 'javascript is cool'
console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


let str1 = 'hello world'
console.log(str1.toUpperCase())

let str2 = 'lorem ipsum'
console.log(str2.toUpperCase())

let str3 = 'javascript is cool'
console.log(str3.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


let str1 = 'HELLO WORLD'
console.log(str1.toLowerCase())

let str2 = 'LOREM IPSUM'
console.log(str2.toLowerCase())

let str3 = 'JAVASCRIPT IS COOL'
console.log(str3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
document.write(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
console.log(arr); // ['Каждый', 'охотник', 'желает', 'знать']

function stringToarray(str) {
    return str.split(' ')
}

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
//     що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

function delete_characters(str, length)
{
    return (str.substring(0, length))
}
let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.


function insert_dash (str) {
    return (str.toUpperCase().replaceAll(' ', '-'))
}

let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

function letterUpperCase (str) {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(letterUpperCase('summer flowers'))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

function capitalize (str) {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
console.log(capitalize ('hello, my name is yuliia'))


