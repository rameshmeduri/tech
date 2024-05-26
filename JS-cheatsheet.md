# Javascript cheatsheet

## JavaScript Introduction

JavaScript is a versatile, object-oriented scripting language primarily used to make webpages interactive. It's used for creating animations, handling user interactions, and much more.

### Key Concepts

- **Basic Knowledge**: You should understand the basics of the web, HTML, and have some programming experience.

- **JavaScript in the Browser**: JavaScript can manipulate the Document Object Model (DOM) of webpages, making them dynamic.

- **JavaScript on the Server**: Server-side JavaScript, like Node.js, extends its capabilities for server applications.

- **JavaScript vs. Java**: JavaScript shares some similarities with Java but is more flexible and dynamically typed.

- **ECMAScript**: JavaScript follows the ECMAScript standard, ensuring consistency across different platforms.

### Getting Started

- You only need a modern web browser to start coding in JavaScript.

- Use the browser's console to experiment with JavaScript code.

- Remember to use the `(function () { /* Your code here */ })();` pattern in the console.


## Grammar and Types

### Basics

JavaScript borrows much of its syntax from Java, C, and C++, but it has also been influenced by Awk, Perl, and Python.

JavaScript is case-sensitive and uses the Unicode character set. For example, the word "Früh" (which means "early" in German) could be used as a variable name.

    const Früh = "foobar"; 

However, the variable `früh` is not the same as `Früh` because JavaScript distinguishes between uppercase and lowercase.

In JavaScript, statements are called declarations and are separated by semicolons (;).

A semicolon is not necessary after a declaration if it is written on its own line. But if you want to have more than one statement on a line, they must be separated by semicolons.

javascriptCopy code

    let x = 42; // No semicolon required here
    let y = 13;  // No semicolon required here

