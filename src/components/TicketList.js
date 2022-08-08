import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';




function TicketList({onLogout}) {

  const[ticket, setTicket] = useState([])

      //useEffect renders once per loading the page
      useEffect(() => {
        fetch(`http://localhost:3000/tickets`)
          .then((res) => res.json())
          .then((data) => setTicket(data));
      }, []);

  const history = useHistory();

  // map to display tickets
  const displayTicket = ticket.map((tickShown)=> {
    return <p className='tick-list'
    key={tickShown.id}>
        {tickShown.name},
        {tickShown.common_issues},
        {tickShown.devices},
        {tickShown.description}
        <button onClick={()=>handleDelete(tickShown.id)}>Close Ticket</button>
      
    </p>
  })

  // handle delete of ticket


function handleDelete(id){
  console.log(id)
  fetch(`http://127.0.0.1:3000/tickets/${id}`, {
      method: "DELETE", 
     
  })
}

  // handles logging out
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
    history.push("/login")
  }

  return (
    <div>
      <header>
        <button onClick={handleLogout}>Logout</button>
      </header>
        TicketList
        <ul>
          {displayTicket} 
        </ul>

        
    </div>
  )
}

export default TicketList