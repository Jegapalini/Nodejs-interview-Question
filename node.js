# Node.js Basics

*//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*

## 1. What is Node.js and what is it used for?
Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is used for building server-side applications, command-line tools, and other network applications.

## 2. Explain the main differences between Node.js and traditional web server environments like Apache or Nginx.
- **Architecture**: Node.js is event-driven and non-blocking, handling many connections simultaneously using a single thread. Apache and Nginx are multi-threaded, spawning new threads or processes for each connection.
- **Language**: Node.js uses JavaScript for both server-side and client-side code, promoting full-stack development. Apache and Nginx use a variety of server-side languages like PHP, Python, and Ruby.
- **Performance**: Node.js can handle a high number of concurrent connections with lower overhead due to its event-driven model, while Apache and Nginx may perform better for serving static content.

## 3. What is the V8 engine and how does Node.js utilize it?
The V8 engine is Google's open-source high-performance JavaScript and WebAssembly engine. Node.js utilizes V8 to execute JavaScript code on the server side, allowing developers to use JavaScript for back-end development.

## 4. Describe the event-driven architecture of Node.js.
Node.js uses an event-driven architecture where the flow of the program is determined by events such as user actions, messages, or I/O operations. It uses an event loop to listen for and process events asynchronously, improving scalability and performance.

## 5. What are some common use cases for Node.js?
- Real-time applications (e.g., chat applications, online gaming)
- RESTful APIs and microservices
- Single-page applications (SPAs)
- Streaming services (e.g., video or audio streaming)
- Command-line tools
- Internet of Things (IoT) applications

## 6. How does Node.js handle asynchronous operations?
Node.js handles asynchronous operations using callbacks, Promises, and the `async`/`await` syntax. It uses an event loop to manage asynchronous tasks, ensuring that non-blocking I/O operations do not hinder the performance of the application.

## 7. What is the purpose of the package.json file in a Node.js project?
The `package.json` file is a manifest for a Node.js project. It contains metadata about the project, such as its name, version, dependencies, scripts, and other configuration options. It is essential for managing and installing project dependencies.

## 8. Explain the role of the Node Package Manager (NPM).
NPM is the default package manager for Node.js. It allows developers to share and reuse code by providing a registry of packages and a command-line tool to install, update, and manage these packages in their projects.

## 9. What is the node_modules folder and why is it important?
The `node_modules` folder is where NPM installs the dependencies of a Node.js project. It contains all the packages listed in the `package.json` file, along with their dependencies. This folder is crucial for the application to run correctly, as it provides the necessary modules.

## 10. How can you check the version of Node.js and NPM installed on your system?
You can check the version of Node.js and NPM installed on your system using the following commands:
```bash
node -v
npm -v



# Node.js Modules
*//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*

## 1. What are modules in Node.js and why are they important?
Modules in Node.js are reusable blocks of code that can be imported into other parts of an application. They help in organizing code, improving maintainability, and promoting code reuse. Modules can be built-in, third-party, or user-defined.

## 2. How do you create a module in Node.js? Provide a simple example.
You can create a module by exporting its functions or objects using `module.exports`. Here is a simple example:
```javascript
// myModule.js
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;

## 3. Explain the difference between require and import statements in Node.js.
require: Part of the CommonJS module system, used in Node.js for importing modules. It is synchronous and can be used conditionally.
import: Part of the ES6 module system, which is asynchronous and must be used at the top level of a module. It requires using the .mjs extension or setting "type": "module" in package.json.

## 4. What is the module.exports object and how is it used?
module.exports is an object that is used to define what a module exports and makes available through require. You can assign functions, objects, or values to it to be used in other files.

## 5. Describe how you can use the exports shorthand to export module contents.
// myModule.js
exports.greet = function(name) {
    return `Hello, ${name}!`;
  };

## 6. What is the CommonJS module system?
The CommonJS module system is a standard for structuring and organizing JavaScript code into modules. It uses require to import and module.exports to export modules, and it is the default module system in Node.js.

