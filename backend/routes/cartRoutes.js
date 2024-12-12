const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.get("/:userId", cartController.getCart);
router.post("/add-product", cartController.addProductToCart);
router.post("/add-workshop", cartController.addWorkshopToCart);
router.delete("/remove-product", cartController.removeProductFromCart);
router.delete("/remove-workshop", cartController.removeWorkshopFromCart);

module.exports = router;
