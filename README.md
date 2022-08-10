<div id="top"></div>



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



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

[![Product Name Screen Shot][product-screenshot]](https://example.com)

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
```
# index.ts

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  console.log(response);
});
```

<p align="right">(<a href="#top">back to top</a>)</p>

