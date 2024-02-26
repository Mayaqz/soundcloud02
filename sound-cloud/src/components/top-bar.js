const Topbar = () =>{
    return(
        <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button" className="fa fas fa-chevron-left"></button>
          <button type="button" className="fa fas fa-chevron-right"></button>
        </div>
    
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
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
          <a href="/login">

          <button type="button">Log In</button>
          </a>
        </div>
      </div>
    )
}
export default Topbar