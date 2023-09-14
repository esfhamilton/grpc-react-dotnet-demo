// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Protos/riddle.proto
// </auto-generated>
#pragma warning disable 0414, 1591, 8981
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Service {
  public static partial class Riddle
  {
    static readonly string __ServiceName = "riddle.Riddle";

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static void __Helper_SerializeMessage(global::Google.Protobuf.IMessage message, grpc::SerializationContext context)
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (message is global::Google.Protobuf.IBufferMessage)
      {
        context.SetPayloadLength(message.CalculateSize());
        global::Google.Protobuf.MessageExtensions.WriteTo(message, context.GetBufferWriter());
        context.Complete();
        return;
      }
      #endif
      context.Complete(global::Google.Protobuf.MessageExtensions.ToByteArray(message));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static class __Helper_MessageCache<T>
    {
      public static readonly bool IsBufferMessage = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(global::Google.Protobuf.IBufferMessage)).IsAssignableFrom(typeof(T));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static T __Helper_DeserializeMessage<T>(grpc::DeserializationContext context, global::Google.Protobuf.MessageParser<T> parser) where T : global::Google.Protobuf.IMessage<T>
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (__Helper_MessageCache<T>.IsBufferMessage)
      {
        return parser.ParseFrom(context.PayloadAsReadOnlySequence());
      }
      #endif
      return parser.ParseFrom(context.PayloadAsNewBuffer());
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Service.PositiveAffirmationRequest> __Marshaller_riddle_PositiveAffirmationRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Service.PositiveAffirmationRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Service.PositiveAffirmationReply> __Marshaller_riddle_PositiveAffirmationReply = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Service.PositiveAffirmationReply.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Service.RiddleRequest> __Marshaller_riddle_RiddleRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Service.RiddleRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Service.RiddleReply> __Marshaller_riddle_RiddleReply = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Service.RiddleReply.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Service.RiddleAnswerRequest> __Marshaller_riddle_RiddleAnswerRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Service.RiddleAnswerRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Service.RiddleAnswerReply> __Marshaller_riddle_RiddleAnswerReply = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Service.RiddleAnswerReply.Parser));

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Service.PositiveAffirmationRequest, global::Service.PositiveAffirmationReply> __Method_GetPositiveAffirmation = new grpc::Method<global::Service.PositiveAffirmationRequest, global::Service.PositiveAffirmationReply>(
        grpc::MethodType.Unary,
        __ServiceName,
        "GetPositiveAffirmation",
        __Marshaller_riddle_PositiveAffirmationRequest,
        __Marshaller_riddle_PositiveAffirmationReply);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Service.RiddleRequest, global::Service.RiddleReply> __Method_GetNewRiddle = new grpc::Method<global::Service.RiddleRequest, global::Service.RiddleReply>(
        grpc::MethodType.Unary,
        __ServiceName,
        "GetNewRiddle",
        __Marshaller_riddle_RiddleRequest,
        __Marshaller_riddle_RiddleReply);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Service.RiddleAnswerRequest, global::Service.RiddleAnswerReply> __Method_SubmitRiddleAnswer = new grpc::Method<global::Service.RiddleAnswerRequest, global::Service.RiddleAnswerReply>(
        grpc::MethodType.Unary,
        __ServiceName,
        "SubmitRiddleAnswer",
        __Marshaller_riddle_RiddleAnswerRequest,
        __Marshaller_riddle_RiddleAnswerReply);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Service.RiddleReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of Riddle</summary>
    [grpc::BindServiceMethod(typeof(Riddle), "BindService")]
    public abstract partial class RiddleBase
    {
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Service.PositiveAffirmationReply> GetPositiveAffirmation(global::Service.PositiveAffirmationRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Service.RiddleReply> GetNewRiddle(global::Service.RiddleRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Service.RiddleAnswerReply> SubmitRiddleAnswer(global::Service.RiddleAnswerRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static grpc::ServerServiceDefinition BindService(RiddleBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_GetPositiveAffirmation, serviceImpl.GetPositiveAffirmation)
          .AddMethod(__Method_GetNewRiddle, serviceImpl.GetNewRiddle)
          .AddMethod(__Method_SubmitRiddleAnswer, serviceImpl.SubmitRiddleAnswer).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static void BindService(grpc::ServiceBinderBase serviceBinder, RiddleBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_GetPositiveAffirmation, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Service.PositiveAffirmationRequest, global::Service.PositiveAffirmationReply>(serviceImpl.GetPositiveAffirmation));
      serviceBinder.AddMethod(__Method_GetNewRiddle, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Service.RiddleRequest, global::Service.RiddleReply>(serviceImpl.GetNewRiddle));
      serviceBinder.AddMethod(__Method_SubmitRiddleAnswer, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Service.RiddleAnswerRequest, global::Service.RiddleAnswerReply>(serviceImpl.SubmitRiddleAnswer));
    }

  }
}
#endregion