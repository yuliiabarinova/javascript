
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let button = document.getElementById('button');
button.onclick = function () {
    document.getElementById('text').style.display = 'none';
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let button1 = document.getElementById('button1');
button1.onclick = function () {
    this.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
   document.getElementById('button2').onclick = function () {
       let age = document.getElementById('age').value;
       if (+age < 18) {
           alert('Age less than 18');
       }
   }

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function () {
    this.classList.toggle ('hide');
}
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem4', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem5', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem6',body:'lorem ipsum dolo sit ameti'},
];
for (const comment of comments) {
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    let title = document.createElement('h2');
    title.innerText = comment.title;
    let commentBody = document.createElement('div');
    commentBody.innerText = comment.body;
    let button3 = document.createElement('button')
    button3.innerText= ('hide')

    commentDiv.append(title,commentBody, button3);
    document.body.append(commentDiv);

}