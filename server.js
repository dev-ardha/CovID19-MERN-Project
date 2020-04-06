const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');

const app = express();

const uri = 'mongodb+srv://ardhayudhatama:bumiitubulat@myprojects-ahg9u.mongodb.net/coviddatabase?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true } )
        .then(()=> console.log('Database Connected...'))
        .catch((err)=> console.log(err));

app.use(cors());
app.use(bodyParser.json());

// Routes
const articlesRouter = require('./routes/articles');
const usersRouter = require('./routes/users');
const questionRouter = require('./routes/question');
const flagsRouter = require('./routes/flags');

app.use('/api/flags', flagsRouter)
app.use('/api/articles', articlesRouter);
app.use('/api/users', usersRouter);
app.use('/api/questions', questionRouter);

if(process.env.NODE_ENV === 'production') {
        app.use(express.static('client/build'));
        
        app.get('*', (req, res)=>{
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });

}

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));