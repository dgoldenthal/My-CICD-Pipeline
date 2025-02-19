# My-CICD-Pipeline

# CI/CD Pipeline for Full-Stack Application

This project demonstrates a CI/CD pipeline using GitHub Actions to automate testing and deployment for a full-stack application. The application includes a React frontend, an Express backend, and MongoDB for the database.

---

## Features
- **Automated Testing**: Runs Cypress component tests on every pull request to the `develop` branch.
- **Continuous Deployment**: Automatically deploys the application to Render when the `develop` branch is merged into the `main` branch.

---

## Project Structure
- `client/`: Frontend code written in React.
- `server/`: Backend code written in Express.
- `cypress/`: Contains Cypress component tests.

---

## Prerequisites
1. [Node.js](https://nodejs.org/) (v16 or later).
2. A GitHub account.
3. A Render account for deployment.
4. MongoDB Atlas or another MongoDB setup.

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
```

### 2. Install Dependencies
```bash
npm install
cd client && npm install
cd ../server && npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the `server/` directory and provide the following:
```
MONGODB_URI=<your-mongodb-connection-string>
PORT=3001
```

---

## Running Locally

### Backend
```bash
cd server
npm run start
```

### Frontend
```bash
cd client
npm run dev
```

Access the application at `http://localhost:3000`.
Access via Render Deployment: [https://my-cicd-pipeline.onrender.com]

---

## CI/CD Workflows

### Cypress Testing Workflow
- Triggered when a pull request is made to the `develop` branch.
- Runs Cypress component tests.
- Workflow file: `.github/workflows/cypress-tests.yml`.

### Deployment Workflow
- Triggered when the `develop` branch is merged into the `main` branch.
- Deploys the application to Render.
- Workflow file: `.github/workflows/deploy-to-render.yml`.

---

## Deployment

### Steps to Deploy
1. Deploy the backend to Render by selecting the `server/` directory as the root.
2. Deploy the frontend to Render by selecting the `client/` directory as the root.
3. Configure the backend with the correct MongoDB connection string.
4. Disable **Auto-Deploy** in Render settings.
5. Use the **Deploy Hook URL** for GitHub Actions to trigger deployments.

---

## Testing the Workflows

### Create a Feature Branch
```bash
git checkout -b feature/test-workflows
```
Make changes, then commit and push:
```bash
git add .
git commit -m "Test workflows"
git push origin feature/test-workflows
```

### Open a Pull Request
- Create a pull request from `feature/test-workflows` to `develop`.
- Verify Cypress tests run and pass.

### Merge to Develop and Main
- Merge the pull request into `develop`.
- Merge `develop` into `main` to trigger the deployment workflow.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.