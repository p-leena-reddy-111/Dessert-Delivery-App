const router=require("express").Router()
const Razorpay=require("razorpay");
const crypto=require("crypto");
const { error } = require("console");

router.post("/orders",async(req,res)=>{
    try{

        const instance=new Razorpay({
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_KEY_SECRET
        })

        const options={
            amount:req.body.amount*100,
            currency:"INR",
            receipt:crypto.randomBytes(20).toString('hex'),
        };

        instance.orders.create(options,(error,order)=>{
            if(error)
            {
                console.log(error);
                return res.status(500).json({message:"Something went wrong!"})
            }
            res.status(200).json({data:order});
        })
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Internal Server Error!"})
    }
})

//payment verify

router.post("/verify",async(req,res)=>{
    try{

        console.log("Entered Before");

        const 
        { 
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        }=req.body;

        console.log("Entered After");


        const sign=razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSign=crypto.createHmac("sha256",process.env.RAZORPAY_KEY_SECRET).update(sign.toString()).digest('hex');
        if(razorpay_signature===expectedSign)
        {
            return res.status(200).json({message:"Payment verified successfully"});
        }
        else{
            return res.status(400).json({message:"Invalid  Signature sent!"});
        }

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Internal Server Error!"})
    }
})

module.exports=router;