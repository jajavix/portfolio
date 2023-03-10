import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-scroll";
//import resume from "../assets/Maria J Villarin_Resume.pdf";
//nav bar and footer
const Footer = () => {
  return (
    <div>
      <Wrap>
        <GlobalStyle />
        <FirstRow>
          <Link
            to="landing"
            href="#"
            smooth={true}
            duration={4000}
            className="footer-link"
          >
            Home
          </Link>
          <Link
            to="about"
            href="#"
            smooth={true}
            duration={3000}
            className="footer-link"
          >
            About
          </Link>
          <Link
            to="projects"
            href="#"
            smooth={true}
            duration={2000}
            className="footer-link"
          >
            Projects
          </Link>
          <Link
            to="technologies"
            href="#"
            smooth={true}
            duration={1000}
            className="footer-link"
          >
            Technologies
          </Link>
          <Link
            to="contact"
            href="#"
            smooth={true}
            duration={1000}
            className="footer-link"
          >
            Contact
          </Link>
          <a
            href="https://docs.google.com/document/d/1vzobVV754_N8g7dh-SrAFnOrj8BdysEHuH3ARp9QIwQ/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Resume
          </a>
        </FirstRow>

        <SecondRow>
          <FooterText>Maria J Villarin © 2023</FooterText>
          <Icons>
            <a
              href="https://github.com/jajavix"
              target="_blank"
              rel="noreferrer"
            >
              <i class="devicon-github-original"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/maria-j-v-3576721b2/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="devicon-linkedin-plain"></i>
            </a>
          </Icons>
        </SecondRow>
      </Wrap>
    </div>
  );
};

export default Footer;

const Wrap = styled.div`
  width: 100%;
  height: 25vh;
  background-color: #393c41;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.div`
  color: #f4f4f4;
  font-size: 14px;
  margin: 0px 10px 0px 10px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 15px 0px;
`;

const SecondRow = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 0px 0px;
  margin: 15px 0px 0px 0px;
  border-top: 2px solid #444;
`;

const GlobalStyle = createGlobalStyle`
  .devicon-github-original {
    font-size: 30px;
    color: #F4F4F4;
    margin: 0px 10px 0px 10px;
  }
  .devicon-linkedin-plain {
    font-size: 36px;
    color: #F4F4F4;
    margin: 0px 10px 0px 10px;
  }
  .footer-link {
    color: #F4F4F4;
    font-size: 14px;
    margin: 0px 10px 0px 10px;
    @media (max-width: 390px) {
      margin: 0px 5px 0px 5px;
    }
  }
`;
