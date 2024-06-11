# Web-based Quiz Application

## Functionalities

- Provides users with a series of multiple-choice questions.
- Requires them to select an option within a given time limit.
- If the user fails to select an option within the specified time, the application automatically moves to the next question.

## Project Overview

- useState hook is used manage various state variables to track the current quiz progress, score, and timer for each question.
- QuestionBank component contains the questions which are rendered one by one once we click on the start quiz.
- Every question will have 10 sec of time to attempt.
- If user fails to attempt in given time, next question will be rendered automatically.
- App component will conditionally render the different components based on state.
- Once we click on start quiz, state will changed and Questions component will be rendered which will display the questions one by one.
- Once user reach to last question they can submit the test.

- After submitting the test, App component will render the Score component which is responsible to display the final score.

## Technologies used

- React Components
- React Hooks
- Bootstrap
- npm
