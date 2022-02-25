function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let result;
    if (string === string.toLowerCase()) {result = "I can't hear you!"};
    if (string === string.toUpperCase()) {result = "YES INDEED!"};
    if (string === "Let's have dinner together!") {result = "I would love to!"};
    return result;
}