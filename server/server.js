const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; // You can use any available port

app.use(bodyParser.json());

// Replace this array with your actual database or use a database like MongoDB
const users = [
  {
    id: 1,
    username: "david",
    currentChallenges: "Create a login form using formik in react js",
    completedChallenges: "Todays article will demonstrate how to develop a login form in react js using formik."
  },
  {
    id: 2,
    username: "Dayna",
    currentChallenges: "How to parse or read CSV files in ReactJS",
    completedChallenges: "In this article, I will teach you how to parse or read CSV files in ReactJS in the simplest way possible."
  }
];

app.post('/api/register', (req, res) => {
  const { username } = req.body;

  // Simulate database insertion (you would typically interact with a database here)
  const newUser = {
    id: users.length + 1,
    username,
    currentChallenges: "",
    completedChallenges: ""
  };

  users.push(newUser);

  res.json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
