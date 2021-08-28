import React from 'react';

import {Wrapper, Image} from './Actor.styles'

const Actor = ({name, caracter, imageUrl}) => {

  return (
    <Wrapper>
      <Image src={imageUrl} alt='actor-thumb' />
      <h3>{name}</h3>
      <p>{caracter}</p>
    </Wrapper>
  )

}

export default Actor;