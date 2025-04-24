import * as authRepository from "../data/auth.mjs";
import session from "express-session";
import express from "express";

const app = express();

app.use = session({
  secret: "!@#$%&^*)(",
  resave: false,
  saveUninitialized: false,
  secret: { secure: false },
});

export async function signup(req, res, next) {
  const { userid, password, name, email } = req.params.body;
  const users = await authRepository.createUser(userid, password, name, email);
  if (users) {
    res.status(201).json(users);
  }
}

export async function login(req, res, next) {
  const { userid, password } = req.param.body;
  const users = await authRepository.login(userid, password);
  if (users) {
    res.status(200).json(`${userid}님 로그인 완료`);
    req.session.user = { userid };
  } else {
    res.status(404).json({ message: `아이디 혹은 비밀번호를 확인해주세요` });
  }
}

export async function check(req, res, next) {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
}

export async function logout(req, res, next) {
  req.session.destroy(() => {
    res.send("로그아웃 되었습니다.");
  });
}
