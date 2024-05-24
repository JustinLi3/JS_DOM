// DOM MANIPULATION 

//Traversal 

//Parent Node Traversal 
let ul = document.querySelector('ul'); 
console.log(ul.parentNode); //returns parent element/document 
console.log(ul.parentElement); //returns parent element 
//container would be the parent element of ul 
//To get grandparent Node, 
console.log(ul.parentElement.parentElement.parentElement);  

const html = document.documentElement; //returns the html  
console.log(html.parentNode); 
console.log(html.parentElement); //Document node is not the same as element node 


//Child Node Traversal  
console.log(ul.childNodes); //returns the child, which is the list, howevever, since our list was generated in html, there are extra spaces (indentions)
console.log(ul.firstChild);
console.log(ul.lastChild); 
// ul.firstChild.style.backgroundColor= 'blue'; // since our first child is a text node and not an element, there is an error  
//Since the children of ul is an array, we can index to get our actual first element 
ul.childNodes[1].style.color = 'red';
ul.childNodes[ul.childNodes.length-2].style.color = 'blue';  

//OR 
console.log(ul.children);
console.log(ul.firstElementChild); 
console.log(ul.lastElementChild);


//Sibling Node Traversal 
//In our html, since h1 and ul are siblings to one another, we could access to each other directly through the following 
const mainHeading = document.documentElement.lastElementChild.firstElementChild.firstElementChild; //Accessing through html->body->div->heading
const div = document.querySelector('div'); 
console.log(div.childNodes); //Since there are nodes actually in between the h1 and ul, should use previousElementSibling and nextElementSibling 
console.log(mainHeading.nextElementSibling);  
add