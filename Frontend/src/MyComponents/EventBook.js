import React from 'react'
import './EventBook.css';
import { Link } from "react-router-dom";

export default function EventBook() {
  return (
    <div>
      {/* {% if messages %}
      {% for message in messages %}
        <div className="alert alert-{{ message.tags }} alert-dismissible fade show my-0" role="alert">
          <strong>{{ message }}</strong>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      {% endfor %}
      {% endif %}   */}
      <center>
            <div className="main1">
              <h1 style={{marginTop: "5px"}}>Event's Booking Table</h1>
            <hr/>
            <Link className="button badge badge-primary rounded-pill d-inline" style={{fontSize: "15px",backgroundColor:"#1abfe46e"}} to="#popup1">Create New Event's Booking</Link>
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
              <Link className="close-btn  fas fa-times" to="../../show_event/show_eventbookings/{{id}}"></Link>
              <div className="card-body mx-md-4" style={{width: "65%"}}>
          
                <div className="text-center">
                  <h4 className="mt-1 mb-4 pb-1">Event's Booking Data Insertion</h4>
                </div>
          
                <form method="POST" action="{% url 'showEventBookings' %}">
                  {/* {% csrf_token %} */}
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                    </div>
                    <input type="integer" className="inp" placeholder="User ID" name="u_id"/>
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
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Register Event's Booking</button>
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <Link className="close-btn1" to="/showEventBookings">Return To Event's Booking Table</Link>
                  </div>
          
              </form></div>
              </div>
              </div>
              <div id="popup2" className="overlay">
                <div className="popup" style={{height: "220px"}}>
                <Link className="close-btn  fas fa-times" to="/showEventBookings"></Link>
                <div className="card-body mx-md-4" style={{width: "65%"}}>
            
                  <div className="text-center">
                    <h4 className="mt-1 mb-4 pb-1">Deletion Confirmation</h4>
                  </div>
            
                  <form method="POST" action="{% url 'showEventBookings' %}">
                    {/* {% csrf_token %} */}
                             
                    <div className="input-group mb-2">
                      <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                      </div>
                      <input type="integer" className="inp" placeholder="Enter User ID to proceed" name="booking_id"/>
                    </div>

                    <div className="text-center pt-1 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" name="submit2">Delete Event's Booking</button>
                    </div>
            
                </form></div>
                </div>
                </div>
</center>
{/* INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}</style><meta http-equiv="origin-trial" content="A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"><script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/979879318/?random=1678613356347&amp;cv=11&amp;fst=1678613356347&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45He3360&amp;u_w=1536&amp;u_h=864&amp;label=uIBJCPv423AQlouf0wM&amp;hn=www.googleadservices.com&amp;frm=0&amp;url=https%3A%2F%2Fmdbootstrap.com%2Fdocs%2Fstandard%2Fdata%2Ftables%2F&amp;ref=https%3A%2F%2Fmdbootstrap.com%2F&amp;tiba=Bootstrap%20Tables%20-%20examples%20%26%20tutorial&amp;auid=371803549.1677748988&amp;uaa=x86&amp;uab=64&amp;uafvl=Google%2520Chrome%3B111.0.5563.64%7CNot(A%253ABrand%3B8.0.0.0%7CChromium%3B111.0.5563.64&amp;uamb=0&amp;uap=Windows&amp;uapv=10.0.0&amp;uaw=0&amp;rfmt=3&amp;fmt=4"></script><meta http-equiv="origin-trial" content="A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"><script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/979879318/?random=1678784100802&amp;cv=11&amp;fst=1678784100802&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45He3360&amp;u_w=1536&amp;u_h=864&amp;label=uIBJCPv423AQlouf0wM&amp;hn=www.googleadservices.com&amp;frm=0&amp;url=http%3A%2F%2F127.0.0.1%3A8000%2Fshow_user%2F&amp;ref=http%3A%2F%2F127.0.0.1%3A8000%2F&amp;tiba=Bootstrap%20Tables%20-%20examples%20%26%20tutorial&amp;auid=1626700377.1678614372&amp;uaa=x86&amp;uab=64&amp;uafvl=Google%2520Chrome%3B111.0.5563.64%7CNot(A%253ABrand%3B8.0.0.0%7CChromium%3B111.0.5563.64&amp;uamb=0&amp;uap=Windows&amp;uapv=10.0.0&amp;uaw=0&amp;rfmt=3&amp;fmt=4"></script></head> */}
      
    {/* <div style="display: none; visibility: hidden;"><script>var stb_exitintent=!1;document.addEventListener("mousemove",function(a){var b=window.pageYOffset||document.documentElement.scrollTop;10>a.pageY-b&&0==stb_exitintent&&(dataLayer.push({event:"exit_intent"}),stb_exitintent=!0)});</script></div><script type="text/javascript" id="">function createCookie(c,d,b){var a="";b&&(a=new Date,a.setTime(a.getTime()+864E5*b),a="; expires\x3d"+a.toUTCString());document.cookie=c+"\x3d"+d+a+"; path\x3d/"}createCookie("firstCampaign","undefined",365);</script><script type="text/javascript" id="">function setCookie(a,b){var c="Mon, 18 Jan 2038 03:14:07";document.cookie=a+"\x3d"+b+";path\x3d/;expires\x3d"+c}function getCookie(a){for(var b=document.cookie.split(";"),c,d=0;d<b.length;d++){var e=b[d].trim();0===e.indexOf(a+"\x3d")&&(c=e.substring((a+"\x3d").length,e.length))}return c}(function(){var a=getCookie("pageviewCount");"undefined"===typeof a?a=1:a++;setCookie("pageviewCount",a)})();</script>
    <script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","289867067833087");fbq("track","PageView");</script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=289867067833087&amp;ev=PageView&amp;noscript=1"></noscript>
    <script type="text/javascript" id="">(function(a,e,b,f,g,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);c.async=1;c.src="https://www.clarity.ms/tag/"+g;d=e.getElementsByTagName(f)[0];d.parentNode.insertBefore(c,d)})(window,document,"clarity","script","f1su1ssihh");</script>
    
    <script type="text/javascript" id="">function getCookie(c){for(var d=document.cookie.split(";"),e,a=0;a<d.length;a++){var b=d[a].trim();0===b.indexOf(c+"\x3d")&&(e=b.substring((c+"\x3d").length,b.length))}return e};</script></body> */}

    </div>
  )
}
