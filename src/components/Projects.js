import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import LandingPageDemo from "../assets/LandingPageDesign.png";
import BookStoreDemo from "../assets/BookStore.png";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div>
      <Wrap id="projects">
        <GlobalStyle />
        <Fade bottom>
          <ProjectsTitle>
            <h2 id="projects-header">Projects</h2>
          </ProjectsTitle>
        </Fade>
        <ProjectsGroup>
          {/*Hamburger */}

          <ProjectInfo>
            <Fade bottom>
              <ProjectText>
                <h4 id="left-title">The Little Book Store </h4>
                <p id="left-description">
                  A fully responsive e-commerce website build with React,
                  Bootstrap , and React Routers
                </p>
                <ButtonGroup id="left-button">
                  <a
                    href="https://github.com/jajavix/TheLittleBookStore.git"
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="live-link"
                  >
                    Live
                  </a>
                </ButtonGroup>
              </ProjectText>
            </Fade>
            <Fade bottom>
              <ProjectImg>
                <img src={BookStoreDemo} alt="bookStore" id="project-img" />
              </ProjectImg>
            </Fade>
          </ProjectInfo>
          <br />
          {/*Hamburger */}
          <ProjectInfo>
            <Fade bottom>
              <ProjectText>
                <h4 id="left-title">Photoshop Work </h4>
                <p id="left-description">Landing Page Design Using Photoshop</p>
                <ButtonGroup id="left-button">
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="live-link"
                  >
                    Learn More
                  </a>
                </ButtonGroup>
              </ProjectText>
            </Fade>
            <Fade bottom>
              <ProjectImg>
                <img src={LandingPageDemo} alt="landingpage" id="project-img" />
              </ProjectImg>
            </Fade>
          </ProjectInfo>
        </ProjectsGroup>
      </Wrap>
    </div>
  );
};

export default Projects;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
`;

const ProjectsTitle = styled.div``;

const ProjectsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
  margin-right: 20px;
  margin-bottom: 80px;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectImg = styled.div`
  margin: 0px 70px 0px 70px;
`;

const ProjectText = styled.div`
  text-align: left;
  margin: 0px 70px 0px 70px;
`;

const ButtonGroup = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GlobalStyle = createGlobalStyle`
  #projects-header {
    margin-top: 70px;
    font-size: 32px;
    font-weight: 500;
    color: #FFFFFF;
  }
  #project-img {
    width: 95%;
  }
  #project-title {
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 0px 0px 16px;
  }
  #project-description {
    color: #E2E4E4;
    font-size: 16px;
    font-weight: 400;
    padding: 0px 0px 16px;
    width: 30vw;
  }
  #tagd-img {
    width: 25%;
    margin: 0px 5px;
  }
  #left-title {
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 0px 0px 16px 16px;
  }
  #left-description {
    color: #E2E4E4;
    font-size: 16px;
    font-weight: 400;
    padding: 0px 0px 16px 16px;
    width: 30vw;
  }
  #left-button {
    padding: 0px 0px 12px 12px;
  }
  .github-link {
    font-weight: 500;
    color: #F5F5F5;
    font-size: 14px;
    height: 35px;
    width: 195px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border-style: solid;
    border-width: 3px;
    border-color: #F5F5F5;
    cursor: pointer;
    margin: 5px;
  }
  .github-link:hover {
    color: #000;
    background-color: #F5F5F5;
  }
  .live-link {
    font-weight: 500;
    color: #D0D1D2;
    font-size: 14px;
    height: 35px;
    width: 195px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border-style: solid;
    border-width: 3px;
    border-color: #393C41;
    cursor: pointer;
    margin: 5px;
  }
  .live-link:hover {
    color: #000;
    background-color: #393C41;
  }
`;
