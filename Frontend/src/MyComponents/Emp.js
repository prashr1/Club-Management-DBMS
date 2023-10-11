import React, { useEffect, useState } from 'react'
import ListEmp from './ListEmp'
import './Emp.css';
import { Link ,useNavigate} from "react-router-dom";

export default function Emp() {
  let [Emps, setEmps] = useState([])

  useEffect(() => {
    getEmps()
  }, [])

  let getEmps = async () => {
    let response = await fetch("show_emp")
    let data = await response.json()
    console.log('DATA:', data)
    setEmps(data)
  }
  const navigate = useNavigate();
  let [Emp, setEmp] = useState(null)
  
  let empId='new'
  useEffect(() => {
    getEmp()
}, [empId])

let getEmp = async () => {
  if (empId === 'new') return
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

const handleSubmit3 = (event) => {
  event.preventDefault();
  console.log("New User: ", Emp )
  createEmp()
  changeStyle2()
  navigate('/show_emp')
};

let createEmp = async () => {
  fetch(`show_emp/Create`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(Emp)
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
          <h1 style={style5}>Employee Table</h1>
          <hr />
          <Link className="button badge badge-primary rounded-pill d-inline" onClick={changeStyle1} style={{fontSize: "15px",paddingTop: "5px",backgroundColor:"#1abfe46e"}} to="">Create New Employee</Link>
          <section className="pb-4" style={style1}>
            <div className="bg-white border rounded-5">
              <section className="w-100 p-4 table-responsive">
                <table className="table align-middle mb-0 bg-white">
                  <thead className="bg-light">
                    <tr>
                      <th>Employee ID</th>
                      <th>Employee Name</th>
                      <th>Department</th>
                      <th>Contact</th>
                      <th>Join Date</th>
                      <th>Action</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {% for result in data %}
                      <tr>
                        <td>
                          <p className="fw-bold mb-1">{{result.e_id}}</p>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">{{result.e_name}}</p>
                        </td>
                        <td>
                          {{result.department}}
                        </td>
                        <td>{{result.e_contact}}</td>
                        <td>{{result.join_date}}</td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                              <Link to="Edit/{{result.e_id}}">Edit</Link>
                          </button>                        
                        </td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                              <Link to="Delete/{{result.e_id}}" onclick="return confirm('Are You Sure To Delete The Record?')">Delete</Link>
                          </button>                        
                        </td>
                        {% endfor %} */}
                         {Emps.map((emp, index) => (
                        
                        <ListEmp key={index} emp={emp} />
                        // <h3> {emp.u_name} </h3>
                    ))}
                  </tbody>
                </table>
              </section>

              <div className="p-4 text-center border-top mobile-hidden">
                <span className="badge badge-primary rounded-pill d-inline" style={{fontSize: "15px",backgroundColor:"#1abfe46e"}}><Link to="/">Main Page</Link></span>
              </div>

            </div>
          </section>
        </div>
        <div id="popup3" className={style}  style={{background: "rgba(0, 0, 0, 0.7)"}}>
                <div className="popup">
                    <Link className="close-btn  fas fa-times" onClick={changeStyle2} to="/show_emp"></Link>
                    <div className="card-body mx-md-4" style={style3}>

                        <div className="text-center">
                            <h4 className="mt-1 mb-4 pb-1">Employee Data Insertion</h4>
                        </div>

                        <form 
                        onSubmit={handleSubmit3}
                        // action="/show_emp"
                        >
                            {/* {% csrf_token %} */}
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                                </div>
                                <input type="text" className="inp" placeholder="Employee Name" name="e_name" id="e_name" style={style6} onChange={(event) =>
          setEmp(Emp => ({ ...Emp, 'e_name': event.target.value }))}
        />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="integer" className="inp" placeholder="Department" id="department" name="department" style={style6} onChange={(event) =>
          setEmp(Emp => ({ ...Emp, 'department': event.target.value }))
        } />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="integer" className="inp" placeholder="Contact" name="e_contact" style={style6} id="e_contact" onChange={(event) =>
          setEmp(Emp => ({ ...Emp, 'e_contact': event.target.value }))
        } />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="varchar" className="inp" placeholder="Join Date" name="join_date" style={style6} id="join_date" onChange={(event) =>
          setEmp(Emp => ({ ...Emp, 'join_date': event.target.value }))
        } />
                            </div>

                            <div className="text-center pt-1 pb-1">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit" >Create Employee</button>
                                    
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <Link className="close-btn1" to="/show_emp"  onClick={changeStyle1}>Return To Employees Table</Link>
                            </div>

                        </form></div>
                </div>
            </div>
        


      </center>
    </div>
  )
}
