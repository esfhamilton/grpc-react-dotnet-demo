import * as jspb from 'google-protobuf'



export class PositiveAffirmationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositiveAffirmationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PositiveAffirmationRequest): PositiveAffirmationRequest.AsObject;
  static serializeBinaryToWriter(message: PositiveAffirmationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositiveAffirmationRequest;
  static deserializeBinaryFromReader(message: PositiveAffirmationRequest, reader: jspb.BinaryReader): PositiveAffirmationRequest;
}

export namespace PositiveAffirmationRequest {
  export type AsObject = {
  }
}

export class PositiveAffirmationReply extends jspb.Message {
  getAffirmation(): string;
  setAffirmation(value: string): PositiveAffirmationReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositiveAffirmationReply.AsObject;
  static toObject(includeInstance: boolean, msg: PositiveAffirmationReply): PositiveAffirmationReply.AsObject;
  static serializeBinaryToWriter(message: PositiveAffirmationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositiveAffirmationReply;
  static deserializeBinaryFromReader(message: PositiveAffirmationReply, reader: jspb.BinaryReader): PositiveAffirmationReply;
}

export namespace PositiveAffirmationReply {
  export type AsObject = {
    affirmation: string,
  }
}

export class RiddleRequest extends jspb.Message {
  getRiddleId(): number;
  setRiddleId(value: number): RiddleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiddleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RiddleRequest): RiddleRequest.AsObject;
  static serializeBinaryToWriter(message: RiddleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiddleRequest;
  static deserializeBinaryFromReader(message: RiddleRequest, reader: jspb.BinaryReader): RiddleRequest;
}

export namespace RiddleRequest {
  export type AsObject = {
    riddleId: number,
  }
}

export class RiddleReply extends jspb.Message {
  getRiddleId(): number;
  setRiddleId(value: number): RiddleReply;

  getRiddle(): string;
  setRiddle(value: string): RiddleReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiddleReply.AsObject;
  static toObject(includeInstance: boolean, msg: RiddleReply): RiddleReply.AsObject;
  static serializeBinaryToWriter(message: RiddleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiddleReply;
  static deserializeBinaryFromReader(message: RiddleReply, reader: jspb.BinaryReader): RiddleReply;
}

export namespace RiddleReply {
  export type AsObject = {
    riddleId: number,
    riddle: string,
  }
}

export class RiddleAnswerRequest extends jspb.Message {
  getRiddleId(): number;
  setRiddleId(value: number): RiddleAnswerRequest;

  getAnswer(): string;
  setAnswer(value: string): RiddleAnswerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiddleAnswerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RiddleAnswerRequest): RiddleAnswerRequest.AsObject;
  static serializeBinaryToWriter(message: RiddleAnswerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiddleAnswerRequest;
  static deserializeBinaryFromReader(message: RiddleAnswerRequest, reader: jspb.BinaryReader): RiddleAnswerRequest;
}

export namespace RiddleAnswerRequest {
  export type AsObject = {
    riddleId: number,
    answer: string,
  }
}

export class RiddleAnswerReply extends jspb.Message {
  getIsCorrect(): boolean;
  setIsCorrect(value: boolean): RiddleAnswerReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiddleAnswerReply.AsObject;
  static toObject(includeInstance: boolean, msg: RiddleAnswerReply): RiddleAnswerReply.AsObject;
  static serializeBinaryToWriter(message: RiddleAnswerReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiddleAnswerReply;
  static deserializeBinaryFromReader(message: RiddleAnswerReply, reader: jspb.BinaryReader): RiddleAnswerReply;
}

export namespace RiddleAnswerReply {
  export type AsObject = {
    isCorrect: boolean,
  }
}

