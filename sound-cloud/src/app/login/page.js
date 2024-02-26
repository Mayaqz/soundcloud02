
'use client';

import axios from "axios"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from 'next/link'


// const token = localStorage.getItem("token")
// axios.get("", {headers: { 'x-access-token':token }})

const Home = () => {
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:8000/login', {
        email: loginData.email,
        password: loginData.password,
      });

      if (data?.token) {
        localStorage.setItem("token", data.token);
        router.push("/");
      }
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login failed", error);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };
  return (
    <div className="bg-[#242526] flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="w-[540px] rounded-[9px] h-[600px] bg-[#121212] flex justify-center ">
        <div className="">
      <h2 className="text-[white] mt-[75px] font-bold text-[40px] ">Login to Spotify</h2>
      <div className="border-b-[1px] mt-[40px]  mb-[40px] border-[grey]"></div>
      <form>
        <div className="">
        <div class=" w-[100px] text-[13px] text-[white]">Username</div>
          <input
          className="bg-[black] border-[white] text-[#a6a6a6] w-[300px] h-[40px] "
            type="text"
            placeholder="Username"
            name=""
            onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
            required=""
          />
        </div>
        <br></br>
        <div className="">
        <div className="text-white text-[13px]  w-[100px]">Password</div>
          <input
          className="bg-[black] text-[#a6a6a6] w-[300px] h-[40px]"
            type="password"
            placeholder="Password"
            name=""
            onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
            required=""
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div onClick={handleLogin} className="w-[300px] h-[40px] mt-[30px]  bg-[#1BD760] flex items-center justify-center rounded-[20px]">
          Log in
        </div>
        <div className="border-b-[1px] mt-[50px] border-[grey]">

        </div>



        <div className="mt-[25px]" style={{ display: "", gap: "50px" }}>
          <div className="flex gap-[40px]">
          <div className="text-[grey] text-[14px]">Don't have an account?</div>
            <Link href="/signup">
              <p className="text-[14px] text-[white] border-b-[1px] border-[white]  hover:text-[#1BD760] hover:border-[#1BD760]" >Sign up for Spotify. </p>
            </Link>
          </div>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Home;