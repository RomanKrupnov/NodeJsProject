const configGoogle ={
    clientID: "",
    clientSecret: "",
    callbackURL:  "http://localhost:3000/auth/google/callback",
    scope: ['https://www.googleapis.com/auth/analytics.readonly'],
};

module.exports = {
    configGoogle
}