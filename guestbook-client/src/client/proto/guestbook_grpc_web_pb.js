/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for guestbook
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

const grpc = {};
grpc.web = require("grpc-web");

const proto = {};
proto.guestbook = require("./guestbook_pb.js");

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.guestbook.CommentServiceClient = function(
  hostname,
  credentials,
  options
) {
  if (!options) options = {};
  options["format"] = "text";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.guestbook.CommentServicePromiseClient = function(
  hostname,
  credentials,
  options
) {
  if (!options) options = {};
  options["format"] = "text";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.guestbook.CreateCommentReq,
 *   !proto.guestbook.CreateCommentRes>}
 */
const methodDescriptor_CommentService_CreateComment = new grpc.web.MethodDescriptor(
  "/guestbook.CommentService/CreateComment",
  grpc.web.MethodType.UNARY,
  proto.guestbook.CreateCommentReq,
  proto.guestbook.CreateCommentRes,
  /**
   * @param {!proto.guestbook.CreateCommentReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.guestbook.CreateCommentRes.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.guestbook.CreateCommentReq,
 *   !proto.guestbook.CreateCommentRes>}
 */
const methodInfo_CommentService_CreateComment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.guestbook.CreateCommentRes,
  /**
   * @param {!proto.guestbook.CreateCommentReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.guestbook.CreateCommentRes.deserializeBinary
);

/**
 * @param {!proto.guestbook.CreateCommentReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.guestbook.CreateCommentRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.guestbook.CreateCommentRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.guestbook.CommentServiceClient.prototype.createComment = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/guestbook.CommentService/CreateComment",
    request,
    metadata || {},
    methodDescriptor_CommentService_CreateComment,
    callback
  );
};

/**
 * @param {!proto.guestbook.CreateCommentReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.guestbook.CreateCommentRes>}
 *     A native promise that resolves to the response
 */
proto.guestbook.CommentServicePromiseClient.prototype.createComment = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/guestbook.CommentService/CreateComment",
    request,
    metadata || {},
    methodDescriptor_CommentService_CreateComment
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.guestbook.UpdateCommentReq,
 *   !proto.guestbook.UpdateCommentRes>}
 */
const methodDescriptor_CommentService_UpdateComment = new grpc.web.MethodDescriptor(
  "/guestbook.CommentService/UpdateComment",
  grpc.web.MethodType.UNARY,
  proto.guestbook.UpdateCommentReq,
  proto.guestbook.UpdateCommentRes,
  /**
   * @param {!proto.guestbook.UpdateCommentReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.guestbook.UpdateCommentRes.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.guestbook.UpdateCommentReq,
 *   !proto.guestbook.UpdateCommentRes>}
 */
const methodInfo_CommentService_UpdateComment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.guestbook.UpdateCommentRes,
  /**
   * @param {!proto.guestbook.UpdateCommentReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.guestbook.UpdateCommentRes.deserializeBinary
);

/**
 * @param {!proto.guestbook.UpdateCommentReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.guestbook.UpdateCommentRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.guestbook.UpdateCommentRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.guestbook.CommentServiceClient.prototype.updateComment = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/guestbook.CommentService/UpdateComment",
    request,
    metadata || {},
    methodDescriptor_CommentService_UpdateComment,
    callback
  );
};

/**
 * @param {!proto.guestbook.UpdateCommentReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.guestbook.UpdateCommentRes>}
 *     A native promise that resolves to the response
 */
proto.guestbook.CommentServicePromiseClient.prototype.updateComment = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/guestbook.CommentService/UpdateComment",
    request,
    metadata || {},
    methodDescriptor_CommentService_UpdateComment
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.guestbook.DeleteCommentReq,
 *   !proto.guestbook.DeleteCommentRes>}
 */
const methodDescriptor_CommentService_DeleteComment = new grpc.web.MethodDescriptor(
  "/guestbook.CommentService/DeleteComment",
  grpc.web.MethodType.UNARY,
  proto.guestbook.DeleteCommentReq,
  proto.guestbook.DeleteCommentRes,
  /**
   * @param {!proto.guestbook.DeleteCommentReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.guestbook.DeleteCommentRes.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.guestbook.DeleteCommentReq,
 *   !proto.guestbook.DeleteCommentRes>}
 */
const methodInfo_CommentService_DeleteComment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.guestbook.DeleteCommentRes,
  /**
   * @param {!proto.guestbook.DeleteCommentReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.guestbook.DeleteCommentRes.deserializeBinary
);

/**
 * @param {!proto.guestbook.DeleteCommentReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.guestbook.DeleteCommentRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.guestbook.DeleteCommentRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.guestbook.CommentServiceClient.prototype.deleteComment = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/guestbook.CommentService/DeleteComment",
    request,
    metadata || {},
    methodDescriptor_CommentService_DeleteComment,
    callback
  );
};

/**
 * @param {!proto.guestbook.DeleteCommentReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.guestbook.DeleteCommentRes>}
 *     A native promise that resolves to the response
 */
proto.guestbook.CommentServicePromiseClient.prototype.deleteComment = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/guestbook.CommentService/DeleteComment",
    request,
    metadata || {},
    methodDescriptor_CommentService_DeleteComment
  );
};

module.exports = proto.guestbook;
