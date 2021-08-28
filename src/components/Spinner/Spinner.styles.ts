import styled from 'styled-components';

type Props = {
  smaller?: boolean
}

export const Wrapper = styled.div<Props>`
  border: ${(props) => props.smaller ? '2px': '5px'} solid var(--lightGrey); 
  border-top: ${(props) => props.smaller ? '2px': '5px'} solid var(--medGrey);
  border-radius: 50%;
  ${(props) => props.smaller 
    ? 'width: 20px; height: 20px;' 
    : 'width: 50px; height: 50px;'};
  animation: spin 0.8s linear infinite;
  margin: 20px ${(props) => props.smaller ? '': 'auto'};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
