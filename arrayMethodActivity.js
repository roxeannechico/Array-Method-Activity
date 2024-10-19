// concat()
arr1 = ["Cecile", "Lone"];
arr2 = ["Emil", "Tobias", "Linus"];
let totalArr = arr1.concat(arr2);
console.log(totalArr.join(", "));

// push()
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

// unshift()
array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);

// pop()
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);

// shift()
array2 = [1, 2, 3];
array2.shift();
console.log(array2);

// sort()
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

// slice()
slicedFruits = ["Banana", "Orange", "Apple", "Mango"];
slicedFruits.slice(1, 3);
console.log(slicedFruits);


// splice
let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthsArray.splice(0, 2);
console.log(monthsArray);