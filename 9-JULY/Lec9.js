//async and defer in script.js 
//what is event ?
//what is DOM? -hierarchical
//e.stopPropagation()
//event listeners
//disadvantage: very expensive works till end of program

//setTimeout use krke filter banao ki serach option bnao jo 2 sec baad search kro 

// const textbox=document.getElementById("textbox");
// textbox.addEventListener("input",(e)=>{
//     let time=setTimeout(()=>{
//         const inputText=e.target.value;
//         console.log(time);
//         console.log("Input changes to: ",inputText);
//     },2000)
//     clearTimeout(time);
// })

//jb koi function delay hoga tab ye function call hota hai and it is called debouncing 
//encapsulating code in function is function wrapping 

// Event-Capturing:-
const grandfather = document.getElementById('grandfather');
const parent = document.getElementById('parent');
const child = document.getElementById('child');


grandfather.addEventListener('click',(e)=>{
    console.log("Grandfather Clicked!!!!");
    e.stopPropagation(); 
})

parent.addEventListener('click',(e)=>{
    
        console.log("Parent Clicked!!!!");
        e.stopPropagation();
})

child.addEventListener('click',(e)=>{
    console.log("Child Clicked!!!!");
    e.stopPropagation();
})

// Event-Capturing:-
// const grandfather = document.getElementById('grandfather');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');


// grandfather.addEventListener('click',(e)=>{
//     console.log("Grandfather Clicked!!!!");
//     e.stopPropagation(); 
// })

// parent.addEventListener('click',(e)=>{
    
//         console.log("Parent Clicked!!!!");
//         e.stopPropagation();
// })

// child.addEventListener('click',(e)=>{
//     console.log("Child Clicked!!!!");
//     e.stopPropagation();
// })



// const productList = document.getElementById("productList");

// productList.addEventListener("click",(e)=>{
//     if(e.target.tagName === "LI"){
//         const product = e.target.textContent
//        console.log("You clicked on: ", product);
//     }
// })


// const newElement = document.createElement("li");
// newElement.textContent = "Ties";
// productList.appendChild(newElement);

const textBox = document.getElementById("textBox");
function debounce(){
    let search;  // not optimal to use global variable, due to lack of encapsulation
    textBox.addEventListener("input",(e)=>{
    clearTimeout(search); // Clear the previous timeout
    search = setTimeout(()=>{
        const inputText = e.target.value;
        console.log("Input changed to: ", inputText);
    },2000)
    // console.log(search);
})
}

debounce();


// debouncing function will work when the user stops typing for 2 seconds.
// It will clear the previous timeout and set a new one, ensuring that the function is only called after the user has stopped typing for the specified duration (2 seconds in this case).
