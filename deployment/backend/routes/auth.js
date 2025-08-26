"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const validation_1 = require("../middleware/validation");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Public routes
router.post('/register', validation_1.validateRegister, authController_1.AuthController.register);
router.post('/login', validation_1.validateLogin, authController_1.AuthController.login);
// Protected routes
router.post('/logout', auth_1.authenticateToken, authController_1.AuthController.logout);
router.get('/profile', auth_1.authenticateToken, authController_1.AuthController.getProfile);
exports.default = router;
//# sourceMappingURL=auth.js.map