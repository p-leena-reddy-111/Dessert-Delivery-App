const express=require("express");
const mongoose=require("mongoose")

const Schema=mongoose.Schema;

const BakerySchema=new Schema({
    name:
    {
        type:String,
        unique:true,
        required:true
    },
    description:
    {
        type:String
    },
    street_address:
    {
        type:String,
        required:true
    },
    city:
    {
        type:String,
        required:true
    },
    state:
    {
        type:String,
        required:true
    },
    pincode:
    {
        type:String
    },
    phone:
    {
        type:String
    },
    rating:
    {
        type:Number
    },
    images:
    {
        type:String,
        required:true
    },
    noOfRatings:
    {
        type:Number,
        default:0
    },
    closesAt:
    {
        type:String//give in 24hr format
    },
    menu:
    {
        type:Schema.Types.ObjectId,
        ref:"Menu"
    }
})
module.exports=mongoose.model('Bakery',BakerySchema);