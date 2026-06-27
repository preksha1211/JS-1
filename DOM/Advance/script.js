// let a =document.querySelectorAll('div');   
// console.log(a); // prints a nodeList basically list of html elements



// -->Selection

let a = document.getElementsByTagName('div');
console.log(a); //html collection

let b = document.getElementById('heading');
console.log('heading'); //html element

let c = document.getElementsByClassName('hi');
console.log(c); //html collections

//querySelector -->very powerful ..class id tag kuch bhi select kr skte ho

let d = document.querySelector('div'); //selects first div elements
console.log(d);

let e = document.querySelector('.hi');
console.log(e); //selects first

let f= document.querySelectorAll('.hi'
);
console.log(f); //selects all returns NodeList

/////////////////////////////////////////////////////////////////

let falna = document.querySelector('.falna');
console.log(falna);
console.log(falna.firstChild); //returns first child
console.log(falna.lastChild); // return last child
console.log(falna.children); //return child elements
console.log(falna.childNodes); // returns all child nodes including text and comments
 

/////////////////////////////////////////////////////////////////////////////

//Manupulation the html