const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        username: 'Skylar',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete yoru account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.send("IT WORKED!!!")
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})