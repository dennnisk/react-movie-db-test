import React from 'react';
// Proptypes - Validação de parametros
import PropTypes from 'prop-types';

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

// Proptypes - Validação de parametros
Actor.propTypes = {
  name: PropTypes.string,
  caracter: PropTypes.string,
  imageUrl: PropTypes.string
}

export default Actor;