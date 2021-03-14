import User from '../models/userModel.js';

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
}


export default authController;