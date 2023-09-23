# Simple Quiz Application
### CausalFunnel Assignment ~ By Sourabh Sikarwar

#### Overview
A simple quiz application where users can answer questions and get their score at the end of the quiz. The application is built using React.js and TailwindCSS for styling. The application is responsive and works on mobile, tablet and desktop devices.

#### Approach
The main idea was to create a simple quiz application first where user can answer questions and see their score. After that, result section was enhanced with answers comparision and report generation. Then, extra features were added.

#### Pages
The application has 3 pages:
1. Home Page: This page takes the user details, validate them and then allow them to take test.
2. Start Page: Here questions are fetched and instructions are shown to the user. User can start the quiz from here.
3. Test Page: Here user can see the question and options with a question navigation components. User can select an option and move to next question. User can also go back to previous question. User can also submit the test from here. A timer is added to show the time left for the test.
4. Result Page: Here user can see their score and correct answers. User can also see the report of their answers. User can get the report on his Email by clicking on the button.

## Installation

To run this project locally, you will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed on your machine. After installing Node.js and npm, follow these steps:

1. Clone this repository
2. Open the terminal in the project directory, and run the following command to install all the dependencies:
```bash
npm install
```
3. After installing all the dependencies, run the following command to start the development server:
```bash
npm start
```
4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Features

#### Required
1. User input validation
2. Timer
3. Question navigation through pagination and question navigation component
4. Report generation and answers comparision

#### Bonus
1. Responsive design
2. Report generation on Email


