const mongoose = require('mongoose');
const express=require("express");

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

const MenuSchema = new Schema({
  bakery_id: 
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bakery',
    required:true,
    unique:true
  },
  dessert_items: [{
    type: DessertSchema,
    required:true,
  }],
});

module.exports = mongoose.model('Menu', MenuSchema);
