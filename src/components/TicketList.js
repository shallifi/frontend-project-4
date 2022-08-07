import React from 'react'
import { useHistory } from 'react-router-dom';


function TicketList({onLogout}) {

  ///this is for the displaying of a ticket list

  // const projectItems = searchResults.map((project) => {
  //   return (
  //     <ProjectListItem
  //       key={project.id}
  //       project={project}
  //       enterProjectEditModeFor={enterProjectEditModeFor}
  //       onDeleteProject={onDeleteProject}
  //     />
  //   );
  // });

  const history = useHistory();

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

        
    </div>
  )
}

export default TicketList