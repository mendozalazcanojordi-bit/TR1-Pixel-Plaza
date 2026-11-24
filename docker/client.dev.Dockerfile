# Client Vue 3 + Vite per a desenvolupament (HUG-02).
# El codi de client/ arriba per un volum (docker-compose.yml), per això aquí no es copia res.
FROM node:22-alpine

WORKDIR /app
EXPOSE 5173
ENV NPM_CONFIG_UPDATE_NOTIFIER=false

# A Windows, els canvis dels fitxers muntats no arriben al contenidor com a esdeveniments.
# Amb aquesta variable, client/vite.config.js activa el polling (server.watch.usePolling): vegeu el README.
ENV VITE_POLLING=true

# Si client/ encara és buit (el client no s'ha fusionat), el servei espera en lloc de fallar.
# Si hi és: instal·la o actualitza les dependències (volum client_node_modules) i engega Vite.
CMD ["sh", "-c", "if [ ! -f package.json ]; then echo 'client/ encara no té package.json: el servei del client queda en espera.'; exec sleep infinity; fi; npm install --no-audit --no-fund && exec npm run dev -- --host 0.0.0.0"]
