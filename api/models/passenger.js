const mongoose =require('mongoose');

const passengerSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: {type:String ,default:'unknown' },
    origin:{type:String , required : true},
    destination:{type:String , required : true},
    date:{type:String , required : true},
    time:{type:String , required : true},
    seats:{type:Number,default:1}
})

module.exports = mongoose.model('Passenger' , passengerSchema);