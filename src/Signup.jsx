import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

const Signup = ({ updateLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const signUp = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/users/createUser",
      {
        userName,
        password,
        confirmPassword,
        role,
      },
      { withCredentials: true }
    );
    console.log(data);
    if (data.error) {
      return alert(data.error);
    }
    return alert("User Created successfully");
  };

  return (
    <div className="h-3/4 flex gap-y-8 justify-center items-center flex-col w-1/4 bg-white rounded-lg">
      <h2 className=" font-semibold text-2xl">{"SignUp Form"}</h2>
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
        <label className="px-2 py-2 rounded-lg font-semibold">
          {"Confirm Password:"}
        </label>
        <input
          type="password"
          placeholder="Confirm password"
          className="border border-gray-300 px-2 py-2 rounded-lg bg-gray-200 mx-2"
          required
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        ></input>
        <label className="px-2 py-2 rounded-lg font-semibold">
          {"Your role:"}
        </label>
        <input
          type="text"
          placeholder="admin/user"
          className="border border-gray-300 px-2 py-2 rounded-lg bg-gray-200 mx-2"
          required
          onChange={(e) => {
            setRole(e.target.value);
          }}
        ></input>
        <p className="px-2">
          {"Already Have an Account? "}
          <span
            className=" hover:underline hover:text-blue-400 cursor-pointer"
            onClick={() => {
              updateLogin(true);
            }}
          >
            {"Login"}
          </span>
        </p>
      </form>
      <button
        className=" bg-blue-500 w-5/6 py-2 rounded-md text-white disabled:bg-gray-300"
        onClick={signUp}
        disabled={!userName || !password || !confirmPassword || !role}
      >
        {"SignUp"}
      </button>
    </div>
  );
};

Signup.propTypes = {
  updateLogin: PropTypes.func,
};

export default Signup;
