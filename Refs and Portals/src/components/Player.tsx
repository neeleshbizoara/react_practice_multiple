import { useRef, useState } from "react";

export default function Player() {
  const  playerName = useRef<HTMLInputElement>(null);
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handelClick() {
    if(playerName.current){
      setEnteredPlayerName(playerName?.current?.value)
      playerName.current.value = '';
    }
  } 

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown'} entity</h2>
      <p>
        <input ref={playerName} type="text"/> 
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
