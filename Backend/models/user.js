

const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({

name : {
    type :String ,
    required :true  , 
    trim : true 

} ,
email : {
    type : String , 
    required : true , 
    unique : true , 
    lowercase : true 
} ,
password : {
    type : String ,
    required : true , 
    minlength : 6
} ,
admin : {
    type : Boolean , 
    default : false 
} , 
address : {
    street : String , 
    city : String , 
    postalCode : String , 
    country : String 
} ,timestamps : true 




})
userSchema.pre('save' , async function(next) {
    if(!this.isModified("password"))return next()
this.password = await bcrypt.hash(this.password , 12);
    next()    
})


// Method to check password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);