import React from "react";
import moment from "moment";
import "moment-duration-format";

import s from "./Audio.module.css";

const Player = (props) => {
  const { duration, curTime, onTimeUpdate } = props;

  const moment = require("moment");
  require("moment-duration-format");

  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const progressLine = document.getElementById("progress-js");
    const progressStart =
      progressLine.getBoundingClientRect().left + window.scrollX;
    const progressWidth = progressLine.offsetWidth;
    const clickPositionProgress = clickPositionInPage - progressStart;
    const timePerPixel = duration / progressWidth;
    return timePerPixel * clickPositionProgress;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className={s.progress}>
      <span className={s.progress__time}>{formatDuration(curTime)}</span>
      <div
        id="progress-js"
        className={s.progress__line}
        style={{
          background: `linear-gradient(to right, black ${curPercentage}%, grey 0)`,
        }}
        onMouseDown={(e) => handleTimeDrag(e)}
      >
        <span
          className={s.progress__knob}
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className={s.progress__time}>{formatDuration(duration)}</span>
    </div>
  );
};

export default Player;
