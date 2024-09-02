import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
  const category = new Category({
    categoryName: req.body.categoryName,
    image: req.file?.path,
    sequence: req.body.sequence,
    status: req.body.status,
  });

  try { 
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort("sequence");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category == null) {
      return res.status(404).json({ message: "Category not found" });
    }

    if (req.body.categoryName != null) {
      category.categoryName = req.body.categoryName;
    }
    if (req.body.image != null) {
      category.image = req.file.path;
    }
    if (req.body.sequence != null) {
      category.sequence = req.body.sequence;
    }


    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
