import React, { useState } from "react";
import axios from 'axios';
import "./Home.css"; // Import your CSS styles here
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";
const api_base = "http://localhost:3001";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate();
  
  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", type === 'image' ? thumbnail : video);
    data.append("upload_preset", type === 'image' ? 'images_preset' : 'videos_preset');

    try {
      let cloudName =process.env.CLOUD_NAME;
      let resourceType = type === 'image' ? 'image' : 'video';
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.error(error);
    }
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    
    try{
      setLoading(true)
      const imgUrl=await uploadFile('image')
      const videoUrl=await uploadFile('video')
     
       // Send backend api request
       const response= await fetch(api_base + "/uploadData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Title: title,
          Description: description,
          ImageUrl: imgUrl,
          VideoUrl: videoUrl,
        }),
      });
      console.log(response)
      
      if (response.ok) {
        // Reset states 
        alert("File upload success!");
      setTitle(""); // Reset the title input
      setDescription(""); // Reset the description input
      setThumbnail(null);
      setVideo(null);
      setLoading(false);
      console.log("File upload success!");
      } else {
        console.error("Network response was not ok");
        // Handle the error as needed
      }         
    }
    catch(error){
      console.log(error)
    }

  }
  // Add your form handling logic here

  return (
    <div className="container">
      <div className="home-container">
        <form className="upload-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={50}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={200}
              required
            />
          </div>
          <div className="form-group">
            <label>Thumbnail Image</label>
            <input type="file" accept="image/*" onChange={(e)=>setThumbnail((prev)=>e.target.files[0])} />
          </div>
          <div className="form-group">
            <label>Video </label>
            <input type="file" id="video" accept="video/*" onChange={(e)=>setVideo((prev)=>e.target.files[0])}/>
          </div>
          <div className="btn mx-auto">
            <button type="submit">Upload</button>
          </div>
        </form>
        {
        loading && <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      }
      </div>
    </div>
  );
}

export default Home;
