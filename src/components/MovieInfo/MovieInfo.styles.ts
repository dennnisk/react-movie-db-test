import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

type Props = {
  backdrop: string;
}

export const Wrapper = styled.div<Props>`
  background: ${(props) =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieinfo 1s;

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1280px;

  margin: 0 auto;
  background: rgb(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 50px 0 0 -40px;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  .rate {
    margin: 40px 0 0 0px;

    p {
      margin: 0;
    }

    button {
      display: block;
      background: var(--white);
      width: 25%;
      min-width: 100px;
      max-width: 100px;
      height: 30px;
      border-radius: 10px;
      color: var(--darkGrey);
      border: 0;
      font-size: var(--fontSmall);
      margin: 25px 0 0 30px;
      transition: all 0.3s;
      outline: none;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
    }

    input {
      margin: 0 25px 0 30px;
      width: 35%;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;