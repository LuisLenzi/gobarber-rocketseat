import styled from 'styled-components';
import background from '../../assets/png/home-background.png';

export const Container = styled.div`
  height: 100vh;
  background: url(${background}) no-repeat center / cover;
`;

export const Sidebar = styled.div`
  height: 100vh;
  width: 50%;
  background: rgba(19, 19, 19, 0.65);
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  animation: left-to-right 0.5s ease-in-out;

  @keyframes left-to-right {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(0)
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15rem;

    img{
      height: 25rem;
    }
  }

  .separation {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .buttons {
      gap: 2rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .sign-in {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22rem;
        background: #CF6A00;
        color: #FFF;
        text-decoration: none;
        height: 4.5rem;
        border-radius: 0.5rem;
        border: 0;
        padding: 0 1rem;
        transition: 0.3s;

        img {
          margin-right: 1rem;
        }

      }

      .sign-in:hover {
        width: 22.5rem;
        height: 5rem;
        opacity: 0.8;
      }

      .sign-up {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22rem;
        background: #CF6A00;
        color: #FFF;
        text-decoration: none;
        height: 4.5rem;
        border-radius: 0.5rem;
        border: 0;
        padding: 0 1rem;
        transition: 0.3s;

        img {
          margin-right: 1rem;
        }
      }

      .sign-up:hover {
        width: 22.5rem;
        height: 5rem;
        opacity: 0.8;
      }
    }
  }
`;

export const SocialMedia = styled.div`
  gap: .5rem;
  right: 0;
  bottom: 0;
  top: 0;
  margin-right: 4rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.4s;
  animation: right-to-left .5s ease-in-out;

  @keyframes right-to-left {
    0% {
      transform: translateX(25%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .media-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }

  .media-icons:hover {
    opacity: 0.8;
    width: 3rem;
  }
`;
