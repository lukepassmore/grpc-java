# Ionic gRPC POC
POC project exchanging Protocol Buffer messages between Java server and Ionic client

## Notes
- Ionic 5.6.7 / Angular 12.0.1 / ESLint
- Springboot CLI tools
- npm install for first run
- chmod +x mvnw for server permissions
- protobufjs to structure remote procedure call buffers https://www.npmjs.com/package/protobufjs
- ProtobufHttpMessageConverter to consume http requests into buffers

## Run the gRPC server
From the server directory run: ./mvnw spring-boot:run

## Run the Ionic app
From the client directory run: ionic serve

## Useful mappings
- request mappings >> server/src/java/DataController.java
- data processing >> server/src/java/DataDb.java
- client api >> client/src/app/api.service.ts
- result view >> client/src/app/protobufparsed/protobufparsed.page.ts

## Demonstrated methods
- GET JSON
- GET raw protocol buffers
- GET decoded protocol buffers 
- POST protocol buffers
- PUT protocol buffers
- DELETE protocol buffers
- PATCH protocol buffers