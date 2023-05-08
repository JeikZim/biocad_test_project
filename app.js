import express from 'express';
import path from "path"
import serverRoutes from './routers/servers.js';

const HOST = process.env.APP_IP || 'localhost';
const PORT = process.env.APP_PORT || 3000;
const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(serverRoutes) 

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + "/public/view/main.html");
})

app.use('/analytics*', (req, res) => {
    res.status(200).sendFile(__dirname + "/public/view/analytics.html");
})

app.get(/\/./, (req, res) => {
    res.status(404).sendFile(__dirname + "/public/view/error.html");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});


