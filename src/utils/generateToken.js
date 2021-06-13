const jwt = require("jsonwebtoken");
const { SECRETE } = require("../config");

module.exports.jwtTokenGenerator = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    SECRETE,
    { expiresIn: "1hr" }
  );
};
