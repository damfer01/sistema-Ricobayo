const authService = require('../service/authService');
const UserService = require('../service/userService');

module.exports = {
    async create( req, res ) {
      try {
        const {
             name,
          password,
        } = req.body;
  
        const response = await UserService.create(name, password);
  
        return res.json(response);
      } catch (error) {
        console.log(error);
        return res.json({ success: false,});
      }
    },
  
    async login( req, res ) {
      try {
        const {
          name,
          password,
        } = req.body;
  
        const response = await authService.create( name, password );
  
        return res.json( response );
      } catch ( err ) {
        return res.json({ success: false,});
      }
    },
  };
  export {}