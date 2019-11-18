gen:
	protoc -I=. proto/guestbook.proto --js_out=import_style=commonjs:guestbook-client/src/client/. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:guestbook-client/src/client/.
	protoc proto/guestbook.proto --go_out=plugins=grpc:.