## 7. How can you import a module installed via NPM in your Node.js application?
You can import an NPM-installed module by using the require function with the module name. 
const express = require('express');

## 8. Explain how the path module works in Node.js. Provide an example of using it.
The path module provides utilities for working with file and directory 


const path = require('path');

const directory = path.join(__dirname, 'folder', 'file.txt');
console.log(directory); // Outputs the combined path

## 9. How do you handle circular dependencies in Node.js modules?

Refactoring the code to avoid circular references.
Using the exports object to break the cycle.
Using dependency injection.

## 10. What is a built-in module in Node.js? Name a few and explain their purposes.

fs: For file system operations.
http: For creating HTTP servers and clients.
path: For handling and transforming file paths.

## 11. What is the difference between relative and absolute module paths in Node.js?
Relative paths: Start with ./ or ../ and are relative to the current file's location.
Absolute paths: Start from the root directory or are resolved by Node.js module resolution.

## 12. What is a module wrapper function in Node.js?
Node.js wraps each module in a function before execution, providing a private scope for variables. The wrapper function looks like:


(function(exports, require, module, __filename, __dirname) {
  // Module code
});

## 13. Describe the buffer module and its use in Node.js.
The buffer module is used for handling binary data in Node.js. It allows you to work with raw memory allocation, read, and manipulate binary data efficiently. Example:


const buffer = Buffer.from('Hello, World!');
console.log(buffer.toString()); // Output: Hello, World!





# Starting an HTTP Server in Node.js
*//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*

## 1. How do you create a simple HTTP server in Node.js? Provide a code example.
You can create a simple HTTP server using the `http` module. Here is an example:
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


## 2. Explain the purpose of the http module in Node.js.
The http module in Node.js provides functionality to create and manage HTTP servers and clients. It allows you to handle HTTP requests and responses, enabling you to build web applications and APIs.

## 3. What method do you use to start the HTTP server and make it listen on a specific port?
The server.listen(port, callback) method is used to start the HTTP server and make it listen on a specific port. The callback function runs once the server starts listening.

## 4. How can you send a response to the client in an HTTP server created with Node.js?
You can send a response to the client using the response.write() and response.end() methods. Here is an example:


res.write('Hello, World!\n');
res.end();

## 5. Explain the request and response objects in the context of an HTTP server.
Request object (req): Represents the HTTP request and contains information about the request, such as the URL, headers, and HTTP method.
Response object (res): Represents the HTTP response that will be sent back to the client. It includes methods for setting the status code, headers, and sending the response body.

## 6. How do you handle different HTTP methods (GET, POST, etc.) in a Node.js HTTP server?
You can handle different HTTP methods by checking the req.method property. Here is an example:


const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.end('Handled GET request');
  } else if (req.method === 'POST') {
    res.end('Handled POST request');
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
});
7. What is middleware in the context of a Node.js HTTP server?
Middleware in a Node.js HTTP server is a function that processes the request and response objects. It can perform tasks such as parsing request bodies, handling authentication, logging, or routing. Middleware functions can pass control to the next middleware function using the next function.

## 8. How can you serve static files using an HTTP server in Node.js?
You can serve static files by reading the file from the filesystem and sending its contents as the response. Here is an example:


const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  const extname = path.extname(filePath);
  const contentType = extname === '.html' ? 'text/html' : 'text/plain';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 404;
      res.end('File not found');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(content);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

## 9. Explain how to handle errors in an HTTP server created with Node.js.
You can handle errors in an HTTP server by using try-catch blocks or by checking for errors in asynchronous operations and sending appropriate responses. Here is an example:


const server = http.createServer((req, res) => {
  try {
    // Your logic here
    res.end('Success');
  } catch (err) {
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

## 10. How can you implement routing in a Node.js HTTP server without using external libraries?
You can implement routing by checking the req.url and req.method properties. Here is an example:


const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.end('Home Page');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.end('About Page');
  } else {
    res.statusCode = 404;
    res.end('Page Not Found');
  }
});
