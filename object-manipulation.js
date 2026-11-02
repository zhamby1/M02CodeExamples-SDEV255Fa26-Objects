//we can also do other cool things with objects, like giving them built in functions
//these are also called methods, and the only difference between a method and a function is a method requires an object

let rectangle = {
    width : 5,
    height : 8,


    //we can add functions/methods to do something
    //create a method that calculates area of this object
    area_calc(){
        //when making a method we dont have to use the function keyword because that is assumed with the ()
        //there is a new keyword we need to know..it is called this
        //this - this particular objects properties
        //area of rect = width * height
        return this.width * this.height

    }
}

//you can also add a function or method to an object outside of that object
rectangle.getPerim = function(){
    return (this.height * 2) + (this.width * 2)
}

my_rectangle_area = rectangle.area_calc()
console.log(my_rectangle_area)
my_rectangle_perim = rectangle.getPerim()
console.log(my_rectangle_perim)


//objects can also contain almost any type of data inside of it
//lets combine our knowledge of this and making methods to make something useful

//lets make a bank account object with a list of authorized users that can access the bank account
let BankAccount = {
    id: 546841520,
    name : "Zach Hamby",
    balance : 150.00,
    //we can use arrays in our object
    authorized_users : ["Beckett","Iris","Becky"],

    //this maybe a useful function that shows all the authorized users
    show_auth_users(){
        for(let user of this.authorized_users){
            console.log(user)
        }
    }
}

console.log(BankAccount.show_auth_users())


