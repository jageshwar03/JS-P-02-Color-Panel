let box = document.querySelector(".box")
let btn = document.querySelector("button")

alert(btn)

btn.addEventListener("click",()=>{
    let r = Math.floor(Math.random() * 100);
    let g = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
})

 