var path = require('path');
var router = require('koa-router')();
var views = require('co-views');
var expenses = require('./controllers/expenses');

var render = views(path.join(__dirname, '../client'), { ext: 'ejs' });

function *index() {
  if (this.method != 'GET') return yield next;
  this.body = yield render('index');
}

router.get('/', index)
router.get('/api/expenses', expenses.all)
router.post('/api/expenses', expenses.create)

module.exports = router;
