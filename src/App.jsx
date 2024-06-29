import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Components/Home";

function App() {
  const [login, setLogin] = useState(true);
  const updateLogin = (newState) => {
    setLogin(newState);
  };
  return (
    <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
      {login ? (
        <Login updateLogin={updateLogin} />
      ) : (
        <Signup updateLogin={updateLogin} />
      )}
      {/* {login && <Login />}
      {!login && <Signup />} */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
