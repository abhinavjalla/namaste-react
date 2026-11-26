# Namaste React – Episode 02: Igniting Our App

## 1. Introduction

In Episode 01, we learned:
- Introduction to HTML, CSS and JavaScript.
- Difference between libraries and frameworks.
- React introduction.
- Creating a Hello World application using React.
- React and ReactDOM.
- CDN and CORS.
- Emmet.

In Episode 02, we learn how to set up a React project using npm and Parcel instead of relying on CDN links.

Main topics:
- npm and npx
- package.json and package-lock.json
- Dependencies and devDependencies
- Node modules
- Bundlers
- Parcel
- Hot Module Replacement (HMR)
- Parcel cache
- Development and production builds
- Tree shaking
- Transitive dependencies
- Browserslist
- .gitignore

---

## 2. What is npm?

npm is the default package manager distributed with Node.js.

It helps developers:
- Install packages.
- Manage dependencies.
- Update packages.
- Remove packages.
- Execute package scripts.
- Manage project dependencies.

Examples:

```bash
npm init
npm init -y
npm install express
npm uninstall express
npm update
```

### What is npm init?

Initializes a Node.js project and creates a package.json file.

```bash
npm init
```

To create package.json without answering questions:

```bash
npm init -y
```

---

## 3. What is npx?

npx is a package execution tool provided through npm.

It allows us to execute package binaries without manually installing them globally.

Example:

```bash
npx parcel index.html
```

Here:
- npx executes the Parcel CLI.
- parcel is the package executable.
- index.html is the application entry point.

Another example:

```bash
npx tsc --version
```

### npm vs npx

| npm | npx |
|---|---|
| Package manager | Package execution tool |
| Installs packages | Executes package binaries |
| npm install parcel | npx parcel index.html |

---

## 4. What is a package.json file?

package.json is the configuration and metadata file for a Node.js project.

It contains:
- Project name and version.
- Dependencies.
- Development dependencies.
- Scripts.
- Project metadata.
- Other package configuration.

Example:

```json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "parcel": "^2.13.0"
  }
}
```

Note: Package versions above are illustrative. Use compatible versions for your project.

---

## 5. What is package-lock.json?

package-lock.json records the exact resolved versions of installed dependencies.

It helps ensure that developers and CI/CD environments install a consistent dependency tree.

It contains:
- Exact package versions.
- Dependency relationships.
- Resolved package URLs.
- Integrity hashes.
- Direct and transitive dependencies.

### package.json vs package-lock.json

| package.json | package-lock.json |
|---|---|
| Defines dependency requirements | Records resolved dependency versions |
| Can contain version ranges | Records exact resolved versions |
| Manually maintained or updated by npm | Automatically generated and maintained by npm |
| Contains direct dependency declarations | Contains the resolved dependency tree, including transitive dependencies |

Example:

