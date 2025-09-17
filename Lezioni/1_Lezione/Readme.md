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

Ecco una versione più completa e strutturata del tuo testo, integrando le parti mancanti e chiarendo le differenze tra RabbitMQ e Kafka:

### Message Brokers

I **message broker** sono sistemi intermediari che gestiscono lo scambio di messaggi tra servizi o componenti di un’applicazione. Permettono una comunicazione **asincrona e disaccoppiata**, garantendo **affidabilità, buffering e resilienza**.

**Funzioni principali:**

- **Decoupling:** i produttori e i consumatori di messaggi non devono conoscere direttamente l’uno dell’altro.
- **Buffering:** i messaggi vengono temporaneamente memorizzati in coda se i consumatori non sono pronti.
- **Affidabilità:** gestione di retry, conferma di ricezione e persistenza dei messaggi.
- **Orchestrazione e routing:** instradamento intelligente dei messaggi in base a criteri definiti.

**Esempi di Message Brokers:**

- **RabbitMQ**

  - Basato su code di messaggi (queues) e scambi (exchanges).
  - Ideale per applicazioni **enterprise** con logiche complesse di routing.
  - Supporta **acknowledgment**, conferme di ricezione e retry dei messaggi.

- **Kafka**

  - Basato su stream di dati e **topic** persistenti.
  - Ottimizzato per **alto throughput** e **elaborazioni in tempo reale**.
  - Ideale per pipeline di dati, eventi in streaming e sistemi di analytics.

**Sintesi:**

- RabbitMQ è ottimo per **messaggi tradizionali e code affidabili**.
- Kafka è più adatto per **grandi volumi di dati e streaming**.

Perfetto! Aggiorniamo il Markdown aggiungendo il **costo del trasporto**, sottolineando che **non è mai zero**:

## Rete: Affidabilità, Latenza, Banda, Topologia e Costo

## 1. Affidabilità della rete

- Nessuna rete è completamente affidabile.
- Possibili problemi:

  - perdita di pacchetti
  - errori di trasmissione
  - interruzioni temporanee

- I protocolli come **TCP** cercano di compensare questi problemi, ma la rete resta intrinsecamente **non perfetta**.

## 2. Latenza

- La **latenza** è il tempo che un pacchetto impiega per arrivare da mittente a destinatario.
- Dipende da:

  - distanza fisica
  - numero di router/switch attraversati
  - congestione della rete
  - tipo di trasmissione (fibra, rame, wireless, satellite)

- Anche nelle reti più veloci, la latenza **non può essere zero**.

  - Es.: propagazione della luce nella fibra ottica ≈ 5 ns per metro.

## 3. Banda

- La **banda** indica la quantità massima di dati trasmissibili in un intervallo di tempo.
- Nessuna rete ha **banda infinita**: è sempre limitata.
- Dipende da:

  - tecnologia della rete (fibra, rame, wireless, satellite)
  - congestione e traffico
  - qualità dell’infrastruttura

## 4. Topologia della rete

- La **topologia** descrive la disposizione dei nodi e dei collegamenti nella rete.
- Tipi principali:

  - **Bus**: tutti i nodi collegati a un unico cavo principale.
  - **Star**: tutti i nodi collegati a un nodo centrale (switch/router).
  - **Ring**: ogni nodo collegato a due nodi vicini formando un anello.
  - **Mesh**: ogni nodo può collegarsi a più nodi, aumentando affidabilità.
  - **Hybrid**: combinazione di più topologie.

## 5. Costo del trasporto

- Trasmettere dati ha sempre un **costo**.
- Nessuna rete ha costo zero: include manutenzione, energia, infrastruttura e hardware.
- Dipende da:

  - tipo di rete (fibra, rame, satellite)
  - distanza
  - quantità di dati trasmessi
  - provider e tecnologia utilizzata

## 6. Valori tipici di latenza, banda, topologia e costo

