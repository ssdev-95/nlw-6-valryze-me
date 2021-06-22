import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();

app.listen(9000, () => console.log('Server is running on Port 9000'))

export default app;
