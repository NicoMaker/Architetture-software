- [Vai al file Principale](../../README.md)

# 2 Lezione 19 settembre 2025

## Just recory

- torna a situzione corretta prima del malfunzionamento

### LImiti dati persi

- numero massimo di dati che si perdono

  - stessi dati su pìù server
    - non perdo dati -> metto in nodo principale oppure ripristino questo come principale e dopo diventa altro quando sistemato di nuovo il principale

- Backup singolo -> no backup -> dati ridondato (più copie aiutano nel backup)

## DISASTER RECOVERY

### Strategie di backup

- **RTO (Recovery Time Objective):** tempo massimo accettabile per il ripristino di un servizio dopo un’interruzione.
- **RPO (Recovery Point Objective):** quantità massima di dati che l’organizzazione può permettersi di perdere in caso di interruzione, misurata rispetto all’ultimo backup valido.
- **Multi-region deployment:** distribuzione delle risorse su più regioni geografiche per garantire alta disponibilità e continuità operativa anche in caso di guasti a livello regionale.
- **Data replication:** copia e sincronizzazione dei dati tra più location o sistemi, per assicurare ridondanza, backup costante e continuità del servizio.

## COMPLIANCE E GOVERNANCE

### Requisiti enterprise

- **GDPR (General Data Protection Regulation):** conformità al regolamento europeo sulla protezione dei dati personali, che impone trasparenza, tutela dei diritti degli interessati e misure di sicurezza adeguate.
- **SOX (Sarbanes-Oxley Act):** normativa statunitense che richiede controlli finanziari rigorosi, tracciabilità completa delle transazioni e responsabilità diretta del management sull’accuratezza e veridicità dei report finanziari.
- **Audit trails:** Registrazione cronologica e immutabili di tutte le azioni e modifiche del sistema per garantire tracciabilità

#### Future Trends

- **Edge Computing**
  - calcolo della computazione sul bordo
  - strumento nel bordo di funzionamento
- AI/ML integration
- Quantum computing impact
- WebAssembly adoption

- **Tools del Mestiere (deployment)**
  - Docker e Kubernetes
  - Terraform & Ansible
  - Jenkins / Gitlab CI
  - Gitlab Runner
    - rilascio del codice e mantenibilità del codice e migloramento delle modifiche del codice e storia che torni indietro se necessario
  - HashiCorp Vault

## 🌀 Metodologia Agile

La **Metodologia Agile** è un approccio allo sviluppo di progetti (soprattutto software, ma oggi usata in tanti ambiti) che punta a:

- **Flessibilità** → adattarsi ai cambiamenti invece di seguire rigidamente un piano.
- **Iterazioni brevi** → suddividere il lavoro in piccoli cicli, così da rilasciare risultati incrementali e testabili.
- **Collaborazione** → forte comunicazione tra team, stakeholder e cliente.
- **Valore al cliente** → priorità al rilascio rapido di funzionalità che portano valore reale.

Il riferimento principale è il **Manifesto Agile (2001)**, che enuncia 4 valori fondamentali:

1. **Individui e interazioni** più che processi e strumenti.
2. **Software funzionante** più che documentazione esaustiva.
3. **Collaborazione col cliente** più che negoziazione contrattuale.
4. **Rispondere al cambiamento** più che seguire un piano.

## 📌 Framework Agili

Agile non è una metodologia unica, ma un insieme di **framework**. I più diffusi sono:

- **SCRUM** → struttura ben definita con ruoli, eventi e artefatti.
- **KANBAN** → flusso di lavoro visualizzato su una board, focalizzato sulla gestione continua.

## 🏉 SCRUM

SCRUM è uno dei framework agili più usati. Si basa su:

- **Sprint** → iterazioni di lavoro di durata fissa (1-4 settimane).
- **Team Scrum** → composto da:

  - **Product Owner** → rappresenta il cliente, gestisce il backlog e le priorità.
  - **Scrum Master** → facilita il processo, rimuove ostacoli, garantisce che il metodo sia seguito.
  - **Development Team** → lavora per realizzare gli obiettivi dello Sprint.

