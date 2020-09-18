# Tugboat

This application is designed to show a leaderboard and ask a user an indefinite amount of questions based off of Jeopardy game show questions and answers.

This was built using react / redux with a Firestore realtime database to store data. The questions and answers come from the api [http://jservice.io](http://jservice.io).

To run:

```
npm i
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner once.<br>

### `npm run test:dev`

Launches the test runner in the interactive test window. Watches all changes.

### Items of Note

-   If you view the network request in dev tools you can see the answer to the question.
-   There is no authentication, so once you create a user and close the question, you won't be able to start up again with that same user.
-   The firestore database has no authentication on it.


this is a test change
