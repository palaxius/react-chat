import React, { useState, useRef, useEffect } from "react";
import "./Message.scss";
import classNames from "classnames";
import Time from "../Time/Time";
import ReadStatus from "../ReadStatus/ReadStatus";
import waveSvg from "../../assets/wave.svg";
import playSvg from "../../assets/play.svg";
import pauseSvg from "../../assets/pause.svg";
import convertCurrentTime from "../../utility/helpers/convertCurrentTime";

const AudioMessage = ({ audio }) => {
  const audioElem = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  useEffect(() => {
    audioElem.current.volume = "0.1";
    audioElem.current.addEventListener(
      "playing",
      () => {
        setPlaying(true);
      },
      false
    );
    audioElem.current.addEventListener(
      "ended",
      () => {
        setPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false
    );
    audioElem.current.addEventListener(
      "pause",
      () => {
        setPlaying(false);
      },
      false
    );
    audioElem.current.addEventListener("timeupdate", () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;
      setCurrentTime(audioElem.current.currentTime);
      setProgress((audioElem.current.currentTime / duration) * 100);
    });
  }, []);

  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audio} preload="auto"></audio>
      <div
        className="message__audio-progress"
        style={{ width: progress + "%", height: "100%" }}
      ></div>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {isPlaying ? (
              <img src={pauseSvg} alt="pause icon" />
            ) : (
              <img src={playSvg} alt="play icon" />
            )}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="wave icon" />
        </div>
        <span className="message__audio-duration">
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  );
};

const Message = ({
  audio,
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => {
  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--image": attachments && attachments.length === 1,
        "message--is-audio": audio,
      })}
    >
      <div className="message__content">
        {/* <ReadStatus isMe={isMe} isReaded={isReaded} /> */}
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>

        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
              {audio && <AudioMessage audio={audio} />}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item, index) => (
                <div key={index} className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}
          {date && (
            <div className="message__date">
              <Time date={date} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// const Message1 = ({
//   avatar,
//   user,
//   text,
//   date,
//   isMe,
//   isReaded,
//   attachments,
//   isTyping,
// }) => {
//   return (
//     <div
//       className={classNames("message", {
//         "message--isme": isMe,
//         "message--is-typing": isTyping,
//         "message--image": attachments && attachments.length === 1,
//       })}
//     >
//       <div className="message__content">
//         <ReadStatus isMe={isMe} isReaded={isReaded} />
//         <div className="message__avatar">
//           <img src={avatar} alt={`Avatar ${user.fullname}`} />
//         </div>

//         <div className="message__info">
//           {(text || isTyping) && (
//             <div className="message__bubble">
//               {text && <p className="message__text">{text}</p>}
//               {isTyping && (
//                 <div className="message__typing">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </div>
//               )}
//             </div>
//           )}

//           <div className="message__attachments">
//             {attachments &&
//               attachments.map((item, index) => (
//                 <div key={index} className="message__attachments-item">
//                   <img src={item.url} alt={item.filename} />
//                 </div>
//               ))}
//           </div>
//           {date && (
//             <div className="message__date">
//               <Time date={date} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

Message.defaultProps = {
  user: {},
};

export default Message;
