import { useState } from "react";
// import styled from "styled-components";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
// import { Button } from "../styles";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      {/* <Logo>Tech time</Logo> */}
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

// const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: deeppink;
//   margin: 8px 0 16px;
// `;

const Wrapper = {
  maxwidth: "500px",
  margin: "40px auto",
  padding: "16px"
}

const Divider = {
  border: "none",
  borderbottom: "1px solid #ccc",
  margin: "16px 0"
}

const Button = {
  cursor: "pointer",
  fontsize: "1rem",
  border: "1px solid transparent",
  borderradius: "6px",
  padding: "8px 16px",
  textdecoration: "none"
}

export default Login;