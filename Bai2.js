//loop
let arr1= [1, 7, 4, 2, 3];
let arr2 = [5, 2, 6, 3, 1];
let ArrX=[];
for(let i=0;i<arr1.length;++i){
    if(arr2.includes(arr1[i])){
        ArrX.push(arr1[i]);
    }
}
console.log(ArrX);

//Filter
let arr3 = [1, 7, 4, 2, 3];
let arr4 = [5, 2, 6, 3, 1];

let Arr_Deliver = arr3.filter( e => arr4.indexOf(e) != -1);
console.log(Arr_Deliver);

//Reduce

let arr5 = [1, 7, 4, 2, 3];
let arr6 = [5, 2, 6, 3, 1];

let Arr_Deliver1 = arr5.reduce( (Array_O , e) =>{
    if(arr6.includes(e)){
        Array_O.push(e)
    }
    return Array_O;
},[]);

console.log(Arr_Deliver1);

//Set
let arr7 = [1, 7, 4, 2, 3];
let arr8 = [5, 2, 6, 3, 1];

let Arr_Set = new Set(arr7);
let Arr_Deliver2 = arr8.filter(e => Arr_Set.has(e));
Arr_Deliver2.sort((a,b)=>a-b);
console.log(Arr_Deliver2);