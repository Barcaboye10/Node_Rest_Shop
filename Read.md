1. Express(definition)
2. morgan: logging package for Node JS (logging: console.log) (not very important. just good to know)
3. CORS
   - https://youtu.be/zoSJ3bNGPp0?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&t=452
   - Cross Origin Resource Sharing
   - Clients and Server have usually different urls/origins. Request tries fails, as it is understood that clients should not be needing the data orignating from server, hence the error.
   - Resolved by passing some suitable headers in requests so that we disable this error.
   - CORS errors are security enabling errors by the browser, thus passing headers disables CORS errors as the browser now knows to not throw CORS errors. Since they are thrown by the browser, we don't see CORS errors in Postman.
4. body-parser
   1. urlencoded
   2. json
5. headers in Http requests
6. payload in Http requests
7. mongoose:
   1. definition
   2. package which makes fetching and storing data in mongoDB super simple.
8. Patch function as follows(Imp to understand): 
      ``` 
      router.patch("/:productId", (req, res, next) => {
      const id = req.params.productId;
      <!-- important to understand the below function, it enables to update only the fields we need to, instead of passing all the fields -->
      const updateOps = {};
      for (const ops of req.body) {
         updateOps[ops.propName] = ops.value;
      }
      Product.update({ _id: id }, { $set: updateOps })
         .exec()
         .then((result) => {
            console.log(result);
            res.status(200).json(result);
         })
         .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
         });
      });
      ```
      This is how the request body will be for update
      ```
      [
         {
            "propName": "name",
            "value": "Harry Potter 9"
         }
      ]
      ```
9. Mongoose Validations:
   1. mongoose checks if , for eg, we pass a String in a number type, and throws validation error.
   2. if we do not set a field required, we can post object without that field, this validation is not done by mongoose by default. Adding `{required: true}` to the field ensures this validation, and then throws Validation error if that field is missing from the object being posted.
10. `.select('name price')` will then select only "name" and "price" fields from the "docs" recieved from `Product.find()`.
11. Relations between schemas in mongodb:
      - https://youtu.be/VKuY8QscZwY?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&t=152
      - Few relations are okay, but if we need to make many relations between schemas, it's better to use SQL/relational databases instead of mongodb
      - `ref: "Product"` this ensures that schema is now related to 'Product' model
12. `.populate("product")`
      - so that product field is populated with the details of the product (Note that order Schema is has "product" field, related to "Product" model)
      - Response changes from `"product":  "_id": "6303cc3058121e4082b7248d",` to 
      ```
      "product": {
                "_id": "6303cc3058121e4082b7248d",
                "name": "Harry Potter 9",
                "price": 14.99,
                "__v": 0
            },
      ```
      - `.populate("product", "name")` now changes the response to 
      ```
      "product": {
                "_id": "6303cc3058121e4082b7248d",
                "name": "Harry Potter 9"
            },
      ```
13. form-data can be used for request body instead of json in order to get files/images to be uploaded.
    - We use "multer" package for that; to parse the from-data request body. It is essentially an alternative for body-parser, when we need to parse form-data from request body.
    - Note that "multer" can parse request files as well as request body too (i.e. we can still use `req.body.productId` like code too, even in form data)
    - `upload.single('productImage')` in `router.post("/", upload.single('productImage'),(req, res, next) => {.....}` is a middleware executes before the router function for post so that "productImage" field from form-data is parsed and image is uploaded in "dest" mentioned above.

    
