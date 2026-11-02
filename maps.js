//maps are basically written the same way as objects..in the background there is really no difference to js
//the only big difference is how you organize the data
//an object describes one item and its characteristics
//a map is basically an associative array with a key describing the field instead of an index
//think of a dictionary a list of terms and their definitions...that is like a map


let stateCapitals = {
   AR : "Little Rock",
   CO : "Denver",
   NM : "Santa Fe"
}

console.log("The capital of AR is " + stateCapitals["AR"])

let contacts = {
   Rosa: {
      phone: "303-555-4321",
      email: "rosa@gmail.com"
   },
   Dave: {
      phone: "501-533-9988",
      email: "dave@yahoo.com"
   },
   Li: {
      phone: "213-511-6758",
      email: "li@msn.com"
   }
}

console.log(contacts.Rosa.phone)

let states = Object.keys(stateCapitals);
console.log(states);          // AR,CO,NM
console.log(states.length);   // 3

// Evaluates true
if ("NM" in stateCapitals) {
   console.log("NM exists");   
}

// Remove the NM/Santa Fe pair
delete stateCapitals["NM"];

// Evaluates false
if ("NM" in stateCapitals) {
   console.log("NM exists");   
}  