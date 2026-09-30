const EventEmitter = require("events");

const student = new EventEmitter();

// Login
student.on("login", function () {
    console.log("Student logged in successfully");
});

// Assignment
student.on("assignment", function () {
    console.log("Assignment submitted");
});

// Logout
student.on("logout", function () {
    console.log("Student logged out");
});

// Exit
student.on("exit", function () {
    console.log("Exit");
});

// Calling events
student.emit("login");
student.emit("assignment");
student.emit("logout");
student.emit("exit");