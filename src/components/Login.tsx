import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router';

import API from '../API';

// componentes
import Button from './Button';
//
import {Wrapper} from './Login.styles'

import { Context } from '../Context';


const Login: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  //@ts-ignore
  // eslint-disable-next-line
  const [user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(requestToken, username, password);

      console.log(sessionId);
      setUser({
        sessionId: sessionId.session_id, 
        username: username
      });

      navigate('/');
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  const handleInput = (e: any) => {
    const name = e?.currentTarget?.name ;
    const value = e?.currentTarget?.value;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
    console.log('campo>: ', name, value);
  }

  return (
    <Wrapper>
      {error && <div className="error">There was an Error on the login</div>}
      <h3>Login into<a href="https://www.themoviedb.org/">The Movie DB</a></h3>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
        ></input>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
        ></input>
        <Button text='Login' callback={handleSubmit} />
    </Wrapper>
  )

}

export default Login;