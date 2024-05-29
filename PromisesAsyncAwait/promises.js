//Promise object represents completion or failure of an asynchronous operation and value 
//When running tasks like calling to a database, opening files, etc, they do not immediately return the result, rather a promise 

//Promise.then((result)=>{}) : once promise recieved, recieves result of task 
//promise.catch((error)=>{}) : anything going wrong with request, recieves error 

//await is used to allow promises to be ran sequentially 

const axiosRequest = require('axios');  
 
async function getActivity(){  //Async allows our program to run other tasks simultaneously while we wait for the getActivity()
    try{
        let response = await axiosRequest.get("https://httpstat.us/500"); 
        console.log("You could " + response.activity.data); 
    } 
    catch(error){
        console.error("ERROR " + error);
    }
} 
getActivity();


// axiosRequest    
//     .get('https://httpstat.us/404')
//     .then(response=>{
//         console.log("You could" + response.data.activity)
//     }) 
//     .catch(error=>{
//         console.log("ERROR " + error)
//     })