/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1 задание

let a = document.querySelectorAll('.promo__adv img')
for (let item of a) {
    item.remove()
}

// 2 задание

let type = document.querySelector('.promo__genre')
type.innerHTML = 'ДРАМА'

// 3 задание

let img = document.querySelector('.promo__bg')
img.style.background = 'url(./img/bg.jpg)'

// 4 задание 5 задание 6 задание

let ul = document.querySelector('.promo__interactive-list')

const reload = (arr) => {
    
    ul.innerHTML = ""
    let count = 1
    for ( let item of movieDB.movies) {

        let li = document.createElement('li')
        // let span = document.createElement('span')
        let delet = document.createElement('div')

        // span.classList.add('promo__interactive-item')
        li.classList.add('promo__interactive-item')
        delet.classList.add('delete')

        li.innerText = `${count}. ${item}`

        ul.append(li)
        li.append(delet)


        delet.onclick = () => {
            movieDB.movies = movieDB.movies.filter(elem => elem !== item)
            console.log('works');
            reload(movieDB.movies.sort())
        }
    
        count++
    }
}

reload(movieDB.movies.sort())

    let counter = 0;
    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')
const slider = document.querySelector('.picture');

next.onclick = () => {
  counter = counter + 1303;
    if (counter > 2606) {
      counter = 0;
    }
    slider.style.left = -counter + 'px';
};

prev.onclick = () => {
  counter = counter - 1303;
    if (counter < 0) {
      counter = 2606;
    }
    slider.style.left = -counter + 'px';
};
    
    