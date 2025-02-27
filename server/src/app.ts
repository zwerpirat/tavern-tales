'use strict';
import express, { Application } from 'express';
import router from './routers';
import sequelize from './models/modelindex';
import cors from 'cors'

// Create a new express application instance
const app: Application = express();

// Set the network port
const port = 3000;
// cors configurations
const corsOptions = {
    origin: '*', // Allow everything for now
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}

app.use(express.json());
app.use(cors(corsOptions));
app.use('/', router);

async function startServer() {
    try {
        await sequelize.sync();
        // Start the Express server
        app.listen(port, () => {
            console.log(`The server is now running at http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}
startServer();