//primitive types copy data so it does not change when the original data changes
y = 7
x = y
console.log(x)
console.log(y)

//in primitive types - if I change y it does not affect x
console.log("*************")
y = 10
console.log(y)
console.log(x)

//objects are reference types which refer to the memory address of the orginal item
let person1 = {
    name : "Alice",
    age: 30
}

let person2 = person1

console.log("*************")
console.log(person1.name)
console.log(person1.age)

console.log(person2.name)
console.log(person2.age)

//what happens if I change person1? Will person 2 be affected?
//yes since person1 and person2 are reference types...person2s new information will reflect if person1 changes their values
person1.age = 50
console.log("*************")
console.log(person1.name)
console.log(person1.age)

console.log(person2.name)
console.log(person2.age)

