// src / routes / middlewares / auth.js
"use strict";
const jwt = require("jsonwebtoken");

// Auth Middleware
const authMiddleware = function (request, response, next) {
  console.log("[MIDDLEWARE] Here should be the middleware check");
  // TODO: Check if user can access to mongodb
  next();
};

// Export
module.exports = authMiddleware;