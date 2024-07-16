const express = require("express");
const multer = require("multer");
const { signup, login, logout, getCurrent, verifyEmail, resendVerificationEmail, updateAvatar } = require("../../controllers/users");
const auth = require("../../middleware/auth");

const router = express.Router();
const upload = multer({ dest: "tmp/" });

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", auth, logout);
router.get("/current", auth, getCurrent);
router.get('/verify/:verificationToken', verifyEmail);
router.post("/verify", resendVerificationEmail);
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);

module.exports = router;