# Lab 1: Node.js and Express Server

## Student Details

- **Name:** G Architha
- **Registration Number:** 252U1R6084
- **Section:** AIML-2B

## Live Link

**Deployed Application:** https://server-1-36qx.onrender.com

## How to Run

### Requirements
- Node.js installed
- Visual Studio Code

### Installation

Clone or download the project and open the folder in VS Code.

Install the dependencies:

```bash
npm install
```

### Environment Variables

No environment variables need to be configured manually.

The application uses `process.env.PORT` provided by Render and defaults to port `3000` when running locally.

### Start Command

```bash
node app.js
```

Open the application locally:

`http://localhost:3000`

## Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Displays welcome message |
| GET | `/about` | Displays student name and section in JSON |
| GET | `/time` | Displays current date and time |
| GET | `/hello` | Displays 404 Page Not Found |

## Screenshots

1. Home page: `screenshots/welcome.png`
2. About page: `screenshots/about.png`
3. Time page: `screenshots/time.png`
4. 404 page: `screenshots/not_found.png`
5. Express server code: `screenshots/app.js.png`
6. Node.js server code: `screenshots/server.js.png`
7. Project structure: `screenshots/project_structure.png`

## Notes: Problems Faced and Solutions

1. **Problem:** Initially, the server was not running correctly on the deployment platform.
   **Solution:** Updated the server to use `process.env.PORT || 3000`.

2. **Problem:** Render initially showed an error saying `npm` was not found during the build.
   **Solution:** Changed the build command to `yarn install` and redeployed successfully.

3. **Problem:** Incorrect file and folder paths caused errors while organizing screenshots.
   **Solution:** Created the correct screenshots folder and organized the screenshot files.

## Conclusion

Successfully created and deployed a Node.js HTTP server and an Express server with multiple GET routes and 404 error handling.
