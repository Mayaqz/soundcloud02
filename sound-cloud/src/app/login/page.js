
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
    <div className="">
      <h2>Login</h2>
      <form>
        <div>
          <input
         
            type="text"
            name=""
            onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
            required=""
          />
          <label>Username</label>
        </div>
        <br></br>
        <div >
          <input
            type="password"
            name=""
            onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
            required=""
          />
          <label>Password</label>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div style={{ display: "flex", gap: "50px" }}>
          <div>
            <a onClick={handleLogin}>
              submit
            </a>
          </div>
          <div>
            <Link href="/signup">
              <p style={{ color: "grey" }}>Sign up </p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
  }

export default Home;