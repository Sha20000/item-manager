const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    // TODO 5 (extension): add new field(s) here
    category:{ type: String, enum: ['Electronics', 'Books', 'Clothing', 'Other'], default: 'Other' },
    quantity:{ type: Number, default: 0, min: 0 },
    price:{ type: Number, default: 0, min: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);
