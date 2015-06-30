var views = require('co-views');
var logger = require('koa-logger');
var route = require('koa-route');
var serve = require('koa-static');
var parse = require('co-body');
var koa = require('koa');

const app = koa();
var render = views(__dirname + '/client', { ext: 'ejs' });

app.use(serve('./client'));
app.use(logger());

app.use(route.get('/', list));

function *list() {
  this.body = yield render('index', {data: {name: "Expenses"}});
}

app.listen('3000');
