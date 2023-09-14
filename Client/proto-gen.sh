mkdir -p ./src/proto

protoc --proto_path=../../Service/protos --js_out=import_style=commonjs:./src/proto --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/proto riddle.proto 

