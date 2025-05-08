import {
  getUsers,
  createUser,
  updateUserEmail,
  deleteUser,
} from "./userRepository.mjs";
import { db } from "./db/database.mjs";

async function main() {
  //   select
  // const users = await getUsers();
  // console.log("사용자 목록: ", users);
  //   insert
  // userid,userpw,name,hp,email,gender,ssn1,ssn2,zipcode,address1,address2,address3
  // const newUserId = await createUser(
  //   "NokCha",
  //   "1111",
  //   "녹차",
  //   "010-1111-1111",
  //   "rlatlsaud438@gmail.com",
  //   "남자",
  //   "111111",
  //   "1111111",
  //   "12345",
  //   "하나",
  //   "둘",
  //   "셋"
  // );
  // console.log("새 사용자 ID: ", newUserId);
  //   update
  // const updateCount = await updateUserEmail(1, "apple@naver.com");
  // console.log("수정된 사용자 수: ", updateCount);
  //   delete
  //   const deletedCount = await deleteUser(6);
  //   console.log("삭제된 사용자 수: ", deletedCount);
  //   await db.end(); //풀 종료, 거의 사용X
}

main();
