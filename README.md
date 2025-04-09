# Motivational CLI Tool By Siya

**Motivational CLI Tool By Siya** is a simple Node.js command-line tool that provides random motivational quotes each time it's run. It’s designed to inspire and help boost your motivation! 
This project includes unit tests and a CI/CD pipeline using GitHub Actions.

## Features
- Prints a random motivational quote
- Simple and lightweight
- Includes automated tests
- Uses GitHub Actions for CI/CD

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/)

---

## Installation and Usage

### 1. Clone the Repository
```sh
git clone https://github.com/AsiyaAli23/motivational-cli.git
cd motivational-cli
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the CLI Tool Locally
You can execute the CLI tool using the following command:
```sh
node index.js
```
Or after linking it globally:
```sh
npm link
motivate
```

---

## Running Tests
To ensure the CLI tool functions correctly, unit tests are included using Jest.

### 1. Run Tests
```sh
npm test
```

### 2. View Test Coverage (Optional)
```sh
npm test -- --coverage
```

---

## GitHub Actions CI/CD Pipeline
This project includes a CI/CD workflow using GitHub Actions.

### Workflow Triggers
The GitHub Actions workflow runs automatically on:
- Push events to the `main` branch
- Pull requests to the `main` branch
- Manual workflow dispatch

### CI/CD Workflow Steps
1. **Checkout Repository** – Clones the latest version of the code
2. **Set up Node.js** – Configures the required Node.js environment
3. **Install Dependencies** – Installs all necessary packages
4. **Run Tests** – Executes unit tests to ensure code quality
5. **Publish to NPM** *(Optional)* – Automatically publishes the package to NPM when a new release is created

---

## Publishing the CLI Tool to NPM (Optional)
To publish this CLI tool as an NPM package, follow these steps:

### 1. Create an NPM Account
If you don't have one, register at [npmjs.com](https://www.npmjs.com/).

### 2. Login to NPM
```sh
npm login
```

### 3. Generate an Authentication Token
```sh
npm token create
```
Copy the generated token.

### 4. Add NPM Token to GitHub Secrets
- Navigate to your repository on GitHub
- Go to **Settings** → **Secrets and variables** → **Actions**
- Click **New Repository Secret**
- Name it `NPM_TOKEN` and paste the generated token

### 5. Create a GitHub Release
To trigger the publishing workflow:
- Go to the **Releases** section of your GitHub repository
- Click **Draft a new release**
- Tag the release version (e.g., `v1.0.0`)
- Click **Publish release**

This will trigger the GitHub Actions workflow to automatically publish the package to NPM.

---

## Contributing
If you'd like to contribute:
1. Fork this repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## Contact
For any questions or suggestions, feel free to reach out:
Email: siya270223@outlook.com
