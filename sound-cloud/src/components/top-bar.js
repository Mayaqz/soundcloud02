
"use client";
import Link from "next/link";

const Topbar = () =>{
    return(
        <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button" className="fa fas fa-chevron-left"></button>
          <button type="button" className="fa fas fa-chevron-right"></button>
        </div>
        <div className="text-[black] text-bold text-[17px] bg-[#1BD760] justify-center items-center w-[140px] rounded-[30px] h-[50px] ">Upload your own.</div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li className="divider">|</li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
          <Link href={"/login"}>
          <button  type="button">Log In</button>
          </Link>
        </div>
      </div>
    )
}
export default Topbar