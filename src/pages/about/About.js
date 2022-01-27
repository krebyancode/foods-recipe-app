import React from "react";
import { AboutContainer, HeaderContainer, InfoContainer } from "./AboutStyle";

const About = () => {
  return (
    <AboutContainer>
      <HeaderContainer>
        <h1>
          About <span>Krebyancode</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Ayberk</h2>
        <h3>I’m a Front-end Developer.</h3>
        <h4>I developed this project by using Styled Components.</h4>
        <h2>
          <a href="mailto:krebyancode@gmail.com">Send email</a> :
          krebyancode@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
