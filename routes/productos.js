const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Productos</title>

      <!-- Tailwind CSS CDN -->
      <script src="https://cdn.tailwindcss.com"></script>

      <!-- Animate.css CDN -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

    </head>
    <body class="bg-gradient-to-br from-green-100 via-white to-teal-100 min-h-screen flex items-center justify-center">

      <div class="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-xl text-center animate__animated animate__fadeIn">
        <h1 class="text-3xl font-bold text-teal-700 mb-6 animate__animated animate__fadeInDown">
          Lista de Productos
        </h1>
        <ul class="space-y-3 text-lg text-gray-700">
          <li class="p-3 bg-gray-50 rounded-md hover:bg-teal-100 transition animate__animated animate__fadeInUp animate__delay-1s">
            📦 Producto A
          </li>
          <li class="p-3 bg-gray-50 rounded-md hover:bg-teal-100 transition animate__animated animate__fadeInUp animate__delay-2s">
            📦 Producto B
          </li>
          <li class="p-3 bg-gray-50 rounded-md hover:bg-teal-100 transition animate__animated animate__fadeInUp animate__delay-3s">
            📦 Producto C
          </li>
        </ul>
      </div>

    </body>
    </html>
  `);
});

module.exports = router;
