import React, { useState } from "react";
import { connect } from "react-redux";

const Home = ({ user, login, logout }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "ishita" && password === "pass") {
      login({ username });
    }
  };

  const handleLogout = () => {
    logout();
  };

  console.log("User prop:",user);
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
            <p>Please Login!</p>
            <input type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}/>

            <input type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}/>

            <button onClick={handleLogin}>Login</button>

        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userData) => dispatch({ type: "LOGIN", payload: userData }),
    logout: () => dispatch({ type: "LOGOUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
