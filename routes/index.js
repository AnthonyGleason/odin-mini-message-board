var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , messages: messages});
});

router.post('/new', (req,res)=>{
  //push messages from form input
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  })
  //redirect users back to home
  res.redirect('/');
});

module.exports = router;
