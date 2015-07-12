var wrap = require('co-monk');
var config = require('../config/config')

var db = require('monk')(`${config.DBURL}/expenses`);
var expenses = wrap(db.get('expenses'));

expenses.remove({})

expenses.insert({amount: 10, name: 'exp1'})
expenses.insert({amount: 20, name: 'exp2'})
expenses.insert({amount: 30, name: 'exp3'})
expenses.insert({amount: 40, name: 'exp4'})
expenses.insert({amount: 50, name: 'exp5'})

module.exports.all = function  *all(next) {
  console.log('all')
  if (this.method != 'GET') return yield next;
  this.body = yield expenses.find({});
};
