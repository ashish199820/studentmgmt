var mongoose=require('mongoose');
var schema = mongoose.Schema;

var studentSchema = new mongoose.Schema({
    name : {
        type:String
    },
    email : {
        type:String
    },
    reg_no : {
        type : String
    },
    college_id : {
        type:schema.Types.ObjectId,
         ref:"college"
    } 
});


const student= mongoose.model('student',studentSchema);
module.exports=student;