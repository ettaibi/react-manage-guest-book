import {
  CreateCommentReq,
  UpdateCommentReq,
  DeleteCommentReq
} from "../client/proto/guestbook_pb";
import { CommentServiceClient } from "../client/proto/guestbook_grpc_web_pb";
const API = "http://localhost:8080";
const client = new CommentServiceClient(API, null, null);

export const createComment = time => {
  const request = new CreateCommentReq();
  request.setTimestamp(time);
  client.createComment(request, {}, (err, response) => {
    console.log(response);
  });
};

export function updateComment(time) {
  const request = new UpdateCommentReq();
  request.setTimestamp(time);
  client.updateComment(request, {}, (err, response) => {
    console.log(response);
  });
}
export function deleteComment(time) {
  const request = new DeleteCommentReq();
  request.setTimestamp(time);
  client.deleteComment(request, {}, (err, response) => {
    console.log(response);
  });
}
