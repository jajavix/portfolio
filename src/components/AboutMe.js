import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import ProfilePicture from "../assets/Profile-Picture.jpg";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
  return (
    <div>
      <Wrap id="about">
        <GlobalStyle />
        <Fade bottom>
          <TitleText>
            <h2 id="about-header">About Me</h2>
          </TitleText>
        </Fade>
        <Fade clear>
          <AboutGroup>
            <AboutImg>
              <img src={ProfilePicture} alt="profile" id="about-img" />
            </AboutImg>
            <AboutText>
              <p id="about-text">
                Hi, I'm Maria, a Web Developer and UI/UX designer residing in
                San Jose CA! Before my career transition, I worked in MUJI USA
                limited for around 12 years in 3 different departments: Retail
                Management, Visual Merchandising, and eCommerce. I recently
                attended Fullstack Academy to help me transition to a developer
                career tech field.
              </p>
              <br />
              <p id="about-text">
                I’m a fast and proactive learner who adapts quickly to new
                environments. I enjoy working with teams and communicating
                directly with end-users. I have worked on or led projects that
                required coordination between multiple stakeholders and some
                across multiple countries and languages.
              </p>
              <br />

              <p id="about-text">
                Currently, I am fulltime Potter, creating functional and
                whimsical wares for daily use. If I do have free time, I enjoy
                gardening, sketching, and avid Manga reader.
              </p>
            </AboutText>
          </AboutGroup>
        </Fade>
      </Wrap>
    </div>
  );
};

export default AboutMe;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  margin-top: 35px;
`;

const AboutGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const AboutImg = styled.div``;

const AboutText = styled.div`
  text-align: left;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;

const GlobalStyle = createGlobalStyle`
  #about-header {
    font-size: 32px;
    font-weight: 500;
    color: #FFFFFF;
  }
  #about-text {
    color: #E2E4E4;
    font-size: 16px;
    font-weight: 400;
    width: 50vw;
    margin-right: 70px;
    @media (max-width: 768px) {
      width: 80%;
      margin-left: 40px;
    }
  }
  #about-img {
    width: 65%;
    margin-right: 0px;
  }
`;
