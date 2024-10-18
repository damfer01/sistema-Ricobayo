const bcrypt = require('bcrypt');

const User = require('../schema/loginSchema');
const { generateToken } = require('../config/auth')

module.exports = {

    async create(name, passsword) {
        const user = await User.findOne({ name }).select('+password');

        if (!user) return { success: false };

        const checkPass = await bcrypt.compare(passsword, user.password);

        if (!checkPass) return { success: false };

        const token = await generateToken(user._id);

        return {
            success: true,
    
            result: {
                empresa: user.empresa,
                token,
            },
        };
    },
};
export { };
