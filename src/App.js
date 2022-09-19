import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import index from "./pages";
import register from "./pages/register";
import Frame from "./components/Frame/index";
import { mainRoutes } from "./routes";

function App() {
  return (
    <Router>
      <Frame>
        {mainRoutes.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Frame>
    </Router>
  );
}

export default App;
