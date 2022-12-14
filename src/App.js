import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import AddEmployee from "./components/AddEmployee";
import AddTicket from "./components/AddTicket";
// import CellPhone from "./components/CellPhone";
import TicketList from "./components/TicketList";
import { Link } from "react-router-dom";
import Restart from "./components/Restart";
// import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import Login from "./components/page/Login";
import SignUpForm from "./components/SignUpForm";
import React, { useEffect, useState } from "react";





function App() {
  const [tech, setTech] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((tech) => setTech(tech));
      }
    });
  }, []);

  if (!tech) return <Login onLogin={setTech} />;
  // const [tickets, setTickets] = useState([])
  // const [colorT, setColorT] = useState('black')
///buttons 3
///change color with click
//h3


// function handleColorChange(newColor) {
//   setColorT(newColor)
//   console.log("click")
// }

//stretch goal adding edit ticket form
  // const onUpdateTicket = (updatedTick) => {
  //   const updatedTickets = tickets.map((ogTicket) => {
  //     if (ogTicket.id === updatedTicket.id) {
  //       return updatedTicket;
  //     } else {
  //       return ogTicket;
  //     }
  //   });
  //   setTickets(updatedTickets);
  // };

  return (
    <div>
      <Link to="/" style={{border:"red"}}>
      <h1 className="ithds-header">IT Help Desk Ticket System</h1>
      </Link>
      <NavBar  tech={tech} setTech={setTech} />
      {/* colorT={colorT} */}
      {/* setIsAuthenticated={setIsAuthenticated} setTech={setTech} tech={tech} */}
        <Switch>
          <Route path="/addticket">
            <AddTicket />
          </Route>

          <Route path="/ticketlist">
            <TicketList  />
            {/* tickets={tickets} */}
          </Route>
          
          {/* <Route path="/cellphone">
            <CellPhone /> */}
            {/* handleColorChange={handleColorChange} */}
          {/* </Route> */}

          <Route exact path="/employee">
            <AddEmployee/>
          </Route>

          <Route exact path="/employee/new">
              <EmployeeList/>
          </Route>

          <Route path="/restart">
            <Restart/>
          </Route>
          
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/signup">
            <SignUpForm/>
          </Route>

          <Route path="/*">
            <NotFound/>
          </Route>

        </Switch>
        {/* giving credit to artist is below if publishing app  */}
        {/* <footer>
          <a href="https://www.freepik.com/vectors/data-background">Data background vector created by starline - www.freepik.com</a>
        </footer> */}
    </div>
  );
}

export default App;
