FROM node

WORKDIR /app

COPY package*.json /app
RUN cd /app && npm install

COPY . /app

EXPOSE 5000

ENV DB_URL="mongodb+srv://root:MHlDw6ve2wSxk64w@cluster0.306uy.mongodb.net/Louvre?retryWrites=true&w=majority"

CMD [ "node", "app.js" ]
