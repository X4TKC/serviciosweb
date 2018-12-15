var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/angular");

var user_scheme = new Schema({
    nombre:String,
    ci:String,
    email:String,
    pass:String,
    fecha:Date,
    estado:Boolean
})
var User = mongoose.model("user", user_scheme);
module.exports.User = User;