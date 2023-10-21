import { useEffect } from "react";
import { useProfile } from "../contexts/ProfileContext";

function Timer() {
  const { dispatch, secondsRemaining } = useProfile();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="text-[1.8rem]  border-2 border-neutral-500 rounded-full text-left py-2 sm:py-3 px-8 sm:px-12">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
