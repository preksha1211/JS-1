let box = document.querySelector('div');
console.log(box);

let expand= document.querySelector('.expand');
console.log(expand);

let shrink= document.querySelector('.shrink');
console.log(shrink);

expand.addEventListener('click',()=>{
    box.style.transform = 'scale(1.5)';
})

shrink.addEventListener('click',()=>{
    box.style.transform = 'scale(0.5)';
})