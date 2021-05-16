import React from "react";
import image from "../../img/vegan.jpeg";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={s.wrap}>
        <img className={s.img} src={image} alt="Vegetarian picture" />
        <span className={s.text}>Testing page</span>
      </div>
    </div>
  );
};
export default Header;
