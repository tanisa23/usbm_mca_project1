//difference between Push(),pop(),shift(),unshift() with proper definition and example?

//push():push() is used to add an element at the end of an Array.
// example:
let city=["keonjhar","bhubaneswar","cuttack","baleswore"];
console.log(city);
let cityadd="jajpur";
city.push(cityadd);
console.log(city);

//pop():pop() is used to delete an element from the end of an array.
let alphabet=["a","b","c","d"];
console.log(alphabet);
alphabet.pop(alphabet);
console.log(alphabet);

//shift():shift() is uesd to delete the first element of an array and returns the array.
let fruits=["apple","mango","pineapple","lichi"];
console.log(fruits);
fruits.shift(fruits);
console.log(fruits);

//unshift():shift() is used to add element in the beginning of an array and returns the array.
let colors=["red","pink","black","white","blue"];
console.log(colors);
colors.unshift("purple");
console.log(colors);
