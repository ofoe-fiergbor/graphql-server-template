const User = require("../../../models/user");
const bcryptjs = require("bcryptjs");
const { validateRegisterInput } = require("../../../utils/validation");
const { jwtTokenGenerator } = require("../../../utils/generateToken");
const { UserInputError } = require("apollo-server");

module.exports = {
  Mutation: {
    async register(_, { registerInput }) {
      const { errors, valid } = validateRegisterInput(registerInput);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ email: registerInput.email });

      if (user) {
        errors.general = "A user with this phone number already exist";
        throw new UserInputError("User already exist", { errors });
      }

      password = await bcryptjs.hash(registerInput.password, 10);

      const newUser = new User({
        password,
        email: registerInput.email,
        username: registerInput.username,
        createdAt: new Date().toISOString(),
      });

      const result = await newUser.save();

      const token = jwtTokenGenerator(result);

      return {
        ...result._doc,
        id: result._id,
        token,
      };
    },
  },
};
