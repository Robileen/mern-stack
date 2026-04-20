
## Why we need both Express JS and Node JS

- We need both Express.js and Node.js because they play different but complementary roles: 
    - Node.js provides the *engine* to run JavaScript on a server, while 

    - Express.js provides the *framework* to build web applications quickly and efficiently. 


### But i dont need Express.js.. do i really need it?

- While you can technically build a web server using only Node.js, developers almost always use Express.js for the following reasons: 

- Reduces Boilerplate Code: Native Node.js requires manual code for common tasks like parsing URL strings, setting HTTP headers, and managing status codes. Express.js abstracts these complexities, allowing you to achieve the same results with significantly less code.

- Advanced Routing: 
    ```
    Express.js offers a powerful and intuitive routing system to handle different HTTP methods (GET, POST, etc.) at various URL paths. In "vanilla" Node.js, this requires writing complex and messy if-else or switch statements.
    ```

- Middleware Ecosystem: 
    ```
    Express introduces Middleware, which are reusable functions that can be "plugged in" to handle tasks like authentication, logging, and error handling before a request reaches its final destination.
    ```
- Standardization and Maintenance: 
    ```
    Because Express.js is the "de facto" standard, it provides a consistent structure that makes it easier for teams to collaborate and maintain code. Using only raw Node.js often leads to highly custom, "spaghetti" code that is difficult for new developers to understand.
    ```

- Faster Development: 
    ```
    By providing pre-built tools and utilities for web development, Express.js significantly accelerates the time-to-market for applications and APIs compared to building everything from scratch in Node.js. 
    ```


# NPM and NVM


| Aspect            | npm                                                | nvm                                                            |
| ----------------- | -------------------------------------------------- | -------------------------------------------------------------- |
| Full name         | Node Package Manager                               | Node Version Manager                                           |
| Primary purpose   | Manages JavaScript packages/libraries              | Manages multiple Node.js versions                              |
| What it installs  | Dependencies (e.g., React, Express)                | Different Node.js runtimes (v16, v18, v20, etc.)               |
| Scope             | Project-level dependency management                | System-level Node version switching                            |
| Typical use case  | `npm install express` to add packages to a project | `nvm install 18` to switch Node versions                       |
| Where it operates | Inside a project (`node_modules`)                  | Globally on your machine                                       |
| Version control   | Handles package versions via `package.json`        | Handles Node.js version switching per terminal session/project |
| Key commands      | `npm install`, `npm run`, `npm init`               | `nvm install`, `nvm use`, `nvm list`                           |
| Dependency file   | `package.json`, `package-lock.json`                | No project file (uses shell environment)                       |
| Installed with    | Comes with Node.js                                 | Installed separately                                           |
| Problem it solves | Dependency management and scripts                  | Version compatibility between Node projects                    |



## npm init -y 
the command is used to quickly initialize a Node.js project by automatically generating a package.json file with default values. 

### Why use npm init -y?
Skips Prompts: The -y (or --yes) flag tells npm to bypass the interactive questionnaire and accept the default settings for every field, such as the project name, version, and entry point.
Speed: It allows you to get straight to coding without spending time answering basic configuration questions.
Automation: It is ideal for scripts or CI/CD pipelines where manual user input is not possible. 


## What is the package.json file for?
The package.json file is the central "manifest" for your project. Its primary roles include: 

- Dependency Management: It lists every third-party library your project requires, ensuring anyone else can install them by simply running npm install.

- Script Aliases: You can define custom commands in the scripts section to automate common tasks like starting a server, running tests, or building code.

- Project Metadata: It stores critical info such as the project name, version number, author, and license.

- Configuration: It defines how Node.js should interact with your code, such as identifying the main entry point (e.g., index.js) or whether to use modern ES Modules