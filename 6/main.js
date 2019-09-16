let wrap = document.getElementsByClassName("wrapper");
let button = document.getElementsByTagName("button");
let item1 = '<div class="item1"></div>';
let item2 = '<div class="item2"></div>';
let item3 = '<div class="item3"></div>';
let item4 = '<div class="item4"></div>';
let item5 = '<div class="item5"></div>';
let item6 = '<div class="item6"></div>';
button[0].onclick = () => window.open("https://www.w3schools.com/",  "_self");
button[1].onclick = () => document.body.style.backgroundColor = "skyblue";
button[2].onclick = () => document.body.innerHTML = `<div class="container"> 
${item1 + item2 +item3 +item4 + item5 + item6} </div>`;