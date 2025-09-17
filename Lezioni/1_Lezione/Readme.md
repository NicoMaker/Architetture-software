- [Vai al file Principale](../../README.md)

# 1 Lezione 17 settembre 2025

è come i software comunicano tra di loro -> attraverso che canali 

Architetture software -> ambiente dove viene sviluppata e per cosa e perchè ambiente di sviluppo 
Server -> deve accedere a un db 
con immagini -> file system 

React -> solo frontend 

## COme si cambia inforazione tra Backend e F<rontend

Attraverso API -> legge come JSON 
COndivido con team -> come sviluppare un software 

Capire come fare per lavorare con il team come concetton un backend e con il frontend

Frontend -> layout non APPI -> frontend gestisce grafica 


## 🔹 Cos’è la scalabilità

La **scalabilità** è la capacità di un sistema (sito web, applicazione, piattaforma) di:

* gestire un aumento del numero di utenti o richieste,
* elaborare più dati,
* mantenere alte le prestazioni **senza blocchi o rallentamenti**.

In altre parole, se oggi il tuo sito gestisce 100 utenti contemporanei e domani deve gestirne 10.000, un sistema scalabile deve riuscirci senza dover essere riscritto da zero.

## 🔹 Tipi di scalabilità

1. **Scalabilità verticale (scale up)**

   * Aggiungi più risorse al **singolo server** (più RAM, CPU più potente, dischi più veloci).
   * Limite: il server non può crescere all’infinito.

2. **Scalabilità orizzontale (scale out)**

   * Aggiungi più server che lavorano insieme (cluster, cloud, container).
   * Puoi gestire teoricamente utenti infiniti, distribuendo il carico.

---

## 🔹 Aggiornamento in tempo reale

Per avere un sistema che si aggiorna **in tempo reale** (es. chat, dashboard dati, notifiche live), si usano tecnologie come:

* **WebSocket** → connessione continua tra client e server (es. usato in chat, giochi online, trading).
* **Server-Sent Events (SSE)** → il server invia aggiornamenti in streaming al browser.
* **Polling / Long Polling** → il client chiede continuamente nuovi dati (meno efficiente).

Esempio: se stai gestendo una **dashboard con dati di sensori IoT**, con WebSocket ogni aggiornamento arriva all’utente senza ricaricare la pagina.

## 🔹 Gestione grandi quantità di dati

Un sito scalabile deve saper gestire anche **Big Data**. Alcune pratiche comuni:

* **Database distribuiti** (MongoDB, Cassandra, PostgreSQL cluster) → i dati non stanno in un solo server, ma vengono distribuiti.
* **Caching** (Redis, Memcached) → memorizzi i dati più richiesti per evitare calcoli continui.
* **CDN (Content Delivery Network)** → distribuisci contenuti statici (immagini, video, file) su server in tutto il mondo.
* **Microservizi** → invece di avere un’unica app enorme (monolite), dividi in più servizi indipendenti (es. autenticazione, gestione ordini, notifiche).


## 🔹 Schema tipico di un sistema scalabile

1. **Frontend (utente)** → sito web o app mobile.
2. **Backend (API)** → server con logica di business.
3. **Database distribuito** → per salvare dati.
4. **Load Balancer** → distribuisce il carico su più server.
5. **Cache** → per risposte veloci.
6. **WebSocket / SSE** → per aggiornamenti in tempo reale.
7. **Cloud (AWS, Azure, GCP)** → per scalare automaticamente in base al traffico.



## Scalabilità

- Verticale -> aggiungi RAM, CPU, dischi
- Orizzontale -> aggiungi server, cluster