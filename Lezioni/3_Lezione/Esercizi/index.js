import express from 'express';

const app = express();
const PORT = 3000;

// Lista prodotti fissa (puoi ampliarla)
const prodotti = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  nome: `Prodotto ${i + 1}`,
  prezzo: (Math.random() * 100).toFixed(2) + " €",
  categoria: ["Elettronica", "Casa", "Giochi", "Sport", "Cibo"][i % 5],
  disponibile: Math.random() > 0.2 // 80% di disponibilità
}));

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

app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
