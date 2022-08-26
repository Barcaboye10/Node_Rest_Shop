const express = require("express");
const app = express();
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const userRoutes = require("./api/routes/user")
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://node-shop:"+process.env.MONGO_ATLAS_PW+"@node-rest-shop.vmwdfve.mongodb.net/?retryWrites=true&w=majority"
);

// "GET /orders/123 200 2.758 ms - 38" such a line appears in console whenever a request is made. This is because of morgan, and the middleware written in next line
app.use(morgan("dev"));

// middleware to make "uploads" folder statically available, so that we can see the files by entering the file path with localhost:3000 in browser
app.use("/uploads",express.static('uploads'))

// Middleware to parse request body.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Header added to disable CORS errors, for any origin ("*" means for all origin)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  //   Browser will always send an "Options" request when we send any kind of request to know if that request can be made
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/user", userRoutes)

// When above two middlewares ('/products', '/orders') are not found, the next middleware runs which handles the error.
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
  //   Passes the error to the next middleware, written below(line 22)
});

// Whenever the above middleware runs, or any database operation throws an error, this middleware runs to show the error in response of the request i.e. Error Handling
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
