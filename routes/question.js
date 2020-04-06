const router = require('express').Router();
const Question = require('../models/question.model');

router.route('/').get((req, res) => {
    Question.find()
        .then(question => res.json(question))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res)=>{
    const question = req.body.question;
    const newQuestion = new Question({question});

    newQuestion.save()
           .then(()=> res.json('Question added'))
           .catch((err) => res.json('Error: ' + err));
});

module.exports = router;