import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Card = ({ item }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
    /* navigate("/movie", {
      state: item,
    }); */

//     navigate(`/movie/${item.id}`);
//   };

const [hover, setHover] = useState(false);




  return (
    <div
    //   onClick={handleClick}
      style={{
        ...cardStyle,
        transition: hover ? "all 0.3s ease-in-out" : null,
        // height: hover ? "200px" : "150px",
        // width: hover ? "350px" : "300px",
        transform: hover ? 'scale(1.1)' : null,
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop})`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={titleContainerStyle}>
        <h1 style={titleStyle}>{item.name}</h1>
      </div>
    </div>
  );
};

export default Card;

const cardStyle = {
height: "150px",
  width: "300px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
//   transform: ishover ? scale(1.1) : scale(0.0)

};

const titleContainerStyle = {
  height: "50%",
  width: "100%",
  //gradient
  background: "linear-gradient(360deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 60%)",
  display: "flex",
};

const titleStyle = {
  color: "white",
  fontSize: "2rem",
  margin: "1rem"
};