| Tipo di rete         | Latenza tipica | Banda tipica      | Topologia comune    | Costo trasporto |
| -------------------- | -------------- | ----------------- | ------------------- | --------------- |
| LAN (fibra/ethernet) | 0.1 – 1 ms     | 1 – 10 Gbps       | Star, Mesh          | Basso           |
| Wi-Fi domestico      | 1 – 10 ms      | 100 Mbps – 1 Gbps | Star                | Molto basso     |
| Internet fibra       | 10 – 50 ms     | 100 Mbps – 1 Gbps | Mesh (ISP backbone) | Medio           |
| Satellite (geost.)   | 500 – 600 ms   | 20 – 100 Mbps     | Star (hub-spoke)    | Alto            |

Certo! Ti preparo una spiegazione chiara e completa in **Markdown** su **Teorema di CAP**, **ACID** e **BASE**, così puoi usarla direttamente per appunti o documentazione.

## Teorema di CAP e Modelli di Database

## Teorema di CAP

Il **Teorema di CAP** afferma che un sistema distribuito può garantire al massimo **due delle tre proprietà** seguenti:

1. **Consistency (Consistenza)**
   Tutti i nodi vedono gli stessi dati nello stesso momento.

   > Se leggi un dato da un nodo, ottieni sempre l’ultima versione aggiornata.

2. **Availability (Disponibilità)**
   Ogni richiesta riceve una risposta, anche se alcuni nodi sono offline.

   > Il sistema è sempre operativo, ma il dato potrebbe non essere l’ultimo aggiornato.

3. **Partition Tolerance (Tolleranza alle partizioni)**
   Il sistema continua a funzionare anche se alcune comunicazioni tra nodi falliscono (cioè c’è una “partizione” della rete).

   > Una partizione è una situazione in cui una parte del sistema non può comunicare con l’altra.

**Nota:**

- In pratica, in un sistema distribuito devi scegliere tra **Consistency + Availability**, **Consistency + Partition Tolerance**, o **Availability + Partition Tolerance**.
- Non è possibile avere tutte e tre contemporaneamente in caso di guasto della rete.

## Commit (nei database)

Un **commit** è l’operazione con cui una transazione viene confermata nel database:

- Tutte le modifiche della transazione diventano permanenti.
- Garantisce **Atomicity** e **Durability** nel modello ACID.
- Se la transazione fallisce prima del commit, tutte le modifiche vengono annullate (**rollback**).

> In pratica, il commit è il “punto di non ritorno” della transazione.

## Ritardo nel db

Un **ritardo nel database** indica il tempo che un dato impiega per arrivare dal mittente al destinatario.

> In pratica, il ritardo nel database indica il tempo che un dato impiega per arrivare dal mittente al destinatario e in base a dove si trova e posizione del mittente e diversi db collegati tra di loro.

Sembra che tu voglia una spiegazione di cosa significa “software dipendente” in relazione ai **database (DB)**. Posso chiarirlo meglio:

## Software Dipendente e Database

Un **software dipendente** è un programma che **non può funzionare correttamente da solo** perché si basa su un altro software per svolgere alcune funzionalità. Nel contesto dei database, questo concetto si applica così:

1. **Dipendenza dal DBMS (Database Management System):**
   Molti software applicativi, come gestionali, sistemi di e-commerce o CRM, dipendono da un **DBMS** (es. MySQL, PostgreSQL, Oracle DB) per salvare, leggere e gestire i dati.

   - Senza il DBMS, il software non può funzionare correttamente.
   - Esempio: un software gestionale che memorizza clienti e ordini in un database MySQL è dipendente da MySQL.

2. **Dipendenza da librerie o driver DB:**
   Alcuni software necessitano di **librerie o driver specifici** per connettersi al database.

   - Esempio: un’applicazione Java potrebbe usare il driver JDBC per collegarsi a PostgreSQL. Senza il driver, non può accedere al DB.

