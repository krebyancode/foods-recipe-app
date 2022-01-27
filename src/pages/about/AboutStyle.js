import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  line-height: 2;
  background: #00adb5;
  font-size: 2em;
  span {
    color: white;
    font-family: "Dongle", sans-serif;
  }
`;

export const InfoContainer = styled.div`
  text-align: right;
  margin: 0 10px;
  max-width: 1000px;
  border: 1px solid white;
  padding: 25px;
  border-radius: 5px;

  a {
    color: white;
  }
`;

export const HeaderContainer = styled.div``;
