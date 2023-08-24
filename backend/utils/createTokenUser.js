const createTokenUser = (user) => {
  return { name: user.email, password: user.password };
};

module.exports = createTokenUser;
