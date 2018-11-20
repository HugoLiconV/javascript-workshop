# Loop Structures

Loops are a building block for all programming languages. Loops can execute a block of code a number of times. Each loop is normally refered to as an **iteration** in programming languages.

A loop usually has one or more of the following features:

- A **counter**, which is set initially with a certain value.
- A **condition** which determines if the loop starts or stops.
- An **iterator** which is a statement that is executed after every iteration.

Out of these three the only necessary one to be able to create a loop is a **condition** to determine to continue with the iterations.

## `for` Loop

The most common type of loop is the **for loop**. Let's take a look at the general syntax for a **for loop**.

```
for (initializer; exit-condition; final-expression) {
    // code to run
}
```

Here we have:

1. The keyword **`for`**, followed by some parentheses.
2. Inside the parentheses we have three items, separated by semi-colons:
    1. An **`initializer`** — this is usually a variable set to a number, which is incremented to count the number of times the loop has run.
    2. An **`exit condition`** — as mentioned before, this defines when the loop should stop looping.
    3. A **`final expression`** — this is always evaluated (or run) each time the loop has gone through a full iteration.
3. Some curly braces that contain a block of code — this code will be run each time the loop iterates.

Let's look at a real example so we can visualize what these do more clearly.

```javascript
var cars = ["Nissan", "Mazda", "Toyota"];

for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
console.log("DONE!");
```

What is this block of code going to do?

1. Declare a variable to which we're going to assign an array of 3 string elements.
2. Start an iteration in which we are going to declare the initial value of the **`i`** variable to `0`;
3. Run the `exit condition` and see if it returns a true or false value. In this case it's going to check if the value of `i` is less than the length of elements.
4. Run the code inside the brackets, in which we are going to print out the value of the array with the index of `i`. This is totally common not just in JavaScript but in most programming languages.
5. After all stements inside the code block are executed, we run the `final expression` in which we are going to increment the value of `i` by `1`.
6. We are going to again run the `exit condition` expression and see if it returns a `true` or `false` value. If true we return to step `4`.
7. If the `exit condition` ever returns `false` we are going to exit the `for` loop and continue with the rest of the code.

## `while`

For loops are not the only type of loop available. Another very common loop is the **`while`** loop.

Let's take a look at the while loop's syntax:

```
while (exit-condition) {
  // code to run

  final-expression
}
```

The while loop works very similar to the for loop, but in this case we don't have an explicit **initializer** or **final expression**. The while loop dependends totally in that in our code block we are going to have some changes in **state** that eventually change the exit-condition.

If we do not do it and the initial `exit condition` results in a `true` value, the while loop is going to continue to run forever until we stop it by force.

Let's check an example that does the same as the `for` loop example:

```javascript
var i = 0;
var cars = ["Nissan", "Mazda", "Toyota"];
while (i < cars.length) {
  console.log(cars[i]);
  i++;
}
console.log("DONE!");
```
