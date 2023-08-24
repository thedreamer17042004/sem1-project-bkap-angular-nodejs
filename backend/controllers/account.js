const LoginModel = require('../models/login');
const connection = require('../configs/connectdb');
const notfound = require('../errors/notfound');
const { validationResult } = require("express-validator");
const createTokenUser = require('../utils/createTokenUser');
const { StatusCodes } = require('http-status-codes');
const registerModel = require('../models/register');
const registerAdminModel = require('../models/registerAdmin');
const { attachCookiesToResponse } = require('../utils/jwt');


const Login = (req, res, next) => {
   const user = req.body;
//    try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({
//         success: false,
//         errors: errors.array(),
//       });
//     }
//   } catch (err) {
//     next(err);
//   }
   LoginModel(user.email, user.password, (err, result) => {
        if(!err) {
            if(result.length <= 0) {
                res.json({meassage: "Email not found"});
            }else {
              if(result[0].role == 'admin') {
                res.status(200).json({message: "Admin OK"});
              } else {
                var tokenUser = createTokenUser(user);
                attachCookiesToResponse({res, user: tokenUser})
                res.status(200).json({message: 'User ok', result: result});
              }
            }
        }else {
            res.status(500).json(err);
        }
   });

};



const register = (req, res) => {
    var user = req.body;
    registerModel(user.email, (err, result) => {
        if(!err) {
            if(result.length <= 0) {
               queryq = "INSERT INTO account (name, email, password) VALUES (?,?,?)";
               connection.query(queryq, [user.name, user.email, user.password], (err, result) => {
                if(!err) {
                    res.status(200).json(result);
                }else {
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
                }
               });
            }else {
                res.json({message: "Email already in use"});
            }
        }else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    });
};


const registerAdmin = (req, res) => {
    var user = req.body;
    user.role = 'admin';
    registerAdminModel(user.email, (err, result) => {
        if(!err) {
            if(result.length <= 0) {
               queryq = "INSERT INTO account (name, email, password, role) VALUES (?,?,?, ?)";
               connection.query(queryq, [user.name, user.email, user.password, user.role], (err, result) => {
                if(!err) {
                    res.status(200).json(result);
                }else {
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
                }
               });
            }else {
                res.json({message: "Email already in use"});
            }
        }else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    });
};

module.exports = {Login, register,registerAdmin};