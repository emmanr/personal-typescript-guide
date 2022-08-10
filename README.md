<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Typescript Documentation</h3>

  <p align="center">
    From setting up to using typescript.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#setup">Setup</a></li>
  </ol>
</details>


## Setup

### Installing Typescript compiler

We need a compiler for our typescript to run in the browser or in node environment.
```
npm install -g typescript ts-node
```
* typescript: will convert our ts to js
* ts-node: will convert our ts to js and automatically run the code in node

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



<p align="right">(<a href="#top">back to top</a>)</p>

