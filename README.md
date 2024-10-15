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

![image](https://github.com/user-attachments/assets/64db68e0-85af-4dc7-87f1-eff2f3792abf)

##### Form validation 
<a id="desktop-dark-form-validation"></a>

All fields in the form are required:

![image](https://github.com/user-attachments/assets/d0d0ebf5-c45f-43e7-8331-29dbe4c40617)

The bill amount, tip percentage, and number of people must be at least 1:

![image](https://github.com/user-attachments/assets/817a5d84-8ef2-4292-be70-4310461bea75)

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




