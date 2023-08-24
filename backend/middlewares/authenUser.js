const { isTokenValid } = require('../utils/jwt');
const UnauthenticatedError = require('../errors/unauthenticated');


const authenticateUser = (req, res,next) => {
    var token = req.signedCookies.token;
    const authHeader = req.headers.authorization;
    console.log(token);
    console.log(authHeader)
    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(' ')[1];
    }

    if (!token) {
        throw new UnauthenticatedError('Authentication invalid s');
    }

    try {
        let payload = isTokenValid({token: token});
        next();
    }catch(err) {
        throw new UnauthenticatedError('Authentication invalid');
    }
};

module.exports = {
    authenticateUser
}