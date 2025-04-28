import express from "express";
import * as postControler from "../controller/post.mjs";
import { body } from "express-validator";
import { validate } from "../middleware/validator.mjs";

const router = express.Router();

const validatePost = [
  body("text").trim().isLength({ min: 5 }).withMessage("최소 5자 입력"),
  validate,
];

//모든 포스트 가져오기

//해당 아이디에 대한 포스트 가져오기 (get)
//http://127.0.0.1:8080/posts/
//http://127.0.0.1:8080/posts?userid=apple

router.get("/", postControler.getPosts);

//글 번호에 대한 포스트 가져오기 (get)
//http://127.0.0.1:8080/posts/:id

router.get("/:id", postControler.getPost);

//포스트 쓰기 (post)
//http://127.0.0.1:8080/posts
//json 형태로 입력 후 저장

router.post("/", validatePost, postControler.createPost);

//포스트 수정하기 (put)
//json형대로 입력 후 저장

router.put("/:id", validatePost, postControler.updatePost);

//포스트 삭제하기 (delete)
//http://127.0.0.1:8080/posts/:id

router.delete("/:id", postControler.deletePost);

export default router;
