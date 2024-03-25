import {forwardRef, useImperativeHandle, useRef} from 'react';
import { createPortal } from 'react-dom';

// modal is just an on-screen bit of dialog

// to pass in a ref from another component...
// we must wrap our receiving component in a forwardRef...
// which receives and extra prop called 'ref'.

// this will be the ref prop we set on our component (TimerChallenge)
const ResultModal = forwardRef(function ResultModal({ targetTime, timeRemaining, onReset }, ref) {
  const dialog = useRef();

  const userLost = timeRemaining <= 0;
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  // define properties and methods that should be available outside components
  // usually not necessary as you'll use props
  // first arg is our ref, second is the function to be executed
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  // dialog prop is by defuault invisible, so we can give it className 'open'...
  // or call the method on dialog to show when wanted in TimerChallenge component (dialog.current.showModal())
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      {/*  a feature of js where dialog will close automaticakky if button is provided */}
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
})

export default ResultModal;
