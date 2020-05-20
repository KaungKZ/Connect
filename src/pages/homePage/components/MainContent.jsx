import React, { useState, createContext } from "react";
import InputList from "./formComponents/InputList";
// import MainApp from "../mainPage/MainApp";
import { Redirect } from "react-router-dom";

export const CONTEXT = createContext();

export default function MainContent() {
  // console.log(props);
  // const theme = useContext(CONTEXT);

  // console.log(theme);

  const [redirect, setRedirect] = useState(false);
  // const [usernames, setUsernames] = useState({});

  const [dotaInputs, setDotaInputs] = useState({});
  const [fortniteInputs, setFortniteInputs] = useState({});
  const [owInputs, setOwInputs] = useState({});
  const [csgoInputs, setCsgoInputs] = useState({});

  const [areInputsEmpty, setAreInputsEmpty] = useState(false);
  const [areFortniteRadiosEmpty, setAreFortniteRadiosEmpty] = useState(null);
  const [areOwRadiosEmpty, setAreOwRadiosEmpty] = useState(null);

  const [focusOnFortnite, setFocusOnFortnite] = useState(false);
  const [focusOnOw, setFocusOnOw] = useState(false);
  const [bothFocus, setBothFocus] = useState(false);

  // console.log(areInputsEmpty);

  function handleOnSubmit(e) {
    e.preventDefault();

    // console.log(e);
    let emptyValue = 0;

    const inputs = e.target.querySelectorAll(".username-input");

    inputs.forEach((input) => {
      if (input.value === "") {
        emptyValue += 1;
      }
    });

    if (emptyValue === 4) {
      setAreInputsEmpty(true);
      return;
    }

    const fortnite_radioBtns = e.target.querySelectorAll(".fortnite-radio-btn");
    const ow_radioBtns = e.target.querySelectorAll(".ow-radio-btn");
    const ow_regions = e.target.querySelectorAll(".select-box__input");

    const fortnitePlatform = [...fortnite_radioBtns].find(
      (radio) => radio.checked
    );
    const owPlatform = [...ow_radioBtns].find((radio) => radio.checked);

    if (
      inputs[1].value &&
      !fortnitePlatform &&
      inputs[2].value &&
      !owPlatform
    ) {
      setAreFortniteRadiosEmpty(true);
      setAreOwRadiosEmpty(true);
      setBothFocus(true);
      return;
    }

    if (inputs[1].value && !fortnitePlatform) {
      setAreFortniteRadiosEmpty(true);
      setFocusOnFortnite(true);
      return;
    }

    if (inputs[2].value && !owPlatform) {
      setAreOwRadiosEmpty(true);
      setFocusOnOw(true);
      return;
    }

    const owRegion = [...ow_regions].find((radio) => radio.checked);

    setDotaInputs({
      username: inputs[0].value ? inputs[0].value : null,
    });

    setFortniteInputs({
      username: inputs[1].value ? inputs[1].value : null,
      platform: fortnitePlatform ? fortnitePlatform.value : null,
    });

    setOwInputs({
      username: inputs[2].value ? inputs[2].value.replace(/#/gm, "-") : null,
      platform: owPlatform ? owPlatform.value : null,
      region: owRegion ? owRegion.value : null,
    });

    setCsgoInputs({
      username: inputs[3].value ? checkAndGetSteamID(inputs[3].value) : null,
    });

    setRedirect(true);
  }

  function checkAndGetSteamID(val) {
    if (val.includes("http")) {
      return val.replace(/\D/g, "");
    } else {
      return val;
    }
  }

  // function calculateFortnitePlatform () {

  // }

  // function showError() {}

  function renderRedirect() {
    if (redirect) {
      // console.log(usernames);
      return (
        <Redirect
          push
          to={{
            pathname: "/dashboard",
            state: { dotaInputs, fortniteInputs, owInputs, csgoInputs },
          }}
        ></Redirect>
      );
    }
  }

  const contextValues = {
    areInputsEmpty,
    setAreInputsEmpty,
    setAreFortniteRadiosEmpty,
    setAreOwRadiosEmpty,
    areFortniteRadiosEmpty,
    areOwRadiosEmpty,
    focusOnFortnite,
    setFocusOnFortnite,
    focusOnOw,
    setFocusOnOw,
    bothFocus,
    setBothFocus,
  };

  return (
    <CONTEXT.Provider value={contextValues}>
      <section className="connect-box">
        <div className="container">
          <div className="title">
            <p>Start Connecting with popular games !</p>
          </div>
          <div className="box">
            <div className="inputs">
              <form
                action=""
                className="input-form"
                onSubmit={handleOnSubmit}
                noValidate
              >
                <div className="wrapper-content">
                  {Array(4)
                    .fill("")
                    .map((_, i) => {
                      return <InputList key={i} i={i}></InputList>;
                    })}
                  {/* <Link to="/app" className="submit-link"> */}
                </div>
                {renderRedirect()}
                <button
                  type="submit"
                  className="submit-btn"
                  // style={{
                  //   cursor: `${areInputsEmpty ? "not-allowed" : "pointer"}`,
                  // }}
                >
                  Go
                </button>
                {/* </Link> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </CONTEXT.Provider>
  );
}