**Note:** ECMAScript also has rules for automatic semicolon insertion (ASI) to terminate statements. (For more information, see the detailed reference on JavaScript's lexical grammar.)

However, it is considered good practice to always write a semicolon after a statement, even when not strictly necessary. This practice reduces the chances of errors in the code.

The source text of a JavaScript script is parsed from left to right and converted into a sequence of input elements that are tokens, control characters, line terminators, comments, or whitespace. (Spaces, tabs, and newline characters are considered whitespace).

### Comments

The syntax for comments is the same as in C++ and many other languages:

    // This is a single-line comment
    
    /* This is a
     * multi-line comment
     */

You cannot nest block comments. This usually happens when you accidentally include a `*/` sequence in your comment, which will end the comment.

    /* You cannot, however, /* nest comments */ SyntaxError */ 

In this case, you need to break the `*/` pattern. For example, by inserting a backslash:

    /* You can /* nest comments */ using backslashes */

Comments behave like whitespace and are discarded during script execution.

**Note:** You may also see a third type of comment syntax at the beginning of some JavaScript files, which looks like this: `#!/usr/bin/env node`.

This is called a hashbang comment syntax and is a special comment used to specify the path to a particular JavaScript engine that should run the script. See Hashbang comments for more details.

### Declarations

JavaScript has three types of variable declarations:

**var:** Declares a variable, optionally initializing it with a value.

**let:** Declares a local variable with block scope, optionally initializing it with a value.

**const:** Declares a block-scoped constant with a value that cannot change after initialization.

    // Declaration of a variable using 'var'
    var x = 42;
    
    // Declaration of a variable using 'let'
    let y = 13;
    
    // Declaration of a constant using 'const'
    const PI = 3.14;

### Variables

Variables are used as symbolic names for values in your application. Variable names, called identifiers, must follow certain rules.

A JavaScript identifier typically starts with a letter, underscore (_), or dollar sign ($). The subsequent characters can also be digits (0-9). Because JavaScript is case-sensitive, letters include uppercase A to Z and lowercase a to z.

You can use most Unicode letters, such as å and ü, in identifiers. You can also use Unicode escape sequences to represent characters in identifiers.

    // Examples of legal variable names
    let Number_hits = 10;
    let temp99 = "temperature";
    let $credit = 100;
    let _name = "Name";

### Variable Declaration

You can declare a variable in two ways:

Using the `var` keyword. For example, `var x = 42`. This syntax can be used to declare both local and global variables, depending on the execution context.

Using the `const` or `let` keywords. For example, `let y = 13`. This syntax is used to declare local variables with block scope.

    // Variable declaration using 'var'
    var globalVar = "I'm global";
    
    // Variable declaration using 'let'
    let localVar = "I'm local"; 

Variables must always be declared before they are used. JavaScript used to allow assignment to undeclared variables, creating an undeclared global variable. This is an error in strict mode and should be avoided altogether.

### Declaration and Initialization

In a declaration like `let x = 42`, the `let x` part is called the declaration, and the `= 42` part is called the initialization. The declaration allows the variable to be accessed later in the code without generating a reference error, while the initialization assigns a value to the variable. In `var` and `let` declarations, initialization is optional. If a variable is declared without initialization, it is assigned the value `undefined`.

    let z;
    console.log(z); // displays "undefined"

Essentially, `let x = 42` is equivalent to `let x; x = 42`.

`const` declarations always require initialization because they prohibit any form of assignment after declaration, and implicitly assigning `undefined` would be a programmer error.

    const a; // Syntax error: missing initialization in const declaration

### Variable Scope

A variable can belong to one of the following scopes:

**Global scope:** This is the default scope for all code in script mode.

**Module scope:** This is the scope for code executed in module mode.

**Function scope:** This is the scope created with a function.

In addition, variables declared with `let` or `const` can belong to an additional scope:

**Block scope:** This is the scope created with a pair of curly braces (a block).

    if (Math.random() > 0.5) {
      const blockScoped = "I'm block scoped";
    }
    console.log(blockScoped); // Reference error: blockScoped is not defined 

However, variables created with `var` do not have block scope; they are only local to the function (or global scope) in which the block resides.

    if (true) {
      var functionScoped = "I'm function scoped";
    }
    console.log(functionScoped); // Displays "I'm function scoped" 

### Variable Hoisting

Variables declared with `var` are hoisted, which means they can be referenced anywhere within their scope, even if their declaration has not been reached yet. `var` declarations are "hoisted" to the top of their containing function or global scope. However, if you access a variable before declaring it, its value will always be `undefined` because only its declaration is hoisted, not its initialization.

    console.log(x === undefined); // Displays "true"
    var x = 3;

The above code is interpreted in the same way as:

javascriptCopy code

    var x;
    console.log(x === undefined); // Displays "true"
    x = 3; 

Due to hoisting, all `var` declarations in a function should be placed as close to the top of the function as possible. This best practice increases code clarity.

Whether `let` and `const` declarations are hoisted is a matter of debate, as referencing the variable within the block before declaration always results in a reference error because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

    console.log(x); // Reference error
    const x = 3;
    console.log(y); // Reference error
    let y = 3;

Unlike `var` declarations, which hoist only the declaration but not its value, function declarations are hoisted completely: you can safely call the function anywhere within its scope.

### Global Variables

Global variables are, in fact, properties of the global object.

In web pages, the global object is `window`, so you can set and access global variables using the `window.variable` syntax. In all environments, you can use the `globalThis` variable (which is itself a global variable) to access global variables.

Therefore, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable named `phoneNumber` is declared in one document, you can reference this variable from an iframe as `parent.phoneNumber`.

### Constants

You can create a read-only named constant using the `const` keyword. The syntax for a constant identifier is the same as for any variable identifier: it must start with a letter, underscore (_), or dollar sign ($), and can contain alphabetic, numeric, or underscore characters.

    const PI = 3.14;

A constant cannot change its value through assignment, and it cannot be re-declared while the script is running. It must be initialized with a value. The scoping rules for constants are the same as those for `let` variables with block scope.

You cannot declare a constant with the same name as a function or variable in the same scope.

    // THIS WILL CAUSE AN ERROR
    function f() {}
    const f = 5;
    
    // THIS WILL ALSO CAUSE AN ERROR
    function f() {
      const g = 5;
      var g;
    }

However, `const` only prevents reassignments but does not prevent mutations. Properties of objects assigned to constants are not protected, so the following statement executes without issues:

    const MY_OBJECT = { key: "value" };
    MY_OBJECT.key = "anotherValue"; 

Additionally, the contents of an array are not protected, so the following statement executes without issues:

    const MY_ARRAY = ["HTML", "CSS"];
    MY_ARRAY.push("JAVASCRIPT");
    console.log(MY_ARRAY); // Displays ['HTML', 'CSS', 'JAVASCRIPT']

This structure follows the format you mentioned, with the title, description, and relevant code examples. If you want to add more sections or make adjustments to the format, please feel free to let me know. I'm here to help you create the cheatsheet you need.


### Data Types

JavaScript has various data types, including primitive types and one composite data type:

### Primitive Types:

**Boolean:** Can have two values, true or false.
**null:** Represents a null or empty value. 
**undefined:** Indicates that a variable has no defined value. 
**Number:** Can represent integers or floating-point numbers, for example, 42 or 3.14159. 
**BigInt:** Allows representing arbitrarily precise integers, for example, 9007199254740992n. 
**String:** Represents a sequence of characters, for example, "Howdy". 
**Symbol:** Represents unique and immutable values. 
**Object:** Is a composite data type that can contain properties and methods.

### Data Type Conversion

JavaScript is a dynamically typed language, which means you don't need to specify the data type when declaring a variable. JavaScript will automatically perform data type conversions as needed during script execution.

For example, you can declare a variable and assign it a numeric value, and later change its value to a string without causing errors.

    let answer = 42;
    answer = "Thanks for all the fish!";

When using operators like the + operator, JavaScript will automatically convert numeric values into strings if one of the operands is a string.

    let x = "The answer is " + 42; // "The answer is 42"
    let y = 42 + " is the answer"; // "42 is the answer" 

However, with other operators like - or *, JavaScript won't automatically convert numeric values into strings.

### Numbers and the '+' Operator

The + operator in expressions involving numeric values and strings automatically converts numeric values into strings. For example:

    x = "The answer is " + 42; // "The answer is 42"
    y = 42 + " is the answer"; // "42 is the answer" 

But with other operators like - or *, JavaScript doesn't perform this automatic conversion.

### Converting Strings to Numbers

If you have a string representing a number and need to convert it to a numeric value, JavaScript provides methods like `parseInt()` and `parseFloat()`. For example:

    const str = "42";
    const num = parseInt(str); // Converts the string "42" into the number 42

It's good practice to specify the numeric base when using `parseInt()` to avoid ambiguities:

    const binaryStr = "101";
    const num = parseInt(binaryStr, 2); // Converts "101" from binary to decimal, result: 5 

You can also use the unary plus operator (+) to convert strings to numbers:

    const strNum = "42";
    const num = +strNum; // Converts the string "42" into the number 42 

### Literals

Literals represent fixed values in JavaScript. They can be primitive values or data structures like objects or arrays.

### Array Literals

An array literal is a list of zero or more expressions representing the elements of the array, enclosed in square brackets ([]). For example:

    const coffees = ["French Roast", "Colombian", "Kona"];

You can use an extra comma at the end of an array literal without causing issues, but it will be ignored:


    const fish = ["Lion", , "Angel"];

### Boolean Literals

The Boolean data type has two literals: **true** and **false**.

### Numeric Literals

JavaScript supports numeric literals in different bases, including decimal, hexadecimal, octal, and binary. For example:


    const decimal = 42; // Decimal (base 10)
    const octal = 0o52; // Octal (base 8)
    const hexadecimal = 0x2A; // Hexadecimal (base 16)
    const binary = 0b101010; // Binary (base 2)

### Object Literals

An object literal is a list of zero or more property name-value pairs, enclosed in curly braces ({}). For example:

    const person = {
      name: "John",
      age: 30,
      job: "Developer",
    };

Property names can be strings or symbols, and values can be any valid data type in JavaScript.

### RegExp Literals

A regular expression literal is a pattern enclosed between slashes (/). For example:

    const pattern = /ab+c/;

### String Literals

A string literal is a sequence of characters enclosed in double quotes (") or single quotes ('). For example:

    const text = "Hello, World!";

You can also use template string literals enclosed in backticks to create string templates:

    const name = "Alice";
    const greeting = `Hello, ${name}!`; 

This allows value interpolation in the string.

### Escaping Characters

You can include special characters in strings using escape sequences preceded by a backslash (). For example:

    const specialChars = "Line 1\nLine 2\tTabbed";
    const escapedQuote = "He said, \"Hello!\"";

You can also escape a backslash by doubling it:

    const path = "C:\\Program Files\\App";

This prevents the backslash from being interpreted as an escape character.

### Special Characters in Strings

JavaScript supports various special characters in strings, such as the newline character (\n), tab (\t), and others. You can use these escape sequences to format strings properly.

## Control Flow and Error Handling

JavaScript supports a concise set of statements, primarily control flow statements, for building interactive functionality in your applications. This section provides an overview of these statements.

### Block Statement

The most fundamental statement is the block statement, which is used to group other statements. A block is enclosed by a pair of curly braces {}:

    {
      statement1;
      statement2;
      // ...
      statementN;
    }

Block statements are commonly used with control flow statements like if, for, and while.

    while (x < 10) {
      x++;
    }

In this example, { x++; } is the block statement.

Note: Variables declared with var are not block-scoped but are scoped to the containing function or script, and their effects persist beyond the block itself. For example:

    var x = 1;
    {
      var x = 2;
    }
    console.log(x); // 2

This outputs 2 because the var x statement within the block is in the same scope as the var x statement before the block. (In C or Java, the equivalent code would have output 1.)

This scoping effect can be mitigated by using let or const.

### if Statement

The if statement is used to execute a block of code if a specified condition is true. It can be accompanied by an optional else statement to execute a block of code if the condition is false.

    if (condition) {
      // Code to execute if the condition is true
    } else {
      // Code to execute if the condition is false (optional)
    }

    const age = 18;
    
    if (age >= 18) {
      console.log("You are an adult.");
    } else {
      console.log("You are a minor.");
    }

This structure is used for making decisions based on conditions.

### for Statement

The for statement is used to create loops that run a specific number of times. It consists of three parts: initialization, condition, and increment expression.

    for (initialization; condition; increment expression) {
      // Code to execute in each iteration
    }

**Example:**

    for (let i = 0; i < 5; i++) {
      console.log(i);
    }

This for loop will print numbers from 0 to 4 in the console.

### Conditional Statements

Conditional statements in JavaScript allow you to execute a set of commands based on whether a specified condition is true or false. There are two primary conditional statements in JavaScript: if...else and switch.

### if...else Statement

The if...else statement is used to execute a block of code if a specified condition is true. You can also use the optional else clause to execute a block of code if the condition is false.

Here's the basic syntax for the if...else statement:

    if (condition) {
      // Code to execute if the condition is true
    } else {
      // Code to execute if the condition is false
    }

**condition:** Any expression that evaluates to true or false.

If condition evaluates to true, statement1 is executed; otherwise, statement2 is executed.

statement1 and statement2 can be any valid JavaScript statements.

You can also chain multiple conditions using else if to test different cases in sequence:

if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else if (conditionN) {
  // Code to execute if conditionN is true
} else {
  // Code to execute if none of the conditions are true
}

Only the first condition that evaluates to true will execute its associated code block.

### Switch Statement

The switch statement is used to evaluate an expression and match its value to one or more case labels. When a match is found, the corresponding block of code is executed. Optionally, you can include a default case to handle values that don't match any of the specified cases.

Here's the basic syntax for the switch statement:

    switch (expression) {
      case label1:
        // Statements to execute if expression matches label1
        break;
      case label2:
        // Statements to execute if expression matches label2
        break;
      // More case labels...
      default:
        // Statements to execute if none of the cases match
    }

**expression:** The value to evaluate.

Each case label represents a possible value for expression.
When a match is found, the associated statements are executed, and the break statement is used to exit the switch block.

If no match is found, the default block (if provided) is executed.

    switch (fruitType) {
      case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
      case "Apples":
        console.log("Apples are $0.32 a pound.");
        break;
      case "Bananas":
        console.log("Bananas are $0.48 a pound.");
        break;
      // More cases...
      default:
        console.log(`Sorry, we are out of ${fruitType}.`);
    }
    console.log("Is there anything else you'd like?");

In this example, the program evaluates the value of fruitType and matches it with the appropriate case label, executing the corresponding code block or falling back to the default case if no match is found. The break statement ensures that only the matching code block is executed.

### Exception Handling Statements in JavaScript

Exception handling in JavaScript allows you to handle errors gracefully when they occur during program execution. JavaScript provides the throw statement for throwing exceptions and the try...catch statement for catching and handling exceptions.

### 1. throw Statement

The throw statement is used to throw an exception explicitly. You can throw any expression as an exception. Here are some examples:

    throw "Error2"; // Throwing a string
    throw 42; // Throwing a number
    throw true; // Throwing a boolean
    throw {
      toString() {
        return "I'm an object!";
      },
    }; // Throwing an object

When you throw an exception, it interrupts the normal flow of the program, and the program starts looking for a try...catch block to handle the exception.

### 2. try...catch Statement

The try...catch statement allows you to define a block of code to "try" executing, and if an exception is thrown within that block, you can "catch" and handle the exception. It consists of two parts:

**The try block:** Contains the code that might throw an exception.

**The catch block:** Contains the code to handle the exception if it occurs.

Here's the basic syntax:

    try {
      // Code that might throw an exception
    } catch (exception) {
      // Code to handle the exception
    }

If an exception is thrown inside the try block, the control immediately transfers to the catch block.
The exception identifier is used to access the thrown exception inside the catch block.

### 3. finally Block

In addition to try and catch, you can also use a finally block with a try...catch statement. The code inside the finally block will always execute, regardless of whether an exception was thrown or not. It is typically used to clean up resources or perform cleanup tasks.

    try {
      // Code that might throw an exception
    } catch (exception) {
      // Code to handle the exception
    } finally {
      // Code that always executes
    }

Here are some key points to remember:

If an exception is thrown within the try block, the code inside the catch block will execute before the finally block.

If no exception is thrown, the finally block still executes.

If an exception is thrown within the catch block, it will propagate to the outer scope unless there's another try...catch block to catch it.

### Exception Types

JavaScript allows you to throw and catch exceptions of various types. While you can throw any object, it is often more meaningful to use built-in exception types like Error or specific exceptions like DOMException and DOMError in the context of web development.

Here's a basic example of using try...catch to handle an exception:

    try {
      if (ourCodeMakesAMistake()) {
        throw new Error("Something went wrong");
      } else {
        doSomethingToGetAJavaScriptError();
      }
    } catch (e) {
      // Handle the exception
      console.error(e.name); // 'Error'
      console.error(e.message); // 'Something went wrong'
    }

In this example, an Error object is thrown with a custom error message, and the catch block extracts and logs information from the exception object.

By understanding and using exception handling effectively, you can create more robust and reliable JavaScript programs.

## Loops and Iteration

Loops in JavaScript allow you to execute a block of code repeatedly. This chapter introduces various loop statements available in JavaScript:

**for Statement:** A for loop repeats until a specified condition evaluates to false. It consists of three parts: initialization, condition, and afterthought. Here's an example:

    for (let step = 0; step < 5; step++) {
      console.log("Walking east one step");
    }

This for loop will execute the code inside it five times.

**do...while Statement:** A do...while loop repeats until a specified condition evaluates to false. Unlike the for loop, a do...while loop guarantees that the code block will run at least once because it checks the condition after executing the block. **Example:**

    let i = 0;
    do {
      i += 1;
      console.log(i);
    } while (i < 5);

This loop will execute at least once and then continue as long as i is less than 5.

while Statement: A while loop also repeats until a specified condition evaluates to false. However, it checks the condition before executing the block of code. Example:

    let n = 0;
    let x = 0;
    while (n < 3) {
      n++;
      x += n;
    }

This loop will execute as long as n is less than 3.

**for...in Statement:** The for...in loop iterates over the enumerable properties of an object. It's often used to loop through the properties of an object or the elements of an array. Example:

    const person = {
      name: "John",
      age: 30,
      job: "Engineer",
    };
    
    for (const key in person) {
      console.log(key, person[key]);
    }

This loop iterates through the properties of the person object.

**for...of Statement:** The for...of loop is used to iterate over the values of iterable objects such as arrays, strings, and more. Example:

    const fruits = ["apple", "banana", "cherry"];
    for (const fruit of fruits) {
      console.log(fruit);
    }

This loop iterates through the elements of the fruits array.

These loop statements offer various ways to control the flow of your code and perform repetitive tasks. Each type of loop has its own use cases and advantages, so choose the one that best fits your specific requirements. Be cautious when using loops to avoid infinite loops, which can cause your program to run indefinitely.

Labeled Statements, Break, and Continue in JavaScript

In JavaScript, you can use labeled statements along with break and continue statements to control the flow of your code in a more granular way.

**Labeled Statement:**

A labeled statement provides an identifier (label) for a statement, allowing you to refer to it elsewhere in your code.

The syntax for a labeled statement is as follows:

    labelName:
      statement
 
The labelName can be any valid JavaScript identifier that is not a reserved word.

The statement can be any valid JavaScript statement.

Labeled statements are typically used with break and continue statements to specify which loop or block of code should be affected.

### Break Statement:

The break statement is used to terminate a loop, switch, or labeled statement.

When used without a label, it terminates the innermost enclosing loop (while, do-while, for, or switch) immediately and transfers control to the following statement.

When used with a label, it terminates the specified labeled statement.

The syntax for the break statement is as follows:

    break;
    break labelName;
    Continue Statement:

The continue statement is used to restart a loop (while, do-while, for) or labeled statement.

When used without a label, it terminates the current iteration of the innermost enclosing loop and continues execution with the next iteration of that loop.

When used with a label, it applies to the looping statement identified with that label.

The syntax for the continue statement is as follows:

    continue;
    continue labelName;

### Examples:

**Using break without a label:**

    for (let i = 0; i < 5; i++) {
      if (i === 3) {
        break; // Terminates the loop when i is 3
      }
      console.log(i);
    }

**Using break with a labeled statement:**

    labelCancelLoops: while (true) {
      // Outer loop
      console.log("Outer loop");
      while (true) {
        // Inner loop
        console.log("Inner loop");
        break labelCancelLoops; // Terminates both loops
      }
    }

**Using continue without a label:**

    for (let i = 1; i <= 5; i++) {
      if (i === 3) {
        continue; // Skips the iteration when i is 3
      }
      console.log(i);
    }

**Using continue with a labeled statement:**

    checkiandj: for (let i = 0; i < 4; i++) {
      console.log("i =", i);
      for (let j = 10; j > 4; j--) {
        console.log("j =", j);
        if (j % 2 === 0) {
          continue checkiandj; // Skips the current iteration of outer loop
        }
        console.log(j, "is odd.");
      }
    }

These examples demonstrate how labeled statements, break, and continue statements can be used to control the flow of your code, especially in nested loops or complex scenarios where you need to target specific loops or blocks of code.

### for...in Statement

The for...in statement in JavaScript allows you to iterate over the enumerable properties of an object. For each distinct property, the specified statements are executed. Here's the syntax:

    for (variable in object) {
      statement
    }

variable is a variable that represents the current property name as a string during each iteration.
object is the object you want to iterate over.

statement represents the code block that is executed for each property.

**Example:**

    function dumpProps(obj, objName) {
      let result = "";
      for (const i in obj) {
        result += `${objName}.${i} = ${obj[i]}<br>`;
      }
      result += "<hr>";
      return result;
    }

In this example, the dumpProps function takes an object and its name as arguments and iterates over all the object's properties, building a string that lists the property names and their values.

### Arrays:

It's important to note that although you can use for...in to iterate over array elements, it will also iterate over user-defined properties in addition to the numeric indexes.

To iterate over arrays, it's generally better to use a traditional for loop with a numeric index because for...in may include user-defined properties if you modify the Array object (e.g., by adding custom properties or methods).
for...of Statement:

The for...of statement is used to create a loop for iterating over iterable objects, such as arrays, maps, sets, and more. Here's the syntax:

    for (variable of object) {
      statement
    }

variable represents the value of the current property during each iteration.

object is the iterable object you want to loop through.

statement is the code block executed for each value in the iterable object.

**Example:**

    const arr = [3, 5, 7];
    arr.foo = "hello";
    
    for (const i in arr) {
      console.log(i); // Outputs "0", "1", "2", "foo"
    }
    
    for (const i of arr) {
      console.log(i); // Outputs "3", "5", "7"
    }

In this example, for...in iterates over both the numeric indexes and user-defined properties, while for...of iterates over the values in the array.

### Destructuring with for...of:

The for...of statement can also be used with destructuring to simultaneously loop over the keys and values of an object.

For example, you can use **Object.entries()** to achieve this:

    const obj = { foo: 1, bar: 2 };
    
    for (const [key, val] of Object.entries(obj)) {
      console.log(key, val);
    }
    
    // Outputs "foo 1" and "bar 2"

In this code, Object.entries(obj) returns an array of key-value pairs from the object obj, and for...of is used to iterate over these pairs, allowing you to access both the key and the value in each iteration.

## Functions

Functions are fundamental building blocks in JavaScript. They are similar to procedures, performing a specific task or calculation, and they can take input parameters and return an output. To use a function, you must define it somewhere in the scope from which you wish to call it.

Here are some key concepts related to functions in JavaScript:

### Defining Functions:

Function Declarations:

A function declaration consists of the function keyword, followed by:

The name of the function.

A list of parameters enclosed in parentheses and separated by commas.
The function's body enclosed in curly braces { }.

### Example:

    function square(number) {
      return number * number;
    }

In this example, the square function takes one parameter (number) and returns its square.

### Function Expressions:

Functions can also be defined using function expressions.

A function expression creates an anonymous function or one with a name.

Function expressions are often used when passing functions as arguments or when defining functions as variables.

**Example:**

    const square = function (number) {
      return number * number;
    };

In this example, square is a variable that holds an anonymous function.

### Calling Functions:

Defining a function doesn't execute it. You must call a function to execute its code and return a result.
Example:

    const result = square(5); // Calling the square function
    console.log(result); // Outputs: 25

### Function Hoisting:

Function declarations are hoisted to the top of their scope. This means you can call a function before it's declared in the code.

**Example:**

    console.log(square(5)); // Outputs: 25
    
    function square(n) {
      return n * n;
    }

However, function expressions are not hoisted in the same way, so you cannot call them before their declaration.

### Function Scope:

Variables defined inside a function are local to that function and cannot be accessed from outside the function.
Functions can access variables defined in their own scope and in any outer scopes (e.g., global scope or parent functions).

**Example:**

    const num1 = 20; // Defined in the global scope
    
    function multiply() {
      const num2 = 3; // Defined in the function scope
      return num1 * num2; // Accessing num1 from the global scope
    }
    
    console.log(multiply()); // Outputs: 60

In this example, num1 is accessible inside the multiply function because it's defined in the global scope.

Functions are a fundamental concept in JavaScript, allowing you to encapsulate and reuse code, making your programs more organized and efficient. They are used for various tasks, from simple calculations to complex operations and event handling.

### Scope and the Function Stack

In JavaScript, scope refers to the context in which variables are declared and accessed. Understanding scope is crucial because it determines where variables and functions are accessible and how long they exist in memory. Additionally, the function stack is closely related to scope and plays a role in managing function execution.

### Recursion

Recursion is a programming technique where a function calls itself. In JavaScript, there are three ways to achieve recursion:

By using the function's name.

By using the **arguments.callee** property.

By using an in-scope variable that refers to the function.

Recursion is often used when solving problems that can be divided into smaller, similar sub-problems. It's analogous to loops in that it involves repetitive execution of code, but recursion relies on a termination condition to avoid infinite recursion.

**Here's a basic example of a recursive function:**

    function factorial(n) {
      if (n <= 1) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    }

In this example, the factorial function calculates the factorial of a number using recursion.

### Nested Functions and Closures

JavaScript allows you to nest functions within other functions. When an inner function is nested within an outer function, it forms a closure. A closure is an expression (usually a function) that captures and "closes over" its containing function's variables, allowing those variables to persist even after the outer function has finished executing.

### Key points about closures:

An inner function can access variables and parameters from its containing (outer) function, but not vice versa.
Closures are useful for creating private variables in JavaScript, as they encapsulate data within a function's scope.
Here's an example:

    function outer() {
      const x = 10;
    
      function inner() {
        console.log(x); // inner can access x from outer
      }
    
      return inner;
    }
    
    const closureFn = outer(); // closureFn now holds a reference to inner
    closureFn(); // Outputs: 10

In this example, the inner function can access the x variable from its containing outer function, even though outer has already finished executing.

### Multiply-Nested Functions

Functions can be multiply-nested, meaning an inner function can contain another inner function, forming a chain of closures. Each inner function can access the variables of its containing functions, creating a scope chain. The innermost function has the highest precedence in the scope chain.

Here's an example of multiply-nested functions:

    function A(x) {
      function B(y) {
        function C(z) {
          console.log(x + y + z);
        }
        C(3);
      }
      B(2);
    }
    
    A(1); // Outputs: 6

In this example, function C can access variables from functions B and A because it's nested within them.

### Name Conflicts

If an enclosed function defines a variable with the same name as a variable in an outer scope, it can lead to name conflicts. In such cases, the innermost variable takes precedence within its scope. To access the outer variable, you need to use different names.

### Using the Arguments Object

The arguments object is an array-like object that holds all the arguments passed to a function. It allows you to work with variable numbers of arguments. You can access arguments by index, and the arguments.length property gives the number of arguments.

Here's an example of using the arguments object to concatenate strings:

    function myConcat(separator) {
      let result = "";
      for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
      }
      return result;
    }
    
    console.log(myConcat(", ", "red", "orange", "blue")); // Outputs: "red, orange, blue,"

In this example, the myConcat function can accept any number of arguments and concatenate them with the specified separator.

Understanding these concepts related to scope, closures, and recursion is essential for writing effective JavaScript code. They provide powerful tools for structuring code, managing data, and solving complex problems.

### Function Parameters

In JavaScript, there are two special kinds of parameter syntax: default parameters and rest parameters.

### Default Parameters:

Default parameters allow you to set a default value for a function parameter if no value is provided when the function is called. Before default parameters were introduced, you would manually check and assign a default value inside the function body.

Here's an example of using default parameters:

    function multiply(a, b = 1) {
      return a * b;
    }
    
    console.log(multiply(5)); // 5

In this example, if no value is provided for b, it defaults to 1. Default parameters make it more convenient to handle missing or undefined values.

### Rest Parameters:

Rest parameters allow you to represent an indefinite number of arguments as an array. This is useful when you want to pass a variable number of arguments to a function.

Here's an example of using rest parameters:

    function multiply(multiplier, ...theArgs) {
      return theArgs.map((x) => multiplier * x);
    }
    
    const arr = multiply(2, 1, 2, 3);
    console.log(arr); // [2, 4, 6]

In this example, the ...theArgs syntax collects all the arguments after the multiplier parameter into an array. This makes it easy to perform operations on multiple arguments within the function.

### Arrow Functions:

Arrow functions, also known as fat arrow functions, provide a shorter syntax for defining functions. They have the following characteristics:

Shorter syntax for simple functions.

Lexical scoping for this (they do not have their own this binding).

Always anonymous (they don't have a function name).

Here's an example comparing traditional functions to arrow functions:

    // Traditional function
    const square = function (x) {
      return x * x;
    };
    
    // Arrow function
    const squareArrow = (x) => x * x;

Arrow functions are particularly useful for writing concise and readable code, especially when you need short, simple functions.

### Predefined Functions:

JavaScript provides several built-in functions that you can use in your code:

**eval():** Evaluates JavaScript code represented as a string.
**isFinite():** Determines if a value is a finite number.
**isNaN():** Determines if a value is NaN.
**parseFloat():** Parses a string and returns a floating-point number.
**parseInt():** Parses a string and returns an integer with a specified radix.
**decodeURI():** Decodes a URI component.
**decodeURIComponent():** Decodes a URI component.
**encodeURI():** Encodes a URI component.
**encodeURIComponent():** Encodes a URI component.
**escape() (deprecated):** Computes a new string with certain characters replaced by hexadecimal escape sequences.
**unescape() (deprecated):** Computes a new string with hexadecimal escape sequences replaced by characters.
It's important to note that escape() and unescape() are deprecated, and it's recommended to use encodeURI(), encodeURIComponent(), decodeURI(), and decodeURIComponent() for handling URI components instead.

Understanding these parameter types and predefined functions is essential for writing efficient and expressive JavaScript code.

## Expressions and Operators 

In JavaScript, expressions and operators are fundamental building blocks for creating and manipulating values in your code.

### Expressions:

An expression is a valid unit of code that resolves to a value. There are two types of expressions:

Expressions with Side Effects: These expressions perform actions or assignments, such as the assignment operator (=). For example, x = 7 is an expression that assigns the value 7 to the variable x. The result of this expression is the value 7.

Purely Evaluative Expressions: These expressions calculate values without side effects. For example, 3 + 4 is an expression that calculates the sum of 3 and 4, resulting in a value of 7. However, if this expression is not part of a larger construct, its result is usually discarded.

### Operators:

Operators are used to perform operations on operands. In JavaScript, you'll encounter various types of operators, including:

Assignment Operators: Assignment operators assign values to variables. For example, x = 7 assigns the value 7 to the variable x.

**Comparison Operators:** Comparison operators are used to compare two values and return a Boolean result. Examples include == (equality), != (inequality), === (strict equality), and !== (strict inequality).

**Arithmetic Operators:** Arithmetic operators perform mathematical calculations. Examples include + (addition), - (subtraction), * (multiplication), / (division), and % (remainder).

**Bitwise Operators:** Bitwise operators perform operations on the binary representation of numbers. Examples include & (bitwise AND), | (bitwise OR), and ^ (bitwise XOR).

**Logical Operators:** Logical operators perform logical operations and return Boolean results. Examples include && (logical AND), || (logical OR), and ! (logical NOT).

**BigInt Operators:** BigInt operators are used with BigInt values (integers of arbitrary precision). They include operators like +, -, *, and /.

**String Operators:** String operators are used to concatenate strings. The + operator can be used for string concatenation.

**Conditional (Ternary) Operator:** The ternary operator (? :) is a shorthand way of writing conditional statements. It returns one of two values based on a condition.

**Comma Operator:** The comma operator (,) allows you to evaluate multiple expressions in a single statement and return the value of the last expression.

**Unary Operators:** Unary operators operate on a single operand. Examples include ++ (increment), -- (decrement), and typeof (returns the data type of an operand).

**Relational Operators:** Relational operators compare two values and return a Boolean result. Examples include > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to).

### Operator Precedence:

The precedence of operators determines the order in which they are applied when evaluating an expression. Parentheses can be used to override operator precedence and explicitly specify the order of operations. JavaScript follows a specific order of precedence for operators, and you can refer to the "Operator Precedence Reference" for a complete table.

### Assignment and Properties:

You can assign values to variables and properties using assignment operators. For example, obj.x = 3 assigns the value 3 to the x property of the object obj. However, you cannot assign properties to primitive values like numbers or strings.

### Destructuring:

Destructuring assignment is a syntax that allows you to extract values from arrays or objects and assign them to variables in a more concise way. For example, const [one, two, three] = foo; extracts values from the array foo and assigns them to variables one, two, and three.

### Chaining Assignments:

You can chain assignment expressions, but it's important to be cautious when doing so, as it can lead to unexpected behavior. JavaScript evaluates chained assignments from left to right, and the result value is based on the rightmost assignment.

### Bitwise Operators:

**Bitwise AND (&):** Returns a one in each bit position for which the corresponding bits of both operands are ones.

**Example:** 15 & 9 returns 9 because 1111 & 1001 = 1001.

**Bitwise OR (|):** Returns a zero in each bit position for which the corresponding bits of both operands are zeros.

**Example:** 15 | 9 returns 15 because 1111 | 1001 = 1111.

**Bitwise XOR (^):** Returns a zero in each bit position for which the corresponding bits are the same and a one for different bits.

**Example:** 15 ^ 9 returns 6 because 1111 ^ 1001 = 0110.

**Bitwise NOT (~):** Inverts the bits of its operand.

**Example:** ~15 returns -16 because ~00001111 = 11110000.

**Left Shift (<<):** Shifts the first operand the specified number of bits to the left, filling with zeros.

**Example:** 9 << 2 yields 36 because 1001 shifted 2 bits to the left becomes 100100, which is 36.

**Sign-Propagating Right Shift (>>):** Shifts the first operand the specified number of bits to the right, preserving the sign (positive or negative).

**Example:** 9 >> 2 yields 2 because 1001 shifted 2 bits to the right becomes 10, which is 2. -9 >> 2 yields -3.

**Zero-Fill Right Shift (>>>):** Shifts the first operand the specified number of bits to the right, filling with zeros.

**Example:** 19 >>> 2 yields 4 because 10011 shifted 2 bits to the right becomes 100, which is 4.

**Logical Operators:**

**Logical AND (&&):** Returns the second operand if the first operand can be converted to false; otherwise, returns the first operand.

**Logical OR (||):** Returns the first operand if it can be converted to true; otherwise, returns the second operand.

**Logical NOT (!):** Returns false if its single operand can be converted to true; otherwise, returns true.

These logical operators work with Boolean values, but they may return non-Boolean values if used with non-Boolean operands based on JavaScript's type coercion rules.

### BigInt Operators:

BigInts are used for working with very large integers in JavaScript. Most operators used with regular numbers can also be used with BigInts, but there are some exceptions:

Unsigned right shift (>>>) is not defined for BigInts.

You cannot mix BigInts and regular numbers in calculations; you need to explicitly convert them when needed.
Comparisons between BigInts and regular numbers are allowed.

Overall, BigInts are useful for precise integer calculations when dealing with very large numbers.

### String Operators:

Concatenation Operator (+): The + operator concatenates two string values together, producing a new string that is the combination of the two operand strings.

**Example:** console.log("my " + "string"); logs the string "my string."

**Shorthand Assignment Operator (+=):** The += operator can be used to concatenate strings and assign the result to a variable.

let mystring = "alpha";
mystring += "bet"; // Evaluates to "alphabet" and assigns this value to mystring.

**Conditional (Ternary) Operator:**

The conditional operator (? :) is unique in JavaScript as it takes three operands. It evaluates a condition and returns one of two values based on whether the condition is true or false.

    condition ? val1 : val2

**Example:**

    const status = age >= 18 ? "adult" : "minor";
    // Assigns "adult" to status if age is 18 or more; otherwise, assigns "minor."

**Comma Operator:**

The comma operator (,) is used to evaluate both of its operands and returns the value of the last operand. It is commonly used within for loops to update multiple variables in a single statement. However, its use outside of for loops is discouraged unless necessary.

**Example:**

    const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const a = [x, x, x, x, x];
    
    for (let i = 0, j = 9; i <= j; i++, j--) {
      console.log(`a[${i}][${j}]= ${a[i][j]}`);
    }
    // Prints the values of diagonal elements in the array.

The comma operator is used here to increment i and decrement j within the same for loop statement.

**Delete Operator:**

The delete operator is used to delete an object's property. It can remove a property from an object, and accessing it afterward will yield undefined. It returns true if the operation is possible and false if not.

**Example:**

    delete Math.PI; // Returns false (cannot delete non-configurable properties)
    const myObj = { h: 4 };
    delete myObj.h; // Returns true (can delete user-defined properties)

**typeof Operator:**

The typeof operator returns a string indicating the type of the operand. It can be used with variables, keywords, objects, methods, and more.

**Examples:**

    typeof myFun; // Returns "function"
    typeof shape; // Returns "string"
    typeof size; // Returns "number"
    typeof foo; // Returns "object"
    typeof today; // Returns "object"
    typeof doesntExist; // Returns "undefined"

**void Operator:**

The void operator specifies an expression to be evaluated without returning a value. It is often used to ensure that an expression is evaluated for its side effects.

**Relational Operators (in and instanceof):**

The in operator checks if a specified property is in an object.

The instanceof operator checks if an object is an instance of a specified object type.

**Examples:**

    0 in trees; // Returns true
    "PI" in Math; // Returns true
    mycar instanceof Object; // Returns true

**this Keyword:**

The this keyword is used to refer to the current object, often within methods. It allows you to access properties and methods of the current object.

**Grouping Operator ( ) and Operator Precedence:**

The grouping operator ( ) controls the order of evaluation in expressions, allowing you to override the default operator precedence.

**new Operator:**

The new operator creates an instance of a user-defined object type or one of the built-in object types, such as Date or Array.

**super Keyword:**

The super keyword is used in classes to call functions on an object's parent, such as calling the parent constructor.

## Numbers and dates

**Number Representation:**

In JavaScript, numbers are implemented using double-precision 64-bit binary format IEEE 754.

The number type can represent floating-point numbers, integers up to ±2^53 − 1 exactly, and special values like +Infinity, -Infinity, and NaN (not-a-number).

### Number Literals:

**Decimal Numbers:** These are standard numbers like 1234567890 or 42.

**Binary Numbers:** Binary number syntax uses a leading 0b or 0B, followed by binary digits (0 or 1). For example, 0b10000000000000000000000000000000 represents 2147483648.

**Octal Numbers:** Octal numbers are prefixed with 0o or 0O, followed by octal digits (0-7). For example, 0O755 represents 493.

**Hexadecimal Numbers:** Hexadecimal numbers are prefixed with 0x or 0X, followed by hexadecimal digits (0-9, A-F, or a-f). For example, 0xFFFFFFFFFFFFFFFFF represents 295147905179352830000.

**Exponentiation:**

You can use exponent notation to represent numbers. For example, 5e1 represents 50, and 1e-3 represents 0.001.

**Number Object:**

The built-in Number object provides properties like MAX_VALUE, MIN_VALUE, NaN, INFINITY, and methods like parseFloat(), parseInt(), isFinite(), isInteger(), isNaN(), and isSafeInteger() for working with numbers.

**Math Object:**

The Math object provides mathematical constants like Math.PI and functions for various mathematical operations. These functions include trigonometric functions (sin, cos, tan), logarithmic functions (log, log10, log2), exponential functions (exp), rounding functions (round, floor, ceil), random function (random), and more.

**Number Prototype:**

The Number prototype provides methods like toExponential(), toFixed(), and toPrecision() for formatting and manipulating numbers.

## Text Formatting:

**String Type and String Literals:**

    const str1 = 'foo';
    const str2 = "bar";

**Escape Sequences:**

    const copyrightSymbol = "\xA9"; // Represents the copyright symbol ©
    const euroSymbol = "\u20AC"; // Represents the Euro symbol €

**String Objects:**

    const stringLiteral = "This is a string literal.";
    const stringObject = new String("This is a String object.");

**String Length:**

    const hello = "Hello, World!";
    const helloLength = hello.length; // Returns 13

**String Methods:**

    const text = "JavaScript is awesome!";
    const upperCaseText = text.toUpperCase(); // Converts to uppercase: "JAVASCRIPT IS AWESOME!"
    const indexOfAwesome = text.indexOf("awesome"); // Returns the index: 15

**Multi-line Template Literals:**

    const multiLineString = `
       This is a
       multi-line
       string using
       template literals.
    `;

**Internationalization:**

**Date and Time Formatting:**

    const july172014 = new Date("2014-07-17");
    
    const options = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };
    const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;
    
    console.log(americanDateTime(july172014));
    // Output (depending on the timezone): "07/17/14, 02:00 AM GMT+2" or "07/16/14, 05:00 PM GMT-7"

