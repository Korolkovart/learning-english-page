import React, { useState, useEffect } from "react";
import vegan from "../../podcast/vegan_story.mp3";
import pauseBtn from "../../img/pause.png";
import playBtn from "../../img/play.png";
import Player from "./Player";
import moment from "moment";
import "moment-duration-format";

import s from "./Audio.module.css";

const Audio = () => {
  const moment = require("moment");
  require("moment-duration-format");

  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [clickedTime, setClickedTime] = useState();

  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  const PlayPauseBtn = () => {
    if (!playing) {
      document.getElementById("audio").play();
    } else if (playing) {
      document.getElementById("audio").pause();
    }
  };

  useEffect(() => {
    const audio = document.getElementById("audio");

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };
    const setAudioTime = () => setCurTime(audio.currentTime);
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  });

  return (
    <div className={s.wrapper}>
      <div>
        <span className={s.text}>Play the audio - Listening</span>
        <div className={s.playerWrapper}>
          <audio id="audio" className={s.player}>
            <source src={vegan} type="audio/mpeg" />
            Your browser does not support the <code>audio</code> element.
          </audio>

          <button
            className={s.btn}
            onClick={() => {
              toggle();
              PlayPauseBtn();
            }}
          >
            {playing ? (
              <img src={pauseBtn} className={s.pauseBtn} alt="Button: Pause" />
            ) : (
              <img src={playBtn} className={s.playBtn} alt="Button: Play" />
            )}
          </button>
          <Player
            curTime={curTime}
            duration={duration}
            onTimeUpdate={(time) => setClickedTime(time)}
          />
        </div>
      </div>
    </div>
  );
};

export default Audio;