3. **Dipendenza da servizi esterni di database:**
   Alcuni software moderni dipendono da **database cloud** o servizi esterni (es. Firebase, AWS RDS).

   - Se il servizio è offline o non disponibile, il software perde funzionalità.

💡 **In sintesi:**
Un software è **dipendente dal database** quando non può eseguire correttamente le sue operazioni senza un DB attivo o senza gli strumenti necessari per comunicare con esso.

Un **software dipendente** si riferisce a un altro software che viene utilizzato per funzionare correttamente.

> In pratica, un software dipendente si riferisce a un altro software che viene utilizzato per funzionare correttamente.

Perfetto! Ecco una spiegazione chiara e dettagliata su **“Configurazione del Software”** e perché **non va messa direttamente nel codice**:

## Configurazione del Software

La **configurazione del software** si riferisce ai **parametri e impostazioni** che determinano come un programma si comporta, senza modificare il codice sorgente.

### Esempi di configurazione:

- Nome del database, utente e password per la connessione.
- Percorsi dei file o directory di lavoro.
- Porte di rete o indirizzi IP per servizi esterni.
- Livello di log o opzioni di debug.

### Perché non va messa nel codice:

1. **Sicurezza:**
   Inserire credenziali o password direttamente nel codice può esporre informazioni sensibili, soprattutto se il codice viene condiviso o caricato su repository pubblici.

2. **Flessibilità:**
   Cambiare una configurazione nel codice richiede di ricompilare o ridistribuire il software.
   Se la configurazione è esterna (file `.env`, file `.json`, `.yaml`, ecc.), puoi modificarla senza toccare il codice.

3. **Portabilità:**
   Lo stesso software può essere eseguito in ambienti diversi (sviluppo, test, produzione) semplicemente cambiando il file di configurazione.

4. **Manutenzione:**
   Separare il codice dalla configurazione rende più facile aggiornare i parametri senza rischiare di introdurre bug nel software.

### Dove mettere la configurazione:

- File esterni: `.env`, `.json`, `.yaml`, `.ini`
- Variabili d’ambiente del sistema operativo
- Pannelli di amministrazione o interfacce di gestione (per applicazioni web)

💡 **In sintesi:**
La configurazione definisce **come il software deve comportarsi**, mentre il codice definisce **come il software funziona**. Separare i due permette sicurezza, flessibilità e facilità di manutenzione.

## ACID vs BASE

I **database tradizionali** (come SQL) seguono il modello **ACID**, mentre i database distribuiti NoSQL spesso seguono il modello **BASE**.

### ACID (Database Tradizionali)

ACID garantisce **transazioni sicure e affidabili**:

1. **Atomicity (Atomicità)**

   - Una transazione è “tutto o niente”.
   - Se fallisce, il sistema torna allo stato precedente.

2. **Consistency (Consistenza)**

   - Le transazioni portano il database da uno stato valido a un altro stato valido.
   - Le regole del database non vengono mai violate.

3. **Isolation (Isolamento)**

   - Le transazioni concorrenti non interferiscono tra loro.
   - I risultati sono equivalenti a eseguire le transazioni una alla volta.

4. **Durability (Durabilità)**

   - Una volta confermata, la transazione non può andare persa, anche in caso di crash.

### BASE (Database NoSQL / distribuiti)

BASE è più flessibile e scalabile, adatto ai sistemi distribuiti:

1. **Basically Available (Fondamentalmente Disponibile)**

   - Il sistema garantisce risposte a tutte le richieste, anche se non tutte sono aggiornate.

2. **Soft state (Stato morbido)**

   - Lo stato del database può cambiare nel tempo, anche senza nuove scritture.
   - Non garantisce la consistenza immediata dei dati tra i nodi.

3. **Eventual consistency (Consistenza eventuale)**

   - Alla fine, tutti i nodi raggiungeranno lo stesso stato.
   - La consistenza è ritardata, ma si verifica **eventualmente**.

