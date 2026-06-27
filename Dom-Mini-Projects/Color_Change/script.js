let btn_1 = document.querySelector('.btn-1');
let body = document.querySelector('body');
let input = document.querySelector('.input');
btn_1.addEventListener('click',()=>{
         let color=randomColor();
         body.style.backgroundColor=color;
         changeColor();
         

})



function randomColor(){
    let r=Math.floor(Math.random() * 256);
  
    let g=Math.floor(Math.random() * 256);
    let b=Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
    
}
let color_display = document.querySelector('.color-display');
function changeColor(){
    let cc = body.style.backgroundColor;
    color_display.innerText = `Current Color: ${cc}`;
    
}


let btn_2 = document.querySelector('.btn-2');
btn_2.addEventListener('click',()=>{

   let color=input.value;
   body.style.backgroundColor=`${color}`;
   changeColor();
   input.value="";
})