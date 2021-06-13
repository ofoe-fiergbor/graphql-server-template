const User = require("../../../models/user");
const bcryptjs = require("bcryptjs");
const { validateLoginInput } = require("../../../utils/validation");
const { jwtTokenGenerator } = require("../../../utils/generateToken");
const { UserInputError } = require("apollo-server");

module.exports = {
  Mutation: {
    async register(_, { email, password }) {
      const { errors, valid } = validateLoginInput(registerInput);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ email });

      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const match = await bcryptjs.compare(password, user.password);
      
      if (!match) {
        errors.general = "Wrong credentials";
        throw new UserInputError("Wrong credentials", { errors });
      }

      const token = jwtTokenGenerator(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
     
    },
  },
};
