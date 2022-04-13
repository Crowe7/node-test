#!/usr/bin/node

import http from 'http';
import fs from 'fs'

const port = 8080;
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
