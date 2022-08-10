import React, { useEffect, useState } from 'react'
import {  Switch, useHistory, useParams } from 'react-router-dom';
import Login from './page/Login';





function TicketList() {

  const[tickData, setTickData] = useState([])

  // const [tickets, setTickets] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tech, setTech] = useState(null);

      //useEffect original before auth renders once per loading the page
      // useEffect(() => {
      //   fetch(`http://localhost:3000/tickets`)
      //     .then((res) => res.json())
      //     .then((data) => setTickData(data));
      // }, []);


useEffect(() => {
  fetch("/login")
  .then((res) => {
    if(res.ok) {
      res.json()
      .then((tech) => {
        console.log(tech)
        setIsAuthenticated(true);
        setTech(tech);
      })
      .then(()=> {
        fetch('/tickets')
        .then(res => res.json())
        .then(tickets => {
          setTickData(tickets)
        });
      })
    }
    else alert("you are not logged in please try again")
  });

  
},[]);
if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setTech={setTech} />;

  const history = useHistory();
  const { id } = useParams();

  // map to display tickets
  const displayTicket = tickData.map((tickShown)=> {
    return <p className='tick-list'
    key={tickShown.id}>
        {tickShown.name},
        {tickShown.common_issues},
        {tickShown.devices},
        {tickShown.description}
        <button onClick={()=>handleEdit(tickShown.id)}>edit Ticket</button>
        <button onClick={()=>handleDelete(tickShown.id)}>Close Ticket</button>
      
    </p>
  })

  // handle edit of ticket
  const handleEdit = ()=> {
    // e.preventDefault();
    const configObj = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify( tickData ),
    };
      fetch(`http://127.0.0.1:3000/tickets/${id}`, configObj)
        .then((resp) => resp.json())
        .then((setTickData) => {
          // onAddTicket(tickInfo);
          setTickData({
            id:"",
            common_issues:"",
            devices: "" ,
            name:"" ,
            description:"" 
        });
      });
      history.push(`/addticket/${id}`)
      history.go();
    }

  // handle delete of ticket
function handleDelete(id){
  // console.log(id)
  fetch(`http://127.0.0.1:3000/tickets/${id}`, {
      method: "DELETE", 
     
  })
  history.push('/ticketlist');
  history.go();
}

  // handles logging out
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }) }
    history.push("/login")
  

  return (
    <Switch>
    <div setIsAuthenticated={setIsAuthenticated} setTech={setTech} tech={tech}>
      <header>
        <button onClick={handleLogout}>Logout</button>
      </header>
        TicketList
        <ul>
          {displayTicket} 
        </ul>
        {/* <Route path="/login">
          <Login />
    </Route> */}
        
    </div>
    </Switch>
  )
}

export default TicketList