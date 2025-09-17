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

- gestire un aumento del numero di utenti o richieste,
- elaborare più dati,
- mantenere alte le prestazioni **senza blocchi o rallentamenti**.

In altre parole, se oggi il tuo sito gestisce 100 utenti contemporanei e domani deve gestirne 10.000, un sistema scalabile deve riuscirci senza dover essere riscritto da zero.

## 🔹 Tipi di scalabilità

1. **Scalabilità verticale (scale up)**

   - Aggiungi più risorse al **singolo server** (più RAM, CPU più potente, dischi più veloci).
   - Limite: il server non può crescere all’infinito.

2. **Scalabilità orizzontale (scale out)**

   - Aggiungi più server che lavorano insieme (cluster, cloud, container).
   - Puoi gestire teoricamente utenti infiniti, distribuendo il carico.

---

## 🔹 Aggiornamento in tempo reale

Per avere un sistema che si aggiorna **in tempo reale** (es. chat, dashboard dati, notifiche live), si usano tecnologie come:

- **WebSocket** → connessione continua tra client e server (es. usato in chat, giochi online, trading).
- **Server-Sent Events (SSE)** → il server invia aggiornamenti in streaming al browser.
- **Polling / Long Polling** → il client chiede continuamente nuovi dati (meno efficiente).

Esempio: se stai gestendo una **dashboard con dati di sensori IoT**, con WebSocket ogni aggiornamento arriva all’utente senza ricaricare la pagina.

## 🔹 Gestione grandi quantità di dati

Un sito scalabile deve saper gestire anche **Big Data**. Alcune pratiche comuni:

- **Database distribuiti** (MongoDB, Cassandra, PostgreSQL cluster) → i dati non stanno in un solo server, ma vengono distribuiti.
- **Caching** (Redis, Memcached) → memorizzi i dati più richiesti per evitare calcoli continui.
- **CDN (Content Delivery Network)** → distribuisci contenuti statici (immagini, video, file) su server in tutto il mondo.
- **Microservizi** → invece di avere un’unica app enorme (monolite), dividi in più servizi indipendenti (es. autenticazione, gestione ordini, notifiche).

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
- Orizzontale -> aggiungi server, cluster -> gestisco in automatico e risponde con il metodo più veloce

## Resiliente

Capacità di riprendersi velocemente deve essere full-tollerence disponibile anche a errori quando non va -> funziona su altro server senza bloccare appp e deve essere funzionante anche in caso di crash

- Monoliti -> più app -> più server -> cambio una cosa devo cambiare tutto l'app

- Applicazione 3 modo

  - Dati
  - Business
  - Presentazione

## 🔹 Definizione di Microservizi

I **microservizi** sono un’architettura software in cui un’applicazione non è costruita come un **monolite unico**, ma come un insieme di **piccoli servizi indipendenti**, ognuno con una funzione specifica. 
Diversi strumenti che sono collegsti tra di loro e fanno applicativo 

👉 Ogni microservizio:

* è **autonomo** (può essere sviluppato, aggiornato e distribuito indipendentemente dagli altri),
* ha il proprio **database** o la propria gestione dei dati,
* comunica con gli altri microservizi tramite **API** (spesso REST o gRPC, a volte con sistemi di messaggistica come RabbitMQ o Kafka).


## 🔹 Caratteristiche principali

* **Indipendenza** → se devo aggiornare il sistema di pagamento, lavoro solo sul microservizio “pagamenti”, senza toccare login o catalogo prodotti.
* **Scalabilità mirata** → posso scalare solo il microservizio che riceve più traffico (es. “ricerca”), senza sprecare risorse sugli altri.
* **Affidabilità** → se un microservizio cade, il resto del sistema continua a funzionare.
* **Team specializzati** → ogni team può lavorare su un microservizio diverso (es. un team su “notifiche”, un altro su “autenticazione”).

## 🔹 Esempio pratico

Immagina un sito di e-commerce:

* **Microservizio Utenti** → gestisce registrazione/login.
* **Microservizio Prodotti** → gestisce catalogo e magazzino.
* **Microservizio Pagamenti** → gestisce ordini e transazioni.
* **Microservizio Notifiche** → invia email o SMS.

Se devo modificare il metodo di pagamento, cambio solo il microservizio “Pagamenti”, senza toccare gli altri.

## 🔹 Vantaggi rispetto al monolite

* ✅ Aggiornamenti più rapidi.
* ✅ Scalabilità mirata.
* ✅ Resilienza maggiore.
* ✅ Tecnologie miste (ogni microservizio può essere scritto in un linguaggio diverso).

## Applicazione Robusta
