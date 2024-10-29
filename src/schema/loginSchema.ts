
const DB = require("mongoose") ;
 const message = 'campo obrigatorio'
const  user = new DB.Schema({
  
    name:{ type: String , required : message },

   password:{type: String },

});

const Usermon = DB.models.Usermon|| DB.model('User', user)

module.exports = Usermon;

