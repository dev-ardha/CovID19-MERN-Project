const router = require('express').Router();
const Article = require('../models/article.model');

router.route('/').get((req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error: ' + err));
})

// Add Article
router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const title = req.body.title;
    const post = req.body.post;

    const newArticle = new Article({
        username,
        title,
        post
    });

    newArticle.save()
           .then(()=> res.json('Article added!'))
           .catch((err) => res.json('Error: ' + err));
});

// Get Article by Id
router.route('/:id').get((req, res)=>{
    Article.findById(req.params.id)
           .then(article => res.json(article))
           .catch((err) => res.json('Error: ' + err))
})

// Delete Article
router.route('/:id').delete((req, res)=>{
    Article.findByIdAndDelete(req.params.id)
           .then(() => res.json('Article deleted!'))
           .catch((err) => res.status(400).json('Error: ' + err))
})

// Update Article by Id
router.route('/update/:id').post((req, res)=>{
    Article.findById(req.params.id)
           .then(article => {
               article.username = req.body.username;
               article.title = req.body.title;
               article.post = req.body.post;

               article.save()
               .then(()=> res.json('Article updated!'))
               .catch((err)=> res.status(400).json('Error: ' + err))
           })
           .catch((err)=> res.status(400).json('Error: ' + err))
})
module.exports = router;