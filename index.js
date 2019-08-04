const functions = require('firebase-functions');

// const SlackWebhook = require('slack-webhook');
// const slack = new SlackWebhook('https://hooks.slack.com/services/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');

exports.addToFollowing = functions.database.ref('/follow/{initiatorUid}/{interestedInFollowingUid}')
    .onCreate(event => {
    const initiatorUid = event.params.initiatorUid;
    const interestedInFollowingUid = event.params.interestedInFollowingUid;
    const rootRef = event.data.ref.root;
    let FollowingMeRef = rootRef.child('usersFollowingMe/' + interestedInFollowingUid + "/" + initiatorUid);
    return FollowingMeRef.set(true);
    });

// exports.notifyOfNewUser = functions.database.ref('/users/{userId}')
//     .onCreate(event => {
//         const newUser = event.data.val();
//         console.log(newUser);
//         slack.send(newUser);
//     });