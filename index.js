//Change document background color to silver

document.body.style.backgroundColor = 'silver'

// change the font clor for h1 title tag to green
let title = document.getElementById('title');
title.style.color = 'green';

//Change the font case for h3 title tags to uppercase
let h3Titles = document .getElementsByTagName('h3');
for (let i = 0; i < h3Titles.length; i++){
    h3Titles[i].style.textTransform  = 'uppercase';
}

//Add one more fruit to the fruit list
let fruitList = document.getElementBy('fruList');
let newFruit =document.createElement('li');
newFruitList.textContent = "Berries";
fruitList.appndChild(newFruit);