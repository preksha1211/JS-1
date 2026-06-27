
/*5 phases of dom manupulation
1. dom
2. Selection of HTML Elements
3. How to Change or manupulate HTML
4. CSS ko kaise change kar skte hai
5. Event Listeners (event ko kaise suna jaaye)
*/


/*
Elements ko select krke basically 
1. html lga skte 
2. css lga skte hai
3. events lga skte hai
*/

//Phase 2
/*let a = document.querySelector('h1');
console.log(a);

let b = document.querySelector('p');
console.log(b);
*/

/*
Phase 3
let h1 = document.querySelector('h1');
h1.innerHTML = "meri girlfreind nhi hai"

let p = document.querySelector('p');
p.innerHTML="";
p.innerHTML="change kiya hua text by dom"


//Phase 4
let a = document.querySelector('h1');
a.style.backgroundColor = 'rgb(0,255,0)';
a.style.color = 'black';

let b = document.querySelector('p');
b.style.backgroundColor = 'hsl(247, 37%, 43%)';
b.style.color = 'pink';
*/


//Phae 5
let h1 = document.querySelector('h1');
h1.addEventListener('click', ()=> {
    console.log('alpha');
})


//phae 1
// window is a global object
//hum html ke elements ko js m acess kr skte h through document
//saree html element as aa object document m hote h
//document is a representation of html code and basically called dom
//when the page is loded browser automtically creates dom
// document bht bara 