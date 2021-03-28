import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export class authController{
  
  register = async (req, res) =>{
    const {name, email, password} = req.body;

    if(!name) return res.status(400).send('Name is required.');
    if(!password || password.length < 6) 
      return res.status(400).send('Password is required. And need at least 6 chars');

    let userExists = await User.findOne({email}).exec();

    if(userExists) return res.status(400).send('Email already exists')

    // register
    const user = User(req.body);

    try {
      await user.save();
      console.log('user created', user)

      res.status(201).json({ok: true});
      
    }catch(err) {
      console.log('Error creating user', err)
      return res.status(400).send('Error. Try again.')
    }

    res.status(200).send({
      name, email, password
    })
  }


  login = async (req, res) => {
    // console.log(req.body)

    const {email, password} = req.body;
    
    try {
      // check if the user exists
      let user = await User.findOne({email}).exec();

      if(!user) res.status(400).send('User not found')

      user.comparePassword(password, (err, match) => {
        console.log('compare password', err)

        if(!match || err) {
          return res.status(400).send('Wrong Password')
        }
        console.log('Generate token and send to client')
        let token = jwt.sign({_id: user.id}, process.env.JWT_SECRET, {
          expiresIn: '7d'
        })

        res.json({token, user: {
          _id: user._id,
          name: user.name,
          email: user.email, 
          createdAt: user.createdAt, 
          updatedAt: user.updatedAt,
        }})
      })


    }catch(err) {
      console.log('LOGIN ERR', err)
      res.status(400).send('Sign in failed')
    }


  }
}


export default authController;