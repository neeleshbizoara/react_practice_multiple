import Binding from './components/Binding.js';
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.js';

function App() {
  
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}></TimerChallenge>
        <TimerChallenge title="Not Easy" targetTime={5}></TimerChallenge>
        <TimerChallenge title="Getting tough" targetTime={10}></TimerChallenge>
        <TimerChallenge title="Pros only" targetTime={10}></TimerChallenge>
      </div>
      <Binding></Binding>
    </>
  );
}

export default App;
