//promise is an object 

// const promise1 = new Promise((resolve,reject)=>
// {
//     setTimeout(()=>
//     {
//         resolve("Promise Resolved");
//     },3000)
// })
// promise1
// .then((res)=>console.log(res))
// .then(()=> setTimeout(()=>
// {
//     console.log("p2")
// },2000))
// .then(()=>setTimeout(()=>
// {
//     console.log("p3")
// },5000))
// .then(()=>setTimeout(()=>
// {
//     console.log("p4");
// },1000))
// .catch((err)=>console.log(err));


// const promise2= new Promise((resolve,reject)=>{
//     setTimeout(()=>
//     {
//         resolve("Promise Resolved");
//     },3000)
// })


//promises ko synchronously chalane ke liye baar baar return kr rhe hai 

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved P1");
    }, 5000);
});

promise1
    .then((res) => {
        console.log(res); 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise Resolved P2");
            }, 2000); 
        });
    })
    .then((res2) => {
        console.log(res2); 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise Resolved P3");
            }, 1000);
        });
    })
    .then((res3)=>{
        console.log(res3);
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log("Promise Resolved P4");
                resolve();
            },3000)
        })
    })
    .catch((err) => {
        console.log("Error:", err);
    });