**Number Formatting:**

    const gasPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 3,
    });
    
    console.log(gasPrice.format(5.259)); // Formats to: "$5.259"
    
    const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
      style: "currency",
      currency: "CNY",
    });
    
    console.log(hanDecimalRMBInChina.format(1314.25));
    // Formats to: "￥ 一,三一四.二五"

**Collation:**

    const names = ["Hochberg", "Hönigswald", "Holzman"];
    
    const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");
    
    console.log(names.sort(germanPhonebook.compare).join(", "));
    // Sorts like a phonebook: "Hochberg, Hönigswald, Holzman"
    
    const germanDictionary = new Intl.Collator("de-DE-u-co-dict");
    
    console.log(names.sort(germanDictionary.compare).join(", "));
    // Sorts like a dictionary: "Hochberg, Holzman, Hönigswald"

These examples demonstrate how to work with strings, create multi-line strings using template literals, and utilize the Internationalization API for date and time formatting, number formatting, and string collation.

## Regular Expressions

Regular expressions (regex) are powerful tools for pattern matching and text manipulation in JavaScript. Here's an explanation of the code you provided:

**Creating a regular expression:**

Regular expressions can be created using literal notation between forward slashes /pattern/ or by using the RegExp constructor with a pattern string and optional flags.

    const re = /ab+c/; // Using literal notation
    // or
    const re = new RegExp("ab+c"); // Using the RegExp constructor

