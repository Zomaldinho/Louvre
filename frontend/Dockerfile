FROM node

WORKDIR /app

COPY package*.json /app
RUN cd /app && npm install

COPY . /app

EXPOSE 3000

CMD [ "npm", "start" ]