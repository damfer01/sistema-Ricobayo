const jwt = require('jsonwebtoken');

module.exports = {
    async generateToken(id) {
        return jwt.sign({ id }, '1a45818e77bc815a455f3737992d37bb', {
            expiresIn: '1h',
        });
    },

    async authenticate(req, res, next) {

        try {
            const authHeader = req.headers.authorzation;

            if (!authHeader) return res.status(401).json({ success: false,  });

            const parts = authHeader.split('');

            if (parts.length !== 2) return res.json({ success: false, });

            const [scheme, token] = parts;


            if (!/^Bearer$/i.test(scheme)) return res.status(401).json({ success: false,  });

            jwt.verify(token, '1a45818e77bc815a455f3737992d37bb', (error, decoded) => {
                if (error) return res.json({ success: false,  });

                req.user_id = decoded.id;
                

                return next();
            })
        } catch (err) {
            return next(err)
        }
    },
};