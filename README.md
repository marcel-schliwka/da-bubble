# DaBubble

Welcome to DaBubble!
This is the final project from the Frontend Part of a WebDevelopment Bootcamp at the German Company "Developer Akademie" in Munich.
The Project was build with Angular and Firebase as a Backend.

You can view the live version of the project here: *(not released yet)*


# Setting up your own copy
If you want to host your own copy of the project you need to follow some steps.

## Dependencies
- NodeJS
- Angular CLI
- Firebase Tools (`npm install -g firebase-tools`)

## Setup
1. Clone the repository to your working directory
2. Navigate inside the project directory by typing `cd da-bubble`
3. Install the dependencies with `npm install` 
4. Create a Firebase Project inside your browser on [Google Firebase](https://firebase.google.com/) 
    * Login to your Account and go to the firebase console
    * Click on "Add Project"
    * Fill out the Project Name and other details
    * Click "Create"
5. Make sure you enable **Firebase Auth**, **Firestore** and **Storage**
6. Copy the firebase configuration:
    * Inside the src/ directory, create the following structure: enviroments/enviroment.ts

### The enviroment.ts file should look like this: (make sure you fill in your own information)
```typescript
export const enviroment = {
    production: false,
    firebase: {
      projectId: '--- FILL YOUR DATA IN ---',
      appId: '--- FILL YOUR DATA IN ---',
      storageBucket: '--- FILL YOUR DATA IN ---',
      apiKey: '--- FILL YOUR DATA IN ---',
      authDomain: '--- FILL YOUR DATA IN ---',
      messagingSenderId: '--- FILL YOUR DATA IN ---',
    },
  };
```
*Make sure to set the production key to `true` if you configured everything and deployed the project to your server.*

7. If everything is setup correctly, you can try testing the project by running `ng serve --open` in your terminal.