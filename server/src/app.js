const express = require("express");
const signUpRoute = require("./routes/Signup");
const loginRoute = require("./routes/Login");
const bodyParser = require("body-parser");
const cors = require("cors");
const {CreateAdminAccount} = require("./scripts/setup");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());



CreateAdminAccount();

app.use("/user", signUpRoute);
app.use("/auth", loginRoute);



app.listen(PORT, () =>{
    console.log(`Server is running on: http://localhost:${PORT}`);
})