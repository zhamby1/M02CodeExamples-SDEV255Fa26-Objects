//we can also stick multiple objects inside of an array
//this is useful when we need to do the same action or organize our data for objects that have the same properties

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

let people = []
people.push(Person)
people.push(Person2)

//grab a list of all the peoples properties/information
for(let person of people){
    console.log(person.name)
    console.log(person.age)
    console.log(person.birth_city)
}

