console.log("hieudenzz");

const Peer = require('simple-peer');
const p = new Peer({initiator: location.hash === '#1', trickle: false});

p.on('signal',token => console.log(token));