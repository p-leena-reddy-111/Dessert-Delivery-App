const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const DessertSchema=new Schema({
  name:
  {
      type:String,
      required:true,
      trim:true
  },
  category:
  {
      type:String,
      required:true,
      trim:true
  },
  description:
  {
      type:String,
      required:true,
      trim:true
  },
  price:
  {
      type:Number,
      required:true,
  },
  image:
  {
    type:String,
    trim:true
  }
})

const CartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users',
  },
  items: [
    {
      dessertId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'DessertSchema', 
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Cart', CartSchema);
