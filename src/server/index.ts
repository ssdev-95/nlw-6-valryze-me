import express from 'express';
import cors from 'cors';
import { router } from './router';

require('dotenv').config();

const PORT = process.env.PORT || 9000;
const corsOptions = {
  origin: [`http://localhost`, `${process.env.ORIGIN}`]
};
const server = express();

server.use(cors(corsOptions));
server.use(express.json());
server.use(router);

server.listen(PORT, ()=>console.log(`Running on port ${PORT}`));
