const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Inside products GET",
  });
});

router.post("/", (req, res, next) => {
    const product = {
        // the "body" part of "req.body.name" is now available due to the bodyParser
        name: req.body.name,
        price: req.body.price
    }
  res.status(201).json({
    message: "Inside products POST",
    createdProduct: product
  });
});

router.patch("/", (req, res, next) => {
  res.status(200).json({
    message: "Inside products PATCH",
  });
});

router.delete("/", (Req, res, next) => {
  res.status(200).json({
    message: "Inside products DELETE",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "111") {
    res.status(200).json({
      message: "Inside products GET (special) ID:" + req.params.id,
    });
  } else {
    res.status(200).json({
      message: "Inside products GET ID:" + id,
    });
  }
});

module.exports = router;
