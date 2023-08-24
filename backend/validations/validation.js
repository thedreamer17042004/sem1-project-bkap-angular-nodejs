const { body } = require("express-validator");
  
const userDataValidateChainMethod = [
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("User name is required")
    .isString()
    .withMessage("User name should be string"),
  body("password")
    .exists()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password should be string")
    .isLength({ min: 3 })
    .withMessage("Password should be at least 3 characters"),
  body("email").optional().isEmail().withMessage("Provide valid email"),

];



module.exports = {
  userDataValidateChainMethod,
};