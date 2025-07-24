# Entrega final Backend Node.js con Firebase

GET - pública
POST- requiere token (protegido)
DELETE- requiere token (protegido)

Para obtener el token:

POST/auth/login
{
  "user": "admin",
  "password": "admin123"
}

Se utilizó POSTMAN para todas las pruebas.

El archivo firebase-key.json no esta en git.ignore debido a que es un entorno de pruebas educativo. En un contexto profesional, no se debe subir.
