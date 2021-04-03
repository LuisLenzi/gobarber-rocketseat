import styled from 'styled-components';
import background from '../../assets/png/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  background: url(${background}) no-repeat center / cover;
  display: flex;
  flex-direction: row;
`;

export const Leftbar = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    display: flex;
    align-items: center;
    justify-content: left;

    img{
      display: flex;
      align-items: center;
      justify-content: left;
      height: 25rem;
    }
  }
`;

export const Sidebar = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(19, 19, 19, 0.65);
`;

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  animation: left-to-right .5s ease-in-out;

  @keyframes left-to-right {
    0% {
      transform: translateX(25%);
    }
    100% {
      transform: translateX(0)
    }
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;

    .getstarted-text {
      padding-right: 6rem;
      align-items: center;
      text-align: left;
      justify-content: center;

      strong {
      line-height: 2rem;
      font-weight: 800;
      font-size: 2.25rem;
      }
    }

    .welcome-text {
      padding-right: 12rem;
      align-items: center;
      text-align: left;
      justify-content: center;
    }
  }

  .input {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    background-color: #191919;
    border-radius: 0.5rem;
    border: 2px solid #191919;
    width: 25rem;
    height: 4.5rem;

    img {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 2rem;
    }
  }

  input {
    padding: 0 2rem 0 2rem;
    height: 4.5rem;
    width: 100%;
    background: transparent;
    border: none;
    color: #FFF;
  }

  button{
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #CF6A00;
    color: #FFF;
    height: 4.5rem;
    border-radius: 0.5rem;
    border: 0;
    padding: 0 1rem;
    width: 25rem;
    font-weight: 600;
    transition: 0.4s;

    img {
    margin-right: 1rem;
    }
  }

  button:hover {
      width: 26rem;
      height: 5rem;
      opacity: 0.8;
    }

  .back {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      right: 48%;
      bottom: 17.25%;
      position: absolute;
      height: 5rem;
      transition: 0.4s;
      animation: right-to-left 1s ease-in-out alternate infinite 1s;
    }

    img:hover {
      opacity: 0.8;
      animation-play-state: paused;
    }

    @keyframes right-to-left {
      100% {
        transform: translateX(15%);
      }
      0% {
        transform: translateX(0);
      }
    }
  }
`;
