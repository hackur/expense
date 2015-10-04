var path = require('path')
var config = require('./config/config')
var bodyParser = require('koa-bodyparser');
var logger = require('koa-logger')
var serve = require('koa-static')
var parse = require('co-body')
var koa = require('koa')
var router = require('./router')

// koa setup
const app = koa()

app.use(bodyParser());

// logger
app.use(logger())

// routes
app.use(router.routes())

// serve static files
app.use(serve(path.join(__dirname, '../client')))

// error handling
app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});

app.listen(config.PORT)
console.log(`listening on port ${config.PORT}`)
