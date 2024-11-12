import User from "../models/authSchema.js";

export const register = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();
    res.status(200).json({
      message: "User Signup Successfully",
    });

  } catch (error) {
    console.log(error);
  }
};

// export const login = async (req, res) => {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// };
