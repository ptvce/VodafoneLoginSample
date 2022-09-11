import React, { useState } from "react";
import "../App.css";

const UserHome = () => {
  const [user, setUser] = useState();
 

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
