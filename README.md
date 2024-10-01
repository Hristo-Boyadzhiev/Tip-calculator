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

![image](https://github.com/user-attachments/assets/ea4932b7-46c9-48e4-88ab-ccf36402c64d)

##### Form validation 
<a id="desktop-light-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/10e15cd4-5572-4d68-a8fa-a747af9ed04f)

The bill amount, tip percentage, and number of people must be at least 1:

![image](https://github.com/user-attachments/assets/02956db7-7a92-47ae-876d-29ee58a6a461)

##### Result after clicking 'Calculate'
<a id="desktop-light-result-after-clicking-calculate"></a>

![image](https://github.com/user-attachments/assets/2e031f6d-e408-4233-a8d0-6fd637da2752)

#### Mobile version in German
<a id="mobile-light-version-in-german"></a>

##### Form
<a id="mobile-light-form"></a>

![image](https://github.com/user-attachments/assets/8e62f9cf-1b55-4902-9553-1d323568c9c5)

##### Form validation 
<a id="mobile-light-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/791d45a0-04b2-43e8-a025-8e758dbbf360)

The bill amount, tip percentage, and number of people must be at least 1:

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

The bill amount, tip percentage, and number of people must be at least 1:

![image](https://github.com/user-attachments/assets/957662a2-e342-4267-a937-31205a4cc3fa)

##### Result after clicking 'Calculate'
<a id="desktop-dark-result-after-clicking-calculate"></a>

![image](https://github.com/user-attachments/assets/eaedae1f-d680-4bcd-9c5e-3261fa09a057)

#### Mobile version in German
<a id="mobile-dark-version-in-german"></a>

##### Form
<a id="mobile-dark-form"></a>

![image](https://github.com/user-attachments/assets/a7b75ce4-6590-4c4e-bae7-dcb076845210)
##### Form validation
<a id="mobile-dark-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/90642a9a-ecde-4633-b5e8-cf651541c7b2)

The bill amount, tip percentage, and number of people must be at least 1:

![image](https://github.com/user-attachments/assets/236bdbbb-7245-40a0-8c91-55986c4a1f5f)

##### Result after clicking 'Calculate' 
<a id="mobile-dark-result-after-clicking-calculate"></a>

![image](https://github.com/user-attachments/assets/3daf3201-4629-4a8c-86e0-88c4fe151ff5)

## Tech Stack

### Build Tool
- Vite

### Language
- TypeScript

### Libraries
- React;
- Material UI for building the application;
- React-hook-form for managing forms;
- Yup for form validation;
- React i18next for dynamic language switching.

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




