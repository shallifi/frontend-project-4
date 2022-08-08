import { useState,useEffect } from "react";
// import AddEmployee from "react";


function EmployeeList() {
  const [employee, setEmployee] = useState([])
  


    //useEffect renders once per loading the page
    useEffect(() => {
        fetch(`http://localhost:3000/employees`)
          .then((res) => res.json())
          .then((data) => setEmployee(data));
      }, []);
    

    const displayEmploy = employee.map((empShown) => {
        return <p className="emp-list" 
          key={empShown.id}>
          {/* <h4>Name:</h4> */}
          {empShown.name},
          {/* <h4>Department:</h4> */}
          {empShown.department},
          {/* <h4>Manager:</h4> */}
          {empShown.manager},
          {/* <h4>Title:</h4> */}
          {empShown.title},
          {/* <h4>Phone:</h4> */}
          {empShown.phone}

          </p>; 
      });


return (
    <div >

        <h1>Employee List</h1>
          <ul>
          {displayEmploy}
          </ul>
         
        <h2>
          {/* {awesome} */}
          {/* {employee.department.map((dept)=>
          <li key={dept}>{dept}</li>)} */}
           
        </h2>
    
     
        {/* <ul className="emp-list">{employee}</ul> */}
    </div>
  )
}

export default EmployeeList