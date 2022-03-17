// Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array.


var A =  [9,2,3,2,6,6];
function findFirstUnique(A) {


    var returnNumber = -1;
    var tempArray = new Array();;

   for(i=0; i < A.length; i++){

      var newIndex = A[i];
     if( tempArray[newIndex] === undefined){
        tempArray[newIndex] = 1;
     }
     else{
        tempArray[newIndex] += 1;
     }
    }
   for(j = 0; j < A.length; j++){
     if(tempArray[A[j]] == 1){
       returnNumber = A[j];
       
     }
   }
    return returnNumber;
}

console.log(findFirstUnique(A))

// Implement a function rightRotate(arr,n) that will rotate the given array by n.

const arr = [1,2,3,4,5];
const rotateByOne = arr => {
   for(let i = 0; i < arr.length-1; i++){
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
   };
}
Array.prototype.rotateBy = function(n){
const { length: l } = this;
   if(n >= l){
       return;
   };
   for(let i = 0; i < n; i++){
       rotateByOne(this);
   };
};
const a = [1,2,3,4,5];
a.rotateBy(3);
console.log(a); 