**Writing a regular expression pattern:**

Regular expression patterns consist of simple characters and special characters.

Simple patterns, like /abc/, match an exact sequence of characters.

Special characters, like *, allow you to match patterns with variations.

**Using simple patterns:**

Simple patterns match a specific sequence of characters. For example, /abc/ matches the exact sequence "abc" in a string.

**Using special characters:**

Special characters provide flexibility in matching patterns.

For example, /ab*c/ matches "ac", "abc", "abbc", and so on, where * means "0 or more occurrences of the preceding character or group."

Assertions, character classes, groups, backreferences, and quantifiers: Regular expressions support various features like boundaries, character classes (e.g., \d for digits), groups (parentheses), backreferences, and quantifiers (e.g., *, +, ?, {n}, {n,}, {n,m}).

**Escaping:**

To match special characters literally, you need to escape them with a backslash, like /\*/ to match an asterisk.
If you need to match a forward slash, escape it, e.g., /\/example\//.

**Using parentheses:**

Parentheses () are used to group parts of the pattern and create capturing groups. Capturing groups allow you to extract matched substrings.

For example, /(\d{2})-(\d{2})/ captures two sets of two digits separated by a hyphen.

**Using regular expressions in JavaScript:**

Regular expressions can be used in JavaScript with various methods, such as exec(), test(), match(), replace(), search(), and split().

    const str = "fee fi fo fum";
    const re = /\w+\s/g;
    
    const matches = str.match(re); // Matches all words followed by a space

