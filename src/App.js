import './style/App.scss';
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <div className="App">
      {isLoggedIn===false && <Login/>}
      {isLoggedIn===true && <h1>
        hello there
      </h1>}
      
    </div>
  );
}

export default App;
