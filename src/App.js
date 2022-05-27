import Home from "./components/pages/Home";
import LeaderForm from "./components/leaderboard/LeaderForm";
import LeaderState from "./context/leaderboard/LeaderState";
import AlertState from "./context/alert/AlertState";
import Alerts from "./components/layout/Alerts";

function App() {
  return (
    <LeaderState>
      <AlertState>
        <div className="mt-3">
          <div className="container">
            <Alerts />
          </div>
          <Home />
          <LeaderForm />
        </div>
      </AlertState>
    </LeaderState>
  );
}

export default App;
