var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 定义icon图标
//app.use(favicon(__dirname + '/public/favicon.ico'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// 定义日志和输出级别
app.use(logger('dev'));
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 定义cookie解析器
app.use(cookieParser());
// 定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
// 匹配路径和路由
app.use('/', routes);
app.use('/users', users);

// 404错误处理
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
// 开发环境，500错误处理和错误堆栈跟踪
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
// 生产环境，500错误处理
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



// var session = require("express-session");
// var MongoStore=require("connect-mongo")(session);


var session = require('express-session');
var connect = require('connect');
var SessionStore = require("connect-mongo")(session);//require("session-mongoose")(connect);
var store = new SessionStore({
  url:"mongodb://localhost/session",
  interval: 120000
});
app.use(session({
  secret: 'test.com',
  store: store,
  cookie:{maxAge:10000} //expire session in 10 seconds
}));
// //用于把登录用户设置到res.locals里面，在home.html里显示
// app.use(function(req,res,next){
//   res.locals.user = req.session.user;
//   console.log('Session is = ',req.session.user);
//   next();
// });


// 输出模型app
module.exports = app;
