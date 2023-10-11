import React from 'react'
import { Link ,useNavigate } from "react-router-dom";

export default function Header({change}) {
  let headerStyle1={
    background: "#b7d2e7"
  }
  let headerStyle2={
    fontSize: "17px",
    paddingRight: "7px"
  }
  const navigate = useNavigate(); 
  const submitLogout=(event) =>{
    event.preventDefault();
    event.preventDefault();
  console.log("Logged out")
  // client.post(
  //   "/register",
  //   {
  //     email: email,
  //     username: username,
  //     password: password
  //   }
  // ).then(function(res) {
  //   });
    logoutClub()
    change()
    navigate('/login')
  }

  let logoutClub = async () => {
    fetch("logout", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={headerStyle1}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Club Management System</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Data
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/show_user">Users Section</Link></li>
                  <li><Link className="dropdown-item" to="/show_emp">Employee Section</Link></li>
                  <li><Link className="dropdown-item" to="/show_event">Events Section</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
            </ul>
            {/* <p style="padding: 8px; margin: 0px;"><b> Welcome {{ request.user }} </b></p> */}
            <Link to="/register" style={headerStyle2} onClick={event => submitLogout(event)}>Logout</Link>
          </div>
        </div>
      </nav>
      {/* {props.searchBar ?
            <form classNameName="d-flex" role="search">
              <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button classNameName="btn btn-outline-success" type="submit">Search</button>
            </form> : ""} */}
    </div>
  )
}