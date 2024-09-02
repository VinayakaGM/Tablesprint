import SubCategory from "../models/SubCategory.js";

export const createSubCategory = async (req, res) => {
  try {
    const subcategory = new SubCategory({
      subCategoryName: req.body.subCategoryName,
      category: req.body.category,
      status: req.body.status,
      image: req.file.path,
      sequence: req.body.sequence,
    });
    await subcategory.save();
    res.status(201).json(subcategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSubCategories = async (req, res) => {
  try {
    const subcategories = await SubCategory.find().populate(
      "category status sequence"
    );
    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSubCategory = async (req, res) => {
  try {
    const subcategory = await SubCategory.findById(req.params.id).populate(
      "category status"
    );
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    res.json(subcategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSubCategory = async (req, res) => {
  try {
    const subcategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      {
        category: req.body.category,
        subCategoryName: req.body.subCategoryName,
        status: req.body.status,
        image: req.file.path,
        sequence: req.body.sequence,
      },
      { new: true, runValidators: true }
    );
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    res.json(subcategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSubCategory = async (req, res) => {
  try {
    const subcategory = await SubCategory.findByIdAndDelete(req.params.id);
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    res.json({ message: "Subcategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
