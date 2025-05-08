import { db } from "./db/database.mjs";

export async function getUsers() {
  // db.query("select * from member")의 반환은 [rows, fields]
  const [rows] = await db.query("select * from users");
  //      ↑ 그중 row만 가져오기
  return rows;
}

export async function createUser(userid, password, name, email) {
  const [result] = await db.query(
    "insert into users (userid,password,name,email) values (?,?,?,?)",
    [userid, password, name, email]
  );
  return result.insertId;
}

export async function updateUserEmail(idx, newEmail) {
  const [result] = await db.query("update users set email=? where idx=?", [
    newEmail,
    idx,
  ]);
  return result.affectedRows;
}

export async function deleteUser(idx) {
  const [result] = await db.query("delete from users where idx=?", [idx]);
  return result.affectedRows;
}
