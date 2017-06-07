console.log("10 42");

const Peer = require('simple-peer');
const openStream = require('./openStream');

openStream();

// p.on('connect', token=> {
//    setInterval(()=> p.send(Math.random()),2000);
// });

// p.on('data', data => console.log('Nhan Du lieu: ' + data));

