let Trainees = require("../model/trainee.schema");

module.exports.getTrainees = async (req, res) => {
  try {
    let trainees = await Trainees.find();
    res.send({ success: true, DataTransfer: trainees });
  } catch (err) {
    res.send({ success: false, data: err.message });
  }
};

module.exports.createTrainee = async (req, res) => {
  try {
    let { name, degree } = req.body;
    let trainee = new Trainees({ name, degree });
    let result = await trainee.save();
    res.send({ success: true, data: result });
  } catch (err) {
    res.send({ success: false, data: err.message });
  }
};

module.exports.deleteTrainee = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Trainees.findOneAndDelete({ _id: id });
    res.send({ success: true, data: "Trainee is deleted" });
  } catch (err) {
    res.send({ success: false, data: err.message });
  }
};

module.exports.updateTrainee = async (req, res) => {
  try {
    let { id } = req.params;
    let trainee = await Trainees.findOne({ _id: id });
    if (!trainee) {
      res.send({ success: true, data: "Trainee not found" });
    } else {
      let { name, degree } = req.body;
      await Trainees.findOneAndUpdate({ _id: id }, { name, degree });
      res.send({ success: true, data: "Trainee is updated" });
    }
  } catch (err) {
    res.send({ success: false, data: err.message });
  }
};
