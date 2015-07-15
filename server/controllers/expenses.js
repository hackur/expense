var config = require('../config/config');
var parse = require('co-body');
var wrap = require('co-monk');

var db = require('monk')(`${config.DBURL}/expenses`);
var expenses = wrap(db.get('expenses'));

expenses.remove({});

expenses.insert({amount: 10, description: 'exp1'});
expenses.insert({amount: 20, description: 'exp2'});
expenses.insert({amount: 30, description: 'exp3'});
expenses.insert({amount: 40, description: 'exp4'});
expenses.insert({amount: 50, description: 'exp5'});

module.exports.all = function  *all(next) {
  if (this.method != 'GET') return yield next;
  this.body = yield expenses.find({});
};

module.exports.create = function  *create(data, next) {
  if (this.method != 'POST') return yield next;
  var inserted = yield expenses.insert(this.request.body);
  if (!inserted) {
    this.throw(405, "The expense couldn't be added.");
  }
  this.body = inserted;
};
