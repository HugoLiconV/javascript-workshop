# Strings

In the last example we created a variable with the value of `some text`. The ***type*** of this variable is a **String**.

A string is a sequence of characters. A character is, roughly speaking, a written symbol. Examples of characters are letters, numbers, punctuation marks, and spaces.

String values are surrounded by either single or double quotation marks.

     'this is a string'
     "this is also a string"

Strings can be strung together. Try this in your node console:

    > 'Hi There' + ' User'

You should get back:

    'Hi There User'

You can also multiply strings with a number:

    > 'Hello' * 3
    'HelloHelloHello

Strings have various **properties** and **methods** on them. To see some of them let's create a string variable:

    > var name = 'my name';

To see your name in uppercase letters, simply type:

    > name.toUpperCase();
    'MY NAME'

You just used the `toUpperCase` **method** on your string! 
A method (like `toUpperCase()`) is a sequence of instructions that JavaScript has to perform on a given **object** ("user") once you call it.

If you want to know the number of letters contained in your name, there is a property for that!

    > name.length
    7

The above code will return a number for the total number of characters in the string variable.

We'll look more in depth into methods and properties later on 😉.
