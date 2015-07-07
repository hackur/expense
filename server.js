var views = require('co-views');
var logger = require('koa-logger');
var router = require('koa-router')();
var serve = require('koa-static');
var parse = require('co-body');
var koa = require('koa');

const app = koa();
var render = views(__dirname + '/client', { ext: 'ejs' });

app.use(serve('./client'));
app.use(logger());

router.get('/', list);
router.redirect('/home', '/');

app.use(router.routes());

function *list() {
  this.body = yield render('index', {data: {name: "Expenses"}});
}

app.listen('3000');
console.log('listening on port 3000');
