module.exports.validateRegisterInput = ({
  username,
  email,
  password,
  confirmPassword,
}) => {
  const errors = {};

  if (username.trim() === "") {
    errors.username = "First name must not be empty.";
  }

  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(emailRegex)) {
      errors.email = "Email must be a valid email.";
    }
  }

  if (password === "") {
    errors.password = "Password must not be empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};



module.exports.validateLoginInput = (phoneNumber, password) => {
  const errors = {};

  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(emailRegex)) {
      errors.email = "Email must be a valid email.";
    }
  }

  if (password === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
