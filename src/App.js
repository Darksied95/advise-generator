import "./App.css";
import diceLogo from "./assets/icon-dice.svg";
import mobileLogo from "./assets/pattern-divider-mobile.svg";
import desktopLogo from "./assets/pattern-divider-desktop.svg";
function App() {
  return (
    <main>
      <h1>ADVICE #117</h1>
      <q>
        It is easy to sit up and take notice, what's difficult is getting up and
        taking action.
      </q>
      <img src={mobileLogo} alt={"divider"} className="mobile-logo divider" />
      <img src={desktopLogo} alt={"divider"} className="desktop-logo divider" />
      <div className="dice-icon-container">
        <img src={diceLogo} alt="dice-icon" className="dice-icon" />
      </div>
    </main>
  );
}

export default App;
