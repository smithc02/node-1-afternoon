const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname+'/../public/build'))

app.use(bodyParser.json());


const mc = require('./controllers/messages_controller');

const messagesBaseUrl ='/api/messages';
app.post(messagesBaseUrl,mc.create);
app.get(messagesBaseUrl,mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`,mc.delete);




const port = 3001
app.listen(port,()=>{
    console.log(`It's working on ${port}`);   
})