```json
{
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

The caret allows compatible updates within the major version.

The package-lock.json records the actual resolved version and its dependency tree.

### Important commands

Install dependencies:

```bash
npm install
```

Install exactly according to package-lock.json:

```bash
npm ci
```

Important:
- Commit package.json and package-lock.json to Git.
- Do not manually edit package-lock.json.
- Use npm ci in CI/CD pipelines for reproducible installations.

---

## 6. Dependencies vs devDependencies

Node.js projects generally have two important dependency categories.

### Dependencies

Packages required by the application at runtime.

Example:

```bash
npm install react react-dom
```

These packages are added under dependencies.

### devDependencies

Packages required during development, building, testing or tooling.

Example:

```bash
npm install -D parcel
```

Parcel is a development/build tool.

### Difference

| dependencies | devDependencies |
|---|---|
| Required by the application at runtime | Required for development and build tooling |
| React | Parcel |
| ReactDOM | TypeScript compiler |
| Express (for a backend application) | ESLint |
| Runtime libraries | Testing libraries |

---

## 7. What is node_modules?

node_modules is the directory where npm installs project dependencies.

Example structure:

```text
namaste-react/
│
├── node_modules/
│   ├── react/
│   ├── react-dom/
│   ├── parcel/
│   └── other dependencies/
│
├── package.json
├── package-lock.json
└── index.html
```

Important points:
- Every installed package has its own package metadata.
- Dependencies can have their own dependencies.
- node_modules can become very large.
- It should generally not be committed to Git.
- It can be recreated using npm install or npm ci.

---

## 8. What is a Bundler?

A bundler is a development tool that processes and packages application resources for the browser.

A React application can contain:
- Multiple JavaScript files.
- CSS files.
- Images.
- Fonts.
- Third-party libraries.

A bundler processes these resources and produces optimized output.

### Popular bundlers and build tools

1. Parcel
2. Webpack
3. Vite

### Why do we need a bundler?

A bundler helps with:
- Bundling JavaScript modules.
- Processing CSS and assets.
- Minification.
- Tree shaking.
- Code splitting.
- Development server.
- Production builds.
- Browser compatibility transformations.

---

## 9. What is Parcel?

Parcel is a web application bundler.

It helps us develop, build and optimize frontend applications.

We use Parcel to run our React application without manually configuring a complicated build setup.

### Install Parcel

```bash
npm install -D parcel
```

### Start the application

```bash
npx parcel index.html
```

Parcel:
1. Reads index.html.
2. Identifies JavaScript and CSS dependencies.
3. Processes the application.
4. Starts a local development server.
5. Watches for file changes.

### Build for production

```bash
npx parcel build index.html
```

Parcel generates optimized production files inside the dist directory by default.

---

## 10. Parcel Features – Superpowers of Parcel

### 1. Zero Configuration

Parcel provides many features without requiring extensive configuration.

We can start a project with:

```bash
npx parcel index.html
```

### 2. Hot Module Replacement (HMR)

HMR updates changed modules in the browser without requiring a full page reload in supported cases.

Example:

1. Start the application.
2. Open it in the browser.
3. Change a React component.
4. Save the file.
5. Parcel detects the change and updates the application.

Benefits:
- Faster development.
- Less manual refreshing.
- Preserves application state where supported.

### 3. File Watching Algorithm

Parcel monitors files for changes.

When a file changes:
1. Parcel detects the modification.
2. It identifies affected modules.
3. It rebuilds the necessary parts.
4. The browser receives the updated code.

Parcel uses efficient native file-watching mechanisms.

### 4. Caching

Parcel caches previously processed files.

During subsequent builds, it can reuse cached results instead of processing everything again.

Benefits:
- Faster rebuilds.
- Better developer experience.
- Reduced unnecessary work.

### 5. Bundling

Parcel combines and processes application resources into output bundles.

### 6. Minification

Minification reduces file size by removing unnecessary characters and optimizing code.

Example:

Before:

```javascript
function addNumbers(a, b) {
    return a + b;
}
```

After minification:

```javascript
function addNumbers(a,b){return a+b}
```

### 7. Tree Shaking

Tree shaking removes unused code from the production bundle.

Example:

```javascript
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

If the application only imports add:

```javascript
import { add } from "./math.js";

console.log(add(10, 20));
```

The unused subtract function may be removed from the production bundle when the module structure and code allow static analysis.

Tree shaking is also called dead code elimination.

### 8. Image Optimization

Parcel can optimize images to reduce their size and improve loading performance.

### 9. Compression

Production assets can be compressed or served using HTTP compression depending on the deployment server and configuration.

### 10. Code Splitting

Parcel can split application code into smaller bundles so that code can be loaded when required.

### 11. Differential Bundling

Parcel can generate output compatible with configured browser targets.

This helps support browsers with different JavaScript capabilities.

### 12. HTTPS Development Server

Parcel supports running its development server over HTTPS with the appropriate configuration.

Example:

```bash
npx parcel index.html --https
```

### 13. Diagnostics and Error Handling

Parcel provides useful build errors and diagnostic messages when something goes wrong.

---

## 11. Hot Module Replacement (HMR)

HMR is one of the most useful development features.

Without HMR:
- Modify a file.
- Refresh the browser.
- Application reloads.

With HMR:
- Modify a file.
- Save the file.
- Parcel detects the change.
- Updated module is applied in the browser when supported.

