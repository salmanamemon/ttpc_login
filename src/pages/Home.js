import React from 'react';
import {Link} from 'react-router-dom';
import { StyledTitle, StyledSubTitle } from '../components/Styles';

const Home = () => {
  return (
      <div>
        <div></div>
        <StyledTitle size={65}>
            Welcome To TTPC
        </StyledTitle>
        <StyledSubTitle size={27}>
            Feel free to explore our page
        </StyledSubTitle>
        <div className="text-center">
            <Link className="btn" to="/login">Login</Link>
            <Link className="btn" to="/register">Register</Link>
        </div>
      </div>
  );
}

export default Home;
