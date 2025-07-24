import * as productService from '../services/product.service.js';

export const obtenerProductos = async (req, res) => {
  const productos = await productService.getAllProducts();
  res.json(productos);
};

export const crearProducto = async (req, res) => {
  const nuevoProducto = await productService.createProduct(req.body);
  res.status(201).json(nuevoProducto);
};

export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  const eliminado = await productService.deleteProduct(id);
  if (!eliminado) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json({ mensaje: 'Producto eliminado correctamente' });
};
