const bcrypt = require('bcrypt');

const User = require('../schema/loginSchema');
const {generateToken} = require('../config/auth')

module.exports ={

    async create(name , passsword) {
        const user = await User.findOne({name}).select('+password');

        if(!user) return {success: false , message: 'credencias invalidas'};

        const checkPass = await bcrypt.compare(passsword , user.password);

        if(!checkPass) return { success: false , message: 'credencias invalidas '};

        const token = await generateToken(user._id);

        return {
            success: true,
            message: 'login efetivado com sucesso',
            result: {
              empresa: user.empresa,
              token,
            },
        };
    },
};
export{};
