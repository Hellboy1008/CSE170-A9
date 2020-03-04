/*
 * GET home page.
 */

var user_data = require('../public/json/users.json');
user_data["viewAlt"] = false;

exports.view = function(req, res) {
    user_data["viewAlt"] = false;
    name = "Anonymous";
    user_data.users.push({ "name": name });
    res.render('home', user_data);
};

exports.viewAlt = function(req, res) {
    user_data["viewAlt"] = true;
    name = "Anonymous";
    user_data.users.push({ "name": name });
    res.render('home', user_data);
};