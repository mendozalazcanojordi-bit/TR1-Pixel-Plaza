# Product Backlog · CasinoPlaza

> Generat a partir de `taiga/user-stories.json` (fitxer local, no es puja al repositori). El detall de cada història és a la [pàgina del pla](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX). Ordre: sprint → prioritat (Must, Should, Could) → responsable. Un cop importat a Taiga, el backlog es manté allà.

Puntuació de Taiga a partir de l'estimació: ≤1 h = 1 · 2 h = 2 · 3 h = 3 · 4–5 h = 5.

## Hores de desenvolupament per persona

| Persona | Rol | S1 | S2 | S3 | Total | Històries |
|---|---|---|---|---|---|---|
| [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | DevOps / desplegament · release manager · suport | 9 h | 10 h | 10 h | **29 h** | 11 |
| [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Backend Socket.IO + lògica de joc · owner del protocol | 9 h | 12 h | 12 h | **33 h** | 12 |
| [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Frontend Vue + Pinia · owner d'UX | 9 h | 12 h | 12 h | **33 h** | 13 |
| [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Espai 2D (Phaser + Tiled) | 9 h | 12 h | 12 h | **33 h** | 12 |
| [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | WebRTC + base de dades + imatges | 9 h | 12 h | 12 h | **33 h** | 10 |
| **Equip** | | **45 h** | **58 h** | **58 h** | **161 h** | 58 |

Punts per sprint: S1 = 46 · S2 = 64 · S3 = 59. A més, cada persona dedica 12 h al kick-off, a les cerimònies i a revisar PR, i en Hugo en dedica 4 més a donar suport a l'equip (vegeu el [pla d'execució](pla-execucio.md#2-hores-per-persona)).

## Sprint 1 · Obrim portes · 23/11–27/11 · v0.1.0

**Objectiu:** docker compose up aixeca tot en local; entrar amb nom i avatar; lobby en temps real; el propi avatar i els dels altres es mouen pel mapa en temps real; qui es desconnecta desapareix. GitFlow i CI en marxa.

| # | ID | Història d'usuari | Responsable | Prioritat | Punts | Hores | Depèn de |
|---|---|---|---|---|---|---|---|
| 1 | KO-01 | Com a equip, vull acordar la visió, el disseny i l'arquitectura a la sessió de kick-off per començar el primer sprint amb un pla comú i els entregables a /docs | Tot l'equip | Must | — | 4 h × 5 | — |
| 2 | HUG-01 | Com a membre de l'equip, vull un repositori amb GitFlow (main, dev i branques feature) i les branques protegides per integrar la feina de tots sense trencar el codi que ja funciona | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Must | 2 | 2 h | — |
| 3 | HUG-02 | Com a desenvolupador de l'equip, vull aixecar el frontend, el backend i la base de dades amb una sola comanda docker compose up per treballar tots amb el mateix entorn sense instal·lar res més que Docker | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Must | 5 | 5 h | HUG-01, JAN-01, MIG-01 |
| 4 | HUG-03 | Com a membre de l'equip, vull que cada pull request a dev passi automàticament el lint i el build per detectar errors abans de la revisió i no trencar dev | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Must | 1 | 1 h | HUG-01 |
| 5 | HUG-04 | Com a equip, vull tenir confirmat el servidor de l'institut amb accés SSH, Docker i els ports oberts per poder publicar l'aplicació amb HTTPS i TURN des del segon sprint | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Must | 1 | 1 h | — |
| 6 | MIG-01 | Com a desenvolupador de l'equip, vull un servidor Node.js amb Express i Socket.IO configurat per variables d'entorn per tenir una base comuna on afegir la lògica del casino | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Must | 2 | 2 h | — |
| 7 | MIG-02 | Com a desenvolupador de l'equip, vull els noms dels esdeveniments en un mòdul compartit i el protocol v1 publicat al repositori perquè el client i el servidor parlin el mateix idioma sense errors de nom | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Must | 2 | 2 h | KO-01 |
| 8 | MIG-03 | Com a jugador, vull rebre qui hi ha al casino en entrar i que els altres sàpiguen a l'instant que he entrat o marxat per compartir l'espai amb els altres en temps real | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Must | 3 | 3 h | MIG-01, MIG-02 |
| 9 | MIG-04 | Com a jugador, vull que el meu moviment arribi als altres de manera fluida sense saturar la xarxa perquè tothom vegi on sóc en temps real | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Must | 2 | 2 h | MIG-03 |
| 10 | JAN-01 | Com a desenvolupador de l'equip, vull un projecte Vue 3 amb Vite, Vue Router, Pinia i l'estil base del casino perquè tothom construeixi les vistes sobre la mateixa base | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Must | 3 | 3 h | — |
| 11 | JAN-02 | Com a visitant, vull escriure el meu nom i triar un avatar i un color per poder-me identificar dins del casino | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Must | 2 | 2 h | JAN-04 |
| 12 | JAN-03 | Com a visitant, vull veure al lobby qui està connectat en temps real per saber qui hi ha al casino abans d'entrar-hi | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Must | 2 | 2 h | JAN-04, MIG-03 |
| 13 | JAN-04 | Com a desenvolupador de l'equip, vull stores de Pinia per a l'usuari, els jugadors i la trucada, i un únic servei de Socket.IO perquè Vue i Phaser llegeixin el mateix estat sense duplicar connexions | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Must | 2 | 2 h | MIG-02 |
| 14 | RIC-01 | Com a jugador, vull un mapa de casino amb zones clares (recepció, bar, ruleta, blackjack i escurabutxaques) per saber on anar i què puc fer a cada lloc | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Must | 3 | 3 h | — |
| 15 | RIC-02 | Com a jugador, vull moure el meu avatar animat pel casino amb el teclat sense travessar les parets per desplaçar-me per l'espai de manera natural | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Must | 2 | 2 h | RIC-01, JAN-01 |
| 16 | RIC-03 | Com a desenvolupador de l'equip, vull un bus d'esdeveniments documentat entre Vue i Phaser perquè el joc i la interfície es comuniquin sense dependre l'un de l'altre | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Must | 1 | 1 h | — |
| 17 | RIC-04 | Com a jugador, vull veure els avatars dels altres jugadors movent-se en temps real per saber on és cadascú dins del casino | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Must | 3 | 3 h | RIC-02, MIG-03, MIG-04 |
| 18 | JOR-01 | Com a desenvolupador de l'equip, vull una prova de videotrucada entre dos navegadors amb la senyalització per Socket.IO per validar al primer sprint la part més arriscada del projecte | [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | Must | 5 | 4 h | MIG-01 |
| 19 | JOR-02 | Com a desenvolupador de l'equip, vull una base de dades amb el model del casino i una capa d'accés per guardar els usuaris, les fitxes i les partides de manera persistent | [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | Must | 5 | 5 h | HUG-02 |

## Sprint 2 · Seu a la taula · 30/11–04/12 · v0.2.0

**Objectiu:** Registre i login; previsualització de càmera; seure a una taula obre la videotrucada (micro, càmera, sortir); panell de presència; xat general i de taula; escurabutxaques interactiva; foto de perfil; staging a l'institut amb HTTPS i TURN.

| # | ID | Història d'usuari | Responsable | Prioritat | Punts | Hores | Depèn de |
|---|---|---|---|---|---|---|---|
| 20 | HUG-05 | Com a jugador, vull que l'aplicació es serveixi des d'un únic domini amb Nginx, incloent-hi la connexió en temps real per entrar al casino sense errors de connexió ni de CORS | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Must | 3 | 3 h | HUG-02 |
| 21 | HUG-06 | Com a jugador, vull entrar al casino per HTTPS des del servidor de l'institut perquè el navegador em deixi fer servir la càmera i el micròfon | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Must | 5 | 5 h | HUG-04, HUG-05 |
| 22 | MIG-05 | Com a jugador, vull que el servidor detecti quan entro en una taula o quan tinc algú a prop perquè la trucada comenci sola amb les persones correctes | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Must | 5 | 4 h | MIG-04, RIC-01 |
| 23 | MIG-07 | Com a visitant, vull crear un compte i iniciar sessió de manera segura perquè ningú més pugui jugar amb les meves fitxes | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Must | 5 | 4 h | JOR-02 |
| 24 | MIG-08 | Com a jugador, vull que el resultat de l'escurabutxaques el decideixi el servidor perquè ningú pugui fer trampes canviant el codi del navegador | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Must | 2 | 2 h | MIG-07 |
| 25 | JAN-05 | Com a visitant, vull veure la previsualització de la càmera i el micròfon abans d'entrar per comprovar que em veuran i em sentiran bé | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Must | 2 | 2 h | JAN-02 |
| 26 | JAN-06 | Com a jugador, vull una pantalla principal amb el mapa, la llista de presents i les meves fitxes per saber en tot moment qui hi ha, on és i què fa | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Must | 5 | 4 h | RIC-02, RIC-03, MIG-05 |
| 27 | JAN-08 | Com a visitant, vull registrar-me i iniciar sessió amb usuari i contrasenya per conservar les meves fitxes i el meu perfil entre visites | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Must | 3 | 3 h | MIG-07 |
| 28 | RIC-05 | Com a jugador, vull veure clarament quan entro o surto d'una zona i quanta gent hi ha per decidir a quina taula m'assec | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Must | 3 | 3 h | MIG-05 |
| 29 | RIC-07 | Com a jugador, vull fer servir una màquina escurabutxaques prement E quan hi sóc a prop per tenir alguna cosa a fer al casino encara que estigui sol | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Must | 5 | 4 h | MIG-08 |
| 30 | JOR-03 | Com a jugador, vull que s'obri una videotrucada amb tothom qui seu a la meva taula per parlar cara a cara amb els meus companys de joc | [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | Must | 5 | 4 h | JOR-01, MIG-05 |
| 31 | JOR-04 | Com a jugador en trucada, vull un panell de vídeo amb botons per silenciar el micro, apagar la càmera i sortir per controlar què comparteixo amb la taula | [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | Must | 3 | 3 h | JOR-03 |
| 32 | JOR-06 | Com a jugador, vull pujar una foto de perfil perquè els altres em reconeguin quan no tinc la càmera encesa | [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | Must | 5 | 4 h | MIG-07 |
| 33 | HUG-07 | Com a jugador connectat des d'una altra xarxa, vull que la videotrucada funcioni encara que sigui darrere del tallafocs de l'institut o amb dades mòbils per poder parlar amb els companys de taula des de qualsevol lloc | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Should | 2 | 2 h | HUG-04 |
| 34 | MIG-06 | Com a jugador, vull enviar missatges al xat general o al de la meva taula per comunicar-me amb els altres | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Should | 2 | 2 h | MIG-03 |
| 35 | JAN-07 | Com a jugador, vull xatejar amb tot el casino o només amb la gent de la meva taula per comunicar-me encara que no tingui càmera | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Should | 3 | 3 h | MIG-06 |
| 36 | RIC-06 | Com a jugador, vull veure qui tinc a prop i qui està en trucada o té el micro obert per decidir amb qui parlo | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Should | 3 | 3 h | JOR-04 |
| 37 | RIC-13 | Com a jugador, vull que el servidor em doni credencials TURN temporals perquè ningú de fora pugui aprofitar el nostre servidor TURN | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Should | 2 | 2 h | MIG-07, HUG-07 |
| 38 | JOR-05 | Com a jugador d'una altra xarxa, vull que la trucada faci servir el servidor TURN quan la connexió directa no és possible per no quedar-me sense vídeo per culpa del tallafocs | [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | Should | 1 | 1 h | HUG-07, RIC-13 |

## Sprint 3 · Fem joc · 07/12–11/12 · v1.0.0

**Objectiu:** Ruleta multijugador amb fitxes desades a la BD; trucada de proximitat al bar; reconnexió en 30 s; resum i rànquing; sons; producció i demo. Dimarts 8 és festiu: congelació del codi dijous 10.

| # | ID | Història d'usuari | Responsable | Prioritat | Punts | Hores | Depèn de |
|---|---|---|---|---|---|---|---|
| 39 | HUG-08 | Com a professor avaluador, vull que la versió de main estigui en producció i es recuperi sola si un contenidor cau per poder provar l'aplicació en qualsevol moment | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Must | 3 | 3 h | HUG-06 |
| 40 | HUG-11 | Com a professor avaluador, vull un README que expliqui com instal·lar, configurar i desplegar el projecte per poder executar-lo jo mateix sense ajuda | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Must | 2 | 2 h | — |
| 41 | HUG-12 | Com a equip, vull provar l'aplicació en producció amb 5 usuaris des de xarxes diferents abans de l'entrega per arribar a la demo sabent que tot funciona | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Must | 3 | 3 h | HUG-08 |
| 42 | MIG-09 | Com a jugador de ruleta, vull que la ruleta de la taula funcioni per rondes iguals per a tothom per jugar de manera justa amb els meus companys | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Must | 5 | 5 h | MIG-05, MIG-07 |
| 43 | MIG-12 | Com a jugador, vull que el servidor rebutgi les dades incorrectes o malintencionades perquè ningú pugui trencar el casino ni fer trampes | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Must | 2 | 2 h | — |
| 44 | JAN-09 | Com a jugador de ruleta, vull un panell per apostar amb les meves fitxes a la taula de ruleta per jugar amb els companys de taula | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Must | 3 | 3 h | MIG-09 |
| 45 | JAN-10 | Com a jugador, vull veure un resum quan surto del casino per saber quant de temps hi he estat, amb qui he parlat i com m'ha anat | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Must | 3 | 3 h | JOR-08 |
| 46 | RIC-09 | Com a jugador de ruleta, vull veure girar la ruleta i aturar-se al número guanyador alhora que els meus companys per viure la tirada junts mentre parlem per vídeo | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Must | 5 | 5 h | MIG-09 |
| 47 | JOR-08 | Com a jugador, vull que es guardin les meves partides i les estadístiques de la visita per poder veure el meu resum i el rànquing | [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | Must | 5 | 4 h | JOR-02, MIG-09 |
| 48 | JOR-10 | Com a equip, vull provar les videotrucades amb 3 a 6 usuaris i en situacions de fallada per conèixer els límits reals abans de la demo | [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | Must | 2 | 2 h | JOR-03 |
| 49 | HUG-09 | Com a jugador, vull que l'aplicació publicada tingui les capçaleres de seguretat i cap secret al repositori per confiar que el meu compte i les meves dades estan protegits | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Should | 2 | 2 h | HUG-05 |
| 50 | MIG-10 | Com a jugador, vull tornar al mateix lloc si perdo la connexió menys de 30 segons per no perdre la meva taula ni la partida per un tall | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Should | 3 | 3 h | MIG-07 |
| 51 | MIG-11 | Com a jugador sense fitxes, vull recollir una recàrrega de fitxes un cop al dia a la caixa per poder continuar jugant encara que ho hagi perdut tot | [Miguel](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#miguel) | Should | 2 | 2 h | JOR-02 |
| 52 | JAN-11 | Com a jugador, vull rebre avisos quan entro en una zona, quan comença o acaba una trucada i quan algú arriba per entendre què passa sense haver de mirar tota la pantalla | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Should | 2 | 2 h | — |
| 53 | JAN-12 | Com a jugador, vull veure el meu perfil i el rànquing dels jugadors amb més fitxes per comparar-me amb els altres i canviar la meva foto | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Should | 2 | 2 h | JOR-06, JOR-08 |
| 54 | JAN-13 | Com a jugador, vull que l'aplicació sigui clara i funcioni en pantalles de mides diferents per no perdre'm ni trobar errors durant la partida | [Jose Andres](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jose-andres) | Should | 2 | 2 h | — |
| 55 | RIC-10 | Com a jugador sense fitxes, vull anar a la caixa de la recepció a recollir la recàrrega diària per poder continuar jugant | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Should | 2 | 2 h | MIG-11 |
| 56 | RIC-12 | Com a jugador, vull que el mapa vagi fluid i sense errors encara que hi hagi molta gent per gaudir de l'experiència sense talls | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Should | 3 | 3 h | — |
| 57 | JOR-07 | Com a jugador al bar, vull que s'obri una trucada quan m'acosto a algú al bar per conèixer gent nova sense haver de seure a una taula | [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | Should | 3 | 3 h | MIG-05, JOR-04 |
| 58 | RIC-11 | Com a jugador, vull sentir efectes de so quan entro, quan guanyo i quan comença una trucada perquè el casino sembli viu | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Could | 2 | 2 h | — |
| 59 | JOR-09 | Com a jugador en trucada, vull veure qui està parlant per seguir la conversa quan hi ha molta gent a la taula | [Jordi](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#jordi) | Could | 3 | 3 h | JOR-04 |

## Stretch goal i extres (sense sprint)

Només s'hi treballa si l'MVP del sprint 3 ja és a `dev`. Les històries amb responsable són extres de la seva àrea; les altres les agafa qui acabi abans.

| ID | Història d'usuari | Responsable | Prioritat | Punts | Hores | Depèn de |
|---|---|---|---|---|---|---|
| HUG-10 | Com a membre de l'equip, vull desplegar una nova versió amb una sola comanda o automàticament en fusionar a main per no perdre temps ni cometre errors a cada desplegament | [Hugo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#hugo) | Could | 2 | 2 h | HUG-08 |
| RIC-08 | Com a visitant, vull triar entre diversos personatges a l'entrada per personalitzar com em veuen els altres | [Ricardo](https://claude.ai/artifact/Swdd6GCMXW8extgTDgz8VX#ricardo) | Could | 2 | 2 h | JAN-02 |
| STR-01 | Com a grup d'amics, vull una Sala VIP privada on només s'entra amb un codi per jugar i parlar sense que hi entri gent desconeguda | Sense assignar | Could | 5 | 5 h | MIG-05, RIC-05 |
| STR-02 | Com a crupier de la Sala VIP, vull poder silenciar o expulsar algú de la meva taula per mantenir l'ordre a la sala | Sense assignar | Could | 5 | 5 h | STR-01, JOR-04 |

## Detall de les històries sense responsable

<a id="ko-01"></a>

### KO-01 · Com a equip, vull acordar la visió, el disseny i l'arquitectura a la sessió de kick-off per començar el primer sprint amb un pla comú i els entregables a /docs

**Prioritat:** Must · **Punts:** — · **Estimació:** 4 h per persona

**Depèn de:** — · **La necessiten:** MIG-02

Sessió de 4 hores el dilluns 23 (ja comptada a les 45 h de cadascú). Aquest pla és la proposta de partida: el kick-off la valida o la canvia. Els entregables els fa l'equip.

**Criteris d'acceptació**

- [ ] README.md amb el nom, la temàtica, els 3 MVP i l'stretch goal acordats.
- [ ] docs/ux.md amb el flux d'usuari, els esbossos de cada vista i l'esbós del mapa amb les zones.
- [ ] docs/arquitectura.md amb el diagrama de desplegament amb Docker i la integració Vue ↔ Phaser.
- [ ] docs/protocol.md v1 amb els esdeveniments de Socket.IO i la senyalització de WebRTC.
- [ ] Backlog revisat i importat a Taiga.

| Tasca | Responsable |
|---|---|
| Fase 1 · Visió, MVP i stretch al README (modera) | Jose Andres |
| Fase 2a · Flux d'usuari i esbossos de les pantalles | Jose Andres |
| Fase 2a · Esbós del mapa i de les zones | Ricardo |
| Fase 2b · Diagrama del sistema amb Docker (nginx, backend, MySQL, coturn) | Hugo |
| Fase 2b · Esdeveniments de Socket.IO del lobby a la taula | Miguel |
| Fase 2b · Senyalització WebRTC i esdeveniments Vue ↔ Phaser | Jordi |
| Fase 4 · Revisar el backlog i importar-lo a Taiga | Hugo |

**Pistes**

- La llista de decisions a prendre (amb recomanació) és a docs/pla-execucio.md.
- Pregunta clau de la fase 3: «La informació que viatja pel protocol és suficient per pintar les pantalles i el mapa que hem dissenyat?»

<a id="str-01"></a>

### STR-01 · Com a grup d'amics, vull una Sala VIP privada on només s'entra amb un codi per jugar i parlar sense que hi entri gent desconeguda

**Prioritat:** Could (stretch) · **Punts:** 5 · **Estimació:** 5 h

**Depèn de:** MIG-05, RIC-05 · **La necessiten:** STR-02

Stretch goal. Només es comença si l'MVP del sprint 3 ja és a dev. L'agafa qui acabi abans.

**Criteris d'acceptació**

- [ ] Porta de la Sala VIP al mapa; en interactuar-hi es demana el codi.
- [ ] El servidor valida el codi i només deixa entrar qui l'encerta; la trucada de la sala és privada.

| Tasca | Hores |
|---|---|
| Porta i diàleg del codi | 2 h |
| Validació del codi i zona privada al servidor | 2 h |
| Proves | 1 h |

<a id="str-02"></a>

### STR-02 · Com a crupier de la Sala VIP, vull poder silenciar o expulsar algú de la meva taula per mantenir l'ordre a la sala

**Prioritat:** Could (stretch) · **Punts:** 5 · **Estimació:** 5 h

**Depèn de:** STR-01, JOR-04 · **La necessiten:** —

Stretch goal (rols i moderació). Depèn de STR-01.

**Criteris d'acceptació**

- [ ] Qui crea la sala és l'amfitrió (crupier) i tothom ho veu.
- [ ] L'amfitrió pot silenciar el micro d'un participant i expulsar-lo; el servidor comprova el rol.

| Tasca | Hores |
|---|---|
| Rol d'amfitrió i esdeveniments de moderació al servidor | 2,5 h |
| Botons de moderació al panell de vídeo | 1,5 h |
| Proves | 1 h |
