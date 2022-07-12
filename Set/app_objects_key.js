console.log("PROGRAM STARTED");
/*
    In this program I am adding the JavaScripts Objects Key to Set
*/
const mySet1 = new Set()

mySet1.add("name")  
mySet1.add("age") 
mySet1.add("name") // "name" is not unique so should NOT add to the mySet1

var myStudent1 =     {
    name : "Pete Johnson",
    age : 18,
    dept : "CSE",
    score : 90
};

// Adding the keys from myStudents1 to mySet1
// 
for (const key in myStudent1) {
    mySet1.add(key);
}

// Look at the final set of mySet1 

for (const [key, value] of mySet1.entries()) {
    console.log("Key: " + key + " Value: " + value);
}

console.log("PROGRAM ENDED");