import React, { useState ,useEffect} from "react";
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [stoppedtime, setStoppedTime] = useState(0);
  const handlePlay = () => {
    setStopped(false);
    setRun(true);
  }
  const handleStop = () => {
    setStopped(true);
    setStoppedTime(time);
    setRun(false);
    setTime(0);
  }
  const handlePause = () => {
    setRun(false);
  }
  useEffect(() => {
    if (run) {
      const id = setTimeout(() => {
        setTime(time + 1);
      }, 1000);

       return () => clearInterval(id);
    }
    
    }, [time,run])

  return (
    <div className="flex flex-col items-center justify-center w-[100] h-[100]">
      <h1 className="m-[120px] text-[100px]">{time}</h1>
      <div className="flex flex-col md:flex-row">
        <button
          className=" w-[70vw] md:w-[10vw] h-[40px] bg-black border text-white m-1 hover:bg-white hover:text-black hover:border-black"
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="w-[70vw] md:w-[10vw]  h-[40px] bg-black border text-white m-1 hover:bg-white hover:text-black hover:border-black"
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="w-[70vw] md:w-[10vw]  h-[40px] bg-black border text-white m-1 hover:bg-white hover:text-black hover:border-black"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
      {stopped && (
        <div>
          <p className="text-2xl m-5">
            Stopped at <span className=" text-red-600  font-semibold">{stoppedtime}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
