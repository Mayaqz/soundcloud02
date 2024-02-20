
'use client';

import axios from "axios"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from 'next/link'

const Signup = () => {
    const [signupData, setSignupData] = useState({});
    const [error, setError] = useState(null);
    const router = useRouter();
  
    const handleSignup = async (e) => {
   
  
      try {
        const { data } = await axios.post("http://localhost:8000/user", {
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
        });
  
        if (data?.user) {
          localStorage.setItem("uid", data.user.id);
          router.push('/login');
        }
      } catch (error) {
        setError("Signup failed. Please check your inputs."); 
        console.error("Signup failed", error);
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    };
  
    return (
      <div>
        <h2>SignUp</h2>
        <form>
          <div >
            <input
              onChange={(e) => setSignupData((prev) => ({ ...prev, name: e.target.value }))}
            />
            <label>Username</label>
          </div>
          <br></br>
          <div>
            <input
              onChange={(e) => setSignupData((prev) => ({ ...prev, email: e.target.value }))}
            />
            <label>Email</label>
          </div>
          <br></br>
          <div >
            <input
              type="password"
              onChange={(e) => setSignupData((prev) => ({ ...prev, password: e.target.value }))}
            />
            <label>Password</label>
            {error && <p style={{ color: "red" }}>{error}</p>} 
          </div>
          <div style={{ display: "flex", gap: "50px" }}>
            <div>
              <a onClick={handleSignup}>
              
                submit
              </a>
            </div>
            <div>
              <Link href="/login">
                <p style={{ color: "grey" }}>Login </p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default Signup;