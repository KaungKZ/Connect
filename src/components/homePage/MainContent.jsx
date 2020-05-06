import React, { useState } from "react";
import InputList from "./InputList";
// import MainApp from "../mainPage/MainApp";
import { Redirect } from "react-router-dom";

export default function MainContent() {
  // console.log(props);
  // const theme = useContext(CONTEXT);

  // console.log(theme);

  const [redirect, setRedirect] = useState(false);
  const [usernames, setUsernames] = useState([]);
  // const history = useHistory();
  // console.log(redirect);

  function handleOnSubmit(e) {
    e.preventDefault();
    setUsernames([
      {
        facebook: "kaung",
      },
    ]);
    // console.log(e.target);
    setRedirect(true);
  }

  function renderRedirect() {
    if (redirect) {
      // console.log(usernames);
      return (
        <Redirect
          push
          to={{
            pathname: "/app",
            state: usernames,
          }}
        ></Redirect>
      );
    }
  }

  return (
    <section className="connect-box">
      <div className="container">
        <div className="title">
          <p>Start Connecting with social medias !</p>
        </div>
        <div className="box">
          <div className="inputs">
            <form action="" className="input-form" onSubmit={handleOnSubmit}>
              {Array(4)
                .fill("")
                .map((input, i) => {
                  return <InputList key={i} i={i}></InputList>;
                })}
              {/* <Link to="/app" className="submit-link"> */}
              {renderRedirect()}
              <button type="submit" className="submit-btn">
                Go
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
