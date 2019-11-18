package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"

	guestbookpb "../proto"
	"google.golang.org/grpc"
)

type GuestBookServiceServer struct {
}

func (s *GuestBookServiceServer) CreateComment(ctx context.Context, req *guestbookpb.CreateCommentReq) (*guestbookpb.CreateCommentRes, error) {
	log.Printf("Comment Created Successfully at %s:", req)

	return &guestbookpb.CreateCommentRes{Timestamp: req.Timestamp}, nil
}

func (s *GuestBookServiceServer) UpdateComment(ctx context.Context, req *guestbookpb.UpdateCommentReq) (*guestbookpb.UpdateCommentRes, error) {
	log.Printf("Comment Updated Successfully at %s", req)
	return &guestbookpb.UpdateCommentRes{Timestamp: req.Timestamp}, nil
}

func (s *GuestBookServiceServer) DeleteComment(ctx context.Context, req *guestbookpb.DeleteCommentReq) (*guestbookpb.DeleteCommentRes, error) {
	log.Printf("Comment deleted Successfully at %s", req)
	return &guestbookpb.DeleteCommentRes{Success: true}, nil
}

func main() {

	// Configure 'log' package to give file name and line number on eg. log.Fatal
	// just the filename & line number:
	// log.SetFlags(log.Lshortfile)
	// Or add timestamps and pipe file name and line number to it:
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	fmt.Println("Starting server on port :14586...")

	// 50051 is the default port for gRPC
	// Ideally we'd use 0.0.0.0 instead of localhost as well
	listener, err := net.Listen("tcp", ":14586")

	if err != nil {
		log.Fatalf("Unable to listen on port :14586: %v", err)
	}

	// slice of gRPC options
	// Here we can configure things like TLS
	opts := []grpc.ServerOption{}
	// var s *grpc.Server
	s := grpc.NewServer(opts...)
	// var srv *GuestBookServiceServer
	srv := &GuestBookServiceServer{}

	guestbookpb.RegisterCommentServiceServer(s, srv)

	// Start the server in a child routine
	go func() {
		if err := s.Serve(listener); err != nil {
			log.Fatalf("Failed to serve: %v", err)
		}
	}()
	fmt.Println("Server succesfully started on port :14586")

	// Bad way to stop the server
	// if err := s.Serve(listener); err != nil {
	// 	log.Fatalf("Failed to serve: %v", err)
	// }
	// Right way to stop the server using a SHUTDOWN HOOK

	// Create a channel to receive OS signals
	c := make(chan os.Signal)

	// Relay os.Interrupt to our channel (os.Interrupt = CTRL+C)
	// Ignore other incoming signals
	signal.Notify(c, os.Interrupt)

	// Block main routine until a signal is received
	// As long as user doesn't press CTRL+C a message is not passed
	// And our main routine keeps running
	// If the main routine were to shutdown so would the child routine that is Serving the server
	<-c

	// After receiving CTRL+C Properly stop the server
	fmt.Println("\nStopping the server...")
	s.Stop()
	listener.Close()
	fmt.Println("Done.")
}