Example:

```bash
npx parcel index.html
```

Open the local URL shown in the terminal.

Now modify App.js and save it.

Parcel automatically processes the changes.

---

## 12. What is .parcel-cache?

Parcel uses caching to improve build performance.

When Parcel processes files, it stores cached build information inside:

```text
.parcel-cache/
```

On subsequent builds, Parcel can reuse cached information.

Benefits:
- Faster rebuilds.
- Reduced processing time.
- Better development experience.

The cache is generated automatically.

You generally do not need to modify it manually.

---

## 13. What is the dist folder?

dist stands for distribution.

It contains the generated application output.

When we execute:

```bash
npx parcel build index.html
```

Parcel generates production files in:

```text
dist/
```

Example:

```text
dist/
├── index.html
├── index.xxxxx.js
├── index.xxxxx.css
└── assets/
```

Production output can include:
- Optimized JavaScript.
- Minified CSS.
- Images and other assets.
- Generated HTML.

The dist directory is generally the output that we deploy to a static web server or hosting platform.

---

## 14. Development Build vs Production Build

### Development build

Command:

```bash
npx parcel index.html
```

Characteristics:
- Starts a local development server.
- Supports HMR.
- Provides useful development diagnostics.
- Optimized for developer experience.

### Production build

Command:

```bash
npx parcel build index.html
```

Characteristics:
- Optimizes application assets.
- Minifies JavaScript and CSS.
- Performs tree shaking where possible.
- Generates production bundles.
- Outputs files to dist by default.

### Comparison

| Development | Production |
|---|---|
| Faster development workflow | Optimized output |
| HMR | Production bundles |
| Development diagnostics | Minification |
| Local development server | Deployment-ready assets |
| Focus on developer experience | Focus on application delivery |

---

## 15. npm Scripts

Instead of repeatedly running npx commands, we can define scripts in package.json.

Example:

```json
{
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

Run development server:

```bash
npm start
```

or:

```bash
npm run start
```

Create production build:

```bash
npm run build
```

Benefits:
- Standardized project commands.
- Easy for other developers to run the application.
- Useful in CI/CD pipelines.

---

## 16. What are Transitive Dependencies?

A transitive dependency is a package that is required by another dependency.

Example:

```text
Your Application
       |
       └── Express (Direct dependency)
              |
              ├── Package A
              |      |
              |      └── Package C
              |
              └── Package B
```

Here:
- Express is a direct dependency.
- Package A and Package B are transitive dependencies.
- Package C is also a transitive dependency.

npm manages these dependency relationships.

The package-lock.json records the resolved dependency tree.

---

## 17. What is Browserslist?

Browserslist is a configuration tool used by frontend tooling to identify which browsers the application should support.

It helps tools such as Parcel, Babel and Autoprefixer determine appropriate browser compatibility transformations.

Example configuration in package.json:

```json
{
  "browserslist": [
    "last 2 versions",
    "> 1%",
    "not dead"
  ]
}
```

Meaning:
- last 2 versions: recent versions of browsers.
- > 1%: browsers with more than 1% usage.
- not dead: exclude browsers considered obsolete by Browserslist.

Benefits:
- Browser compatibility.
- Appropriate JavaScript transformations.
- CSS compatibility.
- Avoid unnecessary transformations for unsupported targets.

---

## 18. What is .gitignore?

.gitignore tells Git which files and directories should not be tracked.

Example:

```gitignore
node_modules/
dist/
.parcel-cache/
.env
```

### Why ignore these files?

| File / Folder | Reason |
|---|---|
| node_modules | Can be recreated using npm install |
| dist | Generated build output; often generated during deployment |
| .parcel-cache | Local build cache |
| .env | May contain secrets and environment-specific values |

Important:
- Commit package.json.
- Commit package-lock.json.
- Do not commit secrets.
- Whether dist should be committed depends on your deployment workflow.

---

## 19. Complete React Project Setup Using Parcel

### Step 1: Create a project

```bash
mkdir namaste-react
cd namaste-react
```

### Step 2: Initialize npm

```bash
npm init -y
```

### Step 3: Install React

```bash
npm install react react-dom
```

### Step 4: Install Parcel

```bash
npm install -D parcel
```

### Step 5: Create index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="./App.js"></script>
</body>
</html>
```

