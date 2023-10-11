import React, { useEffect, useState } from 'react'
import ListEvent from './ListEvent'
import './Event.css';
 import { Link,useNavigate } from "react-router-dom";

export default function Event() {
  let [Events, setEvents] = useState([])

  useEffect(() => {
    getEvents()
  }, [])

  let getEvents = async () => {
    let response = await fetch("/show_event")
    let data = await response.json()
    console.log('DATA:', data)
    setEvents(data)
  }
  const navigate = useNavigate();
  let [Event, setEvent] = useState(null)
  
  let eventId='new'
  useEffect(() => {
    getEvent()
}, [eventId])

let getEvent = async () => {
  if (eventId === 'new') return
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

const handleSubmit3 = (e) => {
  e.preventDefault();
  console.log("New Event: ", Event )
  createEvent()
  changeStyle2()
  navigate('/show_event')
};

let createEvent = async () => {
  fetch(`show_event/Create`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(Event)
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
          <h1 style={style5}>Event Table</h1>
          <hr />
          <Link className="button badge badge-primary rounded-pill d-inline" onClick={changeStyle1} style={{ fontSize: "15px", paddingTop: "5px", backgroundColor: "#1abfe46e" }} to="">Create New Event</Link>
          <section className="pb-4" style={style1}>
            <div className="bg-white border rounded-5">
              <section className="w-100 p-4 table-responsive">
                <table className="table align-middle mb-0 bg-white">
                  <thead className="bg-light">
                    <tr>
                      <th>Event ID</th>
                      <th>Capacity</th>
                      <th>Time</th>
                      <th>Total Duration</th>
                      <th>Date</th>
                      <th>Action</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {% for result in data %}
                      <tr>
                        <td>                            
                          <p className="fw-bold mb-1">{{result.event_id}}</p>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">{{result.capacity}}</p>
                        </td>
                        <td>
                          {{result.time}}
                        </td>
                        <td>{{result.total_duration}}</td>
                        <td>{{result.date}}</td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                              <Link to="show_eventbookings/{{result.event_id}}">Bookings</Link>
                          </button>                        
                        </td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                              <Link to="Edit/{{result.event_id}}">Edit</Link>
                          </button>                        
                        </td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                              <Link to="Delete/{{result.event_id}}" onclick="return confirm('Are You Sure To Delete The Record?')">Delete</Link>
                          </button>                        
                        </td>
                        {% endfor %} */}

                    {Events.map((event, index) => (

                      <ListEvent key={index} event={event} />
                      // <h3> {event.u_name} </h3>
                    ))}
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
                    <Link className="close-btn  fas fa-times" onClick={changeStyle2} to="/show_event"></Link>
                    <div className="card-body mx-md-4" style={style3}>

                        <div className="text-center">
                            <h4 className="mt-1 mb-4 pb-1">Event Data Insertion</h4>
                        </div>

                        <form 
                        onSubmit={handleSubmit3}
                        // action="/show_event"
                        >
                            {/* {% csrf_token %} */}
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                                </div>
                                <input type="text" className="inp" placeholder="Capacity" name="capacity" id="capacity" style={style6} onChange={(e) =>
          setEvent(Event => ({ ...Event, 'capacity': e.target.value }))}
        />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="integer" className="inp" placeholder="Time" id="time" name="time" style={style6} onChange={(e) =>
          setEvent(Event => ({ ...Event, 'time': e.target.value }))
        } />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="integer" className="inp" placeholder="Total Duration" name="total_duration" style={style6} id="total_duration" onChange={(e) =>
          setEvent(Event => ({ ...Event, 'total_duration': e.target.value }))
        } />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="varchar" className="inp" placeholder="Date" name="date" style={style6} id="date" onChange={(e) =>
          setEvent(Event => ({ ...Event, 'date': e.target.value }))
        } />
                            </div>

                            <div className="text-center pt-1 pb-1">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit" >Create Event</button>
                                    
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <Link className="close-btn1" to="/show_event"  onClick={changeStyle1}>Return To Events Table</Link>
                            </div>

                        </form></div>
                </div>
            </div>
      </center>
    </div>
  )
}

