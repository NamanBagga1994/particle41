# particle41

app.js ---- Refers to webapp in node JS 

Dockerfile ---- Refers to Dockerfile that creates an image that can run our webapplication localhost:8080/

Application.yml --- Refers to defination file with Deployment and service defined inside it to deploy our app and expose it on out local host.



Steps followed: 
Created a Node js basic webapplication.

Created a docker file with non root user (par41) .

Created a docker image out of the docker file and container to check if the application is running fine.

Application gave the desired result in form of IP and timestamp.

Published the docker image in public repository. Image : 475149/particle41:1

created an application.yml defination file with Deployment and service defination to create 1 pod and expose it using nodeport type of service using nodeport
value 30001.  


With kubernetes running via minikube , used below command to deploy our application :
kubectl apply -f application.yml 
