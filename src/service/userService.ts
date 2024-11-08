const bcrypt = require('bcrypt');

const User = require('../Schema/registerSchema');
const authService = require('./authService')

module.exports = {

    async create( nome, senha) {
        const user = await User.findOne({nome});
        
        if(!!user) return {success:false , message:'usuário já cadastrado'}
        const hash = await  bcrypt.hash(senha, 10);

        await User.create({
            
            nome,
            senha:hash,
        });
        const {result} = await authService.create(nome, senha);

        return {
            success: true,
            message: 'user successfully created',
            result,
          };    
    },

    async index() {
        const users = await User.find();

        return {
            success: true,
            message: ' recovered',
            result: users,
        };
    },

    async show(id) {
        const user = await User.findById(id);

        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

    async update(id,  nome,) {
        await User.findByIdAndUpdate(id, {
            
            nome,
        });

        return { success: true, message: 'sucesso' };
    },

    async delete(id) {
        console.log(id)
        await User.findByIdAndDelete(id);

        return {
            success: true,
            message: ' deleted'
        }
    },
};