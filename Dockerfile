FROM node:latest
WORKDIR /app
EXPOSE 3000
COPY  index.js package.json package-lock.json /app/
ADD secrets /app/secrets/
RUN npm i
CMD npm start
