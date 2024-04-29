const Product = require('../models/product.model');

const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json({ data: product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json({ data: product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postProduct = async (req, res) => {
    try {
        console.log(req.body);
        const product = await Product.create(req.body);
        res.status(200).json({ data: product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const putProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json({ data: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ data: product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct,
};
