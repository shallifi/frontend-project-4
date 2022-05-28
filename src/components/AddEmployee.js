import { useState } from "react";
import { useHistory } from "react-router-dom";
import UserList from "./UserList";


function Employee({onAddUser}) {
  
  /// used for controlled form vvvvvv
  const [formData, setFormData] = useState ({
    
    name:"",
    department:"", 
    manager: "",
    title: "",
    phone: ""
  })
  
 // history.push() to navigate to UserList after POST request
 const history = useHistory();

  ///handleChange 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

   
//value property on every input = formData.------

  // console.log(formData) 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData }),
    };
      fetch(`http://localhost:3000/users`, configObj)
        .then((resp) => resp.json())
        .then((userBlah) => {
          onAddUser(userBlah);
          setFormData({
            name:"",
            department:"", 
            manager: "",
            title: "",
            phone: ""
        });
      });
      history.push(`employee/new`)
    }
    console.log("AddEmployee", formData)
  return (
    <form style={formStyle}  onSubmit={handleSubmit}>
    <div>
        Employee Name
        <input type="text" 
        style={textArea} 
        name="name" 
        placeholder="First and Last Name"
        onChange={handleChange}
        value={formData.name}
        />
        
        Department
        <input type="text" 
        style={textArea} 
        name="department" 
        placeholder="dept"
        onChange={handleChange}
        value={formData.department}/>

        Manager
        <input type="text" 
        style={textArea} 
        name="manager" 
        placeholder="direct supervisor"
        onChange={handleChange}
        value={formData.manager}/> 

        Title
        <input type="text" 
        style={textArea} 
        name="title" 
        placeholder="position / title"
        onChange={handleChange}
        value={formData.title}/>

        Phone#
        <input type="text" 
        style={textArea} 
        name="phone" 
        placeholder="###-###-####"
        onChange={handleChange}
        value={formData.phone}/>

        <button type="submit">Submit New Employee Information</button>
      {/* <UserList formData={formData} key={formData.id}/> */}
      </div>
    </form>
  )
}

export default Employee

const formStyle = {
  display: "flex",
  flex : "column",
  width: "500px",
  margin: "0 auto",
  border: "2px solid var(--dark-turquoise)",
  padding: "1.75rem"
}

const textArea = {
  margintop: "0.25rem",
  marginbottom: "1rem",
  padding: "0.5rem",
  border: "none",
  fontsize: "1.25rem",
  fontweight: "bold",
  transition: "all 0.3s",
  border: "2px solid var(--color)",
}