/**
 * @fileoverview gRPC-Web generated client stub for riddle
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.24.2
// source: riddle.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as riddle_pb from './riddle_pb';


export class RiddleClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetPositiveAffirmation = new grpcWeb.MethodDescriptor(
    '/riddle.Riddle/GetPositiveAffirmation',
    grpcWeb.MethodType.UNARY,
    riddle_pb.PositiveAffirmationRequest,
    riddle_pb.PositiveAffirmationReply,
    (request: riddle_pb.PositiveAffirmationRequest) => {
      return request.serializeBinary();
    },
    riddle_pb.PositiveAffirmationReply.deserializeBinary
  );

  getPositiveAffirmation(
    request: riddle_pb.PositiveAffirmationRequest,
    metadata: grpcWeb.Metadata | null): Promise<riddle_pb.PositiveAffirmationReply>;

  getPositiveAffirmation(
    request: riddle_pb.PositiveAffirmationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: riddle_pb.PositiveAffirmationReply) => void): grpcWeb.ClientReadableStream<riddle_pb.PositiveAffirmationReply>;

  getPositiveAffirmation(
    request: riddle_pb.PositiveAffirmationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: riddle_pb.PositiveAffirmationReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/riddle.Riddle/GetPositiveAffirmation',
        request,
        metadata || {},
        this.methodDescriptorGetPositiveAffirmation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/riddle.Riddle/GetPositiveAffirmation',
    request,
    metadata || {},
    this.methodDescriptorGetPositiveAffirmation);
  }

  methodDescriptorGetNewRiddle = new grpcWeb.MethodDescriptor(
    '/riddle.Riddle/GetNewRiddle',
    grpcWeb.MethodType.UNARY,
    riddle_pb.RiddleRequest,
    riddle_pb.RiddleReply,
    (request: riddle_pb.RiddleRequest) => {
      return request.serializeBinary();
    },
    riddle_pb.RiddleReply.deserializeBinary
  );

  getNewRiddle(
    request: riddle_pb.RiddleRequest,
    metadata: grpcWeb.Metadata | null): Promise<riddle_pb.RiddleReply>;

  getNewRiddle(
    request: riddle_pb.RiddleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: riddle_pb.RiddleReply) => void): grpcWeb.ClientReadableStream<riddle_pb.RiddleReply>;

  getNewRiddle(
    request: riddle_pb.RiddleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: riddle_pb.RiddleReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/riddle.Riddle/GetNewRiddle',
        request,
        metadata || {},
        this.methodDescriptorGetNewRiddle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/riddle.Riddle/GetNewRiddle',
    request,
    metadata || {},
    this.methodDescriptorGetNewRiddle);
  }

  methodDescriptorSubmitRiddleAnswer = new grpcWeb.MethodDescriptor(
    '/riddle.Riddle/SubmitRiddleAnswer',
    grpcWeb.MethodType.UNARY,
    riddle_pb.RiddleAnswerRequest,
    riddle_pb.RiddleAnswerReply,
    (request: riddle_pb.RiddleAnswerRequest) => {
      return request.serializeBinary();
    },
    riddle_pb.RiddleAnswerReply.deserializeBinary
  );

  submitRiddleAnswer(
    request: riddle_pb.RiddleAnswerRequest,
    metadata: grpcWeb.Metadata | null): Promise<riddle_pb.RiddleAnswerReply>;

  submitRiddleAnswer(
    request: riddle_pb.RiddleAnswerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: riddle_pb.RiddleAnswerReply) => void): grpcWeb.ClientReadableStream<riddle_pb.RiddleAnswerReply>;

  submitRiddleAnswer(
    request: riddle_pb.RiddleAnswerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: riddle_pb.RiddleAnswerReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/riddle.Riddle/SubmitRiddleAnswer',
        request,
        metadata || {},
        this.methodDescriptorSubmitRiddleAnswer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/riddle.Riddle/SubmitRiddleAnswer',
    request,
    metadata || {},
    this.methodDescriptorSubmitRiddleAnswer);
  }

}

