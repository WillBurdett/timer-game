import { useState, useRef } from "react";

export default function Player() {
const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick(){
    // useRef ALWAYS have a current, and ONLY current value with all your info
    // through 'current', you then have access to built in methods e.g. 'click()' on <input type="file" />
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = '';
  }

  return (
    <section id="player">
      {/* output enteredPlayerName if truthy, 'unknow entity' if falsy */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
