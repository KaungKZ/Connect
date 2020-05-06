import React from "react";
import { Icon } from "@iconify/react";
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled";
// import facebookRect from "@iconify/icons-brandico/facebook-rect";
// import { Icon, InlineIcon } from "@iconify/react";
import facebookRect from "@iconify/icons-brandico/facebook-rect";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
import youtubeFilled from "@iconify/icons-ant-design/youtube-filled";

export default function Bg_icons() {
  return (
    <div className="bg-icons">
      <div className="icon icon-1">
        <Icon
          icon={twitterCircleFilled}
          style={{ color: "#747474", fontSize: "72px" }}
        />
      </div>
      <div className="icon icon-2">
        <Icon
          icon={facebookRect}
          style={{ color: "#747474", fontSize: "55px" }}
        />
      </div>
      <div className="icon icon-3">
        <Icon
          icon={instagramFilled}
          style={{ color: "#747474", fontSize: "84px" }}
        />
      </div>
      <div className="icon icon-4">
        <Icon
          icon={youtubeFilled}
          style={{ color: "#747474", fontSize: "82px" }}
        />
      </div>
      <div className="icon icon-5">
        <Icon
          icon={twitterCircleFilled}
          style={{ color: "#747474", fontSize: "72px" }}
        />
      </div>
      <div className="icon icon-6">
        <Icon
          icon={facebookRect}
          style={{ color: "#747474", fontSize: "55px" }}
        />
      </div>
      <div className="icon icon-7">
        <Icon
          icon={instagramFilled}
          style={{ color: "#747474", fontSize: "84px" }}
        />
      </div>
      <div className="icon icon-8">
        <Icon
          icon={youtubeFilled}
          style={{ color: "#747474", fontSize: "82px" }}
        />
      </div>
    </div>
  );
}
