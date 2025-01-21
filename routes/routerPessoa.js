const express = require("express");
const controllerPessoa = require("../controllers/controllerPessoa");

const router = express.Router();

router.post("/", controllerPessoa.criar);

module.exports = router;
