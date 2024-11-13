
FROM node:23.1

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]

EXPOSE 3006