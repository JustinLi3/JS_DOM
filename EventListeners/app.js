//Event Listeners 

//Second event is within js, element.addEventListener("click", function); 
//Lets say we want to add an event listener on click to the second button 

const button2 = document.querySelector('.btn-2');   
 
function alertBtn(){
    alert("Hello, button has been pressed!");
}

console.log(button2); 
button2.addEventListener("click", alertBtn); 

const button3 = document.querySelector('.btn-3'); 
function consoleBtn(){
    console.log("You clicked on a button");
} 
button3.addEventListener('click',consoleBtn); //if you do consoleBtn that runs your command automatically first and then run the outside, however, you only want to run the command once the action has been taken


//Mouseover event 
const box3 = document.querySelector(".box-3");
function changeBg(){ 
     if(box3.style.backgroundColor==='blue'){
        box3.style.backgroundColor = 'green';
     }
     else{
        box3.style.backgroundColor ='blue';
     }
} 

button3.addEventListener('mouseover', changeBg); 

//addEventListener method is generally more used due to its ability to add as many event listeners to one single element