# Servidor Node.js + Socket.IO per a desenvolupament (HUG-02).
# El codi arriba per un volum (docker-compose.yml), per això aquí no es copia res.
FROM node:22-alpine

WORKDIR /app
EXPOSE 3000
ENV NPM_CONFIG_UPDATE_NOTIFIER=false

# En arrencar: instal·la o actualitza les dependències (es guarden al volum server_node_modules)
# i engega el servidor amb nodemon. --legacy-watch fa servir polling perquè, a Windows,
# els canvis dels fitxers muntats no arriben al contenidor com a esdeveniments.
CMD ["sh", "-c", "npm install --no-audit --no-fund && exec npx nodemon --legacy-watch --ignore client/ --ignore docs/ --ignore docker/ --ignore taiga/ server.js"]