- **Artefatti**:

  - **Product Backlog** → lista di tutte le funzionalità/attività ordinate per priorità.
  - **Sprint Backlog** → attività selezionate per lo Sprint.
  - **Incremento** → il risultato concreto alla fine dello Sprint.

## 📋 Kanban

Kanban è un metodo più **visivo e flessibile** rispetto a Scrum.
Si basa su:

- **Kanban board** → tabella con colonne (es. _To Do – In Progress – Done_).
- **Carte** → ogni attività è rappresentata da una card che si muove tra le colonne.
- **WIP limit (Work in Progress limit)** → numero massimo di attività in corso per evitare sovraccarichi.

📌 Differenze rispetto a Scrum:

- Non ha Sprint fissi → il lavoro scorre in modo continuo.
- Non ha ruoli definiti → si adatta meglio a team fluidi.
- È molto usato anche fuori dall’IT (es. project management, marketing).

## 🔑 Eventi & Pratiche comuni in Agile / Scrum

### 📆 Sprint Planning

- Incontro che dà il via allo Sprint.
- Il team e il Product Owner selezionano dal **Product Backlog** le attività da completare nello Sprint.
- Obiettivo: definire lo **Sprint Goal** (cosa vogliamo raggiungere in questa iterazione).

### ☀️ Daily Standups

- Riunione giornaliera, breve (15 minuti).
- Ogni membro del team risponde a 3 domande:

  1. Cosa ho fatto ieri?
  2. Cosa farò oggi?
  3. Ci sono ostacoli?

- Serve a mantenere allineato il team e risolvere i blocchi rapidamente.

### 🔄 Retrospectives

- Riunione alla fine dello Sprint.
- Scopo: riflettere su **cosa è andato bene**, **cosa migliorare** e definire **azioni concrete** di miglioramento.
- Strumento chiave per la crescita continua del team.

### 📈 Continuous Improvement

- Concetto base di Agile: ogni iterazione deve servire non solo a rilasciare valore, ma anche a **migliorare processi, comunicazione e qualità del lavoro**.
- Spesso implementato tramite le **retrospective**, metriche di performance e feedback continui.

✅ In sintesi:

- **Agile** = filosofia.
- **Scrum** = framework strutturato con Sprint, ruoli ed eventi.
- **Kanban** = metodo visuale e continuo, senza cicli fissi.
- **Sprint Planning, Daily, Retrospective** = cerimonie chiave di Scrum.
- **Continuous Improvement** = cuore dell’approccio Agile.

## ⚙️ DevOps Integration

La **DevOps Integration** rappresenta l’unione tra sviluppo (Dev) e operazioni (Ops), con l’obiettivo di:

- Ridurre i tempi di rilascio del software.
- Aumentare la qualità e l’affidabilità dei rilasci.
- Automatizzare processi manuali e ripetitivi.
- Favorire collaborazione continua tra sviluppatori e team operativi.

È un ciclo continuo: **scrittura del codice → test → rilascio → monitoraggio → feedback**.

## 🔄 CI/CD Pipelines

### Continuous Integration (CI)

- Ogni modifica al codice viene integrata spesso nel repository centrale.
- La pipeline esegue automaticamente build e test.
- Obiettivo: individuare subito bug e conflitti.
- Strumenti tipici: GitHub Actions, Jenkins, GitLab CI, CircleCI.

### Continuous Delivery / Continuous Deployment (CD)

- **Continuous Delivery** → codice sempre pronto al rilascio, ma il deploy è manuale.
- **Continuous Deployment** → deploy automatico dopo i test.
- Obiettivo: portare rapidamente il software in produzione.

## 🏗️ Infrastructure Automation

Gestire server e risorse **come codice** (Infrastructure as Code, IaC).

- Permette ambienti consistenti e replicabili.
- Riduce errori manuali e aumenta la scalabilità.

### Strumenti comuni:

