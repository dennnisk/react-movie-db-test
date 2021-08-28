import React from 'react';
import {Wrapper, Image} from './Actor.styles'

type Props = {
  name: string;
  caracter: string;
  imageUrl: string;
}

const Actor: React.FC<Props> = ({name, caracter, imageUrl}) => {

  return (
    <Wrapper>
      <Image src={imageUrl} alt='actor-thumb' />
      <h3>{name}</h3>
      <p>{caracter}</p>
    </Wrapper>
  )

}

export default Actor;