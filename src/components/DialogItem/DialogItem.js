import React from "react";
import Time from "../Time/Time";
import ReadStatus from "../ReadStatus/ReadStatus";
import "./DialogItem.scss";
import classNames from "classnames";

const getAvatar = (avatar) => {
  if (avatar) {
    return (
      <img
        src="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        alt="avatar"
      />
    );
  } else {
    // make avatar
  }
};

const DialogItem = ({ user }) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item-online": user.isOnline,
      })}
    >
      <div className="dialogs__item-avatar">
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
        {getAvatar(user.avatar)}
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullname}</b>
          {/* <Time date={new Date()} /> */}
          <span>13:03</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>
            Я ща стрепсилс тебе куплю, потом заеду домой, покушаю, немного
            поботаю, и сяду наверно в доту играть
          </p>
          <ReadStatus isMe={true} isReaded={false} />
          {user.unreaded > 0 && (
            <div className="dialogs__item-count">{user.unreaded}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
