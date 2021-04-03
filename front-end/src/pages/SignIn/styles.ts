import styled from 'styled-components';
import background from '../../assets/png/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  background: url(${background}) no-repeat center / cover;
`;

export const Sidebar = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  animation: left-to-right .5s ease-in-out;

  @keyframes left-to-right {
    0% {
      transform: translateX(-15%);
    }
    100% {
      transform: translateX(0)
    }
  }

  .first-section{
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .back {
      position: absolute;
      left: 0;
      width: 37.5%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: right-to-left 1s ease-in-out alternate infinite 1s;
      transition: 0.4s;

      img{
        height: 5rem;
        transition: 0.4s;
      }

      img:hover {
        height: 6rem;
        opacity: 0.8;
      }

      @keyframes right-to-left {
        100% {
          transform: translateX(5%);
        }
        0% {
          transform: translateX(0);
        }
      }
    }

    .logo {
      width: 115%;
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: left;

      img{
        display: flex;
        align-items: center;
        justify-content: left;
        height: 17.5rem;
      }
    }
  }

  .second-section {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .form {
      gap: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      text-align: center;
    }

    .input {
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

    .label-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #FFF;
    }
  }
`;
