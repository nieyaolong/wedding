import * as express from "express";
let app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

let server = app.listen(80, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});