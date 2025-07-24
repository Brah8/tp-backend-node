import { db } from '../firebase.js';

const productosRef = db.collection('productos');

export const getAllProductos = async () => {
  const snapshot = await productosRef.get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createProducto = async (productoData) => {
  const nuevoDoc = await productosRef.add(productoData);
  return { id: nuevoDoc.id, ...productoData };
};

export const deleteProducto = async (id) => {
  const producto = await productosRef.doc(id).get();
  if (!producto.exists) return false;
  await productosRef.doc(id).delete();
  return true;
};
