import { useState, useEffect } from "react";
import diceLogo from "./assets/icon-dice.svg";
import mobileLogo from "./assets/pattern-divider-mobile.svg";
import desktopLogo from "./assets/pattern-divider-desktop.svg";
import "./App.css";
function App() {
  const [{ id, advice }, setData] = useState({});

  function getAdvise() {
    const getRandomNumber = (() => Math.ceil(Math.random() * 224))()

    const adviceApi = `https://api.adviceslip.com/advice/${getRandomNumber}`;

    fetch(adviceApi)
      .then((response) => response.json())
      .then(({ slip }) => {
        if (!slip) {

          setData({ id: 0, advice: "" })

          return getAdvise()
        }
        setData(slip)
      })
      .catch(() => console.log("something went wrong"))
  }

  useEffect(() => {
    getAdvise();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h1>ADVICE #{id}</h1>
      <q>{advice}</q>
      <img src={mobileLogo} alt={"divider"} className="mobile-logo divider" />
      <img src={desktopLogo} alt={"divider"} className="desktop-logo divider" />
      <div className="dice-icon-container" onClick={getAdvise}>
        <img src={diceLogo} alt="dice-icon" className="dice-icon" />
      </div>
    </main>
  );
}

export default App;
