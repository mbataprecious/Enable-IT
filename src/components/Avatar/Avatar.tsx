import React from "react";
import image from "../../assets/images/avatar-img.png";

//stying
import "./Avatar.scss";

function Avatar() {
  return <img src={image} alt="avatar" className="avavar-img" />;
}

export default Avatar;
