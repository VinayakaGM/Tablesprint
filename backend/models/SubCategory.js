import mongoose from 'mongoose'


const subCategorySchema = new mongoose.Schema({
  subCategoryName: {
    type: String,
    required: true,
    trim: true
  },
  // categoryName: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
    required: true
  },
  image:{
    type: String,
    required: true
  },
  sequence: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const SubCategory = mongoose.model('SubCategory', subCategorySchema)

export default SubCategory
