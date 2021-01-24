const express = require('express');
const Card = require('../models/Card');
const { isLoggedIn } = require('../services/authServices');

const router = express.Router();

// GET view Card screen
router.get('/:userName/:cardID', async (req, res) => {
	// search for card ID, card will contain user ID, return card info
	console.log(req.params.userName);
});

// POST to create a new Card
router.post('/add', isLoggedIn, async (req, res) => {
	// from user screen a new card can be created
	// purpose - form input, creates a new card that will be stored according to all input data
	console.log('**************test********', req.user.id);
	try {
		let {
			userName,
			title,
			description,
			skillsRequired,
			location,
			endCard,
			status,
		} = req.body;
		let card = new Card();
		card.postedBy = req.user.id; // tried req.user, but user name was not being added to card DB.
		card.title = title;
		card.description = description;
		card.skillsRequired = skillsRequired;
		card.location = location;
		card.endCard = endCard;
		card.status = status;
		await card.save();
		res.status(200).json({ data: card });
	} catch (err) {
		console.log(err);
		res.json({ message: 'An error occured', err }).sendStatus(400);
	}
});

// GET edit Card screen
// router.get("/edit/", isLoggedIn, (req, res) => {
//   // from user screen, select card and make edits, should be able to get req.user - not working at present.
//   let loggedInName;
//   console.log(req.user.id, req.params)
//   User.findOne({_id: req.user.id}, (err, doc) => {
//     if (err) console.log(err);
//     loggedInName = doc.
//   });
//
//   // need to find card based on URI,
//   // verify that appropriate user is logged in
//     if (userName === loggedInName) { //compared to posted by card name
//       // search for card, verify postedBy matches userName and then provide data
//       Card.findOne({_id: cardID}, (err, doc) => {
//         if (err) {
//           console.log(err);
//           mongoose.connection.close();
//         } else {
//           if (doc.postedBy === userName) {
//             console.log("found card", doc)
//             //provide data ??
//             res.status(200).json({data: doc});
//
//             mongoose.connection.close();
//           } else {
//             console.log("User not authorized to edit card");
//             mongoose.connection.close();
//           }
//         }
//       });
//     }
//   } catch (err) {
//     console.log(err);
//     res.json({message: "An error occured", err}).sendStatus(400);
//   }
//
// });

// PUT to edit a Card
router.put('/update', isLoggedIn, async (req, res) => {
	console.log(req.user);
	// data has been updated, saving to card handled Here
	// verify user is logged in and matches userName, then find card and update values
	// req.user should return userID
});

module.exports = router;