**Advanced searching with flags:**

Flags like g (global), i (case-insensitive), and m (multiline) can be added to regular expressions to modify their behavior.

    const caseInsensitiveRe = /pattern/i; // Case-insensitive search
    const globalRe = /pattern/g; // Global search (find all matches)
    const multilineRe = /pattern/m; // Multiline search

**Using unicode regular expressions:**

The u flag is used for unicode regular expressions, allowing you to work with unicode text and properties.

    const unicodeRe = /\p{L}*/u; // Matches unicode words

The code example you provided demonstrates how to use a regular expression to validate phone numbers. It checks if the input matches the specified pattern for phone numbers and displays a message accordingly.

**regex examples:**

**Validating Email Addresses:** Use regex to validate if an email address follows a valid format.


    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailRegex.test("example@email.com");

**Extracting URLs from Text:**

Regular expressions can be used to extract URLs from a block of text.

    const text = "Visit my website at https://www.example.com or http://anotherexample.com";
    const urlRegex = /https?:\/\/[^\s]+/g;
    const urls = text.match(urlRegex);

**Replacing Text:** Replace specific patterns in a string using regex.

    const text = "Replace all numbers like 12345 with X.";
    const replacedText = text.replace(/\d+/g, "X");

**Parsing CSV Data:** Use regex to parse data from a CSV string.

    const csvData = "John,Doe,30\nJane,Smith,25";
    const csvArray = csvData.split(/\n/).map(row => row.split(/,/));

**Validating Dates:** Validate if a date follows a specific format.

    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    const isValidDate = dateRegex.test("12/31/2022");

**Password Strength Validation:** Check if a password meets certain criteria, like having at least one uppercase letter, one digit, and a minimum length.

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const isValidPassword = passwordRegex.test("Passw0rd");

**Tokenizing Text:** Split a sentence into words using regex.

    const sentence = "This is a sample sentence.";
    const words = sentence.match(/\b\w+\b/g);

**HTML Tag Removal:** Remove HTML tags from a string.

    const htmlString = "<p>This is <b>HTML</b> content.</p>";
    const cleanText = htmlString.replace(/<[^>]*>/g, "");

**Phone Number Formatting:** Format phone numbers consistently.

    const phoneNumber = "1234567890";
    const formattedNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

These examples illustrate how regular expressions can be employed for various text manipulation tasks in JavaScript. Depending on your specific use case, you can tailor regex patterns to match and manipulate text as needed.

## Indexed collections

**Creating an Array:** You can create an array in JavaScript using various methods. Here are some equivalent ways:

    const arr1 = new Array(element0, element1, /* …, */ elementN);
    const arr2 = Array(element0, element1, /* …, */ elementN);
    const arr3 = [element0, element1, /* …, */ elementN];

The elements element0, element1, etc., are the values you want to initialize the array with.

**Array Length:** You can determine the length of an array using its length property:

const arr = [1, 2, 3, 4, 5];
const length = arr.length; // length is 5

**Accessing Array Elements:** Array elements are accessed by their index, starting from 0. For example:

    const arr = ["apple", "banana", "cherry"];
    const firstElement = arr[0]; // "apple"
    const secondElement = arr[1]; // "banana"

**Adding and Modifying Elements:** You can add or modify elements in an array by assigning values to specific indices:

    const arr = [1, 2, 3];
    arr[1] = 42; // Modifies the second element, now arr is [1, 42, 3]
    arr[3] = 4;  // Adds a fourth element, now arr is [1, 42, 3, 4]

**Iterating Through an Array:** You can use loops like for or array methods like forEach to iterate through array elements:

    const arr = [1, 2, 3];
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]); // Logs 1, 2, 3
    }
    
    arr.forEach(element => {
      console.log(element); // Logs 1, 2, 3
    });

**Array Methods:** Arrays have built-in methods for various operations such as push, pop, shift, unshift, concat, slice, splice, map, filter, reduce, and many more for manipulation and transformation of array elements.

    const arr = [1, 2, 3];
    arr.push(4); // Adds 4 to the end, now arr is [1, 2, 3, 4]
    arr.pop();   // Removes the last element, now arr is [1, 2, 3]

**Array-Like Objects:** Some objects in JavaScript are array-like, meaning they have numeric indices and a length property but may not have all the array methods. An example is the arguments object inside a function.

    function example() {
      console.log(arguments[0]); // Accessing elements like an array
      console.log(arguments.length); // Getting the length
    }

**Typed Arrays:** In addition to regular arrays, JavaScript has typed arrays (e.g., Int8Array, Uint16Array) optimized for handling binary data. They have a fixed size and hold elements of a specific data type.

    const intArray = new Int32Array(3); // Creates an array of 3 32-bit integers
    intArray[0] = 42;

These are fundamental concepts for working with indexed collections like arrays and array-like objects in JavaScript. They provide powerful ways to store, access, and manipulate data in your JavaScript applications.

**Populating an Array:** You can populate an array in JavaScript by assigning values to its elements using square brackets []. For example:

    const emp = [];
    emp[0] = "Casey Jones";
    emp[1] = "Phil Lesh";
    emp[2] = "August West";

This code creates an array called emp and assigns values to its elements at specific indices.

**Understanding Length:** In JavaScript, arrays store their elements as standard object properties, with the array index as the property name. The length property of an array represents the number of elements in the array. It is always one more than the highest index stored in the array. **For example:**

    const cats = [];
    cats[30] = "Dusty";
    console.log(cats.length); // Outputs 31

**Iterating Over Arrays:** You can iterate over the values of an array using loops like for or forEach method. For example:

    const colors = ["red", "green", "blue"];
    for (let i = 0; i < colors.length; i++) {
      console.log(colors[i]);
    }

The forEach method provides a more concise way to iterate through an array.

**Array Methods:** JavaScript arrays come with built-in methods for various operations. Some common array methods include push, pop, shift, unshift, concat, slice, splice, map, filter, reduce, sort, indexOf, and many more. These methods allow you to manipulate and transform array elements efficiently.

**Array Transformations:** JavaScript arrays can be transformed back and forth between arrays and other data structures. For example, you can use the Object.groupBy() method to group array elements based on a condition and create a new object with groups as properties.

    const inventory = [
      { name: "asparagus", type: "vegetables" },
      { name: "bananas", type: "fruit" },
      // ...
    ];
    
    const result = Object.groupBy(inventory, ({ type }) => type);

This code groups the elements of the inventory array by their type property, creating an object with properties for each group.

**Sparse Arrays:**

    // Creating an array with empty slots
    const sparseArray = Array(5); // [ <5 empty items> ]
    
    // Using consecutive commas in an array literal
    const arrayWithEmptySlots = [1, 2, , , 5]; // [1, 2, <2 empty items>, 5]
    
    // Directly setting a slot with an index greater than array.length
    const sparseArray2 = [1, 2];
    sparseArray2[4] = 5; // [1, 2, <2 empty items>, 5]
    
    // Elongating an array by directly setting .length
    const sparseArray3 = [1, 2];
    sparseArray3.length = 5; // [1, 2, <3 empty items>]
    
    // Deleting an element
    const arrayWithDeletedElement = [1, 2, 3, 4, 5];
    delete arrayWithDeletedElement[2]; // [1, 2, <1 empty item>, 4, 5]

**Multi-Dimensional Arrays:**

    // Creating a two-dimensional array
    const twoDimArray = new Array(4);
    for (let i = 0; i < 4; i++) {
      twoDimArray[i] = new Array(4);
      for (let j = 0; j < 4; j++) {
        twoDimArray[i][j] = `[${i}, ${j}]`;
      }
    }
    // Accessing elements
    console.log(twoDimArray[2][3]); // Outputs: [2, 3]

**Using Arrays to Store Properties:**

    // Using an array to store related information
    const person = [];
    person["name"] = "John";
    person["age"] = 30;
    console.log(person.name); // Outputs: "John"
    console.log(person.age); // Outputs: 30

**Working with Array-Like Objects:**

    // Using array methods on array-like objects (e.g., arguments)
    function printArguments() {
      Array.prototype.forEach.call(arguments, (item) => {
        console.log(item);
      });
    }
    printArguments(1, 2, 3); // Outputs: 1, 2, 3

**String as an Array-Like Object:**

    // Using array methods on strings
    const str = "Hello";
    Array.prototype.forEach.call(str, (char) => {
      console.log(char);
    });
    // Outputs:
    // "H"
    // "e"
    // "l"
    // "l"
    // "o"

## Keyed collections

Keyed collections, such as Maps and Sets, are important data structures in JavaScript for managing collections of data with unique keys and values. Here are examples and explanations of how to use Maps, Sets, and WeakSets:

**Maps:** A Map object allows you to store key-value pairs and iterate over them in insertion order.

    // Creating a Map
    const sayings = new Map();
    
    // Adding key-value pairs
    sayings.set("dog", "woof");
    sayings.set("cat", "meow");
    sayings.set("elephant", "toot");
    
    // Getting the size of the Map
    console.log(sayings.size); // Output: 3
    
    // Accessing values by key
    console.log(sayings.get("dog")); // Output: "woof"
    console.log(sayings.get("fox")); // Output: undefined
    
    // Checking if a key exists
    console.log(sayings.has("bird")); // Output: false
    
    // Deleting a key-value pair
    sayings.delete("dog");
    console.log(sayings.has("dog")); // Output: false
    
    // Iterating over key-value pairs
    for (const [key, value] of sayings) {
      console.log(`${key} goes ${value}`);
    }
    // Output:
    // "cat goes meow"
    // "elephant goes toot"
    
    // Clearing the Map
    sayings.clear();
    console.log(sayings.size); // Output: 0

**Sets:** A Set object stores unique values and allows you to iterate over them in insertion order.

    // Creating a Set
    const mySet = new Set();
    
    // Adding values
    mySet.add(1);
    mySet.add("some text");
    mySet.add("foo");
    
    // Checking if a value exists
    console.log(mySet.has(1)); // Output: true
    
    // Deleting a value
    mySet.delete("foo");
    
    // Getting the size of the Set
    console.log(mySet.size); // Output: 2
    
    // Iterating over values
    for (const item of mySet) {
      console.log(item);
    }
    // Output:
    // 1
    // "some text"

**WeakSets:**

WeakSet objects are collections of garbage-collectable values, mainly used for tracking objects without preventing their garbage collection.

    // Creating a WeakSet
    const weakSet = new WeakSet();
    
    // Adding objects
    const obj1 = {};
    const obj2 = {};
    weakSet.add(obj1);
    weakSet.add(obj2);
    
    // Checking if an object is in the WeakSet
    console.log(weakSet.has(obj1)); // Output: true
    
    // Removing an object from the WeakSet (automatic when the object is garbage collected)
    weakSet.delete(obj1);
    
    // WeakSets have no size property

