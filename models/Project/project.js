const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
  // tools: [
  //   {
  //     type: String,
  //     required: true,
  //   },
  // ],
  // startDate: {
  //   type: Date,
  //   required: false,
  // },
  // endDate: {
  //   type: Date,
  //   required: false,
  // },
});

module.exports = mongoose.model('Project', projectSchema);
