import Home from "./components/pages/Home";
import LeaderForm from "./components/leaderboard/LeaderForm";
import LeaderState from "./context/leaderboard/LeaderState";

function App() {
  return (
    <LeaderState>
      <div className="mt-3">
        <Home />
        <LeaderForm />
      </div>
    </LeaderState>
  );
}

export default App;
