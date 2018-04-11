'use strict';

Holder.addTheme('thumb', {
    bg: '#55595c',
    fg: '#eceeef',
    text: 'Thumbnail'
});
// Get \you
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var vid;
function getLink() {
    var link = document.getElementById("youtubelink").value;
    vid = link.split("=")[1];
    player.loadVideoById(
        vid,
        0,
        'large'
    );
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '380',
        width: '700',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

//https://www.youtube.com/watch?v=KIdh9xmeJOw
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

//6. get statics
function getStatistics() {
    getDuration();
    getVideoLoadedFraction();
    getPlayerState();
    getCurrentTime();
    getPlaybackQuality();
    //write to fire basee here.
}

function getDuration() {
    var videoDuration = player.getDuration();
    document.getElementById("videoduration").innerHTML = videoDuration;
}

function getVideoLoadedFraction() {
    var loadedFrac = player.getVideoLoadedFraction();
    document.getElementById("percentloaded").innerHTML = loadedFrac;
}

function getPlayerState() {
    var playerState = player.getPlayerState();
    document.getElementById("playerstate").innerHTML = playerState;
}

function getCurrentTime() {
    var curTime = player.getCurrentTime();
    document.getElementById("videotime").innerHTML = curTime;
}

function getPlaybackQuality() {
    var playBackQA = player.getPlaybackQuality();
    document.getElementById("playbackquality").innerHTML = playBackQA;
}

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
