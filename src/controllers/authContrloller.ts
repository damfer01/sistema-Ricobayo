const authService = require('../service/authService');
const UserService = require('../service/userService');

module.exports = {
    async create( req, res ) {
      try {
        const {
             nome,
          senha,
        } = req.body;
  
        const response = await UserService.create(nome, senha);
  
        return res.json(response);
      } catch (error) {
        console.log(error);
        return res.json({ success: false, message: 'Failed to create user'});
      }
    },
  
    async login( req, res ) {
      try {
        const {
          nome,
          senha,
        } = req.body;
  
        const response = await authService.create( nome, senha );
  
        return res.json( response );
      } catch ( err ) {
        return res.json({ success: false, message: 'failed to login'});
      }
    },
  };
  export {}