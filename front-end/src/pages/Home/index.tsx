import React from 'react';
import { Container, Content, Sidebar } from './styles';
import Logo from '../../assets/svg/logo.svg';
import Github from '../../assets/svg/github-icon.svg';
import Linkedin from '../../assets/svg/linkedin-icon.svg';
import Instagram from '../../assets/svg/instagram-icon.svg';
import SignIn from '../../assets/svg/sign-in-icon.svg';
import SignUp from '../../assets/svg/sign-up-icon.svg';

const LandingPage: React.FC = () => (
  <Container>
    <Sidebar>
      <Content>
        <div className="logo">
          <img src={Logo} alt="GoBarber" />
        </div>
        <div className="separation">
          <div className="buttons">
            <a className="sign-in" href="/sign-in">
              <img width="45px" src={SignIn} alt="Sign In" />
              Sign In
            </a>
            <a className="sign-up" href="/">
              <img width="45px" src={SignUp} alt="" />
              Sign Up
            </a>
          </div>
          <div className="social-media">
            <a className="media-icons" href="https://github.com/LuisLenzi">
              <img width="55px" src={Github} alt="Github" />
            </a>
            <a className="media-icons" href="https://www.linkedin.com/in/lu%C3%ADs-gustavo-costa-lenzi-8915921b4/">
              <img width="55px" src={Linkedin} alt="Linkedin" />
            </a>
            <a className="media-icons" href="https://www.instagram.com/luis.lenzi/">
              <img width="55px" src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </Content>
    </Sidebar>
  </Container>
);

export default LandingPage;
