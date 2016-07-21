var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  next();
});
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'login' });
  //next();
});

router.post('/dologin', function (req, res, next) {
  var user = {
    username: 'admin',
    password: 'admin'
  }
  if (req.body.username === user.username && req.body.password === user.password) {
    res.redirect('/home2');
  }else{
    res.redirect('login');
  }
});

module.exports = router;
