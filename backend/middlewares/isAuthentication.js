import Jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not Authenticated",
        success: false,
      });
    }
    const decode = await Jwt.verify(token, process.env.SECRET_KEY);

    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    req.id = decode.userId;
    console.log("req id in middleware ", req.id, decode.userId);
    next();
  } catch (error) {
    console.log(error);
  }
};
export default isAuthenticated;
