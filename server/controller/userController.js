import User from "../model/userModel.js";

// For posting new user into database.

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist." });
    }
    const savedData = await newUser.save();
    res.status(200).json(savedData);

    //     res.status(200).json({ message: "User created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
