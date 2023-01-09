const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// global.io = require('socket.io')(server, {
//   cors: {
//     origin: '*',
//   }
// });

// sockets = [];

// io.use(function(socket, next){
//   console.log("socket.handshake.query");
//  //auth(socket,null,next);
//   next();
// }).on('connection', function (socket) {
//     sockets.push(socket);
//     console.log('The socket connected');
//     socket.on('message', function (message) {
//         for (var i = 0; i < sockets.length; i++) {
//             sockets[i].send(message);
//         }
//     });
//     socket.on('disconnect', function () {

//       for (var i = 0; i < sockets.length; i++) {
//         if (sockets[i].id === socket.id) {
//             sockets .splice(i, 1);
//         }
//       }
//     });
// });

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});