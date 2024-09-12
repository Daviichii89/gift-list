# Birthday Gift List

<p align="center">   
   <img src="https://github.com/user-attachments/assets/865d70fc-8328-4420-a5c7-8425a494bd06" width="450" height="450" />
</p>
<p align="center">
   Welcome to the Birthday Gift Registry! This app is designed to help you organize and manage the gifts you want to give or receive on special occasions like birthdays.
</p>
<p align="center">
   Whether you're planning your own celebration or helping organize someone else's event, our app offers you a simple and convenient way to keep track of the gifts you'd like to receive or plan to give.
</p>

## 🚧 Project Status 🚧

This project is currently under construction. Although many of the core features are implemented, we are still working on improvements and adding functionality. During this development phase, significant changes to the code and project structure may occur.

## Firebase configuration

```js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};
```

You must create a `.env` file with the keys like this:

```js
VITE_APIKEY = 'XXXXXXXXXXXXXXXX' 
VITE_AUTHDOMAIN = 'XXXXXXXXXXXXXXXX'
VITE_PROJECTID = 'XXXXXXXXXXXXXXXX'
VITE_STORAGEBUCKET = 'XXXXXXXXXXXXXXXX'
VITE_MESSAGINGSENDERID = 'XXXXXXXXXXXXXXXX'
VITE_APPID = 'XXXXXXXXXXXXXXXX'
```
Keys and configuration are obtained in the project configuration (in your [firebase](https://firebase.google.com))

## Commands to run the project:

1. Clone the project.
2. Run `npm install`.
3. Run the devServer `npm dev`.

## Tests (🚧 Under construction 🚧)

1. Run tests using jest. Using `--watchAll` option for default.

    Using NPM:
    
    ```
    npm test
    ```
    
    or
    
    Using PNPM:
    
    ```
    pnpm test
    ```

## Build

1. Run
   
   Using NPM:
   ```
   npm build
   ```
   Using NPM:

    ```
    pnpm build
    ```
2. Take the dist folder and deploy it.
