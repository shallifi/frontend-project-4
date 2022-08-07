// import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom'



function NavBar({colorT}) {
  return (
      <>
    <div className="nav">
        <h3 className="project-title" style={{color:colorT}}>NavBar</h3>
        

        <NavLink to="/restart" 
        exact style={boxButtonStyle} 
        activeStyle={{ background: "darkgreen", }}>
            <h3> Did you Restart?</h3>
          </NavLink>
          
        <NavLink to="/login" 
        exact style={boxButtonStyle} 
        activeStyle={{ background: "darkgreen", }}>
            <h3> Tech login</h3>
          </NavLink>

        <NavLink to="/addticket" 
        exact style={boxButtonStyle} 
        activeStyle={{ background: "darkgreen", }}>
            <h3> Add Ticket</h3>
        </NavLink>

        <NavLink to="/ticketlist" 
        exact style={boxButtonStyle} 
        activeStyle={{ background: "darkgreen", }}>
            <h3> Ticket List</h3>
        </NavLink>
        
        <NavLink exact to="/employee"
        style={boxButtonStyle} 
        activeStyle={{ background: "darkgreen", }}
        >
            <h3> Add Employee</h3>
        </NavLink>
        
        <NavLink exact to="/employee/new"
        style={boxButtonStyle} 
        activeStyle={{ background: "darkgreen", }}
        >
            <h3>Employee List</h3>
        </NavLink>
    </div>
    </>
  )
}

export default NavBar;

const boxButtonStyle = {
  display: "inline-block",
  width: "150px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
 };

