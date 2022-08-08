import React, { useState } from "react";
import styled from "styled-components";
// import { Button, Error, Input, FormField, Label,  } from "../styles";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setErrors([]);
  //   setIsLoading(true);
  //   fetch('http://127.0.0.1:3000/teches', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       email,
  //       password,
  //       password_confirmation: passwordConfirmation      
  //     }),
  //   }).then((r) => {
  //     setIsLoading(false);
  //     if (r.ok) {
  //       r.json().then((username) => onLogin(username));
  //     } else {
  //       r.json().then((err) => setErrors(err.errors));
  //     } 
  //   });
  // }

  function handleSubmit(e){
    e.preventDefault()
    const user = {
        name: username,
        email,
        password,
        password_confirmation: passwordConfirmation
    }
   
    fetch('http://127.0.0.1:3000/teches',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(json => {
        if(json.errors) setErrors(Object.entries(json.errors))
        else alert("Thanks for logging in, please refresh the page to check out the sessions magic :)")
    })
}

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>

      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>

      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>

      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
   

      <FormField>
        <Button type="submit">SIGN up </Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Label = styled.label`
  color: lightgreen;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  max-width: 500px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
`;

const Button= styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
`;

const Error = styled.span`
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-weight: bold;
  display: grid;
  place-content: center;
`;

// const Textarea = styled.textarea`
//   border-radius: 6px;
//   border: 1px solid transparent;
//   border-color: #dbdbdb;
//   -webkit-appearance: none;
//   max-width: 100%;
//   width: 100%;
//   font-size: 1rem;
//   line-height: 1.5;
//   padding: 4px;
//   resize: none;
// `;




export default SignUpForm;
