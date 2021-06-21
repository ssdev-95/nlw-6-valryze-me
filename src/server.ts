import express from 'express';

const app = express();

//HTTP Methods
//get, post, put, delete, patch
app.get('/', (req, res)=>res.send('Ola nlw'))
app.post('/test/post', (req, res)=>res.send('Ola metodo POST'))

//Server is set up to run at http://localhost:6000
app.listen(9000, ()=>console.log('Server is running on Port 9000'))