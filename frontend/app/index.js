'use strict'

$("#invite-friend").click(function () {
    $('#myModal').modal("show");
});

$("#return-to-signin").click(function () {
    $('#myModal').modal("hide");
});

// function inviteFriend() {
//     if (!profile){
//         prompt("please sign in first!");
//     } else {
//         var txt;
//         var rString = randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
//         var inviteLink = "www.moviedate.com/invite/" + rString;
//         var person = prompt("Inviting your friends to join this room is very easy! Just send them the URL" +
//             " to this room we have conveniently placed below this text for you. You can also click the " +
//             "buttons below to post messages on Facebook or Twitter to encourage your Friends to join!", inviteLink);
//
//     }
// }
