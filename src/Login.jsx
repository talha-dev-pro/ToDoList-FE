import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

const Login = ({ updateLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/auth/login",
      {
        userName,
        password,
      },
      {
        withCredentials: true,
      }
    );

    if (data.error) {
      return alert(data.error.message);
    }
    return alert(data.response.message);
  };

  return (
    <div className="h-3/5 flex gap-y-8 justify-center items-center flex-col w-1/4 bg-white rounded-lg">
      <h2 className=" font-semibold text-2xl">{"Login Form"}</h2>
      <form className=" w-full text-sm flex flex-col">
        <label className="px-2 py-2 rounded-lg font-semibold">
          {"User Name:"}
        </label>
        <input
          type="text"
          placeholder="Enter User Name"
          className="border border-gray-300 px-2 py-2 rounded-lg bg-gray-200 mx-2"
          required
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <label className="px-2 py-2 rounded-lg font-semibold">
          {"Password:"}
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="border border-gray-300 px-2 py-2 rounded-lg bg-gray-200 mx-2"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <p className="px-2">
          {"Don't have an Account? "}
          <span
            className=" hover:underline hover:text-blue-400 cursor-pointer"
            onClick={() => {
              updateLogin(false);
            }}
          >
            {"SignUp"}
          </span>
        </p>
      </form>
      <button
        onClick={login}
        className=" bg-blue-500 w-5/6 py-2 rounded-md text-white disabled:bg-gray-300"
        disabled={!userName || !password}
      >
        {"Login"}
      </button>
    </div>
  );
};

Login.propTypes = {
  updateLogin: PropTypes.func,
};

export default Login;
