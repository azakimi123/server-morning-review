const express = require('express');
const app = express();
const ctrl = require('./controllers/messageLogController');

app.use(express.json());


//chat endpoints 
app.get('/api/chat', ctrl.getAll);
app.post('/api/chat', ctrl.addOne);
app.put('/api/chat/:id', ctrl.editOne);
app.delete('/api/chat/:user', ctrl.deleteAll);


const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`))