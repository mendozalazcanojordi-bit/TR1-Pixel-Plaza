# Inicialització de la base de dades

MySQL executa els fitxers `.sql` d'aquesta carpeta, per ordre alfabètic (p. ex. `01-esquema.sql`, `02-dades-prova.sql`).

Només ho fa **el primer cop**, quan el volum de la base de dades és buit. Si canvieu un script i el voleu tornar a executar, esborreu el volum, i amb ell totes les dades:

```bash
docker compose down -v
docker compose up
```

L'esquema i les dades de prova són la història JOR-02.
