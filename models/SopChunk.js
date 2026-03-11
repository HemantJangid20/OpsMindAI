const mongoose = require("mongoose");

const sopChunkSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  embedding: {
    type: [Number],
    required: true,
  },
  source: {
    fileName: String,
    page: Number,
    section: String,
  },
});

module.exports = mongoose.model("SopChunk", sopChunkSchema);