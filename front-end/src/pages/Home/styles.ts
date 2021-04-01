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

    .social-media {
      gap: .5rem;
      right: 0;
      margin-right: 3rem;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition: 0.4s;

      .media-icons {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .media-icons:hover {
        opacity: 0.8;
      }
    }
  }
`;
