FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/vite.config.js ./
RUN npm install --omit=dev
RUN npm install @vitejs/plugin-react --save-dev
EXPOSE 80
CMD ["npm", "run", "preview", "--", "--config", "vite.config.js"]
