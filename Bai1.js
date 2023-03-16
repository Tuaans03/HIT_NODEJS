
///loop

let Arr = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];
let SortArr = Arr.sort((a,b)=>b-a);
let newArr = [];
for(let i=0;i<SortArr.length;++i){
    if(SortArr[i]!=SortArr[i+1]){
        newArr.push(SortArr[i])
    }
}
console.log(newArr);

// Filter
let Arr1 = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];

var uniqueArray = Arr1.filter( (value,index,ArrO) =>{
        return  ArrO.indexOf(value) == index;
})

let SortArr1 = uniqueArray.sort( (a,b)=>b-a);
console.log(SortArr1);

//Set
 let Arr2 =[1, 7, 4, 2, 3, 1, 2, 2, 9, 3];
 let SetArr2 = new Set(Arr2);
 let Arr2_Fake = Array.from(SetArr2)
 let SortArr2 = Arr2_Fake.sort((a,b)=>b-a);
 console.log(Arr2_Fake);


 //Reduce

 let Arr4 = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];
 let Sort_Arr4 = Arr.reduce( (uniqueArray4,value) =>{
    if(!uniqueArray4.includes(value)){
        uniqueArray4.push(value);
    }
    return uniqueArray4;

 },[]).sort( (a,b)=>b-a);

 console.log(Sort_Arr4);