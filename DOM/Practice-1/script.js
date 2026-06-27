

let body =  document.querySelector('body');
let p = document.createElement('p');
p.innerText = "tumse pyarr krta hu";
// p.style.backgroundColor='black';
// p.style.color='green';
p.setAttribute('style','background-color:black ; color:green')
body.append(p);

let button = document.createElement('button');
button.innerText='click me';
p.prepend(button);

let div = document.createElement('div');
div.style.cssText = 'width:100px ; height :100px ; border:1px solid black'
body.append(div);
div.setAttribute('class','random');
div.classList.add('neww');