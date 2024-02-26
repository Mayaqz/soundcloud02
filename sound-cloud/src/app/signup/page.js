
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
    };
   
    }
    return (
 
      <div class="flex    justify-center items-center flex-col h-[100vh]"> 
      <div className="  justify-center items-center flex-col shadow-white ">
      <img src="./whitespo.png" className="h-10 flex justify-start mr-[2000px]  mt-[-200px]"/>

     <div className="flex justify-center mt-[200px]">

        <h1 class="font-bold text-white text-[40px]" >Sign Up to start  
        <br></br>
        <span className="text-[#1ed760] ">
          listening
          </span></h1>
</div>
        <form>
          <div  className="flex justify-center items-center flex-col mt-[30px]">
            <h1 className="text-white  font-bold font-[30px]">Username</h1>
            <div className="h-[48px] w-[324px] "
            >
            <input className=" text-black w-[324px] h-[48px] rounded-lg    "
              onChange={(e) => setSignupData((prev) => ({ ...prev, name: e.target.value }))}

              placeholder="Username"
              />

            </div>
          </div>
          <br></br>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-black font-bold font-[30px]">  Email</h1>
            <input className="text-black border-slate-300 w-[324px] h-[48px] rounded-lg"  

            placeholder="Email"
              onChange={(e) => setSignupData((prev) => ({ ...prev, email: e.target.value }))}
              />
          </div>
          <br></br>
          <div className="flex flex-col items-center">
            <h1 className="text-black font-bold font-[30px] flex "  >Password</h1>
            <input
            className="border-slate-300  text-black w-[324px] h-[48px] rounded-lg" 
            type="password"

            placeholder="Password"
            onChange={(e) => setSignupData((prev) => ({ ...prev, password: e.target.value }))}
            />
            {error && <p style={{ color: "red" }}>{error}</p>} 
          </div>
          {/* <div style={{ display: "flex" , marginTop:"30px"}}> */}
            <div className="flex justify-center mt-6">
              <a onClick={handleSignup} >
                  
                  
                  <button style={{height:"50px", width:"340px", color:"black", borderRadius:"30px", backgroundColor:"#1ed760", fontWeight:"bolder"}}>Next </button>
                  
                  
              </a>
            </div>
            <div className="flex items-center gap-4 justify-center mt-6">

            <div className="  h-[1px] w-[200px] bg-white">
            </div>
            <h3 className="text-white">or</h3>
            <div className="h-[1px] w-[200px] bg-white">
            </div>
            </div>
            <div className="flex items-center justify-center mt-6">


              <span className="text-white  ">Already have account? <span>
                
                
              <Link href="/login" className="underline  text-[#1ed760]">
                {/* <button style={{height:"40px", width:"190px", color:"black", borderRadius:"30px", backgroundColor:"#1ed760"}}>Login </button> */}
                Log in here
              </Link>
                </span></span>
            </div>
          {/* </div> */}
        </form>
            </div>
      </div>
    );
  
}
  
  export default Signup;