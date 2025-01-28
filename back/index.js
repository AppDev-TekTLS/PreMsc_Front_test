import express from "express";
import {Server} from 'socket.io';
import { createServer } from 'node:http';
import bodyParser from "body-parser";
import UserFactory from "./objects/UserFactory.js";

const userFactory = new UserFactory;
const app = express()
export const server = createServer(app)
export const io = new Server(server, {
    cors: {
        origin: `http://localhost:5173`,
    }
});

app.use(bodyParser.json())

io.on('connection', (socket) => {
    userFactory.addUser(socket.id)

    socket.on("send", (data) => {
        io.emit("msg", data);
    })

    socket.on('disconnect', () => {
        const users = userFactory.removeUser(socket.id);
        console.log('user disconnected');
    });
});

const main = async () => {
    server.listen(4000, () => {
        console.log(`Example app listening on port 4000`)
    })
}

main()