import React from 'react'
import './Home.css';
import { Link } from "react-router-dom";

export default function Home() {
  let style1={
    color: "black"
  }
  let style2={
    height: "370px"
  }
  let style3={
    paddingLeft: "100px"
  }
  let style4={
    paddingLeft: "96px",
    paddingTop: "24px"
  }
  let style5={
    backgroundImage: 'url("img/home_page.jpg")'
  }
  return (
    <div>
        <div className="container-fluid px-0">
          <div id="carouselExampleCaptions" className="carousel slide">

            <div className="carousel-inner main_part" style={style5}>
                <div className="carousel-caption d-none d-md-block" style={style1}>
                  <h3>Your Data Manager is Here Now!</h3>
                  <h5>Comfort Yourself</h5>
                </div>
            </div>

            <div className="container my-3">
              <h2 className="my-4 text-center">Our Features</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm" style={style2}>
                  <img src="img/1.jpeg" className="d-block w-100" alt="..." height="220" width="200"/>
                      <div className="card-body" style={{paddingLeft: "44px",paddingRight: "43px", width: "100%",top: "0%"}}>
                        <p className="card-text">You can add/edit/delete your User(s) Data. Also managing all the bookings of a particular User in all the events is possible!</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group" style={style3}>
                            <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/show_user/">Go To User List</Link></button>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm" style={style2}>
                  <img src="img/1.jpeg" className="d-block w-100" alt="..." height="220" width="200"/>
                      <div className="card-body" style={{paddingLeft: "44px",paddingRight: "43px", width: "100%",top: "0%"}}>
                        <p className="card-text">You can add/edit/delete your Employee(s) Data.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group" style={style4}>
                            <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/show_emp/">Go To Employee List</Link></button>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm" style={style2}>
                  <img src="img/1.jpeg" className="d-block w-100" alt="..." height="220" width="200"/>
                      <div className="card-body" style={{paddingLeft: "44px",paddingRight: "43px", width: "100%",top: "0%"}}>
                        <p className="card-text">You can add/edit/delete your Event(s) Data. Also managing all the bookings of all the User(s) for a particular Event is possible!</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group" style={style3}>
                            <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/show_event/">Go To Event List</Link></button>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        </div>
        </div>
        </div>
        )
}
