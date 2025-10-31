const express = require("express");
const router = express.Router();

// Shop data with dynamic products
var shopData = {
    shopName: "The Thirsty Student (TTS)",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shops: [
        { name: "Quahog Central", manager: "Peter Griffin", address: "31 Spooner St, Quahog" },
        { name: "North Quahog", manager: "Lois Griffin", address: "22 Elm St, Quahog" },
        { name: "South Quahog", manager: "Stewie Griffin", address: "1 Diaper Lane, Quahog" }
    ]
};

// Home page
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
});

// About page
router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
});

// Search page (form using GET)
router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
});

// Handle search result (GET)
router.get("/search_result", (req, res) => {
    // Access individual fields
    const keyword = req.query.search_text || "";
    const category = req.query.category || "";
    res.send(`You searched for "${keyword}" in "${category}"`);
});

// Register page (form using POST)
router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

// Handle registration form (POST)
router.post("/registered", (req, res) => {
    const first = req.body.first || "";
    const last = req.body.last || "";
    const email = req.body.email || "";
    res.send(`Hello ${first} ${last}, you are now registered! Your email: ${email}`);
});

// Show survey form
router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData);
});

// Handle survey submission
router.post("/survey_result", (req, res) => {
    const studentStatus = req.body.student ? "Yes" : "No";
    res.send(`
        <h1>Survey Results</h1>
        <p>Name: ${req.body.first} ${req.body.last}</p>
        <p>Email: ${req.body.email}</p>
        <p>Age: ${req.body.age}</p>
        <p>Drinks consumed: ${req.body.drink}</p>
        <p>Student: ${studentStatus}</p>
    `);
});

module.exports = router;
