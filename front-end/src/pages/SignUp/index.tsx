import React from 'react';
import {
  Container, Content, Sidebar, Leftbar,
} from './styles';
import Logo from '../../assets/svg/logo2.svg';
import Back from '../../assets/svg/back-arrow-icon.svg';
import Register from '../../assets/svg/register-icon.svg';
import Name from '../../assets/svg/name-icon.svg';
import Email from '../../assets/svg/email-icon.svg';
import Password from '../../assets/svg/password-icon.svg';

const SignIn: React.FC = () => (
  <Container>
    <Leftbar>
      <div className="logo">
        <img src={Logo} alt="The Barber's House" />
      </div>
    </Leftbar>
    <Sidebar>
      <Content>
        <form className="form">
          <div className="getstarted-text">
            <strong>
              Let&apos;s Get Started
            </strong>
          </div>
          <div className="welcome-text">
            <h3>
              Welcome to our home
            </h3>
          </div>
          <div className="input">
            <img width="30px" src={Name} alt="Email" />
            <input placeholder="Nome" />
          </div>
          <div className="input">
            <img width="30px" src={Email} alt="Email" />
            <input placeholder="E-mail" />
          </div>
          <div className="input">
            <img width="30px" src={Password} alt="Password" />
            <input type="password" placeholder="Senha" />
          </div>
          <button type="submit">
            <img width="45px" src={Register} alt="Login" />
            Register
          </button>
        </form>
      </Content>
      <div className="back">
        <a href="/">
          <img width="75px" src={Back} alt="Back to home page" />
        </a>
      </div>
    </Sidebar>
  </Container>
);

export default SignIn;
