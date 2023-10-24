const express = require("express");
const Route = express.Router();
const Middlewares = require("../app/Middleware/middlewares");
const AuthController = require("../app/Controllers/Auth/AuthController");
const UserController = require("../app/Controllers/User/UserController");
const RegisterRequest = require("../app/Requests/Auth/RegisterRequest");
const LoginRequest = require("../app/Requests/Auth/LoginRequest");
const UserUpdateRequest = require("../app/Requests/User/UpdateRequest");
const ListStoreRequest = require("../app/Requests/List/ListStoreRequest");
const ListUpdateRequest = require("../app/Requests/List/ListUpdateRequest");
const ListController = require("../app/Controllers/List/ListController");
const TaskController = require("../app/Controllers/Task/TaskController");
const TaskStoreRequest = require("../app/Requests/Task/TaskStoreRequest");
const TaskUpdateRequest = require("../app/Requests/Task/TaskUpdateRequest");

//  -------------------------auth routes-------------------------------------------
Route.post("/register", RegisterRequest, AuthController.register);
Route.post("/login", LoginRequest, AuthController.login);
Route.get('/logout', Middlewares.auth, AuthController.logout);

//  ------------------------user account routes------------------------------------
Route.get("/user", Middlewares.auth, UserController.index);
Route.delete("/user", Middlewares.auth, UserController.delete);
Route.put("/user", Middlewares.auth, UserUpdateRequest, UserController.update);

//  -----------------------------list routes---------------------------------------
Route.get("/list", Middlewares.auth, ListController.index);
Route.get("/list/:list", Middlewares.auth, Middlewares.isListOwner, ListController.show);
Route.post("/list", Middlewares.auth, ListStoreRequest, ListController.store);
Route.put("/list/:list", Middlewares.auth, Middlewares.isListOwner, ListUpdateRequest, ListController.update);
Route.delete("/list/:list", Middlewares.auth, Middlewares.isListOwner, ListController.delete);

//  -----------------------------task routes---------------------------------------
Route.get("/list/:list/task", Middlewares.auth, Middlewares.isListOwner, TaskController.index);
Route.get("/list/:list/task/:task", Middlewares.auth, Middlewares.isListOwner, Middlewares.isTaskBelongsToList, TaskController.show);
Route.post("/list/:list/task", Middlewares.auth, Middlewares.isListOwner, TaskStoreRequest, TaskController.store);
Route.put("/list/:list/task/:task", Middlewares.auth, Middlewares.isListOwner, Middlewares.isTaskBelongsToList, TaskUpdateRequest, TaskController.update);
Route.delete("/list/:list/task/:task", Middlewares.auth, Middlewares.isListOwner, Middlewares.isTaskBelongsToList, TaskController.delete);

module.exports = Route;