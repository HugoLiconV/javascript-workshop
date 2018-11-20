# Arrays

Arrays are container-like values that can hold other values. The values inside an array are called _elements_.
Arrays are used to store multiple values in a single variable.

The easiest way to create an array is to use an **array literal**, which are the enclosing brackets `[]`.
Inside the brackets we place the values we want to store inside the array separated by commas.

```javascript
var cars = ["Toyota", "Chevrolet", "Nissan"];
```

Array elements don’t all have to be the same type of value. Elements can be any kind of JavaScript value — even other arrays.

```javascript
var values = [100, "paint", false, [2.5, "brush"]];
```

### Accessing Array Elements

To access one of the elements inside an array, you’ll need to use the brackets and a number like this: `myArray[3]`.
This number is called the element `index`.
JavaScript arrays begin with an index value of `0`, so the first element will always be inside `[0]`.

    > var fruits = ['apple', 'orange', 'banana']
    > fruit[1]
    'orange'

## Interacting with the array

We can replace a particular element of an array by using the assignment operator of the arrays index we want to replace.

    > var favoriteColors = ['red', 'green', 'blue']
    > favoriteColors[2] = 'pink'
    > favoriteColors
    ['red', 'green', 'pink']

## Properties and Methods

Arrays contain some inherited properties and methods that can be used to interact with it.

### length

An array’s `length` property stores the number of elements inside the array.

    > ["a", "b", "c", 1, 2, 3].length;
    6

### push

An array’s `push` method adds an element to the array and returns the array’s length.

    > var people = ["miguel", "jose"]
    > people.push("jasmin")
    3
    > people
    ["miguel", "jose", "jasmin"]

### pop

An array’s pop method removes the last element in the array and returns that element’s value.

    > var planets = ["Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]
    > planets.pop()
    Pluto
    > planets
    ["Jupiter", "Saturn", "Uranus", "Neptune"]

### concat

An array’s `concat` method returns a new array that combines the values of two arrays.

    > ["tortilla chips"].concat(["salsa", "queso", "guacamole"])
    ["tortilla chips", "salsa", "queso", "guacamole"]

One thing to note is that `concat` does not modify the original array, but instead returns a new array with the merge of the two arrays.

    > var ingredients = ["salsa", "queso", "guacamole"]
    > ingredients.concat(["beans"])
    ["salsa", "queso", "guacamole", "beans"]
    > ingredients
    ["salsa", "queso", "guacamole"]

### slice

An array's `slice` method returns a new array that is a partial copy of the original array.
It uses a `begin` index and an optional `end` index.

    > var planets = ["Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]
    > planets.slice(1,3)
    ["Saturn", "Uranus", "Neptune"]

We can also not specify the `end` index and it will default to slice from the `begin` index until the last item in the array.

    > planets.slice(1)
    ["Saturn", "Uranus", "Neptune", "Pluto"]

`slice` also does not modify the original array.

    > planets
    ["Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]
