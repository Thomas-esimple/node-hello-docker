FROM node:8
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 443
CMD [ "npm", "start" ]