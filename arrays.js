let myArray = [["Cat", 29], ["Dog", 6]];

console.log('Array is ' + myArray);

myArray.push(["Duck", 1]);

console.log('Updated array is ' + myArray);


let removedItem = myArray.shift();

console.log('RemovedItem - ' + removedItem);


myArray.unshift(["Monkey", 25]);

console.log('Updated array is ' + myArray);