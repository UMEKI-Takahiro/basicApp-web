FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 2001
CMD [ "npm", "run", "start-dev" ]
