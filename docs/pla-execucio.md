# Pla d'execució · CasinoPlaza

Pla de treball de 3 setmanes (del 23 de novembre a l'11 de desembre de 2026) per a un equip de 5 persones. Diu qui fa què, quan i quantes hores hi dedica, quines dependències hi ha entre la feina de cadascú i com treballem.

> El pla no inclou cap disseny tècnic. L'arquitectura, el protocol i els esbossos són entregables de l'equip al kick-off (història KO-01). Aquí només hi ha recomanacions per prendre aquestes decisions.

**Índex**

1. [Resum](#1-resum)
2. [Hores per persona](#2-hores-per-persona)
3. [Qui fa què](#3-qui-fa-què)
4. [Calendari](#4-calendari)
5. [Kick-off](#5-kick-off-dilluns-23-4-h)
6. [Decisions a prendre al kick-off](#6-decisions-a-prendre-al-kick-off)
7. [Dependències i dates límit internes](#7-dependències-i-dates-límit-internes)
8. [Riscos](#8-riscos)
9. [Definition of Done](#9-definition-of-done)
10. [Forma de treballar](#10-forma-de-treballar)
11. [Rúbrica → històries](#11-rúbrica--històries)
12. [Requisits de l'enunciat → històries](#12-requisits-de-lenunciat--històries)

---

## 1. Resum

| | |
|---|---|
| **Projecte** | CasinoPlaza: casino social en 2D amb fitxes fictícies. Seure a una taula obre una videotrucada amb qui hi juga |
| **Durada** | 3 sprints d'una setmana: S1 23–27 nov · S2 30 nov–4 des · S3 7–11 des |
| **Equip** | Hugo, Ricardo, Jose Andres, Miguel i Jordi |
| **Dedicació** | 15 h per setmana i persona: 45 h cadascú i 225 h tot l'equip. D'aquestes, 161 h són de desenvolupament i 4 h de suport (Hugo) |
| **Backlog** | 58 històries als sprints, 1 de kick-off i 4 d'stretch ([backlog](backlog.md)) |
| **Taiga** | Les històries es carreguen amb `taiga/importar-taiga.mjs` (carpeta local, no es puja al repositori) |
| **Entrega** | Divendres 11 de desembre (v1.0.0). El dimarts 8 és festiu, i per això el codi es congela dijous 10 |

**Què ha de funcionar al final de cada sprint**

| Sprint | Ha de funcionar | Versió |
|---|---|---|
| **S1 · Obrim portes** | `docker compose up` aixeca tot en local. S'entra amb nom i avatar, el lobby mostra els connectats en temps real, i al mapa es veuen el propi avatar i els dels altres movent-se. Qui es desconnecta desapareix. GitFlow i CI en marxa | v0.1.0 |
| **S2 · Seu a la taula** | Registre i login. Previsualització de la càmera. Seure a una taula obre la videotrucada amb els botons de micro, càmera i sortir. Panell de presència, xat general i de taula, escurabutxaques interactiva i foto de perfil. Staging a l'institut amb HTTPS i TURN | v0.2.0 |
| **S3 · Fem joc** | Ruleta multijugador amb les fitxes desades a la BD. Trucada de proximitat al bar, reconnexió en 30 s, resum i rànquing, i sons. Producció i demo | v1.0.0 |
| **Stretch** | Sala VIP privada amb crupier (silenciar i expulsar). Només si l'MVP del S3 ja és a `dev` | — |

## 2. Hores per persona

Cada persona dedica 45 h, repartides així:

| Concepte | S1 | S2 | S3 | Total |
|---|---|---|---|---|
| Kick-off | 4 h | — | — | 4 h |
| Cerimònies (planning, review, retro) | 1 h | 1,5 h | 1,5 h | 4 h |
| Revisió de PR dels companys | 1 h | 1,5 h | 1,5 h | 4 h |
| **Desenvolupament (les seves històries)** | **9 h** | **12 h** | **12 h** | **33 h** |
| **Total** | 15 h | 15 h | 15 h | **45 h** |

**En Hugo** fa 2 h menys de desenvolupament al S2 i al S3 (29 h en total) i les dedica a **donar suport a tot l'equip**. Aquest suport consisteix a:

- Desencallar companys.
- Ajudar a integrar a `dev`.
- Fer de segon revisor de les històries crítiques: MIG-05, MIG-07, JOR-03 i MIG-09.

Per fer-hi lloc, el desplegament automàtic (HUG-10) passa a l'stretch. A més, la peça de backend de les credencials TURN passa d'en Hugo a en Ricardo (RIC-13). Va amb el bloc de l'espai 2D per quadrar les hores del sprint 2, i a canvi la galeria de personatges (RIC-08) queda a l'stretch. En Miguel, com a owner del servidor, li revisa la integració amb el backend.

| Persona | Rol | S1 | S2 | S3 | Desenvolupament | Suport | Històries |
|---|---|---|---|---|---|---|---|
| [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | DevOps / desplegament · release manager · suport | 9 h | 10 h | 10 h | 29 h | 4 h | 11 (+1 stretch) |
| [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Backend Socket.IO + lògica de joc · owner del protocol | 9 h | 12 h | 12 h | 33 h | — | 12 |
| [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Frontend Vue + Pinia · owner d'UX | 9 h | 12 h | 12 h | 33 h | — | 13 |
| [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Espai 2D (Phaser + Tiled) + credencials TURN | 9 h | 12 h | 12 h | 33 h | — | 12 (+1 stretch) |
| [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | WebRTC + base de dades + imatges | 9 h | 12 h | 12 h | 33 h | — | 10 |

Les estimacions són el temps de **programar i provar** cada història. Si una història s'allarga més d'un 50 %, es diu a la daily i es decideix si es retalla o si es mou una Should o una Could.

## 3. Qui fa què

| Persona | Responsabilitat | Revisa les PR de |
|---|---|---|
| **Hugo** | Desplegament: GitFlow i protecció de branques, Docker i Compose, Nginx, HTTPS, servidor TURN, CI/CD i el servidor de l'institut. És el *release manager*: fusiona `dev` → `main` i posa el tag al final de cada sprint. **Suport transversal**: és la primera persona a qui s'acudeix quan algú s'encalla, i el segon revisor de les històries crítiques | Jordi (i, com a segon revisor, MIG-05, MIG-07, JOR-03 i MIG-09) |
| **Miguel** | Servidor: estat de la sala, moviment, zones i proximitat, xat, autenticació, lògica de l'escurabutxaques, de la ruleta i de la caixa, reconnexió i seguretat. És l'owner del protocol | Hugo |
| **Jose Andres** | Frontend Vue: esquelet, router, stores de Pinia, Entrada, Lobby, vista Casino, presència, xat, login, panell d'apostes, resum, perfil i usabilitat. Modera la fase de visió del kick-off | Ricardo |
| **Ricardo** | Espai 2D: mapa amb Tiled, escena, avatars locals i remots, zones, indicadors, escurabutxaques, ruleta animada, caixa, sons i rendiment. Peça de backend: credencials temporals del TURN (RIC-13) | Jose Andres |
| **Jordi** | Vídeo i dades: senyalització WebRTC, trucades de taula i de proximitat, panell de vídeo, base de dades, foto de perfil, estadístiques i API de resum i rànquing | Miguel |

**La feina de cadascú setmana a setmana**

| | Sprint 1 · Obrim portes | Sprint 2 · Seu a la taula | Sprint 3 · Fem joc |
|---|---|---|---|
| **Hugo** | Repositori i GitFlow, `docker compose` de desenvolupament, CI, sol·licitud del servidor | Nginx de producció, HTTPS i staging a l'institut, coturn · 2 h de suport | Producció, seguretat del desplegament, README, proves E2E i release · 2 h de suport |
| **Miguel** | Esquelet del servidor, constants i protocol, entrar i sortir, moviment | Zones i proximitat, xat, autenticació, escurabutxaques | Ruleta, reconnexió, caixa, seguretat |
| **Jose Andres** | Esquelet Vue, Entrada, Lobby, stores | Càmera, vista Casino i presència, xat, login | Panell de la ruleta, Resum, avisos, perfil i rànquing, usabilitat |
| **Ricardo** | Mapa, escena i avatar, bus Vue ↔ Phaser, avatars remots | Zones, indicadors, escurabutxaques, credencials TURN | Ruleta animada, caixa, sons, rendiment |
| **Jordi** | Prova de WebRTC, base de dades | Trucada de taula, panell de vídeo, TURN al client, foto de perfil | Trucada al bar, estadístiques i API, qui parla, proves de vídeo |

El detall de cada història (criteris d'acceptació, tasques amb hores i pistes) és a la [pàgina del pla](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX): afegint el nom a l'enllaç (p. ex. `#miguel`) es veuen només les d'una persona.

## 4. Calendari

| Dia | Fita | Qui |
|---|---|---|
| **Dl 23/11** | Kick-off (4 h) i planning del S1. Repositori creat. Sol·licitud del servidor de l'institut | Tots · Hugo |
| Dt 24/11 | Esquelets del client i del servidor a `dev` | Jose Andres, Miguel |
| Dc 25/11 | Constants d'esdeveniments i protocol v1 publicats. Stores de Pinia | Miguel · Jose Andres |
| Dj 26/11 | `docker compose up` per a tothom. Entrar i sortir del casino | Hugo · Miguel |
| **Dv 27/11** | Moviment i avatars remots integrats, i BD a `dev`. **Review i retro del S1 → v0.1.0** | Miguel, Ricardo, Jordi · Tots · Hugo |
| **Dl 30/11** | Planning del S2 | Tots |
| Dt 01/12 | Zones i proximitat al servidor | Miguel |
| Dc 02/12 | Autenticació a `dev`. Staging amb HTTPS a l'institut | Miguel · Hugo |
| Dj 03/12 | Login a la interfície. Trucada de taula. TURN i credencials temporals | Jose Andres · Jordi · Hugo i Ricardo |
| **Dv 04/12** | **Review i retro del S2 → v0.2.0** a staging i a `main` | Tots · Hugo |
| **Dl 07/12** | Planning del S3 i acord del format de dades de la ruleta (si és pont, es fa divendres 4 després de la retro) | Tots |
| Dt 08/12 | **Festiu** | — |
| Dc 09/12 | Ruleta al servidor i estadístiques a `dev` | Miguel · Jordi |
| **Dj 10/12** | Ruleta integrada de punta a punta. **Congelació del codi al migdia**; a la tarda, proves E2E en producció | Miguel, Ricardo, Jose Andres · Hugo i tots |
| **Dv 11/12** | **Release v1.0.0, demo i entrega** | Hugo · Tots |

Si el dilluns 7 és pont, el S3 té 3 dies lectius: compteu que el cap de setmana del 5 i el 6 i el dia 7 són per avançar a casa. La congelació del dijous 10 no es mou.

## 5. Kick-off (dilluns 23, 4 h)

Aquest pla és el punt de partida: el kick-off el valida o el canvia. Els entregables van a `/docs` i al README, i els fa l'equip.

| Fase | Durada | Qui | Entregable |
|---|---|---|---|
| 1. Visió, temàtica i abast | 45′ | Tots (modera **Jose Andres**) | Nom, temàtica, els 3 MVP i l'stretch goal al `README.md` (partiu de la proposta del README) |
| 2a. Disseny UX/UI | 1 h 45′ | **Jose Andres** i **Ricardo** | `docs/ux.md`: flux d'usuari i esbossos de les vistes (Jose Andres), i esbós del mapa amb les zones (Ricardo) |
| 2b. Arquitectura | 1 h 45′ | **Hugo**, **Miguel** i **Jordi** | `docs/arquitectura.md`: diagrama de desplegament amb Docker (Hugo). `docs/protocol.md`: esdeveniments de Socket.IO (Miguel), senyalització WebRTC i esdeveniments Vue ↔ Phaser (Jordi) |
| 3. Posada en comú | 1 h | Tots | Presentació creuada i validació: «La informació que viatja pel protocol és suficient per pintar les pantalles i el mapa que hem dissenyat?» |
| 4. Backlog | 30′ | Tots (**Hugo** l'importa a Taiga) | Revisar i prioritzar el [backlog](backlog.md), ajustar el que hagi canviat i importar-lo |

## 6. Decisions a prendre al kick-off

Són recomanacions perquè el kick-off vagi ràpid. La decisió és de l'equip i s'ha de justificar al README.

| Decisió | Opcions | Recomanació | Per què |
|---|---|---|---|
| Gestió de vistes | Vue Router · `v-if` | Vue Router | Permet guards per a la sessió (JAN-08), una URL per a cada vista i recarregar sense perdre on ets. L'enunciat demana justificar-ho |
| Qui decideix la proximitat i les zones | Servidor · client | Servidor | És la font de veritat: els implicats reben la mateixa decisió, es controla la capacitat de les taules i ningú pot fer trampes. El client només pinta el feedback immediat |
| Freqüència del moviment | Cada píxel · limitada | Unes 10 vegades per segon i difusió agrupada | Amb interpolació es veu fluid i no satura la xarxa |
| Llibreria WebRTC | API directa · simple-peer · PeerJS | simple-peer en malla | Ja funciona a la Fase 5 i la senyalització passa pel nostre Socket.IO, com demana l'enunciat. Límit raonable: unes 6 persones per taula |
| Comunicació Vue ↔ Phaser | Bus d'esdeveniments · Pinia | Les dues: Pinia per a l'estat i un bus per als avisos | Els jugadors presents són estat; entrar en una zona o prémer E són esdeveniments puntuals |
| Base de dades | MySQL · SQLite | MySQL en un contenidor | Coherent amb el desplegament amb Docker i amb RA4. SQLite és més senzilla si l'equip va just |
| Versió de Phaser | Phaser 3 (enunciat) · Phaser 4 (pràctiques) | Confirmar-ho amb el professor | Fer servir la de les pràctiques permet reutilitzar la Fase 5. Cal deixar-ho escrit |
| HTTPS | Let's Encrypt · DNS-01 · mkcert | Depèn de la resposta de l'institut (HUG-04) | Servidor públic → Let's Encrypt. Només xarxa interna → DNS-01 o mkcert |

**Codi que podeu reutilitzar de les pràctiques**

| Pràctica | Què hi ha | Per a |
|---|---|---|
| `AEA - Activitat Phaser Fase 5/poc-oficina-virtual` | Vue + Phaser + Vite, component del canvas, escena amb zones de Tiled, composable de vídeo amb SimplePeer | JAN-01, RIC-02, JOR-01 |
| `CANVAS PAINT ROOMS/server.js` | Socket.IO amb sales i estat per sala | MIG-01, MIG-03 |
| `SOCKET.IO/practica_xat_socketio` | Xat amb Socket.IO | MIG-06, JAN-07 |
| `Chat WebRTC Pantalla` | Senyalització WebRTC i compartició de pantalla | JOR-01 (i idees si sobra temps) |

## 7. Dependències i dates límit internes

Quan algú depèn d'una altra persona, treballa mentrestant amb **dades simulades** que segueixin el protocol, i no s'espera de braços plegats.

| Data límit | Ha d'estar a `dev` | Responsable | Ho necessiten |
|---|---|---|---|
| Dl 23/11 | Repositori amb `main` i `dev` (HUG-01) | Hugo | Tots |
| Dt 24/11 | Esquelet del client (JAN-01) i del servidor (MIG-01) | Jose Andres, Miguel | Hugo (HUG-02), Ricardo (RIC-02), Jordi (JOR-01) |
| Dc 25/11 | Constants i protocol v1 (MIG-02) | Miguel | Jose Andres (JAN-04), Miguel (MIG-03) |
| Dj 26/11 | `docker compose up` (HUG-02) | Hugo | Jordi (JOR-02), tots |
| Dj 26/11 | Entrar i sortir (MIG-03) | Miguel | Jose Andres (JAN-03), Ricardo (RIC-04) |
| Dv 27/11 | Moviment (MIG-04) i base de dades (JOR-02) | Miguel · Jordi | Ricardo (RIC-04) · Miguel (MIG-07, MIG-11) |
| Dt 01/12 | Zones i proximitat (MIG-05) | Miguel | Jordi (JOR-03), Ricardo (RIC-05), Jose Andres (JAN-06) |
| Dc 02/12 | Autenticació (MIG-07) | Miguel | Jose Andres (JAN-08), Miguel (MIG-08), Jordi (JOR-06) |
| Dc 02/12 | Staging amb HTTPS (HUG-06) | Hugo | Tots, per provar la càmera entre ordinadors |
| Dj 03/12 | TURN (HUG-07) i credencials temporals (RIC-13) | Hugo · Ricardo | Jordi (JOR-05) |
| Dj 03/12 | Panell de vídeo (JOR-04) | Jordi | Ricardo (RIC-06) |
| Planning del S3 | Format de dades de la ruleta acordat | Miguel, Ricardo, Jose Andres | MIG-09, RIC-09, JAN-09 |
| Dc 09/12 | Ruleta al servidor (MIG-09) | Miguel | Ricardo (RIC-09), Jose Andres (JAN-09), Jordi (JOR-08) |
| Dc 09/12 | Estadístiques i API (JOR-08) | Jordi | Jose Andres (JAN-10, JAN-12) |
| Dj 10/12 (migdia) | Congelació del codi | Tots | Hugo (HUG-12) |

Quan algú s'encalla més d'una hora en una dependència o en una integració, ho diu a la daily i en **Hugo** hi dedica les seves hores de suport.

**Camí crític:** HUG-01 → esquelets → MIG-02 → MIG-03/MIG-04 → MIG-05 → JOR-03 (trucada de taula) → MIG-09 (ruleta) → HUG-12 (release). Si una d'aquestes històries s'endarrereix, es diu a la daily del mateix dia.

## 8. Riscos

| Risc | Probabilitat | Impacte | Prevenció o pla B | Responsable |
|---|---|---|---|---|
| El servidor de l'institut arriba tard o sense els ports demanats | Alta | Alt | Sol·licitud el dilluns 23 (HUG-04). Mentrestant, staging en un portàtil amb mkcert | Hugo |
| El tallafocs bloqueja l'UDP i el vídeo no connecta entre xarxes | Mitjana | Alt | TURN també per TCP/443 (HUG-07). Provar-ho aviat amb dades mòbils | Hugo, Jordi |
| La integració arriba tard perquè cadascú treballa aïllat | Mitjana | Alt | Dates límit internes, PR petites i integració a `dev` cada dia | Tots |
| Un canvi al protocol trenca el client o el servidor | Mitjana | Mitjà | Constants compartides (MIG-02) i el protocol s'actualitza al mateix PR | Miguel |
| Una webcam no es pot fer servir en dos navegadors alhora (Windows) | Alta | Baix | Càmera simulada de Chrome per a les proves | Jordi |
| Festiu del 8 i possible pont del 7 | Segur | Mitjà | Congelació el dijous 10; el que no és Must es pot retallar | Tots |
| L'abast creix amb massa extres | Mitjana | Mitjà | L'stretch només comença quan l'MVP del S3 és a `dev` | Tots |
| Algú es posa malalt o es queda encallat | Mitjana | Mitjà | Les històries Should i Could es mouen o es reparteixen. Es demana ajuda a la daily | Tots |

## 9. Definition of Done

Una història només es tanca a Taiga quan:

- [ ] El codi és en una branca `feature/<ID>-descripcio` i entra a `dev` per una pull request amb la plantilla omplerta.
- [ ] La PR l'ha aprovada el revisor assignat (o un altre membre si no hi és). Les de MIG-05, MIG-07, JOR-03 i MIG-09 les revisa, a més, en Hugo.
- [ ] La CI passa (lint i build).
- [ ] Funciona amb `docker compose up` en local i, a partir del sprint 2, a staging.
- [ ] Si canvia algun esdeveniment, `docs/protocol.md` s'ha actualitzat al mateix PR.
- [ ] Tots els criteris d'acceptació estan marcats a Taiga.
- [ ] No hi ha errors a la consola ni `console.log` de depuració.

## 10. Forma de treballar

**Cerimònies**

| Cerimònia | Quan | Durada | Què |
|---|---|---|---|
| Sprint planning | Dilluns (la del S1 és la fase 4 del kick-off) | 30′ | Confirmar les històries del sprint a Taiga, repassar les dependències i les dates límit |
| Daily asíncrona | Cada dia abans de les 10 h, al grup de l'equip | 2′ | Tres línies: ahir, avui, bloquejos. Qui té una dependència pendent respon el mateix dia |
| Review | Divendres | 30′ | Demo del que hi ha a `dev` comparat amb l'objectiu del sprint |
| Retro | Divendres, després de la review | 30′ | Què ha anat bé, què millorem i una acció concreta per al sprint següent |
| Release | Divendres, després de la retro | — | Hugo fusiona `dev` → `main` i posa el tag (v0.1.0, v0.2.0, v1.0.0) |

**GitFlow**

| Branca | Per a què | Qui hi escriu |
|---|---|---|
| `main` | Codi en producció | Només Hugo, fusionant `dev` al final de cada sprint, amb tag |
| `dev` | Integració | Només per pull request revisada |
| `feature/<ID>-descripcio` | Una per història (p. ex. `feature/MIG-04-moviment`) | El responsable de la història |
| `hotfix/<descripcio>` | Correcció urgent a producció | Surt de `main` i es fusiona a `main` i a `dev` |

**Commits i pull requests**

- Cada commit explica **què canvia i per què**. Per exemple: `servidor: agrupa les posicions cada 100 ms per no saturar la xarxa` o `lobby: mostra els usuaris connectats en temps real`. Missatges com «canvis», «fix» o «asdf» no s'accepten (ho diu l'enunciat).
- PR petites (idealment, menys de 400 línies) i amb l'ID de la història al títol.
- Les revisions es fan en menys de 24 h. Si el revisor no pot, la fa un altre membre.

## 11. Rúbrica → històries

Pesos dels resultats d'aprenentatge segons l'enunciat: RA1 10 % · RA2 10 % · RA3 10 % · RA4 10 % · RA5 5 % · RA6 10 % · RA7 15 %.

| Apartat de la rúbrica | RA | Històries que el cobreixen |
|---|---|---|
| 1. Estructura i codi | RA1, RA2 | HUG-01, HUG-03, JAN-01, MIG-01, MIG-02, RIC-03 |
| 2. Interactivitat i dinamisme | RA3 | RIC-02, RIC-04, RIC-05, RIC-07, RIC-09, JAN-06, JAN-11 |
| 3. Asincronia i comunicació | RA5, RA6 | MIG-03, MIG-04, MIG-05, MIG-06, JOR-01, JOR-03, JOR-08 |
| 4. Sessió i seguretat | RA3, RA7 | MIG-07, JAN-08, MIG-10, MIG-12, HUG-06, HUG-09, RIC-13 |
| 5. Persistència de dades amb BD | RA4 | JOR-02, JOR-08, MIG-08, MIG-11 |
| 6. Gestió d'imatges | RA4, RA6 | JOR-06, JAN-12 (i RIC-08 si hi ha temps) |
| 7. Usabilitat i completesa | RA7 | JAN-02, JAN-03, JAN-05, JAN-10, JAN-13, JOR-04, HUG-11, HUG-12 |
| 8. Extres i creativitat (opcional) | RA7 | JOR-07, JOR-09, RIC-11, MIG-10, STR-01, STR-02 |

## 12. Requisits de l'enunciat → històries

Llista de comprovació per a la review final: cada requisit obligatori té una història responsable.

| Àmbit | Requisit | Històries |
|---|---|---|
| Kick-off | Visió, disseny UX/UI, arquitectura i protocol, backlog | KO-01 |
| Frontend | L'escena de Phaser dins d'un component Vue que es crea a `onMounted` i es destrueix a `onUnmounted` | RIC-02 |
| Frontend | Comunicació Vue ↔ Phaser documentada | RIC-03 |
| Frontend | Pinia amb l'usuari actual, els usuaris presents i l'estat de les trucades | JAN-04 |
| Frontend | Gestió de vistes justificada al README | JAN-01, HUG-11 |
| Frontend | Entrada: nom, avatar o color, permís i previsualització de la càmera, entrar sense vídeo | JAN-02, JAN-05 |
| Frontend | Lobby: usuaris en temps real i acció clara per entrar | JAN-03 |
| Frontend | Espai: canvas, panell de presència, panell de vídeo amb controls i feedback visual | JAN-06, JOR-04, RIC-05, RIC-06, JAN-11 |
| Frontend | Sortida o resum adaptat a la temàtica | JAN-10 |
| Backend | Connexions i desconnexions notificades a l'instant | MIG-03 |
| Backend | Sales i estat de l'espai com a font de veritat | MIG-03, MIG-05 |
| Backend | Moviment amb una freqüència raonada | MIG-04 |
| Backend | Proximitat i zones, amb justificació de qui ho decideix | MIG-05 |
| Backend | Senyalització WebRTC (oferta, resposta i candidats ICE) | JOR-01 |
| Backend | Lògica de la temàtica | MIG-08, MIG-09, MIG-11 |
| Backend | Protocol documentat i actualitzat sprint a sprint | MIG-02 |
| Backend | Element interactiu a l'espai | RIC-07, RIC-10 |
| Desplegament | Dockerfile multietapa del frontend amb Nginx i Dockerfile del backend | HUG-02, HUG-05 |
| Desplegament | `docker compose up` aixeca tota l'aplicació | HUG-02 |
| Desplegament | Configuració per `.env` i `.env.example` documentat | HUG-02 |
| Desplegament | WebSockets a través de Nginx | HUG-05 |
| Desplegament | HTTPS | HUG-06 |
| Desplegament | Servidor TURN (es valora) | HUG-07, RIC-13, JOR-05 |
| Desenvolupament | GitFlow, PR revisades per un altre membre i commits significatius | HUG-01, HUG-03 i la [Definition of Done](#9-definition-of-done) |
| Desenvolupament | README actualitzat (instal·lació, variables, enllaç al protocol) | HUG-11 |
