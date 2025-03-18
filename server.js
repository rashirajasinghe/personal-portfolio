require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Contact Details API
app.get("/api/contact", (req, res) => {
  res.json({
    name: "Rashini Rajasinghe",
    email: "rashini.rajasinghe1@gmail.com",
    phone: "+94 719931967",
    address: "10th Canal,Ulpathagama,Hasalaka",
  });
});

// Social Media Links API
app.get("/api/socials", (req, res) => {
  res.json({
    linkedin: "https://www.linkedin.com/in/rashini-r-a835b122b",
    github: "https://github.com/rashirajasinghe",
    twitter: "https://x.com/Rashirajasinghe?t=RysGj4JUfD_cmQNp_Jd6uA&s=09",
    facebook: "https://www.facebook.com/rashini.rajasinghe?mibextid=ZbWKwL",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
