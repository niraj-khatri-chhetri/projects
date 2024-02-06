const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const uniSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  estimateCoa: {
    type: Number,
    required: true,
  },
  admissionFee: {
    type: Number,
    required: true,
  },

  courses: {
    type: String,
    required: true,
  },

  undergradReq: {
    type: Number,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  portal: {
    type: String,
    required: true,
  },

  rank: {
    type: String,
    required: true,
  },
  courseLink: {
    type: String,
    required: true,
  },
  wesEval: {
    type: Boolean,
    required: true,
  },

  docRequired: {
    lor: {
      type: Boolean,
      default: false,
    },
    transcript: {
      type: Boolean,
      default: false,
    },
    bankStatement: {
      type: Boolean,
      default: false,
    },
    sop: {
      type: Boolean,
      default: false,
    },
    resume: {
      type: Boolean,
      default: false,
    },
  },
});

module.exports = mongoose.model('Uni', uniSchema);
