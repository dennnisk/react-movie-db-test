import React, { useContext } from 'react';
import {Link } from 'react-router-dom'
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
import { Context } from '../../Context';

const Header: React.FC = () => {

  const [user] = useContext(Context);

  console.log(user);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt='rmdb-logo' />
        </Link>
        {
          user ? (
            <span> Welcome {user.username}</span>
          ) : (
            <Link to='/login'>
              <span>Log In</span>
            </Link>
          )
        }
        <a href="https://www.themoviedb.org/" target="_blank">
          <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </a>
      </Content>
    </Wrapper>
  );
};

export default Header;

