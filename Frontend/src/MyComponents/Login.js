import React, { useEffect, useState } from 'react'
import './Login.css';
import { Link,useNavigate } from "react-router-dom";

export default function Login({change}) {
  // console.log(props)
  let [Club, setClub] = useState(null)
  const navigate = useNavigate();
  const submitLogin = (event) =>{
    event.preventDefault();
  console.log("logged in Club: ",Club)
  // client.post(
  //   "/register",
  //   {
  //     email: email,
  //     username: username,
  //     password: password
  //   }
  // ).then(function(res) {
  //   });
  loginClub()
  change()
  navigate('');
  }

  let loginClub = async () => {
    fetch("login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Club)
    })
  }

  let style1={
    backgroundColor: "#eee",
    height: "90vh",
    overflow: "hidden",
    /* background: linear-gradient(345deg, #75d763, #6473d8, #b7f6ed); */

    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "100% 100%",
    backgroundColor: "#eee",
    backgroundImage: 'url("img/login_background_background.jpg")'
  }
  let style2={
    backgroundColor: "#e2e9f0",
    borderRadius: "35px"
  }
  let style3={
    fontWeight: "bolder",
    fontSize: "30px"
  }
  let style4={
    fontWeight: "bold"
  }
  let style5={
    fontSize: "17px",
    height: "30px",
    paddingBottom: "28px",
    paddingTop: "3px"
  }
  let style6={
    fontWeight: "bold",
    color: "#1d8ead",
    backgroundColor: "transparent"
  }
  let style7={
    width:"40%"
  }
  return (
    <div className="text-center">
      <div className="h-90vh gradient-form login_back" style={style1}>
    <div className="container py-5 my-4" style={style7}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card text-black" style={style2}>
            <div className="card-body p-md-4 mx-md-5 my-3" style={{width:"80%"}}>

                <div className="text-center">
                  <h4 className="mt-1 mb-5 pb-1" style={style3}>Club Management App</h4>
                </div>

                <form 
                onSubmit={event => submitLogin(event)}
                // method="POST" 
                // action="/login"
                >
                  {/* {% csrf_token %} */}
                  <p style={style4}>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example11" style={style4}>Club Email Id</label>
                    <input type="text" name="username" id="form2Example11" className="form-control" onChange={(event) =>
          setClub(Club => ({ ...Club, 'club_email': event.target.value }))}
                      placeholder="Email Address" />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlfor="form2Example22" style={style4}>Password</label>
                    <input type="password" name="password" id="form2Example22" className="form-control" onChange={(event) =>
          setClub(Club => ({ ...Club, 'password': event.target.value }))}/>
                  </div>

                  <div className="text-center pt-1 mb-3 pb-1" >
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit" style={style5}>Log In</button>
                  </div>

                  {/* {% for message in messages %}
                      <p id="messages"><b>{{message}}</b></p>
                  {% endfor %} */}

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-1" style={style4}>Don't have an account?</p>
                    <Link to="/register" className="create" style={style6}>Create New</Link>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
