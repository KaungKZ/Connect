import React from "react";
import covid from "../../../images/covid.png";
import footer_bg from "../../../images/footer bg shape.svg";
import copyright from "../../../images/copyright.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="donate">
          <img src={covid} alt="" />
          <a href="https://covid19responsefund.org/">Donate</a>
        </div>
        <div className="app-info">
          <p>
            Connect is a free tool created by{" "}
            <a href="https://github.com/KaungKZ">KaungKZ</a>, to connect with
            your social media accounts and get to know about your account
            activities.
          </p>

          <div className="copyright">
            <img src={copyright} alt="" />
            <span className="copyright-text">
              2020, <a href="https://github.com/KaungKZ">KaungKZ</a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bg">
        <img src={footer_bg} alt="" />
      </div>
    </footer>
  );
}
