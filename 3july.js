///map function
//we have basically created a map-replica in which we can apply our own logic and not necessarily use inbuilt map. therefore Array.prototype.mapReplica


//sir ne mapreplica ka examplediya and mapfilter run krne ko bola
// var arr=[2,4,67,8,91,3]
// const doubleValues=arr.map((x)=>x*2);
// console.log(doubleValues);

//here we use mapFilter
// let arr = [1,2,3,4,5,6,7,8,9,10];

// Array.prototype.mapFilter = function(logic) {
//     let output = [];
//     for (var i = 0; i < this.length; i++) {
//         if (logic(this[i])) {  // ✅ run the logic function on each element
//             output.push(this[i]);  // ✅ push element only if logic returns true
//         }
//     }
//     return output;
// };

// // ✅ Filter logic to get only odd numbers
// const isOdd = (x) => x % 2 !== 0;

// let a = arr.mapFilter(isOdd);
// console.log(a);  // Output: [1, 3, 5, 7, 9]


//REDUCE FUNCTION -It will return a single output by reducing array Array.prototype.Reduce
// 1. Accumulator
// 2.Current
// 3.Initial Value

let arr=[1,2,3,4,5,6];
Array.prototype.reducearr=function(logic,curr){
    let acc=curr;
    let start=0;
    if(curr==undefined){
        acc=this[0];
        start++;
    }

    for(let i=start;i<this.length;i++){
        acc=logic(acc,this[i],i,this);
    }
    return acc;
}
function sum(acc,val){
    return acc+val;

}

const res=arr.reducearr(sum,0);
console.log(res);