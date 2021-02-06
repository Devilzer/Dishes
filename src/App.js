import './style/App.scss';
import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import "../node_modules/noty/lib/noty.css";
import "../node_modules/noty/lib/themes/nest.css";

function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <div className="App">
      {isLoggedIn===false && <Login/>}
      {isLoggedIn===true && <Home/>}
    </div>
  );
}

export default App;
