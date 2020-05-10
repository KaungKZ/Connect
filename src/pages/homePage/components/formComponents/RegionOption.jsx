import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function RegionOption() {
  // const [focused, setFocused] = useState(false);
  const selectRef = useRef();

  //const csgo_input = selectRef.current.parentNode.parentNode.parentNode.nextElementSibling;

  // console.log(focused);

  function handleOnFocus(e) {
    //console.log("focused in");

    const eParent = e.target.parentNode.parentNode;

    eParent.style.zIndex = "99";
    // eParent.style.PointerEvents = "all";

    // console.log(eParent);
  }
  function handleOnBlur(e) {
    //console.log("focused out");

    const eParent = e.target.parentNode.parentNode;
    eParent.style.zIndex = "auto";
  }

  return (
    // <div className="region-for-ow">
    <>
      <div
        className="region-for-ow select-box"
        // onClick={handleRemovePointerE}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        ref={selectRef}
        title="Region"
      >
        <div className="select-box__current" tabIndex="1">
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="0"
              value="kr"
              name="Ben"
              defaultChecked
            />
            <p className="select-box__input-text">KR</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="1"
              value="us"
              name="Ben"
              defaultChecked
            />
            <p className="select-box__input-text">US</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="2"
              value="eu"
              name="Ben"
              defaultChecked
            />
            <p className="select-box__input-text">EU</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="3"
              value="cn"
              name="Ben"
              defaultChecked
            />
            <p className="select-box__input-text">CN</p>
          </div>
          <div className="select-box__value">
            <input
              className="select-box__input"
              type="radio"
              id="4"
              value="global"
              name="Ben"
              defaultChecked
            />
            <p className="select-box__input-text">Global</p>
          </div>
          {/* <img
            class="select-box__icon"
            src={arrowUp}
            alt="Arrow Icon"
            aria-hidden="true"
          /> */}

          <FontAwesomeIcon
            icon={faChevronUp}
            alt="Arrow Icon"
            className="select-box__icon"
          ></FontAwesomeIcon>
        </div>
        <ul className="select-box__list">
          <li>
            <label
              className="select-box__option"
              htmlFor="4"
              aria-hidden="true"
              title="Global"
            >
              Global
            </label>
          </li>
          <li>
            <label
              className="select-box__option"
              htmlFor="1"
              aria-hidden="true"
              title="America"
            >
              US
            </label>
          </li>
          <li>
            <label
              className="select-box__option"
              htmlFor="2"
              aria-hidden="true"
              title="Europe"
            >
              EU
            </label>
          </li>
          <li>
            <label
              className="select-box__option"
              htmlFor="3"
              aria-hidden="true"
              title="China"
            >
              CN
            </label>
          </li>
          <li>
            <label
              className="select-box__option"
              htmlFor="0"
              aria-hidden="true"
              title="Korea"
            >
              KR
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}
