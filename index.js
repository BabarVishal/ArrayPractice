const myArray = ["Vishal", "Dinesh", "Ganesh"];
console.log(myArray);

const myNewArray = [
    "Vishal",
    "Dinesh",
    "Ganesh"
]
   
const myNumber = [1, 2, 3, 4, 5];
let length = myNumber.length;
console.log(length);

 myNumber.toString();

 myNumber.at(2) //Get a third element in array

 myNumber.join("*"); // join the array like this 1*2*3*4*5

myNumber.pop(); // remove the last element form array 

 myNumber.push("Vishal"); // add new element to the array in last

 myNumber.shift("Vishal") // remove the fisth element in array

 myNumber.unshift("Vishal")// add the element in fisth in array

 const fisthNumber = [1,2,3,4,5];
 const secondeNumber = [6,7,8,9,10];
  let allNumber = fisthNumber.concat(secondeNumber);  //add both the array in one
  console.log(allNumber);
