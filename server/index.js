const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3001; // Define your port number
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/test', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

const Video = require('./models/video');

app.post('/uploadData', (req, res) => {
    const video = new Video({
        Title:req.body.Title,
        Description:req.body. Description,
        ImageUrl: req.body.ImageUrl,
        VideoUrl:req.body.VideoUrl,
	})
	video.save();
    res.status(200).json({ message: "File upload success" });

});

app.get('/api/data', async (req, res) => {
	const video = await Video.find().limit(30);
	console.log(video);
	res.json(video);
});

const server = app.listen(port, () => {
    console.log(`Server is running on port ${server.address().port}`);
  });