**Nota:** BASE sacrifica la consistenza immediata per **alta disponibilità e scalabilità**.

## 1. Configurazione del Software

La **configurazione** definisce **come il software deve comportarsi** senza modificare il codice.

- Parametri tipici: database, porte, percorsi file, livelli di log, API key.
- Non va messa nel codice perché:

  - **Sicurezza:** evita esposizione di dati sensibili.
  - **Flessibilità:** cambi senza modificare il codice.
  - **Portabilità:** lo stesso software funziona in ambienti diversi.

- Può essere gestita tramite: file `.env`, `.json`, `.yaml`, variabili d’ambiente, pannelli di configurazione.

## 2. Separazione

La **separazione** consiste nel dividere il software in componenti distinti con responsabilità chiare:

1. **Separazione codice/configurazione** → sicurezza e flessibilità.
2. **Separazione livelli dell’applicazione** → frontend, backend, database.
3. **Separazione moduli** → autenticazione, gestione ordini, report, ecc.

**Vantaggi:** manutenzione più semplice, test mirati, riuso del codice.

## 3. Robustezza

La **robustezza** indica quanto il software è **resistente a errori o situazioni impreviste**:

- Gestione errori (try/catch, validazioni, fallback).
- Test (unitari, di integrazione, di carico).
- Ridondanza e tolleranza ai guasti (backup, sistemi distribuiti).
- Modularità e separazione aiutano a isolare problemi.

## 4. Build del Software

La **build** è il processo di preparazione del software per l’esecuzione:

- **Compilazione** (linguaggi compilati)
- **Bundling/minificazione** (JavaScript/CSS)
- Inclusione delle dipendenze
- Inserimento della configurazione corretta per l’ambiente (sviluppo/test/produzione)

**Obiettivi:** consistenza, ottimizzazione, facilità di distribuzione.

## 5. Release

La **release** è il momento in cui il software **diventa disponibile per gli utenti o l’ambiente di produzione**:

- Include la versione stabile del software dopo build e test.
- Può essere distribuita come pacchetto, installer, container o file eseguibile.
- Gestione versioni e changelog aiutano a tracciare modifiche e aggiornamenti.

## 6. Esecuzione

L’**esecuzione** è quando il software viene effettivamente avviato e utilizzato:

- Il software legge la configurazione e si connette a risorse esterne (DB, API).
- I moduli interagiscono tra loro secondo la logica implementata.
- Robustezza e gestione errori garantiscono continuità anche in caso di problemi.

## 7. Scalabilità

La **scalabilità** indica quanto il software può **gestire un aumento di carico** senza degradare le prestazioni:

- **Scalabilità verticale:** potenziare l’hardware (CPU, RAM, storage).
- **Scalabilità orizzontale:** aggiungere più istanze del software (cluster, microservizi).
- Buona separazione e modularità rendono più semplice scalare singoli componenti senza modificare l’intero sistema.
- L’uso di configurazioni esterne e build ottimizzate facilita l’adattamento a nuove istanze o ambienti.

## 🔗 Come tutto si collega

1. **Separazione** → struttura chiara, manutenzione semplice.
2. **Robustezza** → gestione errori e stabilità.
3. **Configurazione esterna** → flessibilità e sicurezza.
4. **Build** → software pronto e ottimizzato per un ambiente.
5. **Release** → distribuzione agli utenti o sistemi.
6. **Esecuzione** → software attivo e funzionante.
7. **Scalabilità** → capacità di crescere con il carico senza problemi.

💡 **In sintesi:**
Ogni fase è collegata e costruisce un software solido, sicuro, flessibile e pronto a crescere: separazione + robustezza + configurazione → build → release → esecuzione → scalabilità.

## Avvio e Gestione dell’Applicazione

