import io from 'socket.io-client';
const CONNECTION_PORT = 'localhost:3001'
// const sockets = io('http://localhost:3001', { autoConnect: true, forceNew: true });
const sockets = io(CONNECTION_PORT);
export default sockets;
