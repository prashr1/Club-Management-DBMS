import React, { useEffect, useState } from 'react'
import ListUser from './ListUser'
import './User.css';
import { Link ,useNavigate} from "react-router-dom";

export default function User() {

  let [Users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  let [User, setUser] = useState(null)
  
  let userId='new'
  useEffect(() => {
    getUser()
}, [userId])

let getUser = async () => {
  if (userId === 'new') return
}

  let getUsers = async () => {
    let response = await fetch("/show_user")
    let data = await response.json()
    console.log('DATA:', data)
    setUsers(data)
  }

  const [style, setStyle] = useState("cont"); 
  
  const changeStyle1 = () => { 
    console.log("you just clicked"); 
  
    setStyle("cont2"); 
  }; 
  const changeStyle2 = () => { 
    console.log("you just clicked"); 
  
    setStyle("cont"); 
  }; 
  const navigate = useNavigate();
  const handleSubmit3 = (event) => {
    event.preventDefault();
    console.log("New User: ", User )
    createUser()
    changeStyle2()
    navigate('/show_user')
  };

  let createUser = async () => {
    fetch("show_user/Create", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(User)
    })
}

  let style1 = {
    paddingTop: "5px"
  }
  let style2 = {
    fontSize: "15px"
  }
  let style3 = {
    width: "65%",
    top: "15px"
  }
  let style4 = {
    height: "220px"
  }
  let style5 = {
    marginTop: "5px"
  }
  let style6 = {
    width: "87%"
  }
  return (
    <div>
      {/* {% if messages %}
      {% for message in messages %}
        <div className="alert alert-{{ message.tags }} alert-dismissible fade show my-0" role="alert">
          <strong>{{ message }}</strong>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      {% endfor %}
      {% endif %} */}
      <center>
        <div className="main1">
          <h1 style={style5}>User Table</h1>
          <hr />
          <Link className="button badge badge-primary rounded-pill d-inline" onClick={changeStyle1} style={{ fontSize: "15px", paddingTop: "5px", backgroundColor: "#1abfe46e" }} to="">Create New User</Link>
          <section className="pb-4" style={style1}>
            <div className="bg-white border rounded-5">
              <section className="w-100 p-4 table-responsive">
                <table className="table align-middle mb-0 bg-white text-center">
                  <thead className="bg-light">
                    <tr>
                      <th>User ID</th>
                      <th>User Name</th>
                      <th>Age</th>
                      <th>Contact</th>
                      <th>Address</th>
                      {/* <th>Action</th> */}
                      <th>Action</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    

                    {/* {% for result in data %}
                      <tr/>
                        <td>
                          <p className="fw-bold mb-1">{{result.u_id}}</p>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">{{result.u_name}}</p>
                        </td>
                        <td>
                          {{result.age}}
                        </td>
                        <td>{{result.contact}}</td>
                        <td>{{result.address}}</td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                              <Link to="show_userbookings/{{result.u_id}}">Events</Link>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                              <Link to="Edit/{{result.u_id}}">Edit</Link>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                              <Link to="#popup2">Delete</Link>
                          </button>
                        </td>
                        {% endfor %} */}
                  
                      {Users.map((user, index) => (
                        
                          <ListUser key={index} user={user} />
                        //   <h3> {user.u_name} </h3>
                        
                      ) ) }
                    </tbody>
                </table>
              </section>
              <div className="p-4 text-center border-top mobile-hidden">
                <span className="badge badge-primary rounded-pill d-inline" style={{ fontSize: "15px", paddingTop: "5px", backgroundColor: "#1abfe46e" }}><Link to="/">Main Page</Link></span>
              </div>


            </div>
          </section>
        </div>
        <div id="popup3" className={style}  style={{background: "rgba(0, 0, 0, 0.7)"}}>
                <div className="popup">
                    <Link className="close-btn  fas fa-times" onClick={changeStyle2} to="/show_user"></Link>
                    <div className="card-body mx-md-4" style={style3}>

                        <div className="text-center">
                            <h4 className="mt-1 mb-4 pb-1">User Data Insertion</h4>
                        </div>

                        <form 
                        onSubmit={handleSubmit3}
                        // action="/show_user"
                        >
                            {/* {% csrf_token %} */}
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                                </div>
                                <input type="text" className="inp" placeholder="User Name" name="Name" id="Name" style={style6} onChange={(event) =>
          setUser(User => ({ ...User, 'u_name': event.target.value }))}
        />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="integer" className="inp" placeholder="Age" id="Age" name="Age" style={style6} onChange={(event) =>
          setUser(User => ({ ...User, 'age': event.target.value }))
        } />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="integer" className="inp" placeholder="Contact" name="Contact" style={style6} id="Contact" onChange={(event) =>
          setUser(User => ({ ...User, 'contact': event.target.value }))
        } />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="varchar" className="inp" placeholder="Address" name="Address" style={style6} id="Address" onChange={(event) =>
          setUser(User => ({ ...User, 'address': event.target.value }))
        } />
                            </div>

                            <div className="text-center pt-1 pb-1">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit" >Create User</button>
                                    
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <Link className="close-btn1" to="/show_user"  onClick={changeStyle1}>Return To Users Table</Link>
                            </div>

                        </form></div>
                </div>
            </div>
      </center>
    </div>
  )
}

