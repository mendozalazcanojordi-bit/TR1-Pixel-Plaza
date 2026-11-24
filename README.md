# CasinoPlaza

Casino social en 2D. Cada jugador mou el seu avatar pel casino, s'asseu a les taules i parla per vídeo amb els qui hi juguen. És el projecte «Pixel Plaza» de DAW-Servidor: Vue 3 + Pinia, Phaser, Node.js + Socket.IO, WebRTC i Docker.

> **Estat: sprint 1.** Hi ha el servidor inicial (Express + Socket.IO), l'entorn de desenvolupament amb Docker i el pla del projecte. El pla complet, amb les històries de cada persona, és a la [pàgina del pla](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX).

> **Fitxes fictícies.** CasinoPlaza no fa servir diners reals. Les fitxes no es compren ni es bescanvien, i totes les apostes són amb fitxes virtuals sense cap valor.

## Visió (proposta per al kick-off)

**Per què un mapa i vídeo?** En un casino, la gràcia és seure a una taula amb altres persones. Al mapa veus quines taules hi ha i qui hi seu, i tries on vols anar. Quan t'hi asseus, la videotrucada és la conversa de la taula: jugueu i parleu alhora.

| Zona | Què s'hi fa | Comunicació |
|---|---|---|
| Recepció i caixa | Punt d'entrada. Un cop al dia es recullen fitxes a la caixa | Xat general |
| Bar | Zona social per conèixer gent | Trucada de proximitat |
| Taula de ruleta | Ruleta multijugador per rondes | Trucada de taula (fins a 6) |
| Taula de blackjack | Per seure i parlar (el joc de cartes queda fora de l'abast) | Trucada de taula (fins a 6) |
| Escurabutxaques | Minijoc individual: t'hi acostes i prems E | — |
| Sala VIP *(stretch)* | Sala privada amb codi i un crupier que modera | Trucada privada |

| Sprint | Ha de funcionar | Versió |
|---|---|---|
| **S1 · Obrim portes** (23–27 nov) | `docker compose up` aixeca tot en local. S'entra amb nom i avatar, hi ha un lobby en temps real, i el propi avatar i els dels altres es mouen pel mapa. Qui es desconnecta desapareix | v0.1.0 |
| **S2 · Seu a la taula** (30 nov–4 des) | Registre i login, previsualització de la càmera, videotrucada en seure a una taula, presència, xat, escurabutxaques, foto de perfil. Staging amb HTTPS i TURN | v0.2.0 |
| **S3 · Fem joc** (7–11 des) | Ruleta multijugador amb fitxes desades a la BD, trucada al bar, reconnexió, resum i rànquing, sons. Producció i demo | v1.0.0 |

**Stretch goal:** Sala VIP privada amb un crupier que pot silenciar i expulsar participants.

## Equip

| Persona | Rol | Les seves històries |
|---|---|---|
| Hugo | DevOps / desplegament · release manager · suport a l'equip | [les seves històries](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) |
| Miguel | Backend Socket.IO + lògica de joc · owner del protocol | [les seves històries](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) |
| Jose Andres | Frontend Vue + Pinia · owner d'UX | [les seves històries](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) |
| Ricardo | Espai 2D (Phaser + Tiled) + credencials TURN (backend) | [les seves històries](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) |
| Jordi | WebRTC + base de dades + imatges | [les seves històries](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) |

Cada persona hi dedica 15 h per setmana (45 h en total), de les quals 33 h són de desenvolupament. En Hugo en fa 29 de desenvolupament i reserva les altres 4 h per donar suport a tot l'equip.

## Desenvolupament en local (Docker)

Només cal tenir Docker Desktop.

```bash
cp .env.example .env      # només el primer cop (PowerShell: Copy-Item .env.example .env)
docker compose up         # aixeca el servidor, el client, MySQL i Adminer
```

| Servei | Adreça | Què és |
|---|---|---|
| Servidor | http://localhost:3000 | Node.js + Socket.IO. Es reinicia sol quan canvia el codi |
| Client | http://localhost:5173 | Vue 3 + Vite, amb recàrrega en calent. Mentre `client/` no tingui `package.json`, aquest servei espera |
| MySQL | `localhost:3307` des de l'ordinador · `db:3306` entre contenidors | Base de dades. Els `.sql` de `docker/mysql/init/` s'executen el primer cop |
| Adminer | http://localhost:8080 | Per mirar la base de dades (servidor `db`, usuari i contrasenya del `.env`) |

- Les dependències s'instal·len soles en arrencar. Si algú afegeix un paquet, n'hi ha prou amb reiniciar el servei: `docker compose restart server` o `docker compose restart client`.
- Els ports i les contrasenyes surten del `.env`. Si un port ja està ocupat (p. ex. pel MySQL de XAMPP), canvia'l allà.
- Per començar de zero, esborrant també la base de dades: `docker compose down -v`.
- El servidor rep `PORT`, `CLIENT_ORIGIN`, `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER` i `DB_PASSWORD` com a variables d'entorn. El client rep `VITE_SERVER_URL`.

**Recàrrega del client a Windows.** Dins de Docker, Vite no s'assabenta dels canvis dels fitxers si no fa *polling*. El contenidor posa `VITE_POLLING=true`, i `client/vite.config.js` ha de tenir aquesta línia dins de `server`:

```js
watch: process.env.VITE_POLLING === 'true' ? { usePolling: true, interval: 300 } : undefined,
```

Fora de Docker no fa res.

## Documents

| Document | Contingut |
|---|---|
| [docs/pla-execucio.md](docs/pla-execucio.md) | Pla d'execució: hores, qui fa què, calendari dia a dia, kick-off, decisions, dependències, riscos, Definition of Done, GitFlow i relació amb la rúbrica |
| [docs/backlog.md](docs/backlog.md) | Product Backlog prioritzat per sprint |
| [Pàgina del pla](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX) | Calendari, equip i totes les històries amb criteris, tasques i pistes, filtrables per persona |

## Entregables del kick-off (els fa l'equip)

| Entregable | On | Responsable |
|---|---|---|
| Visió: nom, temàtica, 3 MVP i stretch goal | Aquest README (secció «Visió») | Tot l'equip (modera Jose Andres) |
| Esbós del mapa i de les zones | `docs/ux.md` | Ricardo |
| Flux d'usuari i esbossos de les pantalles | `docs/ux.md` | Jose Andres |
| Diagrama del sistema amb Docker | `docs/arquitectura.md` | Hugo |
| Protocol de Socket.IO v1 | `docs/protocol.md` | Miguel |
| Senyalització WebRTC i integració Vue ↔ Phaser | `docs/protocol.md` i `docs/arquitectura.md` | Jordi |
| Product Backlog prioritzat | [docs/backlog.md](docs/backlog.md) i Taiga | Hugo |
