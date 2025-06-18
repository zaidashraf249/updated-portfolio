import Admin from "../models/adminModel.js";


export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  // ✅ Hardcoded credentials
  const adminEmail = "admin@example.com";
  const adminPassword = "@dmin123";

  if (email === adminEmail && password === adminPassword) {
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
};


export default adminLogin;
