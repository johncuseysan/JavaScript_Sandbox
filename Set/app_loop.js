console.log("PROGRAM STARTED");

const mySet1 = new Set();

mySet1.add("name");
mySet1.add("age");

for (const [key, value] of mySet1.entries()) {
    console.log("Key: " + key + " Value: " + value);
}

console.log("PROGRAM ENDED");