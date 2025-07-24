import * as productModel from '../models/product.model.js';

export const getAllProducts = async () => {
  return await productModel.getAllProductos();
};

export const createProduct = async (data) => {
  return await productModel.createProducto(data);
};

export const deleteProduct = async (id) => {
  return await productModel.deleteProducto(id);
};
