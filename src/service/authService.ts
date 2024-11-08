const bcrypt = require('bcrypt');

const User = require('../schema/registerSchema');
const { generateToken } = require('../config/auth')

module.exports = {

    async create(nome, passsword) {
        const userAuth = await User.findOne({ nome }).select('+senha');

        if (!userAuth) return { success: false };

        const checkPass = await bcrypt.compare(passsword, userAuth.senha);

        if (!checkPass) return { success: false, message: 'Credenciais invalidas' };

        const token = await generateToken(userAuth._id);

        return {
            success: true,
            message: 'login efetivado com sucesso',
            result: {
                nome: userAuth.nome,
                token,
            },
        };
    },
};
export { };
