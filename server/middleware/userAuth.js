import jwt from "jsonwebtoken";

export const userAuth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({
      success: false,
      message: "Unauthorized: No token provided. Login again.",
    });
  }

  try {
    const tokenDecode = jwt.verify(token, "secret#text");
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res.json({
        success: false,
        message: "Unauthorized: Invalid token. Login again.",
      });
    }

    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
