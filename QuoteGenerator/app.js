const listDescrip = ["A deep sense of love and belonging is an irreducible need of all people. We are biologically, cognitively, physically, and spiritually wired to love, to be loved, and to belong. When those needs are not met, we don't function as we were meant to. We break. We fall apart. We numb. We ache. We hurt others. We get sick."
,"You cannot control what happens to you, but you can control your attitude toward what happens to you, and in that, you will be mastering change rather than allowing it to master you."
,"The world is so unpredictable. Things happen suddenly, unexpectedly. We want to feel we are in control of our own existence. In some ways we are, in some ways we're not. We are ruled by the forces of chance and coincidence."
,"The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So write and draw and build and play and dance and live as only you can."
,"Be not afraid of discomfort. If you can't put yourself in a situation where you are uncomfortable, then you will never grow. You will never change. You'll never learn."
,"Be Impeccable With Your Word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love."
];
const authors = ["Brene Brown"
,"Brian Tracy" 
,"Paul Auster"
,"Neil Gaiman"
,"Jason Reynolds" 
,"Don Miguel Ruiz"
]; 
let index = null;  

document.querySelector(".new-quote").addEventListener("click", function(){
    if(index==null || index == authors.length-1){
        index = 0;   
    } 
    else{
        index+=1;  
    } 
    document.querySelector(".author").innerHTML = "-"+authors[index]; 
    document.querySelector(".text-description").innerHTML = "\"" + listDescrip[index] + "\"";
});
