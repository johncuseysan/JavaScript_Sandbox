# JavaScript Sandbox

# Terms
* NaN - Not-a-Number

# Number

## parseFloat()     

The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.

* If the argument's first character can't be converted to a number (it's not any of the above characters), parseFloat returns NaN.

## isFinite()    

The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.

# Object

## Define and Adding Items to JavaScript Object

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

## Define and Adding Items to Set

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