1. **Configurazione**

   - L’app legge parametri esterni (file `.env`, `.json`, variabili d’ambiente).
   - Include database, API key, modalità ambiente (sviluppo/test/produzione).

2. **Build**

   - Preparazione del software per l’esecuzione.
   - Include compilazione/minificazione, dipendenze e configurazione per l’ambiente.

3. **Release**

   - Distribuzione della versione stabile agli utenti o all’ambiente di produzione.
   - Include gestione versioni, pacchetti o container.

4. **Esecuzione**

   - L’app viene avviata e utilizza configurazioni e moduli attivi.
   - Connessione a database e servizi esterni, gestione errori in runtime.

5. **Scalabilità**

   - L’app può crescere con il carico senza degradare le prestazioni.
   - Verticale (più risorse hardware) o orizzontale (più istanze / microservizi).

💡 **In sintesi:**
Per avviare un’app moderna serve **configurazione → build → release → esecuzione → scalabilità**.
Queste fasi garantiscono che l’app sia pronta, funzionante, stabile e capace di crescere.

Ecco una definizione chiara e precisa per entrambi i concetti:

### **Ambiente di Produzione**

L’**ambiente di produzione** (production environment) è il contesto reale in cui un software viene **utilizzato dagli utenti finali**.

- Contiene dati veri e funzionalità complete.
- Deve essere **stabile, sicuro e performante**.
- Tutte le modifiche vengono testate prima di essere rilasciate qui, per evitare interruzioni o errori.
- Esempio: un sito web di e-commerce attivo con clienti reali.

### **Scalabilità**

La **scalabilità** è la capacità di un software o sistema di **gestire un aumento del carico** senza degradare le prestazioni.

- **Scalabilità verticale:** aumentare le risorse di un singolo server (CPU, RAM, storage).
- **Scalabilità orizzontale:** aggiungere più istanze o server per distribuire il carico (cluster, microservizi).
- Obiettivo: garantire che il software continui a funzionare bene anche con molti utenti o grandi quantità di dati.

💡 In sintesi:

- **Ambiente di produzione = dove il software funziona realmente per gli utenti.**
- **Scalabilità = capacità del software di crescere con il carico senza problemi.**

## Gestione LOG

gestione log continua mandare log -> avendo dati che controlla e sia corretto -> non sempre stesse info avendo dei dati come informazioni -> analizzando i dati su altre macchine

## Processi amministrativi

già integrate nella macchina in automatico

## Migrazioni nel Database

Il database contiene la seguente struttura per gestire utenti o elementi con badge:

| Campo    | Tipo           | Descrizione                                          |
| -------- | -------------- | ---------------------------------------------------- |
| `id`     | Integer / UUID | Identificativo univoco del record                    |
| `name`   | String         | Nome dell'utente o dell'elemento                     |
| `badge`  | String         | Badge associato all'utente/elemento                  |
| `active` | Boolean        | Flag che indica se il record è **attivo** nel server |

### Descrizione del campo `active`

- Il campo `active` serve a sapere se l’utente o l’elemento è **attualmente attivo nel server**.
- Valori possibili:

  - `true` → il record è attivo e funziona regolarmente nel sistema.
  - `false` → il record non è attivo, quindi non è considerato attivo sul server.

### Esempio di record

```json
{
  "id": 1,
  "name": "Mario Rossi",
  "badge": "Gold",
  "active": true
}
```

In questo esempio, l’utente “Mario Rossi” possiede il badge “Gold” ed è **attivo** sul server.

## Cosa significa “migrazione del database”

Una **migrazione del database** è un insieme di istruzioni per modificare **la struttura del database** in modo controllato e tracciabile, senza perdere dati esistenti.

Piccole query per modiificare il db e far modificare i dati della tabella in queel record -> modiifici dati dove serve

- Serve a **creare, aggiornare o cancellare tabelle e colonne**.
- Permette di **aggiungere o rimuovere vincoli** (chiavi primarie, univoche, relazioni).
- Mantiene una **cronologia delle modifiche**, così da poter tornare a una versione precedente se necessario.

