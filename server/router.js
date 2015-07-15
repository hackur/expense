var path = require('path')
var router = require('koa-router')()
var views = require('co-views')
var expenses = require('./controllers/expenses')

var render = views(path.join(__dirname, '../client'), { ext: 'ejs' })

function *index() {
  if (this.method != 'GET') return yield next;
  this.body = yield render('index');
}

router.get('/', index)
router.get('/expenses', expenses.all)
router.post('/expenses', expenses.create)
router.redirect('/home', '/')

module.exports = router;
