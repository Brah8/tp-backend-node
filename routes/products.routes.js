
import { Router } from 'express';
import { verificarToken } from '../middlewares/auth.middleware.js';
import {
  obtenerProductos,
  crearProducto,
  eliminarProducto
} from '../controllers/product.controller.js';

const router = Router();

router.get('/', obtenerProductos);
router.post('/', verificarToken, crearProducto);
router.delete('/:id', verificarToken, eliminarProducto);

export default router;
