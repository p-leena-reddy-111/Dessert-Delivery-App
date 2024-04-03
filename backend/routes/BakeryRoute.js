const express=require('express');
const router=express.Router();

const {verifyAdmin,verifyUser}=require('../middlewares/auth.js')
const {createBakery,updateBakery,deleteBakery,getBakery,getMenu, getBakeries}=require('../controllers/bakeries.js');

router.post('/',verifyAdmin,createBakery);

router.put('/:id',verifyAdmin,updateBakery);

router.delete("/:id",verifyAdmin,deleteBakery);

router.get("/:id",getBakery);

router.get("/menu/:id",getMenu);

router.get("/",getBakeries);

module.exports=router;