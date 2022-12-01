import React, { useState, useEffect } from "react";
import "./FetchData.css";
import axios from "axios";
import image1 from "./image/img1.jpeg";
import image2 from "./image/img2.jpeg";
import image3 from "./image/img3.jpeg";
const FetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://fake-hotel-api.herokuapp.com/api/hotels",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="text-center mb-5 mt-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="mb-5 shadow pb-2 pt-4 ml-5 mr-5 card-details"
        >
          <div className="card-description text-center">
            <div className="text-center">
              <img className="card-img-top" src={image1} alt="Not Found" />
              <img className="card-img-top" src={image2} alt="Not Found" />
              <img className="card-img-top" src={image3} alt="Not Found" />
            </div>
            <h6 className="name">{`Name: ${item.name}`}</h6>
            <h6 className="country">{`Country: ${item.country}`}</h6>
            <h6 className="city">{`City: ${item.city}`}</h6>
            <h6 className="price">{`Price: ${item.price}`}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FetchData;
