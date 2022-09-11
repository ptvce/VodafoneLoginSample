import React, { useState, useEffect } from "react";
import PageLoader from "../components/page-loader";
import "../App.css";
import authService from "../services/auth-service";

const UserHome = () => {
  const [user, setUser] = useState();
 
  useEffect(() => {
    const user = authService.getCurrentUser();
    setUser( user );
  }, []);

  return user ? (
    <div className="App">
      <header className="App-header">
        <p>Welcom to Vodafone</p>
        <h1> You are logged in</h1>
      </header>
    </div>
  ) : (
    <div>
      <h1>You are not logged in</h1>
    </div>
  );
};

export default UserHome;
