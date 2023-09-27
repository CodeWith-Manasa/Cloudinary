import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import "./Home.css"; // Import your CSS styles here

const Display = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const api_base = "http://localhost:3001";
    fetch(api_base + "/api/data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error: ", err));
    console.log(Data);
  };

  return (
    <div className="card-list">
      <h1></h1>
      {Data.map((item) => (
        <div key={item._id} className="card">
          <h2 className="card-title">{item.Title}</h2>
          <Link
            aria-current="page"
            to={`/VideoDisplay/${encodeURIComponent(item.VideoUrl)}`}
          >
            <img
              src={item.ImageUrl}
              alt={item.Title}
              style={{ height: "300px", width: "300px" }}
              className="card-image"
            />
          </Link>
          <div className="card-content">
            <p className="card-description">{item.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
