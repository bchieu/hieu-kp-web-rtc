const Peer = require('simple-peer');
const $ = require('jquery');

function openStream() {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then(stream => {
            const video = document.getElementById('localStream');
            video.srcObject = stream;
            video.onloadedmetadata = function () {
                video.play();
            }
            const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream : stream });
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
            
        })
        .catch(err => console.log(err))
}

module.exports = openStream;