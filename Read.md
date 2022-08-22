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
