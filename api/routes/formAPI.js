var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const { Db } = require('mongodb');
const Joi = require('@hapi/joi');

// MongoDB Users Schema (Used for Login and Registration)
var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    confirmPassword: String,
    twitter: String,
    facebook: String,
    googlePlus: String,
    firstName: String,
    lastName: String,
    phone: String,
    andress: String
});
var User = mongoose.model("User", userSchema);

/* POST api */
router.post('/', function (req, res, next) {
    if (!req.body) return res.status(404).send("Form not found")
    var regdata = new User(req.body);
    //const { error } = validateInputs(req.body);
    //if (error) return res.status(400).send(error.details[0].message);
    regdata.save()
        .then(item => {
            res.status(200).send("Success, Your registration has been saved to the database!")
            // User.findOneAndDelete({}, { "sort": { "_id": -1 } })
            console.log(regdata)
        })
        .catch(err => {
            console.log(err)
            res.status(400).send("Unable to save the item to the database!")
        })
});

/*function validateInputs(password) {
    const schema = {
        password: Joi.string().min(6).required,
        confirmPassword: Joi.string().min(6).required
    };
    return Joi.validate(password, schema);
}*/

module.exports = router;