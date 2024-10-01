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
- [Installation and Usage](#installation-and-usage)

## Overview
SPA application with responsive design, developed using React and TypeScript, for calculating the tip and the total bill per person, offering light and dark modes, as well as support for 6 different languages (English, Bulgarian, German, French, Spanish, Italian). 

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

![image](https://github.com/user-attachments/assets/ea4932b7-46c9-48e4-88ab-ccf36402c64d)

##### Form validation 
<a id="desktop-light-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/10e15cd4-5572-4d68-a8fa-a747af9ed04f)

The bill amount, tip percentage, and number of people must be numbers greater than 1:

![image](https://github.com/user-attachments/assets/02956db7-7a92-47ae-876d-29ee58a6a461)

##### Result after clicking 'Calculate'
<a id="desktop-light-result-after-clicking-calculate"></a>

![image](https://github.com/user-attachments/assets/2e031f6d-e408-4233-a8d0-6fd637da2752)

#### Mobile version in German
<a id="mobile-light-version-in-german"></a>

##### Form
<a id="mobile-light-form"></a>

![image](https://github.com/user-attachments/assets/46b14285-c51e-4d30-92b4-4d3d659e16a6)

##### Form validation 
<a id="mobile-light-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/3f9eaaf2-32b7-4380-ac29-753fb09802c4)

The bill amount, tip percentage, and number of people must be numbers greater than 1:

![image](https://github.com/user-attachments/assets/dfcd1def-a841-4300-b499-7a49575453e2)

##### Result after clicking 'Calculate'
<a id="mobile-light-result-after-clicking-calculate"></a>

![image](https://github.com/user-attachments/assets/b6499337-20c5-4c5b-9958-a00df04f03b7)

### Dark version

#### Desktop version in English
<a id="desktop-dark-version-in-english"></a>

##### Form
<a id="desktop-dark-form"></a>

![image](https://github.com/user-attachments/assets/04e70840-75d1-409b-8f3e-79b1ba4da298)

##### Form validation 
<a id="desktop-dark-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/53f96679-412b-4529-9d62-3b1ef136cd1e)

The bill amount, tip percentage, and number of people must be numbers greater than 1:

![image](https://github.com/user-attachments/assets/957662a2-e342-4267-a937-31205a4cc3fa)

##### Result after clicking 'Calculate'
<a id="desktop-dark-result-after-clicking-calculate"></a>

![image](https://github.com/user-attachments/assets/eaedae1f-d680-4bcd-9c5e-3261fa09a057)

#### Mobile version in German
<a id="mobile-dark-version-in-german"></a>

##### Form
<a id="mobile-dark-form"></a>

![image](https://github.com/user-attachments/assets/924d7ea3-7b37-4817-be17-5aec65530860)
##### Form validation
<a id="mobile-dark-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/c15c8ca1-ab95-4719-acf8-d144940195ad)

The bill amount, tip percentage, and number of people must be numbers greater than 1:

![image](https://github.com/user-attachments/assets/4e3909db-6ffa-451f-a84e-5b87c5347ebb)

##### Result after clicking 'Calculate' 
<a id="mobile-dark-result-after-clicking-calculate"></a>

![image](https://github.com/user-attachments/assets/3daf3201-4629-4a8c-86e0-88c4fe151ff5)

## Tech Stack

**Language:**
- TypeScript

**Library:**
- React;
- Material UI for build the application;
- React-hook-form for managing forms;
- Yup for form validation;
- React i18next for dynamic language switching.

## Installation and Usage
### Step 1: Clone the repository to your local machine:
### Step 2: Install Dependencies
Run the following command to install the required dependencies:
npm install
### Step 3: Running the Application
To start the development server, run:
npm run dev
## Step 4: Open the Application
Open your browser and navigate to: 
**http://localhost:5173/**


