const config ={
    clientID: "",
    clientSecret: "",
    callbackURL:  "http://localhost:3000/auth/vkontakte/callback",
    scope: ['email'],
    profileFields: ['email', 'city', 'bdate']
};

module.exports = {
    config
}