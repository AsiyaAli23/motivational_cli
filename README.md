# Motivational CLI Tool By Siya

**Motivational CLI Tool By Siya** is a simple Node.js command-line tool that provides random motivational quotes each time it's run. It’s designed to inspire and help boost your motivation!

---

## 🚀 Features:
- Provides random motivational quotes on the command line.
- Automated unit testing for reliability.
- Fully integrated CI/CD pipeline using GitHub Actions.
- Automatically published to npm on each release.

---

## 🔧 Technologies Used:
- **Node.js** – Core technology for building the tool.
- **JavaScript** – Language for logic implementation.
- **Jest** – Unit testing framework for ensuring code quality.
- **GitHub Actions** – CI/CD pipeline for automation.
- **npm** – Used for publishing and managing the package.
- **Git & GitHub** – For version control and source code management.

---

## 🛠️ How to Use

### Prerequisites
To use the Motivational CLI Tool By Siya, you need the following:


- **Node.js**: Make sure Node.js is installed on your machine. If not, download it from [here](https://nodejs.org/).

- **npm**: npm (Node Package Manager) is included with Node.js, but you can update it if necessary by running:

  ```bash
  npm install -g npm
Prerequisites
Ensure you have the following installed:

Node.js (version 18 or later)
npm (Node Package Manager)
Git
Installation and Usage
1. Clone the Repository
git clone https://github.com/nolet7/motivational-cli.git
cd motivational-cli
2. Install Dependencies
npm install
3. Run the CLI Tool Locally
You can execute the CLI tool using the following command:

node index.js
Or after linking it globally:

npm link
motivate
Running Tests
To ensure the CLI tool functions correctly, unit tests are included using Jest.

1. Run Tests
npm test
2. View Test Coverage (Optional)
npm test -- --coverage
GitHub Actions CI/CD Pipeline
This project includes a CI/CD workflow using GitHub Actions.

Workflow Triggers
The GitHub Actions workflow runs automatically on:

Push events to the main branch
Pull requests to the main branch
Manual workflow dispatch
CI/CD Workflow Steps
Checkout Repository – Clones the latest version of the code
Set up Node.js – Configures the required Node.js environment
Install Dependencies – Installs all necessary packages
Run Tests – Executes unit tests to ensure code quality
Publish to NPM (Optional) – Automatically publishes the package to NPM when a new release is created
Publishing the CLI Tool to NPM (Optional)
To publish this CLI tool as an NPM package, follow these steps:

1. Create an NPM Account
If you don't have one, register at npmjs.com.

2. Login to NPM
npm login
3. Generate an Authentication Token
npm token create
Copy the generated token.

4. Add NPM Token to GitHub Secrets
Navigate to your repository on GitHub
Go to Settings → Secrets and variables → Actions
Click New Repository Secret
Name it NPM_TOKEN and paste the generated token
5. Create a GitHub Release
To trigger the publishing workflow:

Go to the Releases section of your GitHub repository
Click Draft a new release
Tag the release version (e.g., v1.0.0)
Click Publish release
This will trigger the GitHub Actions workflow to automatically publish the package to NPM.

Contributing
If you'd like to contribute:

Fork this repository
Create a new branch (git checkout -b feature-branch)
Make your changes and commit (git commit -m "Added new feature")
Push to the branch (git push origin feature-branch)
Open a Pull Request

Contact
For any questions or suggestions, feel free to reach out:
Email: siya270223@outlook.com
