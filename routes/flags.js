const router = require('express').Router();
const Flag = require('../models/flag.model');

router.route('/').get((req, res) => {
    Flag.find()
        .then(flag => res.json(flag))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;