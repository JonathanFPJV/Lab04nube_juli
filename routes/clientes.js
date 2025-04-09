const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Clientes</title>

      <!-- Tailwind CSS -->
      <script src="https://cdn.tailwindcss.com"></script>

      <!-- Animate.css -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

    </head>
    <body class="bg-gradient-to-tr from-sky-100 via-white to-indigo-100 min-h-screen flex items-center justify-center">

      <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl text-center animate__animated animate__fadeInDown">
        <h1 class="text-3xl font-bold text-indigo-700 mb-4 animate__animated animate__bounceIn">
          Lista de Clientes
        </h1>
        <ul class="text-lg text-gray-700 space-y-2">
          <li class="hover:text-indigo-500 transition-all duration-200">👤 Cliente 1</li>
          <li class="hover:text-indigo-500 transition-all duration-200">👤 Cliente 2</li>
          <li class="hover:text-indigo-500 transition-all duration-200">👤 Cliente 3</li>
        </ul>
      </div>

    </body>
    </html>
  `);
});

module.exports = router;
