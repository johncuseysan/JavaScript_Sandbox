# JavaScript Sandbox

# Object 

## Define and Items to JavaScript Object 

```JS
const Car = {type:"Fiat", model:"500", color:"white"};
```

## Loop though JavaScript Object 

```JS
for(const key in Car ){
    console.log("Key: " + key + " Value: " + Car[key]);
}
```
Output
```
Key: type Value: Fiat
Key: model Value: 500
Key: color Value: white
```

# Set

## Define and Items to Set

```JS
const mySet1 = new Set();

mySet1.add("name");
mySet1.add("age");
```
## Loop though Set

```JS
for (const [key, value] of mySet1.entries()) {
    console.log("Key: " + key + " Value: " + value);
}
```

Output
```
Key: name Value: name
Key: age Value: age
```

# References
[JavaScript - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* Object    
[How to loop through objects keys and values in Javascript?
](https://flexiple.com/loop-through-object-javascript/)
* Set   


