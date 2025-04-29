document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login__btn");

  loginBtn.addEventListener("click", async () => {
    const userid = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert(`로그인 성공! 사용자: ${data.userid}`);
        // window.location.href = "/main.html";
      } else {
        alert(`로그인 실패: ${data.message || data}`);
      }
    } catch (error) {
      alert("서버 오류: " + error.message);
      console.error("로그인 요청 중 에러:", error);
    }
  });
});
