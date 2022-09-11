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
        <h1>Welcom to Vodafone</h1>
        <h2> You are logged in</h2>
        <h3> your login is saved in your cookies, To test again please clean your cookies</h3>
      </header>
    </div>
  ) : (
    <div>
      <h1>You are not logged in</h1>
    </div>
  );
};

export default UserHome;
