import mongoose from "mongoose";

const Electricitybill = mongoose.Schema({
    billDate:{type:Date,required:true},
    paidDate:{type:Date,required:true},
    units:{type:Number,required:true},
    amount:{type:Number,required:true},
},
{   timestamps:true }
)

export default mongoose.model('ElectricityBill',Electricitybill)