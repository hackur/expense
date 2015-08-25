import logger from '../config/logger';
import mongoose from 'mongoose';

var Expense = mongoose.model('Expense');

var expenses = [
  {amount: 10, description: 'exp1'},
  {amount: 20, description: 'exp2'},
  {amount: 30, description: 'exp3'},
  {amount: 40, description: 'exp4'},
  {amount: 50, description: 'exp5'}
];

Expense.create(expenses, (error, food) => {
  if (error) {
    logger.warn('Expenses didn\'t populated');
  } else {
    logger.info('Expenses were populated successfully');
  }
});

Expense.find({}).remove().exec();

export default function(app) {

  app.get('/api/expenses', (req, res) => {
    logger.info('get all expenses');
    Expense.find({}).exec().then((expenses) => {
      res.send(expenses)
    });
  });

  app.post('/api/expenses', (req, res) => {
    logger.info("create new Expense " + req.body.name);
    var expense = new Expense({
      description: req.body.description,
      amount: req.body.amount
    });
    expense.save((err, expense) => {
      res.send(expense);
    });
  });
};
