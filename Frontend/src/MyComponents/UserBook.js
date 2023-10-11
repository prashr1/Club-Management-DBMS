import React,{ useEffect, useState } from 'react'
import "./UserBook.css";
import { Link, useParams } from "react-router-dom";

export default function UserBook() {
  const { id } = useParams();
        
    let [userBook, setuserBook] = useState([])

    useEffect(() => {
        getuserBook()
    }, [userBook])


    let getuserBook = async () => {
        // if (noteId === 'new') return

        let response = await fetch(`/show_user/show_userbookings/${id}`)
        let data = await response.json()
        console.log("DATA2: ",id)
        setuserBook(data)
    }

return (
       
      
      <center>
            <div className="main1">
              <h1 style={{marginTop: "5px"}}>User's Booking Table</h1>
            <hr/>
            <Link className="button badge badge-primary rounded-pill d-inline" style={{fontSize: "15px",backgroundColor:"#1abfe46e"}} to="#popup1">Create New User's Booking</Link>
            <section className="pb-4" style={{paddingTop: "5px"}}>
              <div className="bg-white border rounded-5">
                
                <section className="w-100 p-4 table-responsive">
                  <table className="table align-middle mb-0 bg-white">
                      <thead className="bg-light">
                      <tr>
                          <th>Booking ID</th>
                          <th>User ID</th>
                          <th>Event ID</th>
                          <th>Booking Date</th>
                          <th>Booking Mode</th>
                          <th>Action</th>
                          <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {% for result in data %}
                      <tr/>
                        <td>
                          <p className="fw-bold mb-1">{{result.booking_id}}</p>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">{{result.u_id.u_id}}</p>
                        </td>
                        <td>
                          {{result.event_id.event_id}}
                        </td>
                        <td>{{result.booking_date}}</td>
                        <td>{{result.booking_mode}}</td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                              <Link to="Edit/{{result.booking_id}}">Edit</Link>
                          </button>                        
                        </td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                              <Link to="Delete/{{result.booking_id}}" onclick="return confirm('Are You Sure To Delete The Record?')">Delete</Link>
                          </button>                        
                        </td>
                        {% endfor %} */}
                        {/* {userBook.map((user, index) => ( */}
                        {/* <p>{userBook.user_id}</p> */}

                        {userBook.map((user, index) => (
                        
                        // <ListUser key={index} user={user} />
                        <p>{user.user_id}</p>
                        // <h3> {user.u_name} </h3>
                    ))}

                        {/* <ListUser key={index} user={user} /> */}
                         {/* <h3> {user.u_name} </h3> */}
                    {/* ))} */}
                      </tbody>
              </table>
            </section>
                
            
            
            <div className="p-4 text-center border-top mobile-hidden">
              <span className="badge badge-primary rounded-pill d-inline" style={{fontSize: "15px",backgroundColor:"#1abfe46e"}}><Link to="/">Main Page</Link></span>            
            </div>
            
            
            </div>
            </section>
            </div>
            <div id="popup1" className="overlay">
              <div className="popup">
              <Link className="close-btn  fas fa-times" to="../../show_user/show_userbookings/{{id}}"></Link>
              <div className="card-body mx-md-4" style={{width: "65%"}}>
          
                <div className="text-center">
                  <h4 className="mt-1 mb-4 pb-1">User's Booking Data Insertion</h4>
                </div>
          
                <form method="POST" action="../../show_user/show_userbookings/{{id}}">
                  {/* {% csrf_token %} */}
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                    </div>
                    <input type="integer" className="inp" placeholder="Event ID" name="event_id"/>
                  </div>
          
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="text" className="inp" placeholder="Booking Date" name="booking_date"/>
                  </div>
          
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="text" className="inp" placeholder="Booking Mode" name="booking_mode"/>
                  </div>

                  <div className="text-center pt-1 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Register User's Booking</button>
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <Link className="close-btn1" to="../../show_user/show_userbookings/{{id}}">Return To User's Booking Table</Link>
                  </div>
          
              </form></div>
              </div>
              </div>
              <div id="popup2" className="overlay">
                <div className="popup" style={{height: "220px"}}>
                <Link className="close-btn  fas fa-times" to="/showUserBookings"></Link>
                <div className="card-body mx-md-4" style={{width: "65%"}}>
            
                  <div className="text-center">
                    <h4 className="mt-1 mb-4 pb-1">Deletion Confirmation</h4>
                  </div>
            
                  <form method="POST" action="{% url 'showUserBookings' %}">
                    {/* {% csrf_token %} */}
                             
                    <div className="input-group mb-2">
                      <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                      </div>
                      <input type="integer" className="inp" placeholder="Enter User ID to proceed" name="booking_id"/>
                    </div>

                    <div className="text-center pt-1 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit2">Delete User's Booking</button>
                    </div>
            
                </form></div>
                </div>
                </div>
</center>

  )
}
