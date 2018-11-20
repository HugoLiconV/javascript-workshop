# Operators

In previous examples we have done **operations** on values. These operations use 

Operators are the symbols between values that allow different operations like addition, subtraction, multiplication, and more.

Operators allow us to assign values, compare values, perform arithmetic operations, and more.

Let's take a look at the different types of operators that JavaScript gives us!

## Arithmetic Operators

Arithmetic operators take numerical values, either literals (such as `5`, `10.4`) or variables, as their operands and return a single numerical value.

JavaScript contains the standard arithmetic operators such as addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`), plus others.

    > 5 * 5
    25

We can use variables mixed with literals

    > var six = 6
    > six / 2
    3

JavaScript expressions follow a **order of operation** or **operator precedence**.
Operator precedence describes the order in which operations are performed when an expression is evaluated. 
Operations with a higher precedence are performed before those with a lower precedence. 
For example, multiplication is performed before addition.

    > 1 + 100 * 5
    501

For more control over the order of operations we can use the **grouping** operator.

Group ***( )*** operator groups other values and operations. 

Code located between parentheses evaluates first as JavaScript solves each operation moving from left to right.
Adding the grouping operator to the previous example causes 1 + 100 to evaluate first.

    > (1 + 100) * 5
    505

Click [here](https://docs.microsoft.com/en-us/scripting/JavaScript/operator-subtractprecedence-JavaScript) if you want to read more about operation precedence.

 JavaScript also provides us with some other arithmetic operators, [check them out](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) and try them out in the console.

## Assignment Operators

Assignment operators are used to assign values to JavaScript variables.

They assign the value on the right of the operand to one on the left.

    > var aValue = 'hello!'

You might have noticed that we have already been using this operator for a lot of exercises!

Besides the normal assignment operator we have compound assignment operators which apply the operation result to the variable that's being assigned. 

    > var add = 7;
    > add += 3;
    10

Here we can see that we that we are adding the value of `3` to the variable `add` contain the value `7`.
This would be equal to:

    > var add = 7;
    > add = add + 3;
    10

You can check out the full list of compound alignment operators [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators).

## Comparison Operators

There are two main types of value comparison that you will need to make in your JS programs: equality and relational. 
The result of any comparison is a boolean value (true or false), regardless of what value types are compared.

The values to compare can be numerical, string, logical, or object values.

Before we go into how to compare values, let's talk a bit about *coercion*.

### Coercion

*Type coercion* means that when the operands of an operator are different types, one of them will be converted to an "equivalent" value of the others type. 

For instance, if we try to add a string to a number, it will try to convert the values into types that can be valid for the operation.

    > 'string' + 5
    string5
    > '42' * 2
    84

As you can see this can lead to some surprising results sometimes which is why we got to be careful with operations between values of different types.
Though type coercion is thought to be a "bad" part of JavaScript, knowing how type coercion behaves can remove most of the "surprising" behavior usually associated with it.

Here's more on info on how [type coercion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) works in JavaScript.

### Equality Operators

There are four equality operators: ==, ===, !=, and !==.

We can compare two values like this:

    > 2 === 2
    true
    > 'apple' !== 'orange'
    true
    > 'car' === 'bike'
    false

As we could see the `!=` and `!==` inequality operator is the counterpart of an equality operator.

How about `==` vs `===`? The equal operator (`==`) checks if the two values are equal with *type coercion* allowed, while the strict equal operator checks for equal values without allowing coercion.
Knowing this we can see how they differ with an example:

    > 10 == '10'
    true
    > 10 === '10'
    false

As you can see the `===` operator doesn't allow type coercion to take place and returns a `false` value on a comparison when comparing a string to a number.

### Relational Operators

Relational operators are typically used to compare number values. There are also 4 relational operators: `<` (less than), `>` (greater than), `<=` (less or equal to), `>=` (greater or equal to).

Relational operators attempt to evaluate operands into numbers, and do a numerical comparison on them.

    > 2 < 4
    true
    > 100 < 99
    false
    > 100 <= 100
    true

## Logical Operators

Logical operators are typically used with Boolean values. When they are, they return a Boolean value.

The three logical operators are: `&&` (logical AND), `||` (logical OR) and `!` (logical NOT).

    > true && false;
    false
    > true || false;
    true
    > !true;
    false

Since we previously saw that relational operators return boolean values, we can use them together with logical operators!

    > (5 > 4) && (10 !== 9);
    true
    > var name = 'Juan';
    > var age = 17;
    > name === 'John' || age > 18;
    false

The `&&` and `||` operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.

    > 'hello!' || false
    'hello!'
    > 0 && true
    0

These values are evaluated for *falsy* or *truthy* values on boolean operations. 
So what exactly are these *falsy* and *truthy* values?

### Truthy & Falsy

A "truthy" value is a value that translates to `true` when evaluated in a boolean context.
On the opposite end, a "falsy" value evaluates to `false` in a boolean context.

The specific list of "falsy" values in JavaScript is as follows:

- `""` (empty string)
- `0`, `-0`, `NaN` (invalid number)
- `null`
- `undefined`
- `false`

Any value that's not on this "falsy" list is "truthy." Here are some examples of those:

> !!"hello" // We use the double negation symbol to evaluate as a boolean
true
> !!42
true
> !!true
true