### Step 6: Create App.js

```javascript
import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React!"
);

const root = createRoot(document.getElementById("root"));

root.render(heading);
```

### Step 7: Add scripts to package.json

```json
{
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

Keep the existing dependencies and other package.json fields.

### Step 8: Create .gitignore

```gitignore
node_modules/
dist/
.parcel-cache/
.env
```

### Step 9: Start the application

```bash
npm start
```

### Step 10: Create production build

```bash
npm run build
```

Parcel generates the production output in dist/.

---

## 20. Overall Project Structure

```text
namaste-react/
│
├── node_modules/
│
├── .parcel-cache/
│
├── dist/
│
├── .gitignore
│
├── package.json
│
├── package-lock.json
│
├── index.html
│
└── App.js
```

Note:
- node_modules is generated by npm.
- .parcel-cache is generated by Parcel.
- dist is generated during builds.
- package.json defines project configuration.
- package-lock.json locks dependency versions.
- index.html is the application entry point.
- App.js contains the React application code.

---

## 21. Important Interview Questions

### Q1. What is npm?

npm is the default package manager distributed with Node.js. It manages packages and dependencies.

### Q2. What is npx?

npx is a package execution tool that allows us to execute package binaries.

### Q3. What is a bundler?

A bundler processes and packages application resources such as JavaScript, CSS and images for development or production.

### Q4. Why do we need Parcel?

Parcel provides bundling, HMR, caching, minification, tree shaking and production builds with minimal configuration.

### Q5. What is HMR?

Hot Module Replacement updates changed modules in the browser without requiring a full page reload in supported cases.

### Q6. What is tree shaking?

Tree shaking removes unused code from the production bundle.

### Q7. What is the difference between package.json and package-lock.json?

package.json declares dependency requirements. package-lock.json records the exact resolved dependency tree.

### Q8. What is the difference between dependencies and devDependencies?

dependencies are needed at runtime. devDependencies are used for development, testing and build tooling.

### Q9. What is node_modules?

It is the directory where npm installs project dependencies.

### Q10. Why should we not push node_modules to Git?

It can be very large and can be recreated using package.json and package-lock.json.

### Q11. What is .parcel-cache?

It stores cached build information to improve subsequent build performance.

### Q12. What is dist?

It is the directory containing generated build output.

### Q13. What are transitive dependencies?

Dependencies required by other dependencies.

### Q14. What is Browserslist?

It defines the target browsers for frontend compatibility tooling.

### Q15. What is the difference between development and production builds?

Development builds prioritize developer experience, while production builds prioritize optimized application delivery.

---

## 22. Quick Revision – Commands

| Command | Purpose |
|---|---|
| npm init -y | Initialize npm project |
| npm install react react-dom | Install React |
| npm install -D parcel | Install Parcel as dev dependency |
| npm install | Install project dependencies |
| npm ci | Install exact locked dependency tree |
| npx parcel index.html | Start development server |
| npx parcel build index.html | Create production build |
| npm start | Run start script |
| npm run build | Run build script |
| npm uninstall parcel | Remove Parcel |
| npm list | List installed packages |

---

## 23. Key Takeaways

1. npm manages project dependencies.
2. npx executes package binaries.
3. package.json defines dependency requirements and scripts.
4. package-lock.json records the exact resolved dependency tree.
5. node_modules contains installed dependencies.
6. Parcel is a bundler and development tool.
7. HMR updates changed modules during development.
8. Parcel cache improves rebuild performance.
9. dist contains generated build output.
10. Tree shaking removes unused code.
11. Browserslist defines browser compatibility targets.
12. Production builds optimize application assets.

---

## 24. Next Episode

Episode 03 – Laying the Foundation

Topics to learn:
- JSX
- Babel
- React components
- Functional components
- Class components
- React element vs React component
- Component composition
- React.createElement() vs JSX