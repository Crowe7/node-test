#!/usr/bin/node
// in the src dir use 'nodemon index.ts' to avoid errors with just using node..
// would need to set type: "module" in package.json to allow use of import es6 normally.
import http from 'http';
import fs from 'fs'
import express from 'express'
const port = 8080;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/contact-me', (req, res) => {
    res.sendFile(__dirname + '/contact-me.html');
});

app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
});


app.listen(port, () => {
    console.log(`listening on port: ${port}!`);
});


/*
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(__dirname + '/index.html', (err, data) => {
            if(err) {
                console.error(err);
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
    }
    else if(req.url === '/about') {
        fs.readFile(__dirname + '/about.html', (err, data) => {
            if(err) {
                console.error(err);
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
    }
    else if(req.url == '/contact-me') {
        fs.readFile(__dirname + '/contact-me.html', (err, data) => {
            if(err) {
                console.error(err);
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
    }
    else {
        fs.readFile(__dirname + '/404.html', (err, data) => {
            if(err) {
                console.error(err);
                return;
            }
            res.writeHead(404);
            res.end(data);
        })
    }
}).listen(8080);
*/
