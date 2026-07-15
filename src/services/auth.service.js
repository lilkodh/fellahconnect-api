const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function register(userData) {
  const existingUser = await User.findOne({
    where: {
      email: userData.email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = await User.create({
    fullName: userData.fullName,
    email: userData.email,
    password: hashedPassword,
    role: userData.role,
  });

  return user;
}

async function login(userData) {
  const user = await User.findOne({
    where: {
      email: userData.email,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(
    userData.password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return {
    user,
    token,
  };
}

module.exports = {
  register,
  login,
};