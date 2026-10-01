import Product from "../models/product.model.js";


// CREATE PRODUCT

export const createProduct = async (req, res) => {

    try {

        const {
            name,
            description,
            price,
            category,
            image,
            stock
        } = req.body;


        if (
            !name ||
            !description ||
            !price ||
            !category ||
            !image
        ) {

            return res.status(400).json({
                message: "All required fields are required"
            });

        }


        const product = await Product.create({
            name,
            description,
            price,
            category,
            image,
            stock: stock || 0
        });


        res.status(201).json({
            message: "Product created successfully",
            product
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });

    }

};


// GET ALL PRODUCTS

export const getProducts = async (req, res) => {

    try {

        const products = await Product.find()
            .sort({ createdAt: -1 });


        res.status(200).json({
            products
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });

    }

};


// GET SINGLE PRODUCT

export const getProductById = async (req, res) => {

    try {

        const product = await Product.findById(
            req.params.id
        );


        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });

        }


        res.status(200).json({
            product
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });

    }

};


// UPDATE PRODUCT

export const updateProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );


        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });

        }


        res.status(200).json({
            message: "Product updated successfully",
            product
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });

    }

};


// DELETE PRODUCT

export const deleteProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndDelete(
            req.params.id
        );


        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });

        }


        res.status(200).json({
            message: "Product deleted successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });

    }

};
