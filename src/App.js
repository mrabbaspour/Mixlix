import "./reset.css";
import "./font.css";
import "./RWD.css";
import "./App.css";

import routes from "./routes";
import { useRoutes } from "react-router-dom";

export default function App() {
  // app router :
  let router = useRoutes(routes);

  return <>{router}</>;
}
