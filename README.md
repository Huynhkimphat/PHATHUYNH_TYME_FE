<h1 align="center">Phat Huynh Tyme FE</h1>


<div align="center">
  <h3>
    <a href="https://phathuynh-tyme-fe.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/Huynhkimphat/PHATHUYNH_TYME_FE">
      Solution
    </a>
  </h3>
</div>
<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
  - [Download Project](#download-project)
    - [Step 1 : Install Nodejs and OracleDB and git](#step-1--install-nodejs-and-oracledb-and-git)
    - [Step 2 : Clone Project](#step-2--clone-project)
    - [Step 3 : Install Package](#step-3--install-package)
    - [Step 4 : Create .env file](#step-4--create-env-file)
    - [Step 5 : Run Project](#step-5--run-project)
- [What I have done](#what-i-have-done)
- [Some Improvement](#some-improvement)
- [Contact](#contact)

## Overview

### Built With

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS) 
- [JS](https://en.wikipedia.org/wiki/JavaScript)
- [ReactJS](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)

### Download Project
#### Step 1 : Install Nodejs and git
- [Nodejs](https://nodejs.org/en/)

- [Git](https://git-scm.com/)

#### Step 2 : Clone Project

- Git clone https://github.com/Huynhkimphat/PHATHUYNH_TYME_FE

#### Step 3 : Install Package
- npm i

#### Step 4 : Create .env file
    REACT_APP_API_BASE_URL = https://phathuynh-tyme-be.onrender.com
    
    Or With you run with BE, change it to 
    REACT_APP_API_BASE_URL = http://localhost:3001
  
#### Step 5 : Run Project
- IF you use the backend server which I have deploy: https://phathuynh-tyme-be.onrender.com/products => just create the .env file 
- IF you want to use http://localhost:3001, please clone the BE project and follow the 'run project' in [Backend Project](https://github.com/Huynhkimphat/PHATHUYNH_TYME_BE)

- THEN, npm start

## What I Have Done

- Implement project using reactJS, tailwindCSS and react-icons
- Build an UI similar with the figma in document: [Figma](https://www.figma.com/file/5vYZWIUgTNJ1Ud7RfV2zq4) (#4 in requirement)
- With products, I used an `useEffect` hook to make an Interval to refresh data from Backend every 60 seconds (#3 in requirement)
- With products display, I init the see more button in order to load more data (#2 in requirement)
- With the search and filter I have use some hooks and function below: (#1 in requirement)
    - use `useRef` to store input value from search input
    - use `useState` to store value in min price, max price, tier selection and price sort selection
    - reset all filter when click on reset filter button
    - apply filter to search when click on search button
- Addition, With the UI, I also implement the responsive for the UI (mobile, ipad, desktop)

## Some Improvement
- Filter when in mobile mode
- Color for the banner - because I cannot export the background in the banner in figma file because it is a block, so I colored gray for the background of this banner.
- Create more page for `about us`, `marketplace`, `our team`, `roadmap`, `white paper`
- Create function when click on `Connect Wallet` Button at header and `Subscribe` Button at footer


## Contact
- Github : [Huynhkimphat](https://github.com/Huynhkimphat)
- Email :   kimphat.devcs@gmail.com
