import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef()
  const dialog = useRef();
  const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000);

  const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;

  if(timeRemaning <= 0) {
    clearInterval(timer.current);
    // setTimeRemaning(targetTime * 1000);
    dialog.current.open();
  }

  function handelReset() {
    setTimeRemaning(targetTime * 1000);
  }
//   const [timerExpired, setTimerExpired] = useState(false);

  //   let timer;

  function handelStart() {
    timer.current = setInterval(() => {
        setTimeRemaning(prevTimeRemaning => prevTimeRemaning - 10)
    }, 10); 

    // setTimerStarted(true);
  }

  function handelStop() {
    // clearTimeout(timer.current);
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
    {/* {timerExpired && <ResultModal ref={dialog} result='lost' targetTime={targetTime}></ResultModal>} */}
    <ResultModal ref={dialog} remaningTime={timeRemaning} targetTime={targetTime} onReset={handelReset}></ResultModal>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerIsActive ? handelStop : handelStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timeRemaning ? "active" : undefined}>
          {timeRemaning ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
