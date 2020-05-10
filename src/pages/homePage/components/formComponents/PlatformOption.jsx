import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
// import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { faXbox } from "@fortawesome/free-brands-svg-icons";
import { CONTEXT } from "../MainContent";
import ErrorMsgBox from "./ErrorMsgBox";

export default function PlatformOption({ i }) {
  const context_values = useContext(CONTEXT);

  // console.log(context_values);

  const {
    areFortniteRadiosEmpty,
    areOwRadiosEmpty,
    setAreFortniteRadiosEmpty,
    setAreOwRadiosEmpty,
  } = context_values;

  // useEffect(() => {

  // }, [])

  // function handleAdditionOptionsFocus() {
  //   // console.log("focused");
  // }

  const wrapper_className = i === "fortnite" ? "fortnite" : "ow";

  const PCinputID = i === "fortnite" ? "fortnite-pc-input" : "ow-pc-input";
  const XBOXinputID =
    i === "fortnite" ? "fortnite-xbox-input" : "ow-xbox-input";
  const PSNinputID = i === "fortnite" ? "fortnite-psn-input" : "ow-psn-input";

  const radio_name =
    i === "fortnite" ? "platform-radio-fortnite" : "platform-radio-ow";

  const radio_className =
    i === "fortnite" ? "fortnite-radio-btn" : "ow-radio-btn";

  function handleRemoveRadioError(className) {
    if (className.includes("fortnite")) {
      setAreFortniteRadiosEmpty(false);
    } else {
      setAreOwRadiosEmpty(false);
    }
  }

  return (
    <div className={`platform-for-${wrapper_className}`}>
      {/* <div onClick={testFunc}>test</div> */}
      <div className="radio-btn pc" title="Desktop">
        <input
          type="radio"
          id={PCinputID}
          // id="fortnite-pc-input"
          className={radio_className}
          name={radio_name}
          value="pc"
          onClick={(e) => handleRemoveRadioError(e.target.className)}
          required
        />
        <label htmlFor={PCinputID}>
          <FontAwesomeIcon
            icon={faDesktop}
            className="radio-icon"
          ></FontAwesomeIcon>
        </label>
      </div>
      <div className="radio-btn xbox" title="Xbox">
        <input
          type="radio"
          id={XBOXinputID}
          name={radio_name}
          className={radio_className}
          value="xbl"
          onClick={(e) => handleRemoveRadioError(e.target.className)}
          required
        />
        <label htmlFor={XBOXinputID}>
          <FontAwesomeIcon
            icon={faXbox}
            className="radio-icon"
          ></FontAwesomeIcon>
        </label>
      </div>
      <div className="radio-btn psn" title="Playstation">
        <input
          type="radio"
          id={PSNinputID}
          name={radio_name}
          className={radio_className}
          value="psn"
          onClick={(e) => handleRemoveRadioError(e.target.className)}
          required
        />
        <label htmlFor={PSNinputID}>
          <FontAwesomeIcon
            icon={faPlaystation}
            className="radio-icon"
          ></FontAwesomeIcon>
        </label>
      </div>
      {areFortniteRadiosEmpty && i === "fortnite" ? (
        <ErrorMsgBox forWhat={"radioErr"}></ErrorMsgBox>
      ) : areOwRadiosEmpty && i === "ow" ? (
        <ErrorMsgBox forWhat={"radioErr"}></ErrorMsgBox>
      ) : undefined}
    </div>
  );
}
