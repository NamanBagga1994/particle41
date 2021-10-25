FROM node:14
#adding a  user par41 to run our application as non root
RUN useradd -u 8877 par41

#defining the work directory of out application
WORKDIR /usr/src/app
#copy package.json in container
COPY package*.json ./

RUN npm install

USER par41
#copying the bundle inside container
COPY . .

EXPOSE 8080
# running the app
CMD [ "node", "app.js" ]


