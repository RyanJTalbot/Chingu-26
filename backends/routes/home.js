const express = require('express');
const Card = require('../models/Card');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		let cards = await Card.find({});
		res.status(200).json({ data: cards });
	} catch (err) {
		res.status(500).json({ Error: err });
	}
});

module.exports = router;
