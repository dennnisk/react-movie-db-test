import React from 'react';

import { Wrapper} from './Button.styles'
// types
type props = {
  text: string;
  callback: () => void;
}

const Button: React.FC<props> = ({text, callback}) => {

  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  )

};


export default Button;