- **Terraform** → provisioning su cloud (AWS, Azure, GCP).
- **Ansible, Puppet, Chef** → configurazione automatizzata.
- **Docker, Kubernetes** → containerizzazione e orchestrazione.

## 📊 Monitoring Integration

Integrare **monitoraggio e logging** è fondamentale in DevOps:

- Garantisce stabilità e performance.
- Permette analisi in tempo reale di errori e consumi.
- Supporta il miglioramento continuo grazie ai dati raccolti.

### Strumenti comuni:

- **Monitoring** → Prometheus, Grafana, Datadog, New Relic.
- **Logging** → ELK Stack (Elasticsearch, Logstash, Kibana), Splunk.
- **Alerting** → PagerDuty, Opsgenie, Slack integrations.

## Team Topologies

Le **Team Topologies** sono un modello organizzativo che aiuta a strutturare i team in base al loro scopo, riducendo complessità e dipendenze.  
L’obiettivo principale è migliorare il flusso di lavoro, creare team autonomi e ridurre il carico cognitivo complessivo.

### Stream-aligned teams

**Descrizione:**  
Sono team allineati a un **flusso di valore specifico** (ad esempio una linea di prodotto, un servizio o un processo aziendale).  
Sono autonomi e responsabili end-to-end: dalla progettazione, allo sviluppo, al rilascio e al monitoraggio.

**Caratteristiche:**

- Multidisciplinari (sviluppo, test, operazioni, UX, ecc.)
- Orientati al cliente e agli obiettivi di business
- Minimizzano le dipendenze da altri team
- Favoriscono il rilascio continuo e rapido

### Enabling teams

**Descrizione:**  
Supportano gli altri team aiutandoli a **superare ostacoli tecnici, metodologici o organizzativi**.  
Hanno un ruolo temporaneo: il loro compito non è sostituirsi, ma fornire competenze e conoscenze per aumentare l’autonomia degli altri team.

**Caratteristiche:**

- Specializzati in un’area (es. sicurezza, DevOps, pratiche agili)
- Trasferiscono know-how e buone pratiche
- Riducono le difficoltà che bloccano i team allineati al flusso
- Promuovono la crescita continua

### Complicated-subsystem teams

**Descrizione:**  
Si occupano di **sistemi o componenti complessi** che richiedono conoscenze molto specifiche e difficili da acquisire per tutti.  
Permettono agli altri team di concentrarsi sulle funzionalità di business senza doversi immergere in tali complessità.

**Caratteristiche:**

- Hanno esperti in domini altamente tecnici (es. algoritmi di machine learning, motori di calcolo)
- Creano e mantengono sottosistemi complessi
- Collaborano con i team al flusso per fornire integrazione e supporto
- Riduzione del rischio tecnico per l’organizzazione

### Platform teams

**Descrizione:**  
Costruiscono e gestiscono una **piattaforma interna** che rende più semplice e veloce il lavoro degli altri team.  
Il loro scopo è fornire strumenti, API, servizi e ambienti che consentano ai team allineati al flusso di concentrarsi sul valore per il cliente.

**Caratteristiche:**

- Forniscono infrastruttura e servizi condivisi (CI/CD, ambienti cloud, API comuni)
- Riduzione del carico cognitivo per gli altri team
- Creano esperienze self-service per velocizzare lo sviluppo
- Consentono una maggiore autonomia e indipendenza ai team di prodotto

## Cognitive Loads

### GESTIRE LA COMPLESSITA’

- **Essential complexity**
  - complessità intrinseca e inevitabile del problema di business che si sta risolvendo, che non può essere eliminata ma gestita.
- **Accidental complexity**
  - complessità aggiuntiva introdotta dalle scelte tecnologiche o di processo che non è necessaria per risolvere il problema di business.
- **Team cognitive load**
  - quantità tot di info, tecnologie e responsabilità che un team può gestire efficacemente senza compromettere qualità e velocità di delivery.

## Documentazione

- per ogni software serve

### LIVING DOCUMENTATION

- Architecture Decision Records (ADRs)
- API documentation (OpenAPI/Swagger)
- RunBooks e playbooks
- Code comments e README
