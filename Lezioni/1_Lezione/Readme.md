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

Sequenza di informazioni -> che ognuno ha la sua funzione specifica -> che comunicano tra di loro -> evento scatena evento che da funzionalià -> guidato da eventi

👉 Ogni microservizio:

- è **autonomo** (può essere sviluppato, aggiornato e distribuito indipendentemente dagli altri),
- ha il proprio **database** o la propria gestione dei dati,
- comunica con gli altri microservizi tramite **API** (spesso REST o gRPC, a volte con sistemi di messaggistica come RabbitMQ o Kafka).

## 🔹 Caratteristiche principali

- **Indipendenza** → se devo aggiornare il sistema di pagamento, lavoro solo sul microservizio “pagamenti”, senza toccare login o catalogo prodotti.
- **Scalabilità mirata** → posso scalare solo il microservizio che riceve più traffico (es. “ricerca”), senza sprecare risorse sugli altri.
- **Affidabilità** → se un microservizio cade, il resto del sistema continua a funzionare.
- **Team specializzati** → ogni team può lavorare su un microservizio diverso (es. un team su “notifiche”, un altro su “autenticazione”).

- Più team -> più servizi -> più costi e più strumenti e attività
  - Diversi strumenti -> possono avere anche tecnologie diverse

## 🔹 Esempio pratico

Immagina un sito di e-commerce:

- **Microservizio Utenti** → gestisce registrazione/login.
- **Microservizio Prodotti** → gestisce catalogo e magazzino.
- **Microservizio Pagamenti** → gestisce ordini e transazioni.
- **Microservizio Notifiche** → invia email o SMS.

Se devo modificare il metodo di pagamento, cambio solo il microservizio “Pagamenti”, senza toccare gli altri.

## 🔹 Vantaggi rispetto al monolite

- ✅ Aggiornamenti più rapidi.
- ✅ Scalabilità mirata.
- ✅ Resilienza maggiore.
- ✅ Tecnologie miste (ogni microservizio può essere scritto in un linguaggio diverso).

## HTTP

Hyber Text Transfer Protocol -> protocolo di comunicazione tra client e server per il web per tasportare pagine web e dati

- Header
  - Content-type
  - cookie

## Metodi HTTP

### 🔹 **GET**

- **Definizione:** Recupera dati dal server (solo lettura).
- **Path (esempio):**

  - `GET /users` → lista di tutti gli utenti
  - `GET /users/1` → dettaglio utente con id=1

- **Aggiorna?** ❌ No

### 🔹 **POST**

- **Definizione:** Crea una nuova risorsa.
- **Path (esempio):**

  - `POST /users` → crea un nuovo utente

- **Aggiorna?** ✔️ Sì, aggiunge

### 🔹 **PUT**

- **Definizione:** Aggiorna **completamente** una risorsa (sostituisce tutti i campi).
- **Path (esempio):**

  - `PUT /users/1` → aggiorna _tutti_ i dati dell’utente con id=1

- **Aggiorna?** ✔️ Sì, ma con sostituzione totale

### 🔹 **PATCH**

- **Definizione:** Aggiorna **parzialmente** una risorsa (solo alcuni campi).
- **Path (esempio):**

  - `PATCH /users/1` → aggiorna _solo i campi specificati_ dell’utente con id=1

- **Aggiorna?** ✔️ Sì, ma solo parziale

### 🔹 **DELETE**

- **Definizione:** Elimina una risorsa.
- **Path (esempio):**

  - `DELETE /users/1` → elimina l’utente con id=1

- **Aggiorna?** ✔️ Sì, rimuove

📌 **Riassunto tabella**

