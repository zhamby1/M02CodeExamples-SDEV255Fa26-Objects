//object literals (objects) organize data about a singular item, The object uses key-value pairs (keys are the name of a property and the values being what they equal) to organize data
//Think of a person..a person has multiple characteristics like name, age, address, etc...

//we can use objects to describe pieces of data about something, or multiple characteristics about something
//we can also take many objects and store them in an array or have arrays in or objects

//create an empty object
let Person = {}

//add data to Person
Person = {
    //propery : value
    name : "Zach",
    age : 41,
    birth_city : "Paducah"
}

//we can add a second person, lets just initialize this time (add data while declaring)
let Person2 = {
    name : "Sam",
    age : 30,
    birth_city: "Terre Haute"
}

//accessing data inside of an object is easy
//we say the name of the object and use dot notation (.) to access the object's properties by saying object.properties
console.log(Person.name)
console.log(Person.age)
console.log(Person.birth_city)

console.log(Person2.name)
console.log(Person2.age)
console.log(Person2.birth_city)

//change the data of an object
Person.name = "Tim"
console.log(Person.name)