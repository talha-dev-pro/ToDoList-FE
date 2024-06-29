import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    const data = await axios.get(
      "http://localhost:3000/users/getAllUsers",
      {
        params: { pageNo: 1, limit: 5 },
      },
      {
        withCredentials: true,
      }
    );
    console.log(data);
  };

  useEffect(() => {
    void getAllUsers();
  }, []);

  return (
    <>
      <h1>allUsers</h1>
    </>
  );
};

export default Home;
