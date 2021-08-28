import Styled from "styled-components";

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
  padding: 15px;
  color: var(--darkGrey);

  input {
    width: 100%;
    height: 30px;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px;
  }

  .error {
    color: red;
  }

  h3 {
    width: 100%;
    padding: 20px 40px;
    color: var(--darkGrey);
    overflow: hidden;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }

    a {
      color: var(--darkGrey);
      text-decoration: none;
    }
  }
`;