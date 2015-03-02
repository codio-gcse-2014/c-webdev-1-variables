---
title: The Basics
files: []
layout: 2-panels-tree

---
This module covers the basics of programming using Javascript. It assumes that you have already completed the module **An Introduction to Coding** but it is not essential to have completed this.

Once you have completed this module, you will have a thorough understanding of how to write code in Javscript.

If you have not already looked at the **HTML & CSS - I** course, we recommend you do so afterwards. With the basic HTML and CSS skills you will learn there, you will be able to start writing your own amazing web applications.
---
title: The semi-colon ;
files: []

---
When you look at Javascript code, you will see that many lines end with a `;`. The purpose of the `;` is to mark the end of a line and indicate that a new statement is following it. 

If your next statement in on the following line then it is not required but you will usually see it used anyway.

Take a look the the `main.js` code on the left.

## Not mandatory

```javascript
var x=0
var y=0
```

## Mandatory
If you want to combine two or more statements on a single line, which is not recommended for style reasons, then you would **have** to use a semi-colon.

```javascript
var x=0; var y=0
```

## Standard practice
In fact, in most people's code, you will see the following

```javascript
var x=0;
var y=0;
```

## Do not use ;
You will see that there are places where you should never put a `;` but this will become obvious when we deal with things like loops and if statements.

```javascript
if(x<10) {
  alert("X is less than 10");
}
```

The `if` statement may not have a `;` on it.
---
title: Variables
files: []

---
You probably already have an understanding of variables. In the next sections, we will deepen our understanding more formally.

> A variable is a named placeholder to which values are assigned and which can be referenced elsewhere in your code.

## Variable Types
Variables have types, which we'll explore now. Javascript offers the following main variables types.

| Type | Description |
|-|-|
| `string` | String variables store anything from a single character to a huge block of text. |
| `number` | Stores numbers |
| `boolean` | Boolean variables indicate a state of True or False. More on these later. |
| `null` | A special data type that means 'nothing'. |
| `undefined` | Another special data type that is similar to `null`. We'll explain this in context later. |
| `Array` | These are collections variables such as numbers `1,3,5,11,123`, strings `"Red", "Green", "Blue"` and other data types. |
| `Object` | More on these later. |

The ones we are going to concentrate on for now are `string`, `number` and `boolean`.

---
title: Naming variables
files: []

---
In Javascript, there are some hard and fast rules when it comes to giving names to variables.

- Your variable names can be anything from a single character to long words.
- You cannot use spaces
- Variable names must begin with a letter, underscore, or the $ character. Do not start a variable name with a number.
- Apart from the first character, your variables can be made up of any combination of letters, underscores, numbers, or $.
- Upper case and lower case characters are fine.
- You cannot use characters like `!@£%^&*()`.

Here are some valid examples of variable names.

```javascript
var x;
var xyz;
var _x;
var screenWidth;
var screen_width;
var $filename;
```

A common approach to naming variables is `screenWidth` or `fileName`. You should choose names that are meaningful and not overly long but there are no hard and fast rules.


---
title: Numbers
files: []

---
Let's have a play with numbers. On the left hand side, is some new code in `main.js` that shows how numbers work.

Feel free to play with the code and change numbers to see what happens. If you change anything, you will need to press the 'Reload preview' button in the preview window (the two circular arrows).

## display()
You will see we use `display()` in the code. This is a function (functions are explained soon) that simply writes text to the preview window. 

## Number types
You can create numbers really easily in various ways, all of which are used in our sample code.

The number assignments that are not so obvious if you are new to coding are

- `0xFF;` which is a hexadecimal value. If you are new to hexadecimal, we'll come to that another time.
- `8.114e+12` which is 8.14 times 10 to the power of 12.
- `1.123e-6` which is 1.123 times 10 to the power of -6.







---
title: Operators
files: []

---
Operators allow us to perform common mathematical operations on numbers and variables.

Take a look at the code on the left for examples of how operators work. Feel free to modify or add your own new statements and a `display()` line to get it to display on the screen.

## Operator evaluation order
In our `moreComplex` example you can see that we are doing several operations combined into a single statement. Javascript evaluates in the same priority you would expect if you have covered basic mathematics.

1. Parenthesis
1. Exponents
1. Multiply
1. Divide
1. Add
1. Subtract

Use of parentheses `()` is important to avoid confusion, just as it would be in maths.

## Incrementing and decrementing
Javascript offers some handy shortcuts for increasing and decreasing values.

For instance `added = added + 1;` is shorthand for `added += 1`. You can also decrement someones age by 10 like this `age -= 10;`.

In fact, you can use all operators in the same way.

