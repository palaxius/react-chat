import React from "react";
// import Time from "../Time/Time";
import ReadStatus from "../ReadStatus/ReadStatus";
import "./DialogItem.scss";
import classNames from "classnames";
import { format, isToday } from "date-fns";
import Avatar from "../Avatar/Avatar";

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "dd.MM.yyyy");
  }
};

const DialogItem = ({ user, unreaded, isMe, created_at, text }) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item-online": user.isOnline,
      })}
    >
      <div className="dialogs__item-avatar">
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
        <Avatar user={user}/>
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullname}</b>
          <span>
            {/* <Time date={} /> */}
            {getMessageTime(created_at)}
          </span>

          {/* <span>13:03</span> */}
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{text}</p>
          {isMe && <ReadStatus isMe={true} isReaded={false} />}
          {unreaded > 0 && (
            <div className="dialogs__item-count">{unreaded}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
