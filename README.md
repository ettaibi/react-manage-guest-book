# react-manage-guest-book

React example for managing a guest book, using hooks, and GRPC-WEB with a golang backend

A comment is persisted in local storage, and a log message is shown in backend for CUD operations.

to run the server

```
cd server
go run main.go
```

run envoy using docker

```
cd envoy
sudo -E docker build -t envoy:v1 .
sudo docker run  -p 8080:8080 envoy:v1
```

Generate protos and js grpc web pb

```
make gen
```

Before running react app you need to go to the generated files under `guestbook-client/src/client/proto/`. then add `/*eslint-disable*/` at the top of all generated files.

```
yarn add
yarn start
```
