// ASSIGNMENT - Object , Array and Function - THURSDAY 9 TO 12 
var friend1 = {
    firstName: "Warda",
    lastName: "Waseem",
    id: 476
};
var friend2 = {
    firstName: "Owais",
    lastName: "Khan",
    id: 455
};
var friend3 = {
    firstName: "Urooj",
    lastName: "Khizra",
    id: 646
};
var people = {
    friend: [friend1, friend2, friend3]
};
console.log(people);
/*
{
  friend: [
    { firstName: 'Warda', lastName: 'Waseem', id: 476 },
    { firstName: 'Owais', lastName: 'Khan', id: 455 },
    { firstName: 'Urooj', lastName: 'Khizra', id: 646 }
  ]
} */
/* Assignment 2:Manipulating an Array: Rearranging Words
Objective:
Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
Steps:
1. Scrambled Array:
o Start with an array of elements in a scrambled order, like: const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
• Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or create temporary arrays).
• Output the Result:
• Use join() to combine elements back into a single string: "I am a student of GIAIC". */
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2); // student of am a GIAIC I
scrambledArray.pop(); // student of am a GIAIC
scrambledArray.unshift("I"); // I student of am a GIAIC
scrambledArray.splice(3, 2); // I student of GIAIC
scrambledArray.splice(1, 0, "am", "a"); // I student of GIAIC
console.log(scrambledArray.join(" "));
var product1 = {
    name: "Laptop",
    model: "X-270",
    cost: 60000,
    quantity: 21
};
var product2 = {
    name: "Smartphone",
    model: "Samsung Galaxy A20",
    cost: 80000,
    quantity: 13
};
var product3 = {
    name: "Headphones",
    model: "WH-1000XM4",
    cost: 2500,
    quantity: 43
};
var inventory = {
    Product: [product1, product2, product3]
};
console.log("Quantity of the third product:", inventory.Product[2].quantity);
// Quantity of the third product: 43
var product4 = {
    name: "Adidas",
    model: "2022",
    cost: 7000,
    quantity: 11,
};
inventory.Product.push(product4);
console.log("Name of the fourth product:", inventory.Product[3].name);
// Name of the fourth product: Adidas
console.log("Cost of the first product:", inventory.Product[0].cost);
var students = [
    { name: "Warda", isSenior: false, hasCompletedAssignments: true },
    { name: "Maham", isSenior: false, hasCompletedAssignments: false },
    { name: "Owais", isSenior: true, hasCompletedAssignments: false },
    { name: "Fatima", isSenior: false, hasCompletedAssignments: true },
    { name: "Waseem", isSenior: true, hasCompletedAssignments: true },
];
console.log(students);
/*
[
{ name: 'Warda', isSenior: false, hasCompletedAssignments: true },
{ name: 'Maham', isSenior: false, hasCompletedAssignments: false },
{ name: 'Owais', isSenior: true, hasCompletedAssignments: false },
{ name: 'Fatima', isSenior: false, hasCompletedAssignments: true },
{ name: 'Waseem', isSenior: true, hasCompletedAssignments: true }
] */
var findSenior = function (students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments === true; });
};
console.log(findSenior(students)); // Senior students with assignment 
// [ { name: 'Waseem', isSenior: true, hasCompletedAssignments: true } ]  
var updatedList = function (students) {
    return students.filter(function (student) { return student.hasCompletedAssignments === true; });
};
console.log("Updated Class List :", updatedList(students)); // Class list update
/*
Updated Class List : [
{ name: 'Warda', isSenior: false, hasCompletedAssignments: true },
{ name: 'Fatima', isSenior: false, hasCompletedAssignments: true },
{ name: 'Waseem', isSenior: true, hasCompletedAssignments: true }
] */ 