| Metodo     | Definizione                          | Path esempio         | Aggiorna?                     |
| ---------- | ------------------------------------ | -------------------- | ----------------------------- |
| **GET**    | Legge i dati (read-only)             | `/users`, `/users/1` | ❌                            |
| **POST**   | Crea una nuova risorsa               | `/users`             | ✔️ (aggiunge)                 |
| **PUT**    | Aggiorna **tutta** la risorsa        | `/users/1`           | ✔️ (sostituisce tutto)        |
| **PATCH**  | Aggiorna **parzialmente** la risorsa | `/users/1`           | ✔️ (modifica campi specifici) |
| **DELETE** | Elimina una risorsa                  | `/users/1`           | ✔️ (cancella)                 |

## LoadBalancer

Bilancia il carico quando i server sono troppo carichi -> con algoritmi
Dei loadbalancer -> misurano e gestiscono il carico.

## 🔹 **Cos’è un Reverse Proxy**

Un **reverse proxy** è un server che sta “in mezzo” tra i client (es. browser, app frontend) e i server backend (API, database, microservizi).
Riceve le richieste dal client e le **inoltra al server giusto**, gestendo il traffico e spesso aggiungendo funzionalità utili.

## 🔹 **Funzioni principali di un Reverse Proxy**

- 🛠 **Integrazione frontend-backend** → permette al frontend di parlare con il backend senza problemi di porte, CORS o sicurezza.
- 🔒 **Sicurezza** → nasconde i server backend, filtra richieste malevole, gestisce certificati HTTPS.
- ⚡ **Load balancing** → distribuisce il carico tra più server backend per migliorare le prestazioni.
- 📦 **Caching** → può salvare in memoria alcune risposte per rispondere più velocemente.
- 🚪 **Single entry point** → il client fa sempre richiesta a un unico indirizzo (es. `https://api.miosito.it`) e il reverse proxy smista al backend corretto.

---

## 🔹 Schema semplice

```
[ Browser / Frontend ] ---> [ Reverse Proxy ] ---> [ Backend 1 ]
                                             ---> [ Backend 2 ]
                                             ---> [ Backend N ]
```

## CDN

I **CDN (Content Delivery Network)** hanno proprio lo scopo di trasferire **meno dati possibili** nel modo più efficiente.

Ecco perché:

1. **Distribuzione geografica**
   I file statici (immagini, CSS, JS, video, ecc.) vengono copiati su più server sparsi nel mondo. L’utente scarica i contenuti dal server più vicino, riducendo tempi e quantità di trasferimento.

2. **Caching**
   Una volta scaricato un file, il browser lo conserva in cache. Se il file non cambia, non viene riscaricato, ma riutilizzato. Questo significa meno dati trasferiti ad ogni visita.

3. **Compressione automatica**
   Molti CDN applicano **gzip o Brotli** ai file testuali (HTML, CSS, JS), riducendo la dimensione dei dati trasferiti.

4. **Ottimizzazione immagini e video**
   Alcuni CDN adattano automaticamente le immagini al dispositivo (risoluzione, formato WebP/AVIF), trasferendo solo i byte realmente necessari.

5. **Minificazione e concatenazione**
   Possono fornire versioni **minificate** di CSS e JS, eliminando spazi e caratteri inutili, così che il browser scarichi meno dati.

CDN -> crei da server -> ma senza header e cookie -> tempo di cache alto -> peschi CDN più veloce a lui e server più veloce degli altri

CDN -> calcoli con lapda -> più veloce a utente finale -> distribuito su tutto e fornisce header -> maantenere dati cache browser -> non scarichi ma solo dati nuovi

## 📌 Perché utili i microservizi?

- **Posso utilizzare il codice in più pezzi**
  → riutilizzabilità e modularità.

- **Se non funziona uno, rifai solo quello, non tutto**
  → isolamento dei problemi, manutenzione più semplice.

- **Più risorse → più tempo**
  → ogni microservizio può essere scalato indipendentemente in base alle necessità.

- **Più difficile da ristrutturare (se monolitico)**
  → i microservizi evitano di dover riscrivere l’intera applicazione.

- **Design curato in base a singoli componenti**
  → progettazione modulare, ogni parte ha un compito chiaro.

- **Scelta delle tecnologie più adatte**
  → ogni microservizio può essere sviluppato con linguaggi diversi.

