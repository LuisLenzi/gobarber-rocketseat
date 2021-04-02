import React from 'react';
import { Container, Content, Sidebar } from './styles';
import Logo from '../../assets/svg/logo2.svg';
import Back from '../../assets/svg/back-arrow-icon.svg';
import Login from '../../assets/svg/log-in-icon.svg';
import Email from '../../assets/svg/email-icon.svg';
import Password from '../../assets/svg/password-icon.svg';

const SignIn: React.FC = () => (
  <Container>
    <Sidebar>
      <Content>
        <section className="first-section">
          <div className="back">
            <a href="/">
              <img src={Back} alt="Back to home page" />
            </a>
          </div>
          <div className="logo">
            <img src={Logo} alt="The Barber's House" />
          </div>
        </section>
        <section className="second-section">
          <form className="form">
            <div className="input">
              <img width="30px" src={Email} alt="Email" />
              <input placeholder="E-mail" />
            </div>
            <div className="input">
              <img width="30px" src={Password} alt="Password" />
              <input type="password" placeholder="Senha" />
            </div>
            <button type="submit">
              <img width="45px" src={Login} alt="Login" />
              Login
            </button>
            <div className="label-links">
              <a href="forgot">Forgot password</a>
            </div>
          </form>
        </section>
      </Content>
    </Sidebar>
  </Container>
);

export default SignIn;
