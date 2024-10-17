# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

I have changed the design and added functionalities to the application.

## Table of contents

- [Overview](#overview)
- [Screenshots](#screenshots)
  - [Available currencies](#available-currencies)
  - [Available languages](#available-languages)
  - [Light version](#light-version)
    - [Desktop version in English](#desktop-light-version-in-english)
       - [Form](#desktop-light-form)
       - [Form validation](#desktop-light-form-validation)
       - [Result after clicking 'Calculate'](#desktop-light-result-after-clicking-calculate)
    - [Mobile version in German](#mobile-light-version-in-german)
       - [Form](#mobile-light-form)
       - [Form validation](#mobile-light-form-validation)
       - [Result after clicking 'Calculate'](#mobile-light-result-after-clicking-calculate)
  - [Dark version](#dark-version)
    - [Desktop version in English](#desktop-dark-version-in-english)
       - [Form](#desktop-dark-form)
       - [Form validation](#desktop-dark-form-validation)
       - [Result after clicking 'Calculate'](#desktop-dark-result-after-clicking-calculate)
    - [Mobile version in German](#mobile-dark-version-in-german)
        - [Form](#mobile-dark-form)
        - [Form validation](#mobile-dark-form-validation)
        - [Result after clicking 'Calculate'](#mobile-dark-result-after-clicking-calculate)
- [Tech Stack](#tech-stack)
- [License](#license)
- [Installation and Usage](#installation-and-usage)

## Overview
A SPA application with a responsive design, developed using React and TypeScript for calculating tips and total bills per person, offering light and dark modes, as well as support for six different languages (English, Bulgarian, German, French, Spanish and Italian). 

## Screenshots

### Available currencies

In dark mode:

![image](https://github.com/user-attachments/assets/45f27411-4efa-4d09-8920-9cf20111a4f6)

### Available languages

In dark mode:

![image](https://github.com/user-attachments/assets/ec465fd0-1e44-493b-b6db-423523e2bef2)

### Light version

#### Desktop version in English
<a id="desktop-light-version-in-english"></a>

##### Form
<a id="desktop-light-form"></a>

![image](https://github.com/user-attachments/assets/2fe9648a-2e2a-4aca-8b71-9b2c3ff06db3)

##### Form validation 
<a id="desktop-light-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/fb546393-88a7-4c33-897b-be10f3ce33c9)

The bill amount, tip percentage, and number of people must be at least 1:

![image](https://github.com/user-attachments/assets/7447c7d3-c157-47ef-835d-ad6ab873e10d)

##### Result after clicking 'Calculate'
<a id="desktop-light-result-after-clicking-calculate"></a>

![image](https://github.com/user-attachments/assets/46bf0fe0-62ae-4c85-aafc-d0ade5d4afeb)

#### Mobile version in German
<a id="mobile-light-version-in-german"></a>

##### Form
<a id="mobile-light-form"></a>

![image](https://github.com/user-attachments/assets/17155900-ed55-4d9d-a06a-423849fbedfc)

##### Form validation 
<a id="mobile-light-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/19380ebe-b586-4178-b706-6c63842b0cf7)

The bill amount, tip percentage, and number of people must be at least 1:

![image](https://github.com/user-attachments/assets/ad1e19c6-3947-423b-88ec-b57d6bf7e86d)

##### Result after clicking 'Calculate'
<a id="mobile-light-result-after-clicking-calculate"></a>

![image](https://github.com/user-attachments/assets/d11b50a4-7834-452d-82de-e405f30235de)

### Dark version

#### Desktop version in English
<a id="desktop-dark-version-in-english"></a>

##### Form
<a id="desktop-dark-form"></a>

![image](https://github.com/user-attachments/assets/75cee22c-4355-4c1f-8650-74d21a0c749c)

##### Form validation 
<a id="desktop-dark-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/d0d0ebf5-c45f-43e7-8331-29dbe4c40617)

The bill amount, tip percentage, and number of people must be at least 1:

![image](https://github.com/user-attachments/assets/69d03c4a-69d4-4cfe-9436-b5240247e620)

##### Result after clicking 'Calculate'
<a id="desktop-dark-result-after-clicking-calculate"></a>

![image](https://github.com/user-attachments/assets/ff3cc934-1796-47d9-9c10-060df9ad911b)

#### Mobile version in German
<a id="mobile-dark-version-in-german"></a>

##### Form
<a id="mobile-dark-form"></a>

![image](https://github.com/user-attachments/assets/f6bf7258-261c-49a9-a374-5bb9cea18701)

##### Form validation
<a id="mobile-dark-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/20d5b57b-6655-45e0-8993-475893fd3f86)

The bill amount, tip percentage, and number of people must be at least 1:

![image](https://github.com/user-attachments/assets/7764ce7f-8ddf-4669-a6fa-1ff9a98e6a35)

##### Result after clicking 'Calculate' 
<a id="mobile-dark-result-after-clicking-calculate"></a>

![image](https://github.com/user-attachments/assets/938d1b0d-b0d2-46b4-9692-560ea716774e)

## Tech Stack

### Build Tool
- Vite: A fast build tool for modern web projects. It is used under the MIT License. You can find it [here](https://github.com/vitejs/vite/blob/main/LICENSE).

### Language
- TypeScript: A superset of JavaScript that compiles to plain JavaScript. It is used under the Apache License 2.0. You can find it [here](https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt).

### Libraries
- React: A JavaScript library for building user interfaces. It is used under the MIT License. You can find it [here](https://github.com/facebook/react/blob/main/LICENSE);
  
- Material UI: A popular React UI framework for building user interfaces. It is used under the MIT License. You can find it [here](https://github.com/mui/material-ui/blob/master/LICENSE).
  
- React-hook-form: A library for managing forms in React. It is used under the MIT License. You can find it [here](https://github.com/react-hook-form/react-hook-form/blob/master/LICENSE);
  
- Yup: A JavaScript schema builder for value parsing and validation. It is used under the MIT License. You can find it [here](https://github.com/jquense/yup/blob/master/LICENSE.md).

- **React i18next**: A powerful internationalization framework for React. It is used under the MIT License. You can find it [here](https://github.com/i18next/react-i18next/blob/master/LICENSE).


## License
This project uses several libraries that are licensed under the MIT License, including Vite, React, Material UI, React-hook-form, Yup and React i18next. Additionally, TypeScript is licensed under the Apache License 2.0.

MIT License allows for free use, modification, and distribution of the code, as long as the original license text and copyright notice are included in all copies or substantial portions of the software.

Apache License 2.0 permits users to use, modify, and distribute the software, but it requires that you include a copy of the license in any distribution and provide notice of any modifications made to the original code.

## Installation and Usage
### Step 1: Clone the repository to your local machine:
### Step 2: Install Dependencies
Run the following command to install the required dependencies:

```bash
npm install
```
### Step 3: Running the Application
To start the development server, run:

```bash
npm run dev
```
### Step 4: Open the Application
Open your browser and navigate to: 
**http://localhost:5173/**




