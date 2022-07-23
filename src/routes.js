import Products from "./Products/Products";
import Home from "./Home/Home";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";
import ContactUs from "./ContactUs/ContactUs";
import Description from "./Description/Description";
let routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:pID", element: <Description /> },
  { path: "/register", element: <RegisterForm /> },
  { path: "/login", element: <LoginForm /> },
  { path: "/contact-us", element: <ContactUs /> },
];

export default routes;
