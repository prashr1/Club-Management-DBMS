import './App.css';
import React, { useState, useEffect } from 'react'
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Home from "./MyComponents/Home";
import Login from "./MyComponents/Login";
import Register from "./MyComponents/Register";
import About from "./MyComponents/About";
import User from "./MyComponents/User";
import Emp from "./MyComponents/Emp";
import Event from "./MyComponents/Event";
import UserBook from "./MyComponents/UserBook";
import EventBook from "./MyComponents/EventBook";
import axios from 'axios';
// import Edit from "./MyComponents/Edit";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function App() {
  console.log("Working")

  const [currentClub, setCurrentClub] = useState();
  // let currentClub=false
  // const [registrationToggle, setRegistrationToggle] = useState(false);
  const [club_email, setClubEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleState1() {
    setCurrentClub(true);
 }
  function handleState2() {
    setCurrentClub(false);
 }
  // useEffect(() => {
    // if (!authenticated)
    // {
    //   setCurrentClub(true);
    // }
    // else
    // {
    //   setCurrentClub(false);
    // }
  //   console.log(currentClub)
  // }, []);

  // useEffect(() => {
  // client.get("")
  //   .then(function(res) {
  //     setCurrentClub(true);
  //   })
  //   .catch(function(error) {
  //     setCurrentClub(false);
  //   });
  // }, []);

console.log(currentClub)
  if (!currentClub)
  {
    return (
<Router>
        <Routes>

          <Route exact path="/register" Component={() => {
            return (
              <Register />
            )
          }} />
          <Route exact path="/" Component={() => {
            return (
              <Login  change = {handleState1}/>
              )
            }} />
          <Route exact path="/login" Component={() => {
            return (
              <Login change = {handleState1}/>
              )
            }} />
            {/* <Route path="/" Component={() => {
              return (
                <Register />
              )
            }} /> */}
          </Routes>
            <Footer />
          </Router>
    )
  }
else{
  return (
    <>
      <Router>
      <Header  change = {handleState2}/>
        <Routes>
{/* 
          <Route exact path="/register" Component={() => {
            return (
              <Register />
            )
          }} />
          <Route exact path="/login" Component={() => {
            return (
              <Login />
            )
          }} /> */}

          {/* <Route exact path="/logout">
            <login />
          </Route> */}
{/* 
      <Route exact path="/logout" Component={() => {
        return (
          <>
            <Logout />
          </>
        )
      }} /> */}
          <Route exact path="/" Component={() => {
            return (
              <>
                
                <Home />
              </>
            )
          }} />

          <Route exact path="/show_user" Component={() => {
            return (
              <>
                <User />
              </>
            )
          }} />
          {/* <Route exact path="/show_user/Create/:id" Component={() => {
            return (
              <>
                <Header /> */}
                {/* <ListUser user=""/> */}
              {/* </>
            )
          }} /> */}
          <Route exact path="/show_emp" Component={() => {
            return (
              <>
                <Emp />
              </>
            )
          }} />
          <Route exact path="/show_event" Component={() => {
            return (
              <>
                <Event />
              </>
            )
          }} />

          {/* <Route exact path="show_user/show_userbookings/:id" Component={() => {
            return (
              <>
                <UserBook />
              </>
            )
          }} />
          <Route exact path="show_event/show_eventbookings/:id" Component={() => {
            return (
              <>
                <EventBook />
              </>
            )
          }} /> */}
          {/* <Route exact path="/Edit">
            <Header />       
            <Edit />       
          </Route>           */}
          {/* <Route exact path="/Update">
            <Header />
            <Footer />            
          </Route>           */}

          <Route exact path="/about" Component={() => {
            return (
              <>
                <About />
              </>
            )
          }} />



        </Routes>

        <Footer />
      </Router>
    </>
  );
        }
}

export default App;
