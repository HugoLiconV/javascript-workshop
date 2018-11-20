# Conditionals

Conditionals control behavior in JavaScript and determine whether or not pieces of code can run.

## `if`

The most common type of conditional is the if statement, which only runs if the condition enclosed in parentheses () is [truthy](#boolean).

```javascript
var outcome = ''
if (10 > 5) {
    outcome = "inside if block";
}
console.log(outcome) // Result: "inside if block"
```

(Note: You can use `shift+enter` to enter multiple lines into the console.)

Here’s what’s happening in the example above:

- The keyword `if` tells JavaScript to start the conditional statement.
- `(10 > 5)` is the condition to test, which in this case is true — 10 is greater than 5.
- The part contained inside curly braces `{}` is the block of code to run.
- Because the condition passes, the variable `outcome` is assigned the value `"inside if block"`.

The condition to test can be any boolean value that will be evaluated for a `truthy` value.

- `'hello'.length > 0`
- `20 > 10`
- `true`
- `cake' === 'cake'`

Will all evaluate to true and if placed inside the `if` conditional will make the body of the if statement (the block inside the curly braces) run.

## `else`

You can extend an `if` statement with an `else` statement, which adds another block to run when the if conditional doesn’t pass.

```javascript
var outcome = ''
if ("cat" === "dog") {
    outcome = "if block";
} else {
    outcome = "else block";
}
console.log(outcome) // Result: "inside else block"
```

## `else if`

You can also extend an `if` statement with an `else if` statement, which adds another conditional with its own block.

```javascript
var outcome = "";
var favoriteAnimal = "dog"
if (favoriteAnimal === "cat") {
    outcome = "if block";
} else if (favoriteAnimal === "dog") {
    outcome = "else if block";
} else {
    outcome = "else block";
}
console.log(outcome) // Result: "else if block"
```

It will first evaluate the first `if` conditional and after it fails will attempt to evaluate the `if else` statement.
Once here it will find a `truthy` evaluation and will run the code inside the `else if` block.
Since it successfully evaluated a condition it will not run the `else` block.

You can use multiple if else conditionals, but note that only the first else if block runs. JavaScript skips any remaining conditionals after it runs the first one that passes.

```javascript
var outcome = "";
var favoriteAnimal = "dog"
if (favoriteAnimal === "cat") {
    outcome = "if block";
} else if (favoriteAnimal === "dog") {
    outcome = "first if else block";
} else if (favoriteAnimal === "dog") {
      outcome = "second if else block";
  } else {
    outcome = "else block";
}
console.log(outcome); // Result: "first if else block"
```

The block of code should print out `"first if else block"` even though the second `if else` conditional also evaluates to true.

## nesting `if...else`

Sometimes a single conditional isn't enough for the logic we are trying to build. For that we can nest `if, else, else-if` statements.

```javascript
var weather = "sunny";
var temperature = 28;
var forecast;
if (weather === "sunny") {
  if (temperature > 30) {
    forecast = "It's going to be really hot outside, don't forget you're sunscreen!"
  }
  else if (temperature <= 30 && temprature > 20){
    forecast = "It's nice and sunny today, try to go outside!"
  }
  else {
    forecast = "It's going to be chilly today, don't forget a sweater!"
  }
}
console.log(forecast); // Result: "It's nice and sunny today, try to go outside!"
```

Even though the code all works together, each `if else` statement works completely independently of the other one.

## `switch`

There are cases where you want to compare a single value to different options. This is possible to do through multiple `if...else` statements though it can quickly get difficult to read and mantain.

    if (animal === "dog") {
    ...
    } else if (animal === "cat") {
    ...
    } else if (animal === "parrot") {
    ...
    }
    ...

`switch` statements can be your friend in this case, they take a single expression/value as an input and compare it to a number of choices associated with a value, executing the corresponding code when a match is found.

    switch (pet) {
        case "dog":
            ... // code to run
            break;
        case "cat":
            ...
            break;
        case "parrot":
            ...
            break;
        default:
            ... // Run this code if no option matches
    }

This is how it works:

- The switch **expression** is evaluated once.
- The value of the expression is compared with the value of each case.
- If there is a match, the associated block of code is executed.

When JavaScript reaches a **break** keyword, it breaks out of the switch block. This will stop the execution of more code and case testing inside the block.

The **default** keyword specifies the code to run if there is no case match:

```javascript
switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
```

Here we can see that if the evaluated expression does not match any case, the `text` value is going to equal `"Looking forward to the Weekend"`.
