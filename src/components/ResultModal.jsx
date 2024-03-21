import {forwardRef} from 'react';

// modal is just an on-screen bit of dialog

// to pass in a ref from another component...
// we must wrap our receiving component in a forwardRef...
// which receives and extra prop called 'ref'.

// this will be the ref prop we set on our component (TimerChallenge)
const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {

  // dialog prop is by defuault invisible, so we can give it className 'open'...
  // or call the method on dialog to show when wanted in TimerChallenge component (dialog.current.showModal())
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      {/*  a feature of js where dialog will close automaticakky if button is provided */}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
})

export default ResultModal;
