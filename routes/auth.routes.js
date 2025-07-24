import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

// Claves de ejemplo
const USERNAME = 'admin';
const PASSWORD = 'admin123';

router.post('/login', (req, res) => {
  console.log(req.body); // Postman pruebas

  const { user, password } = req.body;

  if (user === USERNAME && password === PASSWORD) {
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }

  return res.status(401).json({ error: 'Credenciales inválidas' });
});


export default router;
