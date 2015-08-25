import mongoose, { Schema } from 'mongoose';

 var ExpenseSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Expense', ExpenseSchema);
