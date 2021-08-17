const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ username, email, _id }) {
  const payload = { username, email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  authMiddleware: function ({req}) {
    let token = req.query.token || req.headers.authorization || req.body.token;
    console.log('\n this is the request \n',req.body)
    console.log('\n This is the Token \n',token);

    if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
    }

    if (!token) {
    return req; //res.status(400).json({ message: 'You have no token!' }); (original starter code)
    }

    try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
    } catch {
    console.log('Invalid token');

    return console.log('this is a return!!'); //return res.status(400).json({ message: 'invalid token!' });
  }

    return req;
  },
};