These examples demonstrate the use of Maps, Sets, and WeakSets in JavaScript for managing collections of data with unique keys and values. Maps are ideal for key-value pairs, Sets for unique values, and WeakSets for tracking objects that can be garbage collected.

## Working with objects

Working with objects in JavaScript is fundamental, as objects are a central data structure in the language. Objects in JavaScript are collections of properties, where each property is an association between a name (or key) and a value. Here are explanations and examples of how to work with objects:

**Creating New Objects:** You can create objects using object initializers, constructor functions, or the Object.create() method.

**Object Initializers:** Object initializers, or object literals, allow you to create objects with key-value pairs.

const person = {
  name: "John",
  age: 30,
  job: "Engineer"
};

**Constructor Functions:**

You can define a constructor function and use the new keyword to create objects.

    function Person(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
    }
    
    const person = new Person("John", 30, "Engineer");

**Object.create() Method:**

The Object.create() method allows you to create objects with a specified prototype.

    const animal = {
      type: "Invertebrates",
      displayType() {
        console.log(this.type);
      }
    };
    
    const dog = Object.create(animal);
    dog.type = "Mammals";
    dog.displayType(); // Output: "Mammals"

**Accessing Properties:**

You can access object properties using dot notation or bracket notation.

    console.log(person.name); // "John"
    console.log(person["age"]); // 30

**Enumerating Properties:**

You can enumerate (list) object properties using for...in loops, Object.keys(), or Object.getOwnPropertyNames().

    for (const key in person) {
      console.log(key, person[key]);
    }
    
    const keys = Object.keys(person);
    console.log(keys); // ["name", "age", "job"]

**Deleting Properties:**

You can delete object properties using the delete operator.

    delete person.age;
    console.log("age" in person); // false

JavaScript objects are versatile and can store various data types, including functions (methods). Understanding how to create, access, enumerate, and delete properties is essential for working effectively with objects in JavaScript.

**Inheritance and Prototypes:**

In JavaScript, all objects inherit from at least one other object. This inheritance is achieved through prototypes. Each object has a prototype object, and properties and methods can be inherited from the prototype chain.

**Defining Properties for All Objects of One Type:**

You can add a property to all objects created through a specific constructor function using the prototype property. This defines a property that is shared by all objects of that constructor type.

**Example:**

    function Car(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    
    Car.prototype.color = "red";
    
    const car1 = new Car("Toyota", "Camry", 2022);
    console.log(car1.color); // "red"

In this example, the color property is defined on the prototype of the Car constructor, so all Car instances inherit it.

**Defining Methods:**

Methods are functions associated with objects. You can define methods by assigning functions to properties of an object.

**Example:**

    const myObj = {
      myMethod: function (params) {
        // do something
      },
    
      // Alternatively, using shorthand notation
      myOtherMethod(params) {
        // do something else
      },
    };

You can also define methods on the prototype of a constructor function to make them available to all instances of that type.

**Using this for Object References:**

The this keyword refers to the current object within a method. It allows you to access and manipulate properties of the object to which the method belongs.

**Example:**

    const person = {
      name: "John",
      sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
      },
    };
    
    person.sayHello(); // Output: "Hello, my name is John"

In this example, this.name accesses the name property of the person object.

**Defining Getters and Setters:**

Getters and setters are special methods that allow you to define how property access and assignment work for an object. You can define them using get and set within an object literal or later using Object.defineProperties().

**Example:**

    const myObj = {
      _value: 0,
      get value() {
        return this._value;
      },
      set value(newValue) {
        this._value = newValue;
      },
    };

In this example, value is defined as a getter and setter for the _value property.

**Comparing Objects:**

In JavaScript, objects are reference types, and two distinct objects with the same properties are not equal unless they reference the same object.

**Example:**

    const obj1 = { name: "John" };
    const obj2 = { name: "John" };
    
    console.log(obj1 === obj2); // false

To compare objects by their properties, you need to implement custom comparison logic.

## Classes

Continuing from the previous explanation about classes in JavaScript, let's explore more about classes, methods, inheritance, and other related concepts.

**Methods:**

Inside a class, you can define methods, which are functions associated with the class. These methods can be used to perform actions or operations related to the class. Methods can be called on instances of the class.

**Example:**

    class Calculator {
      add(a, b) {
        return a + b;
      }
    
      subtract(a, b) {
        return a - b;
      }
    }
    
    const calc = new Calculator();
    console.log(calc.add(5, 3)); // 8
    console.log(calc.subtract(5, 3)); // 2

In this example, the Calculator class defines two methods: add and subtract, which perform addition and subtraction operations, respectively.

**Inheritance:**

One of the powerful features of classes in JavaScript is inheritance. You can create a new class that inherits properties and methods from an existing class. This allows you to create hierarchies of objects with shared behavior.

To create a subclass that inherits from a superclass, you use the extends keyword:

    class Animal {
      constructor(name) {
        this.name = name;
      }
    
      speak() {
        console.log(`${this.name} makes a sound.`);
      }
    }
    
    class Dog extends Animal {
      constructor(name, breed) {
        super(name); // Call the superclass constructor
        this.breed = breed;
      }
    
      speak() {
        console.log(`${this.name} barks.`);
      }
    }
    
    const myDog = new Dog("Fido", "Golden Retriever");
    console.log(myDog.name); // "Fido"
    myDog.speak(); // "Fido barks."

In this example, Dog is a subclass of Animal. The extends keyword allows Dog to inherit properties and methods from Animal. The super keyword is used in the Dog constructor to call the constructor of the superclass (Animal). The speak method is overridden in Dog to provide a different implementation.

**Static Methods and Fields:**

Static methods and fields belong to the class itself rather than instances of the class. You can define static methods and fields using the static keyword.

**Example:**

    class MathUtils {
      static add(a, b) {
        return a + b;
      }
    
      static PI = 3.14159;
    }
    
    console.log(MathUtils.add(5, 3)); // 8
    console.log(MathUtils.PI); // 3.14159

Static methods can be called on the class itself, while static fields are accessed as properties of the class.

**Getters and Setters:**

You can define getters and setters for class properties using the get and set keywords. Getters allow you to retrieve the value of a property, and setters allow you to modify it.

**Example:**

    class Circle {
      constructor(radius) {
        this._radius = radius;
      }
    
      get radius() {
        return this._radius;
      }
    
      set radius(value) {
        if (value >= 0) {
          this._radius = value;
        } else {
          console.log("Radius cannot be negative.");
        }
      }
    
      get area() {
        return Math.PI * this._radius * this._radius;
      }
    }
    
    const myCircle = new Circle(5);
    console.log(myCircle.radius); // 5
    
    myCircle.radius = 7;
    console.log(myCircle.radius); // 7
    
    myCircle.radius = -2; // Radius cannot be negative.

In this example, the Circle class defines a getter and setter for the radius property. The getter allows you to retrieve the radius, and the setter ensures that the radius is non-negative. Additionally, there is a getter for the area property, which calculates and returns the area of the circle.

Classes provide a structured and object-oriented way to work with objects in JavaScript, making code more organized and easier to manage. They are a significant improvement over the older prototype-based approach.

**Instance Methods:**

Instance methods are functions defined within a class that operate on instances of that class. They allow you to encapsulate behavior specific to instances.

**Example:**

    class Color {
      constructor(r, g, b) {
        this.values = [r, g, b];
      }
      getRed() {
        return this.values[0];
      }
    }
    
    const red = new Color(255, 0, 0);
    console.log(red.getRed()); // 255

In this example, getRed is an instance method of the Color class that retrieves the red value of a color instance.

**Private Fields:**

Private fields are identified by a # symbol before their names. They are not accessible from outside the class, ensuring encapsulation and data integrity.

