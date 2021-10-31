const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Create a schema
const answerSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  oneoption: {
    type: Object,
    required: true,
  },
  twooption: {
    type: Object,
    required: true,
  }
});

// Compile model from schema
module.exports = mongoose.model("Answers", answerSchema);

