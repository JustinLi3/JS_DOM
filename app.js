// All ways of selecting an element    

//1. GetElementById`(); 
const title = document.getElementById('main-heading');  
console.log(title);

//2. GetElementByClassName(); 
const listItem = document.getElementsByClassName('list-items'); 
console.log(listItem);

//3. GetElementByTagName();  
const listItems = document.getElementsByTagName("li");  //takes elements with the specific tag name of a list
console.log(listItems);

//4. querySelector(); 
const container = document.querySelector('div');  //selects only the first instance of an item that matches the selector class/id/tag 
console.log(container); 

//5. querySelectorAll();  //selects all instances of an item that matches the selector class/id/tag
const containers = document.querySelectorAll('div'); 
console.log(containers);