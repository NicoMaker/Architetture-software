import express from "express";
import os from "os";
import { Queue } from "bullmq";
import redisConnection from "./config/redis";

const port = 3000;
const id = process.env.BACKEND_ID || "backend un-known";

// code di BullMQ tramite Redis
const mainQueue = new queue("main-queue", { connection: redisConnection });
const mainworker = new worker(
  "main-worker",
  async (job) => {
    console.log(`start job ${job.id} on backend ${id}`);
  },
  { connection: redisConnection }
);

mainworker.on ("completed", (job) => {
  console.log(`job ${job.id} completed job on backend ${id}`);
});

mainworker.on ("failed", (job, err) => {
  console.log(`job ${job.id} failed job on backend ${id} on error ${err}`);
});

// creo app express
const app = express();

app.use((req, res, next) => {
  res.setHeader("X-Backend-ID", id);
  next();
});

// creo endpoint ping
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/prodotti", (req, res) => {
  const prodotti = [
    { id: 1, nome: "Prodotto 1", prezzo: 10.0 },
    { id: 2, nome: "Prodotto 2", prezzo: 20.0 },
    { id: 3, nome: "Prodotto 3", prezzo: 30.0 },
  ];
  res.json(prodotti);
});

app.get("/prodotti/:id", (req, res) => {
  res.json({ id: 1, nome: "Prodotto 1", prezzo: 10.0 });
});

app.get("/heavy", (req, res) => {
  let count = 0;
  for (let i = 0; i < 500_000; i++) {
    count += i;
  }
  res.send(`Count: ${count}`);
});

// endpoint per le code

app.post("/job-for-all", async (req, res) => {
  const job = await mainQueue.add("job", { name: req.body.name || "default" });
  res.json({ jobId: job.id });
});

// avvio server
app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port} - PID: ${
      process.pid
    } - CPUs: ${os.cpus().length}`
  );
});