**Example:**

    class Color {
      #values;
      constructor(r, g, b) {
        this.#values = [r, g, b];
      }
      getRed() {
        return this.#values[0];
      }
      setRed(value) {
        this.#values[0] = value;
      }
    }
    
    const red = new Color(255, 0, 0);
    red.setRed(0);
    console.log(red.getRed()); // 0
    console.log(red.#values); // SyntaxError: Private field '#values' cannot be accessed outside of class

Private fields are essential for maintaining data integrity and preventing external code from accessing internal data.

**Accessor Fields:**

Accessor fields allow you to define properties that are accessed like regular properties but with custom getter and setter methods. They provide a clean and readable way to interact with object properties.

**Example:**

    class Color {
      constructor(r, g, b) {
        this.values = [r, g, b];
      }
      get red() {
        return this.values[0];
      }
      set red(value) {
        this.values[0] = value;
      }
    }
    
    const red = new Color(255, 0, 0);
    red.red = 0;
    console.log(red.red); // 0

Accessor fields provide a more intuitive way to work with properties.

**Public Fields:**

Public fields allow you to define properties directly on class instances, simplifying property assignment. They are similar to defining properties using the constructor but can be more concise.

**Example:**

    class MyClass {
      luckyNumber = Math.random();
    }
    
    console.log(new MyClass().luckyNumber); // Random number
    console.log(new MyClass().luckyNumber); // Another random number

Public fields are handy for assigning default values to instance properties.

Each of these features plays a role in designing classes that are easy to use, maintain, and understand. Depending on your use case, you can choose the most suitable approach for encapsulating data and behavior within your classes.

**Static Properties and Methods:** Static properties and methods are defined on the class itself, rather than on instances of the class.

They are accessed using the class name, e.g., ClassName.staticProperty or ClassName.staticMethod().

Static properties and methods are often used for utility functions related to the class.

They can be private (prefixed with #) or public, just like instance properties and methods.

**Example of a static method in the Color class:**

    class Color {
      static isValid(r, g, b) {
        return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
      }
    }
    
    console.log(Color.isValid(255, 0, 0)); // true
    console.log(Color.isValid(1000, 0, 0)); // false

**Extends and Inheritance:**

Inheritance allows one class to inherit properties and methods from another class.

The extends keyword is used to declare a derived class that inherits from a base class.

Derived classes have access to the properties and methods of the base class.

The super keyword is used to call the constructor and methods of the base class from the derived class.

Derived classes can override methods of the base class to provide their own implementation.

Example of a derived class ColorWithAlpha that extends the Color class:

    class ColorWithAlpha extends Color {
      #alpha;
      constructor(r, g, b, a) {
        super(r, g, b); // Call the base class constructor
        this.#alpha = a;
      }
      get alpha() {
        return this.#alpha;
      }
      set alpha(value) {
        if (value < 0 || value > 1) {
          throw new RangeError("Alpha value must be between 0 and 1");
        }
        this.#alpha = value;
      }
    }

Derived classes inherit methods and properties from the base class, and they can provide their own implementations or enhancements.

**Why Classes?**

Classes provide a way to organize code into reusable and logically structured units.

They facilitate object-oriented programming concepts such as encapsulation, inheritance, and polymorphism.

Classes can help improve code readability and maintainability by grouping related data and behavior.

While JavaScript allows flexibility in coding styles, classes offer a structured approach for building complex applications.

However, the use of classes depends on the programmer's preference and project requirements. Some developers prefer other programming paradigms, such as functional programming, and may choose not to use classes extensively.

In summary, classes in JavaScript provide a means to organize and structure code, enable inheritance, and promote object-oriented programming practices. Their use can lead to cleaner and more maintainable code when appropriately applied to a project's needs.

## Using  promises

Promises in JavaScript are a powerful tool for handling asynchronous operations. They provide a more structured way to work with asynchronous code compared to traditional callback functions. Here's a summary of key concepts related to promises:

**1. Chaining Promises:**

Promises allow you to chain asynchronous operations together in a more readable and maintainable way compared to callback nesting.

You can chain promises using the .then() method, which takes two optional callback functions as arguments: one for success and one for failure.

**Example of chaining promises:**

    doSomething()
      .then((result) => doSomethingElse(result))
      .then((newResult) => doThirdThing(newResult))
      .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
      .catch(failureCallback);

  
Each .then() returns a new promise, allowing you to continue the chain.

.catch() is used to handle errors that occur at any point in the chain.

**2. Nesting Promises:**

Nesting promises should generally be avoided, as it can lead to less readable and harder-to-maintain code.

Nesting can occur when you create a promise inside a .then() callback and return it, creating a new level of indentation.

It's better to keep your promise chains flat whenever possible.

**Example of nested promises:**

    doSomething()
      .then((result) => {
        return doSomethingElse(result).then((newResult) => {
          return doThirdThing(newResult);
        });
      })
      .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
      .catch(failureCallback);

  
**3. Returning Promises:**

When working with promises, it's crucial to return promises from within .then() callbacks to maintain the integrity of the chain.

Failure to return a promise from within a .then() callback can lead to unexpected behavior and loss of error handling.

Always return promises to ensure that subsequent steps in the chain depend on the completion of the previous step.

**Example of returning promises:**

    doSomething()
      .then((result) => {
        return doSomethingElse(result);
      })
      .then((newResult) => {
        return doThirdThing(newResult);
      })
      .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
      .catch(failureCallback);

**4. Error Handling:**

Promise chains should always include error handling using .catch() at the end of the chain.

The .catch() method allows you to handle errors that occur at any point in the chain, ensuring that unhandled errors are caught.

Without proper error handling, unhandled promise rejections can lead to issues in your code.

**Example of error handling:**

    doSomething()
      .then((result) => doSomethingElse(result))
      .then((newResult) => doThirdThing(newResult))
      .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
      .catch(failureCallback);

**5. Global Promise Rejection Events:**

In the browser, unhandled promise rejections trigger global events: unhandledrejection and rejectionhandled.

The unhandledrejection event is emitted when a promise rejection is not handled by any .catch() handler.

The rejectionhandled event is emitted when a handler is attached to a previously rejected promise.

These events can help you manage and debug promise rejections.

In Node.js, you can capture unhandled promise rejections using the process.on("unhandledRejection") event.

Make sure to handle or log promise rejections appropriately to prevent unexpected behavior in your application.

Promises provide a structured and powerful way to work with asynchronous code in JavaScript. By following best practices, such as chaining promises, returning promises, and handling errors, you can write more reliable and maintainable asynchronous code.

**Composition Tools for Concurrent Operations:** 

**Promise.all([promise1, promise2, ...]):** Allows you to run multiple promises concurrently and waits for all of them to either fulfill or reject. If any promise in the array rejects, the resulting promise is immediately rejected.

**Promise.allSettled([promise1, promise2, ...]):** Similar to Promise.all(), but it waits for all promises to settle (fulfill or reject) before resolving. It doesn't short-circuit on rejection and provides information about the state of each promise.

**Promise.any([promise1, promise2, ...]):** Resolves as soon as any of the promises in the array fulfills. If all promises reject, it rejects with an array of rejection reasons.

**Promise.race([promise1, promise2, ...]):** Resolves or rejects as soon as one of the promises in the array settles (fulfills or rejects). It short-circuits on the first settled promise.

**Sequential Composition:**

You can compose promises sequentially by using the .then() method or a reduce function. Sequential composition allows you to execute promises one after another, with each step depending on the result of the previous one.

**Example using .then():**

    doSomething()
      .then((result) => doSomethingElse(result))
      .then((newResult) => doThirdThing(newResult))
      .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
      .catch(failureCallback);

  
**Creating a Promise from Callback APIs:**

You can wrap old-style callback APIs, like setTimeout, in a promise using the promise constructor. This allows you to work with them in a more modern and consistent way.

**Example wrapping setTimeout:**

    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    
    wait(10 * 1000)
      .then(() => saySomething("10 seconds"))
      .catch(failureCallback);

  
**Timing and Guarantees:**

Promises provide strong guarantees about when and how callbacks are called. Promises ensure that:

Callbacks added with .then() will never be invoked before the completion of the current run of the JavaScript event loop.

Callbacks will be invoked even if they were added after the success or failure of the asynchronous operation.

Functions passed to .then() will never be called synchronously, even with an already-resolved promise.

Microtasks and tasks are used to manage the timing of promise callbacks and setTimeout callbacks, respectively. 

Microtasks have higher priority and run before tasks.

Understanding these timing guarantees is essential for writing predictable and well-behaved asynchronous code.

In summary, promises provide a structured and reliable way to work with asynchronous operations in JavaScript. They offer composition tools for concurrent operations, support sequential composition, and ensure consistent timing and callback behavior. Additionally, they allow you to wrap old-style callback APIs, making them more manageable in modern code.


## Typed arrays

JavaScript typed arrays provide a way to work with binary data efficiently, and they are commonly used in contexts where raw binary data manipulation is required. Here's an overview of key concepts related to typed arrays:

**1. Typed Arrays Overview:** 

**Example:** Using a Uint8Array to store pixel data for an image.

    // Create a Uint8Array to represent pixel data (RGBA format)
    const pixelData = new Uint8Array([255, 0, 0, 255]); // Red pixel
    
    // You can work with pixelData as a raw binary representation of the color.

**2. Buffers:**

**Example:** Allocating and copying data between buffers.

    // Create two ArrayBuffer instances
    const buffer1 = new ArrayBuffer(4);
    const buffer2 = new ArrayBuffer(4);
    
    // Copy data from buffer1 to buffer2
    const view1 = new Uint8Array(buffer1);
    const view2 = new Uint8Array(buffer2);
    view1.set([1, 2, 3, 4]);
    view2.set(view1);
    
    // Now buffer2 contains the same data as buffer1.

**3. Views:** 

**Example:** Using a DataView to read and write binary data with explicit byte order.

    // Create an ArrayBuffer and a DataView
    const buffer = new ArrayBuffer(4);
    const dataView = new DataView(buffer);
    
    // Write a 32-bit float with little-endian byte order
    dataView.setFloat32(0, 3.14, true);
    
    // Read the float with the same byte order
    const value = dataView.getFloat32(0, true);
    console.log(value); // Outputs: 3.14

**4. Typed Array Views:**

Example: Using Int16Array to work with 16-bit signed integers.

    // Create an Int16Array
    const int16Array = new Int16Array(3); // Creates an array of length 3
    
    // Populate the array
    int16Array[0] = 100;
    int16Array[1] = -200;
    int16Array[2] = 300;
    
    // You can work with int16Array like a regular array but with 16-bit integers.

**5. Working with Typed Arrays:**

**Example:** Iterating over elements in a Uint32Array.

    // Create a Uint32Array
    const uint32Array = new Uint32Array([10, 20, 30, 40]);
    
    // Iterate over the elements
    for (let i = 0; i < uint32Array.length; i++) {
      console.log(uint32Array[i]);
    }

**6. Reading Text from a Buffer:**

**Example:** Reading UTF-8 text data from a Uint8Array and decoding it using TextDecoder.

    // Create a Uint8Array with UTF-8 encoded text
    const utf8Data = new Uint8Array([72, 101, 108, 108, 111]); // "Hello" in UTF-8
    
    // Decode the data to obtain the original text
    const text = new TextDecoder().decode(utf8Data);
    console.log(text); // Outputs: "Hello"

**7. Complex Data Structures:**

**Example:** Creating a complex data structure using multiple typed array views on a single buffer.

    // Create an ArrayBuffer and multiple typed array views
    const buffer = new ArrayBuffer(24);
    const idView = new Uint32Array(buffer, 0, 1);
    const usernameView = new Uint8Array(buffer, 4, 16);
    const amountDueView = new Float32Array(buffer, 20, 1);
    
    // Populate the data structure
    idView[0] = 12345;
    usernameView.set([72, 101, 108, 108, 111], 0); // "Hello" in ASCII
    amountDueView[0] = 123.45;
    
    // You've created a data structure combining different data types.

**8. Conversion to Normal Arrays:**

**Example:** Converting a Uint8Array to a regular JavaScript array.

    // Create a Uint8Array
    const uint8Array = new Uint8Array([1, 2, 3, 4]);
    
    // Convert it to a normal JavaScript array
    const normalArray = Array.from(uint8Array);
    // or
    const normalArray2 = [...uint8Array];
    
    // Now you can use normalArray with standard array methods.

These examples illustrate how typed arrays and buffers can be used to work with binary data efficiently, decode text, and handle complex data structures. Each example showcases a different aspect of typed arrays in action.

## Iterators and generators:

**Creating a Custom Iterator:**

    // Custom iterator to generate a range of numbers
    function makeRangeIterator(start = 0, end = Infinity, step = 1) {
      let nextIndex = start;
      let iterationCount = 0;
    
      const rangeIterator = {
        next() {
          let result;
          if (nextIndex < end) {
            result = { value: nextIndex, done: false };
            nextIndex += step;
            iterationCount++;
            return result;
          }
          return { value: iterationCount, done: true };
        },
      };
      return rangeIterator;
    }
    
    // Using the iterator
    const it = makeRangeIterator(1, 10, 2);
    let result = it.next();
    while (!result.done) {
      console.log(result.value); // 1 3 5 7 9
      result = it.next();
    }
    console.log("Iterated over sequence of size:", result.value); // [5 numbers returned]

### Generator Functions:
**2. Creating a Generator Function:**

    // Generator function to generate a range of numbers
    function* makeRangeGenerator(start = 0, end = Infinity, step = 1) {
      let iterationCount = 0;
      for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
      }
      return iterationCount;
    }
    
    // Using the generator
    const generator = makeRangeGenerator(1, 10, 2);
    for (const value of generator) {
      console.log(value); // 1 3 5 7 9
    }

### Iterables:
**3. Creating a Custom Iterable:**

    // Custom iterable object
    const myIterable = {
      *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
      },
    };
    
    // Using the iterable in for...of loop
    for (const value of myIterable) {
      console.log(value); // 1 2 3
    }

### Advanced Generators:
**4. Advanced Generator with Reset:**

    // Fibonacci generator with reset capability
    function* fibonacci() {
      let current = 0;
      let next = 1;
      while (true) {
        const reset = yield current;
        [current, next] = [next, next + current];
        if (reset) {
          current = 0;
          next = 1;
        }
      }
    }
    
    const sequence = fibonacci();
    console.log(sequence.next().value); // 0
    console.log(sequence.next().value); // 1
    console.log(sequence.next().value); // 1
    console.log(sequence.next(true).value); // 0 (reset)
    console.log(sequence.next().value); // 1 (reset)

**Forcing an Exception in a Generator:**

    function* exampleGenerator() {
      try {
        yield 1;
        yield 2;
        throw new Error("Generator Error");
        yield 3; // This will not be executed
      } catch (error) {
        console.error(error.message); // Generator Error
      }
    }
    
    const generator = exampleGenerator();
    console.log(generator.next().value); // 1
    console.log(generator.next().value); // 2
    generator.throw(new Error("Forced Error")); // Throws an error

**Generator Return Method:**

    function* returnGenerator() {
      yield 1;
      yield 2;
      return 3; // Finishes the generator
    }
    
    const generator = returnGenerator();
    console.log(generator.next().value); // 1
    console.log(generator.next().value); // 2
    const result = generator.next(); // { value: 3, done: true }
    console.log(result.value); // 3

