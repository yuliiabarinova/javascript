// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.getElementById('button').onlick = function () {
    let text1 = document.forms.form1.text1.value;
    let text2 =document.forms.form1.text2.value;
    let text3 =document.forms.form2.text3.value;
    let text4 =document.forms.form2.text4.value;
    console.log(text1, text2, text3, text4)
};


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let form = document.forms.creator;
form.onsubmit = function (e) {
    e.preventDefault();
    let rows = +form.rows.value;
    let columns = +form.columns.value;
    let content = form.content.value;
    console.log(rows, columns, content)

    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = content;
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let badWords = ['Person', 'Student', 'Child', 'Teacher', 'Driver'];
let button = document.getElementById('button');
button.onclick = function () {
    let badword = document.getElementById('bad').value;
    for (const argument of badWords) {
        if (argument === badword) {
            alert ('Warning: Bad Word');
        }
    }
}
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let badWords = ['Person', 'Student', 'Child', 'Teacher', 'Driver'];
let button = document.getElementById('button');
button.onclick = function () {
    let badword = document.getElementById('bad').value;
    for (const argument of badWords) {
        if (badword.includes(argument)) {
            alert ('Warning: Bad Word');
        }
    }
}