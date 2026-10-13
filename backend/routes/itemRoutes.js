const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create item
router.post('/', async (req, res) => {
  try {
    const { name, description,category,quantity,price } = req.body;
    const item = await Item.create({ name, description,category,quantity,price });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// TODO 2: PUT /:id  - update an item, return the updated document (404 if not found)
router.put('/:id', async (req,res) => {
  try{
    const { name, description,category,quantity,price } = req.body;
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { name, description,category,quantity,price },
      { new: true, runValidators: true }
    );


    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);

  }catch (err){
    res.status(400).json({ message: err.message });

  }
})

// TODO 3: DELETE /:id - delete an item (404 if not found)

router.delete('/:id', async (req, res) => {
  try{

    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });


  }catch (err){
    res.status(400).json({ message: err.message });
  }
})

module.exports = router;
