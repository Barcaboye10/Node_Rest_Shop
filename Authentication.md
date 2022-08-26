## Authentication
  - https://youtu.be/_EP2qCmLzSE?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&t=46
  -  RESTful APIs are stateless, they don't save any information about connected clients. thus sessions can't be returned by the server to the client
  - Rather, we return a Token. This token contains some signature, and some details about the logged in user.
  - This token is then stored by the client, so that if the client then tries to access the server(for eg, to store some data in DB), the request contains the token which can be verified by the server with the signature of the token, to ensure that the client is authorised to access the server.

## JSON Web Token(JWT)
    - JSON Data+Signature.
    - Signature is verified as it is checked by private and public keys and only the server has both private and public keys.
    - JWT is not encrypted, but cannot be changed.
    - Token is added to coookies when logging in, which is base 64 encoded string.
    - Signature is encrypted by public/private key pairs using RSA.
    - https://github.com/auth0/node-jsonwebtoken


## Bcrypt.js(Hashing libraries for Nodejs)
  - https://github.com/kelektiv/node.bcrypt.js
  - Used to hash the password so that we don't store raw password in DB, so that anyone with access to DB can see our passwords.

## Salting in hashing:
  - If user uses a very common phrase like "Icecream" for password, chances are, we might find the plain text for its hash very easily on google. So anyone with access to DB can still get passwords.
  - Salting means adding random strings to the plain text password before hashing. So now common pharses also become a complicated string, and we will not find a dictionary containing plain text to it's hash. Hence, password cannot be accessed.
  - Salting Rounds: "salt round" actually mean the cost factor. The cost factor controls how much time is needed to calculate a single BCrypt hash. The higher the cost factor, the more hashing rounds are done. Increasing the cost factor by 1 doubles the necessary time. The more time is necessary, the more difficult is brute-forcing.