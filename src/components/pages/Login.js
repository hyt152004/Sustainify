import React, { useState } from "react";
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");

  const handleRegister = async () => {
    try {
      // Assuming you have a server endpoint for user registration (although not needed in this case)
      const newUser = {
        id: Date.now(), // Using timestamp as a simple way to generate a unique ID
        username,
        "current-challenges": "",
        "completed-challenges": ""
      };

      // Fetch the existing data from db.json
      const existingData = await axios.get('http://localhost:3001/db.json');

      // Update the data with the new user
      existingData.data.Users.push(newUser);

      // Write the updated data back to db.json
      await axios.put('http://localhost:3001/db.json', existingData.data);

      console.log("User registered successfully:", newUser);

      // Optionally, you can perform additional actions on the client-side if needed

    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Login;
