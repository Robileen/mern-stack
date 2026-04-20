
1) create the backend folder. then cd to it.
2) create a [blank] server.js file
3) run the npm init -y . it will generate the package.json file.
4) next is to install the express package -> so that we can create the express app.

    - npm install express
    ```
    outcome:

    added 65 packages, and audited 66 packages in 2s
    22 packages are looking for funding
    run `npm fund` for details
    found 0 vulnerabilities
    ```
    This command generates the node_modules folder.
    That is where the express packages and all its dependencies are installed. Its alot of file, so we do not need to go in there.

    okay , now we can create the express application.


5) Creating the Express App.    
    ```
    const app = express();

    // Running the Express App. --> we will listen for requests.
    app.listen(4000, () => {
        console.log('Listening on port 4000');
    });
    ```
