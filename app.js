const express = require('express');
const app = express();
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

app.use(express.static('public'));
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