- **Aggiornamenti rapidi e indipendenti**
  → si possono fare release più veloci senza bloccare tutto.

- **Capacità di scalling**
  → si possono aggiungere server in base alle necessità, aggiungi macchine o togli server in base alle necessità.

- **Monitoraggio dati**
  → si possono monitorare in tempo reale le risorse e le prestazioni -> e capire quanto usi e costi.

## 🔗 Come comunicare con i microservizi

I microservizi possono comunicare principalmente in due modi: **code/eventi** o **sessioni/sincrono**.

### **1. Comunicazione tramite code (asincrona)**

- Un microservizio invia un **messaggio** a una coda (es. RabbitMQ, Kafka).
- Il microservizio destinatario **riceve il messaggio** e lo elabora in base alle opzioni richieste.
- **Operazioni asincrone**: il mittente non deve aspettare che il destinatario finisca subito.
- **Gestione dei tempi**: se il servizio non è disponibile, il messaggio resta nella coda fino a elaborazione.
- **Configurazione necessaria**: devi impostare e gestire l’ambiente di messaggistica.

### **2. Comunicazione tramite sessioni (sincrona)**

- Il microservizio mittente **invoca direttamente** il servizio destinatario tramite API (es. REST, gRPC).
- Il mittente **aspetta la risposta** (operazione sincrona).
- Adatto per operazioni **immediate** o quando serve una conferma rapida.
- **Svantaggio**: se il destinatario è lento o non disponibile, il mittente rimane bloccato.

* **Sessioni**: implementatate e gestite

### 🔑 Sintesi dei vantaggi/uso:

| Tipo         | Quando usarlo               | Pro                                      | Contro                                |
| ------------ | --------------------------- | ---------------------------------------- | ------------------------------------- |
| Code/eventi  | Operazioni asincrone, batch | Non blocca, resiliente, gestione ritardi | Configurazione più complessa          |
| Sessioni/API | Operazioni immediate        | Semplice, risposta diretta               | Bloccante se il servizio non risponde |

## 🔐 Autenticazione e logout

I microservizi e le applicazioni web richiedono **autenticazione** per garantire accesso sicuro e **logout** per proteggere le sessioni.

### **1. Autenticazione con password**

- **Funzionamento:** l’utente inserisce **username e password** per accedere.
- **Gestione sicurezza:** le password devono essere **hashate e salate** per evitare furti.
- **Sessione:** l’accesso viene gestito tramite **sessioni** o **token**.
- **Logout:** chiude la sessione, impedendo accessi non autorizzati.
- **Pro:** semplice da implementare, comune.
- **Contro:** vulnerabile a furto di password o attacchi phishing.

### **2. Autenticazione con chiavette o app dedicate**

- **Funzionamento:** si usa un **dispositivo fisico** (chiavetta USB tipo YubiKey) o un’**app di autenticazione** (OTP, QR code).
- **2FA:** spesso combinata con la password (**autenticazione a due fattori**) per maggiore sicurezza.
- **Sessione:** l’accesso richiede il dispositivo/app; logout funziona come per le password.
- **Pro:** molto sicuro, protegge anche se la password viene rubata.
- **Contro:** più complesso da gestire, serve un dispositivo aggiuntivo.

### 🔑 Differenze principali tra i due metodi

| Caratteristica               | Password         | Chiavetta/App (2FA)                                         |
| ---------------------------- | ---------------- | ----------------------------------------------------------- |
| Tipo di autenticazione       | Solo credenziali | Credenziali + dispositivo/app                               |
| Sicurezza                    | Base             | Alta                                                        |
| Complessità gestione         | Bassa            | Alta                                                        |
| Protezione da furto password | No               | Sì                                                          |
| Logout                       | Chiude sessione  | Chiude sessione, richiede nuovo accesso con dispositivo/app |

### ✅ Sintesi

