import React, { useEffect, useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import './ListUser.css';

export default function ListUser( {user} ) {

    const [Name, setName] = useState(user.u_name);
    const [Age, setAge] = useState(user.age);
    const [Contact, setContact] = useState(user.contact);
    const [Address, setAddress] = useState(user.address);
    

  const handleSubmit1 = (event) => {
    event.preventDefault();
    setName(Name);
    user.u_name=Name
    setAge(Age);
    user.age=Age
    setContact(Contact);
    user.contact=Contact
    setAddress(Address);
    user.address=Address
    updateUser()
    changeStyle2()
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
    deleteUser()
    changeStyle4()
    navigate('/show_user')
  };
  const navigate = useNavigate();
  let updateUser = async () => {
    fetch(`show_user/Update/${user.u_id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

}

let deleteUser = async () => {
    fetch(`show_user/Delete/${user.u_id}`, {
        method: 'DELETE',
        'headers': {
            'Content-Type': 'application/json'
        }
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
        width: "65%",
        top: "0%"
    }
    let style6 = {
        width: "87%"
      }
    return (
        <>
            <tr />
            <td>
                <p className="fw-bold mb-1">{user.u_id}</p>
            </td><td>
                <p className="fw-normal mb-1">{user.u_name}</p>
            </td><td>
                {user.age}
            </td><td>{user.contact}</td><td>{user.address}</td>
            {/* <td>
                <button type="button" className="btn btn-link btn-sm btn-rounded">
                    <Link to={`/show_user/show_userbookings/${user.u_id}`}>Events</Link>
                </button>
            </td> */}
            <td>
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
                    <Link className="close-btn  fas fa-times" onClick={changeStyle2} to="/show_user"></Link>
                    <div className="card-body mx-md-4" style={style3}>

                        <div className="text-center">
                            <h4 className="mt-1 mb-4 pb-1">User Data Updation</h4>
                        </div>

                        <form 
                        onSubmit={handleSubmit1}
                        // action="/show_user"
                        >
                            {/* {% csrf_token %} */}
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                                </div>
                                <input type="text" className="inp" placeholder="User Name" name="Name" id="Name" value={Name} style={style6} onChange={(event) =>
          setName(event.target.value)
        } />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="integer" className="inp" placeholder="Age" id="Age" name="Age" style={style6} value={Age} onChange={(event) =>
          setAge(event.target.value)
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
                                <input type="varchar" className="inp" placeholder="Address" name="Address" style={style6} id="Address" value={Address} onChange={(event) =>
          setAddress(event.target.value)
        } />
                            </div>

                            <div className="text-center pt-1 pb-1">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit" >Update User</button>
                                    
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <Link className="close-btn1" to="/show_user"  onClick={changeStyle2}>Return To Users Table</Link>
                            </div>

                        </form></div>
                </div>
            </div>
           
            <div id="popup2" className={style2}  style={{background: "rgba(0, 0, 0, 0.7)"}}>
          <div className="popup">
            <Link className="close-btn  fas fa-times" onClick={changeStyle4} to="/show_user"></Link>
            <div className="card-body mx-md-4" style={style3}>

              <div className="text-center">
                <h4 className="mt-1 mb-4 pb-1">Deletion Confirmation</h4>
              </div>

              <form
              onSubmit={handleSubmit2}
               action="/show_user"
               >
                {/* {% csrf_token %} */}

                <div className="text-center pt-1 pb-1">
                  <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit">Delete User</button>
                  {/* <Link className="close-btn1" to="/show_user"  onClick={handleSubmit2}>Delete User</Link> */}
                </div>

              </form></div>
          </div>
        </div>
            </center>
        </>
    )
}
