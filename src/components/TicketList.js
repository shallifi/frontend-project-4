import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';




function TicketList({onLogout}) {

  const[tickData, setTickData] = useState([])

      //useEffect renders once per loading the page
      useEffect(() => {
        fetch(`http://localhost:3000/tickets`)
          .then((res) => res.json())
          .then((data) => setTickData(data));
      }, []);

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
  const handleEdit = (e)=> {
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
        .then((tickInfo) => {
          // onAddTicket(tickInfo);
          setTickData({
            id:"",
            common_issues:"",
            devices: "" ,
            name:"" ,
            description:"" 
            // tech:"" ,
            // solution:"" ,
            // status: ""
        });
      });
      history.push(`/addticket/${id}`)
      history.go();
    }

  // handle delete of ticket
function handleDelete(id){
  console.log(id)
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