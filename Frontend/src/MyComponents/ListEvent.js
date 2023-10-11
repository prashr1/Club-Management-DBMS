import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './ListEvent.css';

export default function ListEvent({ event }) {
    const [Cap, setCap] = useState(event.capacity);
    const [Time, setTime] = useState(event.time);
    const [Dur, setDur] = useState(event.total_duration);
    const [Date, setDate] = useState(event.date);
  
    const navigate = useNavigate(); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setCap(Cap);
    //   console.log("Cap: ",Cap)
      console.log("Cap: ",event.capacity)
      event.capacity=Cap
      console.log("Cap: ",event.capacity)
      setTime(Time);
      event.time=Time
      setDur(Dur);
      event.total_duration=Dur
      setDate(Date);
      event.date=Date
      updateEvent()
      changeStyle2()
    };
    const handleSubmit2 = (e) => {
        e.preventDefault();
        deleteEvent()
        changeStyle4()
        navigate('/show_event')
      };

      let deleteEvent = async () => {
        fetch(`show_event/Delete/${event.event_id}`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
    }
  
    let updateEvent = async () => {
      fetch(`show_event/Update/${event.event_id}`, {
          method: "PUT",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(event)
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
                <p className="fw-bold mb-1">{event.event_id}</p>
            </td><td>
                <p className="fw-normal mb-1">{event.capacity}</p>
            </td><td>
                {event.time}
            </td><td>{event.total_duration}</td><td>{event.date}</td>
            {/* <td>
                <button type="button" className="btn btn-link btn-sm btn-rounded">
                    <Link to="show_eventbookings/{{result.event_id}}">Bookings</Link>
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
                    <Link className="close-btn  fas fa-times" onClick={changeStyle2} to="/show_event"></Link>
                    <div className="card-body mx-md-4" style={style3}>

                        <div className="text-center">
                            <h4 className="mt-1 mb-4 pb-1">Event Data Updation</h4>
                        </div>

                        <form 
                        onSubmit={handleSubmit}
                        // action="/show_event"
                        >
                            {/* {% csrf_token %} */}
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                                </div>
                                <input type="text" className="inp" placeholder="Capacity" name="Cap" id="Cap" value={Cap} style={style6} onChange={(e) =>
          setCap(e.target.value)
        } />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="integer" className="inp" placeholder="Event Time" id="Time" name="Time" style={style6} value={Time} onChange={(e) =>
          setTime(e.target.value)
        } />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="integer" className="inp" placeholder="Total Duration" name="Dur" style={style6} id="Dur" value={Dur} onChange={(e) =>
          setDur(e.target.value)
        } />
                            </div>

                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="varchar" className="inp" placeholder="Date" name="Date" style={style6} id="Date" value={Date} onChange={(e) =>
          setDate(e.target.value)
        } />
                            </div>

                            <div className="text-center pt-1 pb-1">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit" >Update Event</button>
                                    
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <Link className="close-btn1" to="/show_event"  onClick={changeStyle2}>Return To Events Table</Link>
                            </div>

                        </form></div>
                </div>
            </div>
            <div id="popup2" className={style2}  style={{background: "rgba(0, 0, 0, 0.7)"}}>
          <div className="popup">
            <Link className="close-btn  fas fa-times" onClick={changeStyle4} to="/show_event"></Link>
            <div className="card-body mx-md-4" style={style3}>

              <div className="text-center">
                <h4 className="mt-1 mb-4 pb-1">Deletion Confirmation</h4>
              </div>

              <form
              onSubmit={handleSubmit2}
               action="/show_event"
               >
                {/* {% csrf_token %} */}

                <div className="text-center pt-1 pb-1">
                  <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit">Delete Event</button>
                  {/* <Link className="close-btn1" to="/show_event"  onClick={handleSubmit2}>Delete Event</Link> */}
                </div>

              </form></div>
          </div>
        </div>
            </center>
        </>
    )
}
