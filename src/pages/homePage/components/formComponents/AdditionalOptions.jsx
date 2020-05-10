import React from "react";

import PlatformOption from "./PlatformOption";
import RegionOption from "./RegionOption";

export default function AdditionalOptions({ i }) {
  return (
    <>
      {i === 1 || i === 2 ? (
        <div className="additional-options">
          {i === 1 ? (
            <PlatformOption i={i === 1 ? "fortnite" : "ow"}></PlatformOption>
          ) : i === 2 ? (
            <>
              <PlatformOption i={i === 1 ? "fortnite" : "ow"}></PlatformOption>

              <RegionOption></RegionOption>
            </>
          ) : undefined}
        </div>
      ) : undefined}
    </>
  );
}
