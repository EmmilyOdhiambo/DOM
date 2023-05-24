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
// let fruitList = document.getElementById('fruList');
let fruit =document.createElement('li');
fruit.innerHTML = 'Berries'
document.getElementById('fruList').appendChild(fruit);
// fruitList.appendChild(newFruit);

//Add one more vegetable to the vetable list
// let vegetableList = document.getElementById('vegList');
let vegetable = document.createElement('li');
vegetable.innerHTML = 'Cabbage';
vegList.appendChild(vegetable);















