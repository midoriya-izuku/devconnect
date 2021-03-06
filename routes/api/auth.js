const express = require('express');
const router = express.Router();
const authenticate = require('../../middleware/authenticate');
const User = require('../../models/User');

// @GET api/auth
// @desc get users
// Not protected
router.get('/', authenticate, async(req, res) => {
    try {
        let user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});



module.exports = router;