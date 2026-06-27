// //Manupulating the html 
// /*
// 1. tags
// 2. text
// 3. html
// 4. elements
// 5. attributes
// */

// //tags 
// let h1 = document.querySelector('h1');
// console.log(h1.tagName); //tag
// console.log(h1.nodeName); //tagname text node ,comment node
// console.log(h1.firstChild.tagName); //undefiend
// console.log(h1.firstChild.nodeName); //text node
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // manipulating text
// console.log(h1.innerText); //ui pr jaisa text render hota h
// console.log(h1.textContent); //code mai jaisa text render hota h with formating

// // h1.innerText ="kale chor \n le gye"
// // console.log(h1.innerText);
// // console.log(h1.textContent);


// //+++++++  manipulating html $ elements  +++++++++++++++++++++++++++++++++++++++++

// // h1.innerHTML = '<p>my name is </p>'
// // console.log(h1.innerHTML);

// //+++++++++++++++++++++ visibility concept +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let visible= document.querySelector('.visible');
// console.log(visible);
// console.log(visible.tagName);
// console.log(visible.nodeName);
// console.log(visible.innerText); //yaha bas style ko ignore nhi krega baki sab m krega
// console.log(visible.textContent);
// console.log(visible.innerHTML);


// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //inserting elements

// let div =document.querySelector('div');
// let ele = document.createElement('p');
// ele.innerText = 'new paragraph';

// // div.append(ele);
// // div.prepend(ele);
// // div.after(ele);
// // div.before(ele);


// //Deletion of element
// // div.remove();
 
// // let p = div.children[2];
// // p.remove();

// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //parent 

// let alpha = document.querySelector('#alpha');
// alpha.style.backgroundColor='blue';

// let parentNode = alpha.parentNode;

// let newElement = document.createElement('div');
// newElement.innerText='hello';

// // parentNode.replaceChild(newElement,alpha);
// // parentNode.removeChild(newElement);

// parentNode.insertBefore(newElement,alpha);

//+++++++++++++++++++++++++++++++++++++++++++++++++
let div = document.querySelector('.box');
console.log(div.getAttribute('id'));
console.log(div.attributes); //all atrributes list
div.setAttribute('class','random'); //but it replaces 


//++++++++++++++++++++++++++++++++++++++++++++++++
