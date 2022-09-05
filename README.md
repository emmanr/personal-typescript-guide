<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Typescript Documentation</h3>

  <p align="center">
    Typescript is Javascript, it adds static typing to Javascript.
  </p>

  <p align="center">
    Typescript need a compiler to run on top of Javascript.
  </p>

  <p align="center">
    Typescript help us avoid assigning different values in our variable or functions, and suggests what type of variable we can use, it also help us see any property available for our variables.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#type-annotations">Type Annotations</a></li>
    <li><a href="#type-inference">Type Inference</a></li>
    <li><a href="#when-to-use-type-annotations">When to use Type Annotations</a></li>
  </ol>
</details>

## Setup

### Installing Typescript compiler

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

## Type Annotations

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
  <summary><h5>Why do we have to write "i: number" in the function declaration. Why 2 times the same?</h5></summary>

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

## Type Inference

Inference is that Typescript will automatically assign a type to our variable or functions.

###### Examples:

```javascript
let pet = 'Dog'; // Typescript will automatically assign it with "string" type
let age = '30'; // automatically type number

age = 'something'; // will have an error -- Type "string" is not assignable to type "number"
```

If Typescript can not determine the type of our variable or function, the type will become `any`.

> Must avoid variables with type `any` at all costs

## When to use Type Annotations

<h3>When to use Annotations</h3>

1. Function that returns the `any` type

```javascript
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

coordinates.somethingsomething;
// will not cause an error, because this variable is in type "any"
```

> When assigning a type in a variable like string, numbers, etc., typescript help us see all available method or properties for that specific variables

```javascript
let myName: string = 'emman';
// by typing "myName", typescript will suggest all available properties for string like ".toLowerCase"
```

<p align="right">(<a href="#top">back to top</a>)</p>
