// console.log("Hello world");

// console.log(a);

// var a=123;

// console.log(a);

// function abc(){
//     console.log("This is function abc");
// }

// function hgf(){
//     console.log("This is HGF");
// }
// hgf();

//arrow function
//xyz();


//this will give error because its not a function it is a named function
// var xyz=()=>{
//          console.log("xyz function called");
// }



//this will give error beacuse compiler knows we are defining b 
// console.log(b);
// let b=200;


// function x(){

//     var a=100;
//     var b=200;
//     var c=300;

//     function y(){
//         var d=400;
//         function z(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(d);


//         }
//         z()
//     }
//     y()

// }
// x()

// for(var i=0;i<=5;i++){
//     //console.log(i);
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }

function nhof(){
    console.log("this is not a higher order function");
}
function hof(){
    console.log("higher order function");
    nhof();
}

hof()
