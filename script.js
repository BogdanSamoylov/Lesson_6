//изменить фон
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

//удалить рекламу
let adv = document.querySelector('.column .adv');
adv.remove();

//добавить 5-ю кнопку
menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    li   = document.createElement('li');
li.innerText = 'Пятый пункт';
li.classList.add('menu-item');
menu.appendChild(li);

//востановить порядок в меню
menu.insertBefore(menuItem[2], menuItem[1]);

//Поменять заголовок
let div  = document.getElementById('title');
div.innerHTML = 'Мы продаем только подлинную технику Apple';

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let answ = prompt('Вам нравится техника Apple?'),
    prom = document.querySelector('.column .prompt');
prom.textContent = answ;