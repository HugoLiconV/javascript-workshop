# Objects

An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects.)

In JavaScript, most things are objects, and we have been using them already throughout other lessons!

We have already seen that variables are container for data values. Objects can be assigned to variables, and can also be used as a container for data and common functionality.

 JavaScript's simple types are:

- numbers (has object-like methods but they are immutable)
- strings (has object-like methods but they are immutable)
- booleans (has object-like methods but they are immutable)
- null
- undefined

 All other values are objects including [arrays](#arrays) and [functions](#functions).

 We can declare an object like this:

```javascript
var course = {
    name: "Programming 101",
    start: 17,
    end: 20
};
```

So what's going on here?

- We open up a pair of curly braces `{}` to declare an **object literal** - we've literally written out the object contents as we've come to create it.
- We have added **members** to the object, each of which has a **name** or **key** and a **value**.
- We have assigned this object to a **variable**, in this case called **`course`**.
- Each **name/value pair** must be separated by a comma, and the **name** and **value** are separated by a colon.

The **value** of an object **member** can be pretty much anything; numbers, strings, arrays, functions and even other objects.

## Properties and Methods

Let's take a look at an example object:

```javascript
var car = {
    color: "red",
    name: "Chevy",
    km: 12345678,
    owners: ["Christian", "Paola"],
    parts: {
        motor: "V8",
        wheels: 4
    }
    run: function () {
        return "GO FAST!";
    },
    start: function () {
        return "Start " + this.name + " START!";
    }
};
```

In this last object we have two strings, a number, one array, one **nested** object and two functions.

The first four items are data items and are referred as the object's **properties**.
The last two items are functions that allow the object to do something with that data, and are referred to as the object's **methods**.

 A **property** of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects.

 A **method** is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object.

## Using `this` inside of a method

 You may have noticed the **`this`** keyword used inside the `start` method. `this` is a special keyword, that you can use within a method to refer to the current object.

 ```javascript
var microwave = {
    time: 20,
    cook: function () {
        return this.time + " seconds pending"; // Value: "20 seconds pending"
    }
};
 ```

 The `this` keyword is an [entire subject](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) in and of itself, but for now, when used inside of a **method**,you should think of it as a value that is bound to the object that contains the method.

## Getting Members

After all of this you may be left wondering how can I access all these properties and methods inside of an object. There are two ways we can do this, **dot notation** and **bracket notation**.

### Dot Notation

To use dot notation we specify the name of the object, write a dot `.`, then the item we want to access - this can be the name of a simple property, an item of an array property, or a call to one of the object's methods, for example:

 ```javascript
var course = {
    name: "Programming 101",
    start: 17,
    end: 20,
    classDays: ["monday", "tuesday", "friday"],
    study: function () {
        if (this.end < 24) {
            return "Study some more!";
        }
        else {
            return "Go get some sleep";
        }
    }
};

console.log(course.name); // Result: "Programming 101"
console.log(course.classDays[1]); // Result: "tuesday"
console.log(course.study()); // Result: "Study some more!"
```

We can also use notation on nested members that also have their own members.

```javascript
var car = {
    color: "red",
    name: "Chevy",
    km: 12345678,
    owners: ["Christian", "Paola"],
    parts: {
        motor: "V8",
        wheels: 4,
        check: function () {
            return "all good!";
        }
    }
};

console.log(car.parts.motor); // Result: "V8"
console.log(car.parts.check()); // Result: "all good!"
```

### Bracket Notation

Using bracket notation is very similar to using dot notation. We specify the **key** inside a string inside square brackets `[""]`.

 ```javascript
var course = {
    name: "Programming 101",
    start: 17,
    end: 20,
    classDays: ["monday", "tuesday", "friday"],
    study: function () {
        if (this.end < 24) {
            return "Study some more!";
        }
        else {
            return "Go get some sleep";
        }
    }
};

console.log(course["start"]); // Result: 17
console.log(course["classDays"][0]); // Result: "monday"
console.log(course["study"]()) // Result: "Study some more!"
```

This looks very similar to how you access the items in an array, and it is basically the same thing — instead of using an index number to select an item, you are using the key associated with each member's value.

## Setting Members

So far we've only looked at retrieving (or getting) object members — you can also set (update) the value of object members by simply declaring the member you want to set (using dot or bracket notation), like this:

```javascript
var person = {
    age: 16,
    name: "Gabriel"
};

person.age = 30;
person["name"] = "Daniel";
```

Setting members doesn't just stop at updating the values of existing properties and methods; you can also create completely new members.

```javascript
person["height"] = 1.75;
person.sayName = function () {
    return "Hi! My name is " + this.name;
}
```

Try reading these properties and adding others!

## Constructor Functions

There are cases in which we want to be able to generalize an object and be able to constructor many **instances** of objects based on some general methods and properties. In this case we can use special function called **constructor functions**.

Constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.

When a new object is created from a constructor function, its core functionality is linked to via a reference called a **prototype chain** (We'll take a deeper dive into `prototype` later on in the course.)

Using only our knowledge of objects and functions we can create a constructor function.

```javascript
function createPerson(name) {
    var person = {};
    person.name = name;
    person.sayName = function () {
        return "Hi! My name is " + this.name;
    };
    return person;
}
```

Let's walk through this function.

    var person = {}
We are creating a local variable inside the function, which in this case is a blank object.

    person.name = name;
    person.sayName = function () {
        return "Hi! My name is " + this.name;
    }
We are adding two members to the `person` object, one property and one method. The `name` property is getting assigned the value of the `name` parameter which was passed into the `createPerson` function.

    return person;
We are returning the `person` variable at the end of the function. On every execution of the function it should return a new object (even if the same `name` parameter is passed in).

We can use this function like this:

```javascript
var person1 = createPerson("Daniela");
/*
    {
        name: "Daniela",
        sayName: function () {
            return "Hi! My name is " + this.name;
        }
    }
*/
var person2 = createPerson("Gabriel");
/*
    {
        name: "Gabriel",
        sayName: function () {
            return "Hi! My name is " + this.name;
        }
    }
*/
console.log(person1.sayName); // Result: "Hi! My name is Daniela"
console.log(person2.sayName); // Result: "Hi! My name is Gabriel"
```
