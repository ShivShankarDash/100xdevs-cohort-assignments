const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://shivdev:1234567890@devcluster.nsg2kp7.mongodb.net/demo-course-app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String, 
    password : String


});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String, 
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({

    title : String,
    description : String,
    price : Number,
    imageLink : String,
    
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}