FROM node:14

#RUN apt-get update
#RUN apt-get -y install nodejs

#create app dir
WORKDIR /usr/src/app
#copy package.json in container
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]
