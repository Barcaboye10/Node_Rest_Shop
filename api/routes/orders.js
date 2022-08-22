const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Inside Orders GET",
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  res.status(201).json({
    message: "Inside Orders POST",
    order: order
  });
});

router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Inside Orders GET id:" + req.params.orderId,
  });
});

module.exports = router;
