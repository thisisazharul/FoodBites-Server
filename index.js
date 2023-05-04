const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const chefRouter = require("./router/chefRouter");

app.use(cors());

// Using the router;
app.use("/chefs", chefRouter);

// Universal route for server
app.get("/", (req, res) => {
	res.send("Food Bites server is successfully running...");
});

app.listen(port, () => {
	console.log(`Food Bites successfully running at PORT Number ${port}`);
});
