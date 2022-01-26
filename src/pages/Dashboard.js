import React from 'react';
import { StyledTitle, StyledSubTitle } from '../components/Styles';

const Dashboard = () => {
  return(
    <div className="wrapper dashboard">
      <div></div>
      <StyledTitle size={65}>
          Welcome To User
      </StyledTitle>
      <div className="text-center">
          <button className="btn" to="/Login">Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
