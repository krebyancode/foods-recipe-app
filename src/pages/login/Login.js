import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./LoginStyle";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Header>{"<Krebyancode/>"}Foods</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
