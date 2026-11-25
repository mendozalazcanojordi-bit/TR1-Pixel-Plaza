# CasinoPlaza · client

Frontend de CasinoPlaza: Vue 3 (`<script setup>`), Vite, Pinia i Vue Router. Correspon a la història **JAN-01**.

## Comandes

Cal Node `^22.18.0` o `>=24.12.0`.

```bash
npm install      # instal·lar dependències
npm run dev      # servidor de desenvolupament a http://localhost:5173
npm run lint     # oxlint + ESLint (corregeix el que pot)
npm run format   # Prettier sobre src/
npm run build    # build de producció a dist/
```

El servidor de Vite escolta a totes les interfícies (`server.host: true`, port 5173) perquè sigui accessible des del contenidor de Docker.

## Estructura

```
src/
├── assets/styles/   theme.css (variables del tema) i base.css (estils globals)
├── components/ui/   components bàsics reutilitzables: BaseButton, BaseCard
├── router/          rutes de l'aplicació
├── services/        servei únic de Socket.IO (JAN-04)
├── stores/          stores de Pinia: sessió, jugadors i trucada (JAN-04)
└── views/           Entrada, Lobby, Casino i Resum
```

## Rutes

| Ruta      | Nom       | Vista                            |
| --------- | --------- | -------------------------------- |
| `/`       | `entrada` | Nom, avatar i color (JAN-02)     |
| `/lobby`  | `lobby`   | Jugadors connectats (JAN-03)     |
| `/casino` | `casino`  | Mapa de Phaser (MIG-02 / MIG-04) |
| `/resum`  | `resum`   | Resum en sortir (sprint 3)       |

Qualsevol altra ruta redirigeix a l'entrada.

## Tema

Tots els colors, tipografies i espais són variables CSS a `src/assets/styles/theme.css`. Als components feu servir sempre `var(--...)`, mai valors directes.

- `BaseButton`: prop `variant` = `primary` (daurat), `secondary` o `danger`.
- `BaseCard`: prop `title` i slots `header`, per defecte i `footer`.
