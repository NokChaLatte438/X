import express from "express";
import * as authController from "../controller/auth.mjs";
import { body } from "express-validator";
import { validate } from "../middleware/validator.mjs";

const router = express.Router();

const validateLogin = [
  body("userid")
    .trim()
    .isLength({ min: 4 })
    .withMessage("최소 4자이상 입력해라")
    .matches(/^[a-zA-Z0-9]*$/)
    .withMessage("특수문자 사용불가"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("최소 8 자이상 입력해라"),
];

const validateSignup = [
  ...validateLogin,
  body("name").trim().notEmpty().withMessage("name 입력"),
  body("email").trim().isEmail().withMessage("이메일 똑바로 입력"),
  validate,
];

//회원가입 기능
router.post("/signup", authController.signup);

//로그인
router.post("/login", authController.login);

//로그인 유지

//로그아웃

export default router;
