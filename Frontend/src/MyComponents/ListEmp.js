import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './ListEmp.css';

export default function ListEmp({ emp }) {
    const [Name, setName] = useState(emp.e_name);
    const [Dept, setDept] = useState(emp.department);
    const [Contact, setContact] = useState(emp.e_contact);
    const [Join, setJoin] = useState(emp.join_date);
  
    
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      setName(Name);
      emp.e_name=Name
      setDept(Dept);
      emp.department=Dept
      setContact(Contact);
      emp.e_contact=Contact
      setJoin(Join);
      emp.join_date=Join
      updateEmp()
      changeStyle2()
    };
    const handleSubmit2 = (event) => {
        event.preventDefault();
        deleteEmp()
        changeStyle4()
        navigate('/show_emp')
      };

      let deleteEmp = async () => {
        fetch(`show_emp/Delete/${emp.e_id}`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
    }
  
    let updateEmp = async () => {
      fetch(`show_emp/Update/${emp.e_id}`, {
          method: "PUT",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(emp)
      })
  
  }

  const [style1, setStyle1] = useState("cont");
  const [style2, setStyle2] = useState("cont");

  const changeStyle1 = () => {
      console.log("you just clicked");

      setStyle1("cont2");
  };
  const changeStyle2 = () => {
      console.log("you just clicked");

      setStyle1("cont");
  };
  const changeStyle3 = () => {
      console.log("you just clicked");

      setStyle2("cont2");
  };
  const changeStyle4 = () => {
      console.log("you just clicked");

      setStyle2("cont");
  };
  let style3 = {
      width: "65%"
  }
  let style6 = {
      width: "87%"
    }


    return (
        <>
        <tr />
        <td>
            <p className="fw-bold mb-1">{emp.e_id}</p>
        </td><td>
            <p className="fw-normal mb-1">{emp.e_name}</p>
        </td><td>
            {emp.department}
        </td><td>{emp.e_contact}</td><td>{emp.join_date}</td><td>
            <button type="button" className="btn btn-link btn-sm btn-rounded">
                <Link onClick={changeStyle1} to="" > Update</Link>
            </button>
        </td><td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
                    <Link onClick={changeStyle3} to="">Delete</Link>
                </button>
        </td>
        <center>
        <div id="popup1" className={style1}  style={{background: "rgba(0, 0, 0, 0.7)"}}>
            <div className="popup">
                <Link className="close-btn  fas fa-times" onClick={changeStyle2} to="/show_emp"></Link>
                <div className="card-body mx-md-4" style={style3}>

                    <div className="text-center">
                        <h4 className="mt-1 mb-4 pb-1">Employee Data Updation</h4>
                    </div>

                    <form 
                    onSubmit={handleSubmit}
                    // action="/show_emp"
                    >
                        {/* {% csrf_token %} */}
                        <div className="input-group mb-2">
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                            </div>
                            <input type="text" className="inp" placeholder="Employee Name" name="Name" id="Name" value={Name} style={style6} onChange={(event) =>
      setName(event.target.value)
    } />
                        </div>

                        <div className="input-group mb-2">
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="integer" className="inp" placeholder="Department" id="Dept" name="Dept" style={style6} value={Dept} onChange={(event) =>
      setDept(event.target.value)
    } />
                        </div>

                        <div className="input-group mb-2">
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="integer" className="inp" placeholder="Contact" name="Contact" style={style6} id="Contact" value={Contact} onChange={(event) =>
      setContact(event.target.value)
    } />
                        </div>

                        <div className="input-group mb-2">
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="varchar" className="inp" placeholder="Join Date" name="Join" style={style6} id="Join" value={Join} onChange={(event) =>
      setJoin(event.target.value)
    } />
                        </div>

                        <div className="text-center pt-1 pb-1">
                            <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit" >Update Employee</button>
                                
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                            <Link className="close-btn1" to="/show_emp"  onClick={changeStyle2}>Return To Employees Table</Link>
                        </div>

                    </form></div>
            </div>
        </div>
        <div id="popup2" className={style2}  style={{background: "rgba(0, 0, 0, 0.7)"}}>
          <div className="popup">
            <Link className="close-btn  fas fa-times" onClick={changeStyle4} to="/show_emp"></Link>
            <div className="card-body mx-md-4" style={style3}>

              <div className="text-center">
                <h4 className="mt-1 mb-4 pb-1">Deletion Confirmation</h4>
              </div>

              <form
              onSubmit={handleSubmit2}
               action="/show_emp"
               >
                {/* {% csrf_token %} */}

                <div className="text-center pt-1 pb-1">
                  <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit">Delete Emp</button>
                  {/* <Link className="close-btn1" to="/show_emp"  onClick={handleSubmit2}>Delete Emp</Link> */}
                </div>

              </form></div>
          </div>
        </div>
        </center>
    </>
            )
}
