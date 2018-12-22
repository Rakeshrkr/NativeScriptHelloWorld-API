var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	
	email: {
		type : String,
		required : true
	},
	password:{
		type : String,
		required : true,
		default: ""	
	},
	date:{
		type: Date,
		default: Date.now
    },
    username:{
        type : String,
		required : true
    }
	
});

var User = module.exports = mongoose.model('User',UserSchema);

//Get Employee
module.exports.getUsers = function(callback,limit){
	User.find(callback).limit(limit);
}

//Get Employee by ID
module.exports.getUserByID = function(id,callback){
	console.log(id);
	User.findById(id,callback);
}

//Add user 
module.exports.addUser = function(user,callback){
    console.log(user.email);
    console.log(user.password);
	User.create(user,callback);
}



// //Get Employee by Name getEmployeeByName
// module.exports.getEmployeeByName = function(name,callback){
// 	console.log(name);
// 	//var searchQuery={"name": "/"+name+"/"};

// 	//Employee.find(searchQuery,callback);
// 	Employee.find(callback);
// }