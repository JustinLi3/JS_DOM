//Grab button  
const btn = document.querySelector(".btn-info");  
const description = document.querySelector(".description"); 

function displayText(){ 
    if(!description.classList.contains("d-none")){
        description.classList.add("d-none");
    } 
    else{
    description.classList.remove("d-none");

    }
} 

btn.addEventListener("click", displayText); 

console.log(btn);
 