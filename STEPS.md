1. Hello World API
<!-- START -->
Great! Here's a list of **30 atomic and practical steps** to build a **"Hello World API"** using **Node.js**, starting from absolute scratch:

### 🚀 **SETUP & INSTALLATION**
1. **Install Node.js** from [nodejs.org](https://nodejs.org).
2. **Create a project folder**, e.g., `hello-api`.
3. **Open the folder** in a code editor (like VS Code).
4. **Initialize a Node.js project**:
   ```bash
   npm init -y
   ```
5. **Create an entry file**:
   `index.js`

### 🧠 **BASICS OF NODE.JS**
6. **Add your first log** in `index.js`:
   ```js
   console.log("Hello from Node.js");
   ```
7. **Run it using terminal**:
   ```bash
   node index.js
   ```
8. **Understand modules**:
   Learn that Node.js runs with CommonJS modules.
   <!-- (CommonJS is a module system used in Node.js where modules are imported using `require()` and exported with `module.exports`.) -->

### 🌐 **BUILDING A BASIC API**
9. **Use built-in `http` module**:
   ```js
   const http = require('http');
   ```
   <!-- (An HTTP server listens for web requests (like from a browser) and sends back responses (like “Hello World”).) -->
10. **Create a basic server** with `http.createServer()`.
   <!-- (When you visit a website, your browser sends a **request** to a server. The server replies with a **response** (like HTML, text, or data). Here, when your browser requests `localhost`, the server responds with “Hello World” as plain text.) -->
11. **Listen on a port** using `server.listen(3000)`.
   <!-- * `server.listen(3000, ...)`: Starts the server on port **3000**.
        * `() => { console.log(...) }`: Callback that runs **once** the server starts. (A callback is a function passed into another function to run **after** something finishes—like "do this when you're done". Here, the callback runs **after the server starts**, showing “Server running...” in the terminal.)
        * `localhost:3000`: The address to access your server in the browser. -->
12. **Send a "Hello World" response** from the server.
13. **Test API** in the browser: go to `http://localhost:3000`.
14. **Set response status and headers** properly.
   <!-- To clearly tell the browser:
        * `statusCode = 200` means “OK”
        * `Content-Type = text/plain` means it’s plain text, not HTML or JSON. -->

### 🧼 **CLEAN CODE STRUCTURE**
15. **Create a separate file**: `server.js`
16. **Move server code** to `server.js`.
17. **Import `server.js`** into `index.js`.
18. **Keep `index.js` as the app entry point**.
    <!-- (It keeps your code clean and organized—`index.js` just starts the app, while `server.js` handles server logic. Easier to scale later.) -->

### ⚙️ **USE NODMON (auto-restart)**
19. **Install nodemon** as dev dependency:
```bash
npm install --save-dev nodemon
```
20. **Update `package.json` scripts**:
```json
"start": "nodemon index.js"
```
21. **Run the server with `npm start`**.

### ✅ **IMPROVE THE API**
22. **Send JSON response**:
```js
res.end(JSON.stringify({ message: "Hello World" }));
```
<!-- (JSON is the standard format for APIs. It makes your response usable by frontend apps or other services.) -->
23. **Set header as JSON**:
```js
res.setHeader('Content-Type', 'application/json');
```

### 📁 **PROJECT STRUCTURE (Optional)**
24. **Create `routes/hello.js`** file.
25. **Move "Hello World" handler** to that file.
26. **Import `hello.js`** into your server.
    <!-- (The `routes` folder organizes your app’s **different URLs (routes)**. Each file handles a specific request path, like `/hello`. It keeps logic modular and scalable.) -->

### 🧪 **TEST & VERIFY**
27. **Use browser or Postman** to check output.
28. **Try sending different messages** via routes.

### 🧹 **FINAL TOUCHES**
29. **Add README.md** explaining how to run the API.
30. **Celebrate!** You've built your first Node.js API 🎉

Ready to start with Step 1?
<!-- END -->