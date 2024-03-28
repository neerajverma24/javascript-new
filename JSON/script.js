// Topic : JavaScript JSON ====================================================

// JSON string format to an object form
let name1 = '{"name" : "Neeraj", "age" : "24"}'

let jsonString1 = JSON.parse(name1);

console.log(jsonString1)         // output :  {name: 'Neeraj', age: '24'}

console.log(jsonString1.age)     // output : 24


// JSON converting JSON.parse() i.e in the form of object into JSON.stringify() i.e in the string form as written in the above

const jsonObj = { name: "Neeraj", age: 24 };

const jsonString2 = JSON.stringify(jsonObj)

console.log(jsonString2)   // output  : {"name":"Neeraj","age":24}



// Fetching data from JSON array format
const jsonData = {
    "employee": ["Neeraj", "Deepak", "Rahul", "Sanjay"]
}

console.log(jsonData.employee[1])  // output : Deepak  


// Fetching Data from Boolean

const a = '{ "sale": true }';

const b = JSON.parse(a);
console.log(b.sale);    // output : true



