const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get("/", UserController.index);
router.post("/saveUser", UserController.store);

 
module.exports = router;