// JavaScript_function2
// Q1. Write a JavaScript function that takes an array and a value and search that value in the given array. Write a function which takes two arguments - an array and a value. If the value provided in the argument is found in the array, the function should return the position of the element in an array. If the element is not found, the function should return "-1".

function sort(arr,value)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==value)
        {
            return i;
        }
    }
    return -1;



}

console.log(sort([5,4,1,3],2))

// Q2. Create 2 div elements one having id=”root” and another having class=”blue-white” and have some header elements inside.

// create 2

// tags one having no attributes to it and another having class=”blue-white” and have some text inside.

// I) change the text color of the element with id=”root” to red on mouseover event.

document.getElementById("root").addEventListener("mouseover", colorChange);

function colorChange(){
    document.getElementById("root").style.color = "red";
    document.getElementById("root").removeEventListener("mouseleave", colorChange);
    
}

// ii) for the class=”blue-white” set the CSS properties as background color blue and text color white on mouseover event.

document.getElementById("blue-white").addEventListener("mouseover", function(){
    this.style.background = "blue"; //how to make text color white?
    this.style.color = "white";
});

// iii) for p tag which doesn't have any attributes, change the font size to 50px on mouseover event;

document.querySelector("p").addEventListener("mouseover", function(){
    this.style.fontSize = "40px";
});