| Expression	| What it does |
|-|-|
| `i++` |	Increments i by 1 (i = i + 1) |
| `i--`	| Decrements i by 1 (i = i - 1) |
| `i += n` |	Increments i by n (i = i + n) |
| `i -= n` |	Decrements i by n (i = i - n) |
| `i *= n` |	Multiplies by n (i = i * n) |
| `i /= n` |	Divides i by n (i = i / n) |
| `i %= n` |	Finds the remainder of i when divided by n (i = i % n) |

## Quirks of i++ and ++i
These opertors have interesting behavior. 

`i++` increments the value of `i` by 1 **after** the whole statement has been evaluated. Check out the code and the output on the left.

`++i` increments the value of `i` by 1 **before** the whole statement has been evaluated. 

Study the code on the left as well as the output to understand this properly. Notice how in the `++i` example, `val` is 11 and not 10. This is because `i` was incremented by 1 before the statement was evaluated.










---
title: Math functions
files: []

---
Javascript also provides a standard library of functions to help you out. Take a look at the code example on the left hand side. Feel free to modify or add to.

## Constants
Codio provides you with a set of Constants. See the code on the left for a usage example.

| Constant |	Meaning |
|-|-|
| `Math.PI` |	3.14159.... | 
| `Math.E`	| Euler's constant |
| `Math.LN2`	| Natural logarithm of 2 |
| `Math.LN10` |	Natural logarithm of 10 |
| `Math.LOG2E` |	Base 2 logarithm of E |
| `Math.LOG10E`	| Base 10 logarithm of E |
the rest!) |
| `Math.SQRT1_2` |	Square root of 1/2 |
| `Math.SQRT2` |	Square root of 2 |

## Rounding
The following numbers deal different ways of rounding numbers.

| Function	| Description |
|-|-|
| `Math.round()` | Returns a number that is rounded to the nearest integer. Rounds up if your argument is greater than or equal to .5. Rounds down if your argument is less than .5. |
| `Math.ceil()` |	Rounds up to the next highest integer regardless of what comes after the decimal point. |
| `Math.floor()` |	Rounds down to the next lowest integer regardless of what comes after the decimal point. |

## Useful functions
More useful functions. Note that these functions expect and return values in Radians, not Degrees. To convert Degrees to Radians, multiply by `(Math.pi/180)`.

| Function	| Description |
|-|-|
| `Math.abs(x)` | Returns the absolute value of x (-20 returns 20, 20 returns 20) |
| `Math.random()` | Returns a random number between 0 and 1 |
| `Math.pow(x, y)` |	Raises a number (`x`) to a specified power (`y`) |
| `Math.exp(x)`	| Raises the Euler's constant to the power of `x` |
| `Math.sqrt(x)`	| Returns the square root of x |

## Trigonometry
Standard trigonometric functions.

| Function	| Description |
|-|-|
| `Math.cos(x)` |	Returns the cosine of x |
| `Math.sin(x)` |	Returns the sine of x |
| `Math.tan(x)` |	Returns the tan of x |
| `Math.acos(x)`	| Returns the arccosine of x |
| `Math.asin(x)`	| Returns you the arcsine of x |
| `Math.atan(x)`	| Returns you the arctan of x |

## Complete reference
For a complete reference on all functions in the Math library, ]click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).




---
title: Strings
files: []

---
Strings are nothing more than bits of text. A string can contain any type of text.

Take a look at the code and you'll see a few good examples of string. Notice that they can be enclosed in single quotes `'` or double quotes `"`.

## Joining strings
As you can see in the code on the left, we can *concatenate* (a fancy word for join) strings together using the `+` sign.

```javascript
var string = "Michael" + " " + "Palin";
```

## Character escaping
You will often find yourself wanting to include characters in your string that cannot be represented as text or conflict with the `"` or `'`.

For example, how would you create a string like this `A "quote"` or like this `"Michael's "quote"`? Both of these have contain `'` and/or `"`.

The answer is character escaping. The following table shows how to do this. The list has stuff that you may well not need, but things like New Line, Backslash, and Quotes are often needed.

|Code |	Output |
|-|-|
| `\0`	| the NUL character |
| `\'	 | single quote |
| `\"`	| double quote |
| `\\`	| backslash |
| `\n`	| new line |
| `\r`	| carriage return |
| `\v`	| vertical tab |
| `\t`	| tab |
| `\b`	| backspace |
| `\f`	| form feed |
| `\uXXXX`	| unicode codepoint |
| `\xXX`	| the Latin-1 character |



## String properties
Because a Javascript string is in fact an object (don't worry too much about the details of this yet), we can also get properties about our string.

The full list of properties can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) but here are teh most interesting ones presented in a less intimidating way.








---
title: String functions
files: []

---

---
title: Converting numbers to strings
files: []

---
