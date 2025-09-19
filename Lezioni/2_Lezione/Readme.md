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

