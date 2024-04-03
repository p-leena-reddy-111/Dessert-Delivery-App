const Menu=require('../models/menu.js');
const Bakery=require('../models/bakery.js');

const createMenu=async(req, res,next) => {
    try {
      const { bakery_id, dessert_items } = req.body; 
  
      const newMenu = new Menu({
        bakery_id,
        dessert_items,
      });
  
      const savedMenu = await newMenu.save();

      //console.log(req.body.bakery_id)

      const bakery = await Bakery.findById(bakery_id);
      if (!bakery) 
      {
        return res.status(404).json({ message: 'Bakery not found' });
      }

      bakery.menu = savedMenu._id;
      await bakery.save();
      res.status(201).json(savedMenu); 
    } 
    catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  

const updateMenu= async(req, res,next) => {
    try 
    {
      const id = req.params.id;
      const updates = req.body; 
  
      const updatedMenu = await Menu.findByIdAndUpdate(id, updates, { new: true }); 
      
      if (!updatedMenu) {
        return res.status(404).json({ message: 'Menu not found' });
      }
      const BakeryId= updatedMenu.Bakery_id.toString() ;
      const updatedBakery = await Bakery.findById(BakeryId);
      if (!updatedBakery) 
      {
        return res.status(404).json({ message: 'Bakery not found' });
      }
      updatedBakery.menu = updatedMenu._id;
      await updatedBakery.save();
      res.json(updatedMenu);

    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

module.exports={createMenu,updateMenu};
  