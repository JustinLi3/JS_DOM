const modal = document.querySelector(".modal"); 
const btn = document.querySelector(".btn");  

btn.addEventListener("click",function(){
    modal.classList.remove("modal");
});