const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TraineeSchema = new Schema({
    name:{type:String},
    degree:{type:String}
});
// document is refer to table

let Trainee = mongoose.model('Trainee',TraineeSchema);
module.exports = Trainee;