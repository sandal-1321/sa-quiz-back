const express = require('express')
const mongos = require('mongoose')
const bodyparse = require('body-parser')
const cors = require('cors');

let app = express();

app.use(bodyparse.json());
app.use(cors());

mongos.connect('mongodb+srv://kumar:1321@cluster0.ieyot4h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'ques' })
    .then(() => {
        console.log("Connect to db")
    })
    .catch(() => {
        console.log(err)
    })


let userSce = new mongos.Schema({
    no: Number,
    qus: String,
    a: String,
    b: String,
    c: String,
    d: String,
    ans: String
})

let mode = mongos.model('problems', userSce)

app.get('/view', (req, res) => {
    mode.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        });
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Port No ${PORT}`)
})