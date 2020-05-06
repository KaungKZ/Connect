import React from "react";
import Facebook from "../../images/facebook.png";
import Youtube from "../../images/youtube.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/instagram.png";

export default function InputList({ i }) {
  let ImgsArr = [Facebook, Youtube, Twitter, Instagram];
  let classNameArr = ["facebook", "youtube", "twitter", "instagram"];

  return (
    <div className={`input input-${classNameArr[i]}`}>
      <img src={ImgsArr[i]} alt="" />
      <div className="wrapper-input">
        <input
          type="text"
          className={`username-input ${classNameArr[i]}-username`}
          autoComplete="off"
          required
        />
        <label className="input-label">
          <span className="username">Enter username</span>
        </label>
      </div>
    </div>
  );
}
