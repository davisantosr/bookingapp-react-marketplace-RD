

export class authController{
  
  register = async (req, res) =>{
    const {name, email, password} = req.body;

    res.status(200).send({
      name, email, password
    })

    
  }

  showMessage = async (req, res) => {
    res.status(200).send('API is running');
  }

}


export default authController;