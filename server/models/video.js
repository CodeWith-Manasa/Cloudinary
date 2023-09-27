const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new mongoose.Schema(
  {
    Title:{
      type: String,
      required: true,
    },
    Description:{
      type: String,
      required: true,
    },
    ImageUrl: {
      type: String,
      required: true,
    },
    VideoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
