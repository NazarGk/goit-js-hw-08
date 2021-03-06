import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const storageKey = "videoplayer-current-time";
    const playedFromStopedTime = localStorage.getItem(storageKey);
    

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
const onPlay = function (data) {
    localStorage.setItem(storageKey, data.seconds);
    }
player.on('seeking', throttle(onPlay, 1000));



player.setCurrentTime(playedFromStopedTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {

        case 'RangeError':
            break;

        default:
            break;
    }
});