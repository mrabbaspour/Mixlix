import "./Header.css";
import { useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import {
  AiOutlinePhone,
  AiOutlineGoogle,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp, MdClose } from "react-icons/md";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
export default function Header() {
  //
  // Refs :

  const darkBody = useRef();
  const sidebar = useRef();
  const navbar = useRef();
  const scrollTopBtn = useRef();
  const mobileMenu = useRef();
  const mobileMenuToggleBtn = useRef();
  const searchBox = useRef();

  // functions :

  const openSidebarMenu = () => {
    darkBody.current.classList.add("active");
    sidebar.current.classList.add("active");
  };

  const closeSidebarMenu = () => {
    darkBody.current.classList.remove("active");
    sidebar.current.classList.remove("active");
  };
  const toggleMobileMenu = () => {
    mobileMenu.current.classList.toggle("active");
    mobileMenuToggleBtn.current.classList.toggle("open");
  };
  const toggleSearchBox = () => {
    searchBox.current.classList.toggle("active");
  };

  window.onscroll = () => {
    if (window.scrollY > 180) {
      navbar.current.classList.add("stickyNavbar");
      scrollTopBtn.current.classList.add("show");
    } else {
      navbar.current.classList.remove("stickyNavbar");
      scrollTopBtn.current.classList.remove("show");
    }
  };

  // JSX :

  return (
    <>
      <div className="container" id="header">
        <nav className="navbar" ref={navbar}>
          <div className="navbar-logo">
            <Link to="/">
              <img src="../images/navbar-logo.png" alt="mixlix-logo" />
            </Link>
            <div
              className="mobile-menu-toggle"
              ref={mobileMenuToggleBtn}
              onClick={toggleMobileMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <ul className="navbar-items mobile-menu" ref={mobileMenu}>
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                صفحه اصلی
              </Link>
            </li>
            <span
              className="nav-items-line"
              style={{ color: "red", fontSize: 25 }}
            >
              |
            </span>
            <li>
              <NavHashLink to="/#features" onClick={toggleMobileMenu}>
                ویژگی ها
              </NavHashLink>
            </li>
            <span
              className="nav-items-line"
              style={{ color: "red", fontSize: 25 }}
            >
              |
            </span>
            <li>
              <NavHashLink to="/#choose" onClick={toggleMobileMenu}>
                چرا ما ؟
              </NavHashLink>
            </li>
            <span
              className="nav-items-line"
              style={{ color: "red", fontSize: 25 }}
            >
              |
            </span>
            <li>
              <NavHashLink to="/#blog" onClick={toggleMobileMenu}>
                مقالات
              </NavHashLink>
            </li>
            <span
              className="nav-items-line"
              style={{ color: "red", fontSize: 25 }}
            >
              |
            </span>
            <li>
              <NavHashLink to="/#questions" onClick={toggleMobileMenu}>
                سوالات متداول
              </NavHashLink>
            </li>
            <span
              className="nav-items-line"
              style={{ color: "red", fontSize: 25 }}
            >
              |
            </span>
            <li>
              <NavHashLink to="/contact-us#header" onClick={toggleMobileMenu}>
                تماس با ما
              </NavHashLink>
            </li>
            <span
              className="nav-items-line"
              style={{ color: "red", fontSize: 25 }}
            >
              |
            </span>
            <li>
              <NavHashLink to="/products#header" onClick={toggleMobileMenu}>
                فروشگاه
              </NavHashLink>
            </li>
            <span
              className="nav-items-line"
              style={{ color: "red", fontSize: 25 }}
            >
              |
            </span>
            <li>
              <Link to="/login" onClick={toggleMobileMenu}>
                ورود
              </Link>
            </li>
            <span
              className="nav-items-line"
              style={{ color: "red", fontSize: 25 }}
            >
              |
            </span>
            <li>
              <Link to="/register" onClick={toggleMobileMenu}>
                ثبت نام
              </Link>
            </li>
            <div className="mobile-menu-social">
              <a href="#">
                <i>
                  <FaFacebookF />
                </i>
              </a>
              <a href="#">
                <i>
                  <AiOutlineTwitter />
                </i>
              </a>
              <a href="#">
                <i>
                  <AiFillYoutube />
                </i>
              </a>
              <a href="#">
                <i>
                  <FaInstagram />
                </i>
              </a>
              <a href="#">
                <i>
                  <FaLinkedinIn />
                </i>
              </a>
              <a href="#">
                <i>
                  <AiOutlineGoogle />
                </i>
              </a>
            </div>
          </ul>
          <ul className="navbar-icons">
            <i id="shopping-cart-icon">
              <FiShoppingCart />
            </i>
            <i id="search-icon" onClick={toggleSearchBox}>
              <BiSearchAlt />
            </i>
            <div className="search-box" ref={searchBox}>
              <form>
                <div>
                  <i id="close-search-icon" onClick={toggleSearchBox}>
                    <MdClose />
                  </i>
                </div>
                <div>
                  <input type="text" placeholder="به دنبال چه چیزی هستید ؟" />
                </div>
                <div>
                  <input type="submit" value="جستجو" />
                </div>
              </form>
            </div>
            <i id="sidebar-menu-icon" onClick={openSidebarMenu}>
              <CgMenuGridO />
            </i>
          </ul>
        </nav>
      </div>

      <a type="button" className="scroll-top" ref={scrollTopBtn} href="#header">
        <i>
          <MdOutlineKeyboardArrowUp />
        </i>
      </a>

      <div
        className="dark-body"
        ref={darkBody}
        onClick={closeSidebarMenu}
      ></div>

      <div className="sidebar-menu" ref={sidebar}>
        <div className="sidebar-logo">
          <img src="images/navbar-logo.png" alt="mixlix-logo" />
        </div>
        <div className="note">به میکس لیکس خوش آمدید .</div>
        <div className="contact-us">
          <h6>تماس با ما</h6>
          <ul>
            <li>
              <a href="#">
                <i>
                  <AiOutlinePhone />
                </i>
                ۰۲۶۱۲۳۴۵۶۷
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <HiOutlineMail />
                </i>
                site@site.com
              </a>
            </li>
            <li>
              <a href="#">
                <i>
                  <GoLocation />
                </i>
                کرج، البرز
              </a>
            </li>
          </ul>
        </div>
        <div className="news-share">
          <h6>اخبار و مقالات</h6>
          <p>ایمیل تان را برای دریافت آخرین اخبار وارد کنید</p>
          <form>
            <div>
              <input type="email" placeholder="ایمیل شما ..." />
            </div>
            <div>
              <button type="submit">مشترک شوید</button>
            </div>
          </form>
        </div>
        <div className="social-contact">
          <a href="#">
            <i>
              <FaFacebookF />
            </i>
          </a>
          <a href="#">
            <i>
              <AiOutlineTwitter />
            </i>
          </a>
          <a href="#">
            <i>
              <AiFillYoutube />
            </i>
          </a>
          <a href="#">
            <i>
              <FaInstagram />
            </i>
          </a>
          <a href="#">
            <i>
              <FaLinkedinIn />
            </i>
          </a>
          <a href="#">
            <i>
              <AiOutlineGoogle />
            </i>
          </a>
        </div>
      </div>
    </>
  );
}
