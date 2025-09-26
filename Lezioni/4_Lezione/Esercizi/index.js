import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json()); // per leggere il body in JSON

// Lista prodotti (inizialmente vuota)
let prodotti = [];
let nextId = 1;

// /ping -> pong
app.get('/ping', (req, res) => {
  res.send('pong');
});

// /prodotti -> restituisce tutta la lista
app.get('/prodotti', (req, res) => {
  res.json(prodotti);
});

// /prodotto/:id -> restituisce il prodotto con quell'id
app.get('/prodotto/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: 'Devi specificare un id valido' });
  }

  const prodotto = prodotti.find(p => p.id === id);

  if (!prodotto) {
    return res.status(404).json({ error: `Il prodotto con id ${id} non esiste` });
  }

  res.json(prodotto);
});

// POST /prodotto -> aggiunge un nuovo prodotto con id generato
app.post('/prodotto', (req, res) => {
  const { nome, prezzo, categoria, disponibile } = req.body;

  if (!nome || !prezzo || !categoria) {
    return res.status(400).json({ error: 'Campi obbligatori: nome, prezzo, categoria' });
  }

  const nuovoProdotto = {
    id: nextId++,
    nome,
    prezzo,
    categoria,
    disponibile: disponibile ?? true // default true se non specificato
  };

  prodotti.push(nuovoProdotto);
  res.status(201).json(nuovoProdotto);
});

app.listen(PORT, () => {
  console.log(`✅ Server in ascolto su http://localhost:${PORT}`);
});