These examples demonstrate the use of iterators, generator functions, and custom iterables in JavaScript, showcasing how to create and use them effectively.

## Meta programming

Meta programming in JavaScript involves using features like Proxy, Reflect, and other mechanisms to customize or intercept fundamental language operations. Here's an explanation and examples of how these features work:

**Proxies:**

Proxies allow you to intercept and customize operations on objects.

You define a handler object that contains traps, which are methods for handling various operations.

These traps intercept operations like property access, assignment, enumeration, function invocation, and more.

Here's an example of using a Proxy to intercept property access and return a custom value:

    const handler = {
      get(target, name) {
        return name in target ? target[name] : 42;
      },
    };
    
    const p = new Proxy({}, handler);
    p.a = 1;
    console.log(p.a, p.b); // Output: 1, 42

In this example, when trying to access an undefined property p.b, it returns the custom value 42.

**Reflect:**

Reflect is a built-in object that provides methods for interceptable JavaScript operations.

It mirrors many operations that can be performed on objects, like property access, assignment, and more.

**Here's an example of using Reflect to call a function:**

    const result = Reflect.apply(Math.floor, undefined, [1.75]);
    console.log(result); // Output: 1

Reflect simplifies common operations like function invocation.

**Revocable Proxy:**

You can create a revocable Proxy using Proxy.revocable(). This allows you to revoke the proxy, making it unusable.

**Here's an example:**

    const revocable = Proxy.revocable(
      {},
      {
        get(target, name) {
          return `[[${name}]]`;
        },
      }
    );
    
    const proxy = revocable.proxy;
    console.log(proxy.foo); // Output: "[[foo]]"
    
    revocable.revoke();
    
    console.log(proxy.foo); // Throws a TypeError: Cannot perform 'get' on a proxy that has been revoked

After revocation, any operation on the proxy leads to a TypeError.

**Checking Property Definition Success with Reflect:**

Reflect methods often return Boolean values to indicate success or failure.

For example, you can use Reflect.defineProperty() to define a property and check if it was successful:

    if (Reflect.defineProperty(target, property, attributes)) {
      // Property definition was successful
    } else {
      // Property definition failed
    }

This allows you to handle property definitions more gracefully.

Meta programming with Proxies and Reflect gives you powerful tools to control and customize the behavior of objects and operations in JavaScript. You can use these features to implement advanced patterns and solve various programming challenges.

## Javascript Modules

JavaScript modules provide a way to organize and structure your code into reusable components. They help you break down your code into smaller, manageable pieces, making it easier to maintain and collaborate with others. Here's a summary of key concepts related to JavaScript modules:

**Background on Modules:**

JavaScript started as a language for small scripting tasks, but over time, it has evolved to support large applications both in browsers and other environments like Node.js.

Splitting JavaScript programs into separate modules has become essential for managing complexity and promoting code reusability.

Native module functionality is now supported by modern browsers, eliminating the need for external libraries or frameworks like CommonJS, AMD, RequireJS, Webpack, and Babel.

**Browser Compatibility:**

Modern browsers support native JavaScript modules with the import and export statements. You can check compatibility for specific browsers using compatibility tables.

The import and export statements allow browsers to optimize loading of modules efficiently.

**Example Structure:**

In JavaScript modules, you typically have an HTML file and one or more JavaScript files (modules).
The HTML file includes your JavaScript files using <script type="module"> tags.

**Exporting Module Features:**

To make features (variables, functions, classes) available for use in other modules, you export them using the export statement.

You can export features individually or group them in a single export statement.

**Example:**

    // square.js
    export const name = "square";
    
    export function draw(ctx, length, x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, length, length);
    
      return { length, x, y, color };
    }

**Importing Features into Your Script:**

To use features from other modules, you import them into your script using the import statement.
Specify the features you want to import within curly braces and provide the module's relative path.
You can also import using alias names for better clarity.

**Example:**

    // main.js
    import { name, draw } from "./modules/square.js";
    
    const myCanvas = create("myCanvas", document.body, 480, 320);
    const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");

**Note on .mjs vs. .js:**

While some developers use the .mjs extension for module files, you can continue using .js.

Ensure that your server serves module files with the correct MIME type (text/javascript).

Use the `<script type="module">` attribute in HTML to indicate module files.

JavaScript modules are a fundamental part of modern web development, allowing you to create organized, reusable, and maintainable code. They help you manage complexity and improve the structure of your applications.

**Defining an Import Map:**

Import maps are defined using a JSON object inside a <script> element with the type attribute set to importmap.

You can define an import map in an HTML file using a <script> tag, and it should be declared before any <script> elements that import modules.

Import maps consist of an imports object that maps module specifiers (names used in import statements) to module URLs (paths to the actual module files).

    <script type="importmap">
      {
        "imports": {
          "module-name": "path/to/module.js",
          "another-module": "https://example.com/another-module.js"
        }
      }
    </script>

**Using Bare Names:**
Import maps allow you to use "bare names" as module specifiers, similar to how Node.js resolves module names.
This allows you to use module names without specifying a path, making your code more concise.

    // Using a bare name to import a module defined in the import map
    import { someExport } from "module-name";

**Remapping Module Paths:**

Import map entries can remap module paths, allowing you to specify different paths for modules.

Module specifier map entries that end with a trailing forward slash (/) serve as path prefixes, remapping whole classes of URLs.

    // Remap a URL as a prefix
    import { someExport } from "https://example.com/some-module/";

**Packages of Modules:**

Import maps can emulate working with packages and modules, similar to how Node.js handles dependencies.

You can map a package name to a base path and import modules from within that package.

    // Mapping a package and importing modules from it
    import moduleA from "package-name/moduleA.js";
    import moduleB from "package-name/moduleB.js";

**Scoped Modules for Version Management:**

Import maps support scopes, which allow you to specify different mappings for specific paths.

This can be useful for managing different versions of modules based on the path of the importing script.

    // Scoping modules for version management
    import moduleX from "scope-name/moduleX.js";

**Improved Caching:** Import maps can improve caching by mapping unhashed module names to their actual hashed filenames.

This makes it easier to update modules without changing import paths in your code.

    // Mapping unhashed module names to hashed filenames
    import mainScript from "main_script";
    import dependencyScript from "dependency_script";

**Applying Import Maps in HTML:** To use import maps in an HTML file, include a `<script>` tag with the type attribute set to module and specify the source URL of the main module.

The import map will be applied automatically to module imports within that HTML file.

    <script type="module" src="main.js"></script>

**Other Considerations:** When testing locally, you may encounter CORS errors when using import maps. Consider testing your code through a local server.

Modules are executed only once, even if imported by multiple <script> tags.
Imported module features are scoped to the importing module and are not available globally.
You can rename imports and exports using the as keyword to avoid naming conflicts.
Import maps are a powerful tool for managing module imports in modern JavaScript applications, providing flexibility and improved maintainability in your code.

**Creating a Module Object:** Module Object: You can import all exports from a module and organize them within a module object by using the import * as Module syntax. This approach creates a dedicated namespace for the module's exports, making your code more organized and avoiding naming conflicts.

    import * as Module from "./modules/module.js";

**Usage:** After creating the module object, you can access the module's exports through the object's properties:

    Module.function1();
    Module.function2();

**Benefits:** This technique is particularly useful when working with multiple modules, as it helps keep your code clean and reduces the risk of naming clashes between modules.

**Modules and Classes:** Exporting Classes: JavaScript modules allow you to export classes as well as other types of exports. Exporting classes is a good choice if your code follows an object-oriented approach.

    export class Square {
      constructor(ctx, listId, length, x, y, color) {
        // ...
      }
    
      draw() {
        // ...
      }
    
      // ...
    }

**Importing Classes:** You can import classes from a module and create instances of those classes for use in your application:

    import { Square } from "./modules/square.js";
    
    const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();

**Benefits:** Exporting and importing classes can make your code more object-oriented and encapsulated, which can be especially useful in larger applications.

**Aggregating Modules:** Module Aggregation: Sometimes, you may want to aggregate multiple modules into a single parent module for simplicity or to create higher-level abstractions.

**Exporting Submodules:** In the parent module, you can export features from submodules using statements like export * from "x.js"; or export { name } from "x.js";.

    // Inside shapes.js
    export { Square } from "./shapes/square.js";
    export { Triangle } from "./shapes/triangle.js";
    export { Circle } from "./shapes/circle.js";

**Importing Features:** In your application code, you can import features from the parent module instead of importing from individual submodules.

    import { Square, Circle, Triangle } from "./modules/shapes.js";

**Benefits:** This technique simplifies imports and can be helpful when dealing with complex module hierarchies or when you want to create higher-level abstractions.

### Dynamic Module Loading:
**Dynamic Imports:** Dynamic module loading allows you to import modules at runtime using the import() function. It returns a Promise that resolves to a module object, giving you access to the module's exports.

    import("./modules/myModule.js").then((module) => {
      // Do something with the module.
    });

**Usage:** You can use dynamic imports to load modules only when needed, improving the performance of your application. This is particularly useful for lazy-loading modules or handling different user interactions.

**Benefits:** Dynamic imports are versatile and can be used in various scenarios, including when working with non-module scripts in an existing codebase.

These advanced techniques in modern JavaScript modules help you write modular and organized code, manage dependencies effectively, and optimize the loading of modules in your web applications. Depending on your project's requirements, you can choose the approach that best suits your needs.

**Top-Level Await:**

    // getColors.js
    // This module fetches colors from an external JSON file and exports them using top-level await
    
    const colors = fetch("../data/colors.json").then((response) => response.json());
    
    export default await colors;


    // main.js
    // Importing colors with top-level await
    
    import colors from "./modules/getColors.js";
    import { Square, Circle, Triangle } from "./modules/shapes.js";
    
    const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, colors.blue);
    const circle1 = new Circle(myCanvas.ctx, myCanvas.listId, 75, 200, 100, colors.green);
    const triangle1 = new Triangle(myCanvas.ctx, myCanvas.listId, 100, 75, 190, colors.yellow);
 
 **Import Declarations Hoisting:**

    // main.js
    // Importing Canvas in the middle of the code (hoisting)
    
    const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
    
    // Import declarations are hoisted, so this works even when importing in the middle of the code
    import { Canvas } from "./modules/canvas.js";
    
    myCanvas.createReportList();
    
  **Cyclic Imports:**

    // a.js
    // Cyclic import example: a.js imports b.js, and b.js imports a.js
    
    import { b } from "./b.js";
    
    export const a = 2;



**Cyclic import example:** b.js imports a.js, and a.js imports b.js

    // b.js
    import { a } from "./a.js";
    
    export const b = 1;
    Authoring "Isomorphic" Modules:
    javascript
    Copy code
    // myModule.js
    // Isomorphic module example: Detecting the runtime environment
    
    let password;
    if (typeof process !== "undefined") {
      // We are running in Node.js; read it from `process.env`
      password = process.env.PASSWORD;
    } else if (typeof window !== "undefined") {
      // We are running in the browser; read it from an input box
      password = document.getElementById("password").value;
    }

**Troubleshooting:**

    // Troubleshooting tip: Serving .mjs files with the correct MIME type
    
    // Ensure that .mjs files are served with the correct MIME type in your server configuration.
    
    // Example using Express.js
    const express = require("express");
    const app = express();
    
    app.use((req, res, next) => {
      res.header("Content-Type", "application/javascript");
      next();
    });
    
    app.use(express.static("public"));
    
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
