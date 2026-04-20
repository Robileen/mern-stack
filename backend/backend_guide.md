# Backend Files

- server.js 
    ```
    this is entry file for the backend application.
    this is where we will register the Express App. 


- package.json
    ```
    this file helps us keep track of dependencies.
    and also register our own custom scripts.
    ```



## Terminologies

meaning of JSON
```
JSON (JavaScript Object Notation) is a lightweight, text-based format for storing and transporting data. 

In simplest terms, think of JSON as a formatted, plain-text sticky note that allows different computers and applications to exchange information easily. 


Here is the breakdown of what that means:
- It’s a Universal Language: While it originated from JavaScript, JSON is independent of any programming language. Python, Java, PHP, and others can all read and generate it.

- It’s Human-Readable: It looks similar to a structured list, making it easy for people to understand.

- Key-Value Pairs: Data is organized by giving items a name (key) and a value (e.g., "name": "John").

- Common Use: It is the standard way web applications (like mobile apps) talk to servers, such as sending user data or receiving a list of products. 


A Simple Example
----------------------------------------------------
Imagine you are sending information about a user.
json
{
  "name": "Alex",
  "age": 28,
  "isDeveloper": true,
  "skills": ["JavaScript", "Python"]
}
---------------------------------------------------

- {} (Curly braces): Hold the whole object.
- "key": "value": Labels and data (e.g., Name is Alex).
- [] (Square brackets): Hold a list of items (e.g., skills). 


Why is JSON used?
-----------------
- Lightweight: It uses minimal characters, making it faster to send over the internet compared to older methods like XML.

- Easy to Parse: Computers can instantly turn a JSON string into usable data structure.

- Versatile: It works for sending API responses, storing configuration files, and saving local data in browsers. 
```

what does this cmd do? 

```
npm init -y

npm init --yes # This will trigger automatically populated initialization.

reference: https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm#:~:text=Using%20npm%20init%20%2D%2Dyes%20to%20Instantly%20Initialize%20a%20Project
```