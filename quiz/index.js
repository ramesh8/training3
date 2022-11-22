const express = require("express");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

const questions = [
  {
    id: 1,
    text: "What JSON stands for?",
    options: [
      { option: "A", text: "Javascript Object Notation" },
      { option: "B", text: "Java Object Notation" },
      { option: "C", text: "Java Object Nomination" },
      { option: "D", text: "Javascript Object Nomination" },
    ],
    score: 2,
    answer: "A",
  },
  {
    id: 2,
    text: "What JSON stands for?",
    options: [
      { option: "A", text: "Javascript Object Notation" },
      { option: "B", text: "Java Object Notation" },
      { option: "C", text: "Java Object Nomination" },
      { option: "D", text: "Javascript Object Nomination" },
    ],
    score: 2,
    answer: "A",
  },
  {
    id: 3,
    text: "What JSON stands for?",
    options: [
      { option: "A", text: "Javascript Object Notation" },
      { option: "B", text: "Java Object Notation" },
      { option: "C", text: "Java Object Nomination" },
      { option: "D", text: "Javascript Object Nomination" },
    ],
    score: 2,
    answer: "A",
  },
  {
    id: 4,
    text: "What JSON stands for?",
    options: [
      { option: "A", text: "Javascript Object Notation" },
      { option: "B", text: "Java Object Notation" },
      { option: "C", text: "Java Object Nomination" },
      { option: "D", text: "Javascript Object Nomination" },
    ],
    score: 2,
    answer: "A",
  },
  {
    id: 5,
    text: "What JSON stands for?",
    options: [
      { option: "A", text: "Javascript Object Notation" },
      { option: "B", text: "Java Object Notation" },
      { option: "C", text: "Java Object Nomination" },
      { option: "D", text: "Javascript Object Nomination" },
    ],
    score: 2,
    answer: "A",
  },
  {
    id: 6,
    text: "What JSON stands for?",
    options: [
      { option: "A", text: "Javascript Object Notation" },
      { option: "B", text: "Java Object Notation" },
      { option: "C", text: "Java Object Nomination" },
      { option: "D", text: "Javascript Object Nomination" },
    ],
    score: 2,
    answer: "A",
  },
  {
    id: 7,
    text: "What JSON stands for?",
    options: [
      { option: "A", text: "Javascript Object Notation" },
      { option: "B", text: "Java Object Notation" },
      { option: "C", text: "Java Object Nomination" },
      { option: "D", text: "Javascript Object Nomination" },
    ],
    score: 2,
    answer: "A",
  },
  {
    id: 8,
    text: "What JSON stands for?",
    options: [
      { option: "A", text: "Javascript Object Notation" },
      { option: "B", text: "Java Object Notation" },
      { option: "C", text: "Java Object Nomination" },
      { option: "D", text: "Javascript Object Nomination" },
    ],
    score: 2,
    answer: "A",
  },
  {
    id: 9,
    text: "What JSON stands for?",
    options: [
      { option: "A", text: "Javascript Object Notation" },
      { option: "B", text: "Java Object Notation" },
      { option: "C", text: "Java Object Nomination" },
      { option: "D", text: "Javascript Object Nomination" },
    ],
    score: 2,
    answer: "A",
  },
  {
    id: 10,
    text: "What JSON stands for?",
    options: [
      { option: "A", text: "Javascript Object Notation" },
      { option: "B", text: "Java Object Notation" },
      { option: "C", text: "Java Object Nomination" },
      { option: "D", text: "Javascript Object Nomination" },
    ],
    score: 2,
    answer: "A",
  },
];
app.get("/quiz", (req, res) => {
  res.render("quiz", { questions: questions });
});

app.get("/reports", (req, res) => {
  res.render("reports");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(5000);
