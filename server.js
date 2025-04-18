const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const socketIO = require("socket.io");

const parkingRoutes = require("./routes/parking");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ganesh369:<GROBt0VqFru8Sh0h>@parkease.suhijys.mongodb.net/?appName=parkEase);

app.use("/api/parking", parkingRoutes);
app.set("socketio", io);

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
