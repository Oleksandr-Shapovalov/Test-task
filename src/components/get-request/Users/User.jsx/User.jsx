import React from "react";
import style from "./User.module.scss";
import userPhotoMock from "./../../../../../Assets/photo-cover.svg";
const User = ({ photo, name, position, email, phone }) => {
  phone = phone.split("");
  phone.splice(3, 0, " (");
  phone.splice(7, 0, ") ");
  phone.splice(11, 0, " ");
  phone.splice(14, 0, " ");
  return (
    <div className={`${style.card} `}>
      <div className={style.UserPhoto}>
        <img src={photo || userPhotoMock} alt="User Photo" />
      </div>
      <div className={style.tooltipBox}>
        <div className={style.name}>{name}</div>
        <span className={style.tooltip}>{name}</span>
      </div>
      <div className={style.info}>
        <div className={style.position}>{position}</div>
        <div className={`${style.tooltipBox} ${style.tooltipBox_email}`}>
          <div className={style.email}>{email}</div>
          <span className={style.tooltip}>{email}</span>
        </div>
        <div className={style.phone}>{phone}</div>
      </div>
    </div>
  );
};

export default User;
