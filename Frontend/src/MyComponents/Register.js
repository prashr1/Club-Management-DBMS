import React, { useEffect, useState } from 'react'
import './Register.css';
import { Link,useNavigate } from "react-router-dom";

export default function Register() {

  let [Club, setClub] = useState(null)
  const navigate = useNavigate();

const handleSubmit3=(event) =>{
  event.preventDefault();
  console.log("New Club: ",Club)
  // client.post(
  //   "/register",
  //   {
  //     email: email,
  //     username: username,
  //     password: password
  //   }
  // ).then(function(res) {
  //   });
    createClub()
    navigate('/login');
}

let createClub = async () => {
  fetch("register", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(Club)
  })
}


  let style1={
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
    fontWeight: "bolder",
    fontSize: "25px"
  }
  let style3={
    fontWeight: "bold"
  }
  let style4={
    backgroundImage: 'url("/static/img/login_section_background.jpg")'
  }
  let style5={
    fontSize: "17px",   
    height: "30px",
    paddingBottom: "28px",
    paddingTop: "3px"
  }
  let style6={
    maxWidth: "1140px"
  }
  let style7={
    color: "#007bff",
    backgroundColor: "transparent"
  }
  let style8={ 
    width: "15%",
    borderBottomRightRadius: "0px",
    borderTopRightRadius: "0px"

  }
  let style9={
    borderBottomLeftRadius: "0px",
    borderTopLeftRadius: "0px"

  }
  let style10={
    width: "100%"

  }
  return (
    <div className="text-center">
      <section className="gradient-form" style={style1}>
        <div className="container py-5 mb-4" style={style6}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="regi rounded-3 text-black">
                <div className="row g-0">
                  <div className="card col-lg-6" style={style4}>
                    <div className="card-body p-md-5 mx-md-4" style={{width:"85%",top:"0%"}}>

                      <div className="text-center">
                          <h4 className="mt-1 mb-5 pb-1" style={style2}>Club Management App</h4>
                      </div>
                      <form 
                      onSubmit={event => handleSubmit3(event)}
                      // method="POST"
                      >
                        {/* {% csrf_token %} */}
                        <p style={style3}> Please Register your Club</p>

                        <div className="input-group mb-2">
                          <div className="input-group-append" style={style10}>
                            <span className="input-group-text form-control" style={style8}><i className="fas fa-user"></i></span>
                            {/* <input type="text" name="username" id="form2Example11" className="form-control"
                      placeholder="Club Name" /> */}
                      <input type="text" className="form-control" style={style9} placeholder="Club Name" name="ClubName" id="ClubName" onChange={(event) =>
          setClub(Club => ({ ...Club, 'club_name': event.target.value }))}
          />
                          </div>
                          {/* {{ form.username }} */}
                        </div>

                        <div className="input-group mb-2">
                          <div className="input-group-append" style={style10}>
                            <span className="input-group-text form-control" style={style8}><i className="fas fa-user"></i></span>
                            {/* <input type="text" name="username" id="form2Example11" className="form-control"
                      placeholder="City" /> */}
                      <input type="text" className="inp form-control" style={style9} placeholder="City" name="City" id="City" onChange={(event) =>
          setClub(Club => ({ ...Club, 'city': event.target.value }))}
          />
                          </div>
                          {/* {{ form.city }} */}
                        </div>

                        <div className="input-group mb-2">
                          <div className="input-group-append" style={style10}>
                            <span className="input-group-text" style={style8}><i className="fas fa-envelope-square"></i></span>
                            {/* <input type="text" name="username" id="form2Example11" className="form-control"
                      placeholder="Email Address" /> */}
                      <input type="email" className="inp form-control" style={style9} placeholder="Email Address" name="EmailAddress" id="Email Address" onChange={(event) =>
          setClub(Club => ({ ...Club, 'club_email': event.target.value }))}
          />
                          </div>
                          {/* {{ form.email }} */}
                        </div>

                        <div className="input-group mb-2">
                          <div className="input-group-append" style={style10}>
                            <span className="input-group-text" style={style8}><i className="fas fa-key"></i></span>
                            {/* <input type="text" name="username" id="form2Example11" className="form-control"
                      placeholder="Enter Password" /> */}
                      <input type="text" className="inp form-control" style={style9} placeholder="Enter Password" name="Password" id="Password" onChange={(event) =>
          setClub(Club => ({ ...Club, 'password': event.target.value }))}
          />
                          </div>
                          {/* {{ form.password1 }} */}
                        </div>

                        {/* <div className="input-group mb-2">
                          <div className="input-group-append" style={style10}>
                            <span className="input-group-text" style={style8}><i className="fas fa-key"></i></span> */}
                            {/* <input type="text" name="username" id="form2Example11" className="form-control"
                      placeholder="Re-enter Password" /> */}
                      {/* <input type="text" className="inp form-control" style={style9} placeholder="Re-enter Password" name="City" id="City" onChange={(event) =>
          setClub(Club => ({ ...Club, 'password2': event.target.value }))}
          />
                          </div> */}
                          {/* {{ form.password2 }} */}
                        {/* </div> */}

                        <div className="text-center pt-1 mb-3 pb-1" >
                          <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit" style={style5}>Register
                            Club</button>
                        </div>

                        {/* {{ forms.errors }} */}
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-1" style={style3}>Already have an account?</p>
                          <Link to="/login" style={style7}>Login</Link>
                        </div>
                        </form>
                    </div>
                  </div>
                  {/* <script>
                    var form_fields = document.getElementsByTagName('input')
                    form_fields[1].placeholder = 'Club Name';
                    form_fields[2].placeholder = 'City';
                    form_fields[3].placeholder = 'Email';
                    form_fields[4].placeholder = 'Enter password';
                    form_fields[5].placeholder = 'Re-enter Password';


                    for (var field in form_fields) {
                      form_fields[field].classNameName += ' form-control'
                    }
                  </script> */}
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white py-4 p-md-4 mx-md-4">
                      <h4 className="mb-4">About Us</h4>
                      <p className="small mb-5">This is a club management database made by our team. This a mere prototype for a
                        real-life application, we have included limited clubs and limited entities . This database includes
                        basic day-to-day activities carried out in a typical club like booking events, payments to the
                        employees, maintaining data of the users and many like that.
                        Hope you like it!!!</p>
                      <h4 className="mb-4">What We Do</h4>
                      <p className="small mb-0">This database is expected to address all type of users ageing from 18 to 75, all
                        the information of a particular event, booking for it and the cost of tickets will be transparent.
                        This database essentially was made to put together all the information of multiple clubs on a single
                        platform and make it easier for the employees, users and database admins.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
