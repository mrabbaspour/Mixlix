import "./../RegisterForm/FormStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
  // States :
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Validation :

  let navigateUser = useNavigate();

  const formValidation = (e) => {
    e.preventDefault();
    alert("you logined succesfully ...");
    navigateUser("/");
  };

  return (
    <div className="form-box">
      <form onSubmit={formValidation}>
        <div className="form-logo">
          <img src="images/navbar-logo.png" alt="mixlix-logo" />
        </div>
        <div>
          <input
            type="text"
            placeholder="نام کاربری یا ایمیل"
            autoFocus
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="کلمه عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="ورود" className="submit-btn" />
        </div>
        <div style={{ marginTop: 35 }}>
          <br />
          <span style={{ display: "block", maxWidth: 324 }}>
            اگر قبلا در سایت ثبت نام کرده اید با وارد کردن ایمیل یا نام کاربری و
            رمز عبور وارد پنل کاربریتان شوید در غیر این صورت{" "}
            <Link
              to="/register"
              style={{ color: "#ff5600", textDecoration: "underline" }}
            >
              ثبت نام کنید.
            </Link>
          </span>
        </div>
        <div style={{ marginTop: 35 }}>
          <span style={{ display: "block", maxWidth: 324 }}>
            رمز عبور را فراموش کرده اید ؟
            <Link
              to="/"
              style={{ color: "#ff5600", textDecoration: "underline" }}
            >
              فراموشی رمز عبور
            </Link>
          </span>
        </div>
        <div style={{ marginTop: 35 }}>
          <span style={{ display: "block", maxWidth: 324 }}>
            <Link
              to="/"
              style={{ color: "#ff5600", textDecoration: "underline" }}
            >
              بازگشت به صفحه اصلی
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
