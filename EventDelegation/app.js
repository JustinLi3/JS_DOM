document.querySelector(".row").addEventListener("click", function(e){
const target = e.target; 
console.log(target);
if(target.matches("button")){  
    target.style.color = 'Black' ; 
    target.innerHTML = "CLICKED";    
    target.classList.remove('bg-info'); 
    target.classList.remove('bg-warning');
    target.classList.remove('bg-success');
    target.classList.remove('bg-danger');
     target.style.backgroundColor = 'gray'; 
}   

});