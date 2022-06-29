// Initializing the app

const app = require("express")();

// Virtual Database

const database = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// Root endpoint

app.get("/", (req, res) => {
  res.status(200).send(console.log("Numbers API"));
});

// Even number endpoint

app.get("/evens", (req, res) => {
  res.status(200).send(database.filter((number) => number % 2 === 0));
});

// Odd number endpoint

app.get("/odds", (req, res) => {
  res.status(200).send(database.filter((number) => number % 2 !== 0));
});

// Start the server

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
