'use strict'

var profile;
function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
    $("#username").css({"display" : "inline"});
    $("#sign-out").css({"display" : "inline"});
    $("#username").text(profile.getEmail().split("@")[0]);
    $("#sign-in").css({"display" : "none"});
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        profile = null;
        $("#username").css({"display" : "none"});
        $("#sign-out").css({"display" : "none"});
        $("#sign-in").css({"display" : "inline"});
    });
}