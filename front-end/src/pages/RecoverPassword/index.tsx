import React from 'react';
import { Container, Content, Sidebar } from './styles';
import Logo from '../../assets/svg/logo2.svg';
import Back from '../../assets/svg/back-arrow-icon.svg';
import Recover from '../../assets/svg/recover-password-icon.svg';
import Email from '../../assets/svg/email-icon.svg';

const SignIn: React.FC = () => (
  <Container>
    <Sidebar>
      <Content>
        <section className="first-section">
          <div className="back">
            <a href="sign-in">
              <img src={Back} alt="Back to home page" />
            </a>
          </div>
          <div className="logo">
            <img src={Logo} alt="The Barber's House" />
          </div>
        </section>
        <section className="second-section">
          <form className="form">
            <div>
              <h2 className="first-text">Don&apos;t worry,</h2>
              <h2 className="first-text">Let&apos;s get your password back</h2>
              <h3 className="second-text">Enter your email address below</h3>
            </div>
            <div className="input">
              <img width="30px" src={Email} alt="Email" />
              <input placeholder="E-mail" />
            </div>
            <button type="submit">
              <img width="45px" src={Recover} alt="Recover" />
              Recover
            </button>
          </form>
        </section>
      </Content>
    </Sidebar>
  </Container>
);

export default SignIn;
