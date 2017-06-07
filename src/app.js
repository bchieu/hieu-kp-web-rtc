//console.log("10 42");
const Peer = require('simple-peer');
const $ = require('jquery');

const openStream = require('./openStream');

openStream(stream => {
    const video = document.getElementById('localStream');
    video.srcObject = stream;
    video.onloadedmetadata = function () {
        video.play();
    }
    const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream: stream });
    p.on('signal', token => {
        $('#txtMysignal').val(JSON.stringify(token));
    });

    $('#btnConnect').click(() => {
        const friendSignal = JSON.parse($('#txtFriendSignal').val());
        p.signal(friendSignal);
    });

    p.on('stream', friendStream => {
        const friendVideo = document.getElementById('friendStream');
        friendVideo.srcObject = friendStream;
        friendVideo.onloadedmetadata = function () {
            friendVideo.play();
        }
    });
});

// p.on('connect', token=> {
//    setInterval(()=> p.send(Math.random()),2000);
// });

// p.on('data', data => console.log('Nhan Du lieu: ' + data));

