import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    if (!name || !description || !price || !category) {
      res.status(400).json({
        error: 'Request body does not contain required parameters'
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients) : []
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
}