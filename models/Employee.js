var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
	
	firstName: {
		type : String,
		required : true
	},
	lastName:{
		type : String,
		required : false,
		default: ""	
	},
	managerId:{
		type : String,
		required : false,
		
	},
	managerName:{
		type : String,
		required : false
	},
	title:{
		type : String,
		required : true
		
	},
	department:{
		type : String,
		required : true
	},
	cellPhone:{
		type : String,
		required : true
	},
	officePhone:{
		type : String,
		required : false
	},
	email:{
		type : String,
		required : true
	},
	city:{
		type: String,
		required : true
	},
	pic:{
		type: String,
		required : true
	},
	twitterId:{
		type: String,
		required : true
	},
	blog:{
		type: String,
		required : false
	},
	date:{
		type: Date,
		default: Date.now
	}
	
});

var Employee = module.exports = mongoose.model('Employee',employeeSchema);

//Get Employee
module.exports.getEmployees = function(callback,limit){
	Employee.find(callback).limit(limit);
}

//Get Employee by ID
module.exports.getEmployeeByID = function(id,callback){
	console.log(id);
	Employee.findById(id,callback);
}

//Get Employee by Name getEmployeeByName
module.exports.getEmployeeByName = function(name,callback){
	console.log(name);
	//var searchQuery={"name": "/"+name+"/"};

	//Employee.find(searchQuery,callback);
	Employee.find(callback);
}