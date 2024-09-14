// Задача 1

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Создать скрипт, который внутрь контейнера добавит 100 тегов div размером 30x30 (px) со случайным числом внутри.

    let elemParent = document.querySelector('div');

    for(let i=0; i<100; i++ ) {
        let elem = document.createElement("div");
        elem.appendChild(document.createTextNode(getRandomInt(0,100)));
        elem.style.width = '30px';
        elem.style.height = '30px';
        elem.style.justifyContent = 'center';
        elem.style.alignItems = 'center';
        elemParent.appendChild(elem);
    }

    /*С помощью методов DOM получить ранее созданные теги div и добавить к ним цветовое оформление по следующим правилам:

    Если число меньше 31, покрасить тег в зеленый цвет

    Если число больше 70, покрасить тег в красный цвет
    */

    const divArr= document.querySelectorAll("div")
    for(let i=1; i<divArr.length;i++) {
        if(parseInt(divArr[i].textContent)<31) {
            divArr[i].style.background = 'green'
        }
        else if(parseInt(divArr[i].textContent)>70) {
            divArr[i].style.background = 'red'
        }

    }

// Задача 2

    //Создание нового дива 

        let elemParent2 = document.querySelector('body');
        let elem2 = document.createElement("div");
        elem2.style.width = '50%';
        elem2.style.height = '100px';

    // Создание переменных для цвета дива

        let redTone = getRandomInt(0, 255);
        let greenTone = getRandomInt(0, 255);
        let blueTone = getRandomInt(0, 255);
        let hexRedTone = redTone.toString(16);
        let hexGreenTone = greenTone.toString(16);
        let hexBlueTone = blueTone.toString(16);

    //окрас дива

        elem2.style.background = `rgb(${redTone}, ${greenTone}, ${blueTone})`;

    //окрас текста дива

        if(redTone+greenTone+blueTone>765/2)
            elem2.style.color = 'black'
        else    
            elem2.style.color = 'white'

    //внешний скрипт для определения цвета 

        var n_match = ntc.name(`#${hexRedTone}${hexGreenTone}${hexBlueTone}`);
        n_rgb = n_match[0]; // RGB value of closest match
        n_name = n_match[1]; // Text string: Color name
        n_exactmatch = n_match[2]; // True if exact color match

    //вывод текста в див
        elem2.textContent = `Цвет RGB - ${elem2.style.background}, \n Цвет в формате HEX: #${hexRedTone}${hexGreenTone}${hexBlueTone},\n  Оттенок - ${n_name}.`

    //Добавление на страницу
    
        elemParent2.appendChild(elem2);
