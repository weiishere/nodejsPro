var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  //next();
});
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'login' });
  //next();
});
router.get('/home', function (req, res, next) {
  res.render('home', { title: 'home' });
  //next();
});

router.post('/dologin', function (req, res, next) {
  var user = {
    username: 'admin',
    password: 'admin'
  }
  if (req.body.username === user.username && req.body.password === user.password) {
    req.session.user=user;
    res.redirect('./home');
  }else{
    res.redirect('login');
  }
  //next();
});

module.exports = router;
