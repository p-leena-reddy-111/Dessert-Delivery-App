const express=require('express');
const mongoose=require('mongoose');
const Bakery=require('../models/bakery.js');
const menu=require("../models/menu.js");


const createBakery = async(req,res,next)=>{
    const newBakery=new Bakery(req.body);
    try
    {
        const savedBakery=await newBakery.save();
        return res.status(201).json(savedBakery);
    }
    catch(err)
    {
        console.log(err);
        return res.status(400).send("Unable to add the Bakery");
    }
}

const updateBakery=async (req,res,next)=>{
    try
    {
        const updatedBakery=await Bakery.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        return res.status(200).json(updatedBakery);
    }
    catch(err)
    {
        return res.status(400).send("Unable to update the Bakery");
    }
}

const deleteBakery=async(req,res,next)=>
{
    try
    {
        await Bakery.findByIdAndDelete(req.params.id);
        res.status(200).json("Bakery has been deleted");
    }
    catch(err)
    {
        return res.status(400).send("Unable to delete the Bakery");
    }

}


const getBakery=async(req,res,next)=>{
    try
    {
        const bakery = await Bakery.findById(req.params.id).populate({ path: 'menu'});
        return res.status(200).json(bakery);
    }
    catch(err)
    {
        console.log(err);
        return res.status(404).send("Unable to get the Bakery");
    }
}

const getMenu=async(req,res,next)=>{
    try
    {
        const Bakery = await Bakery.findById(req.params.id).populate({ path: 'menu' });
        return res.status(200).json(Bakery.menu);
    }
    catch(err)
    {
        console.log(err);
        return res.status(400).send("Unable to get the Menu");
    }
}

const getBakeries=async(req,res,next)=>{
    try
    {
       /* const Bakerys=await Bakery.find({},{"name": 1,"_id":0});*/
        const Bakeries=await Bakery.find();
        return res.status(200).json(Bakeries);
    }
    catch(err)
    {
        return res.status(400).send("Cannot get the Bakery");
    }
}

module.exports={createBakery,updateBakery,deleteBakery,getBakery,getBakeries,getMenu};