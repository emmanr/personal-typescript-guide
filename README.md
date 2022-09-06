<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" alt="Logo" width="80" height="80">
  </a>

  <h3>Typescript Documentation</h3>

  Typescript is Javascript, it adds static typing to Javascript.

  Typescript need a compiler to run on top of Javascript.

  Typescript help us avoid assigning different values in our variable or functions, and suggests what type of variable we can use, it also help us see any property available for our variables.

  <img src="images/pokemon-types.jpeg" alt="Pokemon Types" width="830" height="196">

 <br/>
 <br/>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#type-annotations">Type Annotations</a></li>
    <li><a href="#type-inference">Type Inference</a></li>
    <li><a href="#when-to-use-type-annotations">When to use Type Annotations</a></li>
    <li><a href="#functions-annotation-and-inference">Functions Annotation and Inference</a></li>
  </ol>
</details>

## Setup

### :zap: Installing Typescript compiler

We need a compiler for our typescript to run in the browser or in node environment.

```
npm install -g typescript ts-node
```

- typescript: will convert our ts to js
- ts-node: will convert our ts to js and automatically run the code in node

To check if we successfully install typescript:

```
tsc --help
```

tsc means typescript compiler

###### Example

Testing tsc if it converts to js. (To create a typescript file, we just need to give it a ts file extension)

```javascript
#index.ts

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  console.log(response);
});
```

```
tsc index.ts
```

this will generate an index.js which we will run in node or in the browser. But its a bit cumbersome to run 2 commands (converting and running).

That's why we installed ts-node. Which convert and run our typescript in the node server.

```
ts-node index.ts
```

<br/>

## Type Annotations

<div align="center">
  <img src="images/type-annotations.png" alt="Type Annotations" width="462" height="176">
</div>

Type Annotations is a code(type) we add to tell Typescript what type a variable should be.

- "I am string" -> string
- 22 -> number
- "March 22, 1992" -> Date

###### Examples:

```typescript
let apples: number = 5;
let fruit: string = 'apple';

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects:
const now: Date = new Date();

// Array
const colors: string[] = ['red', 'blue', 'green'];
const peopleAges: number[] = [22, 60, 15, 5];
const status: boolean[] = [true, false, false];

// Class instance
class Car {}
let car: Car = new Car();

// Object literals
const point: { x: number; y: number } = {
  x: 10,
  y: 29,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const logAndReturnNumber: (i: number) => number = (i) => {
  console.log(i);
  return i + 10;
};

const logAndReturnNumberInferenceArgument = (i: number): number => {
  console.log(i);
  return i + 10;
};
```

<details>
  <summary><h5>:interrobang: Why do we have to write "i: number" in the function declaration. Why 2 times the same?</h5></summary>

In terms of why you put `i: number` twice, it's because it's not the same i each time. The second is the actual argument or parameter to the function. The first is a type annotation of what type of argument will be passed as a parameter.

For example, they could be different letters:

```javascript
const logNumber: (z: number) => void = (i: number) => {};
```

<p>Here note that I've used z for the first one, i for the second. The first (z) is the annotation of the type; the i is the actual variable. You could leave the i without a type annotation:</p>

```javascript
const logNumber: (z: number) => void = (i) => {};
```

<p>Here the type of i will be inferred to be number. But note that you wouldn't want to do this:</p>

```javascript
const logNumber: (z) => void = (i: number) => {};
```

<p>Here I've left z without a type annotation but put back in the annotation for i. What this would do is give you a type warning saying that z is implicitly of the "any" type.</p>

<p>The same exact thing would apply if you replace my z with the i in the original example.</p>

```javascript
const logNumber: (i) => void = (i: number) => {};
```

<p>Here I replaced my z with the i and you would get that same type warning. That shows why you have two places where you type annotation with number.</p>

<p>This isn't to say you must have both. You can frame the situation where you don't have to use two:</p>

```javascript
const logNumber = (i: number): void => {};
```

<p>There, however, you are not fully annotating the function.</p>

</details>

<br/>

