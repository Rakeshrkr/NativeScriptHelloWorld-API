var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



// --------------------------------

//const mongoose = require('mongoose');
var mongodbUri ='mongodb://ds241664.mlab.com:41664/workshop';
mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  auth: {
    user: 'rakesh.kr',
    password: 'pass@123'
  }
})
var conn = mongoose.connection;    
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', () =>{
 console.log('connected to adatabase')                       
});


// ---------------------------------

app.use(bodyParser.json());
Employee = require('./models/Employee');
User = require('./models/User');

//connect to mongoose
//mongoose.connect('mongodb://localhost/WorkShop');
//var db = mongoose.connection;

app.get('/',function(req,res){
	
	res.send('use api/books or api/genre');
});

app.get('/employees', function(req, res){
	
	Employee.getEmployees(function(err,employees){
		if(err){
			throw err;
		}
		res.json(employees);
	})
});

app.get('/employees/:_id', function(req, res){
	
	Employee.getEmployeeByID(req.params._id,function(err,employee){
		if(err){
			throw err;
		}
		res.json(employee);
	})
	
});

// app.get('/employeesname/:name', function(req, res){
	
// 	Employee.getEmployeeByName(req.params.name,function(err,employee){
// 	if(err){
// 		throw err;
// 	}
// 	res.json(employee);
		
// 	})
// });
// ------------------------------------------API for user Login

app.get('/Users', function(req, res){
	
	User.getUsers(function(err,users){
		if(err){
			throw err;
		}
		res.json(users);
	})
});

app.post('/addUser/:_key', function(req, res){
	
	var user = req.body;
	console.log(user.username);
	User.addUser(user,function(err,user){
		if(err){
			throw err;
		}
		res.json(user);
	})
});

app.get('/Users/:_id', function(req, res){
	
	User.getUserByID(req.params._id,function(err,User){
		if(err){
			throw err;
		}
		res.json(User);
	})
	
});


app.listen(3000);
console.log('Running on port 3000');