### Esempio pratico

Immagina di avere una tabella `users`:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);
```

Poi decidi di aggiungere un badge e un flag `active`. Una migrazione potrebbe essere:

```sql
ALTER TABLE users
ADD COLUMN badge VARCHAR(50),
ADD COLUMN active BOOLEAN DEFAULT TRUE;
```

In un sistema con migrazioni (come **Sequelize**, **TypeORM**, **Rails ActiveRecord**) si scrive una migrazione come file separato che:

1. Descrive la modifica (`up` → cosa aggiungere, `down` → come tornare indietro).
2. Viene eseguita per aggiornare il database senza toccare i dati già presenti.

💡 **In breve:**
Una migrazione è il modo “ufficiale” per aggiornare il database in produzione senza rischiare di perdere dati, tracciando ogni cambiamento.

## **Modellare Dati Complessi in Informatica**

Modellare dati complessi significa organizzare e rappresentare informazioni articolate in modo tale da poterle gestire, analizzare e manipolare facilmente in un sistema informatico. Questa attività è fondamentale nello sviluppo software, nei database, nell’intelligenza artificiale e nell’analisi dei dati.

## 1. Comprendere i Tipi di Dati

- **Dati primitivi:** numeri, stringhe, booleani
- **Dati strutturati:** array, liste, tuple, oggetti
- **Dati complessi:** oggetti annidati, strutture gerarchiche, grafi, mappe

## 2. Identificare Entità e Relazioni

- **Entità:** oggetti principali da rappresentare (es. Cliente, Prodotto, Ordine)
- **Relazioni:** come le entità sono connesse (es. “Un cliente effettua molti ordini”)

**Strumenti utili:**

- Diagrammi Entità-Relazione (ERD)
- UML (Unified Modeling Language) per classi e oggetti

## 3. Scegliere la Struttura di Memorizzazione

- **Database relazionali:** tabelle collegate con chiavi primarie/esterne
- **Database NoSQL:** documenti JSON, grafi, colonne larghe
- **Strutture in memoria:** oggetti annidati, liste di liste, dizionari/mappature

## 4. Gestire Dati Annidati e Complessi

- Utilizzare oggetti o record annidati
- Definire attributi obbligatori e opzionali
- Usare array/liste per collezioni di oggetti simili
- Applicare normalizzazione o denormalizzazione a seconda dell’uso

## 5. Integrità e Accesso ai Dati

- Validazione dei dati per evitare incongruenze
- Indici e chiavi per accesso rapido
- Viste o query predefinite per semplificare l’estrazione dei dati complessi

## 6. Esempio Pratico di Modellazione

Supponiamo di modellare un sistema di gestione corsi online:

```json
{
  "corso": "Informatica Avanzata",
  "docente": {
    "nome": "Luca Rossi",
    "email": "luca.rossi@example.com"
  },
  "studenti": [
    { "nome": "Anna", "eta": 22 },
    { "nome": "Marco", "eta": 25 }
  ],
  "lezioni": [
    { "titolo": "Introduzione", "durata": 60 },
    { "titolo": "Strutture Dati", "durata": 90 }
  ]
}
```

- **Oggetto principale:** corso
- **Oggetti annidati:** docente, lezioni
- **Array di oggetti:** studenti, lezioni

## **1. Metriche nei database**

Le **metriche** sono valori numerici che descrivono lo stato o le prestazioni del database. Permettono di capire se il database sta funzionando correttamente e di identificare colli di bottiglia o anomalie.

### **Esempi di metriche comuni**

- **Tempo di risposta delle query**: quanto impiega una query a completarsi.
- **Throughput**: numero di query eseguite al secondo.
- **Utilizzo delle risorse**:

  - CPU
  - Memoria RAM
  - I/O disco

- **Connessioni attive**: quante connessioni al database sono aperte contemporaneamente.
- **Lock e deadlock**: numero di blocchi di risorse che possono rallentare il sistema.
- **Cache hit/miss**: percentuale di accessi ai dati che avvengono direttamente dalla cache vs dal disco.

Le metriche vengono spesso raccolte automaticamente dagli **strumenti di monitoraggio del DB** (es. MySQL Performance Schema, PostgreSQL pg_stat_statements, SQL Server Performance Monitor).

## **2. Log nei database**

I **log** sono registrazioni dettagliate di eventi che avvengono nel database. Servono principalmente per **tracciare attività, risolvere problemi e garantire la sicurezza**.

### **Tipi principali di log**

1. **Log delle transazioni (Transaction Log)**

   - Tiene traccia di tutte le modifiche ai dati.
   - Essenziale per il **ripristino in caso di crash** e per garantire la **consistenza del database**.
   - Esempio: SQL Server mantiene un transaction log per ogni database.

2. **Log degli errori (Error Log)**

   - Registra messaggi di errore e avvisi del database.
   - Utile per diagnosticare problemi di configurazione o malfunzionamenti.

3. **Log delle query (Query Log / General Log)**

   - Registra tutte le query eseguite (o solo quelle lente).
   - Utile per **ottimizzare le prestazioni** o per attività di auditing.

4. **Audit log**

   - Registra chi ha fatto cosa e quando.
   - Fondamentale in contesti regolamentati o per sicurezza.

### **Differenza tra metriche e log**

| Aspetto       | Metriche                            | Log                                      |
| ------------- | ----------------------------------- | ---------------------------------------- |
| Cosa fornisce | Dati aggregati sulle prestazioni    | Dettagli evento per evento               |
| Obiettivo     | Monitoraggio e ottimizzazione       | Diagnosi, sicurezza, ripristino          |
| Frequenza     | Raccolta periodica o in tempo reale | Continuo, ogni evento                    |
| Esempio       | Tempo medio query, CPU al 70%       | Query eseguita alle 10:05:32 da utente X |

Dove possibile -> automatizzare -> sbagli tipi di errore

## **Cloud in informatica**

**Definizione:**
Il **cloud computing** è un modello di erogazione di risorse informatiche (come server, storage, database, software) **via internet**, senza dover possedere fisicamente l’hardware.
In pratica, il cloud permette di **usare servizi e applicazioni su server remoti** gestiti da un provider, pagando solo per ciò che si utilizza.

**Caratteristiche principali del cloud:**

1. **Accessibilità remota:** si accede da qualsiasi dispositivo connesso a Internet.
2. **Scalabilità:** le risorse possono essere aumentate o diminuite in base alle necessità.
3. **Elasticità:** gestione dinamica del carico di lavoro senza intervento manuale.
4. **Pay-per-use:** pagamento solo per le risorse effettivamente utilizzate.
5. **Gestione centralizzata:** il provider si occupa di manutenzione, aggiornamenti e sicurezza.

**Modelli di cloud:**

- **IaaS (Infrastructure as a Service):** server e storage virtuali (es. AWS EC2, Google Compute Engine).
- **PaaS (Platform as a Service):** piattaforma per sviluppare applicazioni senza gestire l’infrastruttura sottostante (es. Heroku, Google App Engine).
- **SaaS (Software as a Service):** software pronto all’uso via cloud (es. Gmail, Office 365).

## **Serverless in informatica**

**Definizione:**
Il **serverless** è un modello di **computing nel cloud** dove lo sviluppatore non gestisce i server. Si scrive solo il codice e il provider cloud si occupa di eseguire le funzioni, scalare le risorse e mantenerle operative.

**Caratteristiche principali:**

1. **Gestione automatica dei server** da parte del provider.
2. **Pagamento a consumo**: si paga solo per l’esecuzione delle funzioni.
3. **Event-driven**: le funzioni vengono attivate da eventi (richieste HTTP, file caricati, messaggi in coda).
4. **Microservizi e funzioni autonome** (es. AWS Lambda, Azure Functions, Google Cloud Functions).

**Vantaggi:**

- Riduce i costi operativi.
- Facilita la scalabilità automatica.
- Sviluppo più rapido, senza preoccuparsi dell’infrastruttura.

**Svantaggi:**

- Minor controllo sull’infrastruttura.
- Possibili ritardi iniziali (“cold start”).
- Dipendenza dal provider cloud.


## **1. Microservizi (backend)**

I **microservizi** sono un approccio architetturale per costruire applicazioni **backend** suddividendole in servizi piccoli, indipendenti e autonomi. Ogni microservizio:

* Ha una **singola responsabilità** (ad esempio, gestione utenti, ordini, pagamenti).
* Può essere sviluppato, distribuito e scalato **indipendentemente** dagli altri.
* Comunica con altri servizi tramite API (tipicamente REST o gRPC).
* Ha il proprio database o storage, evitando dipendenze condivise e riducendo i colli di bottiglia.

**Vantaggi dei microservizi:**

* Scalabilità: puoi scalare solo il servizio che serve più risorse.
* Manutenibilità: il codice è più semplice perché ogni servizio è piccolo.
* Deployment indipendente: puoi aggiornare un servizio senza interrompere l’intera applicazione.

**Esempio:**
Un e-commerce può avere microservizi separati per:

* Catalogo prodotti
* Gestione ordini
* Pagamenti
* Notifiche


## **2. Microfrontend (frontend)**

I **microfrontend** applicano lo stesso concetto dei microservizi ma al **frontend**. Invece di avere un’applicazione frontend monolitica, la suddividi in **moduli autonomi**. Ogni team può sviluppare, testare e distribuire il proprio microfrontend senza interferire con gli altri.

**Caratteristiche principali:**

* Ogni microfrontend gestisce una **parte specifica dell’interfaccia** (ad esempio header, carrello, dashboard utenti).
* Possono essere sviluppati in **framework diversi** (React, Angular, Vue) purché siano integrati correttamente.
* La composizione avviene spesso a runtime, cioè l’host frontend carica i microfrontend tramite **web components**, **iframe**, o **JavaScript bundles**.
* Mantiene **indipendenza e deploy separato**, simile ai microservizi.

**Vantaggi dei microfrontend:**

* Team indipendenti: ogni team può lavorare su una parte dell’app senza conflitti.
* Aggiornamenti separati: puoi aggiornare un microfrontend senza rilasciare tutto il sito.
* Tecnologia flessibile: ogni microfrontend può usare librerie/framework diversi se necessario.

**Esempio:**
Un sito di e-commerce può avere microfrontend per:

* Navbar e ricerca prodotti
* Lista prodotti
* Carrello
* Checkout
* Area utenti

Ogni microfrontend può essere sviluppato e deployato separatamente, ma all’utente sembra un’unica applicazione fluida.

## **3. Differenza chiave**

| Aspetto       | Microservizi (backend)             | Microfrontend (frontend)             |
| ------------- | ---------------------------------- | ------------------------------------ |
| Livello       | Backend                            | Frontend                             |
| Scopo         | Suddividere logica di business     | Suddividere interfaccia utente       |
| Indipendenza  | Servizi autonomi e deploy separato | Moduli UI autonomi e deploy separato |
| Comunicazione | API REST, gRPC                     | JS bundle, web components, iframe    |
| Team          | Sviluppatori backend               | Sviluppatori frontend                |


💡 **Sintesi:**
I microservizi rendono il **backend** modulare e scalabile, mentre i microfrontend rendono il **frontend** modulare e indipendente. L’idea comune è la stessa: **dividere per responsabilità e autonomia**, ma applicata a due livelli diversi.



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