## Type Inference

<div align="center">
  <img src="images/type-inference.png" alt="Type Inference" width="421" height="154">
</div>

Inference is that Typescript will automatically assign a type to our variable.

###### Examples:

```javascript
let pet = 'Dog'; // Typescript will automatically assign it with "string" type
let age = '30'; // automatically type number

age = 'something'; // will have an error -- Type "string" is not assignable to type "number"
```

If Typescript can not determine the type of our variable or function, the type will become `any`.

> Must avoid variables with type `any` at all costs

<br/>
<br/>

## When to use Type Annotations

<details>
  <summary>1. When a function return's the <i>any</i> type</summary>

  ```javascript
  const json = '{"x": 10, "y": 20}';
  const coordinates = JSON.parse(json);
  console.log(coordinates); // {x: 10, y: 20}

  coordinates.somethingsomething;
  ```

  In above example, even though `somethingsomething` doesn't exist, typescript will not notify us.
  Because typescript automatically assign type `any` to our coordinates.

  `any` means typescript doesn't know what type should be assign to it, it's like we're not using typescript in here.
  since we are using typescript, we should avoid the type `any`. Because the purpose of typescript, is to assign a type to our variables or functions.

  > When assigning a type in a variable like string, numbers, etc.,
  > typescript help us see all available method or properties for that specific variables

  ```javascript
  let myName: string = 'emman';
  // by typing "myName", typescript will suggest all available properties for string like ".toLowerCase"

  // For coordinates example above, adding type notation:
  const json = '{"x": 10, "y": 20}';
  const coordinates: { x: number; y: number } = JSON.parse(json);
  console.log(coordinates); // {x: 10, y: 20}
  ```
</details>

<details>
  <summary>2. When we declare a variable on one line and initialize it later</summary>

  ```javascript
  let words = ['pet', 'food', 'colors'];
  let foundWord: boolean;
  // let foundWord = false;

  for (let i =0; i < words.length; i++) {
    if (words[i] === 'food') {
      foundWord = true;
    }
  }
  ```

  > In above example,
  > if we know the variable would be boolean, best way is to assign it to "false"
  > We just want to show - When we declare a variable and initialize it later
</details>

<details>
  <summary>3. Variable whose type cannot be inferred correctly (When Inference Doesn't Work)</summary>

  <p>
    For example we declare a variable that has a default boolean value, but later on, we want to change it's value to a number or boolean again.
  </p>

  ```javascript
    let numbers = [10, 25, 50];
    let greaterThanTwenty: boolean | number = false; // could be boolean or a number

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 20) {
        greaterThanTwenty = numbers[i];
      }
    }
  ```
</details>

<br/>
<br/>

## Functions Annotation and Inference

### Type Annotations for Functions

Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return.

###### Type annotations example:

```typescript
  const add = (a: number, b: number): number => {
    return a + b;
  }

  const multiply = function(a: number, b:number): number {
    return a * b;
  }

  function divide(a: number, b:number): number {
    return a / b;
  }

  const nothing = (message: string): void => {
    console.log(message);

    // return undefined;
    // return null;
    // return 'something';
  }

  const throwError = (message: string): never => {
    throw new Error(message);
  }
```

For difference between `void` and `never`:

Void - it returns void (only null or undefined)

Never - it never returns anything


### Type Inference for Functions

Typescript tries to figure out what type of value a function will return.

###### Type inference example:

```typescript
  const add = (a: number, b: number) => {
    return a + b;
  } // type will automatically be a number

  const subtract = (a: number, b: number) => {
    console.log(a - b);
  } // type will automatically be a void (no return = void)

  const multiply = (a, b) => {
    return a * b;
  } // type will automatically be a number

  const addString = (a, b) => {
    return a + b;
  } // type will automatically be any
```

Typescript will automatically assign a return `type` base in what we return.

If we omit the return, then the type will be `void`.

Typescript won't do inference in a function argument, instead it will assign type `any` for the argument.

<p align="right">(<a href="#top">back to top</a>)</p>
