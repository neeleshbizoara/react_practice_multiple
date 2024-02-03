import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef()
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  //   let timer;

  function handelStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    //   dialog.current.showModal();
    dialog.current.open();
    }, targetTime * 1000); 

    setTimerStarted(true);
  }

  function handelStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
    {/* {timerExpired && <ResultModal ref={dialog} result='lost' targetTime={targetTime}></ResultModal>} */}
    <ResultModal ref={dialog} result='lost' targetTime={targetTime}></ResultModal>
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerStarted ? handelStop : handelStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
