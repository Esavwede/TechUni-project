var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var reqLogger = require('morgan');
var logger = require('./system/logger/index') 


// Routes 
const buildRoutes = require('./routes/index') 


// Database 
const { createDatabaseConnection } = require('./system/database/connection/createDatabaseConnection') 


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(reqLogger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Routes 
buildRoutes(app) 

// Database 
const db = createDatabaseConnection() 





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


logger.info('Application Started ') 


// App Crash Settings 

process.on('SIGINT',()=>
    { 
        db.close(false,()=>{ 
          process.exit(0) 
        })
    }
  )


process.on('SIGTERM',()=>
  {
    db.close(false,()=>{ 
      process.exit(0) 
    })
  }
)


module.exports = app;
