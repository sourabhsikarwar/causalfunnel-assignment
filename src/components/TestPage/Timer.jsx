const Timer = ({ minutes, seconds }) => {
  return (
    <div className="bg-gray-100 shadow rounded p-4 flex flex-row gap-2 justify-between items-center">
      <div className="font-bold text-sky-900 text-xl">Timer</div>
      <div className="flex items-center justify-center gap-2">
        <span className="bg-sky-900 rounded shadow text-white w-12 h-12 flex items-center justify-center">
          {minutes}
        </span>
        <span className="font-bold">:</span>
        <span className="bg-sky-900 rounded shadow text-white w-12 h-12 flex items-center justify-center">
          {seconds}
        </span>
      </div>
    </div>
  );
};

export default Timer;
