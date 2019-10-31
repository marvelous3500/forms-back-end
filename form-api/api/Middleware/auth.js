
import jwt from 'jsonwebtoken'
import * as users from '../service/userService'


export async function getToken (req, res, next) {
     const {username}  = req.body;

  try {
    const user = await users.getUserByUserName(username)
     // todo add validated 
    if (typeof user.username !== 'undefined') {
      
        const payload = {
          user: {
          id: user.id
        }};

       jwt.sign(
        payload,
        'secret',
        { expiresIn: 360000 },
        (err, token) => {
        if (err) throw err.message;
          res.json({ token });
        });
    }
  } catch (error) {
    res.json({ message: error.message })
  }
}

export function verifyHeader (req, res, next) {
  
  let token = req.headers['access-token']

  if (token) {
    jwt.verify(token, 'Secretkey', (err, decoded) => {
      if (err) {
        res.json({ message: 'Invalid token Signature' })
      } else {
        next()
      }
    })
  } else {
    res.send({ message: 'No token provided.' })
    next()
  }

}

export function generateToken(user) {
    try {

      const payload = {
        user: {
        id: user.id
      }};

    let generatedToken = jwt.sign(payload, 'secret', { expiresIn: '1h' })
    return generatedToken;

    } catch (error) {
      throw  error.message
    }    
      
}
  