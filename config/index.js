const db = require('./db.js');
const mysql = require('./mysql.js');
const bcryptjs = require('./bcryptjs.js');
const vkontakte = require('./vkontakte');
const google =require('./google');

module.exports = {
    db, mysql, bcryptjs,vkontakte,google,
}