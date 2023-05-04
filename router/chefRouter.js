const router = require("express").Router();
const chefs = require("../chefsData/chefdata.json");

// Getting individual chef's by id;
router.get("/chef/:id", (req, res) => {
	const id = req.params.id;
	const singleChef = chefs.find((chef) => chef.id == id);
	res.send(singleChef);
});

// Getting the all chef's;
router.get("/all", (req, res) => {
	res.send(chefs);
});

// Not found Routes;
router.get("*", (req, res) => {
	res.send({
		message: "Error 404: Page Not found",
		admin: "Azharul Islam",
	});
});

module.exports = router;
