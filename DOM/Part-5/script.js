let firstBtn = document.querySelector('.firstBtn');

firstBtn.onclick =()=>{
    console.log('mai property wala click hu');
}//yeh inline ko overwrite kr deta hai

firstBtn.onclick =()=>{
    console.log('mai property wala dusra event hu click hu');
} // yh firts onclick ko overwrite kr dega

firstBtn.dblonclick=()=>{
    console.log('double click');
}

//++++++++++++++++++++++++++++++++++++++


//humesha eventListener hi use krenge
//ise remove bhi kr skte hai pehele ko nhi kr skte the
let btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    console.log('yeh eventListner wala hai')
})
//is method se same event same element pr multiple times lga skte hai

//++++++++++++++++++++++++++++++++++++++
//Event Object

btn.addEventListener('click',(event)=>{
    console.log(event.target);
})