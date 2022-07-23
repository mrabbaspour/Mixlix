import "./FormStyles.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  // States :

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [repeatPassword, setReapatPassword] = useState("");

  // Refs :

  const userNameErrorText = useRef();
  const emailErrorText = useRef();
  const phoneNumberErrorText = useRef();
  const passwordErrorText = useRef();
  const repeatPasswordErrorText = useRef();

  // Regexes :
  const userNameRegex =
    /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const phoneNumberRegex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;

  // Validation :

  let navigateUser = useNavigate();

  const formValidation = (e) => {
    e.preventDefault();

    let isValidUserName = userNameRegex.test(userName);
    let isValidPassword = passwordRegex.test(password);
    let isValidEmail = emailRegex.test(email);
    let isValidPhoneNumber = phoneNumberRegex.test(phoneNumber);
    let isValidRepeatPassword = () => {
      if (repeatPassword === password) {
        return true;
      }
      return false;
    };

    if (
      isValidUserName &&
      isValidPassword &&
      isValidEmail &&
      isValidPhoneNumber &&
      isValidRepeatPassword()
    ) {
      userNameErrorText.current.innerText = "";
      passwordErrorText.current.innerText = "";
      phoneNumberErrorText.current.innerText = "";
      emailErrorText.current.innerText = "";
      repeatPasswordErrorText.current.innerText = "";
      alert("you registered succesfully ...");
      navigateUser("/");
    } else {
      // errors :
      !isValidUserName
        ? (userNameErrorText.current.innerText =
            "نام کاربری باید 8 الی 20 کاراکتر باشد (. یا _ اول یا آخر نباشند)")
        : (userNameErrorText.current.innerText = "");
      !isValidPassword
        ? (passwordErrorText.current.innerText =
            "رمز عبور باید حداقل 8 کاراکتر و شامل حداقل یک حرف و یک عدد باشد")
        : (passwordErrorText.current.innerText = "");
      !isValidPhoneNumber
        ? (phoneNumberErrorText.current.innerText =
            "شماره همراه خود را به درستی وارد کنید (شروع با 0 )")
        : (phoneNumberErrorText.current.innerText = "");
      !isValidEmail
        ? (emailErrorText.current.innerText = "ایمیل خود را به درستی وارد کنید")
        : (emailErrorText.current.innerText = "");
      !isValidRepeatPassword()
        ? (repeatPasswordErrorText.current.innerText =
            "رمز عبور و تکرار آن یکسان نیستند")
        : (repeatPasswordErrorText.current.innerText = "");
    }
  };

  return (
    <>
      <div className="form-box">
        <form onSubmit={formValidation}>
          <div className="form-logo">
            <img src="images/navbar-logo.png" alt="mixlix-logo" />
          </div>
          <div>
            <input
              type="text"
              placeholder="نام کاربری"
              autoFocus
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div ref={userNameErrorText} className="input-error-text"></div>
          <div>
            <input
              type="email"
              placeholder="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div ref={emailErrorText} className="input-error-text"></div>
          <div>
            <input
              type="text"
              placeholder="شماره همراه"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div ref={phoneNumberErrorText} className="input-error-text"></div>
          <div>
            <input
              type="password"
              placeholder="کلمه عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div ref={passwordErrorText} className="input-error-text"></div>
          <div>
            <input
              type="password"
              placeholder="تکرار کلمه عبور"
              value={repeatPassword}
              onChange={(e) => setReapatPassword(e.target.value)}
            />
          </div>
          <div ref={repeatPasswordErrorText} className="input-error-text"></div>
          <div>
            <input type="submit" value="ثبت نام" className="submit-btn" />
          </div>
          <div style={{ marginTop: 35 }}>
            <span>
              حساب کاربری دارید ؟
              <Link
                to="/login"
                style={{ color: "#ff5600", textDecoration: "underline" }}
              >
                وارد شوید
              </Link>
            </span>
          </div>
          <div style={{ marginTop: 35 }}>
            <Link
              to="/"
              style={{ color: "#ff5600", textDecoration: "underline" }}
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
