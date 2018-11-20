# Variables

A variable is a name that can reference a specific value. Variables are declared using `var` followed by the variable's name.
Here's an example:

     > var example;

The above variable is declared, but it isn't defined (it does not yet reference a specific value).

Here's an example of defining a variable, making it reference a specific value:

    > var example = 'some text';

A variable is declared using var and uses the equals sign to define the value that it references. This is colloquially known as "Making a variable equal a value".
We can see this value in the console with:

    > console.log(example);
    some string

We can also give an existing variable a new value at any point after it’s declared.

    > var os = 'Windows';
    > os = 'MacOS';
    > os;
    MacOS

Variable names are pretty flexible as long as you follow a few rules:

- Start with a letter, underscore (`_`), or dollar sign (`$`).
- After the first letter, you can use numbers, as well as letters, underscores, or dollar signs.
- Don’t use any of JavaScript’s reserved keywords.

Variable names are case-sensitive, so `myVar`, `MyVar`, and `myvar` are all different variables.
