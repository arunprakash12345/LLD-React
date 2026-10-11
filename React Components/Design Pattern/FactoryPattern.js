const notificationCreators = {
    like: (username) => ({
        type: "like",
        message: `${username} liked your post`
    }),

    comment: (username) => ({
        type: "comment",
        message: `${username} commented on your post`
    }),

    join: (username) => ({
        type: "join",
        message: `${username} joined your community`
    })
};

function createNotification(type, username) {
    const creator = notificationCreators[type];

    if (!creator) {
        throw new Error(`Unknown notification type: ${type}`);
    }

    return creator(username);
}

const result = createNotification("join", "Arun");

console.log(result.message);
// Arun joined your community