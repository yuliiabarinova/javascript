// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let name = document.forms.userForm.name;
let age = document.forms.userForm.age;
let button = document.getElementById('button');
let key = 'key';

let save = (userName, userAge) => {
    let user = {
        name: userName,
        age: userAge
    };
    localStorage.setItem(key, JSON.stringify(user));
};
button.onclick = () => {
    save(name.value, age.value);
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let model = document.forms.carForm.model;
let type = document.forms.carForm.type;
let volume = document.forms.carForm.volume;
let btnCar = document.getElementById('btnCar');
let key1 = 'keyCar';

let saveCar = (modelCar, typeCar, volumeCar) => {
    let newArr = JSON.parse(localStorage.getItem(key1)) || [];

    newArr.push({modelCar, typeCar, volumeCar})
    localStorage.setItem(key1, JSON.stringify(newArr));
};

btnCar.onclick = () => {
    saveCar(model.value, type.value, volume.value);
}