- **Password:** semplice ma meno sicura.
- **Chiavette/App:** più sicura, richiede dispositivo aggiuntivo, ideale per dati sensibili.
- **Logout:** fondamentale in entrambi i casi per proteggere la sessione.

### **Sessioni e Autenticazione**

1. **Stateless Authentication (Autenticazione senza stato)**

   - Il server **non memorizza alcuna informazione sull'utente** tra le richieste.
   - Ogni richiesta deve contenere **tutte le informazioni necessarie per autenticare l’utente**.
   - Vantaggi: scalabilità più facile, meno carico sul server.
   - Svantaggi: gestione dei token e sicurezza possono diventare più complesse.

2. **JWT Token (JSON Web Token)**

   - Un **token crittografato** che contiene informazioni sull’utente (payload) e una firma per verificarne l’autenticità.
   - Utilizzato principalmente nelle **autenticazioni stateless**.
   - Ogni richiesta invia il token, che il server verifica senza dover consultare il database delle sessioni.
   - Esempio di uso: login -> ricevo JWT -> lo invio nell’header `Authorization: Bearer <token>` ad ogni richiesta.

3. **Session Stores distribuiti**

   - Quando si vuole mantenere lo stato della sessione, ma avere più server che gestiscono le richieste, si usa un **archivio esterno** (es. Redis, Memcached).
   - Il server salva la sessione dell’utente nello store distribuito e legge da lì ogni volta che serve.
   - Utile in ambienti scalabili e clusterizzati.

4. **OAuth e SSO (Single Sign-On)**

   - **OAuth**: protocollo per consentire a un’applicazione di accedere a risorse su un altro servizio senza condividere la password.

     - Es: login con Google/Facebook su un sito terzo.

   - **SSO**: sistema che permette di fare **login una sola volta** e accedere a più servizi senza reinserire le credenziali.

     - Spesso implementato usando OAuth, SAML o OpenID Connect.

## ✅ Pro e ❌ contro microservizi

| ✅ **Pro**                                                                                         | ❌ **Contro**                                                                                 |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ⚡ **Scalabilità indipendente** – Ogni servizio si può scalare separatamente.                      | 🌐 **Overhead di comunicazione** – La rete può introdurre latenza e problemi di affidabilità. |
| 🛠️ **Manutenibilità e modularità** – Codice più chiaro e facile da aggiornare.                     | 🧩 **Complessità architetturale** – Gestire tanti servizi separati è più complesso.           |
| 🚀 **Deploy rapido e flessibile** – Aggiornamenti locali senza fermare l’intera app.               | 🧪 **Test più complessi** – L’integrazione tra servizi richiede più strumenti.                |
| 🌈 **Tecnologie eterogenee** – Ogni microservizio può usare il linguaggio migliore per il compito. | 💾 **Gestione dati difficile** – Coordinare transazioni tra servizi è complicato.             |
| 🛡️ **Resilienza** – Un servizio che fallisce non blocca tutto.                                     | 📊 **Monitoraggio e distribuzione** – Serve infrastruttura avanzata per gestire i servizi.    |
| 👥 **Team autonomi** – Squadre diverse possono lavorare indipendentemente.                         | 💰 **Costi infrastrutturali maggiori** – Più servizi richiedono più risorse e server.         |

## **OAuth (Open Authorization)**

**Definizione:**
OAuth è un **protocollo di autorizzazione** che permette a un’app di accedere a dati di un utente su un altro servizio **senza chiedere la password** dell’utente.

**Come funziona in breve:**

1. L’utente autorizza l’app a usare alcuni dati su un altro servizio (es. Google, Facebook).
2. Il servizio fornisce un **token di accesso** all’app, con permessi limitati.
3. L’app usa il token per accedere solo ai dati consentiti, senza mai vedere la password dell’utente.

**Esempio pratico:**

- “Accedi con Google” → il sito riceve un token, legge solo le informazioni consentite (es. email, nome), e tu non dai la tua password al sito.

## Architettura dei Servizi Distribuiti

## Coordinamento dei servizi

Il coordinamento dei servizi garantisce che i componenti di un sistema distribuito possano comunicare in modo efficiente e resiliente.

### Service Discovery

- I servizi si trovano a vicenda automaticamente, senza configurazioni manuali.
- Favorisce scalabilità e gestione dinamica dei servizi.

### Circuit Breakers

- Interrompe le chiamate verso un servizio non disponibile o in errore.
- Previene l’effetto a catena e aumenta la resilienza del sistema.

### Retry Patterns

- Ripete automaticamente le richieste fallite.
- Spesso implementato con ritardi progressivi (_exponential backoff_).

### Timeout Strategies

- Definisce un tempo massimo di attesa per una risposta.
- Evita blocchi e rallentamenti del sistema.

## Scambio di messaggi

Permette ai servizi di comunicare tra loro, in modalità **sincrona** o **asincrona**.

### Sincrono

- La richiesta del client attende la risposta del server.
- Tipico delle API REST.

### Asincrono

- La comunicazione non richiede una risposta immediata.
- I messaggi vengono elaborati in background, migliorando il decoupling e la resilienza.

### REST APIs

- Interfacce HTTP standard (GET, POST, PUT, DELETE) per scambiare dati.
- Vantaggi: semplicità e compatibilità.
- Svantaggi: più chiamate necessarie per dati correlati.

### GraphQL

- Linguaggio di query per API che permette di richiedere **solo i dati necessari**.
- Riduce sovraccarichi e chiamate multiple.
- Ideale per sistemi complessi con entità correlate.

### Message Brokers

- Sistemi intermediari per la gestione dei messaggi tra servizi.
- Garantisce **affidabilità, buffering e decoupling**.
- Esempi:
  - **RabbitMQ**: code di messaggi, routing complesso e conferma di ricezione.
  - **Kafka**: stream di dati ad alto throughput, ideale per elaborazioni in tempo reale.

## 🌐 Utilizzo Strumenti (AWS, Azure, GCP, ecc.)

Quando si usano piattaforme cloud come **Amazon Web Services (AWS)**, **Microsoft Azure** o **Google Cloud Platform (GCP)**, è fondamentale **gestire bene i costi e le risorse**.

### 🔑 Buone pratiche:

- **Porsi dei limiti di prezzo**

  - Impostare un _budget mensile_ e usare gli strumenti di monitoraggio dei costi integrati (es. AWS Budgets, Azure Cost Management, GCP Billing).
  - Ricevere _alert_ se si supera una certa soglia di spesa.

- **Limitare le risorse delle macchine**

  - Quando crei una macchina virtuale o un servizio, puoi definire i **limiti di CPU, RAM e storage**.
  - In questo modo eviti di consumare troppo e far crescere i costi senza controllo.

- **Autoscaling controllato**

  - Attivare lo _scaling automatico_, ma con soglie massime: così l’app cresce solo fino a un certo punto e non oltre.

- **Spegnere risorse non usate**

  - Se una macchina virtuale non serve 24/7, meglio spegnerla o usare servizi _serverless_ che paghi solo quando li usi.

- **Monitoraggio costante**

  - Tenere d’occhio dashboard e report per capire dove stai spendendo di più e se puoi ottimizzare.

### 🔑 Caratteristiche principali:

- **Tolleranza agli errori** → non si blocca se qualcosa va storto, ma gestisce le eccezioni in modo controllato.
- **Stabilità** → continua a funzionare anche sotto carico elevato o con risorse limitate.
- **Resilienza** → si riprende velocemente dopo un malfunzionamento o un guasto.
- **Affidabilità** → garantisce risultati consistenti e corretti nel tempo.
- **Sicurezza** → protegge i dati e previene comportamenti indesiderati anche in caso di input errati o attacchi.

### **Applicazione Robusta**

Un’applicazione si definisce **robusta** quando è **affidabile, resistente agli errori e capace di funzionare correttamente anche in condizioni impreviste o avverse**.
